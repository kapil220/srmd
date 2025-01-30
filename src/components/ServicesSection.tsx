'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { HiArrowRight } from 'react-icons/hi';

const ServicesSection = () => {
  const services = [
    {
      title: "Wisdom",
      image: "/images/wisdom.jpg",
      link: "/wisdom"
    },
    {
      title: "Holistic Wellness",
      image: "/images/holistic-wellness.jpg",
      link: "/holistic-wellness"
    },
    {
      title: "Meditation",
      image: "/images/meditation.jpg",
      link: "/meditation"
    },
    {
      title: "Yoga",
      image: "/images/yoga.jpg",
      link: "/yoga"
    },
    {
      title: "Seva",
      image: "/images/seva.jpg",
      link: "/seva"
    }
  ];

  return (
    <section className="min-h-screen py-8 px-4 bg-[#F5F0EA]">
      <div className="container mx-auto pt-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {services.map((service) => (
            <motion.div
              key={service.title}
              className="relative group rounded-3xl overflow-hidden cursor-pointer"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <span className="bg-white text-orange-600 px-4 py-2 rounded-full text-lg font-medium">
                      {service.title}
                    </span>
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <HiArrowRight className="text-orange-600 text-xl" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 