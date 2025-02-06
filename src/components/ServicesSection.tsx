'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

const ServicesSection = () => {
  const services = [
    {
      title: "Wisdom",
      image: "/images/wisdom.webp",
      link: "/wisdom"
    },
    {
      title: "Holistic Wellness",
      image: "/images/wellness.jpg",
      link: "/holistic-wellness"
    },
    {
      title: "Meditation",
      image: "/images/meditation.webp",
      link: "/meditation"
    },
    {
      title: "Yoga",
      image: "/images/yoga.webp",
      link: "/yoga"
    },
    {
      title: "Seva",
      image: "/images/seva.jpeg",
      link: "/seva"
    }
  ];

  const servicesSectionRef = useRef<HTMLElement>(null);


  useEffect(() => {
    // Check if the page has been visited before in this session
    const isFirstVisit = sessionStorage.getItem('firstVisit');

    // If it's the first visit, set a flag and trigger auto-scroll
    if (!isFirstVisit) {
      // Set timeout to scroll after 4 seconds
      const timer = setTimeout(() => {
        servicesSectionRef.current?.scrollIntoView({
          behavior: 'smooth'
        });

        // Mark this visit in sessionStorage
        sessionStorage.setItem('firstVisit', 'true');
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <>
     
     <section className="h-screen snap-start bg-orange-50 flex items-center justify-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h2
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl md:text-8xl font-bold mb-4 text-yellow-700"
            >
              Realise One&apos;s True Self
            </motion.h2>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section 
        ref={servicesSectionRef}
        className="h-screen px-4 bg-[#F5F0EA] snap-start"
      >
        <motion.div 
          className="container pt-32 mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {/* Large Screen Layout */}
          <div className="hidden sm:grid grid-cols-2 gap-6 lg:grid-cols-2 py-8">
            {services.slice(0, 2).map((service) => (
              <motion.div
                key={service.title}
                className="relative group rounded-3xl overflow-hidden cursor-pointer col-span-1 lg:aspect-[16/7]"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                <div className="absolute inset-0 p-6 flex flex-col justify-between w-1/3">
                  <span className="bg-white text-orange-600 px-4 py-2 rounded-full text-lg font-medium">
                    {service.title}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="hidden sm:grid grid-cols-3 gap-6 mt-6">
            {services.slice(2, 5).map((service) => (
              <motion.div
                key={service.title}
                className="relative group rounded-3xl overflow-hidden cursor-pointer col-span-1 aspect-[4/3]"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                <div className="absolute inset-0 p-6 flex flex-col justify-between w-1/3">
                  <span className="bg-white text-orange-600 px-4 py-2 rounded-full text-lg font-medium">
                    {service.title}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Layout */}
          <motion.div 
            className="sm:hidden flex flex-col gap-1 py-2  h-screen"
            variants={containerVariants}
          >
            {/* First row */}
            <motion.div
              key={services[0].title}
              className="relative group rounded-3xl overflow-hidden cursor-pointer aspect-[16/7]"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src={services[0].image}
                alt={services[0].title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
              <div className="absolute inset-0 p-6 flex flex-col justify-between w-1/2">
                <span className="bg-white text-orange-600 px-4 py-2 rounded-full text-sm font-medium">
                  {services[0].title}
                </span>
              </div>
            </motion.div>

            {/* Grid layout */}
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col gap-4">
                {services.slice(1, 3).map((service) => (
                  <motion.div
                    key={service.title}
                    className="relative group rounded-3xl overflow-hidden cursor-pointer aspect-square"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                    <div className="absolute inset-0 p-6 flex flex-col justify-between">
                      <span className="bg-white text-orange-600 px-4 py-2 rounded-full text-sm font-medium">
                        {service.title}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
              <motion.div
                key={services[3].title}
                className="relative group rounded-3xl overflow-hidden cursor-pointer aspect-[9/19]"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <Image
                  src={services[3].image}
                  alt={services[3].title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <span className="bg-white text-orange-600 px-4 py-2 rounded-full text-sm font-medium">
                    {services[3].title}
                  </span>
                </div>
              </motion.div>
            </div>

            <motion.div
              key={services[4].title}
              className="relative group rounded-3xl overflow-hidden cursor-pointer aspect-[16/7]"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src={services[4].image}
                alt={services[4].title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
              <div className="absolute inset-0 p-6 flex flex-col justify-between w-1/2">
                <span className="bg-white text-orange-600 px-4 py-2 rounded-full text-sm font-medium">
                  {services[4].title}
                </span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default ServicesSection;