'use client';

import { useEffect, useState } from 'react';
import { LogoSmoke } from './logo-smoke';

const STORAGE_KEY = 'vm-age-ok';

type GateState = 'checking' | 'verify' | 'denied' | 'allowed';

export function AgeGate() {
  const [state, setState] = useState<GateState>('checking');

  useEffect(() => {
    const accepted = localStorage.getItem(STORAGE_KEY) === 'yes';
    setState(accepted ? 'allowed' : 'verify');
  }, []);

  useEffect(() => {
    const active = state === 'verify' || state === 'denied';
    document.body.classList.toggle('age-gate-active', active);
    return () => document.body.classList.remove('age-gate-active');
  }, [state]);

  if (state === 'checking' || state === 'allowed') return null;

  const denyMode = state === 'denied';

  return (
    <div className="age-gate-overlay fixed inset-0 z-[140] flex items-center justify-center p-5 sm:p-8" role="dialog" aria-modal="true" aria-label="Age verification">
      <div className="age-gate-panel relative w-full max-w-2xl overflow-hidden rounded-[2rem] p-7 sm:p-11">
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-white/[0.04]" aria-hidden />
        <div className="relative z-10">
          <div className="mx-auto mb-5 flex max-w-[260px] justify-center sm:max-w-[320px]">
            <LogoSmoke hero={false} gate />
          </div>

          {!denyMode ? (
            <>
              <p className="text-center text-[11px] uppercase tracking-[0.28em] text-brand-muted">Adult Access · 21+ Required</p>
              <h2 className="mx-auto mt-3 max-w-xl text-center text-3xl font-semibold leading-tight sm:text-4xl">Are you 21 years of age or older?</h2>
              <p className="mx-auto mt-4 max-w-xl text-center text-brand-muted">
                Vape Monkey is an adult-only retail and lounge experience in North San Antonio. Please confirm your age to continue.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <button
                  onClick={() => {
                    localStorage.setItem(STORAGE_KEY, 'yes');
                    setState('allowed');
                  }}
                  className="gate-button gate-button-primary"
                >
                  Yes, I am 21+
                </button>
                <button onClick={() => setState('denied')} className="gate-button gate-button-muted">
                  No
                </button>
              </div>
            </>
          ) : (
            <>
              <p className="text-center text-[11px] uppercase tracking-[0.28em] text-brand-muted">Access Restricted</p>
              <h2 className="mx-auto mt-3 max-w-lg text-center text-3xl font-semibold leading-tight sm:text-4xl">We can’t allow entry at this time.</h2>
              <p className="mx-auto mt-4 max-w-xl text-center text-brand-muted">
                This website is reserved for adults 21 and older. Thank you for understanding.
              </p>
              <div className="mt-8 flex justify-center">
                <button onClick={() => setState('verify')} className="gate-button gate-button-muted min-w-56">
                  Back to age question
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
