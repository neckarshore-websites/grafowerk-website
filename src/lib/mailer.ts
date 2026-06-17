import nodemailer from "nodemailer";
import type SMTPTransport from "nodemailer/lib/smtp-transport";

/**
 * SMTP mail transport for the contact form.
 *
 * Config comes entirely from env (see `.env.example`). `readSmtpConfig`
 * returns `null` when anything required is missing — callers decide how to
 * handle that (dev: dry-run; prod: honest error). Keeping the transport here,
 * out of the server action, keeps the action focused on validation + flow.
 */

export interface SmtpConfig {
  host: string;
  port: number;
  user: string;
  pass: string;
  from: string;
  to: string;
}

/** Read SMTP config from env. Returns null if any required value is missing. */
export function readSmtpConfig(): SmtpConfig | null {
  const host = process.env.SMTP_HOST;
  const portRaw = process.env.SMTP_PORT;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.SMTP_FROM;
  const to = process.env.CONTACT_EMAIL_TO;

  if (!host || !portRaw || !user || !pass || !from || !to) return null;

  const port = Number(portRaw);
  if (!Number.isFinite(port) || port <= 0 || port > 65535) return null;

  return { host, port, user, pass, from, to };
}

export interface MailPayload {
  subject: string;
  text: string;
  /** Reply-To: the visitor's address, so a reply goes straight back to them. */
  replyTo: string;
}

/**
 * Send a mail via SMTP. Throws on transport failure; returns the list of
 * rejected recipients (empty = fully delivered) so the caller can surface an
 * honest error instead of a false success.
 */
export async function sendMail(
  config: SmtpConfig,
  payload: MailPayload,
): Promise<{ rejected: (string | { address: string })[] }> {
  // Pin to the SMTPTransport.Options overload — the generic last overload
  // otherwise picks TransportOptions, which lacks host/port/secure.
  const transportOptions: SMTPTransport.Options = {
    host: config.host,
    port: config.port,
    secure: config.port === 465,
    auth: { user: config.user, pass: config.pass },
  };
  const transporter = nodemailer.createTransport(transportOptions);

  const info = await transporter.sendMail({
    from: config.from,
    to: config.to,
    replyTo: payload.replyTo,
    subject: payload.subject,
    text: payload.text,
  });

  return { rejected: info.rejected };
}
