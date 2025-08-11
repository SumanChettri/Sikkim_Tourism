import { useState } from 'react'
import { FaMagnifyingGlass, FaCalendar, FaUsers, FaLocationDot } from 'react-icons/fa6'

const HeroSection = () => {
  const [searchData, setSearchData] = useState({
    destination: '',
    date: '',
    days: '3'
  })

  const handleSearch = (e) => {
    e.preventDefault()
    // Handle search functionality
    console.log('Search:', searchData)
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/90 to-secondary/90">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
        }}
      ></div>

      <div className="relative z-20 container-custom text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Discover
              <span className="block text-accent">Sikkim</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
              Experience the mystical beauty of the Himalayas, ancient
              monasteries, and pristine landscapes
            </p>
          </div>

          {/* <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <form onSubmit={handleSearch} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="relative">
                  <FaLocationDot className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Where do you want to go?"
                    value={searchData.destination}
                    onChange={(e) => setSearchData({...searchData, destination: e.target.value})}
                    className="w-full pl-10 pr-4 py-4 bg-white/90 text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-50"
                  />
                </div>

                <div className="relative">
                  <FaCalendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="date"
                    value={searchData.date}
                    onChange={(e) => setSearchData({...searchData, date: e.target.value})}
                    className="w-full pl-10 pr-4 py-4 bg-white/90 text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-50"
                  />
                </div>

                <div className="relative">
                  <FaUsers className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select
                    value={searchData.days}
                    onChange={(e) => setSearchData({...searchData, days: e.target.value})}
                    className="w-full pl-10 pr-4 py-4 bg-white/90 text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-50"
                  >
                    <option value="1">1 Day</option>
                    <option value="2">2 Days</option>
                    <option value="3">3 Days</option>
                    <option value="5">5 Days</option>
                    <option value="7">1 Week</option>
                    <option value="10">10 Days</option>
                    <option value="14">2 Weeks</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="btn-accent text-lg px-12 py-4 w-full md:w-auto"
              >
                <FaMagnifyingGlass className="w-6 h-6 mr-2 inline" />
                Search Adventures
              </button>
            </form>
          </div> */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <a href="/destinations" className="btn-accent text-lg px-8 py-3">
              Browse Destinations
            </a>
            <a
              href="/itinerary-planner"
              className="bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 text-lg"
            >
              Plan Your Trip
            </a>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">500+</div>
              <div className="text-gray-200">Happy Travelers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">50+</div>
              <div className="text-gray-200">Destinations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">98%</div>
              <div className="text-gray-200">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection 