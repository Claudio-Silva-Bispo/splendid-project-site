import logo from '../../public/assets/Logo/fundo-main-removebg-preview.png';

export default function Main() {
  return (
    <section className="bg-[#C5E1CB]">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between md:mt-20 min-h-[100vh]">

        <div className="flex flex-col md:flex-row items-center">
          <div className="flex flex-col md:justify-center md:p-6 rounded-sm lg:max-w-md xl:max-w-xl lg:text-left">

            <h1 className="text-5xl md:text-md leading-none lg:text-6xl text-white pt-40 md:pt-0">
              Professional cleaning services
            </h1>

            <p className="mt-3 md:mt-6 mb-4 md:mb-8 text-2xl sm:mb-12 text-white">
              We provide the best solutions for a Clean Environment. If you need any help in cleaning or maintenance.
            </p>

            <div className="flex flex-col space-y-4 sm:items-center  sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <a
                rel="noopener noreferrer"
                href="tel:+2063763755" aria-label="Call" target='_blank'
                className="px-8 py-3 text-xl text-center rounded bg-primeira hover:bg-sexta text-white uppercase font-bold"
              >
                Contact
              </a>
              <a
                rel="noopener noreferrer"
                href="#services"
                className="px-8 py-3 text-xl rounded bg-segunda text-white hover:bg-setima hover:text-white uppercase text-center font-bold"
              >
                Our Services
              </a>
            </div>
          </div>

          <div className="flex items-center lg:ml-6 lg:mt-0 mt-8">
            <img src={logo.src} alt="logo" className="w-[300px] md:w-[800px] h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}
