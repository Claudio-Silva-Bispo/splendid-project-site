import React, { useState } from 'react';
import { GiButterfly } from 'react-icons/gi';

const services = {
  rooms: [
    {
      id: 1,
      name: 'Kitchen',
      serviceDescription: 'Our kitchen cleaning service offers a comprehensive approach, ensuring shiny surfaces, grease-free appliances, and a sanitized environment.',
      houseItems: 'Locations included in basic services',
      houseItemsDescription: 'Includes cleaning countertops, stove, oven, refrigerator, floors, and tiles.',
      schedules: 'Types of schedules you can request',
      scheduleDescription: 'We provide daily, weekly, biweekly, monthly, or specific services according to your schedule.',
      checklist: 'Additional items you can customize',
      checklistDescription: 'Extra services can include cleaning the oven, inside the fridge, and cleaning cabinets.',
      images: [
        '/assets/Service/cozinha/cozinha1.png',
        '/assets/Service/cozinha/cozinha2.png',
        '/assets/Service/cozinha/cozinha4.png',
        '/assets/Service/cozinha/cozinha3.png'
      ],
      additionalDescription: [
        'Our kitchen cleaning service offers a comprehensive approach, ensuring shiny surfaces, grease-free appliances, and a sanitized environment.',
      ],
      contactButton: ''
    },
    {
      id: 2,
      name: 'Bathroom',
      serviceDescription: 'Disinfection and deep cleaning of toilets, floors, and walls.',
      houseItems: 'Locations included in basic services',
      houseItemsDescription: 'Includes cleaning sinks, toilets, shower boxes, and floors.',
      schedules: 'Types of schedules you can request',
      scheduleDescription: 'We provide daily, weekly, biweekly, monthly, or specific services according to your schedule.',
      checklist: 'Additional items you can customize',
      checklistDescription: 'Extra services can include additional disinfection, cleaning tiles, and more.',
      images: [
        '/assets/Service/banheiro/banheiro1.png',
        '/assets/Service/banheiro/banheiro2.png',
        '/assets/Service/banheiro/banheiro3.png',
        '/assets/Service/banheiro/banheiro4.png'
      ],
      additionalDescription: [
        'We guarantee a fully sanitized and disinfected bathroom, providing a clean and safe environment for you and your family.',
      ],
      contactButton: ''
    },
    {
      id: 3,
      name: 'Living Room',
      serviceDescription: 'Arrangement and cleaning of sofas, curtains, carpets, and surfaces.',
      houseItems: 'Locations included in basic services',
      houseItemsDescription: 'Includes organizing furniture, vacuuming carpets, and cleaning surfaces.',
      schedules: 'Types of schedules you can request',
      scheduleDescription: 'We provide daily, weekly, biweekly, monthly, or specific services according to your schedule.',
      checklist: 'Additional items you can customize',
      checklistDescription: 'Extra services can include deep carpet cleaning and furniture polishing.',
      images: [
        '/assets/Service/sala/sala1.png',
        '/assets/Service/sala/sala2.png',
        '/assets/Service/sala/sala3.png',
        '/assets/Service/sala/sala4.png'
      ],
      additionalDescription: [
        'Our living room cleaning guarantees a cozy environment, with organized furniture and impeccable carpets.',
      ],
      contactButton: ''
    },
    {
      id: 4,
      name: 'Bedroom',
      serviceDescription: 'Cleaning furniture, changing bedding, and organizing the space.',
      houseItems: 'Locations included in basic services',
      houseItemsDescription: 'Includes making the bed, cleaning surfaces, and organizing the space.',
      schedules: 'Types of schedules you can request',
      scheduleDescription: 'We provide daily, weekly, biweekly, monthly, or specific services according to your schedule.',
      checklist: 'Additional items you can customize',
      checklistDescription: 'Extra services can include closet cleaning, furniture polishing, and organizing wardrobes.',
      images: [
        '/assets/Service/quarto/quarto1.png',
        '/assets/Service/quarto/quarto2.png',
        '/assets/Service/quarto/quarto3.png',
        '/assets/Service/quarto/quarto4.png'
      ],
      additionalDescription: [
        'We provide a clean and organized bedroom where you can relax and rest.',
      ],
      contactButton: ''
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

      <div className="container mx-auto p-4 my-6 space-y-2 text-center pt-20">
        <h2 className="text-3xl md:text-6xl font-bold text-start md:text-center leading-tight uppercase">Differentiated and personalized services <br /> <span className="uppercase text-quinta">especially for you</span></h2>

        <div className='flex justify-between'>

          <div className='flex'>
          <GiButterfly className="text-primeira w-8 h-8"/>
          <GiButterfly className="text-primeira w-8 h-8" />
          </div>

          <div className='flex'>
          <GiButterfly className="text-primeira w-8 h-8"/>
          <GiButterfly className="text-primeira w-8 h-8" />
          </div>

        </div>

        <p className='text-left text-lg md:text-2xl text-black'>Learn about what we offer in each room, the standard items, and what you can customize through our personalized services.</p>
      
      </div>

      <div className="pt-6">

        {/* Room Selection */}
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
                className={`font-medium text-xl ${
                  selectedRoomIndex === services.rooms.findIndex(c => c.id === room.id) ? 'text-primeira' : 'text-gray-900 hover:text-gray-600'
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

          <div className='flex gap-5'>
            <GiButterfly className="text-terceira w-8 h-8"/>
            <GiButterfly className="text-quarta w-10 h-10"/>
            <GiButterfly className="text-quinta w-12 h-12"/>
            <h2 className="text-4xl md:text-4xl font-bold tracking-tight text-primeira sm:text-3xl">
              {services.rooms[selectedRoomIndex].name}
            </h2>
            <GiButterfly className="text-quinta w-12 h-12"/>
            <GiButterfly className="text-quarta w-10 h-10"/>
            <GiButterfly className="text-terceira w-8 h-8"/>
          </div>
          <div className="mt-4 space-y-6">
            <h2 className="text-xl font-semibold text-gray-800">{services.rooms[selectedRoomIndex].houseItems}</h2>
            <p className="text-xl text-gray-900">{services.rooms[selectedRoomIndex].houseItemsDescription}</p>

            <h2 className="text-xl font-semibold text-gray-800">{services.rooms[selectedRoomIndex].schedules}</h2>
            <p className="text-xl text-gray-900">{services.rooms[selectedRoomIndex].scheduleDescription}</p>

            <h2 className="text-xl font-semibold text-gray-800">{services.rooms[selectedRoomIndex].checklist}</h2>
            <p className="text-xl text-gray-900">{services.rooms[selectedRoomIndex].checklistDescription}</p>

            <h2 className="text-xl font-semibold text-gray-800">Additional Description</h2>
            {services.rooms[selectedRoomIndex].additionalDescription.map((line, index) => (
              <p key={index} className="text-xl text-gray-900">
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
