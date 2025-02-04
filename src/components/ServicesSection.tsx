'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';


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

  return (
    <section className="min-h-screen  px-4 bg-[#F5F0EA]">
      <div className="container  pt-32  mx-auto">
        {/* Large Screen Layout */}
        <div className="hidden sm:grid grid-cols-2 gap-6 lg:grid-cols-2 py-8">
          {services.slice(0, 2).map((service) => (
            <motion.div
              key={service.title}
              className="relative group rounded-3xl overflow-hidden cursor-pointer col-span-1 lg:aspect-[16/7]"
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
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                onError={(e) => {
                  console.error(`Error loading image for ${service.title}:`, e);
                }}
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
        <div className="sm:hidden flex flex-col gap-6 ">
          {/* First row - single image */}
          <motion.div
            key={services[0].title}
            className="relative group rounded-3xl overflow-hidden cursor-pointer aspect-[16/7]"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={services[0].image}
              alt={services[0].title}
              fill
              className="object-cover"
              onError={(e) => {
                console.error(`Error loading image for ${services[0].title}:`, e);
              }}
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
            <div className="absolute inset-0 p-6 flex flex-col justify-between w-1/2">
              <span className="bg-white text-orange-600 px-4 py-2 rounded-full text-sm font-medium">
                {services[0].title}
              </span>
            </div>
          </motion.div>

          {/* Second row - grid layout for images 2,3,4 */}
          <div className="grid grid-cols-2 gap-4">
            {/* First column with stacked images 2 and 3 */}
            <div className="flex flex-col gap-4">
              {services.slice(1, 3).map((service) => (
                <motion.div
                  key={service.title}
                  className="relative group rounded-3xl overflow-hidden cursor-pointer aspect-square"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      console.error(`Error loading image for ${service.title}:`, e);
                    }}
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-between ">
                    <span className="bg-white text-orange-600 px-4 py-2 rounded-full text-sm font-medium">
                      {service.title}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
            {/* Second column with image 4 */}
            <motion.div
              key={services[3].title}
              className="relative group rounded-3xl overflow-hidden cursor-pointer aspect-[9/19]"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={services[3].image}
                alt={services[3].title}
                fill
                className="object-cover"
                onError={(e) => {
                  console.error(`Error loading image for ${services[3].title}:`, e);
                }}
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
              <div className="absolute inset-0 p-6 flex flex-col justify-between ">
                <span className="bg-white text-orange-600 px-4 py-2 rounded-full text-sm font-medium">
                  {services[3].title}
                </span>
              </div>
            </motion.div>
          </div>

         
          <motion.div
            key={services[4].title}
            className="relative group rounded-3xl overflow-hidden cursor-pointer aspect-[16/7]"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={services[4].image}
              alt={services[4].title}
              fill
              className="object-cover"
              onError={(e) => {
                console.error(`Error loading image for ${services[4].title}:`, e);
              }}
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
            <div className="absolute inset-0 p-6 flex flex-col justify-between w-1/2">
              <span className="bg-white text-orange-600 px-4 py-2 rounded-full text-sm font-medium">
                {services[4].title}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;