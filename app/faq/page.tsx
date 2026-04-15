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
