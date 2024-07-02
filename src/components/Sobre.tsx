import React from 'react';

export default function Sobre() {
    return (
        
        <div>
            <div className="container grid grid-cols-12 mx-auto p-5 md:p-0">
                
                <div className="flex flex-col justify-center col-span-12 align-middle bg-no-repeat bg-cover lg:col-span-6 lg:h-auto" >
                    <div className="flex flex-col items-center p-8 py-12 text-center text-gray-800">
                        <span>Sobre nós</span>
                        
                        <h1 className="py-4 text-2xl md:text-5xl font-bold uppercase text-start md:text-center leading-tight">Fundada em 2024 por dois irmãos apaixonados por automóveis e por ajudar as pessoas</h1>
                        
                        <p className="pb-6 text-start md:text-center">nossa empresa nasceu da necessidade de proporcionar um serviço diferenciado e de alta qualidade para aqueles que enfrentam contratempos nas estradas.</p>
                        
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-7 h-7">
                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                        </svg>
                    </div>
                </div>

                <div className="flex flex-col col-span-12 p-6 divide-y lg:col-span-6 lg:p-10 dark:divide-gray-300">
                    <div className="pt-6 pb-4 space-y-2">
                        
                        <span>Missão</span>
                        
                        <h1 className="text-3xl font-bold">Oferecer atendimento de emergência</h1>
                        <p>rápido e eficiente, garantindo serviços de alta qualidade para nossos clientes, sempre priorizando suas necessidades e segurança.</p>
                        
                        <a rel="noopener noreferrer" href="/SobreEmpresa" className="inline-flex items-center py-2 space-x-2 text-sm text-[#E5332F]">
                            <span>Read more</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            </svg>
                        </a>
                    </div>

                    <div className="pt-6 pb-4 space-y-2">
                        <span>Visão</span>
                        <h1 className="text-3xl font-bold">Ser reconhecida</h1>
                        <p>como a empresa líder em assistência veicular, destacando-se pela excelência no atendimento e na prestação de serviços, ajudando nossos clientes em momentos de emergência de forma rápida e confiável.</p>
                        <a rel="noopener noreferrer" href="/SobreEmpresa" className="inline-flex items-center py-2 space-x-2 text-sm text-[#E5332F]">
                            <span>Read more</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            </svg>
                        </a>
                    </div>

                    <div className="pt-6 pb-4 space-y-2">
                        <span>Valores</span>
                        
                        <h1 className="text-3xl font-bold">Priorizar as necessidades dos clientes</h1>
                        
                        <p>com atendimento ágil e eficiente.</p>
                        <a rel="noopener noreferrer" href="/SobreEmpresa" className="inline-flex items-center py-2 space-x-2 text-sm text-[#E5332F]">

                            <span>Read more</span>

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
