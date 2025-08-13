import React from 'react';
import { FaMountain, FaHeart, FaUsers, FaAward, FaCamera } from 'react-icons/fa6';
import { FaMapMarkedAlt } from 'react-icons/fa';

const AboutSection = () => {
  const features = [
    {
      icon: <FaMountain className="w-8 h-8 text-accent" />,
      title: "Local Expertise",
      description: "Deep knowledge of Sikkim's hidden gems and authentic experiences"
    },
    {
      icon: <FaHeart className="w-8 h-8 text-accent" />,
      title: "Personalized Service",
      description: "Tailored itineraries that match your travel style and preferences"
    },
    {
      icon: <FaUsers className="w-8 h-8 text-accent" />,
      title: "Community Focus",
      description: "Supporting local communities and sustainable tourism practices"
    },
    {
      icon: <FaAward className="w-8 h-8 text-accent" />,
      title: "Quality Assured",
      description: "Carefully curated experiences with verified local partners"
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Travelers" },
    { number: "50+", label: "Destinations" },
    { number: "98%", label: "Satisfaction Rate" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-accent">AIventurer</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're passionate about connecting travelers with the authentic beauty of Sikkim, 
              creating unforgettable experiences that go beyond the ordinary.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 md:mb-20">
            {/* Left Column - Story */}
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                Our Story
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Born from a deep love for the Himalayas and a desire to share Sikkim's 
                  magic with the world, AIventurer was created by local experts who know 
                  every hidden valley, ancient monastery, and breathtaking viewpoint.
                </p>
                <p>
                  We believe that the best travel experiences come from authentic connections 
                  with local culture, people, and traditions. That's why we've built a 
                  network of trusted local guides, homestay owners, and cultural experts.
                </p>
                <p>
                  Whether you're seeking adventure in the mountains, spiritual peace in 
                  ancient monasteries, or cultural immersion in local villages, we're here 
                  to make your Sikkim journey truly extraordinary.
                </p>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/yumthang-valley.jpg" 
                  alt="Sikkim Valley Landscape"
                  className="w-full h-80 md:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-4 border border-gray-100">
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">500+</div>
                  <div className="text-sm text-gray-600">Happy Travelers</div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 md:mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-100">
                <div className="text-3xl font-bold text-accent mb-2">{stat.number}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 md:mb-20">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 md:mb-20">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="flex items-center mb-4">
                <FaMapMarkedAlt className="w-8 h-8 text-accent mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To provide authentic, immersive travel experiences that showcase the true 
                beauty of Sikkim while supporting local communities and preserving the 
                region's cultural heritage for future generations.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="flex items-center mb-4">
                <FaCamera className="w-8 h-8 text-accent mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To become the leading platform for authentic Sikkim experiences, 
                connecting travelers with the heart and soul of this magical region 
                through personalized, sustainable tourism.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Ready to Experience Sikkim?
              </h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Let us help you create the perfect Sikkim adventure. 
                Our local experts are ready to craft your dream itinerary.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/destinations" 
                  className="btn-primary text-lg px-8 py-3"
                >
                  Explore Destinations
                </a>
                <a 
                  href="/contact" 
                  className="btn-outline text-lg px-8 py-3"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 