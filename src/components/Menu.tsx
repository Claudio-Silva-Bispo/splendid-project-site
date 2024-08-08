import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

interface MenuItem {
  item: string;
  path: string;
  id?: string;
}

export default function Menu() {
  const router = useRouter();
  const { pathname, asPath } = router;

  const [selectedItem, setSelectedItem] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems: MenuItem[] = [
    { item: 'Inicio', path: '/' },
    { item: 'Empresa', path: '/SobreEmpresa' },
    { item: 'Serviços', path: '/#sobre-servicos', id: 'sobre-servicos' },
    { item: 'Contatos', path: '/#contato', id: 'contato' },
    { item: 'Redes', path: '/#redes-contato', id: 'redes-contatos' },
    { item: 'Dashboard', path: '/LoginDashboard' },
  ];

  useEffect(() => {
    if (pathname === '/') {
      setSelectedItem('Inicio');
    } else if (asPath.startsWith('/SobreEmpresa')) {
      setSelectedItem('Empresa');
    } else if (asPath.startsWith('/#sobre-servicos')) {
      setSelectedItem('Serviços');
    } else if (asPath.startsWith('/#contato')) {
      setSelectedItem('Contatos');
    } else if (asPath.startsWith('/#redes')) {
      setSelectedItem('Redes');
    } else {
      setSelectedItem('');
    }
  }, [pathname, asPath]);

  const handleItemClick = (item: MenuItem) => {
    setSelectedItem(item.item);
    setIsMobileMenuOpen(false); // Close the mobile menu when an item is clicked

    if (item.id && pathname === '/') {
      document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      router.push(item.path);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full p-4 bg-white z-50">
      <div className="container flex justify-between h-16 mx-auto">
        <a
          rel="noopener noreferrer"
          href="/"
          aria-label="Back to homepage"
          className="flex items-center p-2"
        >
          <h1 className="font-bold hidden lg:flex items-center justify-center lg:text-2xl text-sexta uppercase">
            Maria's Cleaning Service
          </h1>
        </a>

        <ul className="items-stretch hidden space-x-3 md:flex">
          {menuItems.map((menuItem) => (
            <li key={menuItem.item} className="flex">
              <a
                href="#"
                className={`flex items-center px-4 -mb-1 border-b-2 ${
                  selectedItem === menuItem.item
                    ? 'text-nona border-sexta'
                    : 'border-gray-500'
                }`}
                onClick={() => handleItemClick(menuItem)}
              >
                {menuItem.item}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="flex justify-end p-4 md:hidden"
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
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
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
              ></path>
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
