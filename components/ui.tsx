import Link, { LinkProps } from 'next/link';
import { PropsWithChildren } from 'react';

export function Container({ children, className = '' }: PropsWithChildren<{ className?: string }>) {
  return <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

export function Section({ children, className = '' }: PropsWithChildren<{ className?: string }>) {
  return <section className={`relative py-14 sm:py-20 ${className}`}>{children}</section>;
}

export function Button({ children, className = '', ...props }: PropsWithChildren<LinkProps & { className?: string }>) {
  return (
    <Link
      {...props}
      className={`group relative inline-flex min-h-11 items-center justify-center overflow-hidden rounded-xl border border-brand-accent/42 bg-gradient-to-b from-brand-accent/38 via-brand-accent/25 to-brand-accent/8 px-5 py-2.5 text-center text-sm font-semibold leading-none text-brand-text shadow-[0_14px_30px_rgba(14,20,30,0.5)] transition duration-300 hover:-translate-y-0.5 hover:border-brand-accent/85 hover:shadow-[0_20px_38px_rgba(31,47,70,0.54)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent ${className}`}
    >
      <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/46" />
      <span className="pointer-events-none absolute -inset-x-12 bottom-0 h-9 bg-gradient-to-t from-white/12 to-transparent opacity-0 transition group-hover:opacity-100" />
      <span className="relative z-10 flex items-center leading-none">{children}</span>
    </Link>
  );
}
