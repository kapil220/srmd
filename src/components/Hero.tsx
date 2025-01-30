'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-r from-[#FFF5F2] to-[#FFF]">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-[#333333]">
            Empowering Your Digital Journey
          </h1>
          <p className="text-xl text-gray-600">
            Transform your business with cutting-edge software solutions tailored to your needs
          </p>
          <div className="flex space-x-4">
            <button className="bg-[#FF5733] text-white px-8 py-3 rounded-full hover:bg-[#E64A2E] transition">
              Get Started
            </button>
            <button className="border-2 border-[#FF5733] text-[#FF5733] px-8 py-3 rounded-full hover:bg-[#FFF5F2] transition">
              Learn More
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative h-[500px]"
        >
          <Image
            src="/hero-image.png"
            alt="Digital Solutions"
            fill
            className="object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 