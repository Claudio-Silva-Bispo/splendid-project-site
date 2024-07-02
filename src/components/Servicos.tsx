
export default function Servicos(){
    return(
        <section className="m-4 md:m-8 dark:bg-gray-100 dark:text-gray-800 md:p-10" id="servicos">
            
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
                    <path d="M21 13.5V8h-1V5a1 1 0 00-1-1h-4V3a1 1 0 00-1-1H4a1 1 0 00-1 1v11H2a1 1 0 000 2h1a3 3 0 006 0h4a3 3 0 006 0h2a1 1 0 000-2h-1zM5 4h9v9H5V4zm3 13a1 1 0 11-1-1 1 1 0 011 1zm10 0a1 1 0 11-1-1 1 1 0 011 1zm-3-5H5v-2h10zM18 5h-1v7h1z"/>
                    </svg>


                    <h3 className="my-3 text-3xl font-semibold">Reboque</h3>
                    <div className="space-y-1 leading-tight">
                        <p>Reboque básico e avançado</p>
                        <p>Assistência 24/7</p>
                        <p>Segurança e confiabilidade</p>
                    </div>
                </div>

                <div className="flex flex-col items-center p-4">
                
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 dark:text-[#E5332F]">
                    <path d="M12 2a1 1 0 01.948.684l1.846 5.538a6.006 6.006 0 014.882 1.146 5.987 5.987 0 011.882 5.34A4 4 0 0116 18H8a4 4 0 01-4.558-3.293 5.99 5.99 0 012.44-6.201 6.006 6.006 0 014.882-1.146l1.846-5.538A1 1 0 0112 2zm0 3.732l-1.112 3.338a1 1 0 01-.948.684H8.47a4.005 4.005 0 00-3.905 3.905 3.992 3.992 0 00.631 2.307A2 2 0 018 16h8a2 2 0 001.804-2.862 3.992 3.992 0 00-.631-2.307 4.005 4.005 0 00-3.905-3.905h-1.47a1 1 0 01-.948-.684L12 5.732z"/>
                    </svg>

                    <h3 className="my-3 text-3xl font-semibold">Troca de Óleo</h3>
                    <div className="space-y-1 leading-tight">
                        <p>Serviço completo no local</p>
                        <p>Óleo de alta qualidade</p>
                        <p>Profissionais treinados</p>
                    </div>
                </div>

                <div className="flex flex-col items-center p-4">
                    
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 dark:text-[#E5332F]">
                    <path d="M12 1a5 5 0 00-5 5c0 1.657.792 3.128 2 4.043v1.385L4.293 16.135a.996.996 0 00-.293.707V19a1 1 0 001 1h2a1 1 0 001-1v-1h1v1a1 1 0 001 1h1v1a1 1 0 001 1h2a1 1 0 001-1v-2.243a.996.996 0 00-.293-.707L15 11.428V10.043A5.001 5.001 0 0017 6a5 5 0 00-5-5zm0 2a3 3 0 110 6 3 3 0 010-6z"/>
                    </svg>


                    <h3 className="my-3 text-3xl font-semibold">Desbloqueio de Porta</h3>
                    <div className="space-y-1 leading-tight">
                        <p>Assistência rápida</p>
                        <p>Serviço 24 horas</p>
                        <p>Profissionais especializados</p>
                    </div>
                </div>

                <div className="flex flex-col items-center p-4">
                    
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 dark:text-[#E5332F]">
                    <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 2c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8zm-1 3v5h-3l4 4 4-4h-3V7h-2z"/>
                    </svg>


                    <h3 className="my-3 text-3xl font-semibold">Manutenção Preventiva</h3>
                    <div className="space-y-1 leading-tight">
                        <p>Verificações regulares</p>
                        <p>Manutenção preventiva</p>
                        <p>Suporte contínuo</p>
                    </div>
                </div>

            </div>

        </section>

    );
}