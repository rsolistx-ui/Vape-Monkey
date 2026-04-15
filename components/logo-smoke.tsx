import Image from 'next/image';

export function LogoSmoke({ hero = false, gate = false }: { hero?: boolean; gate?: boolean }) {
  const size = hero ? 380 : gate ? 280 : 120;
  const imageClass = hero
    ? 'h-auto w-[210px] sm:w-[280px] lg:w-[350px]'
    : gate
      ? 'h-auto w-[170px] sm:w-[220px]'
      : 'h-auto w-[84px] sm:w-[98px]';

  return (
    <div className="relative isolate inline-block">
      <Image src="/logo.png" alt="Vape Monkey ape logo" width={size} height={size} className={imageClass} priority={hero || gate} />

      <div className="vapor-origin pointer-events-none absolute left-[13.7%] top-[57.8%]" aria-hidden>
        <span className="vapor-ember" />
        <span className="vapor-ribbon vapor-ribbon-1" />
        <span className="vapor-ribbon vapor-ribbon-2" />
        <span className="vapor-ribbon vapor-ribbon-3" />
        <span className="vapor-ribbon vapor-ribbon-4" />
        <span className="vapor-ribbon vapor-ribbon-5 hidden sm:block" />
      </div>

      <div className="vapor-origin-mobile pointer-events-none absolute left-[13.9%] top-[57.9%] sm:hidden" aria-hidden>
        <span className="vapor-ember" />
        <span className="vapor-ribbon vapor-mobile-1" />
        <span className="vapor-ribbon vapor-mobile-2" />
      </div>
    </div>
  );
}
