'use client'
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const NavLink = ({ href, children, className = '' }: NavLinkProps) => (
  <Link 
    href={href} 
    className={`text-lg font-bold text-black hover:text-[#5a91c7] transition duration-200 ${className}`}
  >
    {children}
  </Link>
);

interface DropdownItemProps {
  href: string;
  children: React.ReactNode;
}

const DropdownItem = ({ href, children }: DropdownItemProps) => (
  <Link 
    href={href} 
    className="block px-4 py-2 text-base text-center font-semibold text-black hover:text-[#5a91c7] transition duration-200 hover:translate-x-2"
  >
    {children}
  </Link>
);

const dropdownItems = [
  { href: '/Culture', label: 'Culture' },
  { href: '/Nature', label: 'Nature' },
  { href: '/Shopping', label: 'Shopping' },
  { href: '/Action&sports', label: 'Adventure' }
];

const DesktopDropdown = () => (
  <div className="relative group">
    <NavLink href="/whattodo" className="flex items-center">
      What to do
      <svg className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </NavLink>
    <div className="absolute left-0 w-32 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200 z-50 pt-1">
      <div className="py-1 item-center">
        {dropdownItems.map((item, index) => (
          <DropdownItem key={index} href={item.href}>
            {item.label}
          </DropdownItem>
        ))}
      </div>
    </div>
  </div>
);

const MobileDropdown = ({ isOpen, onToggle }: { isOpen: boolean; onToggle: () => void }) => (
  <div>
    <button 
      onClick={onToggle}
      className="flex items-center justify-between w-full text-lg font-bold text-black hover:text-[#5a91c7] transition duration-200"
    >
      What to do
      <svg 
        className="h-5 w-5 ml-1 transition-transform duration-300" 
        style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    <div className={`pl-4 space-y-2 overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
      {dropdownItems.map((item, index) => (
        <NavLink key={index} href={item.href} className="mt-2 block">
          {item.label}
        </NavLink>
      ))}
    </div>
  </div>
);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="bg-white px-4">
      <nav className="container mx-auto max-w-7xl">
        <div className="flex justify-between items-center py-4">
          {/* Logo and Site Title */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image 
                src="/img/logo.png"
                alt="Logo"
                width={48}
                height={48}
                className="h-12 w-auto"
              />
              <span className="text-2xl font-bold ml-5 text-black">
                <span>Jakarta</span>
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
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
            <NavLink href="/">Home</NavLink>
            <NavLink href="/whatisjakarta">What is Jakarta</NavLink>
            <DesktopDropdown />
            <NavLink href="/whattoeat">What to eat</NavLink>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="flex flex-col space-y-4 py-4">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/whatisjakarta">What is Jakarta</NavLink>
            <MobileDropdown isOpen={isDropdownOpen} onToggle={() => setIsDropdownOpen(!isDropdownOpen)} />
            <NavLink href="/whattoeat">What to eat</NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;