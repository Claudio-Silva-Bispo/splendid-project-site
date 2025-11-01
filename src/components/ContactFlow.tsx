import Head from 'next/head';
import { GiButterfly } from 'react-icons/gi';

export default function ContactFlow() {
  
  return (
    <>
      <Head>
        {/* Schema HowTo - Passo a passo para contratar o serviço */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HowTo",
              "name": "How to Schedule Cleaning Services with Splendid Cleaning Service",
              "description": "Step-by-step guide to schedule professional cleaning services in Seattle, Bellevue, and Tacoma with Splendid Cleaning Service",
              "image": "https://www.splendidcleaningserv.com/assets/Logo/imagem-logo-oficial.png",
              "totalTime": "PT5M",
              "estimatedCost": {
                "@type": "MonetaryAmount",
                "currency": "USD",
                "value": "0"
              },
              "step": [
                {
                  "@type": "HowToStep",
                  "position": 1,
                  "name": "Choose the Cleaning Service",
                  "text": "Choose from the services offered in Seattle, Bellevue, and Tacoma area, such as residential cleaning, commercial cleaning, post-construction cleaning, move in/out cleaning, and deep cleaning.",
                  "url": "https://www.splendidcleaningserv.com/#services"
                },
                {
                  "@type": "HowToStep",
                  "position": 2,
                  "name": "Schedule the Time",
                  "text": "Choose the date and time that best fits your needs. Splendid Cleaning Service offers flexible scheduling Monday to Saturday, 8AM to 6PM to accommodate your schedule in Greater Seattle Area.",
                  "url": "https://www.splendidcleaningserv.com/#contact"
                },
                {
                  "@type": "HowToStep",
                  "position": 3,
                  "name": "Provide Additional Details",
                  "text": "Provide additional details about your cleaning needs, such as whether you have pets, if you need extra services like cleaning inside the refrigerator or the oven, and any other important information to customize the service for your Seattle, Bellevue, or Tacoma property.",
                  "url": "https://www.splendidcleaningserv.com/#contact"
                },
                {
                  "@type": "HowToStep",
                  "position": 4,
                  "name": "Contact Splendid Cleaning Service",
                  "text": "Get in touch with Splendid Cleaning Service via Phone (206) 376-3755, Text Message, Email splendidcleaningusa@gmail.com or WhatsApp. Our team is available to assist you with cleaning services in Seattle and surrounding areas.",
                  "url": "https://www.splendidcleaningserv.com/#contact"
                }
              ]
            })
          }}
        />
      </Head>

      <section className="bg-quinta text-gray-800" id="how-it-works">
        <div className="container max-w-5xl px-4 py-12 mx-auto">
          <div className="grid gap-4 mx-4 sm:grid-cols-12">
            <div className="col-span-12 sm:col-span-3">
              
              <div className="text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-segunda">
                <h2 className="text-3xl uppercase mb-5">Get in Touch</h2>
                
                <p className="text-xl md:text-2xl tracking-wider uppercase text-segunda">
                  Customized cleaning services tailored to your preferences and schedule in Seattle, Bellevue & Tacoma
                </p>

                <GiButterfly className="text-segunda w-20 h-20" aria-hidden="true" />
                <GiButterfly className="text-terceira w-8 h-8" aria-hidden="true" />
                <GiButterfly className="text-terceira w-44 h-20" aria-hidden="true" />
        
              </div>
            </div>

            <div className="relative col-span-12 md:px-4 md:space-y-6 sm:col-span-9">
              
              <div className="col-span-12 space-y-12 relative md:px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-300">
                
                {/* Step 1 */}
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-quinta">
                  <h3 className="text-xl md:text-3xl tracking-wide uppercase font-bold">
                    Step 1: Choose the Service
                  </h3>
                  <time className="text-md tracking-wide uppercase text-gray-600">
                    Available for you in Seattle Area
                  </time>
                  
                  <p className="mt-3 text-xl">
                    Choose from the services offered in Seattle, Bellevue, and Tacoma, such as residential cleaning, commercial cleaning, post-construction cleaning, move in/out cleaning, and deep cleaning.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-quinta">
                  <h3 className="text-xl md:text-3xl tracking-wide uppercase font-bold">
                    Step 2: Schedule the Time
                  </h3>
                  <time className="text-md tracking-wide uppercase text-gray-600">
                    Flexibility is key
                  </time>
                  <p className="mt-3 text-xl">
                    Choose the date and time that best fits your needs. We offer flexible scheduling Monday to Saturday, 8AM to 6PM to accommodate your busy schedule in Greater Seattle Area.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-quinta">
                  <h3 className="text-xl md:text-3xl tracking-wide uppercase font-bold">
                    Step 3: Additional Details
                  </h3>
                  <time className="text-md tracking-wide uppercase text-gray-600">
                    Better assistance
                  </time>
                  <p className="mt-3 text-xl">
                    Provide additional details about your Seattle, Bellevue, or Tacoma property, such as whether you have pets, if you need extra services like cleaning inside the refrigerator or the oven, and any other important information we should know to customize the service.
                  </p>
                </div>

                {/* Step 4 */}
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-quinta">
                  <h3 className="text-xl md:text-3xl tracking-wide uppercase font-bold">
                    Step 4: Contact Us
                  </h3>
                  <time className="text-md tracking-wide uppercase text-gray-600">
                    Easy and quick
                  </time>
                  <p className="mt-3 text-xl">
                    Get in touch with Splendid Cleaning Service via:
                  </p>
                  <ul className="mt-2 text-sm space-y-1 ml-6">
                    <li>📞 <a href="tel:+12063763755" className="text-primeira font-semibold hover:underline">Phone: (206) 376-3755</a></li>
                    <li>💬 <a href="sms:+12063763755" className="text-primeira font-semibold hover:underline">Text: (206) 376-3755</a></li>
                    <li>📧 <a href="mailto:splendidcleaningusa@gmail.com" className="text-primeira font-semibold hover:underline">Email: splendidcleaningusa@gmail.com</a></li>
                    <li>📱 <a href="https://wa.me/12063763755" target="_blank" rel="noopener noreferrer" className="text-primeira font-semibold hover:underline">WhatsApp: (206) 376-3755</a></li>
                  </ul>
                  <p className="mt-2 text-sm text-gray-600">
                    Our team is available to assist you with cleaning services in Seattle, Bellevue, Tacoma, and surrounding areas.
                  </p>
                </div>
              </div>

              {/* Contact Button */}
              <div>
                <a
                  href="/#contact"
                  className="block w-full py-4 px-4 text-white text-center rounded mt-10 md:mt-0 text-md md:text-xl uppercase font-bold transition-all duration-300 hover:opacity-90 hover:shadow-lg"
                  style={{ backgroundColor: '#1C6F42' }}
                >
                  Contact Us - Free Quote
                </a>
              </div>

              {/* Trust indicator */}
              <div className="mt-6 p-4 bg-white/50 rounded-lg text-center">
                <p className="text-sm text-gray-700">
                  ⭐ <strong>5.0 Rating</strong> · 98+ Happy Clients · Serving Greater Seattle Area
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}