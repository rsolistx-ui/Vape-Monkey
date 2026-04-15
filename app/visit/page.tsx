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
