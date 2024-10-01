import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import logo from '../../public/assets/Logo/imagem-logo-oficial.png';
import 'primeicons/primeicons.css';

interface MenuItem {
  item: string;
  path?: string;
  id?: string;
  icon: string;
  items?: MenuItem[];
}

export default function Navbar() {
  const router = useRouter();
  const { pathname, asPath } = router;

  const [selectedItem, setSelectedItem] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openContactMenu, setOpenContactMenu] = useState(false);

  const menuItems: MenuItem[] = [
    { item: 'Home', path: '/', icon: 'pi pi-home' },
    { item: 'About Us', path: '/AboutCompany', icon: 'pi pi-building' },
    { item: 'Services', path: '/#about-services', id: 'about-services', icon: 'pi pi-search' },
    { 
      item: 'Contact', 
      icon: 'pi pi-phone',
      items: [
        { item: 'Call +2063763755', path: 'tel:+2063763755', icon: 'pi pi-phone' },
        { item: 'SMS', path: 'sms:+2063763755', icon: 'pi pi-comments' },
        { item: 'Email', path: 'mailto:splendidcleaningusa@gmail.com', icon: 'pi pi-envelope' },
        { item: 'WhatsApp', path: 'https://wa.me/2063763755', icon: 'pi pi-whatsapp' },
      ]
    },
    { item: 'Feedback', path: '/FormFeedback', icon: 'pi pi-star' },
    { item: 'Testimonials', path: '/Testimonials', icon: 'pi pi-heart' },
    { item: 'Dashboard', path: '/Dashboard', icon: 'pi pi-briefcase' },
  ];

  useEffect(() => {
    if (pathname === '/') setSelectedItem('Home');
    else if (asPath.startsWith('/AboutCompany')) setSelectedItem('Company');
    else if (asPath.startsWith('/#about-services')) setSelectedItem('Services');
    else if (asPath.startsWith('/#contact')) setSelectedItem('Contact');
    else setSelectedItem('');
  }, [pathname, asPath]);

  const handleItemClick = (item: MenuItem) => {
    setSelectedItem(item.item);
    if (!item.items) setIsMobileMenuOpen(false);

    if (item.path) {
      if (item.id && pathname === '/') {
        document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.open(item.path, '_blank');
      }
    }
  };

  const toggleContactMenu = () => {
    setOpenContactMenu(!openContactMenu);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setOpenContactMenu(false); // Fechar submenu ao alternar o menu principal
  };

  return (
    <header className="fixed w-full bg-white z-50">
      <div className="navbar">
        <div className="navbar-start">
          <a href="/"><img src={logo.src} alt="logo" /></a>
        </div>

        {/* Botão do menu mobile */}
        <div className="navbar-end lg:hidden">
          <button
            className="p-2 text-xl text-segunda"
            onClick={toggleMobileMenu}
          >
            <i className="pi pi-bars"></i> {/* Ícone de menu */}
          </button>
        </div>

        {/* Aqui o menu desktop permanece exatamente como estava */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-xl text-segunda">
            <li><a href="/">Home</a></li>
            <li><a href="/AboutCompany">About Us</a></li>
            <li><a href="/#about-services">Services</a></li>
            <li>
              <details>
                <summary>Contact</summary>
                <ul className="p-2 bg-segunda z-50 text-white text-xl">
                  <li><a href="tel:+2063763755" aria-label="Call" target='_blank'>Call +(206)3763755</a></li>
                  <li><a href="sms:+(206)3763755" aria-label="SMS" target='_blank'>SMS +(206)3763755</a></li>
                  <li><a href="mailto:splendidcleaningusa@gmail.com" aria-label="Email">Email splendidcleaningusa@gmail.com</a></li>
                  <li><a href="https://wa.me/2063763755" aria-label="WhatsApp" target="_blank">WhatsApp +(206)3763755</a></li>
                </ul>
              </details>
            </li>
            <li><a href="/FormFeedback">Feedback</a></li>
            <li><a href="/Gallery">Gallery</a></li>
          </ul>
        </div>

        <div className="navbar-end hidden lg:flex">
          <a className="btn bg-primeira border-none text-white text-md uppercase font-bold">Call +(206)3763755</a>
        </div>
      </div>

      {/* Menu mobile */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-[#C5E1CB] bg-opacity-100 z-50 flex flex-col items-start p-4">
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
                  className={`block w-full px-4 py-2 text-segunda text-2xl ${
                    selectedItem === menuItem.item ? 'bg-gray-50' : 'hover:bg-sexta'
                  }`}
                  onClick={() => {
                    if (menuItem.items) {
                      toggleContactMenu();
                      setSelectedItem(menuItem.item); // Para destacar o item selecionado
                    } else {
                      handleItemClick(menuItem);
                    }
                  }}
                >
                  <i className={`text-black ${menuItem.icon}`}></i>
                  <span className="ml-2">{menuItem.item}</span>
                  {menuItem.items && (
                    <i className={`pi pi-chevron-${openContactMenu && selectedItem === menuItem.item ? 'up' : 'down'} ml-2`}></i>
                  )}
                </a>
                {menuItem.items && openContactMenu && selectedItem === menuItem.item && (
                  <ul className="pl-4 bg-segunda text-white w-full">
                    {menuItem.items.map((subItem) => (
                      <li key={subItem.item}>
                        <a
                          href={subItem.path}
                          className="block w-full px-4 py-2 text-xl hover:bg-setima"
                          onClick={(e) => {
                            e.preventDefault();
                            window.open(subItem.path, '_blank');
                          }}
                        >
                          <i className={subItem.icon}></i>
                          <span className="ml-2">{subItem.item}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
