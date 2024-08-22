import React from 'react';
import Image from 'next/image';

import imagem from "../../public/assets/Logo/imagem-logo-oficial.png"

export default function About() {
  return (
    <div>
      <div className="container grid grid-cols-12 mx-auto p-6 md:p-0">
        <div className="flex flex-col justify-center col-span-12 align-middle bg-no-repeat bg-cover lg:col-span-6 lg:h-auto">
          
          <div className="flex flex-col md:items-center md:p-8 py-12 text-start md:text-center text-gray-800">
            <span>About Us</span>

            <h1 className="py-4 text-2xl md:text-5xl font-bold uppercase text-start md:text-center leading-tight text-setima">
            Founded by an entrepreneur dedicated to care and affection
            </h1>

            <p className="pb-6 text-start md:text-center">
            Our company was born out of the desire to transform each house into a new and welcoming home, where every detail reflects love, care, and dedication.
            </p>

          </div>

          <div className='flex justify-center'>
            <Image src={imagem.src} width={300} height={300} alt='Imagem logo da empresa'></Image>
          </div>

        </div>

        <div className="flex flex-col col-span-12 md:p-6 divide-y lg:col-span-6 lg:p-10">
          
          <div className="pt-6 pb-4 space-y-2">
            <span>Mission</span>

            <h1 className="text-2xl md:text-3xl font-bold text-primeira">
            Transforming houses into welcoming homes
            </h1>
            <p>
            Our mission is to bring care, attention, and a touch of love to every space, ensuring that every home reflects the care we dedicate to our services.
            </p>

            <a
              rel="noopener noreferrer"
              href="/AboutCompany"
              className="inline-flex items-center py-2 space-x-2 text-sm text-black"
            >
              <span>Learn more</span>
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
            <span>Vision</span>
            <h1 className="text-2xl md:text-3xl font-bold text-primeira">To be a reference in care and welcoming</h1>
            <p>
            aim to be recognized for our dedication to transforming houses into spaces of love and comfort, where every detail makes a di
            </p>
            <a
              rel="noopener noreferrer"
              href="/AboutCompany"
              className="inline-flex items-center py-2 space-x-2 text-sm text-black"
            >
              <span>Learn more</span>
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
            <span>Values</span>

            <h1 className="text-2xl md:text-3xl font-bold text-primeira">
            Care in every detail
            </h1>

            <p>
            We value the care and attention in every service we perform, always striving to deliver more than expected, transforming spaces with love and dedication.
            </p>
            <a
              rel="noopener noreferrer"
              href="/AboutCompany"
              className="inline-flex items-center py-2 space-x-2 text-sm text-black"
            >
              <span>Learn more</span>

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
