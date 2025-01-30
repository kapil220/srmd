'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

const AshramSection = () => {
  const [activeImage, setActiveImage] = useState('default');

  const images = {
    default: '/images/ashram-aerial.jpg',
    about: '/images/about-ashram.jpg',
    visit: '/images/plan-visit.jpg',
    tirth: '/images/dharampur-tirth.jpg'
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {Object.entries(images).map(([key, src]) => (
        <Image
          key={key}
          src={src}
          alt={`Ashram ${key}`}
          fill
          className={`object-cover transition-opacity duration-500 ${
            activeImage === key ? 'opacity-100' : 'opacity-0'
          }`}
          priority={key === 'default'}
        />
      ))}
      
      <motion.div 
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute right-20 top-1/4 max-w-2xl text-black text-right"
      >
        <h2 className="text-5xl font-semibold mb-20">
          International Headquarters - <br />
          Shrimad Rajchandra Ashram, <br />
          Dharampur
        </h2>

        <div className="space-y-8">
          {[
            { href: '/about-ashram', text: 'About Ashram', image: 'about', button: 'Read More' },
            { href: '/plan-visit', text: 'Plan Your Visit', image: 'visit', button: 'Plan Now' },
            { href: '/dharampur-tirth', text: 'Shri Dharampur Tirth', image: 'tirth', button: 'Explore' }
          ].map((link) => (
            <motion.div 
              key={link.href}
              className="relative"
              initial="initial"
              whileHover="hover"
              onMouseEnter={() => setActiveImage(link.image)}
              onMouseLeave={() => setActiveImage('default')}
            >
              <Link href={link.href} className="block text-2xl hover:underline">
                <div className="flex justify-end items-center">
                  <motion.div
                    variants={{
                      initial: { x: 40 },
                      hover: { x: 0 }
                    }}
                    transition={{ duration: 0.3 }}
                    className="inline-block"
                  >
                    {link.text}
                  </motion.div>
                  <motion.span
                    variants={{
                      initial: { opacity: 0, x: -20 },
                      hover: { opacity: 1, x: 0 }
                    }}
                    transition={{ duration: 0.3 }}
                    className="ml-4 inline-block"
                  >
                    <button className="bg-[#8B4513] px-6 py-2 rounded-lg text-base whitespace-nowrap">
                      {link.button}
                    </button>
                  </motion.span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default AshramSection; 