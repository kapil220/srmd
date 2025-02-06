'use client';

import Image from 'next/image';
import { useState } from 'react';

const activities = [
  {
    title: 'Magictouch (4 to 8 years)',
    description: 'Unfolding the divinity within little hearts',
    links: ['Locate A Center', 'Explore Curriculum'],
    bgColor: 'bg-sky-800',
  },
  {
    title: 'Arhat Touch (8 to 12 years)',
    description: 'Living the Jain way',
    links: ['Locate A Center', 'Explore Curriculum'],
    bgColor: 'bg-red-900',
  },
  {
    title: 'Spiritualtouch (12 to 16 years)',
    description: 'Being Rooted in Wisdom',
    links: ['Locate A Center', 'Explore Curriculum'],
    bgColor: 'bg-green-700',
  },
  {
    title: 'Spiritualtouch Retreat- A Special Getaway',
    description: 'Guiding teens on their spiritual journey',
    links: ['Locate A Center', 'Explore Curriculum'],
    bgColor: 'bg-green-700',
  },
];

const ChildrenActivities = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen bg-zinc-200">
      {/* Left Side - Image */}
      <div className="w-full md:w-1/2 relative h-[450px] md:h-auto">
        <Image
          src="/images/children.webp"
          alt="Children Activities"
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>

      {/* Right Side - Content */}
      <div className="w-full h-1/2 md:h-full md:w-1/2 flex flex-col md:pt-32">
        <div className="px-6 md:px-4 pt-8 md:pt-16 mb-8 md:mb-24 md:mx-16">
          <h2 className="text-2xl md:text-3xl font-bold text-yellow-700">Children Activities</h2>
          <p className="text-black md:mr-32 my-4 text-sm md:text-base">
            Shrimad Rajchandra Divinetouch is a global chain of value-education classes for children, founded by Pujya Gurudevshri.
          </p>
          <button className="mt-4 md:mt-6 bg-[#9D5C0D] text-white px-6 py-2 hover:rounded-lg hover:bg-black transition text-sm md:text-base">
            Know More
          </button>
        </div>

        <div className="flex flex-col">
          {activities.map((activity, index) => (
            <div
              key={index}
              className={`transition-all duration-300 p-4  md:p-6 cursor-pointer border-b border-yellow-700
                ${hoveredIndex === index ? `${activity.bgColor} text-white` : 'text-yellow-700'}
                ${hoveredIndex === index ? 'h-auto ' : 'md:h-24 h-12' }`}
              onMouseEnter={() => window.innerWidth >= 768 && setHoveredIndex(index)}
              onMouseLeave={() => window.innerWidth >= 768 && setHoveredIndex(null)}
            >
              {/* Mobile Title */}
              <h3 className="md:hidden text-lg font-semibold">{activity.title}</h3>

              {/* Desktop View (unchanged) */}
              <div className="hidden md:block">
                <h3 className="text-3xl font-semibold">{activity.title}</h3>
                {hoveredIndex === index && (
                  <div className="mt-4">
                    <p className="text-base">{activity.description}</p>
                    <div className="mt-4 flex space-x-4">
                      {activity.links.map((link, i) => (
                        <button
                          key={i}
                          className="px-4 py-2 bg-white text-yellow-700"
                        >
                          {link}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChildrenActivities;