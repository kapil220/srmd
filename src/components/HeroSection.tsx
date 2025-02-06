const HeroSection = () => {
  return (
    <section className="relative w-full h-screen bg-black flex items-center justify-center px-8">
      {/* Image */}
      <div className="absolute left-0 top-0 w-3/4 mx-12 h-1/2 flex items-center justify-center md:w-[30%] md:h-[50%] md:mx-32 md:my-48">
        <img
          src="/images/post3.webp"
          alt="Bapa"
          className="w-full object-cover"
        />
      </div>

      {/* Text Content */}
      <div className="absolute pt-64 w-full text-white text-center md:text-right md:ml-48 md:w-1/2">
        <h1 className="text-3xl md:text-5xl font-light leading-tight">
          May the Grace of <br />
          Enlightened Ones <br />
          uplift the world!
        </h1>
        <p className="mt-4 text-gray-400">(or some autograph by Bapa)</p>
      </div>
    </section>
  );
};

export default HeroSection;
