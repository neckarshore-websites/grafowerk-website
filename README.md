# grafowerk-website

Marketing website for **Grafowerk** — Grafik- & Designstudio.

Status: **v0 scaffold** — a minimal, responsive placeholder landing page with a
working contact form. Real content (services, work, about), brand assets, and
legal copy land in later iterations.

## Tech stack

Mirrors the neckarshore.ai house stack:

| Layer       | Choice                                              |
| ----------- | --------------------------------------------------- |
| Framework   | Next.js 16 (App Router) · React 19                  |
| Styling     | Tailwind CSS v4 (`@tailwindcss/postcss`)            |
| Language    | TypeScript (strict)                                 |
| Fonts       | Space Grotesk (display) + Inter (body), self-hosted |
| Mail        | nodemailer (SMTP, env-gated)                         |
| Testing     | Playwright (smoke + e2e)                             |
| Perf        | Lighthouse CLI                                       |
| Hosting     | Vercel                                               |

## Getting started

```bash
npm install
npm run dev          # http://localhost:3000
```

## Scripts

| Script                     | Purpose                                      |
| -------------------------- | -------------------------------------------- |
| `npm run dev`              | Dev server                                   |
| `npm run build`            | Production build                             |
| `npm run start`            | Serve the production build                   |
| `npm run lint`             | ESLint (eslint-config-next)                  |
| `npm run test:e2e`         | Full Playwright suite                        |
| `npm run test:smoke:local` | Smoke tests against local dev                |
| `npm run lighthouse`       | Lighthouse run vs. `localhost:3000` (dev up) |

## Contact form

The form posts to a Server Action (`src/app/actions/contact.ts`) that sends mail
via SMTP. Spam protection is a hidden honeypot field; a GDPR consent checkbox is
required.

- **Without SMTP env** → development logs the would-be mail and returns success;
  production returns an honest error (never a silent fake success).
- **To enable real delivery**, copy `.env.example` to `.env.local` (or set the
  vars in Vercel) and fill in `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`,
  `SMTP_FROM`, `CONTACT_EMAIL_TO`.

## Before go-live

- [ ] Real Impressum (`src/app/impressum/page.tsx`) — currently a stub
- [ ] Real Datenschutzerklärung (`src/app/datenschutz/page.tsx`) — currently a stub
- [ ] SMTP credentials configured in Vercel
- [ ] Real brand assets (logo, colors, fonts) replacing the provisional tokens
- [ ] Actual content + copy
