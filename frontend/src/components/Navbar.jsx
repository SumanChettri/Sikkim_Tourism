import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { FaSearch, FaBars, FaTimes, FaBell, FaUser, FaCog, FaSignOutAlt, FaChevronDown, FaMountain } from "react-icons/fa";

const Navbar = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [notifications, setNotifications] = useState(5); // Mock notification count
  const mobileMenuRef = useRef(null);
  const userMenuRef = useRef(null);
  const searchRef = useRef(null);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Destinations", path: "/destinations" },
    { name: "Itinerary Planner", path: "/itinerary-planner" },
    { name: "Taxi Booking", path: "/taxi-booking" },
    { name: "Gallery", path: "/gallery" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const handleLogout = async () => {
    console.log('Logout button clicked');
    console.log('Current user:', user);
    console.log('Current isAuthenticated:', isAuthenticated);
    
    try {
      await logout(); // Wait for logout to complete
      setIsUserMenuOpen(false);
      navigate("/");
      console.log('After logout - user should be null');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const handleClickOutside = (event) => {
    if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
      setIsMobileMenuOpen(false);
    }
    if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
      setIsUserMenuOpen(false);
    }
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setIsSearchOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Debug authentication state changes
  useEffect(() => {
    console.log('Navbar: Authentication state changed');
    console.log('Navbar: isAuthenticated:', isAuthenticated);
    console.log('Navbar: user:', user);
    console.log('Navbar: localStorage token:', localStorage.getItem('authToken'));
  }, [isAuthenticated, user]);

  return (
    <>
      <nav className="bg-white shadow-lg fixed top-0 left-0 right-0 z-50">
        <div className="container-custom">
          <div className="flex justify-between items-center py-3 md:py-4 mr-16 lg:mr-20 xl:mr-24">
            {/* Professional AIventurer Logo - Better colors and adjusted margins */}
            <Link to="/" className="flex items-center space-x-3 group ml-4 md:ml-2 lg:-ml-16 xl:-ml-20 mr-8 lg:mr-20 xl:mr-24">
              {/* Creative Logo Icon */}
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:rotate-3">
                  <div className="w-8 h-8 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                    <span className="text-white font-black text-lg">AI</span>
                  </div>
                </div>
                {/* Floating elements */}
                <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-amber-400 rounded-full animate-bounce shadow-md"></div>
                <div className="absolute -bottom-1.5 -left-1.5 w-2.5 h-2.5 bg-rose-400 rounded-full animate-pulse shadow-md"></div>
              </div>
              
              {/* Creative Text Logo */}
              <div className="flex flex-col">
                <div className="flex items-center space-x-1.5">
                  <span className="text-2xl md:text-3xl font-black bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent group-hover:from-emerald-700 group-hover:via-teal-700 group-hover:to-cyan-700 transition-all duration-500">
                    AI
                  </span>
                  <span className="text-2xl md:text-3xl font-black text-gray-800 group-hover:text-gray-900 transition-colors duration-500">
                    venturer
                  </span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full animate-pulse shadow-sm"></div>
                  <span className="text-sm font-bold text-teal-700 group-hover:text-teal-800 transition-colors duration-500">
                    SIKKIM
                  </span>
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-orange-500 to-rose-500 rounded-full animate-pulse delay-1000 shadow-sm"></div>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation Links - With active state colors */}
            <div className="hidden lg:flex items-center space-x-8 -ml-6">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`font-medium whitespace-nowrap transition-all duration-200 relative group ${
                      isActive 
                        ? 'text-blue-600 font-semibold' 
                        : 'text-gray-700 hover:text-blue-600'
                    }`}
                  >
                    {link.name}
                    <span className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-200 ${
                      isActive 
                        ? 'w-full bg-blue-600' 
                        : 'w-0 bg-blue-600 group-hover:w-full'
                    }`}></span>
                  </Link>
                );
              })}
            </div>

            {/* Right Side Actions - Professional styling with advanced signup button */}
            <div className="hidden lg:flex items-center space-x-6 ml-4">
              {/* Enhanced Search Bar */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search destinations..."
                  className="w-64 px-4 py-2.5 pl-10 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>

              {/* Debug: Show current authentication state */}
              <div className="text-xs text-red-500 bg-red-100 px-2 py-1 rounded">
                Auth: {isAuthenticated ? 'YES' : 'NO'} | User: {user ? 'EXISTS' : 'NULL'}
              </div>

              {/* Enhanced Notification Bell */}
              <div className="relative group cursor-pointer">
                <div className="relative">
                  <FaBell className="w-6 h-6 text-gray-600 hover:text-blue-600 transition-colors duration-200" />
                  {notifications > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold animate-pulse">
                      {notifications > 9 ? '9+' : notifications}
                    </span>
                  )}
                </div>
                {/* Notification Tooltip */}
                <div className="absolute right-0 top-full mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50">
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-gray-800">Notifications</h3>
                      <button className="text-sm text-blue-600 hover:text-blue-700">Mark all read</button>
                    </div>
                    <div className="space-y-2 max-h-64 overflow-y-auto">
                      {Array.from({ length: Math.min(notifications, 5) }, (_, i) => (
                        <div key={i} className="flex items-start space-x-3 p-2 rounded-lg hover:bg-gray-50">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <div className="flex-1">
                            <p className="text-sm text-gray-800">New destination added to your favorites</p>
                            <p className="text-xs text-gray-500 mt-1">2 minutes ago</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-3 pt-3 border-t border-gray-100">
                      <Link to="/notifications" className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                        View all notifications
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Professional Login/Signup Buttons - Smaller and more professional */}
              {!isAuthenticated ? (
                <div className="flex items-center space-x-4">
                  <Link
                    to="/login"
                    className="px-6 py-2.5 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300 border border-gray-300 rounded-full hover:border-blue-400 hover:bg-blue-50"
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="px-6 py-2.5 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white text-sm font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:from-emerald-700 hover:via-teal-700 hover:to-cyan-700 transform hover:scale-105 hover:-translate-y-0.5"
                  >
                    Sign Up
                  </Link>
                </div>
              ) : (
                <div className="relative" ref={userMenuRef}>
                  <button
                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                    className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
                  >
                    {/* Enhanced User Icon */}
                    <div className="relative">
                      {user?.profile_picture ? (
                        <img
                          src={`http://localhost:5000${user.profile_picture}`}
                          alt="Profile"
                          className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-lg group-hover:border-blue-200 transition-all duration-200"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                      ) : null}
                      <div 
                        className={`w-10 h-10 rounded-full bg-gradient-to-br from-slate-800 via-blue-800 to-indigo-800 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-200 ${user?.profile_picture ? 'hidden' : 'flex'}`}
                      >
                        <span className="text-white font-bold text-lg">
                          {user?.first_name ? user.first_name.charAt(0).toUpperCase() : 'U'}
                        </span>
                      </div>
                    </div>
                    
                    <div className="text-left">
                      <p className="text-sm font-medium text-gray-800 whitespace-nowrap">
                        {user?.first_name} {user?.last_name}
                      </p>
                      <p className="text-xs text-gray-500">Welcome back!</p>
            </div>

                    <FaChevronDown className={`w-3 h-3 text-gray-400 transition-transform duration-200 ${isUserMenuOpen ? 'rotate-180' : ''}`} />
              </button>

                  {/* Enhanced User Dropdown Menu */}
                  {isUserMenuOpen && (
                    <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50">
                      <div className="px-4 py-3 border-b border-gray-100">
                        <p className="text-sm font-medium text-gray-800">
                          {user?.first_name} {user?.last_name}
                        </p>
                        <p className="text-xs text-gray-500">{user?.email}</p>
                      </div>
                      
                      <div className="py-2">
                        <Link
                          to="/profile"
                          className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                        >
                          <FaUser className="w-4 h-4" />
                          <span>My Profile</span>
                        </Link>
                        <Link
                          to="/settings"
                          className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                        >
                          <FaCog className="w-4 h-4" />
                          <span>Settings</span>
                        </Link>
                      </div>
                      
                      <div className="border-t border-gray-100 pt-2">
                        <button
                          onClick={handleLogout}
                          className="flex items-center space-x-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50 w-full transition-colors duration-200"
                        >
                          <FaSignOutAlt className="w-4 h-4" />
                          <span>Sign Out</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Mobile Menu Button and User Icon - Fixed functionality */}
            <div className="lg:hidden flex items-center space-x-4">
              {/* Enhanced Notification Bell - Mobile with working functionality */}
              <div className="relative group cursor-pointer">
                <FaBell className="w-5 h-5 text-gray-600" />
                {notifications > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center font-semibold">
                    {notifications > 9 ? '9+' : notifications}
                  </span>
                )}
                {/* Mobile Notification Tooltip */}
                <div className="absolute right-0 top-full mt-2 w-72 bg-white rounded-lg shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50">
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-gray-800">Notifications</h3>
                      <button className="text-sm text-blue-600 hover:text-blue-700">Mark all read</button>
                    </div>
                    <div className="space-y-2 max-h-48 overflow-y-auto">
                      {Array.from({ length: Math.min(notifications, 3) }, (_, i) => (
                        <div key={i} className="flex items-start space-x-3 p-2 rounded-lg hover:bg-gray-50">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <div className="flex-1">
                            <p className="text-sm text-gray-800">New destination added to your favorites</p>
                            <p className="text-xs text-gray-500 mt-1">2 minutes ago</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-3 pt-3 border-t border-gray-100">
                      <Link to="/notifications" className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                        View all notifications
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced User Icon - Mobile with working functionality */}
              {isAuthenticated && (
                <div className="relative" ref={userMenuRef}>
                <button 
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                    className="flex items-center space-x-2 p-1 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                  >
                    {user?.profile_picture ? (
                      <img
                        src={`http://localhost:5000${user.profile_picture}`}
                        alt="Profile"
                        className="w-8 h-8 rounded-full object-cover border-2 border-white shadow-md"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                    ) : null}
                    <div 
                      className={`w-8 h-8 rounded-full bg-gradient-to-br from-slate-800 via-blue-800 to-indigo-800 flex items-center justify-center shadow-md ${user?.profile_picture ? 'hidden' : 'flex'}`}
                    >
                      <span className="text-white font-bold text-sm">
                        {user?.first_name ? user.first_name.charAt(0).toUpperCase() : 'U'}
                      </span>
                  </div>
                </button>

                  {/* Mobile User Dropdown Menu */}
                {isUserMenuOpen && (
                    <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50">
                      <div className="px-4 py-3 border-b border-gray-100">
                        <p className="text-sm font-medium text-gray-800">
                          {user?.first_name} {user?.last_name}
                        </p>
                        <p className="text-xs text-gray-500">{user?.email}</p>
                    </div>
                    
                      <div className="py-2">
                        <Link
                          to="/profile"
                          onClick={() => setIsUserMenuOpen(false)}
                          className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                        >
                          <FaUser className="w-4 h-4" />
                          <span>My Profile</span>
                        </Link>
                        <Link
                          to="/settings"
                          onClick={() => setIsUserMenuOpen(false)}
                          className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                        >
                          <FaCog className="w-4 h-4" />
                          <span>Settings</span>
                        </Link>
                    </div>
                    
                      <div className="border-t border-gray-100 pt-2">
                        <button
                          onClick={handleLogout}
                          className="flex items-center space-x-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50 w-full transition-colors duration-200"
                        >
                          <FaSignOutAlt className="w-4 h-4" />
                          <span>Sign Out</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
              )}

              {/* Mobile Menu Button */}
            <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
                {isMobileMenuOpen ? (
                  <FaTimes className="w-6 h-6 text-gray-600" />
              ) : (
                  <FaBars className="w-6 h-6 text-gray-600" />
              )}
            </button>
            </div>
          </div>

          {/* Enhanced Mobile Search Bar */}
          {isSearchOpen && (
            <div className="lg:hidden pb-4" ref={searchRef}>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search destinations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 pl-10 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
          )}

          {/* Enhanced Mobile Navigation Menu - With active state colors */}
          {isMobileMenuOpen && (
            <div className="lg:hidden pb-6" ref={mobileMenuRef}>
              <div className="space-y-2">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path;
                  return (
                  <Link
                    key={link.name}
                    to={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block px-4 py-3 rounded-lg transition-all duration-200 font-medium ${
                        isActive 
                          ? 'text-blue-600 bg-blue-50 border-l-4 border-blue-500' 
                          : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                      }`}
                  >
                    {link.name}
                  </Link>
                  );
                })}
              </div>

              {/* Professional Mobile Login/Signup */}
              {!isAuthenticated && (
                <div className="mt-6 px-4 space-y-3">
                  <Link
                    to="/login"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full px-4 py-3 text-center text-gray-700 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-medium border border-gray-200"
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full px-4 py-3 text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 font-medium shadow-lg"
                  >
                    Sign Up
                  </Link>
              </div>
              )}
            </div>
          )}
        </div>
      </nav>

      {/* Spacer for fixed navbar */}
      <div className="h-16 md:h-20"></div>
    </>
  );
};

export default Navbar;
