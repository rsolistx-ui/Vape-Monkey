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
