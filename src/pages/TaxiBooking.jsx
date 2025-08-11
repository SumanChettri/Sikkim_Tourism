import { useState } from 'react'
import { FaLocationDot, FaCalendar, FaUsers, FaCar, FaCreditCard } from 'react-icons/fa6';
import { FaCheckCircle } from 'react-icons/fa';

const TaxiBooking = () => {
  const [bookingData, setBookingData] = useState({
    pickup: '',
    dropoff: '',
    date: '',
    passengers: 1,
    carType: '',
    name: '',
    email: '',
    phone: '',
    specialRequests: ''
  })

  const [currentStep, setCurrentStep] = useState(1)
  const [isBooking, setIsBooking] = useState(false)
  const [bookingComplete, setBookingComplete] = useState(false)

  const carTypes = [
    {
      id: 'hatchback',
      name: 'Hatchback',
      capacity: '4 passengers',
      price: '₹15/km',
      features: ['AC', 'Music System', 'Comfortable Seats'],
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 'sedan',
      name: 'Sedan',
      capacity: '4-5 passengers',
      price: '₹18/km',
      features: ['AC', 'Music System', 'Spacious Interior', 'Premium Comfort'],
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 'suv',
      name: 'SUV',
      capacity: '6-7 passengers',
      price: '₹22/km',
      features: ['AC', 'Music System', 'High Ground Clearance', 'Luggage Space'],
      image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 'luxury',
      name: 'Luxury',
      capacity: '4 passengers',
      price: '₹35/km',
      features: ['Premium AC', 'Premium Sound System', 'Leather Seats', 'Chauffeur'],
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    }
  ]

  const popularRoutes = [
    { pickup: 'Gangtok', dropoff: 'Pelling', distance: '120 km', duration: '4-5 hours' },
    { pickup: 'Gangtok', dropoff: 'Lachung', distance: '125 km', duration: '6-7 hours' },
    { pickup: 'Gangtok', dropoff: 'Namchi', distance: '95 km', duration: '3-4 hours' },
    { pickup: 'Bagdogra Airport', dropoff: 'Gangtok', distance: '125 km', duration: '4-5 hours' }
  ]

  const handleInputChange = (field, value) => {
    setBookingData(prev => ({ ...prev, [field]: value }))
  }

  const handleCarSelect = (carType) => {
    setBookingData(prev => ({ ...prev, carType }))
    setCurrentStep(2)
  }

  const handleBooking = async (e) => {
    e.preventDefault()
    setIsBooking(true)
    
    // Simulate booking process
    setTimeout(() => {
      setIsBooking(false)
      setBookingComplete(true)
    }, 2000)
  }

  const resetBooking = () => {
    setBookingData({
      pickup: '',
      dropoff: '',
      date: '',
      passengers: 1,
      carType: '',
      name: '',
      email: '',
      phone: '',
      specialRequests: ''
    })
    setCurrentStep(1)
    setBookingComplete(false)
  }

  if (bookingComplete) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white rounded-xl shadow-lg p-12 text-center max-w-md">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <FaCircleCheck className="w-12 h-12 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Booking Confirmed!</h2>
          <p className="text-gray-600 mb-6">
            Your taxi has been booked successfully. We'll send you a confirmation email with all the details.
          </p>
          <button onClick={resetBooking} className="btn-primary w-full">
            Book Another Taxi
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Taxi Booking
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Book reliable and comfortable taxi services for your Sikkim adventure
          </p>
        </div>
      </section>

      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Booking Form */}
          <div className="lg:col-span-2">
            {currentStep === 1 ? (
              /* Step 1: Trip Details */
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold mr-3">
                    1
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Trip Details</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Pickup Location
                    </label>
                    <div className="relative">
                      <FaLocationDot className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        placeholder="Enter pickup location"
                        value={bookingData.pickup}
                        onChange={(e) => handleInputChange('pickup', e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Drop-off Location
                    </label>
                    <div className="relative">
                      <FaLocationDot className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        placeholder="Enter destination"
                        value={bookingData.dropoff}
                        onChange={(e) => handleInputChange('dropoff', e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Travel Date
                    </label>
                    <div className="relative">
                      <FaCalendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="date"
                        value={bookingData.date}
                        onChange={(e) => handleInputChange('date', e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Number of Passengers
                    </label>
                    <div className="relative">
                      <FaUsers className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <select
                        value={bookingData.passengers}
                        onChange={(e) => handleInputChange('passengers', parseInt(e.target.value))}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                      >
                        {[1, 2, 3, 4, 5, 6, 7].map(num => (
                          <option key={num} value={num}>{num} {num === 1 ? 'Passenger' : 'Passengers'}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <button
                    onClick={() => setCurrentStep(2)}
                    disabled={!bookingData.pickup || !bookingData.dropoff || !bookingData.date}
                    className="btn-primary w-full py-3 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Continue to Car Selection
                  </button>
                </div>
              </div>
            ) : (
              /* Step 2: Car Selection & Booking */
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold mr-3">
                    2
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Select Your Car</h2>
                </div>

                {/* Car Selection */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {carTypes.map((car) => (
                    <div
                      key={car.id}
                      onClick={() => handleCarSelect(car.id)}
                      className={`border-2 rounded-lg p-4 cursor-pointer transition-all duration-200 ${
                        bookingData.carType === car.id
                          ? 'border-primary bg-primary/5'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <img
                        src={car.image}
                        alt={car.name}
                        className="w-full h-32 object-cover rounded-lg mb-4"
                      />
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{car.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">{car.capacity}</p>
                      <p className="text-lg font-bold text-primary mb-3">{car.price}</p>
                      <div className="flex flex-wrap gap-2">
                        {car.features.map((feature, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Passenger Details Form */}
                {bookingData.carType && (
                  <form onSubmit={handleBooking} className="space-y-6">
                    <h3 className="text-xl font-semibold text-gray-900">Passenger Details</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          required
                          value={bookingData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          required
                          value={bookingData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          required
                          value={bookingData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Special Requests
                        </label>
                        <textarea
                          value={bookingData.specialRequests}
                          onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                          rows="3"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                          placeholder="Any special requirements..."
                        />
                      </div>
                    </div>

                    <div className="flex space-x-4">
                      <button
                        type="button"
                        onClick={() => setCurrentStep(1)}
                        className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        disabled={isBooking}
                        className="btn-primary flex-1 py-3 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isBooking ? (
                          <div className="flex items-center justify-center">
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                            Processing...
                          </div>
                        ) : (
                          <div className="flex items-center justify-center">
                            <FaCreditCard className="w-5 h-5 mr-2" />
                            Confirm Booking
                          </div>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Popular Routes */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Popular Routes</h3>
              <div className="space-y-3">
                {popularRoutes.map((route, index) => (
                  <div key={index} className="p-3 bg-gray-50 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900">{route.pickup} → {route.dropoff}</span>
                    </div>
                    <div className="text-sm text-gray-600">
                      <div>Distance: {route.distance}</div>
                      <div>Duration: {route.duration}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Why Choose Our Taxi Service?</h3>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <FaCircleCheck className="w-4 h-4 text-green-500" />
                  <span>Professional drivers</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaCircleCheck className="w-4 h-4 text-green-500" />
                  <span>Well-maintained vehicles</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaCircleCheck className="w-4 h-4 text-green-500" />
                  <span>Fixed pricing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaCircleCheck className="w-4 h-4 text-green-500" />
                  <span>24/7 availability</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaCircleCheck className="w-4 h-4 text-green-500" />
                  <span>Local expertise</span>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4">Need Help?</h3>
              <p className="text-sm mb-4">
                Our customer support team is available 24/7 to assist you with your booking
              </p>
              <div className="space-y-2 text-sm">
                <div>📞 +91 98765 43210</div>
                <div>📧 support@sikkimexplorer.com</div>
                <div>💬 Live chat available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TaxiBooking 