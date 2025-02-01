'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('en');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Header for small devices */}
      <header className="fixed top-10 right-0 left-0 w-11/12 h-16 bg-white shadow-md z-50 rounded-full md:hidden mx-auto">
        <nav className="container mx-auto px-4 py-2 flex justify-between items-center">
          <Link href="/" className="relative">
            <Image 
              src="/logo.png"
              alt="SRMD Logo"
              width={40}
              height={40}
            />
          </Link>
          <button onClick={toggleMenu} className="text-orange-600">
            {/* Hamburger Icon */}
            <span className="material-icons">menu</span>
          </button>
        </nav>
        {isMenuOpen && (
          <div className="bg-orange-50 shadow-md">
            <Link href="/login" className="block px-4 py-2 text-orange-600 hover:text-orange-700">Login</Link>
            <Link href="/inspiration" className="block px-4 py-2 text-orange-600 hover:text-orange-700">Inspiration</Link>
            <Link href="/founder" className="block px-4 py-2 text-orange-600 hover:text-orange-700">Founder</Link>
            <Link href="/activities" className="block px-4 py-2 text-orange-600 hover:text-orange-700">Activities</Link>
            <Link href="/ashram-centres" className="block px-4 py-2 text-orange-600 hover:text-orange-700">Ashram & Centres</Link>
            <Link href="/events" className="block px-4 py-2 text-orange-600 hover:text-orange-700">Events & Schedules</Link>
            <Link href="/videos" className="block px-4 py-2 text-orange-600 hover:text-orange-700">Videos & Articles</Link>
            <Link href="/shop" className="block px-4 py-2 text-orange-600 hover:text-orange-700">Shop</Link>
            <Link href="/donate" className="block px-4 py-2 text-orange-600 hover:text-orange-700">Donate</Link>
            <Link href="/contact" className="block px-4 py-2 text-orange-600 hover:text-orange-700">Contact Us</Link>
          </div>
        )}
      </header>

      {/* Header for larger devices */}
      <header className="hidden md:block fixed top-10 right-0 left-0 w-11/12 bg-orange-50 shadow-md z-50 rounded-full mx-auto">
        <nav className="container mx-auto px-8 py-2 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Link href="/" className="relative">
              <Image 
                src="/logo.png"
                alt="SRMD Logo"
                width={50}
                height={50}
                className="ml-4"
              />
            </Link>
         
          </div>
          
          <div className="flex items-center space-x-6">
            <Link href="/inspiration" className="text-gray-700 hover:text-orange-600 transition">Inspiration</Link>
            <Link href="/founder" className="text-gray-700 hover:text-orange-600 transition">Founder</Link>
            <Link href="/activities" className="text-gray-700 hover:text-orange-600 transition">Activities</Link>
            <Link href="/ashram-centres" className="text-gray-700 hover:text-orange-600 transition">Ashram & Centres</Link>
            <Link href="/events" className="text-gray-700 hover:text-orange-600 transition">Events & Schedules</Link>
            <Link href="/videos" className="text-gray-700 hover:text-orange-600 transition">Videos & Articles</Link>
            <Link href="/shop" className="text-gray-700 hover:text-orange-600 transition">Shop</Link>
            <Link href="/donate" className="text-gray-700 hover:text-orange-600 transition">Donate</Link>
            <Link href="/contact" className="text-gray-700 hover:text-orange-600 transition">Contact Us</Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link href="/login" className="text-orange-600 hover:text-orange-700 transition">Login</Link>
            <select 
              value={language} 
              onChange={(e) => setLanguage(e.target.value)} 
              className="border border-gray-300 rounded px-2 py-1 text-sm"
            >
              <option value="en">English</option>
              <option value="hi">Hindi</option>
              {/* Add other language options as needed */}
            </select>
            <button className="text-gray-700 hover:text-orange-600">
              <span className="material-icons">search</span>
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header; 