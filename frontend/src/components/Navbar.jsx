import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaXmark, FaMagnifyingGlass } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Destinations", path: "/destinations" },
    { name: "Itinerary Planner", path: "/itinerary-planner" },
    { name: "Taxi Booking", path: "/taxi-booking" },
    { name: "Gallery", path: "/gallery" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-xl sticky top-0 z-50 border-b border-blue-100/50">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              GuideMe Sikkim
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-medium transition-all duration-200 ${
                  isActive(link.path)
                    ? "text-blue-600 border-b-2 border-blue-500 shadow-sm"
                    : "text-gray-600 hover:text-blue-600 hover:scale-105"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Search Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="btn-soft glow-blue">
              <FaMagnifyingGlass className="w-4 h-4 mr-2" />
              Search
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
          >
            {isOpen ? (
              <FaXmark className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4 bg-white/95 backdrop-blur-md">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`font-medium px-4 py-2 rounded-lg transition-all duration-200 ${
                    isActive(link.path)
                      ? "text-blue-600 bg-blue-50 border-l-4 border-blue-500"
                      : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <button className="btn-soft glow-blue mx-4">
                <FaMagnifyingGlass className="w-4 h-4 mr-2" />
                Search
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
