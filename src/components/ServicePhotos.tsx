import Head from 'next/head';

export default function ServicePhotos() {
  return (
    <>
      <Head>
        {/* Schema para lista de serviços */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "name": "Cleaning Services in Seattle, Bellevue, Tacoma",
              "description": "Professional cleaning services including residential, commercial, post-construction, move in/out, and deep cleaning in Greater Seattle Area",
              "url": "https://www.splendidcleaningserv.com/#services",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "item": {
                    "@type": "Service",
                    "name": "Standard Residential Cleaning Seattle",
                    "description": "Complete residential cleaning service ensuring your home is always clean and organized in Seattle, Bellevue, and Tacoma area.",
                    "provider": {
                      "@type": "LocalBusiness",
                      "name": "Splendid Cleaning Service"
                    },
                    "areaServed": ["Seattle, WA", "Bellevue, WA", "Tacoma, WA", "Redmond, WA", "Kirkland, WA"],
                    "offers": {
                      "@type": "Offer",
                      "availability": "https://schema.org/InStock",
                      "priceCurrency": "USD"
                    }
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "item": {
                    "@type": "Service",
                    "name": "Commercial Cleaning Seattle",
                    "description": "Professional commercial cleaning for offices, stores, and establishments in Greater Seattle Area with flexible scheduling.",
                    "provider": {
                      "@type": "LocalBusiness",
                      "name": "Splendid Cleaning Service"
                    },
                    "areaServed": ["Seattle, WA", "Bellevue, WA", "Tacoma, WA", "Redmond, WA"],
                    "offers": {
                      "@type": "Offer",
                      "availability": "https://schema.org/InStock",
                      "priceCurrency": "USD"
                    }
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "item": {
                    "@type": "Service",
                    "name": "Post-Construction Cleaning Seattle",
                    "description": "Professional post-construction cleaning to remove debris, dirt, and dust in Seattle, Bellevue, Tacoma area.",
                    "provider": {
                      "@type": "LocalBusiness",
                      "name": "Splendid Cleaning Service"
                    },
                    "areaServed": ["Seattle, WA", "Bellevue, WA", "Tacoma, WA", "Everett, WA"],
                    "offers": {
                      "@type": "Offer",
                      "availability": "https://schema.org/InStock",
                      "priceCurrency": "USD"
                    }
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "item": {
                    "@type": "Service",
                    "name": "Move In/Out Cleaning Seattle",
                    "description": "Specialized cleaning services for moving in or moving out in Seattle, Bellevue, and surrounding areas.",
                    "provider": {
                      "@type": "LocalBusiness",
                      "name": "Splendid Cleaning Service"
                    },
                    "areaServed": ["Seattle, WA", "Bellevue, WA", "Tacoma, WA", "Renton, WA", "Kent, WA"],
                    "offers": {
                      "@type": "Offer",
                      "availability": "https://schema.org/InStock",
                      "priceCurrency": "USD"
                    }
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 5,
                  "item": {
                    "@type": "Service",
                    "name": "Deep Cleaning Seattle",
                    "description": "Professional deep cleaning services to thoroughly clean and sanitize every corner of your home or office in Greater Seattle Area.",
                    "provider": {
                      "@type": "LocalBusiness",
                      "name": "Splendid Cleaning Service"
                    },
                    "areaServed": ["Seattle, WA", "Bellevue, WA", "Tacoma, WA", "Kirkland, WA", "Everett, WA"],
                    "offers": {
                      "@type": "Offer",
                      "availability": "https://schema.org/InStock",
                      "priceCurrency": "USD"
                    }
                  }
                }
              ]
            })
          }}
        />
      </Head>

      <section
        className="p-4 lg:p-8 bg-terceira text-gray-800"
        id="services"
      >
        <div className="container mx-auto p-2 md:p-4 my-6 space-y-2 text-center" id="about-services">
          <h2 className="text-2xl md:text-5xl text-start md:text-center leading-tight uppercase">
            Discover the Services We Have Created <br /> 
            <span className="uppercase text-primeira font-bold">Especially for You in Seattle, Bellevue & Tacoma</span>
          </h2>
          
          <p className="text-xl text-left md:text-center">
            Professional cleaning solutions across Greater Seattle Area
          </p>
        </div>

        <div className="container mx-auto space-y-12">
          {/* Standard Residential Cleaning */}
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
            <img
              src="/assets/Novas/imagem1.jpeg"
              alt="Standard Residential Cleaning Service in Seattle, Bellevue, Tacoma - Splendid Cleaning"
              className="h-80 bg-gray-500 aspect-video"
            />

            <div className="flex flex-col justify-center flex-1 p-6 bg-gray-50">
              <span className="text-xs uppercase bold-bold">Customized Service</span>

              <h3 className="text-xl md:text-3xl text-[#FF7F2C]">Standard Residential Cleaning</h3>

              <p className="my-1 text-md">
                We offer a complete residential cleaning service in Seattle, Bellevue, Tacoma, and surrounding areas, ensuring your home is always clean and organized.
              </p>

              <p className="text-md">
                Our service covers all areas of the house, from living rooms and bedrooms to kitchens and bathrooms, with a focus on details and hygiene.
              </p>

              <button
                type="button"
                className="self-start py-2 px-4 rounded-md text-white mt-3 font-bold"
                style={{ backgroundColor: '#FF7F2C' }}
              >
                <a href="/#contact">Request Quote</a>
              </button>
            </div>
          </div>

          {/* Commercial Cleaning */}
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
            <img
              src="/assets/Novas/imagem2.jpeg"
              alt="Commercial Office Cleaning in Seattle, Bellevue - Splendid Cleaning Service"
              className="h-80 bg-gray-500 aspect-video"
            />
            <div className="flex flex-col justify-center flex-1 p-6 bg-gray-50">
              <span className="text-xs uppercase text-gray-600">
                Customized Service
              </span>
              <h3 className="text-xl md:text-3xl text-[#FF7F2C]">Commercial Cleaning</h3>

              <p className="my-1 text-md">
                Keep your workspace clean and professional with our commercial cleaning services in Seattle, Bellevue, and Tacoma.
              </p>

              <p className="my-1 text-md">
                We offer cleaning for offices, stores, and commercial establishments across Greater Seattle Area, with flexible hours to avoid disrupting your business operations.
              </p>

              <button
                type="button"
                className="self-start py-2 px-4 rounded-md text-white mt-3 font-bold"
                style={{ backgroundColor: '#FF7F2C' }}
              >
                <a href="/#contact">Request Quote</a>
              </button>
            </div>
          </div>

          {/* Post-Construction Cleaning */}
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
            <img
              src="/assets/Novas/imagem3.jpeg"
              alt="Post-Construction Cleaning Seattle, Bellevue, Tacoma - Splendid Cleaning"
              className="h-80 bg-gray-500 aspect-video"
            />

            <div className="flex flex-col justify-center flex-1 p-6 bg-gray-50">
              <span className="text-xs uppercase text-gray-600">
                Customized Service
              </span>

              <h3 className="text-xl md:text-3xl text-[#FF7F2C]">Post-Construction Cleaning</h3>

              <p className="my-1 text-md">
                Turn your newly built space in Seattle, Bellevue, or Tacoma into a livable environment with our professional post-construction cleaning.
              </p>

              <p className="my-1 text-md">
                We remove dirt, debris, and dust, ensuring a clean and safe environment for your new property.
              </p>

              <button
                type="button"
                className="self-start py-2 px-4 rounded-md text-white mt-3 font-bold"
                style={{ backgroundColor: '#FF7F2C' }}
              >
                <a href="/#contact">Request Quote</a>
              </button>
            </div>
          </div>

          {/* Move In/Out Cleaning */}
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
            <img
              src="/assets/Service/sala/IMG-20200204-WA0028.jpg"
              alt="Move In Move Out Cleaning Seattle, Bellevue - Splendid Cleaning Service"
              className="h-80 bg-gray-500 aspect-video"
            />
            <div className="flex flex-col justify-center flex-1 p-6 bg-gray-50">
              <span className="text-xs uppercase text-gray-600">
                Customized Service
              </span>
              <h3 className="text-xl md:text-3xl text-[#FF7F2C]">Move In and Move Out Cleaning</h3>

              <p className="my-1 text-md">
                We offer specialized cleaning services for moving moments in Seattle, Bellevue, Tacoma, and surrounding areas, ensuring that your new home or apartment is spotless for your arrival (Move In Cleaning) or leaving the space in perfect condition when you move out (Move Out Cleaning).
              </p>

              <p className="my-1 text-md">
                Our team takes care of every detail, providing comfort and peace of mind during this important time.
              </p>

              <button
                type="button"
                className="self-start py-2 px-4 rounded-md text-white mt-3 font-bold"
                style={{ backgroundColor: '#FF7F2C' }}
              >
                <a href="/#contact">Request Quote</a>
              </button>
            </div>
          </div>

          {/* Deep Cleaning */}
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
            <img
              src="/assets/Service/mockup/IMG-20230322-WA0238.jpg"
              alt="Deep Cleaning Service Seattle, Bellevue, Tacoma - Splendid Cleaning"
              className="h-80 bg-gray-500 aspect-video"
            />
            <div className="flex flex-col justify-center flex-1 p-6 bg-gray-50">
              <span className="text-xs uppercase text-gray-600">
                Customized Service
              </span>

              <h3 className="text-2xl md:text-3xl text-[#FF7F2C]">Deep Cleaning</h3>

              <p className="my-3 text-gray-600">
                We offer professional Deep Cleaning services in Seattle, Bellevue, and Tacoma to thoroughly clean and sanitize your space from top to bottom. Ideal for a detailed refresh across Greater Seattle Area, our team focuses on every corner, tackling hard-to-reach areas, and ensuring your home or office is spotless and germ-free. Experience a deeper level of cleanliness and enjoy a healthier environment.
              </p>

              <button
                type="button"
                className="self-start py-2 px-4 rounded-md text-white mt-3 font-bold"
                style={{ backgroundColor: '#FF7F2C' }}
              >
                <a href="/#contact">Request Quote</a>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}