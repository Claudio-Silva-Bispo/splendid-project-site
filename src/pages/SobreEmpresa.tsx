import React from 'react';

export default function SobreEmpresa() {
    return (
        <div className="bg-white py-12">
            <div className="container mx-auto px-6 lg:px-20 mt-20">
                <header className="text-start py-12">
                    <h1 className="text-5xl font-bold text-gray-800 mb-6">Sobre a Maria's Cleaning Service</h1>
                    <p className="text-lg text-gray-600">Falar sobre o casal e seus planos para seus clientes</p>
                </header>

                <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                    
                    <div className='flex flex-col justify-center items-center gap-10'>
                        <div className="flex flex-col justify-center text-start lg:text-left">
                            <h2 className="text-6xl font-bold text-gray-800 mb-6">Missão</h2>
                            
                            <p className="text-xl text-gray-600 leading-10">Oferecer atendimento rápido e eficiente, garantindo serviços de alta qualidade para nossos clientes, sempre priorizando suas necessidades e segurança.</p>

                        </div>

                        <div className="text-start">
                            <h2 className="text-6xl font-bold text-gray-800 mb-6">Visão</h2>
                            <p className="text-xl text-gray-600 leading-10">Ser reconhecida como a empresa líder em limpeza e qualidade, destacando-se pela excelência no atendimento e na prestação de serviços, ajudando nossos clientes em momentos de emergência de forma rápida e confiável.</p>
                        </div>

                    </div>

                    <div className="flex flex-col justify-center">
                        <img src="../../public/assets/Logo/imagem-logo.jpeg" alt="Foto do Time aqui" className="rounded-lg shadow-lg"/>
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
                    <p className="text-lg text-gray-600 mb-6">
                        Colocar aqui as regiões de atendimento. Saber se tem mais serviços que a empresa fornece
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold text-gray-800 mb-4">Limpeza Residencial</h3>
                        <p className="text-gray-600">Garantimos que sua casa esteja sempre limpa e organizada.</p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold text-gray-800 mb-4">Limpeza Comercial</h3>
                        <p className="text-gray-600">Serviços de limpeza para escritórios e estabelecimentos comerciais.</p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold text-gray-800 mb-4">Limpeza de Pós-Obra</h3>
                        <p className="text-gray-600">Transforme seu espaço recém-construído em um ambiente habitável.</p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold text-gray-800 mb-4">Limpeza de Janelas</h3>
                        <p className="text-gray-600">Manter suas janelas impecáveis e sem manchas.</p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold text-gray-800 mb-4">Higienização de Estofados</h3>
                        <p className="text-gray-600">Cuidamos dos seus estofados para garantir sua durabilidade.</p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold text-gray-800 mb-4">Serviços Personalizados</h3>
                        <p className="text-gray-600">Entre em contato para personalizar um serviço que atenda às suas necessidades.</p>
                        </div>
                    </div>
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
                                <img className="object-cover object-center dark:bg-gray-500 h-96 aspect-square" src="https://source.unsplash.com/random/240x360/?4" alt="Image 1" />
                            </div>
                            <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                                <img className="object-cover object-center dark:bg-gray-500 h-96 aspect-square" src="https://source.unsplash.com/random/240x360/?4" alt="Image 2" />
                            </div>
                            <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                                <img className="object-cover object-center dark:bg-gray-500 h-96 aspect-square" src="https://source.unsplash.com/random/240x360/?4" alt="Image 3" />
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
