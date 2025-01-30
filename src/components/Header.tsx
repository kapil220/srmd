'use client';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="fixed top-8 right-8 left-8  w-[95%] bg-white shadow-md z-50 rounded-full">
      <nav className="container mx-auto px-8 py-2 flex justify-between items-center">
        <Link href="/" className="relative ml-4">
          <Image 
            src="/logo.png"
            alt="SRMD Logo"
            width={50}
            height={50}
            className="ml-4"
          />
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/inspiration" className="hover:text-orange-600 transition">Inspiration</Link>
          <Link href="/founder" className="hover:text-orange-600 transition">Founder</Link>
          <Link href="/activities" className="hover:text-orange-600 transition">Activities</Link>
          <Link href="/ashram-centres" className="hover:text-orange-600 transition">Ashram & Centres</Link>
          <Link href="/events" className="hover:text-orange-600 transition">Events & Schedules</Link>
          <Link href="/videos" className="hover:text-orange-600 transition">Videos & Articles</Link>
          <Link href="/shop" className="hover:text-orange-600 transition">Shop</Link>
          <Link href="/donate" className="hover:text-orange-600 transition">Donate</Link>
          <Link href="/contact" className="hover:text-orange-600 transition">Contact Us</Link>
        </div>

        <div className="hidden md:flex items-center space-x-4 mr-8">
          <Link href="/login" className="text-orange-600 hover:text-orange-700 transition">Login</Link>
          <select className="border border-gray-300 rounded px-2 py-1 text-sm">
            <option value="en">English</option>
            <option value="en">Hindi</option>
            {/* Add other language options as needed */}
          </select>
        </div>
      </nav>
    </header>
  );
};

export default Header; 