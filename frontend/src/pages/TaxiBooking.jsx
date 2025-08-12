import { useState, useEffect } from 'react';
import { 
  FaLocationDot, 
  FaCalendar, 
  FaUsers, 
  FaCar, 
  FaCreditCard, 
  FaCircleCheck,
  FaLocationPin,
  FaPhone,
  FaTriangleExclamation,
  FaStar,
  FaClock,
  FaRoute,
  FaSuitcase,
  FaBaby,
  FaWheelchair,
  FaSnowflake,
  FaUmbrellaBeach,
  FaMountain,
  FaCity,
  FaGlobe,
  FaWhatsapp,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram
} from 'react-icons/fa6';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Sample driver data
const sampleDrivers = [
  {
    id: 1,
    name: "Rajesh Gurung",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    rating: 4.8,
    languages: ["English", "Hindi", "Nepali"],
    carType: "SUV",
    carModel: "Toyota Innova",
    priceEstimate: "₹2,200",
    distance: "0.8 km",
    eta: "3 min",
    available: true,
    coordinates: [27.3389, 88.6065]
  },
  {
    id: 2,
    name: "Dorjee Bhutia",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    rating: 4.9,
    languages: ["English", "Tibetan", "Hindi"],
    carType: "Sedan",
    carModel: "Honda City",
    priceEstimate: "₹1,800",
    distance: "1.2 km",
    eta: "5 min",
    available: true,
    coordinates: [27.3395, 88.6070]
  },
  {
    id: 3,
    name: "Mohan Rai",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    rating: 4.7,
    languages: ["English", "Hindi", "Bengali"],
    carType: "Hatchback",
    carModel: "Maruti Swift",
    priceEstimate: "₹1,500",
    distance: "1.5 km",
    eta: "7 min",
    available: true,
    coordinates: [27.3400, 88.6060]
  },
  {
    id: 4,
    name: "Tenzin Wangchuk",
    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    rating: 4.6,
    languages: ["English", "Tibetan", "Nepali"],
    carType: "Luxury",
    carModel: "Mercedes E-Class",
    priceEstimate: "₹3,500",
    distance: "2.1 km",
    eta: "10 min",
    available: true,
    coordinates: [27.3410, 88.6080]
  }
];

// Sample popular destinations
const popularDestinations = [
  { name: "Gangtok", type: "city", icon: FaCity },
  { name: "Pelling", type: "mountain", icon: FaMountain },
  { name: "Lachung", type: "snow", icon: FaSnowflake },
  { name: "Namchi", type: "mountain", icon: FaMountain },
  { name: "Ravangla", type: "mountain", icon: FaMountain },
  { name: "Zuluk", type: "mountain", icon: FaMountain }
];

// Driver Card Component
const DriverCard = ({ driver, onBook }) => (
  <div className="card-gradient p-4 sm:p-6 hover:scale-105">
    <div className="flex flex-col sm:flex-row sm:items-start space-y-3 sm:space-y-0 sm:space-x-4">
      <img 
        src={driver.photo} 
        alt={driver.name} 
        className="w-16 h-16 rounded-full object-cover border-2 border-blue-300/50 mx-auto sm:mx-0"
      />
      <div className="flex-1 text-center sm:text-left">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 space-y-1 sm:space-y-0">
          <h3 className="font-semibold text-gray-900 text-sm sm:text-base">{driver.name}</h3>
          <div className="flex items-center justify-center sm:justify-start space-x-1">
            <FaStar className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500" />
            <span className="text-xs sm:text-sm font-medium">{driver.rating}</span>
          </div>
        </div>
        
        <div className="text-xs sm:text-sm text-gray-600 mb-3 space-y-1">
          <div className="flex items-center justify-center sm:justify-start space-x-2">
            <FaCar className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
            <span>{driver.carType} • {driver.carModel}</span>
          </div>
          <div className="flex items-center justify-center sm:justify-start space-x-2">
            <FaGlobe className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
            <span>{driver.languages.join(", ")}</span>
          </div>
          <div className="flex items-center justify-center sm:justify-start space-x-2">
            <FaLocationPin className="w-3 h-3 sm:w-4 sm:h-4 text-amber-600" />
            <span>{driver.distance} away • {driver.eta}</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
          <div className="text-base sm:text-lg font-bold text-blue-700">{driver.priceEstimate}</div>
          <button 
            onClick={() => onBook(driver)}
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold px-3 sm:px-4 py-2 rounded-lg sm:rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-xs sm:text-sm"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  </div>
);

// Fare Estimator Component
const FareEstimator = ({ distance, carType, tripType, onEstimate }) => {
  const [formData, setFormData] = useState({
    distance: distance || '',
    carType: carType || 'sedan',
    tripType: tripType || 'single'
  });

  const baseRates = {
    hatchback: 15,
    sedan: 18,
    suv: 22,
    luxury: 35
  };

  const calculateFare = () => {
    if (!formData.distance) return 0;
    const baseRate = baseRates[formData.carType];
    const multiplier = formData.tripType === 'day' ? 8 : 1;
    return Math.round(baseRate * formData.distance * multiplier);
  };

  const estimatedFare = calculateFare();

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Fare Estimator</h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Distance (km)</label>
          <input
            type="number"
            value={formData.distance}
            onChange={(e) => setFormData(prev => ({ ...prev, distance: e.target.value }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Enter distance"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Car Type</label>
          <select
            value={formData.carType}
            onChange={(e) => setFormData(prev => ({ ...prev, carType: e.target.value }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="hatchback">Hatchback - ₹15/km</option>
            <option value="sedan">Sedan - ₹18/km</option>
            <option value="suv">SUV - ₹22/km</option>
            <option value="luxury">Luxury - ₹35/km</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Trip Type</label>
          <select
            value={formData.tripType}
            onChange={(e) => setFormData(prev => ({ ...prev, tripType: e.target.value }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="single">Single Ride</option>
            <option value="day">Day Hire (8 hours)</option>
          </select>
        </div>
        
        <div className="bg-gradient-to-r from-primary to-secondary text-white p-4 rounded-lg text-center">
          <div className="text-sm opacity-90">Estimated Fare</div>
          <div className="text-2xl font-bold">₹{estimatedFare}</div>
          <div className="text-xs opacity-75">
            {formData.tripType === 'day' ? 'Full day service' : 'One-way trip'}
          </div>
        </div>
      </div>
    </div>
  );
};

// Map Section Component
const MapSection = ({ drivers, center = [27.3389, 88.6065] }) => (
  <div className="card-gradient overflow-hidden">
    <div className="p-3 sm:p-4 border-b border-blue-200/50 bg-gradient-to-r from-blue-500 to-green-600 text-white">
      <h3 className="text-base sm:text-lg font-semibold">Live Taxi Locations</h3>
      <p className="text-xs sm:text-sm opacity-90">Real-time driver positions around you</p>
    </div>
    <div className="h-64 w-full">
      <MapContainer 
        center={center} 
        zoom={15} 
        style={{ height: '100%', width: '100%' }}
        className="z-10"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {drivers.map((driver) => (
          <Marker key={driver.id} position={driver.coordinates}>
            <Popup>
              <div className="text-center">
                <img 
                  src={driver.photo} 
                  alt={driver.name} 
                  className="w-12 h-12 rounded-full mx-auto mb-2"
                />
                <div className="font-semibold">{driver.name}</div>
                <div className="text-sm text-gray-600">{driver.carType}</div>
                <div className="text-sm text-blue-700 font-medium">{driver.priceEstimate}</div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  </div>
);

// Emergency Assistance Component
const EmergencyAssistance = () => (
  <div className="bg-gradient-to-br from-red-500 via-red-600 to-red-700 text-white rounded-xl p-6 shadow-lg border border-red-400">
    <div className="flex items-center space-x-3 mb-4">
      <div className="w-10 h-10 bg-red-400 rounded-full flex items-center justify-center">
        <FaTriangleExclamation className="w-5 h-5" />
      </div>
      <h3 className="text-lg font-semibold">Emergency Assistance</h3>
    </div>
    
    <div className="space-y-3">
      <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-xl transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105 glow-accent">
        <FaPhone className="w-5 h-5" />
        <span>SOS - Emergency Call</span>
      </button>
      
      <div className="text-sm space-y-2 bg-red-600/30 rounded-lg p-3">
        <div className="flex items-center space-x-2">
          <FaPhone className="w-4 h-4" />
          <span>Police: 100</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaPhone className="w-4 h-4" />
          <span>Ambulance: 108</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaPhone className="w-4 h-4" />
          <span>Tourism Helpline: +91 98765 43210</span>
        </div>
      </div>
    </div>
  </div>
);

// Footer Component
const Footer = () => (
  <footer className="bg-gradient-to-br from-slate-800 via-slate-900 to-blue-900 text-white">
    <div className="container-custom py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <span className="text-xl font-bold">Explore Sikkim</span>
          </div>
          <p className="text-gray-300 mb-4">
            Your trusted partner for exploring the beautiful state of Sikkim with AI-powered itineraries and reliable local services.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <FaFacebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <FaTwitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <FaInstagram className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-300">
            <li><a href="/destinations" className="hover:text-white transition-colors">Destinations</a></li>
            <li><a href="/itinerary-planner" className="hover:text-white transition-colors">Itinerary Planner</a></li>
            <li><a href="/taxi-booking" className="hover:text-white transition-colors">Taxi Booking</a></li>
            <li><a href="/gallery" className="hover:text-white transition-colors">Gallery</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-gray-300">
            <li>AI Itinerary Planning</li>
            <li>Local Taxi Services</li>
            <li>Hidden Destination Tours</li>
            <li>24/7 Customer Support</li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold mb-4">Contact Info</h4>
          <div className="space-y-2 text-gray-300">
            <div className="flex items-center space-x-2">
              <FaPhone className="w-4 h-4" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaEnvelope className="w-4 h-4" />
              <span>info@exploresikkim.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaWhatsapp className="w-4 h-4" />
              <span>WhatsApp Support</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-t border-slate-700 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; 2024 Explore Sikkim. All rights reserved. | Made with ❤️ for Sikkim Tourism</p>
      </div>
    </div>
  </footer>
);

const TaxiBooking = () => {
  const [activeTab, setActiveTab] = useState('tourist');
  const [bookingData, setBookingData] = useState({
    pickup: '',
    dropoff: '',
    date: '',
    time: '',
    passengers: 1,
    luggage: 0,
    carType: '',
    tripType: 'single',
    specialRequests: '',
    name: '',
    email: '',
    phone: '',
    itineraryLink: ''
  });
  
  const [selectedDriver, setSelectedDriver] = useState(null);
  const [isBooking, setIsBooking] = useState(false);
  const [bookingComplete, setBookingComplete] = useState(false);

  const handleInputChange = (field, value) => {
    setBookingData(prev => ({ ...prev, [field]: value }));
  };

  const handleDriverBook = (driver) => {
    setSelectedDriver(driver);
    // In a real app, this would open a booking modal or redirect to payment
    alert(`Booking ${driver.name} for your trip!`);
  };

  const handleBooking = async (e) => {
    e.preventDefault();
    setIsBooking(true);
    
    // Simulate booking process
    setTimeout(() => {
      setIsBooking(false);
      setBookingComplete(true);
    }, 2000);
  };

  const resetBooking = () => {
    setBookingData({
      pickup: '',
      dropoff: '',
      date: '',
      time: '',
      passengers: 1,
      luggage: 0,
      carType: '',
      tripType: 'single',
      specialRequests: '',
      name: '',
      email: '',
      phone: '',
      itineraryLink: ''
    });
    setSelectedDriver(null);
    setBookingComplete(false);
  };

  if (bookingComplete) {
    return (
      <div className="min-h-screen bg-theme-primary flex items-center justify-center p-4">
        <div className="card-gradient p-6 sm:p-8 lg:p-12 text-center max-w-sm sm:max-w-md w-full">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-green-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
            <FaCircleCheck className="w-8 h-8 sm:w-12 sm:h-12 text-green-600" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Booking Confirmed!</h2>
          <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
            Your taxi has been booked successfully. We'll send you a confirmation email with all the details.
          </p>
          <button onClick={resetBooking} className="w-full py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-xl sm:rounded-2xl transition-all duration-300 bg-gradient-to-r from-blue-500 to-green-600 hover:from-blue-600 hover:to-green-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 border-0">
            Book Another Taxi
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-theme-primary">
      <div className="container-custom py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        {/* Dual Booking Tabs */}
        <div className="card-gradient p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8">
          <div className="text-center mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-3 sm:mb-4">
              Taxi Booking
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto px-2">
              Choose your booking type and get started with your Sikkim journey
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-1 bg-gradient-to-r from-blue-100/80 to-green-100/80 p-2 rounded-2xl mb-6 sm:mb-8 max-w-2xl mx-auto border border-blue-200/50">
            <button
              onClick={() => setActiveTab('tourist')}
              className={`flex-1 py-3 sm:py-4 px-4 sm:px-6 lg:px-8 rounded-xl font-semibold text-sm sm:text-base lg:text-lg transition-all duration-300 ${
                activeTab === 'tourist'
                  ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-xl transform scale-105'
                  : 'text-gray-700 hover:text-blue-600 hover:bg-white/80'
              }`}
            >
              Tourist Booking
            </button>
            <button
              onClick={() => setActiveTab('local')}
              className={`flex-1 py-3 sm:py-4 px-4 sm:px-6 lg:px-8 rounded-xl font-semibold text-sm sm:text-base lg:text-lg transition-all duration-300 ${
                activeTab === 'local'
                  ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-xl transform scale-105'
                  : 'text-gray-700 hover:text-green-600 hover:bg-white/80'
              }`}
            >
              Local Ride
            </button>
          </div>

          {activeTab === 'tourist' ? (
            /* Tourist Booking Form */
            <form onSubmit={handleBooking} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <FaLocationDot className="inline w-4 h-4 mr-2 text-blue-600" />
                    Pickup Location
                  </label>
                  <input
                    type="text"
                    required
                    value={bookingData.pickup}
                    onChange={(e) => handleInputChange('pickup', e.target.value)}
                    className="w-full px-4 py-3 border border-blue-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/60 focus:bg-white/80 transition-all duration-200"
                    placeholder="e.g., Gangtok, MG Marg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <FaLocationDot className="inline w-4 h-4 mr-2 text-green-600" />
                    Drop-off Location
                  </label>
                  <input
                    type="text"
                    required
                    value={bookingData.dropoff}
                    onChange={(e) => handleInputChange('dropoff', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="e.g., Pelling, West Sikkim"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <FaCalendar className="inline w-4 h-4 mr-2 text-purple-600" />
                    Travel Date
                  </label>
                  <input
                    type="date"
                    required
                    value={bookingData.date}
                    onChange={(e) => handleInputChange('date', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <FaClock className="inline w-4 h-4 mr-2 text-orange-600" />
                    Preferred Time
                  </label>
                  <input
                    type="time"
                    value={bookingData.time}
                    onChange={(e) => handleInputChange('time', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <FaUsers className="inline w-4 h-4 mr-2 text-teal-600" />
                    Number of Passengers
                  </label>
                  <select
                    value={bookingData.passengers}
                    onChange={(e) => handleInputChange('passengers', parseInt(e.target.value))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    {[1, 2, 3, 4, 5, 6, 7].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'Passenger' : 'Passengers'}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <FaSuitcase className="inline w-4 h-4 mr-2 text-indigo-600" />
                    Luggage Pieces
                  </label>
                  <select
                    value={bookingData.luggage}
                    onChange={(e) => handleInputChange('luggage', parseInt(e.target.value))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    {[0, 1, 2, 3, 4, 5].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'Piece' : 'Pieces'}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <FaCar className="inline w-4 h-4 mr-2 text-red-600" />
                    Car Type
                  </label>
                  <select
                    value={bookingData.carType}
                    onChange={(e) => handleInputChange('carType', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select car type</option>
                    <option value="hatchback">Hatchback (4 passengers)</option>
                    <option value="sedan">Sedan (4-5 passengers)</option>
                    <option value="suv">SUV (6-7 passengers)</option>
                    <option value="luxury">Luxury (4 passengers)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <FaRoute className="inline w-4 h-4 mr-2 text-cyan-600" />
                    Trip Type
                  </label>
                  <select
                    value={bookingData.tripType}
                    onChange={(e) => handleInputChange('tripType', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="single">Single Ride</option>
                    <option value="day">Day Hire (8 hours)</option>
                    <option value="multi">Multi-day Tour</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <FaRoute className="inline w-4 h-4 mr-2 text-pink-600" />
                  AI Itinerary Link (Optional)
                </label>
                <input
                  type="url"
                  value={bookingData.itineraryLink}
                  onChange={(e) => handleInputChange('itineraryLink', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Paste your AI-generated itinerary link here"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Link your AI itinerary to get personalized driver recommendations and route optimization
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Special Requests & Preferences
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
                  {[
                    { icon: FaBaby, label: "Child Seat", value: "childSeat" },
                    { icon: FaWheelchair, label: "Wheelchair Access", value: "wheelchair" },
                    { icon: FaSnowflake, label: "AC Required", value: "acRequired" },
                    { icon: FaUmbrellaBeach, label: "Tour Guide", value: "tourGuide" }
                  ].map((option) => (
                    <label key={option.value} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="rounded text-primary focus:ring-primary"
                      />
                      <span className="text-sm text-gray-700">{option.label}</span>
                    </label>
                  ))}
                </div>
                <textarea
                  value={bookingData.specialRequests}
                  onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                  rows="3"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Any additional special requirements or preferences..."
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    required
                    value={bookingData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={bookingData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={bookingData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isBooking}
                className="w-full py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-xl sm:rounded-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed bg-gradient-to-r from-blue-500 to-green-600 hover:from-blue-600 hover:to-green-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 border-0"
              >
                {isBooking ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                    Processing Booking...
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <FaCreditCard className="w-5 h-5 mr-2" />
                    Book Your Trip
                  </div>
                )}
              </button>
            </form>
          ) : (
            /* Local Ride Form */
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <FaLocationDot className="inline w-4 h-4 mr-2 text-primary" />
                    Pickup Location
                  </label>
                  <input
                    type="text"
                    value={bookingData.pickup}
                    onChange={(e) => handleInputChange('pickup', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your current location"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <FaLocationDot className="inline w-4 h-4 mr-2 text-primary" />
                    Destination
                  </label>
                  <input
                    type="text"
                    value={bookingData.dropoff}
                    onChange={(e) => handleInputChange('dropoff', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Where do you want to go?"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <button className="flex-1 py-3 px-4 sm:px-6 font-semibold rounded-xl sm:rounded-2xl transition-all duration-300 bg-white/80 hover:bg-white text-gray-700 hover:text-blue-600 border-2 border-blue-200 hover:border-blue-400 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm sm:text-base">
                  <FaClock className="inline w-4 h-4 mr-2" />
                  Book for Later
                </button>
                <button className="flex-1 py-3 px-4 sm:px-6 font-semibold rounded-xl sm:rounded-2xl transition-all duration-300 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 border-0 text-sm sm:text-base">
                  <FaCar className="inline w-4 h-4 mr-2" />
                  Instant Ride Request
                </button>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <FaLocationPin className="w-5 h-5 text-blue-600" />
                  <span className="font-medium text-blue-900">Quick Pickup</span>
                </div>
                <p className="text-sm text-blue-700">
                  Use your current location for instant pickup. We'll automatically detect nearby drivers.
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            {/* Live Map Section */}
            <MapSection drivers={sampleDrivers} />

            {/* Driver Suggestions */}
            <div className="card-gradient p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-900">Nearby Drivers</h3>
                <span className="text-sm text-gray-600 bg-blue-100 px-3 py-1 rounded-full">{sampleDrivers.length} drivers available</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {sampleDrivers.map((driver) => (
                  <DriverCard key={driver.id} driver={driver} onBook={handleDriverBook} />
                ))}
              </div>
            </div>

            {/* Popular Destinations */}
            <div className="card-gradient p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Popular Destinations</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                {popularDestinations.map((dest, index) => {
                  const IconComponent = dest.icon;
                  return (
                    <div key={index} className="text-center p-4 bg-white/60 rounded-lg hover:bg-white/80 transition-all duration-300 cursor-pointer border border-green-200 hover:border-green-300 hover:scale-105">
                      <IconComponent className="w-8 h-8 text-green-600 mx-auto mb-2" />
                      <div className="font-medium text-gray-900">{dest.name}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4 sm:space-y-6">
            {/* Fare Estimator */}
            <FareEstimator 
              distance={bookingData.pickup && bookingData.dropoff ? "25" : ""}
              carType={bookingData.carType}
              tripType={bookingData.tripType}
            />

            {/* Emergency Assistance */}
            <EmergencyAssistance />

            {/* Why Choose Us */}
            <div className="card-gradient p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Why Choose Our Taxi Service?</h3>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <FaCircleCheck className="w-4 h-4 text-green-500" />
                  <span>Professional & verified drivers</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaCircleCheck className="w-4 h-4 text-green-500" />
                  <span>Well-maintained vehicles</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaCircleCheck className="w-4 h-4 text-green-500" />
                  <span>Transparent pricing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaCircleCheck className="w-4 h-4 text-green-500" />
                  <span>24/7 availability</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaCircleCheck className="w-4 h-4 text-green-500" />
                  <span>Local expertise & knowledge</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaCircleCheck className="w-4 h-4 text-green-500" />
                  <span>AI-powered route optimization</span>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold mb-4">Need Help?</h3>
              <p className="text-sm mb-4 opacity-90">
                Our customer support team is available 24/7 to assist you with your booking
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <FaPhone className="w-4 h-4" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaEnvelope className="w-4 h-4" />
                  <span>support@exploresikkim.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaWhatsapp className="w-4 h-4" />
                  <span>WhatsApp Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default TaxiBooking; 