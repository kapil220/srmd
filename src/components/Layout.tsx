'use client';
import { usePathname } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useEffect, useState } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
    
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

  
    window.addEventListener('scroll', handleScroll);

  
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

 
  const isHomePage = pathname === '/';
  const shouldHideHeader = isHomePage && !isScrolled;

  return (
    <>
      {!shouldHideHeader && <Header />}
      {children}
      <Footer />
    </>
  );
}