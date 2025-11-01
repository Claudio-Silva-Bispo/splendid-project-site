import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import '../globals.css';
import { SpeedInsights } from "@vercel/speed-insights/next";
import { PrimeReactProvider } from 'primereact/api';
        
import Navbar from '@/components/Navbar';
import Rodape from '@/components/Footer';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const router = useRouter();
  const isDashboard = router.pathname.startsWith('/Dashboard');

  return (
    <>
      <Head>
        {/* Favicon */}
        <link rel="icon" type="image/png" href="/assets/Logo/logo-sem-fundo-editado.PNG" />
        <link rel="apple-touch-icon" href="/assets/Logo/logo-sem-fundo-editado.PNG" />
        
        {/* Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Schema da Organização (Global) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Splendid Cleaning Service",
              "image": "https://www.splendidcleaningserv.com/assets/Logo/logo-sem-fundo-editado.PNG",
              "url": "https://www.splendidcleaningserv.com",
              "telephone": "+1-XXX-XXX-XXXX", // Adicione o telefone real
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Seattle", // Adicione a cidade
                "addressRegion": "WA",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 47.6062,
                "longitude": -122.3321
              },
              "areaServed": [
                {
                  "@type": "City",
                  "name": "Seattle",
                  "sameAs": "https://en.wikipedia.org/wiki/Seattle"
                },
                {
                  "@type": "City",
                  "name": "Bellevue"
                },
                {
                  "@type": "City",
                  "name": "Redmond"
                },
                {
                  "@type": "City",
                  "name": "Kirkland"
                },
                {
                  "@type": "City",
                  "name": "Tacoma"
                },
                {
                  "@type": "City",
                  "name": "Everett"
                }
              ],
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "08:00",
                  "closes": "18:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "opens": "09:00",
                  "closes": "17:00"
                }
              ],
              "sameAs": [
                "https://www.instagram.com/splendidcleaning",
                "https://www.facebook.com/splendidcleaning"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Cleaning Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Residential Cleaning",
                      "description": "Professional home cleaning services"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Commercial Cleaning",
                      "description": "Office and commercial space cleaning"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Deep Cleaning",
                      "description": "Intensive deep cleaning services"
                    }
                  }
                ]
              }
            })
          }}
        />
      </Head>

      <div className="flex flex-col min-h-screen">
        {!isDashboard && <Navbar />}
        <PrimeReactProvider value={{ unstyled: true }}>
          <main className="flex-1">
            <Component {...pageProps} />
          </main>
          {!isDashboard && <Rodape />}
          <SpeedInsights />
        </PrimeReactProvider>
      </div>
    </>
  );
}

export default MyApp;