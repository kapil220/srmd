import { FaYoutube, FaFacebook,  FaInstagram, FaPinterest, FaLinkedin, FaVimeo, FaWhatsapp, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 pt-32 px-6 h-screen">
      <div className="max-w-8xl mx-auto mt-8">
        {/* Footer Top Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-lg">
          
          {/* About */}
          <div>
            <h3 className="text-orange-500 text-3xl font-bold mb-4">About</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-400 text-xl font-bold ">Shrimad Rajchandraji</a></li>
              <li><a href="#" className="hover:text-gray-400 text-xl font-bold">Shrimadji and Gandhiji</a></li>
              <li><a href="#" className="hover:text-gray-400 text-xl font-bold">Pujya Gurudevshri</a></li>
              <li><a href="#" className="hover:text-gray-400 text-xl font-bold">Pujya Gurudevshri’s Schedule</a></li>
              <li><a href="#" className="hover:text-gray-400 text-xl font-bold">Ashram (Dharampur)</a></li>
              <li><a href="#" className="hover:text-gray-400 text-xl font-bold">Ashram (USA)</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-orange-500 text-3xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-400 text-xl font-bold">Satsangs</a></li>
              <li><a href="#" className="hover:text-gray-400 text-xl font-bold">Meditation Retreats</a></li>
              <li><a href="#" className="hover:text-gray-400 text-xl font-bold  ">Satsangs on TV</a></li>
              <li><a href="#" className="hover:text-gray-400 text-xl font-bold  ">School Connect Programme</a></li>
              <li><a href="#" className="hover:text-gray-400 text-xl font-bold  ">News & Events</a></li>
              <li><a href="#" className="hover:text-gray-400 text-xl font-bold  ">Press</a></li>
              <li><a href="#" className="hover:text-gray-400 text-xl font-bold">Employment Opportunities</a></li>
              <li><a href="#" className="hover:text-gray-400 text-xl font-bold">Webcast</a></li>
              <li><a href="#" className="hover:text-gray-400 text-xl font-bold">Seeker’s Portal</a></li>
              <li><a href="#" className="hover:text-gray-400 text-xl font-bold">Register</a></li>
              <li><a href="#" className="hover:text-gray-400 text-xl font-bold">Blog</a></li>
              <li><a href="#" className="hover:text-gray-400 text-xl font-bold">Locate a Centre</a></li>
              <li><a href="#" className="hover:text-gray-400 text-xl font-bold">Mobile Apps</a></li>
            </ul>
          </div>

          {/* Other Websites */}
          <div>
            <h3 className="text-orange-500 text-3xl font-bold mb-4">Other Websites</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-400 text-xl font-bold">Shrimad Rajchandra Love and Care</a></li>
              <li><a href="#" className="hover:text-gray-400 text-xl font-bold">Shrimad Rajchandra Divinetouch</a></li>
              <li><a href="#" className="hover:text-gray-400 text-xl font-bold">SRMD Yoga</a></li>
              <li><a href="#" className="hover:text-gray-400 text-xl font-bold">SRMD Courses</a></li>
              <li><a href="#" className="hover:text-gray-400 text-xl font-bold  ">SRMD Youth</a></li>
              <li><a href="#" className="hover:text-gray-400 text-xl font-bold">Atmasiddhi Shastra</a></li>
            </ul>
          </div>

          
        </div>

       
        <div className="mt-12 border-t border-white pt-6">
          <h3 className="text-orange-500 text-2xl font-bold">Mobile App</h3>
          <a href="#" className="text-white text-lg hover:text-gray-400 inline-flex items-center space-x-2">
            <span>SRMD Ashram App (Official Ashram App)</span>
            <span>🔗</span>
          </a>
        </div>

        {/* Social Media Links */}
        <div className="mt-8 flex justify-center space-x-6 text-2xl text-white">
          <a href="#" className="hover:text-gray-400"><FaYoutube /></a>
          <a href="#" className="hover:text-gray-400"><FaFacebook /></a>
       
          <a href="#" className="hover:text-gray-400"><FaInstagram /></a>
          <a href="#" className="hover:text-gray-400"><FaPinterest /></a>
          <a href="#" className="hover:text-gray-400"><FaLinkedin /></a>
          <a href="#" className="hover:text-gray-400"><FaVimeo /></a>
          <a href="#" className="hover:text-gray-400"><FaWhatsapp /></a>
          <a href="#" className="hover:text-gray-400"><FaTiktok /></a>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm mt-6">
          © Copyright 2024. Shrimad Rajchandra Mission Dharampur. All rights reserved. 
          <a href="#" className="hover:text-gray-300 ml-2">Terms of Service</a> | 
          <a href="#" className="hover:text-gray-300 ml-2">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
