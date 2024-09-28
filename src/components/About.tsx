import React from 'react';
import imagem from '../../public/assets/about-company/imagem-sobre-empresa-removebg-preview.png';
import VideoComponent from "./VideoComponent";


export default function About() {
  return (

    <div className='bg-quarta'>
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
          <span className="text-4xl lg:text-6xl uppercase">About Us</span>
          <h1 className="py-4 text-3xl lg:text-5xl leading-tight text-segunda">
            Founded by an entrepreneur dedicated to care and affection
          </h1>
          <p className="pb-6 text-xl md:text-2xl">
            Our company was born out of the desire to transform each house into a new and welcoming home, where every detail reflects love, care, and dedication.
          </p>
        </div>
        
      </div>

      <section className="bg-quarta text-gray-800">
        <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
          <div>
            <h2 className="text-3xl tracking-tight md:text-center md:text-6xl uppercase text-primeira">See Our Services in Action</h2>
            <p className="max-w-3xl mx-auto mt-4 text-2xl md:text-center text-gray-600">We focus on the smallest details</p>
          </div>
          <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-gray-900">About Our Services</h3>
              <p className="mt-3 text-lg text-gray-600">In the next stage, we will showcase the services we have provided, where our commitment to excellence goes above and beyond expectations. We strive to clean even the hardest-to-reach corners, ensuring that every detail of your home is treated with care and attention. Get ready to see how we transform spaces and elevate cleaning standards, creating an environment you can take pride in calling home!</p>
              <div className="mt-12 space-y-12">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-segunda text-gray-50">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leading-6 text-gray-900">Standardization and Uniform</h4>
                    <p className="mt-2 text-gray-600">All our employees wear standardized uniforms, ensuring our company's identity and conveying professionalism.</p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-segunda text-gray-50">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leading-6 text-gray-900">Quality</h4>
                    <p className="mt-2 text-gray-600">Our priority is to provide high-quality services, ensuring customer satisfaction in every project we undertake.</p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-segunda text-gray-50">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                  </div>
                
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leading-6 text-gray-900">Attention to Small Details</h4>
                    <p className="mt-2 text-gray-600">We value attention to small details, striving to make a difference and meet every corner of your home with excellence.</p>
                  </div>
                  
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-segunda text-gray-50">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                  </div>
                
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leading-6 text-gray-900">Flexibility and Customization</h4>
                    <p className="mt-2 text-gray-600">We offer flexibility and customization when closing a new deal, tailoring our services to the specific needs of each client.</p>
                  </div>
                  
                </div>
                
              </div>
              

            </div>

            <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1 rounded-xl">

              <VideoComponent videoSrc="/public/assets/Videos/video-um.mp4"/>

            </div>
            
          </div>

        </div>
      </section>

      <div className="relative w-full flex flex-col gap-4 py- overflow-x-hidden">

            <div className='p-8 md:p-28'>
              <h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-gray-900">See before and after photos of our services.</h3>
              <p className="mt-3 text-lg text-gray-600">Each service is performed uniquely and tailored to the needs of each client. We strive to clean every corner of your home and take care with every step of the process.</p>
              <p className="mt-3 text-lg text-gray-600">When scheduling your service, please let us know your preferences, as this will make all the difference.</p>

            </div>

            <div className="flex gap-4 animate-marquee">
                <img className="h-60 aspect-video rounded-sm object-fill object-center bg-gray-500" src="/assets/Service/cozinha/20200123_150607.jpg" alt="Room photo" />
                <img className="h-60 aspect-video rounded-sm object-fill object-center bg-gray-500" src="/assets/Service/cozinha/20210201_131604.jpg" alt="Image 2" />
                <img className="h-60 aspect-video rounded-sm object-fill object-center bg-gray-500" src="/assets/Service/cozinha/20200701_143913.jpg" alt="Image 3" />
                <img className="h-60 aspect-video rounded-sm object-cover object-center bg-gray-500" src="/assets/Service/cozinha/20200701_162936.jpg" alt="Image 4" />
                <img className="h-60 aspect-video rounded-sm object-fill object-center bg-gray-500" src="/assets/Service/cozinha/20201125_151653.jpg" alt="Image 5" />
                <img className="h-60 aspect-video rounded-sm object-fill object-center bg-gray-500" src="/assets/Service/sala/20201217_095105.jpg" alt="Image 6" />
                <img className="h-60 aspect-video rounded-sm object-fill object-center bg-gray-500" src="/assets/Service/sala/IMG-20200204-WA0028.jpg" alt="Image 7" />
                <img className="h-60 aspect-video rounded-sm object-fill object-center bg-gray-500" src="/assets/Service/chao/20201125_152907.jpg" alt="Image 8" />
            </div>
      </div>

      <div className='p-7 md:p-10 grid md:flex justify-center items-center mt-12 space-y-12'>
            <div className="lg:col-start-2 md:p-20">
              <h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-gray-900">Deep Cleaning of Spaces</h3>
              <p className="mt-3 text-lg text-gray-600">Deep cleaning goes beyond daily routines, ensuring that every corner and surface of your home receives the attention it deserves. Our professionals are trained to perform meticulous cleaning, using effective products and specific techniques to remove dirt and allergens, providing a healthy and welcoming environment.</p>
              <div className="mt-12 space-y-12">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-segunda text-gray-50">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leading-6 text-gray-900">Customized Services</h4>
                    <p className="mt-2 text-gray-600">We understand that every client has unique needs. That's why we offer customized cleaning services to meet your specific demands. Whether it's a post-renovation cleaning, a spring cleaning, or special care for delicate areas, we are ready to transform your space according to your expectations.</p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-segunda text-gray-50">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leading-6 text-gray-900">Regular Maintenance</h4>
                    <p className="mt-2 text-gray-600">We offer regular maintenance plans so that your home is always in great condition. With scheduled cleanings, you don't have to worry about accumulated dirt. Our regular services ensure that all areas are consistently cared for, allowing you to enjoy your free time without concerns.</p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-segunda text-gray-50">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leading-6 text-gray-900">Pet-Friendly Cleaning Solutions</h4>
                    <p className="mt-2 text-gray-600">We understand that your pets are part of your family. That's why we use effective cleaning solutions that are safe for your furry friends. Our team takes special care to ensure that your home remains clean and free of allergens while protecting the health of your pets. With our services, you can enjoy a fresh and tidy space without worrying about your pets' safety.</p>
                  </div>
                </div>
                
              </div>
            </div>

            <div className='w-full'>
              <VideoComponent videoSrc="/public/assets/Videos/video-dois.mp4"/>
            </div>
            
      </div>

    </div>
  );
}
