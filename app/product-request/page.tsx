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
