export default function FluxoContato() {
    return (
      <section className="bg-gray-100 text-gray-800">
        <div className="container max-w-5xl px-4 py-12 mx-auto">
          <div className="grid gap-4 mx-4 sm:grid-cols-12">
            <div className="col-span-12 sm:col-span-3">
              
              <div className="md:text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-primeira">
                <h3 className="text-3xl font-semibold">Entre em Contato</h3>
                
                <span className="text-sm font-bold tracking-wider uppercase text-gray-600">
                  Serviços personalizados do seu jeito e no seu horário
                </span>
              </div>
            </div>

            <div className="relative col-span-12 md:px-4 md:space-y-6 sm:col-span-9">
              
              <div className="col-span-12 space-y-12 relative md:px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-300">
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-quinta">
                  <h3 className="text-xl font-semibold tracking-wide">
                    Passo 1: Escolha o Serviço
                  </h3>
                  <time className="text-xs tracking-wide uppercase text-gray-600">
                    Disponível para você
                  </time>
                  <p className="mt-3">
                    Escolha entre os serviços oferecidos, como limpeza
                    residencial, limpeza comercial, limpeza de pós-obra, e outros.
                  </p>
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-quinta">
                  <h3 className="text-xl font-semibold tracking-wide">
                    Passo 2: Agende o Horário
                  </h3>
                  <time className="text-xs tracking-wide uppercase text-gray-600">
                    Flexibilidade é essencial
                  </time>
                  <p className="mt-3">
                    Escolha a data e horário que melhor se adequem à sua
                    necessidade. Oferecemos flexibilidade de agendamento para
                    atender você.
                  </p>
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-quinta">
                  <h3 className="text-xl font-semibold tracking-wide">
                    Passo 3: Detalhe Adicional
                  </h3>
                  <time className="text-xs tracking-wide uppercase text-gray-600">
                    Melhor assistência
                  </time>
                  <p className="mt-3">
                    Informe detalhes adicionais, como tipo de limpeza desejada,
                    áreas de foco, ou qualquer outra informação relevante para
                    personalizar o serviço.
                  </p>
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-quinta">
                  <h3 className="text-xl font-semibold tracking-wide">Contato</h3>
                  <time className="text-xs tracking-wide uppercase text-gray-600">
                    Fácil e rápido
                  </time>
                  <p className="mt-3">
                    Entre em contato conosco via Telefone, E-mail, SMS ou WhatsApp. Nossa equipe está disponível para ajudar você.
                  </p>
                </div>
              </div>
  
              <div>
                <button
                  type="submit"
                  className="w-full py-2 px-4 font-semibold text-white rounded mt-10 md:mt-0"
                  style={{ backgroundColor: '#FF7F2C' }}
                >
                  Entre em contato
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  