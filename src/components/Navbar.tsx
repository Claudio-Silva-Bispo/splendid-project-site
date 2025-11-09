import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome, faBuilding, faPhone, faCalendarAlt, faCalendarTimes, faComments, faChevronDown, faUsers, faThumbsUp, faShareAlt, faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const menuItems = [
    { item: 'Home', path: '/', icon: faHome },
    { item: 'About Us', path: '/AboutCompany', icon: faBuilding },
    { item: 'Contacts', path: '#contact', icon: faPhone },
    { item: 'Quote', path: '#FormQuote', icon: faCalendarAlt },
    { item: 'Services', path: '#about-services', icon: faCalendarTimes },
    { item: 'Feedback', path: '/FormFeedback', icon: faComments },
    { item: 'Testimonials', path: '/PageReceivedFeedbacks', icon: faThumbsUp },
    { item: 'Tips', path: '/Tips', icon: faShareAlt },
    { item: 'Gallery', path: '/Gallery', icon: faGlobe },
  ];

  const sections = [
    {
      title: 'About Us',
      icon: faBuilding,
      description: 'Learn more about us',
      path: '/AboutCompany',
    },
    {
      title: 'Services',
      icon: faCalendarTimes,
      description: 'List of services',
      path: '#about-services',
    },
    {
      title: 'Contact',
      icon: faPhone,
      description: 'Get in touch with us',
      path: '#contact',
    },
    {
      title: 'Feedback',
      icon: faComments,
      description: 'Leave your feedback',
      path: '/FormFeedback',
    },
    {
      title: 'Testimonials',
      icon: faThumbsUp,
      description: 'What our clients are saying',
      path: '/PageReceivedFeedbacks',
    },
    {
      title: 'Tips',
      icon: faShareAlt,
      description: 'Stay updated with the best tips.',
      path: '/Tips',
    },
    {
      title: 'Quote',
      icon: faUsers,
      description: 'Quote free now',
      path: '#FormQuote',
    },
    {
      title: 'Dashboard',
      icon: faEnvelope,
      description: 'Manager',
      path: '/LoginDashboard',
    },
    {
      title: 'Gallery',
      icon: faGlobe,
      description: 'Photos of our main services',
      path: '/Gallery',
    },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsDropdownOpen(false);
    }
  };
  
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleHashLinkClick = (hash: string) => {
    if (hash.startsWith('#')) {
      if (router.pathname === '/') {
        setTimeout(() => {
          document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        router.push(`/`).then(() => {
          setTimeout(() => {
            document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        });
      }
    } else {
      router.push(hash);
    }
  };

  return (
    <header className="p-4 fixed top-0 w-full z-50 transition-all duration-300 bg-transparent">
      <div className="container flex justify-between items-center h-10 mx-auto w-full">
        <div className="hidden md:flex md:h-10 md:w-20 items-center">
          <Link href="/">
            <Image 
              width={100} 
              height={100} 
              src="/assets/Logo/imagem-logo-oficial.png" 
              alt="Company Logo"
              priority
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-3 text-lg text-green-900">
          <Link 
            href="/" 
            className="px-4 py-2 rounded-md flex items-center space-x-2 transition-colors hover:bg-white/10"
          >
            <FontAwesomeIcon icon={faHome} className="w-4 h-4" />
            <span>Home</span>
          </Link>
          
          <button
            onClick={() => handleHashLinkClick('#FormQuote')}
            className="px-4 py-2 rounded-md flex items-center space-x-2 transition-colors hover:bg-white/10"
          >
            <FontAwesomeIcon icon={faCalendarAlt} className="w-4 h-4" />
            <span>Quote</span>
          </button>
          
          <div className="relative" ref={dropdownRef}>
            <button 
              onClick={handleDropdownToggle} 
              className="px-4 py-2 rounded-md flex items-center space-x-2 transition-colors hover:bg-white/10"
            >
              <span>Sections</span>
              <FontAwesomeIcon icon={faChevronDown} className="w-4 h-4" />
            </button>
            
            {isDropdownOpen && (
              <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-[80vw] bg-white shadow-lg rounded-md z-50 border border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                  {sections.map((section) => (
                    <button
                      key={section.title}
                      onClick={() => {
                        handleHashLinkClick(section.path);
                        setIsDropdownOpen(false);
                      }}
                      className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-md text-gray-800 text-left transition-colors"
                    >
                      <div className="bg-blue-600 p-2 rounded-md w-10 h-10 flex items-center justify-center flex-shrink-0">
                        <FontAwesomeIcon icon={section.icon} className="text-white w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-800">{section.title}</div>
                        <div className="text-sm text-gray-600">{section.description}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Contact Button Desktop */}
        <div className="hidden lg:flex items-center">
          <a 
            href="tel:+12063763755" 
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Contact +(206) 376-3755
          </a>
        </div>

        {/* Mobile Menu Button - Sempre à direita */}
        <div className="flex lg:hidden items-center ml-auto">
          <button 
            onClick={toggleMobileMenu} 
            className="p-2 text-green-900"
            aria-label="Toggle menu"
          >
            <FontAwesomeIcon icon={faBars} className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-green-900 z-40 flex flex-col lg:hidden overflow-y-auto">
          <div className="flex justify-between items-center p-4 border-b border-green-700">
            <div className="flex items-center">
              <Image 
                width={60} 
                height={60} 
                src="/assets/Logo/imagem-logo-oficial.png" 
                alt="Company Logo"
              />
            </div>
            <button 
              onClick={toggleMobileMenu} 
              className="text-white p-2"
              aria-label="Close menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <ul className="flex flex-col px-4 py-6">
            {menuItems.map((menuItem) => (
              <li key={menuItem.item} className="border-b border-green-700 last:border-none">
                <button
                  onClick={() => {
                    handleHashLinkClick(menuItem.path);
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full text-left text-white flex items-center space-x-4 py-4 hover:bg-green-800 px-3 rounded transition-colors"
                >
                  <FontAwesomeIcon icon={menuItem.icon} className="w-5 h-5" />
                  <span className="text-lg">{menuItem.item}</span>
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-auto p-4 border-t border-green-700">
            <a 
              href="tel:+12063763755" 
              className="block w-full text-center px-4 py-3 bg-white text-green-900 rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact +(206) 376-3755
            </a>
          </div>
        </div>
      )}
    </header>
  );
}