import logo from '../../public/assets/Logo/fundo-main-removebg-preview.png';

export default function Main() {
  // Cidades atendidas - IMPORTANTE PARA SEO LOCAL
  const citiesServed = [
    'Seattle',
    'Bellevue',
    'Redmond',
    'Kirkland',
    'Tacoma',
    'Everett',
    'Renton',
    'Kent'
  ];

  return (
    <section className="bg-[#C5E1CB]" id='habilitar-menu'>
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:flex-row lg:justify-between  min-h-[100vh]">

        <div className="flex flex-col md:flex-row items-center">
          <div className="flex flex-col md:justify-center md:p-6 rounded-sm lg:max-w-md xl:max-w-xl lg:text-left">

            <h1 className="text-3xl md:text-md leading-none lg:text-4xl text-white pt-20 md:pt-0">
              Professional Cleaning Services in Seattle, Bellevue & Tacoma
            </h1>

            {/* Badge de localização - ESSENCIAL PARA SEO LOCAL */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mt-4 mb-4 w-fit">
              <span className="text-2xl">📍</span>
              <span className="font-semibold text-sm text-primeira">
                Serving Greater Seattle Area
              </span>
            </div>

            <p className="mt-3 md:mt-6 mb-4 md:mb-8 text-sm lg:text-xl sm:mb-12 text-white">
              We provide the best solutions for a Clean Environment. Professional residential and commercial cleaning services in Seattle, Bellevue, Tacoma, and surrounding areas.
            </p>

            {/* Área de serviço expandida - IMPORTANTE PARA SEO */}
            <div className="mb-6 p-4 rounded-lg bg-white/10 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-2 text-white">
                <span className="text-lg">🗺️</span>
                <span className="font-semibold text-sm">We Proudly Serve:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {citiesServed.map((city, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-white/20 text-green-800 backdrop-blur-sm"
                  >
                    {city}, WA
                  </span>
                ))}
              </div>
              <p className="text-xs mt-2 text-green-800">
                & surrounding King County areas
              </p>
            </div>

            <div className="flex flex-col space-y-4 sm:items-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <a
                rel="noopener noreferrer"
                href="tel:+2063763755" 
                aria-label="Call Splendid Cleaning Service" 
                target='_blank'
                className="px-8 py-3 text-md text-center rounded bg-primeira hover:bg-sexta text-white uppercase font-bold transition-all duration-300 hover:shadow-lg"
              >
                📞 Call Now
              </a>
              <a
                rel="noopener noreferrer"
                href="#services"
                className="px-8 py-3 text-xl rounded bg-segunda text-white hover:bg-setima hover:text-white uppercase text-center font-bold transition-all duration-300"
              >
                Our Services
              </a>
            </div>
          </div>

          <div className="flex items-center lg:ml-6 lg:mt-0 mt-8">
            <img 
              src={logo.src} 
              alt="Splendid Cleaning Service - Professional Cleaning in Seattle, Bellevue, Tacoma" 
              className="w-[300px] md:w-[800px] h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}