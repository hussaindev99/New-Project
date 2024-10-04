'use client';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Logo from '@/app/public/image/logo.png';
import Link from 'next/link';

function Navbar() {
    const [activeButton, setActiveButton] = useState('HOME');
    const [dropdownOpen, setDropdownOpen] = useState('');
    const dropdownRef = useRef(null);

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
        setDropdownOpen(buttonName === 'ABOUT US' || buttonName === 'OUR PRODUCTS' ? buttonName : '');
    };

    const handleOptionClick = () => {
        setDropdownOpen(''); // Close dropdown when an option is clicked
    };

    // Handle clicks outside of the dropdown
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
            {/* Navbar */}
            <div className='bg-white h-[60px] w-full flex justify-center items-center mt-5'>
                <div className='w-[85%] flex justify-between items-center'>
                    <Image src={Logo} alt='Logo' className='sm:h-[60px] sm:w-[130px] h-[60px] w-[110px]' />

                    {/* Desktop Navigation */}
                    <div className='hidden lg:flex xl:w-[58%] justify-between lg:text-[10px] space-x-2 lg:space-x-6'>
                        {['HOME', 'ABOUT US', 'OUR PRODUCTS', 'EXHIBITION', 'OUR PROCESSING', 'CONTACT US'].map((buttonName) => (
                            <div
                                key={buttonName}
                                className='relative'
                                onMouseEnter={() => buttonName === 'ABOUT US' || buttonName === 'OUR PRODUCTS' ? setDropdownOpen(buttonName) : null} // Show dropdown on hover
                                onMouseLeave={() => buttonName === 'ABOUT US' || buttonName === 'OUR PRODUCTS' ? setDropdownOpen('') : null} // Hide dropdown on mouse leave
                            >
                                {/* Main Navigation Links wrapped in Link */}
                                <Link
                                    href={buttonName === 'HOME' ? '/' : `/${buttonName.toLowerCase().replace(' ', '')}`} // Navigate to other pages
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
                                        {dropdownItems[buttonName].map((item) => (
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

            {/* Content starts here with margin to avoid overlap */}
            <div className='pt-[120px]'>
                {/* Your page content goes here */}
            </div>
        </>
    );
}

export default Navbar;
