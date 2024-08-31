import React from 'react';
import Image from 'next/image';

export default function AboutCompany() {
    return (
        <div className="bg-white py-12" id='about-company'>
            <div className="container mx-auto px-6 lg:px-20 mt-20">
                
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                    
                    <div className='flex flex-col justify-center items-center gap-10'>
                        
                        <div>
                        <h1 className="text-5xl font-bold  mb-6 text-primeira uppercase pt-20">About Splendid Cleaning Service</h1>
                        <p className="text-2xl text-gray-600 leading-10">Founded with love and dedication, our mission is to transform every house into a welcoming home.</p>
                        </div>
                        
                        <div className="flex flex-col justify-center text-start lg:text-left">
                            <h2 className="text-6xl font-bold text-primeira mb-6">Mission</h2>
                            
                            <p className="text-2xl text-gray-600 leading-10">To transform spaces with care and dedication, providing clean, organized, and vibrant homes, where every detail reflects our care and attention.</p>

                        </div>

                        <div className="text-start">
                            <h2 className="text-6xl font-bold text-primeira mb-6">Vision</h2>
                            <p className="text-2xl text-gray-600 leading-10">To be recognized as the company that brings warmth and renewal to every home, standing out for excellence in creating spaces that inspire comfort and well-being.</p>
                        </div>

                    </div>

                    <div className="flex flex-col justify-center">
                        <img src='/assets/mockup-logo.png' alt="Team photo here"/>
                    </div>

                </section>

                <section className="text-center mb-12">
                    <h2 className="text-5xl md:text-6xl font-bold mb-6 text-primeira text-left md:text-center">Our Services</h2>
                    <p className="text-2xl md:text-4xl text-gray-600 mb-6 text-left md:text-center">
                        We operate in various regions, offering a variety of services that transform spaces into welcoming homes.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-segunda p-6 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-bold text-white mb-4">Residential Cleaning</h3>
                            <p className="text-white text-2xl">We ensure that your home is always clean, organized, and full of warmth.</p>
                        </div>
                        <div className="bg-segunda p-6 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-bold text-white mb-4">Commercial Cleaning</h3>
                            <p className="text-white text-2xl">We offer services that transform workspaces into welcoming environments.</p>
                        </div>
                        <div className="bg-segunda p-6 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-bold text-white mb-4">Post-Construction Cleaning</h3>
                            <p className="text-white text-2xl">We turn your newly built space into an environment ready to be inhabited.</p>
                        </div>
                        <div className="bg-segunda p-6 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-bold text-white mb-4">Window Cleaning</h3>
                            <p className="text-white text-2xl">We ensure that your windows are always spotless, allowing natural light to fill your home.</p>
                        </div>
                        <div className="bg-segunda p-6 rounded-lg shadow-lg">
                            
                        </div>
                        <div className="bg-segunda p-6 rounded-lg shadow-lg">
                            
                        </div>
                    </div>
                </section>

                <section>
                    <div className="relative flex items-center justify-center w-full text-gray-900">
                        
                        <button aria-label="Slide back" type="button" className="absolute left-0 z-30 p-2 ml-10 bg-opacity-50 rounded-full focus:outline-none focus:bg-primeira focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 bg-gray-50">
                            <svg width="8" height="14" fill="none" viewBox="0 0 8 14" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
                                <path d="M7 1L1 7L7 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </button>

                        <div className="flex items-center justify-start w-full h-full gap-6 py-4 mx-auto overflow-auto lg:gap-8">
                            <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                                <img className="object-cover object-center bg-gray-500 h-96 aspect-square" src="/assets/Service/chao.webp" alt="Image 1"/>
                            </div>
                            <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                                <img className="object-cover object-center bg-gray-500 h-96 aspect-square" src="/assets/Service/cozinha.webp" alt="Image 2" />
                            </div>
                            <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                                <img className="object-cover object-center bg-gray-500 h-96 aspect-square" src="/assets/Service/fogao.webp" alt="Image 3" />
                            </div>
                            <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                                <img className="object-cover object-center bg-gray-500 h-96 aspect-square" src="/assets/Service/louca.webp" alt="Image 4" />
                            </div>
                            
                        </div>

                        <button aria-label="Slide forward" id="next" className="absolute right-0 z-30 p-2 mr-10 bg-opacity-50 rounded-full focus:outline-none focus:bg-primeira focus:ring-2 focus:ring-offset-2 focus:ring-primeira bg-gray-50">
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
