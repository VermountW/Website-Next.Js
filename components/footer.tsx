import Link from 'next/link';
import Image from 'next/image';

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

const FooterLink = ({ href, children }: FooterLinkProps) => (
  <li>
    <Link 
      href={href} 
      className="inline-block text-black hover:text-[#5a91c7] transition duration-200 hover:translate-x-2"
    >
      {children}
    </Link>
  </li>
);

interface FooterSectionProps {
  title: string;
  children: React.ReactNode;
}

const FooterSection = ({ title, children }: FooterSectionProps) => (
  <div>
    <h3 className="text-lg font-semibold mb-4 text-black">{title}</h3>
    <ul className="space-y-2">
      {children}
    </ul>
  </div>
);

const socialLinks = [
  { href: 'https://www.instagram.com/whatisjakarta1/', label: 'Instagram' },
  { href: 'https://twitter.com/WhatisJakarta?t=Ox7I79Wei2qBkKH5V546Vg&s=09', label: 'Twitter' },
  { href: 'https://www.tiktok.com/@whatisjakarta1', label: 'Tiktok' },
  { href: 'mailto:', label: 'Email' }
];

const featuredLinks = [
  { href: '/', label: 'Home' },
  { href: '/whatisjakarta', label: 'What is Jakarta' },
  { href: '/whattodo', label: 'What to Do' },
  { href: '/whattoeat', label: 'What to Eat' }
];

export default function Footer() {
  return (
    <footer className="bg-white py-12 border-t border-gray-200 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-14 gap-8">
          {/* Logo Section */}
          <div className="md:col-span-3 sm:col-span-4">
            <div className="footer-logo">
              <Link href="/">
                <Image 
                  src="/img/logo.png" 
                  alt="Logo" 
                  width={150} 
                  height={50}
                  className="h-auto"
                />
              </Link>
            </div>
          </div>
          
          {/* Social Media Section */}
          <div className="md:col-span-2 md:col-start-11 sm:col-span-4">
            <FooterSection title="Social Media">
              {socialLinks.map((link, index) => (
                <FooterLink key={index} href={link.href}>
                  {link.label}
                </FooterLink>
              ))}
            </FooterSection>
          </div>
          
          {/* Featured Links Section */}
          <div className="md:col-span-2 sm:col-span-4">
            <FooterSection title="Featured links">
              {featuredLinks.map((link, index) => (
                <FooterLink key={index} href={link.href}>
                  {link.label}
                </FooterLink>
              ))}
            </FooterSection>
          </div>
        </div>
      </div>
      
      {/* Copyright Section */}
      <div className="border-t border-gray-200 mt-8 pt-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-black">&copy; copyright</p>
            <p className="text-black">All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}