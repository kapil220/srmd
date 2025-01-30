'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const LandingHero = () => {
  return (
    <section className="h-screen snap-start relative bg-[#1A1A1A] text-white flex items-center justify-center">
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.jpg"
          alt="Background"
          fill
          className="object-cover opacity-50"
        />
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-4 text-center relative z-10"
      >
        <h1 className="text-6xl md:text-8xl font-bold mb-8">
          SRMD
        </h1>
        <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto">
          Transforming Ideas into Digital Reality
        </p>
        <div className="flex justify-center space-x-6">
          <button className="bg-white text-black px-8 py-3 rounded-full hover:bg-gray-200 transition">
            Explore
          </button>
          <button className="border-2 border-white px-8 py-3 rounded-full hover:bg-white/10 transition">
            Contact Us
          </button>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="animate-bounce">
            <svg 
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default LandingHero; 