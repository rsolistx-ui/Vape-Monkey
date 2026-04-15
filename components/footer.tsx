import Link from 'next/link';
import { nav, site } from '@/data/site';
import { Container } from './ui';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#06080f] py-14">
      <Container className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <p className="text-xl font-semibold tracking-wide">Vape Monkey</p>
          <p className="mt-3 max-w-md text-sm text-brand-muted">
            Premium 21+ vape retail and lounge culture for North San Antonio adults near Thousand Oaks.
          </p>
          <p className="mt-4 text-xs uppercase tracking-[0.2em] text-brand-muted">Adults 21+ only · Valid ID required</p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-muted">Visit</p>
          <p className="mt-3 text-sm text-brand-muted">{site.address}</p>
          <p className="mt-2 text-sm text-brand-muted">{site.phone}</p>
          <p className="text-sm text-brand-muted">{site.email}</p>
          <ul className="mt-4 space-y-1.5 text-sm text-brand-muted">
            {site.hours.map((hour) => (
              <li key={hour}>{hour}</li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-muted">Explore</p>
          <ul className="mt-3 grid grid-cols-2 gap-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-brand-muted transition hover:text-brand-text">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-xs text-brand-muted/90">© {new Date().getFullYear()} Vape Monkey · North San Antonio</p>
        </div>
      </Container>
    </footer>
  );
}
