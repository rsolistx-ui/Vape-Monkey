import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { MobileActionBar } from '@/components/mobile-cta';
import { AgeGate } from '@/components/age-gate';
import { site } from '@/data/site';

export const metadata: Metadata = {
  metadataBase: new URL('https://vapemonkeysa.com'),
  title: { default: 'Vape Monkey | Premium 21+ Vape Shop in San Antonio', template: '%s | Vape Monkey' },
  description: 'Vape Monkey is a premium adult-only vape shop in San Antonio, TX with curated products, helpful staff, and a comfortable lounge atmosphere.',
  openGraph: { title: 'Vape Monkey San Antonio', description: 'Premium 21+ vape retail and lounge experience in San Antonio.', url: 'https://vapemonkeysa.com', siteName: 'Vape Monkey', type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Vape Monkey San Antonio', description: 'Trusted local vape shop and lounge for adults 21+.' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'Store',
    name: site.name,
    address: site.address,
    telephone: site.phone,
    email: site.email,
    areaServed: 'San Antonio, TX',
  };

  return (
    <html lang="en">
      <body>
        <a href="#main" className="sr-only focus:not-sr-only">Skip to content</a>
        <AgeGate />
        <Header />
        <main id="main" className="pb-20 md:pb-0">{children}</main>
        <Footer />
        <MobileActionBar />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
      </body>
    </html>
  );
}
