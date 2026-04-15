import Link from 'next/link';
import { LogoSmoke } from '@/components/logo-smoke';
import { Button, Container, Section } from '@/components/ui';
import { categories } from '@/data/content';
import { site } from '@/data/site';

const pillars = [
  {
    eyebrow: 'Curated Retail',
    title: 'Premium devices and flavor profiles chosen with intention.',
    body: 'From effortless disposables to advanced systems and refined e-liquid, each shelf is edited for consistency, quality, and adult preferences.',
  },
  {
    eyebrow: 'Lounge Culture',
    title: 'A mature social environment, not a chaotic storefront.',
    body: 'Designed for adults who value atmosphere, conversation, and knowledgeable guidance in a setting that feels polished and welcoming.',
  },
  {
    eyebrow: 'Local Standard',
    title: 'Rooted in the Thousand Oaks corridor of North San Antonio.',
    body: 'We serve the neighborhood with concierge-level recommendations, dependable stock, and a flagship-level in-store experience.',
  },
];

export default function HomePage() {
  return (
    <>
      <Section className="home-hero min-h-[85vh] overflow-hidden pb-20 pt-10 sm:pt-16">
        <div className="hero-atmosphere" aria-hidden />
        <Container className="relative z-10">
          <div className="grid items-end gap-12 lg:grid-cols-[1.08fr_0.92fr]">
            <div>
              <p className="hero-kicker">North San Antonio · Thousand Oaks · Adult 21+</p>
              <h1 className="hero-title mt-5 max-w-3xl">The premium vape destination for adults who expect atmosphere, quality, and taste.</h1>
              <p className="mt-6 max-w-2xl text-lg text-brand-muted">
                Vape Monkey delivers a flagship retail and lounge experience with curated disposables, advanced devices, e-liquid, hemp-derived products, and refined accessories.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/visit">Visit the Flagship</Button>
                <Button href="/products" className="border-white/20 bg-white/[0.02]">
                  Explore the Collection
                </Button>
              </div>
              <div className="mt-10 grid gap-4 text-sm text-brand-muted sm:grid-cols-3">
                <div className="premium-chip">Concierge guidance</div>
                <div className="premium-chip">Curated inventory</div>
                <div className="premium-chip">Lounge atmosphere</div>
              </div>
            </div>

            <div className="hero-logo-stage">
              <div className="hero-logo-glow" aria-hidden />
              <LogoSmoke hero />
              <p className="mt-6 text-center text-sm text-brand-muted">Refined adult retail in North San Antonio</p>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="section-seamless pt-2">
        <Container className="grid gap-6 lg:grid-cols-3">
          {pillars.map((item) => (
            <article key={item.title} className="premium-panel p-7">
              <p className="text-[11px] uppercase tracking-[0.25em] text-brand-muted">{item.eyebrow}</p>
              <h2 className="mt-3 text-2xl font-semibold leading-tight">{item.title}</h2>
              <p className="mt-4 text-brand-muted">{item.body}</p>
            </article>
          ))}
        </Container>
      </Section>

      <Section className="section-seamless">
        <Container>
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[11px] uppercase tracking-[0.25em] text-brand-muted">Merchandise Focus</p>
              <h2 className="mt-2 text-4xl font-semibold">Curated categories, premium pacing.</h2>
            </div>
            <Link href="/products" className="text-sm font-medium text-brand-accent hover:text-white">
              View full catalog approach →
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <article key={category.title} className="premium-panel premium-panel-soft p-6">
                <h3 className="text-xl font-medium">{category.title}</h3>
                <p className="mt-2 text-sm text-brand-muted">{category.desc}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="section-seamless">
        <Container className="grid gap-6 lg:grid-cols-[1.12fr_0.88fr]">
          <article className="premium-panel p-8 sm:p-10">
            <p className="text-[11px] uppercase tracking-[0.25em] text-brand-muted">North San Antonio Destination</p>
            <h2 className="mt-3 text-4xl font-semibold">Built for the Thousand Oaks rhythm.</h2>
            <p className="mt-5 max-w-2xl text-brand-muted">
              Whether you are making a quick stop or settling in at the lounge, Vape Monkey is designed to feel intentional, premium, and locally rooted.
            </p>
            <p className="mt-4 text-brand-muted">{site.address}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/visit">Get Directions</Button>
              <Button href="/vape-lounge" className="border-white/20 bg-white/[0.02]">
                Explore Lounge Details
              </Button>
            </div>
          </article>

          <aside className="premium-panel premium-panel-soft p-8">
            <p className="text-[11px] uppercase tracking-[0.25em] text-brand-muted">Store Hours</p>
            <ul className="mt-4 space-y-2 text-sm text-brand-muted">
              {site.hours.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
            <a href={site.phoneHref} className="mt-7 inline-block text-sm font-semibold text-brand-accent hover:text-white">
              Call {site.phone}
            </a>
          </aside>
        </Container>
      </Section>
    </>
  );
}
