'use client';
import { useEffect, useState } from 'react';
import { LogoSmoke } from './logo-smoke';

export function AgeGate() {
  const [open, setOpen] = useState(false);
  const [denied, setDenied] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('vm-age-ok');
    if (!accepted) setOpen(true);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/88 p-4 backdrop-blur-sm">
      <div className="hero-shell w-full max-w-2xl rounded-3xl p-6 sm:p-10">
        <div className="mb-4 flex justify-center">
          <LogoSmoke hero />
        </div>

        {!denied ? (
          <>
            <p className="text-center text-xs uppercase tracking-[0.26em] text-brand-muted">Age Verification</p>
            <h2 className="mt-3 text-center text-3xl font-semibold">Are you 21 or older?</h2>
            <p className="mx-auto mt-4 max-w-xl text-center text-brand-muted">Vape Monkey is an adult-only experience. Please confirm your age before entering.</p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <button
                onClick={() => {
                  localStorage.setItem('vm-age-ok', 'yes');
                  setOpen(false);
                }}
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-brand-accent/42 bg-gradient-to-b from-brand-accent/34 via-brand-accent/22 to-brand-accent/9 px-5 py-2.5 text-sm font-semibold leading-none text-brand-text shadow-[0_14px_30px_rgba(14,20,30,0.5)] transition duration-300 hover:-translate-y-0.5 hover:border-brand-accent/85"
              >
                Yes, I am 21+
              </button>
              <button
                onClick={() => setDenied(true)}
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-brand-stroke bg-brand-panel/75 px-5 py-2.5 text-sm font-semibold leading-none text-brand-text transition hover:bg-brand-panelSoft/85"
              >
                No
              </button>
            </div>
          </>
        ) : (
          <>
            <p className="text-center text-xs uppercase tracking-[0.26em] text-brand-muted">Access Restricted</p>
            <h2 className="mt-3 text-center text-2xl font-semibold">You must be 21+ to access this site.</h2>
            <p className="mx-auto mt-4 max-w-xl text-center text-brand-muted">Thank you for visiting. This website is only available to adults due to age-restricted category rules.</p>
            <div className="mt-7 flex justify-center">
              <a
                href="https://www.google.com"
                className="inline-flex min-h-11 items-center justify-center rounded-xl border border-brand-stroke bg-brand-panel/75 px-5 py-2.5 text-sm font-semibold leading-none text-brand-text transition hover:bg-brand-panelSoft/85"
              >
                Exit Site
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
