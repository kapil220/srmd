import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

type Contact = {
  name: string;
  email: string;
  phone: string;
  timing: string;
  address: string;
};

const StatBox = ({ number, title }: { number: string; title: string }) => (
  <div className="text-center text-white">
    <div className="text-5xl md:text-7xl font-bold mb-2">{number}</div>
    <div className="text-lg md:text-xl">{title}</div>
  </div>
);

const CentreCard = ({ title, contact }: { title: string; contact: Contact; bgColor?: string }) => (
  <div className={`bg-gradient-to-r from-[#a17d3d] via-[#82622c] to-[#634a21] p-4 lg:p-8 rounded-3xl text-white shadow-lg`}>
    <h3 className="text-3xl mb-6">{title}</h3>
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <div className="bg-white rounded-full p-2">
          <svg className="w-6 h-6 text-[#82622c]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
          </svg>
        </div>
        <span>{contact.name}</span>
      </div>
      <div className="flex items-center gap-4">
        <div className="bg-white rounded-full p-2">
          <svg className="w-6 h-6 text-[#82622c]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
        </div>
        <span>{contact.email}</span>
      </div>
      <div className="flex items-center gap-4">
        <div className="bg-white rounded-full p-2">
          <svg className="w-6 h-6 text-[#82622c]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 12h2c0-4.97-4.03-9-9-9v2c3.87 0 7 3.13 7 7z"/>
          </svg>
        </div>
        <span>{contact.phone}</span>
      </div>
      <div className="flex items-center gap-4">
        <div className="bg-white rounded-full p-2">
          <svg className="w-6 h-6 text-[#82622c]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
          </svg>
        </div>
        <span>{contact.timing}</span>
      </div>
      <div className="flex items-center gap-4">
        <div className="bg-white rounded-full p-2">
          <svg className="w-6 h-6 text-[#82622c]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
        </div>
        <span>{contact.address}</span>
      </div>
    </div>
  </div>
);


const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return isMobile;
};

const CentresSection = () => {
  const isMobile = useIsMobile();
  const stats = [
    { number: "206", title: "Mission Centres" },
    { number: "96", title: "Youth Centres" },
    { number: "252", title: "Children Centres" },
    { number: "206", title: "Seva Centres" },
  ];

  const centres = [
    {
      title: "Ghatkopar",
      contact: {
        name: "Heena Shah",
        email: "ghatkopar@srmd.org",
        phone: "+91 98211 44215",
        timing: "12:00 noon to 1:00 pm",
        address: "Kishore Kunj, Ground Floor, Tilak Road, Ghatkopar West, Mumbai - 400 077"
      }
    },
    {
      title: "Ghatkopar - Youth",
      contact: {
        name: "Sankat Bhalghat",
        email: "ghatkopar.youth@srmd.org",
        phone: "+91 98697 83311",
        timing: "Full Day",
        address: "Kishore Kunj, Ground Floor, Tilak Road, Ghatkopar West, Mumbai - 400 077"
      }
    },
    {
      title: "Ghatkopar - Divinetouch",
      contact: {
        name: "Jyoti Doshi",
        email: "ghatkopar@divinetouch.srmd.org",
        phone: "+91 98201 81194",
        timing: "10:00 am to 11:00 am",
        address: "Kishore Kunj, Ground Floor, Tilak Road, Ghatkopar West, Mumbai - 400 077"
      }
    }
  ];


  const [currentPage, setCurrentPage] = useState(0);
  const centresPerPage = 1;
  const pageCount = Math.ceil(centres.length / centresPerPage);
  
  const displayedCentres = centres.slice(
    currentPage * centresPerPage,
    (currentPage + 1) * centresPerPage
  );

 
  const displayedCentresResponsive = isMobile ? displayedCentres : centres;

  return (
    <section className="min-h-screen bg-orange-100">
      <div className='pt-32 lg:pt-40'>
        <div className="relative bg-gradient-to-r from-[#a17d3d] via-[#82622c] to-[#634a21] py-20">
          <Image
            src="/images/worldmap.webp"
            alt="World Map"
            width={500}
            height={200}
            className="absolute right-0 top-0 opacity-10  h-full"
          />
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <StatBox key={stat.title} {...stat} />
              ))}
            </div>
          </div>
        </div>

        <div className="container mx-auto py-4 lg:py-10 px-4">
         
          <div className="flex flex-rows  justify-between items-center mb-2 lg:mb-4">
            <h2 className="text-4xl text-[#82622c] font-serif mb-4 sm:mb-0">Centres Near You</h2>
            <Link 
              href="/workouts" 
              className="text-[#82622c] underline text-xl"
            >
              View All
            </Link>
          </div>

         
          <div className="relative mb-8 lg:hidden">
            <input
              type="text"
              placeholder="Search Location"
              className="w-full p-4  bg-transparent border-b-2 border-white text-[#82622c] text-xl placeholder-[#82622c]"
            />
            <svg className="w-6 h-6 text-[#82622c] absolute right-4 top-1/2 transform -translate-y-1/2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            </svg>
          </div>
        
          

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16 ">
            {displayedCentresResponsive.map((centre) => (
              <CentreCard 
                key={centre.title} 
                {...centre}
              />
            ))}
          </div>

          <div className="flex md:hidden justify-center items-center mt-8 gap-2">
            {Array.from({ length: pageCount }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-3 h-3 rounded-full ${
                  currentPage === index ? 'bg-[#82622c]' : 'bg-[#82622c]/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CentresSection; 