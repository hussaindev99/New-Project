'use client';
import React, { useState, useRef, useEffect } from 'react';
import { GiHamburgerMenu, GiCrossMark } from 'react-icons/gi';
import Image from 'next/image';
import Logo from '@/app/public/image/logo.png'; // Ensure correct path for the image
import Link from 'next/link';

function Navbar() {
  const [activeButton, setActiveButton] = useState('HOME');
  const [dropdownOpen, setDropdownOpen] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(''); // State for mobile dropdown
  const dropdownRef = useRef(null);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    // Dropdown only for 'ABOUT US' and 'OUR PRODUCTS'
    setDropdownOpen(buttonName === 'ABOUT US' || buttonName === 'OUR PRODUCTS' ? buttonName : '');
    setMobileMenuOpen(false); // Close mobile menu on selection
  };

  const handleOptionClick = () => {
    setDropdownOpen(''); // Close dropdown when an option is clicked
  };

  const toggleMobileDropdown = (buttonName) => {
    setMobileDropdownOpen(mobileDropdownOpen === buttonName ? '' : buttonName);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(''); // Close the dropdown
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const dropdownItems = {
    'ABOUT US': [
      { label: 'ABOUT ASPEN', href: '/Aboutaspen' },
      { label: 'ACHIEVEMENTS', href: '/Achievements' },
      { label: 'CERTIFICATION', href: '/Certification' },
    ],
    'OUR PRODUCTS': [
      { label: 'BEDSHEET', href: '/Bedsheet' },
      { label: 'TOWELS', href: '/Towels' },
      { label: 'HOSPITALITY', href: '/Hospitality' },
    ],
  };

  return (
    <>
      <div className='bg-white h-[60px] w-full flex justify-center items-center mt-5 z-50'>
        <div className='w-[85%] flex justify-between items-center'>
          <Image src={Logo} alt='Logo' className='sm:h-[60px] sm:w-[130px] h-[60px] w-[110px]' />

          {/* Mobile Menu Icon */}
          <div className='lg:hidden'>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? (
                <GiCrossMark className='text-2xl text-gray-600' />
              ) : (
                <GiHamburgerMenu className='text-2xl text-gray-600' />
              )}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden lg:flex xl:w-[58%] justify-between lg:text-[10px] space-x-2 lg:space-x-6'>
            {['HOME', 'ABOUT US', 'OUR PRODUCTS', 'EXHIBITION', 'OUR PROCESSING', 'CONTACT US'].map((buttonName) => (
              <div
                key={buttonName}
                className='relative'
                onMouseEnter={() => (buttonName === 'ABOUT US' || buttonName === 'OUR PRODUCTS' ? setDropdownOpen(buttonName) : null)} 
                onMouseLeave={() => (buttonName === 'ABOUT US' || buttonName === 'OUR PRODUCTS' ? setDropdownOpen('') : null)} 
              >
                <Link
                  href={buttonName === 'HOME' ? '/' : `/${buttonName.toLowerCase().replace(' ', '')}`} // Ensure routing is consistent for all pages
                  className={`cursor-pointer font-semibold tracking-normal text-[13px] 
                  ${activeButton === buttonName ? 'text-[#00124B]' : 'text-[#726f6f]'} 
                  after:content-[""] after:absolute after:bg-[#00124B] after:h-[2px] after:w-0 after:left-0 after:-bottom-[0px] after:rounded-xl after:duration-300 
                  ${activeButton === buttonName ? 'after:w-full' : 'hover:after:w-full'}`}
                  onClick={() => handleButtonClick(buttonName)}
                >
                  {buttonName}
                </Link>

                {/* Dropdown */}
                {dropdownOpen === buttonName && (
                  <div ref={dropdownRef} className='absolute text-xs left-0 w-auto bg-gray-200 shadow-lg z-50'>
                    {dropdownItems[buttonName]?.map((item) => ( // Safely handle dropdowns only for 'ABOUT US' and 'OUR PRODUCTS'
                      <Link
                        key={item.label}
                        href={item.href}
                        className='block px-10 py-4 text-gray-600 hover:bg-[#00124B] hover:text-white'
                        onClick={handleOptionClick}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className='lg:hidden bg-white shadow-lg w-full absolute top-[60px] left-0'>
          <div className='flex flex-col items-center space-y-4 py-4'>
            {['HOME', 'ABOUT US', 'OUR PRODUCTS', 'EXHIBITION', 'OUR PROCESSING', 'CONTACT US'].map((buttonName) => (
              <div key={buttonName} className='w-full'>
                <div className='flex justify-center'>
                  <button
                    className={`cursor-pointer text-lg font-semibold ${activeButton === buttonName ? 'text-[#00124B]' : 'text-[#726f6f]'}`}
                    onClick={() => 
                      buttonName === 'ABOUT US' || buttonName === 'OUR PRODUCTS'
                        ? toggleMobileDropdown(buttonName)
                        : handleButtonClick(buttonName)
                    }
                  >
                    {buttonName}
                  </button>
                  {/* Toggle dropdown for mobile */}
                  {(buttonName === 'ABOUT US' || buttonName === 'OUR PRODUCTS') && (
                    <button onClick={() => toggleMobileDropdown(buttonName)} className='ml-2'>
                      {mobileDropdownOpen === buttonName ? '▲' : '▼'}
                    </button>
                  )}
                </div>

                {/* Mobile Dropdown */}
                {mobileDropdownOpen === buttonName && (
                  <div className='w-full bg-gray-100 text-center'>
                    {dropdownItems[buttonName]?.map((item) => ( // Safely handle dropdowns only for 'ABOUT US' and 'OUR PRODUCTS'
                      <Link
                        key={item.label}
                        href={item.href}
                        className='block py-2 text-gray-600 hover:bg-[#00124B] hover:text-white'
                        onClick={() => setMobileDropdownOpen('')} // Close dropdown after selection
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className='pt-[120px]'>
        {/* Your page content goes here */}
      </div>
    </>
  );
}

export default Navbar;
