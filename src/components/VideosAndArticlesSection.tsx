'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import '../app/globals.css';

const videos = [
  { title: 'Shrimad Rajchandra Mission Dharampur - A Brief Introduction', image: '/images/photo1.webp', duration: '05:36' },
  { title: 'Shrimad Rajchandra Love and Care - An Introduction', image: '/images/photo2.webp', duration: '28:51' },
  { title: 'Shri Dharampur Tirth - Salient Features of the Jinmandir', image: '/images/photo3.webp', duration: '06:31' },
  { title: 'A quick tip on how to change your habits', image: '/images/photo4.webp', duration: '02:46' },
];

const articles = [
  { title: 'The Art of Turning Within', image: '/images/photo1.webp', description: 'Have you ever caught yourself half-way through a fit of anger and realised its futility?' },
  { title: 'The Miraculous Presence of the Master', image: '/images/photo2.webp', description: 'What is it that takes place when the disciple meets the Master?' },
  { title: 'The True Meaning of Ahimsa', image: '/images/photo3.webp', description: 'Ahimsa is widely understood as "not harming or hurting others". But is this the complete meaning?' },
  { title: 'Life - A Priceless Opportunity', image: '/images/photo4.webp', description: 'You are alive only if you have a higher purpose in life. Pujya Gurudevshri here tells us to...' },
];

const VideosAndArticlesSection = () => {
  return (
    <section className="w-full py-8 pt-32 px-6 bg-[#F5ECE0]">
      {/* Videos Section */}
      <h2 className="text-4xl font-bold text-[#9D5C0D] mt-4 text-center mb-8">Videos</h2>
      <Swiper
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 }
        }}
        className="w-full"
      >
        {videos.map((video, index) => (
          <SwiperSlide key={index}>
            <div className="relative rounded-lg overflow-hidden">
              <img src={video.image} alt={video.title} className="w-full h-48 object-cover rounded-3xl" />
              <span className="absolute bottom-2 right-2 bg-black text-white px-2 py-1 text-sm rounded">{video.duration}</span>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-[#9D5C0D]">{video.title}</h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Articles Section */}
      <h2 className="text-4xl font-bold text-[#9D5C0D] text-center mt-12 mb-8">Articles</h2>
      <Swiper
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 }
        }}
        className="w-full"
      >
        {articles.map((article, index) => (
          <SwiperSlide key={index}>
            <div className="relative rounded-lg overflow-hidden">
              <img src={article.image} alt={article.title} className="w-full h-48 object-cover rounded-3xl" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-[#9D5C0D]">{article.title}</h3>
                <p className="text-gray-700 text-sm mt-2">{article.description}</p>
                <button className="mt-4 text-[#9D5C0D] bg-white p-2 px-4 font-semibold">Read More</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default VideosAndArticlesSection;
