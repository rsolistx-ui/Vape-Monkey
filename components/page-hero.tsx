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
