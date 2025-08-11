import { useState } from 'react'
import { FaMagnifyingGlass, FaLocationDot, FaCalendar, FaUsers } from 'react-icons/fa6'

const SearchBar = ({ onSearch, className = '' }) => {
  const [searchData, setSearchData] = useState({
    destination: '',
    date: '',
    days: '3'
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (onSearch) {
      onSearch(searchData)
    }
  }

  return (
    <div className={`bg-white rounded-xl shadow-lg p-6 ${className}`}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Destination */}
          <div className="relative">
            <FaLocationDot className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Where do you want to go?"
              value={searchData.destination}
              onChange={(e) => setSearchData({...searchData, destination: e.target.value})}
              className="w-full pl-10 pr-4 py-3 bg-gray-50 text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 border border-gray-200"
            />
          </div>

          {/* Date */}
          <div className="relative">
            <FaCalendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="date"
              value={searchData.date}
              onChange={(e) => setSearchData({...searchData, date: e.target.value})}
              className="w-full pl-10 pr-4 py-3 bg-gray-50 text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 border border-gray-200"
            />
          </div>

          {/* Number of Days */}
          <div className="relative">
            <FaUsers className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <select
              value={searchData.days}
              onChange={(e) => setSearchData({...searchData, days: e.target.value})}
              className="w-full pl-10 pr-4 py-3 bg-gray-50 text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 border border-gray-200"
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

        {/* Search Button */}
        <button
          type="submit"
          className="btn-primary w-full md:w-auto px-8"
        >
          <FaMagnifyingGlass className="w-5 h-5 mr-2 inline" />
          Search Adventures
        </button>
      </form>
    </div>
  )
}

export default SearchBar 