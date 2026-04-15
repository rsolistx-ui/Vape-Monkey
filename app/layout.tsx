import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { MobileActionBar } from '@/components/mobile-cta';
import { AgeGate } from '@/components/age-gate';
import { site } from '@/data/site';

export const metadata: Metadata = {
  metadataBase: new URL('https://vapemonkeysa.com'),
  title: { default: 'Vape Monkey | Premium 21+ Vape Shop in North San Antonio', template: '%s | Vape Monkey' },
  description:
    'Vape Monkey is a premium adult-only vape destination in North San Antonio near Thousand Oaks, featuring curated products and a refined lounge atmosphere.',
  openGraph: {
    title: 'Vape Monkey San Antonio',
    description: 'Premium 21+ vape retail and lounge experience in North San Antonio.',
    url: 'https://vapemonkeysa.com',
    siteName: 'Vape Monkey',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vape Monkey San Antonio',
    description: 'North San Antonio’s premium adult vape destination.',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'Store',
    name: site.name,
    address: site.address,
    telephone: site.phone,
    email: site.email,
    areaServed: 'North San Antonio, TX',
  };

  return (
    <html lang="en">
      <body>
        <a href="#main" className="sr-only focus:not-sr-only">
          Skip to content
        </a>
        <div id="site-shell" className="site-shell min-h-screen">
          <Header />
          <main id="main" className="pb-20 md:pb-0">
            {children}
          </main>
          <Footer />
          <MobileActionBar />
        </div>
        <AgeGate />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
      </body>
    </html>
  );
}
