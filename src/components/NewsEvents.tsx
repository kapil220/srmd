'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const events = [
  {
    title: 'Jnan Pacham 2024',
    image: '/images/news1.webp',
    date: '17-25 Nov, 2024',
    description: 'Pujya Gurudevshris USA Dharmayatra refueled a wave of devotion and joy among seekers.',
  },
  {
    title: 'USA Dharmayatra',
    image: '/images/news2.webp',
    date: '17-25 Nov, 2024',
    description: 'Pujya Gurudevshris USA Dharmayatra refueled a wave of devotion and joy among seekers.',
  },
  {
    title: 'Param Krupalu Devs Birth Anniversary',
    image: '/images/news3.webp',
    date: '17-25 Nov, 2024',
    description: 'Pujya Gurudevshris USA Dharmayatra refueled a wave of devotion and joy among seekers.',
  },
];

const NewsEvents = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? events.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === events.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full py-12 bg-[#F4EDE4] text-center h-screen pt-32">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-[#8B572A] p-8"
      >
        News & Events
      </motion.h2>

      {/* Wrapper for large screens */}
      <div className="relative items-center justify-center gap-12 py-24 hidden md:flex">
        <button onClick={handlePrev} className="absolute left-0 p-3 bg-yellow-600 rounded-full shadow-md">
          <FaChevronLeft />
        </button>

        {events.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.2,
              bounce: 0.4,
              type: "spring"
            }}
            whileHover={{ scale: 1.02 }}
            className={`relative p-4 rounded-lg transition-all duration-500 ${
              index === activeIndex ? 'scale-105 bg-[#2F1B10] text-white' : 'bg-[#2F1B10] text-white opacity-90'
            }`}
            style={{ width: index === activeIndex ? '450px' : '350px', height: index === activeIndex ? '450px' : '280px' }}
          >
            <Image 
              src={event.image} 
              alt={event.title} 
              width={index === activeIndex ? 450 : 350} 
              height={index === activeIndex ? 300 : 200} 
              className="rounded-lg transition-all duration-500" 
            />
            {event.date && (
              <div className="absolute top-2 right-2 bg-white text-[#8B572A] px-3 py-1 rounded-lg text-sm font-bold">
                {index === activeIndex && event.date && <p className="mt-2">{event.date}</p>}
              </div>
            )}
            <h3 className="mt-4 mb-2 font-semibold text-lg">{event.title}</h3>
            {index === activeIndex && event.description && <p className="mt-8">{event.description}</p>}
          </motion.div>
        ))}

        <button onClick={handleNext} className="absolute right-0 p-3 bg-yellow-600 rounded-full shadow-md">
          <FaChevronRight />
        </button>
      </div>

      {/* Wrapper for mobile screens */}
      <div className="relative flex flex-col items-center justify-center gap-6 py-12 md:hidden">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            bounce: 0.4,
            type: "spring"
          }}
          className="relative p-4 bg-[#2F1B10] text-white rounded-lg"
          style={{ width: '90%', height: 'auto' }}
        >
          <Image 
            src={events[activeIndex].image} 
            alt={events[activeIndex].title} 
            width={400} 
            height={250} 
            className="rounded-lg"
          />
          {events[activeIndex].date && (
            <div className="absolute top-2 right-2 bg-white text-[#8B572A] px-3 py-1 rounded-lg text-sm font-bold">
              <p>{events[activeIndex].date}</p>
            </div>
          )}
          <h3 className="mt-4 mb-2 font-semibold text-lg">{events[activeIndex].title}</h3>
          <p className="mt-4">{events[activeIndex].description}</p>
        </motion.div>

        <div className="flex justify-between w-full px-8">
          <button onClick={handlePrev} className="p-3 bg-yellow-600 rounded-full shadow-md">
            <FaChevronLeft />
          </button>
          <button onClick={handleNext} className="p-3 bg-yellow-600 rounded-full shadow-md">
            <FaChevronRight />
          </button>
        </div>
      </div>

      {/* Indicators */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="flex justify-center mt-6 space-x-2"
      >
        {events.map((_, index) => (
          <div
            key={index}
            className={`h-3 w-3 rounded-full ${index === activeIndex ? 'bg-yellow-600' : 'bg-white border border-yellow-600'}`}
          ></div>
        ))}
      </motion.div>
    </div>
  );
};

export default NewsEvents;
