import React from 'react';
import Image from 'next/image';

import imagem from "../../public/assets/Logo/imagem-logo-oficial.png"

export default function About() {
  return (
    <div>
      <div className="container grid grid-cols-12 mx-auto p-6 md:p-0">
        <div className="flex flex-col justify-center col-span-12 align-middle bg-no-repeat bg-cover lg:col-span-6 lg:h-auto">
          
          <div className="flex flex-col md:items-center md:p-8 py-12 text-start md:text-center text-gray-800">
            <span>Sobre nós</span>

            <h1 className="py-4 text-2xl md:text-5xl font-bold uppercase text-start md:text-center leading-tight text-setima">
              Fundada por uma empresária dedicada ao cuidado e carinho
            </h1>

            <p className="pb-6 text-start md:text-center">
              Nossa empresa nasceu do desejo de transformar cada casa em um lar
              novo e acolhedor, onde cada detalhe reflete amor, zelo e
              dedicação.
            </p>

          </div>

          <div className='flex justify-center'>
            <Image src={imagem.src} width={300} height={300} alt='Imagem logo da empresa'></Image>
          </div>

        </div>

        <div className="flex flex-col col-span-12 md:p-6 divide-y lg:col-span-6 lg:p-10">
          
          <div className="pt-6 pb-4 space-y-2">
            <span>Missão</span>

            <h1 className="text-2xl md:text-3xl font-bold text-primeira">
              Transformar casas em lares acolhedores
            </h1>
            <p>
              Nossa missão é levar carinho, zelo e um toque de amor a cada
              espaço, garantindo que cada lar reflita o cuidado que dedicamos
              em nossos serviços.
            </p>

            <a
              rel="noopener noreferrer"
              href="/AboutCompany"
              className="inline-flex items-center py-2 space-x-2 text-sm text-black"
            >
              <span>Saiba mais</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>

          <div className="pt-6 pb-4 space-y-2">
            <span>Visão</span>
            <h1 className="text-2xl md:text-3xl font-bold text-primeira">Ser referência em cuidado e acolhimento</h1>
            <p>
              Almejamos ser reconhecidos pela nossa dedicação em transformar
              casas em espaços de amor e conforto, onde cada detalhe faz a
              diferença na vida de nossos clientes.
            </p>
            <a
              rel="noopener noreferrer"
              href="/AboutCompany"
              className="inline-flex items-center py-2 space-x-2 text-sm text-black"
            >
              <span>Saiba mais</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>

          <div className="pt-6 pb-4 space-y-2">
            <span>Valores</span>

            <h1 className="text-2xl md:text-3xl font-bold text-primeira">
              Carinho em cada detalhe
            </h1>

            <p>
              Valorizamos o cuidado e a atenção em cada serviço que realizamos,
              sempre buscando entregar mais do que o esperado, transformando
              ambientes com amor e dedicação.
            </p>
            <a
              rel="noopener noreferrer"
              href="/AboutCompany"
              className="inline-flex items-center py-2 space-x-2 text-sm text-black"
            >
              <span>Saiba mais</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
