import { useState } from 'react'
import HeroSection from '../components/HeroSection'
import SearchBar from '../components/SearchBar'
import DestinationCard from '../components/DestinationCard'
import { destinations } from '../data/destinations'
import { FaStar, FaQuoteLeft } from 'react-icons/fa6'

const Home = () => {
  const [searchData, setSearchData] = useState(null)
  
  const featuredDestinations = destinations.slice(0, 3)
  
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      location: "Mumbai, India",
      rating: 5,
      comment: "Amazing experience exploring Sikkim! The team at Sikkim Explorer made our trip unforgettable with their local knowledge and excellent service.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    {
      id: 2,
      name: "David Chen",
      location: "Singapore",
      rating: 5,
      comment: "The Yumthang Valley tour was absolutely breathtaking. Professional guides and well-organized itinerary. Highly recommended!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    {
      id: 3,
      name: "Sarah Johnson",
      location: "London, UK",
      rating: 5,
      comment: "Sikkim Explorer exceeded all expectations. From the monasteries to the mountain views, every moment was magical.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    }
  ]

  // const handleSearch = (data) => {
  //   setSearchData(data)
  //   // Handle search functionality
  //   console.log('Search from home:', data)
  // }

  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Search Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Plan Your Perfect Trip
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Search for destinations, plan your itinerary, and book your adventure in Sikkim
            </p>
          </div>
          {/* <SearchBar onSearch={handleSearch} className="max-w-4xl mx-auto" /> */}
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Destinations
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the most popular and breathtaking destinations in Sikkim
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDestinations.map((destination) => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a href="/destinations" className="btn-secondary text-lg px-8 py-3">
              View All Destinations
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Sikkim Explorer?
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              We provide authentic experiences with local expertise and personalized service
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaStar className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Local Expertise</h3>
              <p className="text-white/80">
                Our team of local guides knows every hidden gem and secret spot in Sikkim
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaStar className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Customized Tours</h3>
              <p className="text-white/80">
                Tailored itineraries that match your interests, budget, and travel style
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaStar className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-white/80">
                Round-the-clock assistance throughout your journey in Sikkim
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Travelers Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real experiences from real travelers who explored Sikkim with us
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="card p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-3"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="w-5 h-5 text-yellow-400" />
                  ))}
                </div>
                
                <blockquote className="text-gray-600 italic">
                  <FaQuoteLeft className="w-6 h-6 text-primary mb-2" />
                  {testimonial.comment}
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-secondary to-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Explore Sikkim?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Start planning your adventure today and create memories that will last a lifetime
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/destinations" className="btn-accent text-lg px-8 py-3">
              Browse Destinations
            </a>
            <a href="/itinerary-planner" className="bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 text-lg">
              Plan Your Trip
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home 