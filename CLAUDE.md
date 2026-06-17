# CLAUDE.md — grafowerk-website

Repo-level conventions for the Grafowerk marketing website. Read before working
here. This file is owned by this repo (Linus, frontend).

## What this is

Public marketing website for **Grafowerk** — a Grafik- & Designstudio. Currently
a **v0 scaffold**: a minimal, responsive placeholder landing page with a working
contact form. Real content, brand assets, and legal copy come later.

## Working directory rule

This repo lives at `~/Developer/projects/neckarshore-websites/grafowerk-website`.
It is a sibling of the other website repos under `neckarshore-websites/`. That
parent folder is **just a container**, not a git repo — every git command must
run from inside this repo. Start every Bash command with
`cd ~/Developer/projects/neckarshore-websites/grafowerk-website && …`.

## Tech stack (mirror of the neckarshore.ai house stack)

- Next.js 16 (App Router) · React 19 · TypeScript (strict)
- Tailwind CSS v4 via `@tailwindcss/postcss`
- Self-hosted fonts: Space Grotesk (display) + Inter (body) via `next/font/local`
- Mail: nodemailer (SMTP), env-gated
- Testing: Playwright (smoke + e2e); Perf: Lighthouse CLI
- Hosting: Vercel · DNS/domain: Hostinger

## Rules

1. **Mobile-first, responsive.** Lighthouse target 95+ on all metrics.
2. **Exact dependency versions** — no `^`/`~`. Use `npm install --save-exact`.
3. **Commit after each work block.** High-quality commit messages.
4. **Do NOT promote to production** without the user's explicit approval. Push to
   `main` → Vercel builds a preview; promotion is a separate, approved step.
5. **Visual acceptance is the user's call**, never the agent's. Build, show,
   describe — the user decides when a look is "done."
6. **Design tokens in `globals.css` are provisional** until real brand assets
   exist. Keep them token-based so a rebrand is an edit, not a refactor.

## Before go-live (tracked in README)

Real Impressum + Datenschutzerklärung, SMTP credentials in Vercel, real brand
assets, and actual content must all land before the site goes public.
