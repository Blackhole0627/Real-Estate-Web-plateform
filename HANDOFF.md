# Onker Home — Project Handoff

State of the project as of 2026-08-09 (commit `959449f`). Read this together
with `AGENTS.md` (Next.js version notes) before continuing work on a new
machine or session.

## What this is

Stage-1 **landing/introduction site** for Onker Home (ONKERHOME E.I.R.L.),
a boutique real-estate agency in Santo Domingo, Dominican Republic. Purpose:
introduce the business, rank/convert for Google Ads (international targeting),
and funnel every interested visitor to WhatsApp (`wa.me/18493426066`).
Spanish only for now; English is a Phase-2 item. NOT a full platform yet —
no CMS, no admin panel (admin panel is NOT in the agreed scope; do not build
it without an explicit new agreement).

## Stack and structure

Next.js 16 (App Router) + TypeScript + Tailwind 4. Fully static output
(SSG, 44 routes). All styling in `src/app/globals.css` (one design system,
monochrome black/white, Lora + Inter via next/font).

- **Data-access layer: `src/lib/repo.ts` — the single door to all content.**
  Pages call its async functions and pass props down; no component imports a
  data file directly. At the database milestone (Supabase planned), only the
  bodies of these functions change.
- Mock data sources behind the repo: `src/data/listings.ts` (22 properties,
  photos in `public/assets/listings/<slug>/1..n.jpg`), `src/data/content.ts`
  (18 SAMPLE testimonials — replace with real ones before heavy Ads spend),
  `src/data/team.ts` (4 members), `src/data/site.ts` (business facts, the
  production origin `site.url`, Search Console token slot).
- Blog: text files in `src/data/news/<slug>.txt` (first line = title, second
  paragraph = lede) + cover `public/assets/news/<slug>.jpg`, registered in
  `src/lib/news.ts` (NEWS array, newest first). Publishing a new article =
  drop 2 files + 1 registry line. Ask the client for 1600×900 JPG covers.
- New property workflow: add entry to `listings.ts` with
  `listedAt: "yyyy-mm-dd"` (drives the 30-day "Nuevo" badge and newest-first
  homepage ordering), copy photos to `public/assets/listings/<slug>/`.

## Routes

`/` (hero search → `/propiedades?q=`), `/propiedades` (+ filter/search,
WhatsApp empty-state), `/propiedades/[slug]` (gallery lightbox, JSON-LD,
WhatsApp CTA), `/nosotros` (founder story, team, click-to-play sky video),
`/testimonios` (paginated), `/actualidad` + `/actualidad/[slug]` (blog),
`sitemap.xml`, `robots.txt`.

## Deployment

Currently auto-deploys to Vercel (Hobby — NON-COMMERCIAL, must move before
Ads launch) at real-estate-web-plateform.vercel.app from
github.com/Blackhole0627/Real-Estate-Web-plateform (branch `main`).
Target domain: **onkerhomes.com** (client's existing domain, currently on
Wix — client confirmed reuse; needs DNS repoint, check MX records first).
`site.url` in `src/data/site.ts` already set to it.

VPS run: `npm ci && npm run build && npm start` (port 3000) behind
nginx/caddy with TLS. Node 20+.

## Commit rules (client-facing repo)

Author commits as `Blackhole0627 <Blackhole0627@users.noreply.github.com>`
(repo-local git config). No AI attribution or co-author lines.

## Open items (blockers before Ads launch)

1. Hosting decision (VPS or paid tier) — Vercel Hobby is non-commercial.
2. Hero video/poster + join background are third-party media (IS Luxury rip,
   swapped in at the developer's direction) — replace with owned/licensed
   media before commercial launch. Licensed fallback exists in git history
   (commit `bdd6a23` era assets).
3. Real testimonials from the client (current 18 are marked samples).
4. Data gaps: Residencial Soraya I price; identity of two unlisted
   properties ("TIPO C" units, furnished 142.7 m² apt).
5. Google: Search Console verification (`site.ts` slot), Analytics/Ads
   conversion tracking (WhatsApp click = conversion), during a call with
   the client's account.
6. Client requested a business mailbox `info@onkerhome.com` — note the
   domain is onkerhome**s**.com; clarify which spelling, then set up email
   hosting (e.g. Zoho/Google Workspace) and adjust MX when touching DNS.

## Source material (NOT in this repo)

Client-provided raw folders live outside the repo on the dev machine
(`client's new resources that he provided/`, `wonderful onkerhome/news/`,
reference-site mirrors). They are only needed to process NEW material;
everything the site uses is already committed under `public/` and
`src/data/`.
