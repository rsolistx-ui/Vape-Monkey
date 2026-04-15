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
