import { useState, useEffect } from "react";
import Image from "next/image";

type ContentKeys = "hospital" | "jivmaitridham" | "vidyapeeth" | "gurukul";

const LoveAndCareSection = () => {
  const [selectedLink, setSelectedLink] = useState<ContentKeys>("hospital");
  const [phase, setPhase] = useState(1);
  const [showIcons, setShowIcons] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setPhase(2);
      setShowIcons(true);
    }, 2000);

    const timer2 = setTimeout(() => {
      setPhase(3);
    }, 4000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const contentData = {
    hospital: {
      image: "/images/hospital.webp",
      title: "Shrimad Rajchandra Hospital & Research Center",
      description:
        "A multi-speciality, charitable hospital offering high-quality health care rarely seen in rural areas, at no cost or highly subsidised rates.",
      buttonText: "Learn More",
      bgColor: "bg-amber-800",
    },
    jivmaitridham: {
      image: "/images/animals.webp",
      title: "Shrimad Rajchandra Jivmaitridham",
      description: "Providing care and shelter to animals with compassion.",
      buttonText: "Explore",
      bgColor: "bg-orange-950",
    },
    vidyapeeth: {
      image: "/images/vidhya.webp",
      title: "Shrimad Rajchandra Vidyapeeth",
      description:
        "A modern science college improving accessibility of higher education for aspiring tribal youth; the first science college across 238 villages.",
      buttonText: "Learn More",
      bgColor: "bg-red-900",
    },
    gurukul: {
      image: "/images/gurukul.webp",
      title: "Shrimad Rajchandra Gurukul",
      description: "A modern Gurukul offering quality education and values.",
      buttonText: "Discover",
      bgColor: "bg-red-950",
    },
  };

  const Phase1And2 = () => {
    return (
      <div className="min-h-screen bg-[#F0EDE5] relative overflow-hidden">
        {/* Main logo container - Always centered */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          <div
            className={`flex flex-row items-center bg-white rounded-full p-4 transition-all duration-500 ${
              phase === 2 ? "scale-90" : "scale-100"
            }`}
            style={{
              width: "400px",
            }}
          >
            <Image
              src="/images/logo1.webp"
              alt="Logo"
              width={120}
              height={120}
              priority
              className="p-4"
            />
            <h2 className="text-2xl font-bold text-[#B25E1B] mb-4 p-4">
              Shrimad Rajchandra <br />
              Love and Care
            </h2>
          </div>
        </div>

        {/* Circular Icons */}
        {phase === 2 && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  z-10">
            {[...Array(10)].map((_, index) => {
              const angle = (index * 360) / 10;
              const radius = 350;
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;

              return (
                <div
                  key={index}
                  className={`absolute transition-all duration-1000 ${
                    showIcons ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    transform: showIcons
                      ? `translate(${x}px, ${y}px)`
                      : "translate(0, 0)",
                  }}
                >
                  <Image
                    src={`/images/icon${index + 1}.png`}
                    alt=""
                    width={48}
                    height={48}
                    className="rounded-lg"
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  };

  if (phase === 1 || phase === 2) {
    return <Phase1And2 />;
  }

  return (
    <div className="relative flex flex-col md:flex-row min-h-screen bg-[#F0EDE5]">
      {/* Left Fixed Section */}
      <div className="w-full md:w-1/2 p-6 mt-36 self-start">
        <div className="flex flex-row items-center bg-white rounded-full w-[60%] mb-4 p-4">
          <Image
            src="/images/logo1.webp"
            alt="Logo"
            width={120}
            height={120}
            priority
            className="p-4"
          />
          <h2 className="text-2xl font-bold text-[#B25E1B] mb-4 p-4">
            Shrimad Rajchandra <br />
            Love and Care
          </h2>
        </div>

        <h2 className="text-3xl font-bold text-[#B25E1B] mb-4">
          Shrimad Rajchandra Love and Care
        </h2>
        <p className="text-lg mb-8">
          A benevolent initiative to offer service and bring joy to the underserved
          sections of society.
        </p>
        <div className="grid grid-cols-5 gap-4 mb-12">
          {[...Array(10)].map((_, index) => (
            <Image
              key={index}
              src={`/images/icon${index + 1}.png`}
              alt=""
              width={48}
              height={48}
              className="rounded-lg"
            />
          ))}
        </div>
        <h2 className="text-6xl font-semibold text-[#B25E1B] mb-4">
          Get Involved
        </h2>
        <p className="text-lg mb-8">
          Channel your compassion. Join the movement of selfless service.
        </p>

        <div className="flex gap-4">
          <button className="bg-[#B25E1B] text-white text-bold text-xl px-6 py-2 hover:bg-black hover:rounded-lg transition-transform hover:scale-105">
            Volunteer
          </button>
          <button className="bg-[#B25E1B] text-white text-bold text-xl px-6 py-2 hover:bg-black hover:rounded-lg transition-transform hover:scale-105">
            Donate
          </button>
        </div>
      </div>

      {/* Right Dynamic Section */}
      <div className="w-full md:w-1/2 mt-36">
        {/* Image Section */}
        <div className="">
          <Image
            src={contentData[selectedLink].image}
            alt={contentData[selectedLink].title}
            width={600}
            height={300}
            className="w-full h-[400px] transition-opacity duration-300"
          />
        </div>

        {/* Links and Expanding Sections */}
        <div className="border-t">
          {Object.keys(contentData).map((key) => (
            <div
              key={key}
              onMouseEnter={() => setSelectedLink(key as ContentKeys)}
              className={`py-8 px-6 mb-2 cursor-pointer transition-all duration-300 overflow-hidden ${
                selectedLink === key
                  ? `${contentData[key as ContentKeys].bgColor} text-white`
                  : "bg-[#F0EDE5] text-yellow-700 hover:bg-[#e3c5a0]"
              }`}
              style={{ height: selectedLink === key ? "auto" : "50px" }}
            >
              <h3 className="text-lg font-semibold">
                {contentData[key as ContentKeys].title}
              </h3>
              {selectedLink === key && (
                <>
                  <p className="mt-2 text-sm">
                    {contentData[key as ContentKeys].description}
                  </p>
                  <button className="mt-2 bg-white text-[#B25E1B] px-4 py-2 hover:rounded-lg border border-[#B25E1B] transition">
                    {contentData[key as ContentKeys].buttonText}
                  </button>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoveAndCareSection;