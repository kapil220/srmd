'use client';



import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import '../app/globals.css';

const schedules = [
  {
    location: 'Dharampur',
    date: 'Fri, 06 Dec - Sun, 08 Dec',
    title: 'Advanced Sadhana Bhatti (Meditation Retreat) - Sakshi Dhyan',
    description: 'A deep meditation retreat to enhance inner peace.',
    image: '/images/post4.webp',
    buttonText: 'Register Now'
  },
  {
    location: 'Dharampur',
    date: 'Tue, 10 Dec',
    title: 'One-Day Advanced Sadhana Bhatti',
    description: 'A short but intensive meditation experience.',
    image: '/images/post1.webp',
    buttonText: 'Register Now'
  },
  {
    location: 'Mumbai',
    date: 'Sat, 14 Dec',
    title: 'Pravachan',
    description: 'An enlightening discourse on spiritual wisdom.',
    image: '/images/post2.webp',
    buttonText: 'Get Directions'
  },
  {
    location: 'Dharampur',
    date: 'Tue, 17 Dec - Thu, 19 Dec',
    title: 'Advanced Sadhana Bhatti (Meditation Retreat) - Sakshi Dhyan',
    description: 'A longer meditation retreat for deeper immersion.',
    image: '/images/post3.webp',
    buttonText: 'Register Now'
  },
  {
    location: 'Mumbai',
    date: 'Sun, 22 Dec',
    title: 'Special Satsang',
    description: 'A spiritual gathering for divine knowledge.',
    image: '/images/post4.webp',
    buttonText: 'Join Now'
  },
  {
    location: 'Dharampur',
    date: 'Mon, 25 Dec',
    title: 'Yoga & Meditation Workshop',
    description: 'A holistic wellness retreat.',
    image: '/images/post1.webp',
    buttonText: 'Register Now'
  },
  {
    location: 'Mumbai',
    date: 'Wed, 27 Dec',
    title: 'Bhakti Sandhya',
    description: 'An evening of devotional music and wisdom.',
    image: '/images/post2.webp',
    buttonText: 'Attend Now'
  },
  {
    location: 'Dharampur',
    date: 'Fri, 29 Dec',
    title: 'Silent Meditation Retreat',
    description: 'A retreat for silence and self-discovery.',
    image: '/images/post3.webp',
    buttonText: 'Register Now'
  },
];

const SchedulesPage = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <main className=" bg-[#fff5e0] h-screen md:pt-32  py-12">
     
      <section className="py-16">
        <div className="max-w-8xl mx-auto pt-8 px-6">
          <h2 className="text-4xl font-bold text-center text-[#8B5E3C] mb-12">Schedules</h2>
          <Swiper
            modules={[Pagination]} // Removed Navigation module
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            pagination={{ clickable: true, el: '.swiper-custom-pagination' }} // Set custom pagination element
            breakpoints={{
              640: { slidesPerView: 1 }, // Mobile: 1 card at a time
              768: { slidesPerView: 2 }, // Tablets: 2 cards at a time
              1024: { slidesPerView: 3 }, // Small Laptops: 3 cards at a time
              1280: { slidesPerView: 4 }  // Large Screens: 4 cards at a time
            }}
            className="w-full"
          >
            {schedules.map((event, index) => (
              <SwiperSlide key={index}>
                <div className=" rounded-2xl overflow-hidden transform transition  duration-300 hover:scale-105 flex flex-col h-[550px]">
                  <div className="relative">
                    <img src={event.image} alt={event.location} className="w-full h-96 object-cover " />
                    <span className="absolute top-3 left-3 bg-white text-[#8B5E3C] text-sm font-semibold px-4 py-1 rounded-full">{event.location}</span>
                    <span className="absolute bottom-3 right-3 bg-white text-[#8B5E3C] text-sm font-semibold px-4 py-1 rounded-full">{event.date}</span>
                  </div>
                  <div className="p-4 text-center flex flex-col flex-grow">
                    <h3 className="text-lg font-semibold text-[#8B5E3C]">{event.title}</h3>
                    <p className="text-gray-700 text-sm mt-2 flex-grow">{event.description}</p>
                    <div 
                      className="mt-4 flex justify-center items-center relative"
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <button className="bg-[#C67C48] text-white font-medium py-2 px-6 hover:rounded-xl hover:bg-[#8B5E3C] transition duration-300">
                        {event.buttonText}
                      </button>

                      {hoveredIndex === index && (
                        <button className="ml-3 bg-[#C67C48] text-white font-medium px-3 py-2 rounded-3xl hover:bg-[#8B5E3C] transition duration-300">
                          →
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-custom-pagination pt-4 md:pt-10"></div> {/* Custom pagination element */}
        </div>
      </section>
    </main>
  );
};

export default SchedulesPage;
