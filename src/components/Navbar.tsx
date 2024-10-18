import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome, faBuilding, faPhone, faCalendarAlt, faCalendarTimes, faComments, faChevronDown, faUsers, faThumbsUp, faShareAlt, faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import 'primeicons/primeicons.css';
import Link from 'next/link';

export default function Navbar() {
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeHash, setActiveHash] = useState('');
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

  useEffect(() => {
    const handleScroll = () => {
      const heroElement = document.querySelector('#habilitar-menu') as HTMLElement | null;

      if (heroElement) {
        const heroHeight = heroElement.offsetHeight;
        const scrollPosition = window.scrollY;

        if (scrollPosition > heroHeight - 100) {
          setIsHeroVisible(false);
        } else {
          setIsHeroVisible(true);
        }
      }

      if (router.pathname === '/FormFeedback' || router.pathname === '/AboutCompany' || router.pathname === '/Gallery') {
          setIsHeroVisible(false);
          return;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [router.pathname]);

  const handleHashLinkClick = (hash: string) => {
    if (hash.startsWith('#')) {
      if (router.pathname === '/') {
        // Se estiver na home, rolar para a seção
        document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
      } else {
        // Caso contrário, navega para a home e rola para a seção
        router.push(`/`).then(() => {
          document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
        });
      }
    } else {
      router.push(hash);
    }
  };

  return (
    <header className={`p-4 fixed top-0 w-full z-50 ${isHeroVisible ? 'bg-transparent text-white hover:text-gray-700' : 'bg-white'}`} >
      <div className="container flex justify-between h-10 mx-auto w-full">
        <div className="hidden md:flex md:h-10 md:w-20 items-center">
          <a href="/"><Image width={100} height={100} src={"/assets/Logo/imagem-logo-oficial.png"} alt="Company Logo" /></a>
        </div>
        <div className="hidden lg:flex items-center space-x-3 text-lg text-gray-800">
          <Link href="/" className="px-4 py-2 hover:bg-gray-100 rounded-md flex items-center space-x-2">
            <FontAwesomeIcon icon={faHome} />
            <span>Home</span>
          </Link>
          <Link href="#FormQuote" scroll={false} className="px-4 py-2 hover:bg-gray-100 rounded-md flex items-center space-x-2"
            onClick={() => handleHashLinkClick('#FormQuote')}
          >
            <FontAwesomeIcon icon={faCalendarAlt} />
            <span >Quote</span>
          </Link>
          <div className="relative" ref={dropdownRef}>
            <button onClick={handleDropdownToggle} className="px-4 py-2 hover:bg-gray-100 rounded-md flex items-center space-x-2">
              <span>Sections</span>
              <FontAwesomeIcon icon={faChevronDown} />
            </button>
            {isDropdownOpen && (
              <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-[80vw] bg-white shadow-lg rounded-md z-50">
                <div className="grid grid-cols-3 gap-4 p-4">
                  {sections.map((section) => (
                    <Link key={section.title} href={section.path} className="flex items-start space-x-3 p-2 hover:bg-gray-100 rounded-md text-gray-800"
                      onClick={() => handleHashLinkClick(section.path)}
                    >
                      <div className="bg-segunda p-2 rounded-md w-10 h-10 flex items-center justify-center">
                        <FontAwesomeIcon icon={section.icon} className="text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-800">{section.title}</div>
                        <div className="text-sm text-gray-800">{section.description}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="hidden lg:flex items-center">
          <a href="tel:+5511999999999" className="px-4 py-2 bg-primeira text-white rounded-md">Contact +(206) 3763755</a>
        </div>
        <button onClick={toggleMobileMenu} className="lg:hidden p-4 text-gray-800">
          <FontAwesomeIcon icon={faBars} size="lg" />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-segunda z-40 flex flex-col lg:hidden">
          <button onClick={toggleMobileMenu} className="self-end text-gray-800 pt-5">
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
          <nav className="flex flex-col space-y-4 pt-10">
            {menuItems.map((menuItem) => (
              <Link key={menuItem.item} href={menuItem.path}
                className="px-4 py-2 text-white hover:bg-gray-700 rounded-md flex items-center space-x-2"
                onClick={() => handleHashLinkClick(menuItem.path)}
              >
                <FontAwesomeIcon icon={menuItem.icon} />
                <span>{menuItem.item}</span>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
