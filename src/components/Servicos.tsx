
export default function Servicos(){
    return(
        <section className="m-4 md:m-8 bg-gray-100 text-gray-800 md:p-10 text-center" id="servicos">
            
            <div className="container mx-auto p-4 my-6 space-y-2 text-center">
                <h2 className="text-5xl font-bold">Serviços 24 horas para você</h2>
                <p className="dark:text-gray-600">Atendimento rápido e eficiente para suas emergências veiculares</p>
            </div>

            <div className="container mx-auto grid justify-center gap-4 md:grid-cols-2 lg:grid-cols-3">
                
                <div className="flex flex-col items-center p-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 text-[#E5332F]">
                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                    </svg>
                    <h3 className="my-3 text-3xl font-semibold">Carga de Bateria</h3>
                    <div className="space-y-1 leading-tight">
                        <p>Serviço rápido e eficiente</p>
                        <p>Atendimento 24 horas</p>
                        <p>Profissionais qualificados</p>
                    </div>
                </div>

                <div className="flex flex-col items-center p-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 dark:text-[#E5332F]">
                    <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 2a8 8 0 110 16 8 8 0 010-16zm0 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zm0 2a4.5 4.5 0 110 9 4.5 4.5 0 010-9z"/>
                    </svg>

                    <h3 className="my-3 text-3xl font-semibold">Troca de Pneu</h3>
                    
                    <div className="space-y-1 leading-tight">
                        <p>Substituição segura e rápida</p>
                        <p>Disponibilidade imediata</p>
                        <p>Equipamento de qualidade</p>
                    </div>
                </div>
 
                <div className="flex flex-col items-center p-4">
                    
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 dark:text-[#E5332F]">
                    <path d="M12 1a5 5 0 00-5 5c0 1.657.792 3.128 2 4.043v1.385L4.293 16.135a.996.996 0 00-.293.707V19a1 1 0 001 1h2a1 1 0 001-1v-1h1v1a1 1 0 001 1h1v1a1 1 0 001 1h2a1 1 0 001-1v-2.243a.996.996 0 00-.293-.707L15 11.428V10.043A5.001 5.001 0 0017 6a5 5 0 00-5-5zm0 2a3 3 0 110 6 3 3 0 010-6z"/>
                    </svg>


                    <h3 className="my-3 text-3xl font-semibold">Chaveiro</h3>
                    
                    <div className="space-y-1 leading-tight">
                        <p>Assistência rápida</p>
                        <p>Serviço 24 horas</p>
                        <p>Profissionais especializados</p>
                        <p>Somente para abertura do veículo</p>
                    </div>
                </div>

            

            </div>

        </section>

    );
}