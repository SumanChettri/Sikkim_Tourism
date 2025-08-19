import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaClock, 
  FaGithub, 
  FaLinkedin, 
  FaTwitter,
  FaGlobe,
  FaPaperPlane,
  FaUser,
  FaComments
} from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Thank you for your message! We\'ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2000);
  };

  const team = [
    {
      name: "Suman Tewari",
      role: "Full Stack Developer",
      email: "sumantewari758@gmail.com",
      image: "./suman.jpg",
      github: "https://github.com/SumanChettri",
      linkedin: "https://linkedin.com/in/sumantewari",
      expertise: ["React", "Node.js", "MongoDB", "AWS"],
      bio: "Passionate full-stack developer with expertise in modern web technologies and cloud solutions."
    },
    {
      name: "Kishan Poudel",
      role: "Frontend Developer",
      email: "kishan.poudel@sikkim-explorer.test",
      image: "https://avatars.githubusercontent.com/u/87654321?v=4",
      github: "https://github.com/kishanpoudel",
      linkedin: "https://linkedin.com/in/kishanpoudel",
      expertise: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
      bio: "Creative frontend developer focused on building beautiful, responsive user experiences."
    },
    {
      name: "Abishek",
      role: "AI Models & ML Engineer",
      email: "abishek@sikkim-explorer.test",
      image: "https://avatars.githubusercontent.com/u/11223344?v=4",
      github: "https://github.com/abishek",
      linkedin: "https://linkedin.com/in/abishek",
      expertise: ["Python", "TensorFlow", "PyTorch", "NLP"],
      bio: "AI specialist developing intelligent solutions for enhanced user experiences and automation."
    },
  ];

  const contactInfo = [
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      title: "Email Us",
      details: "info@sikkim-explorer.com",
      subtitle: "We'll respond within 24 hours"
    },
    {
      icon: <FaPhone className="w-6 h-6" />,
      title: "Call Us",
      details: "+91 98765 43210",
      subtitle: "Mon-Fri from 9am to 6pm"
    },
    {
      icon: <FaMapMarkerAlt className="w-6 h-6" />,
      title: "Visit Us",
      details: "Gangtok, Sikkim, India",
      subtitle: "Come explore our beautiful state"
    },
    {
      icon: <FaClock className="w-6 h-6" />,
      title: "Business Hours",
      details: "9:00 AM - 6:00 PM",
      subtitle: "Monday to Friday"
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
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Touch</span>
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Ready to start your Sikkim adventure? Our team is here to help you plan the perfect trip.
          </motion.p>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="px-4 pb-16">
        <div className="container-custom max-w-7xl mx-auto">
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center group hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  {info.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{info.title}</h3>
                <p className="text-lg text-blue-600 font-semibold mb-2">{info.details}</p>
                <p className="text-sm text-gray-600">{info.subtitle}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Team Section */}
      <section className="px-4 pb-20">
        <div className="container-custom max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Send us a Message</h2>
                <p className="text-gray-600">Have questions about your Sikkim trip? We'd love to hear from you.</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <FaUser className="inline w-4 h-4 mr-2" />
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <FaEnvelope className="inline w-4 h-4 mr-2" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <FaComments className="inline w-4 h-4 mr-2" />
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <FaPaperPlane className="inline w-4 h-4 mr-2" />
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us about your travel plans..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Team Section */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
                <p className="text-gray-600">Connect with our talented developers who are passionate about creating amazing experiences for Sikkim tourism.</p>
              </div>
              
              <div className="space-y-6">
        {team.map((member, index) => (
                  <motion.div
            key={index}
                    variants={itemVariants}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1"
          >
                    <div className="flex items-start space-x-4">
            <img
              src={member.image}
              alt={member.name}
                        className="w-20 h-20 rounded-xl object-cover border-4 border-gray-100 group-hover:border-blue-200 transition-colors duration-300"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                        <p className="text-blue-600 font-semibold mb-2">{member.role}</p>
                        <p className="text-sm text-gray-600 mb-3 leading-relaxed">{member.bio}</p>
                        
                        {/* Expertise Tags */}
                        <div className="flex flex-wrap gap-2 mb-3">
                          {member.expertise.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                        
                        {/* Contact & Social Links */}
                        <div className="flex items-center space-x-4">
            <a
              href={`mailto:${member.email}`}
                            className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                            title="Send Email"
                          >
                            <FaEnvelope className="w-4 h-4" />
                          </a>
                          <a
                            href={member.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                            title="GitHub Profile"
                          >
                            <FaGithub className="w-4 h-4" />
                          </a>
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                            title="LinkedIn Profile"
                          >
                            <FaLinkedin className="w-4 h-4" />
            </a>
          </div>
                      </div>
                    </div>
                  </motion.div>
        ))}
      </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 pb-20">
        <div className="container-custom max-w-4xl mx-auto">
          <motion.div 
            variants={itemVariants}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Sikkim Adventure?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let our team help you create the perfect itinerary and make your Sikkim dreams come true.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/destinations" 
                  className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-300"
                >
                  Explore Destinations
                </a>
                <a 
                  href="/itinerary-planner" 
                  className="border-2 border-white text-white font-semibold px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-300"
                >
                  Plan Your Trip
                </a>
              </div>
            </div>
          </motion.div>
    </div>
      </section>
    </motion.div>
  );
}
