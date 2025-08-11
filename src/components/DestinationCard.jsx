import { Link } from 'react-router-dom'
import { FaStar, FaLocationDot, FaClock } from 'react-icons/fa6'

const DestinationCard = ({ destination }) => {
  const { id, name, image, description, location, duration, rating, price } = destination

  return (
    <div className="card group overflow-hidden">
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-accent text-dark px-3 py-1 rounded-full text-sm font-semibold">
          ₹{price}
        </div>
        <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
          <FaStar className="w-4 h-4 mr-1 text-yellow-300" />
          {rating}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-200">
          {name}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-2">
          {description}
        </p>

        {/* Location and Duration */}
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center">
            <FaLocationDot className="w-4 h-4 mr-1 text-primary" />
            {location}
          </div>
          <div className="flex items-center">
            <FaClock className="w-4 h-4 mr-1 text-primary" />
            {duration}
          </div>
        </div>

        {/* CTA Button */}
        <Link
          to={`/destinations/${id}`}
          className="btn-primary w-full text-center group-hover:bg-primary/90 transition-all duration-200"
        >
          View Details
        </Link>
      </div>
    </div>
  )
}

export default DestinationCard 