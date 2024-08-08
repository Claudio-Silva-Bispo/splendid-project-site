
export default function Principal() {
  return (
    <section className="bg-white">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between md:mt-20">
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 md:h-80 lg:h-96 xl:h-112 2xl:h-128">
        <img src="/assets/Logo/imagem-logo.jpeg" alt="Imagem com logo da empresa" className="object-contain h-92 md:h-80 lg:h-96 xl:h-112 2xl:h-128" />
        </div>

        <div className="flex flex-col md:justify-center md:p-6 md:text-center rounded-sm lg:max-w-md xl:max-w-xl lg:text-left">
          
          <h1 className="text-2xl font-bold leading-none md:text-5xl uppercase">
            Limpeza Residencial, Empresarial e Eventos de Qualidade 
            <span className="text-quinta"> para você e sua familía</span>
          </h1>

          <p className="mt-6 mb-8 md:text-lg sm:mb-12">
            Oferecemos serviços de limpeza profissional para manter sua casa impecável,
            <br className="hidden md:inline lg:hidden" /> com atenção aos detalhes e flexibilidade para se adequar às suas necessidades.
          </p>

          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <a
              rel="noopener noreferrer"
              href="#contato"
              className="px-8 py-3 text-lg font-semibold rounded bg-sexta hover:bg-quarta text-white"
            >
              Contato
            </a>
            <a
              rel="noopener noreferrer"
              href="#servicos"
              className="px-8 py-3 text-lg font-semibold border rounded hover:bg-quarta hover:text-white"
            >
              Nossos Serviços
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
