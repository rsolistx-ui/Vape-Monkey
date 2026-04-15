# Vape Monkey Website Redesign

Production-ready Next.js App Router marketing site for Vape Monkey (San Antonio, TX), focused on premium 21+ local retail positioning.

## 1) Install
```bash
npm install
```

## 2) Run locally
```bash
npm run dev
```
Then open `http://localhost:3000`.

## 3) Build for production
```bash
npm run build
npm run start
```

## 4) Where to update the logo file
Replace `public/logo.png` with the approved real Vape Monkey logo asset.
- Keep the filename exactly `logo.png` to avoid code changes.
- The logo is rendered in `components/logo-smoke.tsx`.

## 5) Where to edit colors
Primary visual system is in:
- `tailwind.config.ts` (`theme.extend.colors.brand`)
- `app/globals.css` (background gradients + smoke keyframes)

## 6) Where to edit page copy/content
Structured content files:
- `data/site.ts` (business contact/location/hours/navigation)
- `data/content.ts` (trust points, categories, FAQ entries)

Page-level copy sections:
- `app/page.tsx`
- `app/products/page.tsx`
- `app/vape-lounge/page.tsx`
- `app/about/page.tsx`
- `app/visit/page.tsx`
- `app/product-request/page.tsx`
- `app/faq/page.tsx`

## 7) Where smoke animation is controlled
- `components/logo-smoke.tsx` (smoke layer placement near device)
- `app/globals.css` (`.smoke`, delays, and `@keyframes smoke-float`)

Smoke is reduced for small screens and disabled for users with reduced motion preferences.

## 8) Where forms should connect to real endpoints
Current forms are UI-first and ready to connect:
- Product request form: `components/forms.tsx` posts to `app/api/product-request/route.ts`
- Visit inquiry form: `components/forms.tsx` (no backend binding yet)

Replace with real CRM/email/API handlers before launch.

## 9) Placeholder imagery notes
The redesign uses premium atmospheric styling and component shells. Replace placeholders/add real photography where needed while keeping:
- mature tone
- dark premium palette
- high-contrast accessibility
- no youth-oriented imagery

## 10) Compliance and content notes
- 21+ age gate appears at first visit (`components/age-gate.tsx`).
- Site intentionally avoids irresponsible health claims and ecommerce checkout.
