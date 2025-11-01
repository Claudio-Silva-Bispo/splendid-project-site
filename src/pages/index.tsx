import Head from 'next/head';
import Hero from "@/components/Hero"
import ServicePlan from "@/components/ServicePlan"
import About from "@/components/About"
import Services from "@/components/Services"
import ContactFlow from "@/components/ContactFlow"
import FormContact from "@/components/FormContact"
import FormQuote from "@/components/FormQuote"
import ServicePhotos from "@/components/ServicePhotos"
import ContactNetworks from "@/components/ContactNetworks"
import SobreFeedback from "@/components/AboutFeedback"
import ReceivedFeedbacks from "@/components/ReceivedFeedbacks"
import Accordion from "@/components/Accordion"

export default function Home() {
  return (
    <>
      <Head>
        {/* Título otimizado para SEO local */}
        <title>Splendid Cleaning Service - Professional House Cleaning in Seattle, Bellevue & Tacoma | WA</title>
        
        {/* Descrição otimizada com palavras-chave e localização */}
        <meta 
          name="description" 
          content="Professional residential and commercial cleaning services in Seattle, Bellevue, Redmond, Kirkland, Tacoma, and Everett, WA. Expert house cleaning, office cleaning, and deep cleaning. Call now for a free quote!"
        />
        
        {/* Palavras-chave focadas em SEO local */}
        <meta 
          name="keywords" 
          content="house cleaning seattle, cleaning service bellevue, maid service tacoma, residential cleaning redmond, office cleaning kirkland, deep cleaning everett, professional cleaners seattle wa, home cleaning service washington, commercial cleaning bellevue, splendid cleaning"
        />
        
        {/* Geo tags para SEO local */}
        <meta name="geo.region" content="US-WA" />
        <meta name="geo.placename" content="Seattle" />
        <meta name="geo.position" content="47.6062;-122.3321" />
        <meta name="ICBM" content="47.6062, -122.3321" />
        
        {/* Autor */}
        <meta name="author" content="Splendid Cleaning Service" />
        
        {/* Open Graph para redes sociais */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Splendid Cleaning Service - Seattle, Bellevue & Tacoma" />
        <meta property="og:description" content="Professional cleaning services for homes and offices in Greater Seattle Area. Residential, commercial, and deep cleaning." />
        <meta property="og:image" content="https://www.splendidcleaningserv.com/assets/Logo/logo-sem-fundo-editado.PNG" />
        <meta property="og:url" content="https://www.splendidcleaningserv.com" />
        <meta property="og:site_name" content="Splendid Cleaning Service" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Splendid Cleaning Service - Seattle Area" />
        <meta name="twitter:description" content="Professional house and office cleaning in Seattle, Bellevue, Tacoma, and surrounding areas" />
        <meta name="twitter:image" content="https://www.splendidcleaningserv.com/assets/Logo/logo-sem-fundo-editado.PNG" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.splendidcleaningserv.com" />
        
        {/* Schema.org para o website */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Splendid Cleaning Service",
              "url": "https://www.splendidcleaningserv.com",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.splendidcleaningserv.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />

        {/* Schema.org para serviços */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Cleaning Service",
              "provider": {
                "@type": "LocalBusiness",
                "name": "Splendid Cleaning Service",
                "telephone": "+1-2063763755",
                "url": "https://www.splendidcleaningserv.com"
              },
              "areaServed": [
                "Seattle, WA",
                "Bellevue, WA",
                "Redmond, WA",
                "Kirkland, WA",
                "Tacoma, WA",
                "Everett, WA",
                "Renton, WA",
                "Kent, WA",
                "Federal Way, WA"
              ],
              "description": "Professional residential and commercial cleaning services including house cleaning, office cleaning, deep cleaning, and move in/out cleaning in Greater Seattle Area",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Cleaning Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Residential Cleaning",
                      "description": "Professional home cleaning for houses and apartments in Seattle area"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Commercial Cleaning",
                      "description": "Office and commercial space cleaning services"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Deep Cleaning",
                      "description": "Intensive deep cleaning for homes and offices"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Move In/Out Cleaning",
                      "description": "Specialized cleaning for moving situations"
                    }
                  }
                ]
              }
            })
          }}
        />
      </Head>

      <div> 
        <Hero />
        <ServicePlan />
        <About />
        <ContactFlow />
        <FormContact />
        <Services />
        <ServicePhotos />
        <FormQuote/>
        <ContactNetworks />
        <SobreFeedback />
        <ReceivedFeedbacks/>
        <Accordion/>
      </div>
    </>
  )
}