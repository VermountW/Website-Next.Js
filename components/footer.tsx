// components/Footer.jsx
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-white py-12 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-25">
          {/* Logo Section */}
          <div className="md:col-span-3 sm:col-span-4">
            <div className="footer-logo">
              <Link href="/">
                <Image 
                  src="/assets/img/logo.png" 
                  alt="Logo" 
                  width={150} 
                  height={50}
                  className="h-auto"
                />
              </Link>
            </div>
          </div>
          
          {/* Social Media Section */}
          <div className="md:col-span-2 md:col-start-8 sm:col-span-4">
            <h3 className="text-lg font-semibold mb-4 text-black">Social Media</h3>
            <ul className="space-y-2">
              <li>
                <Link href="https://www.instagram.com/whatisjakarta1/" className="text-black hover:text-[#5a91c7] ">
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="https://twitter.com/WhatisJakarta?t=Ox7I79Wei2qBkKH5V546Vg&s=09" className="text-black hover:text-[#5a91c7] ">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="https://www.tiktok.com/@whatisjakarta1" className="text-black hover:text-[#5a91c7] ">
                  Tiktok
                </Link>
              </li>
              <li>
                <Link href="mailto:" className="text-black hover:text-[#5a91c7] ">
                  Email
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Featured Links Section */}
          <div className="md:col-span-2 sm:col-span-4">
            <h3 className="text-lg font-semibold mb-4 text-black">Featured links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-black hover:text-[#5a91c7] ">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/whatisjakarta" className="text-black hover:text-[#5a91c7] ">
                  What is Jakarta
                </Link>
              </li>
              <li>
                <Link href="/whattodo" className="text-black hover:text-[#5a91c7] ">
                  What to Do
                </Link>
              </li>
              <li>
                <Link href="/whattoeat" className="text-black hover:text-[#5a91c7] ">
                  What to Eat
                </Link>
              </li>
            </ul>
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