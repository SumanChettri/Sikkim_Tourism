import { useState } from "react";
import HeroSection from "../components/HeroSection";
import SearchBar from "../components/SearchBar";
import DestinationCard from "../components/DestinationCard";
import { destinations } from "../data/destinations";
import { FaStar, FaQuoteLeft } from "react-icons/fa6";
import WhyChooseUs from "../components/WhyCooseUs";
const Home = () => {
  const [searchData, setSearchData] = useState(null);

  const featuredDestinations = destinations.slice(0, 3);

  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      location: "Mumbai, India",
      rating: 5,
      comment:
        "Amazing experience exploring Sikkim! The team at GuideMe Sikkim made our trip unforgettable with their local knowledge and excellent service.",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    },
    {
      id: 2,
      name: "David Chen",
      location: "Singapore",
      rating: 5,
      comment:
        "The Yumthang Valley tour was absolutely breathtaking. Professional guides and well-organized itinerary. Highly recommended!",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    },
    {
      id: 3,
      name: "Sarah Johnson",
      location: "London, UK",
      rating: 5,
      comment:
        "GuideMe Sikkim exceeded all expectations. From the monasteries to the mountain views, every moment was magical.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    },
  ];

  // const handleSearch = (data) => {
  //   setSearchData(data)
  //   // Handle search functionality
  //   console.log('Search from home:', data)
  // }

  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

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

      {/* <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Plan Your Perfect Trip
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Search for destinations, plan your itinerary, and book your
              adventure in Sikkim
            </p>
          </div>
        </div>

      </section> */}

      {/* Search Section */}

      {/* Why Choose Us */}

      {/* //////////////////////////////// */}
      {/* /////////////////////////////// */}
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
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {testimonial.location}
                    </p>
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
     
    </div>
  );
};

export default Home;
