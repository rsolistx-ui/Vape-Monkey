import Link, { LinkProps } from 'next/link';
import { PropsWithChildren } from 'react';

export function Container({ children, className = '' }: PropsWithChildren<{ className?: string }>) {
  return <div className={`mx-auto w-full max-w-[1200px] px-5 sm:px-7 lg:px-10 ${className}`}>{children}</div>;
}

export function Section({ children, className = '' }: PropsWithChildren<{ className?: string }>) {
  return <section className={`relative py-16 sm:py-24 ${className}`}>{children}</section>;
}

export function Button({ children, className = '', ...props }: PropsWithChildren<LinkProps & { className?: string }>) {
  return (
    <Link
      {...props}
      className={`group relative inline-flex min-h-12 items-center justify-center overflow-hidden rounded-full border border-brand-accent/40 bg-gradient-to-b from-brand-accent/45 via-brand-accent/28 to-brand-accent/14 px-6 py-2.5 text-sm font-semibold tracking-wide text-white shadow-[0_16px_34px_rgba(28,39,54,0.55)] transition duration-300 hover:-translate-y-0.5 hover:border-brand-accent/80 hover:shadow-[0_22px_46px_rgba(28,40,59,0.58)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent ${className}`}
    >
      <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/55" />
      <span className="pointer-events-none absolute -inset-x-12 bottom-0 h-11 bg-gradient-to-t from-white/15 to-transparent opacity-0 transition group-hover:opacity-100" />
      <span className="relative z-10 flex items-center leading-none">{children}</span>
    </Link>
  );
}
