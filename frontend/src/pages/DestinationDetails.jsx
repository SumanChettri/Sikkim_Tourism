import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getDestinationById } from '../data/destinations'
import { FaStar, FaLocationDot, FaClock, FaIndianRupeeSign, FaCalendar, FaUser, FaHeart, FaShareNodes } from 'react-icons/fa6'

const DestinationDetails = () => {
  const { id } = useParams()
  const [activeTab, setActiveTab] = useState('overview')
  const destination = getDestinationById(id)

  if (!destination) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Destination not found</h1>
          <Link to="/destinations" className="btn-primary">
            Back to Destinations
          </Link>
        </div>
      </div>
    )
  }

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'itinerary', label: 'Itinerary' },
    { id: 'local-tips', label: 'Local Tips' }
  ]

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">About {destination.name}</h3>
              <p className="text-gray-600 leading-relaxed">{destination.description}</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Highlights</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {destination.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Best Time to Visit</h4>
                <p className="text-gray-600">{destination.bestTime}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Difficulty Level</h4>
                <p className="text-gray-600">{destination.difficulty}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Duration</h4>
                <p className="text-gray-600">{destination.duration}</p>
              </div>
            </div>
          </div>
        )
      
      case 'itinerary':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Suggested Itinerary</h3>
              <div className="space-y-4">
                {destination.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-semibold">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">{highlight}</h4>
                      <p className="text-gray-600 text-sm">
                        Spend time exploring this amazing location and immerse yourself in the local culture.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-accent/10 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Pro Tip</h4>
              <p className="text-gray-700">
                Consider hiring a local guide to get the most authentic experience and discover hidden gems that aren't in guidebooks.
              </p>
            </div>
          </div>
        )
      
      case 'local-tips':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Local Insights</h3>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Cultural Etiquette</h4>
                  <p className="text-blue-800 text-sm">
                    Always remove your shoes before entering monasteries and temples. Dress modestly and respect local customs.
                  </p>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">Best Photo Spots</h4>
                  <p className="text-green-800 text-sm">
                    Sunrise and sunset provide the best lighting for photography. Ask locals for the best viewpoints.
                  </p>
                </div>
                
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">Local Cuisine</h4>
                  <p className="text-yellow-800 text-sm">
                    Try momos, thukpa, and local tea. Many restaurants offer authentic Sikkimese dishes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )
      
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px]">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="container-custom">
            <div className="text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">{destination.name}</h1>
              <div className="flex items-center space-x-6 text-lg">
                <div className="flex items-center space-x-2">
                  <FaLocationDot className="w-5 h-5" />
                  <span>{destination.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaClock className="w-5 h-5" />
                  <span>{destination.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaStar className="w-5 h-5 text-yellow-300" />
                  <span>{destination.rating}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Tabs */}
              <div className="bg-white rounded-lg shadow-sm mb-8">
                <div className="border-b border-gray-200">
                  <nav className="flex space-x-8 px-6">
                    {tabs.map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                          activeTab === tab.id
                            ? 'border-primary text-primary'
                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </nav>
                </div>
                
                <div className="p-6">
                  {renderTabContent()}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Price Card */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-primary mb-2">₹{destination.price}</div>
                  <div className="text-gray-600">per person</div>
                </div>
                
                <div className="space-y-4">
                  <button className="btn-primary w-full">
                    Book This Tour
                  </button>
                  <button className="btn-secondary w-full">
                    <FaHeart className="w-5 h-5 mr-2 inline" />
                    Add to Wishlist
                  </button>
                  <button className="w-full py-3 px-4 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-200">
                    <FaShareNodes className="w-5 h-5 mr-2 inline" />
                    Share
                  </button>
                </div>
              </div>

              {/* Quick Info */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Info</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Category</span>
                    <span className="font-medium text-gray-900">{destination.category}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Difficulty</span>
                    <span className="font-medium text-gray-900">{destination.difficulty}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Best Time</span>
                    <span className="font-medium text-gray-900">{destination.bestTime}</span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-lg p-6 text-center">
                <h3 className="text-lg font-semibold mb-2">Need a Custom Tour?</h3>
                <p className="text-sm mb-4">Let us create a personalized itinerary just for you</p>
                <Link to="/itinerary-planner" className="btn-accent w-full">
                  Plan Custom Trip
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="bg-gray-100 py-16">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Location</h2>
            <div className="bg-gray-300 h-64 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <FaLocationDot className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                <p className="text-gray-600">Interactive map will be displayed here</p>
                <p className="text-sm text-gray-500">{destination.location}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DestinationDetails 