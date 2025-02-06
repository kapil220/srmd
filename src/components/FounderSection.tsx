import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const FounderSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Image
        src="/images/founder-bg.webp"
        alt="Pujya Gurudevshri Rakeshji"
        fill
        className="object-cover"
        priority
      />

      <motion.div 
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="absolute  h-[40%] m-6 top-[15%] md:top-[25%] md:left-8 lg:left-16 bg-white/95 p-6 md:p-16 rounded-3xl max-w-sm lg:max-w-2xl md:max-w-md md:h-[40%]"
      >
        <h2 className="text-2xl md:text-3xl font-semibold mb-3 text-[#8B4513]">
          The Founder – <br className="hidden md:block"/>
          Pujya Gurudevshri Rakeshji
        </h2>
        <p className="text-sm md:text-base mb-4 text-[#594545]">
          Empowering millions with inner peace and joy, Pujya Gurudevshri is an enlightened master, a spiritual visionary, a modern-day mystic, and an ardent devotee of Shrimad Rajchandraji.
        </p>
        <Link 
          href="/founder" 
          className="inline-block bg-[#8B4513] text-white px-6 py-2 rounded-full font-medium hover:bg-opacity-90 transition"
        >
          Explore More
        </Link>
      </motion.div>
    </section>
  );
};

export default FounderSection;
