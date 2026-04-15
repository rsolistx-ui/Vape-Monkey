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
