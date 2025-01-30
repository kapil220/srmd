import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const FounderSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Image
        src="/images/founder-bg.jpg"
        alt="Pujya Gurudevshri Rakeshji"
        fill
        className="object-cover"
      />
      
      <motion.div 
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="absolute left-20 top-1/2 -translate-y-1/2 max-w-xl bg-white/95 p-12 rounded-3xl"
      >
        <h2 className="text-4xl font-semibold mb-4 text-[#8B4513]">
          The Founder – <br />
          Pujya Gurudevshri Rakeshji
        </h2>
        <p className="text-lg mb-6 text-[#594545]">
          Empowering millions with inner peace and joy, Pujya Gurudevshri is an enlightened master, a spiritual visionary, a modern-day mystic, and an ardent devotee of Shrimad Rajchandraji.
        </p>
        <Link 
          href="/founder" 
          className="inline-block bg-[#8B4513] text-white px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition"
        >
          Explore More
        </Link>
      </motion.div>
    </section>
  );
};

export default FounderSection; 