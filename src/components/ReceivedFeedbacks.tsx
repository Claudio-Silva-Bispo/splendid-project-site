import React, { useState, useEffect } from 'react';
import Head from 'next/head';

const feedbacks = [
  {
    text: "The service was excellent! I needed a locksmith in an emergency and was quickly assisted. Additionally, the team also recharged the battery, which was very efficient and helped me get back on the road in no time. Highly recommend to everyone!",
    author: "Michael Johnson",
    location: "Seattle, WA",
    rating: 5
  },
  {
    text: "The quality of service is unmatched. Always fast, efficient, and with fair prices. I wouldn't choose another company!",
    author: "Sarah Williams",
    location: "Bellevue, WA",
    rating: 5
  },
  {
    text: "Impressed with the speed and quality of the service. Very satisfied and will definitely use it again!",
    author: "David Martinez",
    location: "Tacoma, WA",
    rating: 5
  },
  {
    text: "Excellent work! The team was friendly, efficient, and left everything spotless. Highly recommend their services.",
    author: "Emily Chen",
    location: "Redmond, WA",
    rating: 5
  }
];

export default function ReceivedFeedbacks() {
  const [activeFeedback, setActiveFeedback] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveFeedback((currentFeedback) => (currentFeedback + 1) % feedbacks.length);
    }, 10000); // Changes feedback every 10 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <Head>
        {/* Schema para Reviews/Avaliações */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Splendid Cleaning Service",
              "image": "https://www.splendidcleaningserv.com/assets/Logo/logo-sem-fundo-editado.PNG",
              "url": "https://www.splendidcleaningserv.com",
              "telephone": "+1-206-376-3755",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Seattle",
                "addressRegion": "WA",
                "addressCountry": "US"
              },
              "areaServed": [
                "Seattle, WA",
                "Bellevue, WA",
                "Tacoma, WA",
                "Redmond, WA",
                "Kirkland, WA",
                "Everett, WA"
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5",
                "bestRating": "5",
                "worstRating": "1",
                "reviewCount": "98"
              },
              "review": feedbacks.map((feedback, index) => ({
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": feedback.author
                },
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": feedback.rating,
                  "bestRating": "5",
                  "worstRating": "1"
                },
                "reviewBody": feedback.text,
                "publisher": {
                  "@type": "Organization",
                  "name": "Splendid Cleaning Service"
                },
                "itemReviewed": {
                  "@type": "LocalBusiness",
                  "name": "Splendid Cleaning Service",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": feedback.location.split(',')[0].trim(),
                    "addressRegion": "WA"
                  }
                }
              }))
            })
          }}
        />
      </Head>

      <section id="feedback">
        <div className="flex flex-col justify-center items-center p-4 space-y-6 md:p-8 min-h-[90vh] bg-segunda w-full mx-auto">

          <div className="md:text-center sm:text-left md:mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-primeira mt-20 md:mt-0">
            <h2 className="text-3xl text-primeira mb-5 md:mb-0">
              What Our Customers Say
            </h2>
            
            <span className="text-sm tracking-wider text-white">
              Real reviews from satisfied customers across Seattle, Bellevue & Tacoma
            </span>
          </div>

          {/* Stars display */}
          <div className="flex gap-1 mb-4">
            {[...Array(5)].map((_, idx) => (
              <svg 
                key={idx} 
                className="w-8 h-8 text-yellow-400 fill-current" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
              </svg>
            ))}
          </div>
          
          <p className="px-6 py-2 text-2xl md:text-5xl text-center sm:text-3xl lg:max-w-2xl xl:max-w-4xl text-white">
            &quot;{feedbacks[activeFeedback].text}&quot;
          </p>

          {/* Author info */}
          <div className="text-center">
            <p className="text-xl font-semibold text-white">
              {feedbacks[activeFeedback].author}
            </p>
            <p className="text-sm text-white/80">
              📍 {feedbacks[activeFeedback].location}
            </p>
          </div>

          {/* Dots indicator */}
          <div className="flex gap-2 mt-6">
            {feedbacks.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveFeedback(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === activeFeedback 
                    ? 'w-8 bg-primeira' 
                    : 'w-3 bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`View review ${index + 1}`}
              />
            ))}
          </div>

          <div className="flex justify-center space-x-3 mt-8">
            <div>
              <a 
                className="flex items-center py-2 px-4 space-x-2 text-md text-white bg-primeira hover:bg-primeira/80 rounded-lg transition-all duration-300 font-semibold" 
                href="/PageReceivedFeedbacks"
              >
                <span>Read More Reviews</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 20 20" 
                  fill="currentColor" 
                  className="w-5 h-5"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
                    clipRule="evenodd" 
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Trust badges */}
          <div className="mt-8 pt-8 border-t border-white/20 w-full max-w-4xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primeira">5.0</div>
                <div className="text-sm text-white/80">Average Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primeira">98+</div>
                <div className="text-sm text-white/80">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primeira">500+</div>
                <div className="text-sm text-white/80">Jobs Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primeira">100%</div>
                <div className="text-sm text-white/80">Satisfaction</div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}