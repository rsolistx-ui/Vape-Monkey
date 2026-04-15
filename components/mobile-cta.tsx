import { site } from '@/data/site';

export function MobileActionBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-brand-stroke bg-brand-panel/95 p-2 backdrop-blur md:hidden">
      <div className="grid grid-cols-3 gap-2">
        <a className="flex min-h-11 items-center justify-center rounded-lg bg-white/5 text-sm" href={site.phoneHref}>Call</a>
        <a className="flex min-h-11 items-center justify-center rounded-lg bg-white/5 text-sm" href={site.directionsUrl} target="_blank" rel="noreferrer">Directions</a>
        <a className="flex min-h-11 items-center justify-center rounded-lg bg-brand-accent/25 text-sm font-semibold" href="/visit">Visit</a>
      </div>
    </div>
  );
}
