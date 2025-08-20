import { Link } from "react-router-dom";
import { FaEnvelope, FaPhone, FaLocationDot, FaMountain } from "react-icons/fa6";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-slate-800 via-slate-900 to-blue-900 text-white">
      <div className="container-custom py-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {/* Brand Section */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                <FaMountain className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold text-white">
                Ai Venturer
              </span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Discover the mystical beauty of the Himalayas, ancient monasteries, and pristine landscapes of Sikkim.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-8 h-8 bg-slate-700 hover:bg-blue-500 rounded-full flex items-center justify-center transition-all duration-200">
                <FaFacebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-slate-700 hover:bg-blue-400 rounded-full flex items-center justify-center transition-all duration-200">
                <FaTwitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-slate-700 hover:bg-pink-500 rounded-full flex items-center justify-center transition-all duration-200">
                <FaInstagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-slate-700 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-200">
                <FaLinkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/destinations" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm">
                  Destinations
                </Link>
              </li>
              <li>
                <Link to="/itinerary-planner" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm">
                  Itinerary Planner
                </Link>
              </li>
              <li>
                <Link to="/taxi-booking" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm">
                  Taxi Booking
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-300 text-sm">AI-Powered Itineraries</li>
              <li className="text-gray-300 text-sm">Custom Tour Packages</li>
              <li className="text-gray-300 text-sm">Local Taxi Services</li>
              <li className="text-gray-300 text-sm">Professional Guides</li>
              <li className="text-gray-300 text-sm">24/7 Support</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <FaLocationDot className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300 text-sm">Sist Chisopani, Namchi, Sikkim</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaPhone className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300 text-sm">+91 9641025910</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaEnvelope className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300 text-sm">info@sikkimtourism.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-gray-400 text-xs">
              © {currentYear} AI Venturer. All rights reserved.
            </p>
            <div className="flex space-x-4 text-xs">
              <Link to="/privacy" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                Terms of Service
              </Link>
              <span className="text-gray-500">|</span>
              <span className="text-gray-400">Made with ❤️ for Sikkim</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
