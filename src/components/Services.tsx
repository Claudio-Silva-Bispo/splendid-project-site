import React, { useState } from 'react';

import imagem from "../../public/assets/Service/quarto/quarto1.png"

const servicos = {
  cômodos: [
    {
      id: 1,
      name: 'Cozinha',
      images: [
        '/assets/Service/cozinha/cozinha1.png',
        '/assets/Service/cozinha/cozinha2.png',
        '/assets/Service/cozinha/cozinha4.png',
        '/assets/Service/cozinha/cozinha3.png'
      ],
      description: [
        'Limpeza de Cozinha',
        'A limpeza de cozinha oferece uma abordagem abrangente, garantindo superfícies brilhantes, eletrodomésticos livres de gordura e um ambiente higienizado.',
        'Oferecemos planos de agendamento diários, semanais ou mensais.',
        'Inclui a limpeza de bancadas, fogão, forno, geladeira, pisos e azulejos.',
        'Entre em contato para mais informações.'
      ]
    },
    {
      id: 2,
      name: 'Banheiro',
      images: [
        '/assets/Service/banheiro/banheiro1.png',
        '/assets/Service/banheiro/banheiro2.png',
        '/assets/Service/banheiro/banheiro3.png',
        '/assets/Service/banheiro/banheiro4.png',
      ],
      description: [
        'Desinfecção e limpeza profunda de sanitários, pisos e paredes.'
      ]
    },
    {
      id: 3,
      name: 'Sala',
      images: [
        '/assets/Service/sala/sala1.png',
        '/assets/Service/sala/sala2.png',
        '/assets/Service/sala/sala3.png',
        '/assets/Service/sala/sala4.png'
      ],
      description: [
        'Arrumação e limpeza de sofás, cortinas, carpetes e superfícies.'
      ]
    },
    {
      id: 4,
      name: 'Quarto',
      images: [
        '/assets/Service/quarto/quarto1.png',
        '/assets/Service/quarto/quarto2.png',
        '/assets/Service/quarto/quarto3.png',
        '/assets/Service/quarto/quarto4.png'
      ],
      description: [
        'Limpeza de móveis, lençóis e organização geral do espaço.'
      ]
    }
  ]
};

export default function Services() {
  const [selectedComodoIndex, setSelectedComodoIndex] = useState(0);

  const handlePrevClick = () => {
    setSelectedComodoIndex((prevIndex) => (prevIndex === 0 ? servicos.cômodos.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setSelectedComodoIndex((prevIndex) => (prevIndex === servicos.cômodos.length - 1 ? 0 : prevIndex + 1));
  };

  const visibleComodos = servicos.cômodos.slice(selectedComodoIndex, selectedComodoIndex + 3);

  return (
    <div className="bg-white" id='services'>

      <div className="container mx-auto p-4 my-6 space-y-2 text-center">
        <h2 className="text-3xl font-bold text-start md:text-center leading-tight uppercase">Serviços diferenciado e personalizado <br /> <span className="uppercase text-quinta">especialmente para você</span></h2>
      </div>

      <div className="pt-6">

        {/* Comodo Selector */}
        <div className="flex items-center justify-center space-x-4">
          <button onClick={handlePrevClick} className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex space-x-4">
            {visibleComodos.map((comodo) => (
              <button
                key={comodo.id}
                onClick={() => setSelectedComodoIndex(servicos.cômodos.findIndex(c => c.id === comodo.id))}
                className={`font-medium text-sm ${
                  selectedComodoIndex === servicos.cômodos.findIndex(c => c.id === comodo.id) ? 'text-quinta' : 'text-gray-900 hover:text-gray-600'
                }`}
              >
                {comodo.name}
              </button>
            ))}
          </div>

          <button onClick={handleNextClick} className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Galeria de imagens */}
        <div className="mx-auto mt-6 max-w-2xl px-6 lg:max-w-7xl lg:grid lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="aspect-w-3 aspect-h-4 overflow-hidden rounded-lg lg:block mb-5 md:mb-0">
            <img
              src={servicos.cômodos[selectedComodoIndex].images[0]}
              alt={`${servicos.cômodos[selectedComodoIndex].name} image 1`}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="aspect-w-2 aspect-h-1 overflow-hidden rounded-lg">
              <img
                src={servicos.cômodos[selectedComodoIndex].images[1]}
                alt={`${servicos.cômodos[selectedComodoIndex].name} image 2`}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="aspect-w-2 aspect-h-1 overflow-hidden rounded-lg">
              <img
                src={servicos.cômodos[selectedComodoIndex].images[2]}
                alt={`${servicos.cômodos[selectedComodoIndex].name} image 3`}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div className="aspect-w-3 aspect-h-4 overflow-hidden rounded-lg lg:block">
            <img
              src={servicos.cômodos[selectedComodoIndex].images[3]}
              alt={`${servicos.cômodos[selectedComodoIndex].name} image 4`}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>

        {/* Descrição do Cômodo */}
        <div className="mx-auto max-w-2xl px-6 pb-16 pt-10 sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            {servicos.cômodos[selectedComodoIndex].name}
          </h1>
          <div className="mt-4 space-y-6">
            {servicos.cômodos[selectedComodoIndex].description.map((line, index) => (
              <p key={index} className="text-base text-gray-900">
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
