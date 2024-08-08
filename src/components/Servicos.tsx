import React, { useState } from 'react';

const servicos = {
  cômodos: [
    {
      id: 1,
      name: 'Cozinha',
      images: [
        'https://files.oaiusercontent.com/file-DZcZte1TO9s10Q9UgFaz7MQy?se=2024-08-08T15%3A47%3A17Z&sp=r&sv=2023-11-03&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Daa202079-66bb-4bf3-b68e-a4b1ecc1b72a.webp&sig=fYC4vJKe%2BAwwSNLSmLKSP9PwEaZeZJDWunHaN871BEc%3D',
        'https://files.oaiusercontent.com/file-zxVF8gxpvHA6u9Ilm4aupQT5?se=2024-08-08T15%3A48%3A38Z&sp=r&sv=2023-11-03&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D29706a5e-e40d-4177-80c3-016b6210080f.webp&sig=nXa3vqy1AuIV31ltNJ8flzLGeRQxwlpXY5PEevErHOU%3D',
        'https://files.oaiusercontent.com/file-soovYI5fAn1oQOWs7KFvWsSp?se=2024-08-08T15%3A48%3A45Z&sp=r&sv=2023-11-03&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dfe3720c4-926c-4231-9644-d613b4272893.webp&sig=rw%2B9Pgffeop7UciEzBQMeovgicXShXdOhoOV1mXdGCk%3D',
        'https://files.oaiusercontent.com/file-keeaKnCC8pef8REKFnwpwYvA?se=2024-08-08T15%3A48%3A52Z&sp=r&sv=2023-11-03&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D5c73a11b-ca95-4c43-a6cc-77f978b9014c.webp&sig=yYJXCOluHnPmQgTDCHAtmVzGkDu/mO6s9O8qyiiJhLg%3D',
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
        'https://files.oaiusercontent.com/file-vcxjhBvgMfD6d1CU7mmCZkeM?se=2024-08-08T16%3A08%3A00Z&sp=r&sv=2023-11-03&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D0d38be62-5138-4cea-bc8d-aaae2163311a.webp&sig=yUObjcwzHDGjpuJPnrHZX1rJYmj0R0cAsaVPyxweMgI%3D',
        'https://files.oaiusercontent.com/file-rEPB6TipablaTKvuILfR8Fcr?se=2024-08-08T16%3A08%3A14Z&sp=r&sv=2023-11-03&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Deb987ae8-001b-4b02-ba77-9665d671e578.webp&sig=fkr95Mw9bWRbkp0A61I%2Bsscx4rKNASj9g2uQzmah9fM%3D',
        'https://files.oaiusercontent.com/file-N1YXAwHoG2TSANZMcUmGQjiV?se=2024-08-08T16%3A08%3A21Z&sp=r&sv=2023-11-03&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D609ea848-e35f-4229-89c1-b51d96159e4b.webp&sig=%2BsDERCkOF6uT9MRI6Kz9UTpQm6fSdOJaArt08Oy0YH8%3D',
        'https://files.oaiusercontent.com/file-36PrFker7KTUrfqanoXC4N4o?se=2024-08-08T16%3A08%3A46Z&sp=r&sv=2023-11-03&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D8f1cfcee-70d7-4ad4-8dac-73bc9c2a5555.webp&sig=x/6dLYRFt4x%2BvcOspXQEvITjs9pODv0D2r4nmq5EGQo%3D',
      ],
      description: [
        'Desinfecção e limpeza profunda de sanitários, pisos e paredes.'
      ]
    },
    {
      id: 3,
      name: 'Sala',
      images: [
        'https://files.oaiusercontent.com/file-BgC72heYyHHNVnsfWKcnDHtO?se=2024-08-08T16%3A09%3A34Z&sp=r&sv=2023-11-03&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D399ad0a5-44c3-4eef-b498-4d0e5c95d333.webp&sig=ENCAEjpPdpR/TaxSgjkd407q5w7QRef4tU0gEjeNfG0%3D',
        'https://files.oaiusercontent.com/file-Z0RVtyuV4sBYvMm1OiaIqMbj?se=2024-08-08T16%3A09%3A39Z&sp=r&sv=2023-11-03&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3De9ca7b04-136f-4552-9409-dae9661226c6.webp&sig=eYCX4pI2u7qHI0apJ6loPVXpdCpPAUhz/N5xq5OBclc%3D',
        'https://files.oaiusercontent.com/file-qINPYwDVJypxi32pnU2ONvWM?se=2024-08-08T16%3A10%3A10Z&sp=r&sv=2023-11-03&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D9a389188-2350-44fd-b079-ee2e292b92b3.webp&sig=XjN1gdNazoyFiQl1mMoibdfDJzGFCya9A1q%2Bw6TnzDY%3D',
        'https://files.oaiusercontent.com/file-R6FHLKrGs8saPT720s5JAiBl?se=2024-08-08T16%3A10%3A10Z&sp=r&sv=2023-11-03&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D79f796c5-e3fd-461a-a849-dc5883ff4f34.webp&sig=6KH7lEilAEVKlIO/SnAUVxxz1WFrOYtj7k8I5bSlTJE%3D',
      ],
      description: [
        'Arrumação e limpeza de sofás, cortinas, carpetes e superfícies.'
      ]
    },
    {
      id: 4,
      name: 'Quarto',
      images: [
        'https://files.oaiusercontent.com/file-xrf15QxIplx6PhEZ6HWl1ws9?se=2024-08-08T16%3A10%3A10Z&sp=r&sv=2023-11-03&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D4161cf25-6797-4309-9a12-1f711a61e0c2.webp&sig=fCYoBJIm9lkr/73cUzuUvX6GRQ614zQhMhoC3XPaVCo%3D',
        'https://files.oaiusercontent.com/file-hx5kbCkJc5JUsr2bjLR6RIcz?se=2024-08-08T16%3A10%3A19Z&sp=r&sv=2023-11-03&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D9a56a8ef-ad86-40d5-b79a-cd759602cc71.webp&sig=9ogPRsr7oq3g4HbjnB0cjqso4h35QEVsDasBvFMAchw%3D',
        'https://files.oaiusercontent.com/file-oFQgSTigvPzr4Da0tMgmeAiZ?se=2024-08-08T16%3A10%3A26Z&sp=r&sv=2023-11-03&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D1404e925-cd66-4dfc-98e4-ce159d1c3145.webp&sig=r6%2BeD7QxQ8XohE8Pqqs1f/ioSuW%2BJb3bgNKajxOl/NM%3D',
        'https://files.oaiusercontent.com/file-TumDqRzFSDFTCiX8OXJRZNJ9?se=2024-08-08T16%3A11%3A32Z&sp=r&sv=2023-11-03&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D00e48616-6b58-4698-8948-98ff967344b9.webp&sig=B7hf77jidfiP9Ahq8U8%2Bxq3SymtL9u2sMi6IGB4i0F4%3D',
      ],
      description: [
        'Limpeza de móveis, lençóis e organização geral do espaço.'
      ]
    },
    {
      id: 5,
      name: 'Quintal',
      images: [
        'https://files.oaiusercontent.com/file-KeU2d3UuH8TPT9ndMBx3M0cS?se=2024-08-08T16%3A55%3A43Z&sp=r&sv=2023-11-03&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D39fe5919-2a79-4e3b-85e1-27713c4b3dbf.webp&sig=pOd1qAxXInN/cG9KaKqKLFVwqr7sGGyasYl1nTf2iYo%3D',
        'https://files.oaiusercontent.com/file-Km0T1vVzmA3hCqwmB5XzjcrN?se=2024-08-08T16%3A55%3A51Z&sp=r&sv=2023-11-03&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dfab8f93b-8b63-43e0-b05d-1113d378b3f7.webp&sig=Jv70v7NO9PmhTHng%2BdeHj3b8c71JylYdveowOd9eUko%3D',
        'https://files.oaiusercontent.com/file-YdnH575OEQVPmVgqlMhr5tTW?se=2024-08-08T16%3A55%3A58Z&sp=r&sv=2023-11-03&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D19cde5f3-25c5-44d3-8dcb-102cf1ff7dcf.webp&sig=JhQ6tIRHuLlQvfk8Iw31BBRUAdR6KNwFUJ40vpt%2B26c%3D',
        'https://files.oaiusercontent.com/file-HXFbRYZQix9ixYDlZe8N4r0l?se=2024-08-08T16%3A55%3A36Z&sp=r&sv=2023-11-03&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D6c7cd052-36cb-4bd9-bea6-5f3066ae085c.webp&sig=Bgl9jPEIIHnfV4/lxbpUrEoKUaUTrN6V6Fxgtfbdgjc%3D',
      ],
      description: [
        'Inserir aqui os itens que são organizados no quintal'
      ]
    },
    {
      id: 6,
      name: 'Garagem',
      images: [
        'https://files.oaiusercontent.com/file-BMPbTNKr8MOfs81CiLuqdRGX?se=2024-08-08T16%3A56%3A08Z&sp=r&sv=2023-11-03&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D910cabc5-63cf-4cda-8bf6-f602595d7993.webp&sig=YtXQojaynb/A7zJtRakLes5zMpXBiYAg5/9GfAaN83Q%3D',
        'https://files.oaiusercontent.com/file-QgcSWFjyjRVsVrfHSi6cBfTx?se=2024-08-08T16%3A56%3A15Z&sp=r&sv=2023-11-03&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Db4d479a0-5e67-4d28-a7ce-e91eb88ffcf2.webp&sig=lQJjoGSVAckS/9foV9l%2BVtVMkMPyrMYlvw2v1HnE8zU%3D',
        'https://files.oaiusercontent.com/file-00Cjsz6CF0KBq1AOq7JFLjTG?se=2024-08-08T16%3A56%3A22Z&sp=r&sv=2023-11-03&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D9b6dae09-d9d2-4b9b-9a0f-eb1f0a5e75dc.webp&sig=wl/VvOMdHXlLZyy47AQRls7VcESO/YMqppHJ36YG6NE%3D',
        'https://files.oaiusercontent.com/file-puvDbGnD5x8NiiTt2hPnL6p5?se=2024-08-08T16%3A56%3A31Z&sp=r&sv=2023-11-03&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D0e0c8d0a-9507-4562-8eff-475bff24de05.webp&sig=ULU0EP6oPGcLnLQnvKeZO/L31rDnbg%2Brr3GDGqS8VA8%3D',
      ],
      description: [
        'Inserir aqui os itens que são organizados na garagem'
      ]
    }
  ]
};

export default function Servicos() {
  const [selectedComodoIndex, setSelectedComodoIndex] = useState(0);

  const handlePrevClick = () => {
    setSelectedComodoIndex((prevIndex) => (prevIndex === 0 ? servicos.cômodos.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setSelectedComodoIndex((prevIndex) => (prevIndex === servicos.cômodos.length - 1 ? 0 : prevIndex + 1));
  };

  const visibleComodos = servicos.cômodos.slice(selectedComodoIndex, selectedComodoIndex + 3);

  return (
    <div className="bg-white">

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
