const HeroSection = () => {
    return (
      <section className="relative w-full h-screen bg-black flex items-center justify-center px-8">
        {/* Image */}
        <div className="absolute left-0 bottom-0 w-1/2 h-full flex items-end">
          <img
            src="/path-to-hero-image.jpg"
            alt="Bapa"
            className="w-full object-cover"
          />
        </div>
  
        {/* Text Content */}
        <div className="ml-auto w-1/2 text-white text-right">
          <h1 className="text-5xl font-light leading-tight">
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
  