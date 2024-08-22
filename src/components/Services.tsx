import React, { useState } from 'react';

import imagem from "../../public/assets/Service/quarto/quarto1.png"

const services = {
  rooms: [
    {
      id: 1,
      name: 'Kitchen',
      images: [
        '/assets/Service/cozinha/cozinha1.png',
        '/assets/Service/cozinha/cozinha2.png',
        '/assets/Service/cozinha/cozinha4.png',
        '/assets/Service/cozinha/cozinha3.png'
      ],
      description: [
        'Kitchen Cleaning',
        'Our kitchen cleaning service offers a comprehensive approach, ensuring shiny surfaces, grease-free appliances, and a sanitized environment.',
        'We offer daily, weekly, or monthly scheduling plans.',
        'Includes cleaning countertops, stove, oven, refrigerator, floors, and tiles.',
        'Contact us for more information.'
      ]
    },
    {
      id: 2,
      name: 'Bathroom',
      images: [
        '/assets/Service/banheiro/banheiro1.png',
        '/assets/Service/banheiro/banheiro2.png',
        '/assets/Service/banheiro/banheiro3.png',
        '/assets/Service/banheiro/banheiro4.png',
      ],
      description: [
        'Disinfection and deep cleaning of toilets, floors, and walls.'
      ]
    },
    {
      id: 3,
      name: 'Living Room',
      images: [
        '/assets/Service/sala/sala1.png',
        '/assets/Service/sala/sala2.png',
        '/assets/Service/sala/sala3.png',
        '/assets/Service/sala/sala4.png'
      ],
      description: [
        'Arrangement and cleaning of sofas, curtains, carpets, and surfaces.'
      ]
    },
    {
      id: 4,
      name: 'Bedroom',
      images: [
        '/assets/Service/quarto/quarto1.png',
        '/assets/Service/quarto/quarto2.png',
        '/assets/Service/quarto/quarto3.png',
        '/assets/Service/quarto/quarto4.png'
      ],
      description: [
        'Cleaning of furniture, sheets, and general organization of the space.'
      ]
    }
  ]
};

export default function Services() {
  const [selectedRoomIndex, setSelectedRoomIndex] = useState(0);

  const handlePrevClick = () => {
    setSelectedRoomIndex((prevIndex) => (prevIndex === 0 ? services.rooms.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setSelectedRoomIndex((prevIndex) => (prevIndex === services.rooms.length - 1 ? 0 : prevIndex + 1));
  };

  const visibleRooms = services.rooms.slice(selectedRoomIndex, selectedRoomIndex + 3);

  return (
    <div className="bg-white" id='services'>

      <div className="container mx-auto p-4 my-6 space-y-2 text-center">
        <h2 className="text-3xl font-bold text-start md:text-center leading-tight uppercase">Differentiated and Customized Services <br /> <span className="uppercase text-quinta">especially for you</span></h2>
      </div>

      <div className="pt-6">

        {/* Room Selector */}
        <div className="flex items-center justify-center space-x-4">
          <button onClick={handlePrevClick} className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex space-x-4">
            {visibleRooms.map((room) => (
              <button
                key={room.id}
                onClick={() => setSelectedRoomIndex(services.rooms.findIndex(c => c.id === room.id))}
                className={`font-medium text-sm ${
                  selectedRoomIndex === services.rooms.findIndex(c => c.id === room.id) ? 'text-quinta' : 'text-gray-900 hover:text-gray-600'
                }`}
              >
                {room.name}
              </button>
            ))}
          </div>

          <button onClick={handleNextClick} className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Image Gallery */}
        <div className="mx-auto mt-6 max-w-2xl px-6 lg:max-w-7xl lg:grid lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="aspect-w-3 aspect-h-4 overflow-hidden rounded-lg lg:block mb-5 md:mb-0">
            <img
              src={services.rooms[selectedRoomIndex].images[0]}
              alt={`${services.rooms[selectedRoomIndex].name} image 1`}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="aspect-w-2 aspect-h-1 overflow-hidden rounded-lg">
              <img
                src={services.rooms[selectedRoomIndex].images[1]}
                alt={`${services.rooms[selectedRoomIndex].name} image 2`}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="aspect-w-2 aspect-h-1 overflow-hidden rounded-lg">
              <img
                src={services.rooms[selectedRoomIndex].images[2]}
                alt={`${services.rooms[selectedRoomIndex].name} image 3`}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div className="aspect-w-3 aspect-h-4 overflow-hidden rounded-lg lg:block">
            <img
              src={services.rooms[selectedRoomIndex].images[3]}
              alt={`${services.rooms[selectedRoomIndex].name} image 4`}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>

        {/* Room Description */}
        <div className="mx-auto max-w-2xl px-6 pb-16 pt-10 sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            {services.rooms[selectedRoomIndex].name}
          </h1>
          <div className="mt-4 space-y-6">
            {services.rooms[selectedRoomIndex].description.map((line, index) => (
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
