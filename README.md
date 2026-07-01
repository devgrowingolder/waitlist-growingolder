# Growing Older — Waitlist

A warm, calm waitlist landing page for **Growing Older**, an app that helps
families and older adults navigate aging together — finding trusted **senior
care** and **senior living**, organizing the everyday, and staying close, all
in one place.

The design uses a warm **egg-white** canvas with calm greens and soft honey
accents, and real, warm lifestyle photography — intentionally approachable for
older adults **and** their adult children: large readable type, plain language,
and gentle motion.

## Editing content

- All copy lives in **`config/general.ts`** — hero, stats, support categories,
  testimonials, how-it-works, families band, FAQ, footer, and the MailerLite
  form URL.
- Colors, fonts, radii, and shadows live in **`tailwind.config.ts`** and
  **`app/globals.css`**.
- Images are in **`public/`** (`hero.jpg`, `care-home.jpg`, `connected.jpg`);
  the logo mark is `public/logo-mark.svg` and the wordmark is set in type in
  `components/Atoms/Logo.tsx`.

## Design system

- **Palette:** egg-white surfaces (`eggshell`, `cream`), deep/bright greens
  (`forest #0B663D`, `leaf #13AA65`), signature `mint`, and a warm `honey`
  accent — with near-black `ink` text for WCAG-AA contrast.
- **Type:** *Fraunces* (soft serif) for headlines, *Hanken Grotesk* for body.
- **Accessibility:** semantic landmarks, focus-visible rings on interactive
  elements, an accessible FAQ accordion, `prefers-reduced-motion` support, and
  a base font size tuned for readability.

## Email capture

Waitlist sign-ups post to **MailerLite**. Set your form URL in
`config.subscribeForm` (the account and form IDs are parsed from it).

## Tech stack

- **Next.js** (App Router) + **React**
- **Tailwind CSS**
- **MailerLite** for email subscription
- Optional **Google Analytics** via `NEXT_PUBLIC_GA_ID`

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

```bash
npm run build   # production build
npm run start   # serve the production build
```
