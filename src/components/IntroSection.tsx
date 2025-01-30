'use client';
import { motion } from 'framer-motion';

const IntroSection = () => {
  return (
    <section className="h-screen snap-start bg-orange-50 flex items-center justify-center">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.h2 
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-8 text-[#1A1A1A]"
          >
            Creating Digital Excellence
          </motion.h2>
          <motion.p 
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 leading-relaxed"
          >
            We are passionate about transforming businesses through innovative digital solutions. 
            Our expertise spans across web development, mobile applications, and digital transformation.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroSection; 