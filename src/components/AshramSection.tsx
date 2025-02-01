'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

const AshramSection = () => {
  const [activeImage, setActiveImage] = useState('default');

  const images = {
    default: '/images/about-ashram.webp',
    about: '/images/about-ashram.webp',
    visit: '/images/plan-visit.webp',
    tirth: '/images/dharampura.webp'
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 w-screen h-screen">
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
      </div>

      <motion.div 
        initial={{ x: 100, opacity: 1 }}
        whileInView={{ x: 0, opacity: 0.8 }}
        transition={{ duration: 0.8 }}
        className="absolute bottom-0 lg:right-0 lg:top-0 h-[40vh] lg:h-full w-full lg:w-[50%] bg-orange-100 lg:bg-transparent lg:bg-gradient-to-l lg:from-black/100 lg:to-transparent flex items-center text-black lg:text-white"
      >
        <div className="px-6 lg:pr-20 text-center lg:text-right w-full">
          <h2 className="text-3xl lg:text-5xl font-semibold mb-8 lg:mb-20">
            International Headquarters  <br />
            Shrimad Rajchandra Ashram, <br />
            Dharampur
          </h2>

          <div className="space-y-4 lg:space-y-8">
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
                <Link href={link.href} className="block text-xl lg:text-2xl">
                  <div className="relative py-2 lg:py-4">
                    <div className="flex justify-between items-center px-4 lg:px-0">
                      <div className="text-left lg:text-right lg:w-full">
                        {link.text}
                      </div>
                      <div className="lg:hidden">
                        <button className="bg-[#8B4513] px-4 py-1 rounded-lg text-sm whitespace-nowrap text-white">
                          {link.button}
                        </button>
                      </div>
                      <motion.div
                        variants={{
                          initial: { opacity: 0, x: -20 },
                          hover: { opacity: 1, x: 0 }
                        }}
                        transition={{ duration: 0.3 }}
                        className="hidden lg:block"
                      >
                        <button className="bg-[#8B4513]  px-8 py-2 rounded-lg text-base whitespace-nowrap text-white">
                          {link.button}
                        </button>
                      </motion.div>
                    </div>
                    <div className="absolute bottom-0 w-full border-b-[1px] border-black lg:border-white"></div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AshramSection; 