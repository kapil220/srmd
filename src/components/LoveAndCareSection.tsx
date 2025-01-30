import { useEffect, useState } from 'react';
import Image from 'next/image'; // Import the Image component

// Define the type for contentData keys
type ContentKeys = 'hospital' | 'jivmaitridham' | 'vidyapeeth' | 'gurukul';

const LoveAndCareSection = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedLink, setSelectedLink] = useState<ContentKeys>('hospital'); // Default selected link

  // Define image paths
  const logoPath = "/path/to/logo.png"; // Replace with your logo path
  const hospitalImagePath = "/path/to/hospital-image.jpg"; // Replace with hospital image path
  const iconPaths = [
    "/path/to/icon1.png", // Health Care
    "/path/to/icon2.png", // Educational Care
    "/path/to/icon3.png", // Child Care
    "/path/to/icon4.png", // Woman Care
    "/path/to/icon5.png", // Tribal Care
    "/path/to/icon6.png", // Community Care
    "/path/to/icon7.png", // Humanitarian Care
    "/path/to/icon8.png", // Animal Care
    "/path/to/icon9.png", // Environmental Care
    "/path/to/icon10.png", // Emergency Relief Care
  ];

  const contentData = {
    hospital: {
      image: hospitalImagePath,
      title: "Shrimad Rajchandra Hospital & Research Center",
      description: "A multi-speciality, charitable hospital offering high-quality health care rarely seen in rural areas, at no cost or highly subsidized rates.",
    },
    jivmaitridham: {
      image: "/path/to/jivmaitridham-image.jpg", // Replace with actual image
      title: "Shrimad Rajchandra Jivmaitridham",
      description: "Description for Jivmaitridham.",
    },
    vidyapeeth: {
      image: "/path/to/vidyapeeth-image.jpg", // Replace with actual image
      title: "Shrimad Rajchandra Vidyapeeth",
      description: "Description for Vidyapeeth.",
    },
    gurukul: {
      image: "/path/to/gurukul-image.jpg", // Replace with actual image
      title: "Shrimad Rajchandra Gurukul",
      description: "Description for Gurukul.",
    },
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentStep < 2) {
        setCurrentStep((prev) => prev + 1); // Move to the next step
      }
    }, 4000); // Change after 4 seconds

    return () => clearTimeout(timer); // Cleanup on unmount
  }, [currentStep]);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-[#F0EDE5]">
      {currentStep === 0 && (
        <div className="text-center transition-opacity duration-1000">
          <h1 className="text-6xl font-bold text-[#82622c]">Serve Others Selflessly</h1>
          <div className="mt-8">
            <img src={logoPath} alt="Logo" className="w-32" />
          </div>
        </div>
      )}

      {currentStep === 1 && (
        <div className="flex flex-col items-center transition-opacity duration-1000">
          <div className="text-center mb-8">
            <img src={logoPath} alt="Logo" className="w-32" />
          </div>
          <div className="flex flex-wrap justify-center">
            {iconPaths.map((iconPath, index) => (
              <div key={index} className="m-4 text-center">
                <img src={iconPath} alt={`Icon ${index + 1}`} className="w-16 rounded-full" />
                <p>{`Icon ${index + 1}`}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {currentStep === 2 && (
        <div className="flex justify-between p-8 transition-opacity duration-1000">
          {/* Left Section */}
          <div className="w-1/2 text-left">
            <img src={logoPath} alt="Logo" className="w-32 mb-4" />
            <h2 className="text-4xl font-bold text-[#82622c]">Shrimad Rajchandra Love and Care</h2>
            <p className="mt-4">
              Shrimad Rajchandra Love and Care is a benevolent initiative to offer service and bring joy to the underserved sections of society.
            </p>
            <div className="flex flex-wrap justify-start mt-6">
              {iconPaths.map((iconPath, index) => (
                <div key={index} className="m-2 text-center">
                  <img src={iconPath} alt={`Icon ${index + 1}`} className="w-16 rounded-full" />
                  <p>{`Icon ${index + 1}`}</p>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <button className="bg-[#82622c] text-white px-4 py-2 rounded-lg">Get Involved</button>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-1/2 text-center">
            <Image 
              src={contentData[selectedLink].image} 
              alt="Content" 
              className="w-full" 
              layout="responsive" // Optional: Adjust layout as needed
              width={500} // Set appropriate width
              height={300} // Set appropriate height
            />
            <h3 className="text-xl font-bold mt-4">{contentData[selectedLink].title}</h3>
            <p>{contentData[selectedLink].description}</p>
            <div className="mt-4">
              <h4 className="text-lg font-bold">Related Links:</h4>
              <ul className="list-disc list-inside">
                <li onClick={() => setSelectedLink('hospital')} className="cursor-pointer">Shrimad Rajchandra Hospital</li>
                <li onClick={() => setSelectedLink('jivmaitridham')} className="cursor-pointer">Shrimad Rajchandra Jivmaitridham</li>
                <li onClick={() => setSelectedLink('vidyapeeth')} className="cursor-pointer">Shrimad Rajchandra Vidyapeeth</li>
                <li onClick={() => setSelectedLink('gurukul')} className="cursor-pointer">Shrimad Rajchandra Gurukul</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoveAndCareSection; 