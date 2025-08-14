import React from 'react';
import { motion } from 'framer-motion';
import { FaMountain, FaHeart, FaUsers, FaAward, FaMapMarkedAlt, FaCamera, FaGlobe, FaLeaf, FaHandshake, FaStar } from 'react-icons/fa';

export default function About() {
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

  const values = [
    {
      icon: <FaGlobe className="w-6 h-6" />,
      title: "Authenticity",
      description: "Genuine local experiences that reflect the true spirit of Sikkim"
    },
    {
      icon: <FaLeaf className="w-6 h-6" />,
      title: "Sustainability",
      description: "Eco-friendly practices that preserve Sikkim's natural beauty"
    },
    {
      icon: <FaHandshake className="w-6 h-6" />,
      title: "Community Support",
      description: "Empowering local communities through responsible tourism"
    },
    {
      icon: <FaStar className="w-6 h-6" />,
      title: "Excellence",
      description: "Uncompromising quality in every aspect of your journey"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative z-10 container-custom max-w-7xl mx-auto text-center">
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
          >
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">AIventurer</span>
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            We're passionate about connecting travelers with the authentic beauty of Sikkim, 
            creating unforgettable experiences that go beyond the ordinary.
          </motion.p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="px-4 py-16">
        <div className="container-custom max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
            {/* Left Column - Story */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Our Story
              </h2>
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
            </motion.div>

            {/* Right Column - Image */}
            <motion.div variants={itemVariants} className="relative">
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
                  <div className="text-2xl font-bold text-blue-600">500+</div>
                  <div className="text-sm text-gray-600">Happy Travelers</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 py-16 bg-white">
        <div className="container-custom max-w-6xl mx-auto">
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl shadow-lg border border-blue-100">
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-4 py-16">
        <div className="container-custom max-w-6xl mx-auto">
          <motion.div 
            variants={itemVariants}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose AIventurer?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We combine local expertise with modern technology to deliver exceptional travel experiences
            </p>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full text-white group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="px-4 py-16 bg-white">
        <div className="container-custom max-w-6xl mx-auto">
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl shadow-xl p-8 border border-blue-100">
              <div className="flex items-center mb-4">
                <FaMapMarkedAlt className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To provide authentic, immersive travel experiences that showcase the true 
                beauty of Sikkim while supporting local communities and preserving the 
                region's cultural heritage for future generations.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-2xl shadow-xl p-8 border border-purple-100">
              <div className="flex items-center mb-4">
                <FaCamera className="w-8 h-8 text-purple-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To become the leading platform for authentic Sikkim experiences, 
                connecting travelers with the heart and soul of this magical region 
                through personalized, sustainable tourism.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="px-4 py-16">
        <div className="container-custom max-w-6xl mx-auto">
          <motion.div 
            variants={itemVariants}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gradient-to-br from-green-500 to-teal-600 rounded-full text-white">
                    {value.icon}
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16">
        <div className="container-custom max-w-4xl mx-auto">
          <motion.div 
            variants={itemVariants}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl shadow-xl p-8 md:p-12 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Ready to Experience Sikkim?
                </h3>
                <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                  Let us help you create the perfect Sikkim adventure. 
                  Our local experts are ready to craft your dream itinerary.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="/destinations" 
                    className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-300"
                  >
                    Explore Destinations
                  </a>
                  <a 
                    href="/contact" 
                    className="border-2 border-white text-white font-semibold px-8 py-3 rounded-xl hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-300"
                  >
                    Get in Touch
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
