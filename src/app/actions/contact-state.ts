/**
 * Shared types + constants for the contact server action.
 *
 * Imported by both the client component (ContactForm) and the server action
 * (`contact.ts`). It must NOT carry a `"use server"` directive — Next.js
 * rejects "use server" files that export anything other than async functions,
 * so the initial-state object + types live here, in one place, to keep the
 * form/action contract in sync.
 */

/** Allowed values for the "Projektart" select — kept in sync with the form. */
export const PROJECT_TYPES = [
  "Branding & Logo",
  "Webdesign",
  "Printdesign",
  "Illustration",
  "Sonstiges",
] as const;

export type ProjectType = (typeof PROJECT_TYPES)[number];

/**
 * User-facing field values echoed back into the form on an "error" response,
 * so a validation miss doesn't wipe everything the visitor typed.
 */
export type ContactFieldValues = {
  name?: string;
  email?: string;
  projectType?: string;
  message?: string;
  consent?: boolean;
};

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Record<string, string>;
  values?: ContactFieldValues;
};

export const CONTACT_INITIAL_STATE: ContactState = { status: "idle" };
