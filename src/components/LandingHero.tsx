'use client';

import { motion } from 'framer-motion';

const LandingHero = () => {
  return (
    <section className="h-screen snap-start relative bg-[#1A1A1A] text-white flex items-center justify-end p-4">
      
      <div className="absolute inset-0 overflow-hidden">
        <video 
          autoPlay 
          muted 
          loop 
          className="w-full h-full object-cover opacity-50"
        >
          <source src="/video/video1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-lg text-right pr-8"
      >
        <h1 className="text-3xl md:text-6xl font-bold mb-8">
          Realise One True Self And Serve Other Selflessly
        </h1>
        <p className="text-lg md:text-2xl mb-12">
          Shrimad Rajchandra Mission Dharampura is a spiritual movement for inner transformation through wisdom, meditation, and selfless services. Founded by Pujya Gurudevshree Rakeshji, the organization works through 206 centers in six continents.
        </p>
        <div className="flex justify-end space-x-6">
          <button 
            className="bg-white text-black  px-6 py-2 rounded-full hover:bg-gray-200 transition"
            aria-label="Explore More"
          >
            Watch About Video
          </button>
          <button 
            className="border-2 border-white  px-6 py-2 rounded-full hover:bg-white/10 transition"
            aria-label="Contact Us"
          >
            Contact Us
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default LandingHero;
