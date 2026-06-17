"use client";

import Link from "next/link";
import { useActionState } from "react";
import { sendContact } from "@/app/actions/contact";
import {
  CONTACT_INITIAL_STATE,
  PROJECT_TYPES,
} from "@/app/actions/contact-state";

/**
 * Contact form for the Grafowerk landing page.
 *
 * Wraps the `sendContact` Server Action via useActionState. Spam protection =
 * hidden honeypot (Turnstile can be layered in later). GDPR consent checkbox
 * is required. Styled with the site's provisional monochrome tokens.
 */

const labelClass = "mb-1.5 block text-sm font-medium text-ink";
const fieldClass =
  "w-full rounded-lg border border-line bg-white px-4 py-3 text-base text-ink placeholder:text-muted focus:border-ink focus:outline-none focus:ring-1 focus:ring-ink";
const errorClass = "mt-1.5 text-sm text-red-600";

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(
    sendContact,
    CONTACT_INITIAL_STATE,
  );

  if (state.status === "success") {
    return (
      <div className="rounded-lg border border-ink/15 bg-subtle p-6">
        <p className="text-base text-ink">
          Danke für Ihre Nachricht — wir melden uns zeitnah zurück.
        </p>
      </div>
    );
  }

  return (
    <form
      action={formAction}
      noValidate
      className="flex flex-col gap-5 text-left"
    >
      {/* Honeypot — off-screen, bots fill it, humans don't see it. */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "-9999px",
          width: "1px",
          height: "1px",
          overflow: "hidden",
        }}
      >
        <label htmlFor="contact-website">Website (bitte leer lassen)</label>
        <input
          id="contact-website"
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div>
        <label htmlFor="contact-name" className={labelClass}>
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          required
          defaultValue={state.values?.name}
          aria-invalid={state.fieldErrors?.name ? true : undefined}
          className={fieldClass}
        />
        {state.fieldErrors?.name ? (
          <p className={errorClass}>{state.fieldErrors.name}</p>
        ) : null}
      </div>

      <div>
        <label htmlFor="contact-email" className={labelClass}>
          E-Mail
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          required
          defaultValue={state.values?.email}
          aria-invalid={state.fieldErrors?.email ? true : undefined}
          className={fieldClass}
        />
        {state.fieldErrors?.email ? (
          <p className={errorClass}>{state.fieldErrors.email}</p>
        ) : null}
      </div>

      <div>
        <label htmlFor="contact-project-type" className={labelClass}>
          Projektart <span className="text-muted">(optional)</span>
        </label>
        <select
          id="contact-project-type"
          name="projectType"
          defaultValue={state.values?.projectType ?? ""}
          className={fieldClass}
        >
          <option value="">Bitte wählen …</option>
          {PROJECT_TYPES.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="contact-message" className={labelClass}>
          Nachricht
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          required
          defaultValue={state.values?.message}
          aria-invalid={state.fieldErrors?.message ? true : undefined}
          className={`${fieldClass} resize-y`}
        />
        {state.fieldErrors?.message ? (
          <p className={errorClass}>{state.fieldErrors.message}</p>
        ) : null}
      </div>

      <div>
        <label
          htmlFor="contact-consent"
          className="flex items-start gap-3 text-sm text-muted"
        >
          <input
            id="contact-consent"
            name="consent"
            type="checkbox"
            defaultChecked={state.values?.consent}
            aria-invalid={state.fieldErrors?.consent ? true : undefined}
            className="mt-0.5 h-4 w-4 shrink-0 accent-ink"
          />
          <span>
            Ich habe die{" "}
            <Link href="/datenschutz" className="text-ink underline">
              Datenschutzerklärung
            </Link>{" "}
            gelesen und stimme der Verarbeitung meiner Angaben zur
            Kontaktaufnahme zu.
          </span>
        </label>
        {state.fieldErrors?.consent ? (
          <p className={errorClass}>{state.fieldErrors.consent}</p>
        ) : null}
      </div>

      {state.status === "error" && state.message ? (
        <p role="alert" className="text-sm text-red-600">
          {state.message}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={pending}
        className="inline-flex items-center justify-center self-start rounded-lg bg-accent px-8 py-3.5 text-base font-medium text-white transition-all duration-150 hover:bg-accent-hover hover:scale-[1.02] active:scale-[0.98] disabled:cursor-wait disabled:opacity-60 disabled:hover:scale-100"
      >
        {pending ? "Wird gesendet …" : "Nachricht senden"}
      </button>
    </form>
  );
}
