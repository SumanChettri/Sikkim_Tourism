import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  FaBars, 
  FaXmark, 
  FaMagnifyingGlass, 
  FaBell, 
  FaUser, 
  FaChevronDown,
  FaHeart,
  FaBookmark,
  FaGear,
  FaRightFromBracket
} from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [notifications, setNotifications] = useState(5);
  const [isScrolled, setIsScrolled] = useState(false);
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

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle search
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log('Searching for:', searchQuery);
      setIsSearchOpen(false);
      setSearchQuery("");
    }
  };



  return (
    <>
      {/* Formal Professional Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-200' 
          : 'bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100'
      }`}>
        <div className="container-custom">
          <div className="flex justify-between items-center py-4">
            {/* Creative AIventurer Logo */}
            <Link to="/" className="flex items-center space-x-4 group">
              {/* Creative Logo Icon */}
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 rounded-3xl flex items-center justify-center shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <div className="w-10 h-10 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                    <span className="text-white font-black text-2xl">AI</span>
                  </div>
                </div>
                {/* Floating elements */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full animate-bounce"></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
              </div>
              
              {/* Creative Text Logo */}
              <div className="flex flex-col">
                <div className="flex items-center space-x-2">
                  <span className="text-3xl md:text-4xl font-black bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent group-hover:from-indigo-700 group-hover:via-purple-700 group-hover:to-pink-600 transition-all duration-500">
                    AI
                  </span>
                  <span className="text-3xl md:text-3xl font-black text-gray-800 group-hover:text-gray-900 transition-colors duration-500">
                    venturer
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-bold text-emerald-600 group-hover:text-emerald-700 transition-colors duration-500">
                    SIKKIM
                  </span>
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse delay-1000"></div>
                </div>
              </div>
            </Link>

            {/* Formal Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group">
                  <Link
                    to={link.path}
                    className={`relative font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300 py-2 ${
                      isActive(link.path) ? "text-blue-600" : ""
                    }`}
                  >
                    {link.name}
                    
                    {/* Elegant Hover Line Effect */}
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    
                    {/* Active State Line */}
                    {isActive(link.path) && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"></div>
                    )}
                  </Link>
                </div>
              ))}
            </div>

            {/* Formal Right Side Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Search Button */}
              <button 
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 text-gray-600 hover:text-blue-600 transition-colors duration-300"
              >
                <FaMagnifyingGlass className="w-5 h-5" />
              </button>



              {/* Notifications */}
              <button className="relative p-2 text-gray-600 hover:text-blue-600 transition-colors duration-300">
                <FaBell className="w-5 h-5" />
                {notifications > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                    {notifications > 9 ? '9+' : notifications}
                  </span>
                )}
              </button>

              {/* User Menu */}
              <div className="relative">
                <button 
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center space-x-2 p-2 text-gray-600 hover:text-blue-600 transition-colors duration-300"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-lg flex items-center justify-center">
                    <FaUser className="w-4 h-4 text-white" />
                  </div>
                  <FaChevronDown className={`w-3 h-3 transition-transform duration-300 ${isUserMenuOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Formal User Dropdown Menu */}
                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                    {/* User Header */}
                    <div className="px-4 py-3 border-b border-gray-200">
                      <p className="text-sm font-medium text-gray-900">Welcome back!</p>
                      <p className="text-xs text-gray-500">Manage your account</p>
                    </div>
                    
                    {/* Menu Items */}
                    <div className="py-1">
                      <a href="/profile" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200">
                        <FaUser className="w-4 h-4 mr-3 text-blue-500" />
                        Profile
                      </a>
                      <a href="/favorites" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200">
                        <FaHeart className="w-4 h-4 mr-3 text-red-500" />
                        Favorites
                      </a>
                      <a href="/bookmarks" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200">
                        <FaBookmark className="w-4 h-4 mr-3 text-emerald-500" />
                        Bookmarks
                      </a>
                      <a href="/settings" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200">
                        <FaGear className="w-4 h-4 mr-3 text-gray-500" />
                        Settings
                      </a>
                    </div>
                    
                    {/* Sign Out */}
                    <div className="border-t border-gray-200 py-1">
                      <button className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors duration-200">
                        <FaRightFromBracket className="w-4 h-4 mr-3" />
                        Sign Out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Formal Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors duration-300"
            >
              {isOpen ? (
                <FaXmark className="w-6 h-6" />
              ) : (
                <FaBars className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Formal Search Bar - Desktop */}
          {isSearchOpen && (
            <div className="hidden lg:block pb-4">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search destinations, experiences, or itineraries..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 pl-12 bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-gray-900 placeholder-gray-500"
                />
                <FaMagnifyingGlass className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-1.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300 text-sm font-medium"
                >
                  Search
                </button>
              </form>
            </div>
          )}

          {/* Formal Mobile Navigation */}
          {isOpen && (
            <div className="lg:hidden border-t border-gray-200 py-4 bg-white">
              {/* Mobile Search */}
              <div className="px-4 mb-4">
                <form onSubmit={handleSearch} className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-3 pl-12 bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-gray-900 placeholder-gray-500"
                  />
                  <FaMagnifyingGlass className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                </form>
              </div>

              {/* Formal Mobile Navigation Links */}
              <div className="flex flex-col space-y-1 px-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`font-medium px-4 py-3 rounded-lg transition-all duration-300 ${
                      isActive(link.path)
                        ? "text-blue-600 bg-blue-50 border-l-4 border-blue-500"
                        : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              {/* Formal Mobile Actions */}
              <div className="flex items-center justify-between px-4 pt-4 border-t border-gray-200">

                
                <button className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-300">
                  <FaBell className="w-4 h-4" />
                  <span className="text-sm">Notifications ({notifications})</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Spacer for fixed navbar */}
      <div className="h-20"></div>
    </>
  );
};

export default Navbar;
