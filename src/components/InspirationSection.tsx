import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const InspirationSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Image
        src="/images/inspirational-bg.webp"
        alt="Shrimad Rajchandraji Statue"
        fill
        className="object-cover"
      />
      
      <motion.div 
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="absolute m-4 top-[15%] left-0 md:top-[20%] md:right-12 md:left-auto 
        max-w-xl bg-[#8B4513]/90 text-white p-12 rounded-3xl"
      >
        <h2 className="text-4xl font-semibold mb-4">
          The Inspiration – <br />
          Shrimad Rajchandraji
        </h2>
        <p className="text-lg mb-6">
          Shrimad Rajchandraji was a self-realised saint, a reformer of Jainism, and a remarkable poet-philosopher of the late 19th century. He gave the world a rich heritage that guides generations of seekers.
        </p>
        <Link 
          href="/inspiration" 
          className="inline-block bg-white text-[#8B4513] px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition"
        >
          Discover More
        </Link>
      </motion.div>
    </section>
  );
};

export default InspirationSection;
