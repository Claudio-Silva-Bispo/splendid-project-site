import React from 'react';

export default function SobreEmpresa() {
    return (
        <div className="bg-white py-12">
            <div className="container mx-auto px-6 lg:px-20 mt-20">
                <header className="text-start py-12">
                    <h1 className="text-5xl font-bold text-gray-800 mb-6">Sobre a Villar Auto Socorro</h1>
                    <p className="text-lg text-gray-600">Fundada em 2024 por dois irmãos apaixonados por automóveis e por ajudar as pessoas, a Villar Auto Socorro surgiu com o propósito de ser a resposta imediata e confiável para motoristas em situações de emergência.</p>
                    <p className="text-lg text-gray-600">Com sede em São Paulo e atuação também no litoral paulista, nossa empresa nasceu da necessidade de proporcionar um serviço diferenciado e de alta qualidade para aqueles que enfrentam contratempos nas estradas.</p>
                </header>

                <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                    
                    <div className='flex flex-col justify-center items-center gap-10'>
                        <div className="flex flex-col justify-center text-start lg:text-left">
                            <h2 className="text-6xl font-bold text-gray-800 mb-6">Missão</h2>
                            
                            <p className="text-xl text-gray-600 leading-10">Oferecer atendimento de emergência rápido e eficiente, garantindo serviços de alta qualidade para nossos clientes, sempre priorizando suas necessidades e segurança.</p>

                        </div>

                        <div className="text-start">
                            <h2 className="text-6xl font-bold text-gray-800 mb-6">Visão</h2>
                            <p className="text-xl text-gray-600 leading-10">Ser reconhecida como a empresa líder em assistência veicular, destacando-se pela excelência no atendimento e na prestação de serviços, ajudando nossos clientes em momentos de emergência de forma rápida e confiável.</p>
                        </div>

                    </div>

                    <div className="flex flex-col justify-center">
                        <img src="/assets/logo-wando.jpeg" alt="Missão da empresa" className="rounded-lg shadow-lg"/>
                    </div>

                </section>

                <section className="text-center mb-12">
                    <h2 className="text-6xl font-bold text-gray-800 mb-6">Valores</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Compromisso</h3>
                            <p className="text-gray-600">Priorizar as necessidades dos clientes com atendimento ágil e eficiente.</p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Qualidade</h3>
                            <p className="text-gray-600">Garantir serviços de alta qualidade em todas as situações.</p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Empatia</h3>
                            <p className="text-gray-600">Ajudar o próximo com dedicação e respeito em momentos de emergência.</p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Integridade</h3>
                            <p className="text-gray-600">Atuar com transparência e ética em todas as interações.</p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Inovação</h3>
                            <p className="text-gray-600">Buscar continuamente melhorias para proporcionar a melhor assistência possível.</p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Agilidade</h3>
                            <p className="text-gray-600">Buscar continuamente melhorias para proporcionar atendimentos mais rápidos</p>
                        </div>
                    </div>
                </section>

                <section className="text-center mb-12">
                    <h2 className="text-6xl font-bold text-gray-800 mb-6">Nossos Serviços</h2>
                    <p className="text-lg text-gray-600 mb-6">Atendemos com orgulho as regiões de São Paulo e o litoral, oferecendo uma gama de serviços essenciais para motoristas:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Carga de Bateria</h3>
                            <p className="text-gray-600">Quando a bateria do seu veículo precisa de um impulso, oferecemos um serviço rápido de recarga.</p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Troca de Pneu</h3>
                            <p className="text-gray-600">Se você tiver um pneu furado, nossos profissionais realizam a troca de maneira eficiente.</p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Reboque de Motocicletas</h3>
                            <p className="text-gray-600">Transportamos sua motocicleta com segurança para onde você precisar.</p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Serviço de Chaveiro</h3>
                            <p className="text-gray-600">Se você trancar suas chaves dentro do carro, estamos aqui para ajudar a abrir o veículo.</p>
                        </div>

                    </div>
                </section>

                <section className="text-center mb-12">
                    <h2 className="text-6xl font-bold text-gray-800 mb-6">Compromisso com a Agilidade e Qualidade</h2>
                    <p className="text-lg text-gray-600 mb-6">Para garantir que nossos clientes sejam atendidos o mais rápido possível, contamos com uma frota estrategicamente localizada de veículos e motocicletas.</p>
                    <p className="text-lg text-gray-600 mb-6">Nosso compromisso com a agilidade e a qualidade é refletido em cada serviço que oferecemos, sempre guiados pelos nossos valores de compromisso, empatia, integridade e inovação.</p>
                    <p className="text-lg text-gray-600">Hoje, a Villar Auto Socorro é reconhecida como uma parceira de confiança para motoristas que precisam de assistência rápida e eficaz. Continuamos a crescer e a inovar, buscando sempre novas maneiras de melhorar nossos serviços e superar as expectativas dos nossos clientes. Seja em São Paulo ou no litoral, estamos aqui para ajudar, oferecendo a solução que você precisa, quando mais precisa.</p>
                </section>

                <section className="text-center">
                    <h2 className="text-6xl font-bold text-gray-800 mb-6">Nossa Equipe</h2>
                    <p className="text-lg text-gray-600 mb-6">Na Villar Auto Socorro, além da nossa equipe operacional pronta para atender emergências 24 horas por dia, também contamos com um time administrativo dedicado a fornecer suporte contínuo aos nossos clientes.</p>
                    <p className="text-lg text-gray-600 mb-6">Nossa equipe administrativa está disponível para auxiliá-lo em qualquer momento, garantindo que suas necessidades sejam atendidas de maneira eficaz e profissional.</p>
                    <p className="text-lg text-gray-600">Na Villar Auto Socorro, estamos comprometidos em oferecer não apenas serviços de alta qualidade, mas também um atendimento humano e dedicado. Estamos aqui para proporcionar tranquilidade aos nossos clientes em momentos de dificuldade na estrada. Conte conosco para ser sua solução confiável e rápida em situações de emergência automotiva.</p>
                </section>

                <section>
                <div className="relative flex items-center justify-center w-full dark:text-gray-900">
                    <button aria-label="Slide back" type="button" className="absolute left-0 z-30 p-2 ml-10 bg-opacity-50 rounded-full focus:outline-none focus:dark:bg-gray-600 focus:ring-2 focus:ring-offset-2 focus:dark:ring-gray-600 dark:bg-gray-50">
                        <svg width="8" height="14" fill="none" viewBox="0 0 8 14" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
                            <path d="M7 1L1 7L7 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                    </button>
                    <div className="flex items-center justify-start w-full h-full gap-6 py-4 mx-auto overflow-auto lg:gap-8">
                        <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                            <img className="object-cover object-center dark:bg-gray-500 h-96 aspect-square" src="/assets/ServicosEfetuados/WhatsApp Image 2024-06-29 at 19.40.25 (1).jpeg" alt="Image 1" />
                        </div>
                        <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                            <img className="object-cover object-center dark:bg-gray-500 h-96 aspect-square" src="/assets/ServicosEfetuados/WhatsApp Image 2024-06-29 at 19.40.25.jpeg" alt="Image 2" />
                        </div>
                        <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                            <img className="object-cover object-center dark:bg-gray-500 h-96 aspect-square" src="/assets/ServicosEfetuados/WhatsApp Image 2024-06-29 at 19.42.37.jpeg" alt="Image 3" />
                        </div>
                        <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                            <img className="object-cover object-center dark:bg-gray-500 h-96 aspect-square" src="https://source.unsplash.com/random/240x360/?4" alt="Image 4" />
                        </div>
                        <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                            <img className="object-cover object-center dark:bg-gray-500 h-96 aspect-square" src="https://source.unsplash.com/random/240x360/?5" alt="Image 5" />
                        </div>
                    </div>
                    <button aria-label="Slide forward" id="next" className="absolute right-0 z-30 p-2 mr-10 bg-opacity-50 rounded-full focus:outline-none focus:dark:bg-gray-600 focus:ring-2 focus:ring-offset-2 focus:dark:ring-gray-600 dark:bg-gray-50">
                        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
                            <path d="M1 1L7 7L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                    </button>
                </div>
            </section>

            </div>

            
        </div>
    );
}
