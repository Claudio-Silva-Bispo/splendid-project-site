import React from 'react';
import Image from 'next/image';

import imagem2 from "../../public/assets/mockup-logo.png"

export default function AboutCompany() {
    return (
        <div className="bg-white py-12" id='about-company'>
            <div className="container mx-auto px-6 lg:px-20 mt-20">
                
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                    
                    <div className='flex flex-col justify-center items-center gap-10'>
                        
                        <div>
                        <h1 className="text-5xl font-bold  mb-6 text-primeira uppercase">Sobre a Splendid Cleaning Service</h1>
                        <p className="text-xl text-gray-600 leading-10">Fundada com amor e dedicação, nossa missão é transformar cada casa em um lar acolhedor.</p>
                        </div>
                        
                        <div className="flex flex-col justify-center text-start lg:text-left">
                            <h2 className="text-6xl font-bold text-gray-800 mb-6">Missão</h2>
                            
                            <p className="text-xl text-gray-600 leading-10">Transformar ambientes com carinho e dedicação, proporcionando lares limpos, organizados e cheios de vida, onde cada detalhe reflete nosso cuidado e zelo.</p>

                        </div>

                        <div className="text-start">
                            <h2 className="text-6xl font-bold text-gray-800 mb-6">Visão</h2>
                            <p className="text-xl text-gray-600 leading-10">Ser reconhecida como a empresa que traz aconchego e renovação a cada lar, destacando-se pela excelência em criar espaços que inspiram conforto e bem-estar.</p>
                        </div>

                    </div>

                    <div className="flex flex-col justify-center">
                        <img src='/assets/mockup-logo.png' alt="Foto do Time aqui"/>
                    </div>

                </section>

                <section className="text-center mb-12">
                    <h2 className="text-6xl font-bold text-primeira mb-6">Valores</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                        
                        <div className="bg-gray-100 p-6 rounded-lg shadow-lg ">
                            <h3 className="text-xl font-bold text-gray-800 mb-4 ">Carinho</h3>

                            <p className="text-gray-600 ">Cuidamos de cada detalhe para garantir que cada casa se torne um verdadeiro lar.</p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Qualidade</h3>
                            <p className="text-gray-600">Nos dedicamos a entregar serviços de excelência que superam as expectativas.</p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Empatia</h3>
                            <p className="text-gray-600">Entendemos as necessidades dos nossos clientes e trabalhamos com dedicação para atendê-las.</p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Integridade</h3>
                            <p className="text-gray-600">Atuamos com transparência e ética em todas as nossas interações.</p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Inovação</h3>
                            <p className="text-gray-600">Buscamos continuamente novas formas de melhorar e oferecer serviços que encantam.</p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Agilidade</h3>
                            <p className="text-gray-600">Atendemos rapidamente, sem comprometer a qualidade e o carinho em cada serviço.</p>
                        </div>
                    </div>
                </section>

                <section className="text-center mb-12">
                    <h2 className="text-6xl font-bold mb-6 text-segunda">Nossos Serviços</h2>
                    <p className="text-lg text-gray-600 mb-6">
                        Atuamos em diversas regiões, oferecendo uma variedade de serviços que transformam ambientes em lares acolhedores.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Limpeza Residencial</h3>
                            <p className="text-gray-600">Garantimos que sua casa esteja sempre limpa, organizada e cheia de aconchego.</p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Limpeza Comercial</h3>
                            <p className="text-gray-600">Oferecemos serviços que transformam ambientes de trabalho em espaços acolhedores.</p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Limpeza de Pós-Obra</h3>
                            <p className="text-gray-600">Transformamos seu espaço recém-construído em um ambiente pronto para ser habitado.</p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Limpeza de Janelas</h3>
                            <p className="text-gray-600">Cuidamos para que suas janelas estejam sempre impecáveis, deixando a luz natural invadir seu lar.</p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Higienização de Estofados</h3>
                            <p className="text-gray-600">Tratamos seus estofados com carinho, garantindo sua durabilidade e conforto.</p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Serviços Personalizados</h3>
                            <p className="text-gray-600">Entre em contato para personalizar um serviço que atenda às suas necessidades específicas.</p>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="relative flex items-center justify-center w-full dark:text-gray-900">
                        
                        <button aria-label="Slide back" type="button" className="absolute left-0 z-30 p-2 ml-10 bg-opacity-50 rounded-full focus:outline-none focus:dark:bg-primeira focus:ring-2 focus:ring-offset-2 focus:dark:ring-gray-600 dark:bg-gray-50">
                            <svg width="8" height="14" fill="none" viewBox="0 0 8 14" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
                                <path d="M7 1L1 7L7 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </button>

                        <div className="flex items-center justify-start w-full h-full gap-6 py-4 mx-auto overflow-auto lg:gap-8">
                            <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                                <img className="object-cover object-center dark:bg-gray-500 h-96 aspect-square" src="/assets/Service/chao.webp" alt="Image 1"/>
                            </div>
                            <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                                <img className="object-cover object-center dark:bg-gray-500 h-96 aspect-square" src="/assets/Service/cozinha.webp" alt="Image 2" />
                            </div>
                            <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                                <img className="object-cover object-center dark:bg-gray-500 h-96 aspect-square" src="/assets/Service/fogao.webp" alt="Image 3" />
                            </div>
                            <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                                <img className="object-cover object-center dark:bg-gray-500 h-96 aspect-square" src="/assets/Service/louca.webp" alt="Image 4" />
                            </div>
                            <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                                <img className="object-cover object-center dark:bg-gray-500 h-96 aspect-square" src="https://source.unsplash.com/random/240x360/?5" alt="Image 5" />
                            </div>
                        </div>

                        <button aria-label="Slide forward" id="next" className="absolute right-0 z-30 p-2 mr-10 bg-opacity-50 rounded-full focus:outline-none focus:dark:bg-primeira focus:ring-2 focus:ring-offset-2 focus:dark:ring-primeira dark:bg-gray-50">
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
