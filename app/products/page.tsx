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
