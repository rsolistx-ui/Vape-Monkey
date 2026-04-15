import Image from 'next/image';

export function LogoSmoke({ hero = false }: { hero?: boolean }) {
  const size = hero ? 340 : 120;
  const imageClass = hero ? 'h-auto w-[190px] sm:w-[255px] md:w-[340px]' : 'h-auto w-[78px] sm:w-[90px]';

  return (
    <div className="relative isolate inline-block">
      <Image src="/logo.png" alt="Vape Monkey logo" width={size} height={size} className={imageClass} priority={hero} />

      <div className="pointer-events-none absolute left-[3%] top-[63%] hidden md:block" aria-hidden>
        <span className="smoke-tip block h-2.5 w-2.5 rounded-full" />
        <span className="smoke-strand smoke-strand-1 absolute -left-1 -top-2 h-3 w-16" />
        <span className="smoke-strand smoke-strand-2 absolute -left-2 top-1 h-2.5 w-20" />
        <span className="smoke-strand smoke-strand-3 absolute -left-1 top-3 h-2.5 w-18" />
        <span className="smoke-strand smoke-strand-4 absolute left-1 top-5 h-2 w-14" />
        <span className="smoke-strand smoke-strand-5 absolute left-0 top-7 h-2 w-22" />
      </div>

      <div className="pointer-events-none absolute left-[4%] top-[63%] md:hidden" aria-hidden>
        <span className="smoke-tip block h-2 w-2 rounded-full" />
        <span className="smoke-strand smoke-mobile-strand-1 absolute -left-1 top-0 h-2 w-10" />
        <span className="smoke-strand smoke-mobile-strand-2 absolute left-0 top-2.5 h-1.5 w-12" />
      </div>
    </div>
  );
}
