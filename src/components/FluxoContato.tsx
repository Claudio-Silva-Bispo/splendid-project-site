
export default function FluxoContato(){
    return(
        <section className="dark:bg-gray-100 dark:text-gray-800">
            
            <div className="container max-w-5xl px-4 py-12 mx-auto">
                <div className="grid gap-4 mx-4 sm:grid-cols-12">
                    <div className="col-span-12 sm:col-span-3">
                        <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-[#E5332F]">
                            <h3 className="text-3xl font-semibold">Entre em Contato</h3>
                            <span className="text-sm font-bold tracking-wider uppercase dark:text-gray-600">Assistência Rápida</span>
                        </div>
                    </div>
                    <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                        <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-300">
                            <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-[#E5332F]">
                                <h3 className="text-xl font-semibold tracking-wide">Passo 1: Escolha o Serviço</h3>
                                <time className="text-xs tracking-wide uppercase dark:text-gray-600">Sempre disponível</time>
                                <p className="mt-3">Escolha entre os serviços oferecidos, como carga de bateria, troca de pneu, reboque e outros.</p>
                            </div>
                            <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-[#E5332F]">
                                <h3 className="text-xl font-semibold tracking-wide">Passo 2: Informe a Localização</h3>
                                <time className="text-xs tracking-wide uppercase dark:text-gray-600">Precisão é essencial</time>
                                <p className="mt-3">Forneça o endereço exato ou a localização atual para que possamos chegar rapidamente até você.</p>
                            </div>
                            <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-[#E5332F]">
                                <h3 className="text-xl font-semibold tracking-wide">Passo 3: Detalhe Adicional</h3>
                                <time className="text-xs tracking-wide uppercase dark:text-gray-600">Melhor assistência</time>
                                <p className="mt-3">Informe detalhes adicionais como o tipo de veículo, problemas específicos ou qualquer outra informação relevante.</p>
                            </div>
                            <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-[#E5332F]">
                                <h3 className="text-xl font-semibold tracking-wide">Contato</h3>
                                <time className="text-xs tracking-wide uppercase dark:text-gray-600">Fácil e rápido</time>
                                <p className="mt-3">Entre em contato conosco via telefone, WhatsApp ou chat ao vivo. Nossa equipe está disponível 24 horas por dia para ajudar você.</p>
                            </div>
                        </div>

                        <div>
                        <button type="submit" className="w-full py-2 px-4 font-semibold text-white rounded" style={{ backgroundColor: '#E5332F' }}>clique aqui e veja as opções de contato</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}