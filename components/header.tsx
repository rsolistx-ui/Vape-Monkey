'use client';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { nav, site } from '@/data/site';
import { Container, Button } from './ui';
import { LogoSmoke } from './logo-smoke';

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 12);
    fn();
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <header className={`sticky top-0 z-50 border-b transition-all ${scrolled ? 'border-brand-stroke/85 bg-brand-bg/86 backdrop-blur-xl' : 'border-transparent bg-brand-bg/60 backdrop-blur-md'}`}>
      <Container className="flex min-h-[58px] items-center justify-between gap-3 py-1 md:min-h-[70px] md:gap-5">
        <Link href="/" aria-label="Vape Monkey home" className="shrink-0 rounded-lg p-1">
          <LogoSmoke />
        </Link>

        <nav className="hidden items-center gap-1.5 rounded-full border border-brand-stroke/75 bg-gradient-to-b from-brand-panel/84 to-brand-panelSoft/72 p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_14px_26px_rgba(5,8,12,0.28)] md:flex" aria-label="Primary navigation">
          {nav.map((i) => (
            <Link
              key={i.href}
              href={i.href}
              className="inline-flex h-9 items-center justify-center rounded-full px-3.5 text-sm leading-none text-brand-muted transition hover:bg-white/9 hover:text-brand-text"
            >
              {i.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="/visit" className="inline-flex h-10 min-h-0 items-center">Visit the Store</Button>
        </div>

        <button className="min-h-11 min-w-11 rounded-lg border border-brand-stroke bg-brand-panel/80 md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="mx-auto" /> : <Menu className="mx-auto" />}
        </button>
      </Container>

      {open && (
        <div className="border-t border-brand-stroke bg-brand-panel/95 md:hidden">
          <Container className="grid gap-1 py-3">
            {nav.map((i) => (
              <Link key={i.href} href={i.href} onClick={() => setOpen(false)} className="min-h-11 rounded-lg px-3 py-2 text-brand-muted hover:bg-white/7 hover:text-brand-text">
                {i.label}
              </Link>
            ))}
            <a href={site.phoneHref} className="mt-2 min-h-11 rounded-lg bg-brand-accent/24 px-3 py-2 text-center font-semibold">
              Call {site.phone}
            </a>
          </Container>
        </div>
      )}
    </header>
  );
}
