import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import logo from '../../public/assets/Logo/logo-com-fundo.png';
import Image from 'next/image';

interface MenuItem {
  item: string;
  path: string;
  id?: string;
}

export default function Navbar() {
  const router = useRouter();
  const { pathname, asPath } = router;

  const [selectedItem, setSelectedItem] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems: MenuItem[] = [
    { item: 'Home', path: '/' },
    { item: 'Company', path: '/AboutCompany' },
    { item: 'Services', path: '/#about-services', id: 'about-services' },
    { item: 'Contact', path: '/#contact', id: 'contact' },
    { item: 'Dashboard', path: '/LoginDashboard' },
  ];

  useEffect(() => {
    if (pathname === '/') {
      setSelectedItem('Home');
    } else if (asPath.startsWith('/AboutCompany')) {
      setSelectedItem('Company');
    } else if (asPath.startsWith('/#services')) {
      setSelectedItem('Service');
    } else if (asPath.startsWith('/#contact')) {
      setSelectedItem('Contact');
    } else {
      setSelectedItem('');
    }
  }, [pathname, asPath]);

  const handleItemClick = (item: MenuItem) => {
    setSelectedItem(item.item);
    setIsMobileMenuOpen(false);

    if (item.id && pathname === '/') {
      document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      router.push(item.path);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white rounded m-5 h-[80px] border border-gray-400">
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
        <Image src={logo} width={70} height={70} alt="Imagem logo da empresa" />

        <ul className="hidden md:flex space-x-6 font-bold text-xl">
          {menuItems.map((menuItem) => (
            <li key={menuItem.item} className="flex">
              <a
                href="#"
                className={`flex items-center border-b-2 ${
                  selectedItem === menuItem.item
                    ? 'text-nona border-sexta'
                    : 'border-transparent hover:border-segunda'
                }`}
                onClick={() => handleItemClick(menuItem)}
              >
                {menuItem.item}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden p-4"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-sexta bg-opacity-95 z-50 flex flex-col items-start p-4">
          <button
            className="self-end p-2 text-white"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <ul className="w-full">
            {menuItems.map((menuItem) => (
              <li key={menuItem.item} className="w-full">
                <a
                  href="#"
                  className={`block w-full px-4 py-2 text-white text-2xl ${
                    selectedItem === menuItem.item
                      ? 'bg-setima'
                      : 'hover:bg-sexta'
                  }`}
                  onClick={() => handleItemClick(menuItem)}
                >
                  {menuItem.item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
