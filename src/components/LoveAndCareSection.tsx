import { useState } from "react";
import Image from "next/image";

// Define the type for contentData keys
type ContentKeys = "hospital" | "jivmaitridham" | "vidyapeeth" | "gurukul";

const LoveAndCareSection = () => {
  const [selectedLink, setSelectedLink] = useState<ContentKeys>("hospital");

  const contentData = {
    hospital: {
      image: "/images/hospital.webp",
      title: "Shrimad Rajchandra Hospital & Research Center",
      description:
        "A multi-speciality, charitable hospital offering high-quality health care rarely seen in rural areas, at no cost or highly subsidised rates.",
      buttonText: "Learn More",
      bgColor: "bg-[#e3c5a0]",
    },
    jivmaitridham: {
      image: "/images/animals.webp",
      title: "Shrimad Rajchandra Jivmaitridham",
      description: "Providing care and shelter to animals with compassion.",
      buttonText: "Explore",
      bgColor: "bg-[#d4af37]",
    },
    vidyapeeth: {
      image: "/images/vidhya.webp",
      title: "Shrimad Rajchandra Vidyapeeth",
      description:
        "A modern science college improving accessibility of higher education for aspiring tribal youth; the first science college across 238 villages.",
      buttonText: "Learn More",
      bgColor: "bg-[#b98360]",
    },
    gurukul: {
      image: "/images/gurukul.webp",
      title: "Shrimad Rajchandra Gurukul",
      description: "A modern Gurukul offering quality education and values.",
      buttonText: "Discover",
      bgColor: "bg-[#8b5e3b]",
    },
  };

  return (
    <div className="relative flex flex-col md:flex-row min-h-screen bg-[#F0EDE5] ">
      {/* Left Fixed Section */}
      <div className="w-full md:w-1/2 p-6  mt-36 self-start">
        <Image src="/images/logo.png" alt="Logo" width={160} height={160} priority className="mb-6" />
        <h2 className="text-3xl font-bold text-[#B25E1B] mb-4">Shrimad Rajchandra Love and Care</h2>
        <p className="text-lg mb-8">
          A benevolent initiative to offer service and bring joy to the underserved sections of society.
        </p>
        <div className="grid grid-cols-5 gap-4 mb-12">
          {[...Array(10)].map((_, index) => (
            <Image key={index} src={`/images/icon${index + 1}.png`} alt="" width={48} height={48} className="rounded-lg" />
          ))}
        </div>
        <div className="flex gap-4">
          <button className="bg-[#B25E1B] text-white px-6 py-2 rounded-md transition-transform hover:scale-105">Volunteer</button>
          <button className="bg-[#B25E1B] text-white px-6 py-2 rounded-md transition-transform hover:scale-105">Donate</button>
        </div>
      </div>

      {/* Right Dynamic Section */}
      <div className="w-full md:w-1/2 mt-36 ">
        {/* Image Section */}
        <div className=" ">
          <Image
            src={contentData[selectedLink].image}
            alt={contentData[selectedLink].title}
            width={600}
            height={300}
            className=" w-full h-[400px] transition-opacity duration-300"
          />
        </div>

        {/* Links and Expanding Sections */}
        <div className=" border-t ">
          {Object.keys(contentData).map((key) => (
            <div
              key={key}
              onMouseEnter={() => setSelectedLink(key as ContentKeys)}
              className={`py-4 px-6 mb-2 cursor-pointer transition-all duration-300  overflow-hidden ${
                selectedLink === key ? `${contentData[key as ContentKeys].bgColor} text-white` : "bg-[#F0EDE5] text-gray-700 hover:bg-[#e3c5a0]"
              }`}
              style={{ height: selectedLink === key ? "auto" : "50px" }}
            >
              <h3 className="text-lg font-semibold">{contentData[key as ContentKeys].title}</h3>
              {selectedLink === key && (
                <>
                  <p className="mt-2 text-sm">{contentData[key as ContentKeys].description}</p>
                  <button className="mt-2 bg-white text-[#B25E1B] px-4 py-2 rounded-md border border-[#B25E1B] hover:bg-[#B25E1B] hover:text-white transition">
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