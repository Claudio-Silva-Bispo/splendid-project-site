import React from 'react';
import Image from 'next/image';
import imagem from '../../public/about-company/imagem-sobre-empresa-removebg-preview.png';

export default function About() {
  return (
    <div className="container p-0 min-w-full min-h-[70vh] bg-quarta grid grid-cols-1 justify-center items-center md:flex md:items-center md:justify-between">
      
      {/* Coluna da Imagem */}
      <div className="w-full h-full pt-10 md:pt-0">
        <img 
          src={imagem.src} 
          alt="Imagem mostrando borboletas" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Coluna do Texto */}
      <div className="w-full flex flex-col justify-center text-gray-800 md:text-center lg:text-left lg:pl-8 p-6 lg:p-12">
        <span className="text-5xl lg:text-6xl font-bold">About Us</span>
        <h1 className="py-4 text-3xl lg:text-5xl font-bold leading-tight text-segunda">
          Founded by an entrepreneur dedicated to care and affection
        </h1>
        <p className="pb-6 text-2xl lg:text-4xl">
          Our company was born out of the desire to transform each house into a new and welcoming home, where every detail reflects love, care, and dedication.
        </p>
      </div>
      
    </div>
  );
}
