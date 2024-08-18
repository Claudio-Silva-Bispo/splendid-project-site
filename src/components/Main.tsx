
export default function Main() {
  return (
    <section
      className="relative bg-center bg-cover bg-no-repeat pt-20 md:opacity-80"
      style={{
        backgroundImage: "url('/assets/Main/imagem-bg.png')",
        height: "100vh",
      }}
    >
      <div className="container flex flex-col justify-center  p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between md:mt-20">
        
        <div className="flex flex-col md:justify-center md:p-6 md:text-center rounded-sm lg:max-w-md xl:max-w-xl lg:text-left">
          
          <h1 className="text-4xl font-bold leading-none md:text-6xl text-white pt-20 md:pt-0">
            Professional Cleaning Services Provider
          </h1>

          <p className="mt-6 mb-8 md:text-2xl sm:mb-12 text-white">
            We provide best solutions for a Clean Environment. If you need any
            help in cleaning or maintenance.
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <a
              rel="noopener noreferrer"
              href="#contact"
              className="px-8 py-3 text-lg font-semibold  text-center rounded bg-primeira hover:bg-segunda text-white"
            >
              Contato
            </a>
            <a
              rel="noopener noreferrer"
              href="#services"
              className="px-8 py-3 text-lg font-semibold  rounded bg-segunda text-white hover:bg-primeira hover:text-white text-center"
            >
              Nossos Serviços
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
