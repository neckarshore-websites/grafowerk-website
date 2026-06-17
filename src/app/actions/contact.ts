"use server";

import { readSmtpConfig, sendMail } from "@/lib/mailer";
import {
  PROJECT_TYPES,
  type ContactFieldValues,
  type ContactState,
} from "./contact-state";

/**
 * Contact Server Action for the Grafowerk website.
 *
 * Validation is server-side; the client-side `required` is only a UX hint.
 *
 * Anti-spam (v0 = honeypot only; Turnstile/captcha can be layered in later):
 *   - Hidden `website` honeypot field. Bots fill it, humans don't see it.
 *     If filled, we silently return success so the bot doesn't retry.
 *
 * GDPR: a consent checkbox is required — submitting without it is a validation
 * error. The visitor's message is sanitized against prompt-injection before it
 * ever leaves the server (defence-in-depth; incoming mail may later be piped
 * into an AI assistant).
 *
 * Mail transport: SMTP via nodemailer (lib/mailer.ts). Env vars — all required
 * to actually send (see `.env.example`):
 *   SMTP_HOST  SMTP_PORT  SMTP_USER  SMTP_PASS  SMTP_FROM  CONTACT_EMAIL_TO
 *
 * When SMTP is unconfigured:
 *   - development / preview → dry-run: log the would-be mail, return success.
 *   - production           → honest error (never a fake success that silently
 *     swallows a real visitor's message).
 */

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
const MAX_MESSAGE_LEN = 4000;
const MAX_FIELD_LEN = 200;

const TRANSPORT_FAILURE_MESSAGE =
  "Die Nachricht konnte gerade nicht übermittelt werden. Bitte schreiben Sie uns direkt an info@grafowerk.de.";

function clean(formData: FormData, key: string, max = MAX_FIELD_LEN): string {
  return String(formData.get(key) ?? "")
    .trim()
    .slice(0, max);
}

/**
 * Sanitize free text against prompt-injection. Real hardening belongs in the
 * AI consumer, not here — this strips LLM control tokens, role prefixes,
 * prompt-separator lines, and C0 control chars as defence-in-depth.
 */
function sanitizeText(s: string): string {
  return s
    .replace(/\r\n/g, "\n")
    .replace(/\r/g, "\n")
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, "")
    .replace(/\[\/?(INST|SYS)\]/gi, "")
    .replace(/<<\/?SYS>>/gi, "")
    .replace(/<\|(system|user|assistant|im_start|im_end|endoftext)\|>/gi, "")
    .replace(
      /^(system|assistant|human|ai|gpt|claude|ignore previous instructions?|ignore above|forget (previous|all)|new instructions?)\s*:\s*/gim,
      "",
    )
    .replace(/^[-=]{3,}\s*$/gm, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

export async function sendContact(
  _prevState: ContactState,
  formData: FormData,
): Promise<ContactState> {
  // ----- Honeypot ---------------------------------------------------
  if (clean(formData, "website")) {
    // Bot detected — pretend success so they don't retry differently.
    return { status: "success" };
  }

  // ----- Fields -----------------------------------------------------
  const name = clean(formData, "name");
  const email = clean(formData, "email");
  const projectTypeRaw = clean(formData, "projectType");
  const projectType = (PROJECT_TYPES as readonly string[]).includes(
    projectTypeRaw,
  )
    ? projectTypeRaw
    : "";
  const message = sanitizeText(clean(formData, "message", MAX_MESSAGE_LEN));
  const consent = formData.get("consent") === "on";

  const echoValues: ContactFieldValues = {
    name,
    email,
    projectType,
    message,
    consent,
  };

  const fieldErrors: Record<string, string> = {};
  if (!name) fieldErrors.name = "Bitte Namen angeben.";
  if (!email) fieldErrors.email = "Bitte E-Mail angeben.";
  else if (!EMAIL_RE.test(email))
    fieldErrors.email = "Bitte gültige E-Mail-Adresse angeben.";
  if (!message) fieldErrors.message = "Bitte Nachricht angeben.";
  if (!consent)
    fieldErrors.consent =
      "Bitte stimmen Sie der Verarbeitung Ihrer Daten zu.";

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: "Bitte Eingaben prüfen.",
      fieldErrors,
      values: echoValues,
    };
  }

  // ----- Build + send ----------------------------------------------
  const subject = `Kontaktanfrage von ${name}`;
  const textBody = [
    `Name:        ${name}`,
    `E-Mail:      ${email}`,
    `Projektart:  ${projectType || "—"}`,
    "",
    message,
  ].join("\n");

  const config = readSmtpConfig();
  const isProd = process.env.NODE_ENV === "production";

  if (!config) {
    if (isProd) {
      console.error(
        "[Grafowerk Contact] SMTP not configured in production — " +
          "set SMTP_HOST/SMTP_PORT/SMTP_USER/SMTP_PASS/SMTP_FROM/CONTACT_EMAIL_TO",
      );
      return {
        status: "error",
        message: TRANSPORT_FAILURE_MESSAGE,
        values: echoValues,
      };
    }
    // Dev / preview without configured SMTP → log and pretend success.
    console.log(
      `[Grafowerk Contact / dry-run no SMTP config]\nSubject: ${subject}\n\n${textBody}`,
    );
    return { status: "success" };
  }

  try {
    const { rejected } = await sendMail(config, {
      subject,
      text: textBody,
      replyTo: email,
    });
    if (rejected.length > 0) {
      console.error("[Grafowerk Contact] SMTP rejected recipient(s)", rejected);
      return {
        status: "error",
        message: TRANSPORT_FAILURE_MESSAGE,
        values: echoValues,
      };
    }
    return { status: "success" };
  } catch (err) {
    console.error("[Grafowerk Contact] SMTP send threw", err);
    return {
      status: "error",
      message: TRANSPORT_FAILURE_MESSAGE,
      values: echoValues,
    };
  }
}
