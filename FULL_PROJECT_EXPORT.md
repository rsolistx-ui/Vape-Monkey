# FULL PROJECT EXPORT

Source root: `/workspace/Vape-Monkey`

## File Order

- `.eslintrc.json`
- `.gitignore`
- `.gitkeep`
- `README.md`
- `app/about/page.tsx`
- `app/api/product-request/route.ts`
- `app/faq/page.tsx`
- `app/globals.css`
- `app/layout.tsx`
- `app/page.tsx`
- `app/product-request/page.tsx`
- `app/products/page.tsx`
- `app/vape-lounge/page.tsx`
- `app/visit/page.tsx`
- `components/age-gate.tsx`
- `components/footer.tsx`
- `components/forms.tsx`
- `components/header.tsx`
- `components/logo-smoke.tsx`
- `components/mobile-cta.tsx`
- `components/page-hero.tsx`
- `components/ui.tsx`
- `data/content.ts`
- `data/site.ts`
- `next-env.d.ts`
- `next.config.ts`
- `package.json`
- `postcss.config.js`
- `tailwind.config.ts`
- `tsconfig.json`

---

## FILE: .eslintrc.json
```json
{
  "extends": ["next/core-web-vitals", "next/typescript"]
}
```

## FILE: .gitignore
```text
# dependencies
node_modules/

# next.js
.next/
out/

# production
build/

# logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*

# env
.env*

# macOS
.DS_Store

# typescript
*.tsbuildinfo
```

## FILE: .gitkeep
```text

```

## FILE: README.md
```md
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
```

## FILE: app/about/page.tsx
```tsx
import { Metadata } from 'next';
import { PageHero } from '@/components/page-hero';
import { Button, Container, Section } from '@/components/ui';

export const metadata: Metadata = { title: 'About', description: 'Learn about Vape Monkey, a trusted local San Antonio vape shop for adults 21+.' };

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About Vape Monkey" title="Built for adults who value quality and clarity." body="Vape Monkey was created to provide San Antonio with a better retail and lounge experience rooted in respect, service, and curated selection." />
      <Section><Container className="grid gap-4 md:grid-cols-2">{['Brand story', 'San Antonio roots', 'Service philosophy', 'Curated product approach', 'Why customers come back'].map((s) => <article key={s} className="rounded-2xl border border-brand-stroke bg-brand-panel p-6"><h2 className="text-2xl font-semibold">{s}</h2><p className="mt-3 text-brand-muted">Our team focuses on straightforward guidance, consistent inventory standards, and an atmosphere that respects adult customers.</p></article>)}</Container></Section>
      <Section><Container><Button href="/visit">Visit or Contact Us</Button></Container></Section>
    </>
  );
}
```

## FILE: app/api/product-request/route.ts
```ts
import { NextResponse } from 'next/server';

export async function POST() {
  return NextResponse.json({ ok: true, message: 'Request received. Connect this route to your real endpoint.' });
}
```

## FILE: app/faq/page.tsx
```tsx
import { Metadata } from 'next';
import { PageHero } from '@/components/page-hero';
import { Container, Section } from '@/components/ui';
import { faqs } from '@/data/content';

export const metadata: Metadata = { title: 'FAQ', description: 'Frequently asked questions about age policy, products, and visiting Vape Monkey.' };

export default function FAQPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
  return (
    <>
      <PageHero eyebrow="FAQ" title="Quick answers before you visit." body="Everything you need to know about age verification, product categories, requests, and our San Antonio location." />
      <Section><Container className="space-y-3">{faqs.map((f) => <details key={f.q} className="rounded-xl border border-brand-stroke bg-brand-panel p-4"><summary className="cursor-pointer font-medium">{f.q}</summary><p className="mt-2 text-sm text-brand-muted">{f.a}</p></details>)}</Container></Section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
```

## FILE: app/globals.css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  color-scheme: dark;
}

html {
  scroll-behavior: smooth;
}

body {
  @apply bg-brand-bg text-brand-text antialiased;
  background-image: radial-gradient(circle at 20% 0%, rgba(158, 199, 255, 0.1), transparent 35%),
    radial-gradient(circle at 80% 20%, rgba(90, 108, 130, 0.08), transparent 40%);
}

.smoke {
  animation: smoke-float 7s ease-in-out infinite;
}

.smoke-delay-1 { animation-delay: 1.3s; }
.smoke-delay-2 { animation-delay: 2.2s; }

@keyframes smoke-float {
  0% { transform: translate3d(0, 0, 0) scale(0.95); opacity: 0; }
  20% { opacity: .28; }
  70% { opacity: .18; }
  100% { transform: translate3d(38px, -44px, 0) scale(1.1); opacity: 0; }
}

@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  .smoke, .animate-pulse { animation: none !important; }
}
```

## FILE: app/layout.tsx
```tsx
import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { MobileActionBar } from '@/components/mobile-cta';
import { AgeGate } from '@/components/age-gate';
import { site } from '@/data/site';

export const metadata: Metadata = {
  metadataBase: new URL('https://vapemonkeysa.com'),
  title: { default: 'Vape Monkey | Premium 21+ Vape Shop in San Antonio', template: '%s | Vape Monkey' },
  description: 'Vape Monkey is a premium adult-only vape shop in San Antonio, TX with curated products, helpful staff, and a comfortable lounge atmosphere.',
  openGraph: { title: 'Vape Monkey San Antonio', description: 'Premium 21+ vape retail and lounge experience in San Antonio.', url: 'https://vapemonkeysa.com', siteName: 'Vape Monkey', type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Vape Monkey San Antonio', description: 'Trusted local vape shop and lounge for adults 21+.' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'Store',
    name: site.name,
    address: site.address,
    telephone: site.phone,
    email: site.email,
    areaServed: 'San Antonio, TX',
  };

  return (
    <html lang="en">
      <body>
        <a href="#main" className="sr-only focus:not-sr-only">Skip to content</a>
        <AgeGate />
        <Header />
        <main id="main" className="pb-20 md:pb-0">{children}</main>
        <Footer />
        <MobileActionBar />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
      </body>
    </html>
  );
}
```

## FILE: app/page.tsx
```tsx
import Link from 'next/link';
import { LogoSmoke } from '@/components/logo-smoke';
import { Button, Container, Section } from '@/components/ui';
import { categories, faqs, trustPoints } from '@/data/content';
import { site } from '@/data/site';

export default function HomePage() {
  return (
    <>
      <Section className="bg-haze pt-16">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-brand-muted">San Antonio · 21+ Retail</p>
            <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">A refined local destination for curated vape products.</h1>
            <p className="mt-5 max-w-xl text-brand-muted">Vape Monkey delivers an adult-focused, knowledgeable retail experience with premium product selection, straightforward guidance, and a comfortable lounge setting near Thousand Oaks.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button href="/visit">Visit the Store</Button>
              <Button href="/products" className="border-brand-stroke bg-transparent">Browse Products</Button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end"><LogoSmoke hero /></div>
        </Container>
      </Section>

      <Section className="py-8">
        <Container className="grid gap-3 sm:grid-cols-3 lg:grid-cols-6">{trustPoints.map((p) => <div key={p} className="rounded-xl border border-brand-stroke bg-brand-panel px-4 py-3 text-center text-xs uppercase tracking-wide text-brand-muted">{p}</div>)}</Container>
      </Section>

      <Section>
        <Container>
          <h2 className="text-3xl font-semibold">Featured Categories</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{categories.map((c) => <article key={c.title} className="rounded-2xl border border-brand-stroke bg-brand-panel p-5 transition hover:-translate-y-0.5 hover:border-brand-accent/40"><h3 className="text-xl font-medium">{c.title}</h3><p className="mt-2 text-sm text-brand-muted">{c.desc}</p><Link href="/products" className="mt-4 inline-block text-sm font-semibold text-brand-accent">Explore category →</Link></article>)}</div>
        </Container>
      </Section>

      <Section><Container className="grid gap-6 lg:grid-cols-2"><article className="rounded-2xl border border-brand-stroke bg-brand-panel p-7"><h2 className="text-3xl font-semibold">Why Vape Monkey</h2><p className="mt-4 text-brand-muted">We are not a generic shelf-heavy chain. Our team focuses on quality selection, clear product guidance, and an adult environment built around comfort and consistency.</p></article><article className="rounded-2xl border border-brand-stroke bg-brand-panelSoft p-7"><h2 className="text-3xl font-semibold">Vape Lounge</h2><p className="mt-4 text-brand-muted">Unwind in a mature, social atmosphere designed for adults who value quality, conversation, and a better in-store experience.</p><Button href="/vape-lounge" className="mt-6">See the Lounge</Button></article></Container></Section>

      <Section><Container className="rounded-2xl border border-brand-stroke bg-brand-panel p-7"><h2 className="text-3xl font-semibold">Concierge-style Product Requests</h2><p className="mt-4 max-w-3xl text-brand-muted">Looking for a specific device, flavor, or brand? Send us a request and our team will follow up quickly with availability guidance.</p><Button href="/product-request" className="mt-6">Request a Product</Button></Container></Section>

      <Section><Container><h2 className="text-3xl font-semibold">Local Customer Feedback</h2><div className="mt-7 grid gap-4 md:grid-cols-3">{['Professional staff, easy recommendations, and a clean store.', 'The lounge is relaxed and adult-focused—exactly what I wanted.', 'Great selection without feeling overwhelming or cluttered.'].map((t) => <blockquote key={t} className="rounded-2xl border border-brand-stroke bg-brand-panel p-5 text-brand-muted">“{t}”</blockquote>)}</div></Container></Section>

      <Section id="visit"><Container className="grid gap-6 lg:grid-cols-2"><div className="rounded-2xl border border-brand-stroke bg-brand-panel p-6"><h2 className="text-3xl font-semibold">Visit the Store</h2><p className="mt-4 text-brand-muted">{site.address}</p><ul className="mt-4 space-y-1 text-sm text-brand-muted">{site.hours.map((h) => <li key={h}>{h}</li>)}</ul><div className="mt-6 flex gap-3"><a href={site.directionsUrl} target="_blank" rel="noreferrer" className="rounded-lg bg-brand-accent/20 px-4 py-2">Get Directions</a><a href={site.phoneHref} className="rounded-lg border border-brand-stroke px-4 py-2">Call</a></div></div><iframe title="Map to Vape Monkey" className="min-h-[300px] w-full rounded-2xl border border-brand-stroke" loading="lazy" src="https://www.google.com/maps?q=2815+Thousand+Oaks+Dr+San+Antonio+TX+78232&output=embed" /></Container></Section>

      <Section><Container><h2 className="text-3xl font-semibold">FAQ Preview</h2><div className="mt-6 space-y-3">{faqs.slice(0, 4).map((f) => <details key={f.q} className="rounded-xl border border-brand-stroke bg-brand-panel p-4"><summary className="cursor-pointer font-medium">{f.q}</summary><p className="mt-2 text-sm text-brand-muted">{f.a}</p></details>)}</div><Button href="/faq" className="mt-5">View Full FAQ</Button></Container></Section>
    </>
  );
}
```

## FILE: app/product-request/page.tsx
```tsx
import { Metadata } from 'next';
import { ProductRequestForm } from '@/components/forms';
import { PageHero } from '@/components/page-hero';
import { Button, Container, Section } from '@/components/ui';
import { site } from '@/data/site';

export const metadata: Metadata = { title: 'Product Request', description: 'Request products or brands from Vape Monkey in San Antonio.' };

export default function RequestPage() {
  return (
    <>
      <PageHero eyebrow="Product Request" title="Tell us what you need, and we will follow up quickly." body="Use this form to ask about stock, specific brands, or product categories. We designed this process to feel simple, respectful, and responsive." />
      <Section><Container className="grid gap-6 lg:grid-cols-2"><ProductRequestForm /><aside className="space-y-4 rounded-2xl border border-brand-stroke bg-brand-panel p-6"><h2 className="text-2xl font-semibold">What to expect</h2><p className="text-brand-muted">Requests are reviewed during business hours and answered as quickly as possible. For urgent questions, please call the store directly.</p><a href={site.phoneHref} className="inline-block rounded-lg bg-brand-accent/20 px-4 py-2">Call {site.phone}</a><p className="text-sm text-brand-muted">No online checkout is offered on this site. Product requests are informational and availability-focused.</p><Button href="/visit">Visit in Person</Button></aside></Container></Section>
    </>
  );
}
```

## FILE: app/products/page.tsx
```tsx
import { Metadata } from 'next';
import { PageHero } from '@/components/page-hero';
import { Button, Container, Section } from '@/components/ui';
import { categories } from '@/data/content';

export const metadata: Metadata = { title: 'Products', description: 'Browse curated vape categories at Vape Monkey in San Antonio.' };

export default function ProductsPage() {
  return (
    <>
      <PageHero eyebrow="Curated Inventory" title="Products chosen for quality and consistency." body="Explore core vape categories without the clutter of a giant catalog. Our team helps you find the right fit quickly and clearly." />
      <Section><Container className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{categories.map((c) => <article key={c.title} className="rounded-2xl border border-brand-stroke bg-brand-panel p-5"><h2 className="text-xl font-semibold">{c.title}</h2><p className="mt-2 text-sm text-brand-muted">{c.desc}</p></article>)}</Container></Section>
      <Section><Container className="grid gap-4 md:grid-cols-2"><article className="rounded-2xl border border-brand-stroke bg-brand-panel p-6"><h2 className="text-2xl font-semibold">Featured Brands</h2><p className="mt-3 text-brand-muted">We focus on reputable brands with consistent performance and transparent product information.</p></article><article className="rounded-2xl border border-brand-stroke bg-brand-panel p-6"><h2 className="text-2xl font-semibold">First-Time Guidance</h2><p className="mt-3 text-brand-muted">New to vaping or changing devices? Our staff can walk you through options based on usage preferences and comfort.</p></article></Container></Section>
      <Section><Container className="rounded-2xl border border-brand-stroke bg-brand-panel p-6"><h2 className="text-2xl font-semibold">Need something specific?</h2><p className="mt-2 text-brand-muted">Use our product request form and we will follow up with availability details.</p><div className="mt-5 flex gap-3"><Button href="/product-request">Request Product</Button><Button href="/visit" className="bg-transparent border-brand-stroke">Visit or Call</Button></div></Container></Section>
    </>
  );
}
```

## FILE: app/vape-lounge/page.tsx
```tsx
import { Metadata } from 'next';
import { PageHero } from '@/components/page-hero';
import { Button, Container, Section } from '@/components/ui';

export const metadata: Metadata = { title: 'Vape Lounge', description: 'See the adult-focused lounge experience at Vape Monkey in San Antonio.' };

export default function LoungePage() {
  return (
    <>
      <PageHero eyebrow="The Lounge" title="A mature space designed for comfort and community." body="Our lounge gives adults a relaxed, respectful environment that complements the retail experience." />
      <Section><Container className="grid gap-4 md:grid-cols-2">{['What the lounge is', 'Atmosphere and experience', 'Why customers enjoy it', 'Who it is for', 'Expectations and etiquette'].map((t) => <article key={t} className="rounded-2xl border border-brand-stroke bg-brand-panel p-6"><h2 className="text-2xl font-semibold">{t}</h2><p className="mt-2 text-brand-muted">Thoughtful layout, comfortable seating, and an adult tone that avoids the loud party vibe found elsewhere.</p></article>)}</Container></Section>
      <Section><Container><Button href="/visit">Plan Your Visit</Button></Container></Section>
    </>
  );
}
```

## FILE: app/visit/page.tsx
```tsx
import { Metadata } from 'next';
import { ContactForm } from '@/components/forms';
import { PageHero } from '@/components/page-hero';
import { Container, Section } from '@/components/ui';
import { site } from '@/data/site';

export const metadata: Metadata = { title: 'Visit', description: 'Address, hours, map, and contact details for Vape Monkey in San Antonio.' };

export default function VisitPage() {
  return (
    <>
      <PageHero eyebrow="Visit Vape Monkey" title="Everything you need to stop by today." body="Find hours, directions, and fast contact options. We are easy to reach from the Thousand Oaks area." />
      <Section><Container className="grid gap-6 lg:grid-cols-2"><div className="rounded-2xl border border-brand-stroke bg-brand-panel p-6"><h2 className="text-2xl font-semibold">Store Information</h2><p className="mt-3 text-brand-muted">{site.address}</p><p className="text-brand-muted">{site.phone} · {site.email}</p><ul className="mt-4 space-y-1 text-sm text-brand-muted">{site.hours.map((h) => <li key={h}>{h}</li>)}</ul><div className="mt-6 flex gap-3"><a href={site.directionsUrl} target="_blank" rel="noreferrer" className="rounded-lg bg-brand-accent/20 px-4 py-2">Directions</a><a href={site.phoneHref} className="rounded-lg border border-brand-stroke px-4 py-2">Call Store</a></div></div><iframe title="Vape Monkey map" className="min-h-[320px] w-full rounded-2xl border border-brand-stroke" loading="lazy" src="https://www.google.com/maps?q=2815+Thousand+Oaks+Dr+San+Antonio+TX+78232&output=embed" /></Container></Section>
      <Section><Container className="max-w-xl"><h2 className="mb-4 text-2xl font-semibold">Quick Inquiry</h2><ContactForm /></Container></Section>
    </>
  );
}
```

## FILE: components/age-gate.tsx
```tsx
'use client';
import { useEffect, useState } from 'react';

export function AgeGate() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('vm-age-ok');
    if (!accepted) setOpen(true);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4">
      <div className="w-full max-w-md rounded-2xl border border-brand-stroke bg-brand-panel p-6 shadow-glow">
        <h2 className="text-2xl font-semibold">Welcome to Vape Monkey</h2>
        <p className="mt-3 text-sm text-brand-muted">This website is intended for adults 21+. By entering, you confirm you are of legal age.</p>
        <div className="mt-6 grid grid-cols-2 gap-3">
          <button onClick={() => { localStorage.setItem('vm-age-ok', 'yes'); setOpen(false); }} className="min-h-11 rounded-xl bg-brand-accent/25 px-4 font-semibold hover:bg-brand-accent/35">I am 21+</button>
          <a href="https://www.google.com" className="flex min-h-11 items-center justify-center rounded-xl border border-brand-stroke px-4 font-semibold hover:bg-white/5">Exit</a>
        </div>
      </div>
    </div>
  );
}
```

## FILE: components/footer.tsx
```tsx
import Link from 'next/link';
import { nav, site } from '@/data/site';
import { Container } from './ui';

export function Footer() {
  return (
    <footer className="border-t border-brand-stroke bg-brand-panel/70 py-12">
      <Container className="grid gap-10 md:grid-cols-3">
        <div>
          <p className="text-lg font-semibold">Vape Monkey</p>
          <p className="mt-3 text-sm text-brand-muted">Premium adult-only vape retail and lounge experience in San Antonio.</p>
          <p className="mt-4 text-sm text-brand-muted">21+ only. Valid ID required.</p>
        </div>
        <div>
          <p className="font-semibold">Visit us</p>
          <p className="mt-3 text-sm text-brand-muted">{site.address}</p>
          <p className="text-sm text-brand-muted">{site.phone}</p>
          <p className="text-sm text-brand-muted">{site.email}</p>
          <ul className="mt-3 text-sm text-brand-muted">{site.hours.map((h) => <li key={h}>{h}</li>)}</ul>
        </div>
        <div>
          <p className="font-semibold">Explore</p>
          <ul className="mt-3 grid grid-cols-2 gap-2 text-sm">{nav.map((i) => <li key={i.href}><Link href={i.href} className="text-brand-muted hover:text-brand-text">{i.label}</Link></li>)}</ul>
          <p className="mt-8 text-xs text-brand-muted">© {new Date().getFullYear()} Vape Monkey · San Antonio Local Business</p>
        </div>
      </Container>
    </footer>
  );
}
```

## FILE: components/forms.tsx
```tsx
export function ContactForm() {
  return (
    <form className="grid gap-4 rounded-2xl border border-brand-stroke bg-brand-panel p-5">
      <label className="text-sm">Name<input className="mt-1 w-full rounded-lg border border-brand-stroke bg-black/30 p-2.5" /></label>
      <label className="text-sm">Email<input type="email" className="mt-1 w-full rounded-lg border border-brand-stroke bg-black/30 p-2.5" /></label>
      <label className="text-sm">Question<textarea className="mt-1 min-h-24 w-full rounded-lg border border-brand-stroke bg-black/30 p-2.5" /></label>
      <button className="min-h-11 rounded-lg bg-brand-accent/25 font-semibold">Send Inquiry</button>
    </form>
  );
}

export function ProductRequestForm() {
  return (
    <form action="/api/product-request" method="post" className="grid gap-4 rounded-2xl border border-brand-stroke bg-brand-panel p-5">
      <label className="text-sm">Name<input name="name" required className="mt-1 w-full rounded-lg border border-brand-stroke bg-black/30 p-2.5" /></label>
      <label className="text-sm">Preferred Contact Method<select name="contactMethod" className="mt-1 w-full rounded-lg border border-brand-stroke bg-black/30 p-2.5"><option>Phone</option><option>Email</option><option>Either</option></select></label>
      <label className="text-sm">Phone or Email<input name="contact" required className="mt-1 w-full rounded-lg border border-brand-stroke bg-black/30 p-2.5" /></label>
      <label className="text-sm">Requested Product<input name="product" required className="mt-1 w-full rounded-lg border border-brand-stroke bg-black/30 p-2.5" /></label>
      <label className="text-sm">Brand<input name="brand" className="mt-1 w-full rounded-lg border border-brand-stroke bg-black/30 p-2.5" /></label>
      <label className="text-sm">Category<input name="category" className="mt-1 w-full rounded-lg border border-brand-stroke bg-black/30 p-2.5" /></label>
      <label className="text-sm">Additional Notes<textarea name="notes" className="mt-1 min-h-24 w-full rounded-lg border border-brand-stroke bg-black/30 p-2.5" /></label>
      <label className="flex items-center gap-2 text-sm"><input type="checkbox" name="notify" /> Notify me when available</label>
      <button className="min-h-11 rounded-lg bg-brand-accent/25 font-semibold">Submit Request</button>
    </form>
  );
}
```

## FILE: components/header.tsx
```tsx
'use client';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { nav, site } from '@/data/site';
import { Container, Button } from './ui';
import { LogoSmoke } from './logo-smoke';

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 12);
    fn();
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);
  return (
    <header className={`sticky top-0 z-50 border-b ${scrolled ? 'border-brand-stroke/80 bg-brand-bg/90 backdrop-blur' : 'border-transparent bg-brand-bg/65'}`}>
      <Container className="flex min-h-16 items-center justify-between gap-4">
        <Link href="/" aria-label="Vape Monkey home" className="shrink-0"><LogoSmoke /></Link>
        <nav className="hidden items-center gap-5 md:flex" aria-label="Primary navigation">
          {nav.map((i) => <Link key={i.href} href={i.href} className="text-sm text-brand-muted hover:text-brand-text">{i.label}</Link>)}
        </nav>
        <div className="hidden md:block"><Button href="/visit">Visit the Store</Button></div>
        <button className="min-h-11 min-w-11 rounded-lg border border-brand-stroke md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X className='mx-auto'/> : <Menu className='mx-auto'/>}</button>
      </Container>
      {open && (
        <div className="border-t border-brand-stroke bg-brand-panel md:hidden">
          <Container className="grid gap-1 py-3">
            {nav.map((i) => <Link key={i.href} href={i.href} onClick={() => setOpen(false)} className="min-h-11 rounded-lg px-3 py-2 text-brand-muted hover:bg-white/5 hover:text-brand-text">{i.label}</Link>)}
            <a href={site.phoneHref} className="mt-2 min-h-11 rounded-lg bg-brand-accent/20 px-3 py-2 text-center font-semibold">Call {site.phone}</a>
          </Container>
        </div>
      )}
    </header>
  );
}
```

## FILE: components/logo-smoke.tsx
```tsx
import Image from 'next/image';

export function LogoSmoke({ hero = false }: { hero?: boolean }) {
  const size = hero ? 280 : 120;
  return (
    <div className="relative isolate inline-block">
      <Image src="/logo.png" alt="Vape Monkey logo" width={size} height={size} className="h-auto w-[180px] sm:w-[220px] md:w-[280px]" priority={hero} />
      <div className="pointer-events-none absolute -left-3 top-[58%] hidden md:block" aria-hidden>
        <span className="smoke absolute h-8 w-8 rounded-full bg-white/25 blur-sm" />
        <span className="smoke smoke-delay-1 absolute -left-3 top-3 h-7 w-7 rounded-full bg-white/20 blur-sm" />
        <span className="smoke smoke-delay-2 absolute left-2 top-5 h-6 w-6 rounded-full bg-white/15 blur-sm" />
      </div>
      <div className="pointer-events-none absolute -left-1 top-[60%] md:hidden" aria-hidden>
        <span className="smoke absolute h-5 w-5 rounded-full bg-white/20 blur-sm" />
      </div>
    </div>
  );
}
```

## FILE: components/mobile-cta.tsx
```tsx
import { site } from '@/data/site';

export function MobileActionBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-brand-stroke bg-brand-panel/95 p-2 backdrop-blur md:hidden">
      <div className="grid grid-cols-3 gap-2">
        <a className="flex min-h-11 items-center justify-center rounded-lg bg-white/5 text-sm" href={site.phoneHref}>Call</a>
        <a className="flex min-h-11 items-center justify-center rounded-lg bg-white/5 text-sm" href={site.directionsUrl} target="_blank" rel="noreferrer">Directions</a>
        <a className="flex min-h-11 items-center justify-center rounded-lg bg-brand-accent/25 text-sm font-semibold" href="/visit">Visit</a>
      </div>
    </div>
  );
}
```

## FILE: components/page-hero.tsx
```tsx
import { Container, Section } from './ui';

export function PageHero({ eyebrow, title, body }: { eyebrow: string; title: string; body: string }) {
  return (
    <Section className="border-b border-brand-stroke/70 bg-haze">
      <Container>
        <p className="text-sm uppercase tracking-[0.2em] text-brand-muted">{eyebrow}</p>
        <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-brand-muted">{body}</p>
      </Container>
    </Section>
  );
}
```

## FILE: components/ui.tsx
```tsx
import Link, { LinkProps } from 'next/link';
import { PropsWithChildren } from 'react';

export function Container({ children, className = '' }: PropsWithChildren<{ className?: string }>) {
  return <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

export function Section({ children, className = '' }: PropsWithChildren<{ className?: string }>) {
  return <section className={`py-14 sm:py-20 ${className}`}>{children}</section>;
}

export function Button({ children, className = '', ...props }: PropsWithChildren<LinkProps & { className?: string }>) {
  return (
    <Link
      {...props}
      className={`inline-flex min-h-11 items-center justify-center rounded-xl border border-brand-accent/40 bg-brand-accent/15 px-5 py-2.5 text-sm font-semibold text-brand-text transition hover:border-brand-accent hover:bg-brand-accent/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent ${className}`}
    >
      {children}
    </Link>
  );
}
```

## FILE: data/content.ts
```ts
export const trustPoints = ['San Antonio Local', '21+ Only', 'Curated Selection', 'Knowledgeable Staff', 'Lounge Atmosphere', 'Easy Product Requests'];

export const categories = [
  { title: 'Disposable Vapes', desc: 'Reliable daily options from established brands.' },
  { title: 'Devices & Systems', desc: 'Pod systems, mods, and hardware matched to your style.' },
  { title: 'E-Liquid', desc: 'Balanced flavor profiles in the strengths you prefer.' },
  { title: 'CBD', desc: 'Carefully sourced CBD products for adult customers.' },
  { title: 'Delta & Hemp', desc: 'Compliant hemp-derived options with clear guidance.' },
  { title: 'Accessories', desc: 'Coils, chargers, batteries, and essentials done right.' },
];

export const faqs = [
  { q: 'Do you verify age for every purchase?', a: 'Yes. Vape Monkey is an adult-only business. Customers must be 21+ with valid government-issued ID.' },
  { q: 'What product categories do you carry?', a: 'We carry disposable vapes, refillable devices, e-liquid, CBD, hemp-derived products, and accessories.' },
  { q: 'Can I request a product or brand you do not currently have?', a: 'Yes. Use our product request form or call us, and our team will check availability or possible ordering options.' },
  { q: 'Where are you located?', a: 'We are in San Antonio near Thousand Oaks Drive. Visit our Visit page for map and directions.' },
  { q: 'Do you have a vape lounge?', a: 'Yes. Our lounge is designed for an adult, relaxed, community-oriented experience.' },
  { q: 'Can I call before visiting?', a: 'Absolutely. Call ahead and we can help confirm products or answer questions before you come in.' },
];
```

## FILE: data/site.ts
```ts
export const site = {
  name: 'Vape Monkey',
  city: 'San Antonio, TX',
  phone: '(210) 555-0148',
  phoneHref: 'tel:+12105550148',
  email: 'hello@vapemonkeysa.com',
  address: '2815 Thousand Oaks Dr, San Antonio, TX 78232',
  directionsUrl: 'https://maps.google.com/?q=2815+Thousand+Oaks+Dr+San+Antonio+TX+78232',
  hours: [
    'Mon–Thu: 10:00 AM – 9:00 PM',
    'Fri–Sat: 10:00 AM – 10:00 PM',
    'Sun: 11:00 AM – 7:00 PM',
  ],
};

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/vape-lounge', label: 'Vape Lounge' },
  { href: '/about', label: 'About' },
  { href: '/visit', label: 'Visit' },
  { href: '/product-request', label: 'Product Request' },
  { href: '/faq', label: 'FAQ' },
];
```

## FILE: next-env.d.ts
```ts
/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
```

## FILE: next.config.ts
```ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
```

## FILE: package.json
```json
{
  "name": "vape-monkey",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "framer-motion": "^11.11.17",
    "lucide-react": "^0.468.0",
    "next": "^15.0.3",
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@types/node": "^22.9.1",
    "@types/react": "^18.3.12",
    "@types/react-dom": "^18.3.1",
    "autoprefixer": "^10.4.20",
    "eslint": "^9.14.0",
    "eslint-config-next": "^15.0.3",
    "postcss": "^8.4.49",
    "tailwindcss": "^3.4.14",
    "typescript": "^5.6.3"
  }
}
```

## FILE: postcss.config.js
```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```


## FILE: tailwind.config.ts
```ts
import type { Config } from 'tailwindcss';

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#060708',
          panel: '#0f1216',
          panelSoft: '#141920',
          stroke: '#2a323d',
          accent: '#9ec7ff',
          accentDeep: '#547da8',
          text: '#edf1f5',
          muted: '#9ca8b8'
        }
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(158,199,255,.2), 0 20px 40px rgba(6,8,10,.45)',
      },
      backgroundImage: {
        haze: 'radial-gradient(circle at top right, rgba(158,199,255,.16), transparent 45%), radial-gradient(circle at bottom left, rgba(122,138,163,.12), transparent 50%)',
      }
    },
  },
  plugins: [],
} satisfies Config;
```

## FILE: tsconfig.json
```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": false,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

