import { Link } from 'react-router-dom'
import { FaEnvelope, FaPhone, FaLocationDot } from 'react-icons/fa6'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-xl font-bold text-white">Sikkim Explorer</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Discover the hidden treasures of Sikkim with our expert-guided tours.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-200">
                <FaFacebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-200">
                <FaTwitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-200">
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-primary transition-colors duration-200">Home</Link></li>
              <li><Link to="/destinations" className="text-gray-300 hover:text-primary transition-colors duration-200">Destinations</Link></li>
              <li><Link to="/itinerary-planner" className="text-gray-300 hover:text-primary transition-colors duration-200">Itinerary Planner</Link></li>
              <li><Link to="/taxi-booking" className="text-gray-300 hover:text-primary transition-colors duration-200">Taxi Booking</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-300 hover:text-primary transition-colors duration-200 cursor-pointer">Tour Packages</li>
              <li className="text-gray-300 hover:text-primary transition-colors duration-200 cursor-pointer">Custom Itineraries</li>
              <li className="text-gray-300 hover:text-primary transition-colors duration-200 cursor-pointer">Taxi Services</li>
              <li className="text-gray-300 hover:text-primary transition-colors duration-200 cursor-pointer">Local Guides</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FaLocationDot className="w-5 h-5 text-primary" />
                <span className="text-gray-300">MG Marg, Gangtok, Sikkim</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="w-5 h-5 text-primary" />
                <span className="text-gray-300">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="w-5 h-5 text-primary" />
                <span className="text-gray-300">info@sikkimexplorer.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-300 text-sm">
              © {currentYear} Sikkim Explorer. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-300 hover:text-primary transition-colors duration-200">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-300 hover:text-primary transition-colors duration-200">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 