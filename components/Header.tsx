'use client'
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo and Site Title */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image 
                src="/assets/img/logo.png" // Ensure the logo is in the public directory
                alt="Logo"
                width={48} // Adjust as needed
                height={48} // Adjust as needed
                className="h-12 w-auto"
              />
              <span className="text-2xl font-bold ml-5 text-black">
                <span>Jakarta&nbsp;&nbsp;</span>
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleNav} 
              className="text-black hover:text-[#5a91c7] focus:outline-none transition duration-200"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-lg font-bold text-black hover:text-[#5a91c7] transition duration-200">
              Home
            </Link>
            <Link href="/whatisjakarta" className="text-lg font-bold text-black hover:text-[#5a91c7] transition duration-200">
              What is Jakarta
            </Link>
            
            {/* Dropdown */}
            <div className="relative group">
              <Link 
                href="/whattodo" 
                className="text-lg font-bold text-black hover:text-[#5a91c7] flex items-center transition duration-200"
              >
                What to do
                <svg className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <div className="absolute left-0 w-32 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200 z-10">
                <div className="py-1 item-center">
                  <Link href="/Culture" className="block px-4 py-2 text-base text-center font-semibold text-black hover:text-[#5a91c7] hover:bg-gray-50 hover:transition duration-200">
                    Culture
                  </Link>
                  <Link href="/Nature" className="block px-4 py-2 text-base text-center font-semibold text-black hover:text-[#5a91c7] hover:bg-gray-50 transition duration-200">
                    Nature
                  </Link>
                  <Link href="/Shopping" className="block px-4 py-2 text-base text-center font-semibold text-black hover:text-[#5a91c7] hover:bg-gray-50 transition duration-200">
                    Shopping
                  </Link>
                  <Link href="/Action&sports" className="block px-4 py-2 text-base text-center font-semibold text-black hover:text-[#5a91c7] hover:bg-gray-50 transition duration-200">
                    Action
                  </Link>
                </div>
              </div>
            </div>
            
            <Link href="/whattoeat" className="text-lg font-bold text-black hover:text-[#5a91c7] transition duration-200">
              What to eat
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-lg font-bold text-black hover:text-[#5a91c7] transition duration-200">
                Home
              </Link>
              <Link href="/whatisjakarta" className="text-lg font-bold text-black hover:text-[#5a91c7] transition duration-200">
                What is Jakarta
              </Link>
              
              {/* Mobile Dropdown */}
              <div>
                <button 
                  onClick={toggleDropdown}
                  className="flex items-center justify-between w-full text-lg font-bold text-black hover:text-[#5a91c7] transition duration-200"
                >
                  What to do
                  <svg className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isDropdownOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} />
                  </svg>
                </button>
                
                {isDropdownOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    <Link href="/Culture" className="block text-lg font-bold text-black hover:text-[#5a91c7] transition duration-200">
                      Culture
                    </Link>
                    <Link href="/Nature" className="block text-lg font-bold text-black hover:text-[#5a91c7] transition duration-200">
                      Nature
                    </Link>
                    <Link href="/Shopping" className="block text-lg font-bold text-black hover:text-[#5a91c7] transition duration-200">
                      Shopping
                    </Link>
                    <Link href="/Action&sports" className="block text-lg font-bold text-black hover:text-[#5a91c7] transition duration-200">
                      Action
                    </Link>
                  </div>
                )}
              </div>
              
              <Link href="/whattoeat" className="text-lg font-bold text-black hover:text-[#5a91c7] transition duration-200">
                What to eat
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;