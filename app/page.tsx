import Link from 'next/link';
import { LogoSmoke } from '@/components/logo-smoke';
import { Button, Container, Section } from '@/components/ui';
import { categories, faqs } from '@/data/content';
import { site } from '@/data/site';

export default function HomePage() {
  return (
    <>
      <Section className="overflow-hidden pb-14 pt-8 sm:pb-20 sm:pt-10 lg:pb-24 lg:pt-12">
        <div className="hero-cinema pointer-events-none absolute inset-0" aria-hidden />
        <Container className="relative z-10">
          <div className="hero-shell grid items-center gap-8 rounded-[2rem] p-6 sm:p-8 lg:grid-cols-[1.04fr_0.96fr] lg:gap-14 lg:p-10">
            <div>
              <p className="text-xs uppercase tracking-[0.26em] text-brand-muted sm:text-sm">North San Antonio · Thousand Oaks · 21+</p>
              <h1 className="mt-3 text-4xl font-semibold leading-tight sm:text-5xl lg:text-[3.4rem]">A flagship vape destination for adults who expect better.</h1>
              <p className="mt-4 max-w-xl text-brand-muted sm:text-base">Vape Monkey is built for North San Antonio adults seeking curated disposables, advanced devices, premium e-liquid, hemp-derived options, accessories, and a mature lounge experience in the Thousand Oaks area.</p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button href="/visit">Visit the Store</Button>
                <Button href="/products" className="border-brand-stroke/95 bg-white/5">Browse Products</Button>
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <div className="absolute -inset-x-6 -inset-y-12 rounded-[2.6rem] bg-gradient-to-tr from-brand-accent/12 via-transparent to-white/6 blur-3xl" aria-hidden />
              <div className="relative rounded-[2.2rem] border border-brand-stroke/60 bg-brand-panel/35 px-5 py-8 sm:px-8 sm:py-11 lg:px-9 lg:py-12">
                <LogoSmoke hero />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="section-divider py-10 sm:py-12">
        <Container className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="hero-shell rounded-2xl p-7">
            <p className="text-xs uppercase tracking-[0.2em] text-brand-muted">Why North San Antonio Chooses Vape Monkey</p>
            <h2 className="mt-3 text-3xl font-semibold">Curated guidance, premium product mix, and a better in-store atmosphere.</h2>
            <p className="mt-4 text-brand-muted">From first-time upgrades to experienced setups, our team keeps recommendations clear, curated, and adult-focused—without the clutter and chaos of typical shops.</p>
          </article>
          <article className="hero-shell rounded-2xl p-7">
            <p className="text-xs uppercase tracking-[0.2em] text-brand-muted">Local Destination Experience</p>
            <h3 className="mt-3 text-2xl font-semibold">Boutique retail in the Thousand Oaks corridor.</h3>
            <p className="mt-4 text-brand-muted">Expect a selective lineup of disposables, advanced devices, e-liquid, hemp-derived products, and accessories—plus a lounge designed for mature, social comfort.</p>
            <Button href="/vape-lounge" className="mt-5">Explore the Lounge</Button>
          </article>
        </Container>
      </Section>

      <Section className="section-divider">
        <Container>
          <h2 className="text-3xl font-semibold">Curated Categories</h2>
          <p className="mt-3 max-w-2xl text-brand-muted">Premium essentials for North San Antonio adults, selected for consistency, quality, and everyday performance.</p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c) => (
              <article key={c.title} className="group rounded-2xl border border-brand-stroke/75 bg-gradient-to-b from-brand-panel to-brand-panelSoft/70 p-6 shadow-[0_18px_34px_rgba(2,4,8,0.34)] transition duration-300 hover:-translate-y-1 hover:border-brand-accent/55 hover:shadow-[0_26px_44px_rgba(11,19,30,0.4)]">
                <div className="mb-4 h-1.5 w-10 rounded-full bg-brand-accent/45 transition group-hover:w-16" />
                <h3 className="text-xl font-medium">{c.title}</h3>
                <p className="mt-2 text-sm text-brand-muted">{c.desc}</p>
                <Link href="/products" className="mt-4 inline-block text-sm font-semibold text-brand-accent">Explore category →</Link>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="section-divider"><Container className="grid gap-6 lg:grid-cols-2"><article className="hero-shell rounded-2xl p-7"><h2 className="text-3xl font-semibold">Why Vape Monkey</h2><p className="mt-4 text-brand-muted">We are not a generic shelf-heavy chain. Our team focuses on quality selection, clear product guidance, and an adult environment built around comfort and consistency.</p></article><article className="hero-shell rounded-2xl p-7"><h2 className="text-3xl font-semibold">Vape Lounge</h2><p className="mt-4 text-brand-muted">Unwind in a mature, social atmosphere designed for adults who value quality, conversation, and a better in-store experience.</p><Button href="/vape-lounge" className="mt-6">See the Lounge</Button></article></Container></Section>

      <Section className="section-divider"><Container className="hero-shell rounded-2xl p-7"><h2 className="text-3xl font-semibold">Concierge-style Product Requests</h2><p className="mt-4 max-w-3xl text-brand-muted">Looking for a specific device, flavor, or brand? Send us a request and our team will follow up quickly with availability guidance.</p><Button href="/product-request" className="mt-6">Request a Product</Button></Container></Section>

      <Section className="section-divider"><Container><h2 className="text-3xl font-semibold">Local Customer Feedback</h2><div className="mt-7 grid gap-4 md:grid-cols-3">{['Professional staff, easy recommendations, and a clean store.', 'The lounge is relaxed and adult-focused—exactly what I wanted.', 'Great selection without feeling overwhelming or cluttered.'].map((t) => <blockquote key={t} className="hero-shell rounded-2xl p-5 text-brand-muted">“{t}”</blockquote>)}</div></Container></Section>

      <Section id="visit" className="section-divider"><Container className="grid gap-6 lg:grid-cols-2"><div className="hero-shell rounded-2xl p-6"><h2 className="text-3xl font-semibold">Visit the Store</h2><p className="mt-4 text-brand-muted">{site.address}</p><ul className="mt-4 space-y-1 text-sm text-brand-muted">{site.hours.map((h) => <li key={h}>{h}</li>)}</ul><div className="mt-6 flex gap-3"><a href={site.directionsUrl} target="_blank" rel="noreferrer" className="rounded-lg bg-brand-accent/20 px-4 py-2">Get Directions</a><a href={site.phoneHref} className="rounded-lg border border-brand-stroke px-4 py-2">Call</a></div></div><iframe title="Map to Vape Monkey" className="min-h-[300px] w-full rounded-2xl border border-brand-stroke/70 shadow-[0_16px_34px_rgba(2,4,8,0.3)]" loading="lazy" src="https://www.google.com/maps?q=2815+Thousand+Oaks+Dr+San+Antonio+TX+78232&output=embed" /></Container></Section>

      <Section className="section-divider"><Container><h2 className="text-3xl font-semibold">FAQ Preview</h2><div className="mt-6 space-y-3">{faqs.slice(0, 4).map((f) => <details key={f.q} className="hero-shell rounded-xl p-4"><summary className="cursor-pointer font-medium">{f.q}</summary><p className="mt-2 text-sm text-brand-muted">{f.a}</p></details>)}</div><Button href="/faq" className="mt-5">View Full FAQ</Button></Container></Section>
    </>
  );
}
