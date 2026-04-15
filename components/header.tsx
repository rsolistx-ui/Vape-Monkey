'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { nav, site } from '@/data/site';
import { Container } from './ui';
import { LogoSmoke } from './logo-smoke';

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 14);
    fn();
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        scrolled
          ? 'border-b border-white/10 bg-[#06080cf2] shadow-[0_20px_36px_rgba(3,6,10,0.52)] backdrop-blur-xl'
          : 'border-b border-white/[0.06] bg-[#06080cb5] backdrop-blur-lg'
      }`}
    >
      <Container className="flex min-h-[72px] items-center justify-between gap-4">
        <Link href="/" aria-label="Vape Monkey home" className="rounded-xl p-1">
          <LogoSmoke />
        </Link>

        <nav
          className="hidden items-center gap-1.5 rounded-full border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.07),0_16px_30px_rgba(2,4,8,0.4)] md:flex"
          aria-label="Primary navigation"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm tracking-wide text-brand-muted transition hover:bg-white/10 hover:text-brand-text"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href={site.phoneHref}
          className="hidden rounded-full border border-white/15 bg-white/[0.03] px-4 py-2 text-sm font-medium text-brand-text transition hover:border-brand-accent/80 hover:text-white md:inline-flex"
        >
          Call {site.phone}
        </a>

        <button
          className="grid h-11 w-11 place-items-center rounded-xl border border-white/15 bg-white/[0.04] md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </Container>

      {open && (
        <div className="border-t border-white/10 bg-[#06080cf5] md:hidden">
          <Container className="grid gap-1 py-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2.5 text-brand-muted transition hover:bg-white/10 hover:text-brand-text"
              >
                {item.label}
              </Link>
            ))}
          </Container>
        </div>
      )}
    </header>
  );
}
