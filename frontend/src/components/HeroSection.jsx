import { motion } from 'framer-motion';

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

const HeroSection = () => {
  return (
    <section className="relative flex items-center justify-center h-screen overflow-hidden mx-2 md:mx-4 lg:mx-6 my-2 md:my-4 lg:my-6">
      {/* Background Container with Box Effect */}
      <div className="relative w-full h-full rounded-3xl shadow-2xl overflow-hidden bg-gradient-to-br from-slate-800/20 to-slate-900/20 backdrop-blur-sm border border-white/10">
        {/* Background Image Layer */}
        <img 
          src="/yumthang-valley.jpg" 
          alt="Sikkim Valley Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
          onLoad={() => console.log('Image loaded successfully')}
          onError={(e) => console.error('Image failed to load:', e)}
        />
        
        {/* Enhanced Shadow Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/75 via-slate-900/55 to-slate-900/35 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,146,60,0.35),transparent_70%)] z-10" />
        
        {/* Subtle Inner Glow and Border */}
        <div className="absolute inset-0 ring-1 ring-white/15 z-10 rounded-3xl" />
        
        {/* Floating Elements for Advanced Look */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-amber-400/20 to-orange-500/20 rounded-full blur-xl z-5 animate-pulse" />
        <div className="absolute bottom-20 right-16 w-16 h-16 bg-gradient-to-br from-blue-400/20 to-indigo-500/20 rounded-full blur-xl z-5 animate-pulse delay-1000" />
        <div className="absolute top-1/2 right-8 w-12 h-12 bg-gradient-to-br from-emerald-400/20 to-green-500/20 rounded-full blur-lg z-5 animate-pulse delay-500" />
        
        {/* Content Container - Perfect Vertical Alignment */}
        <div className="relative z-20 h-full flex items-center px-8 md:px-12 lg:px-16 xl:px-20">
          {/* Content Stack - Perfect Vertical Line */}
          <div className="space-y-6 md:space-y-8">
            {/* Badge - Perfectly Aligned */}
            <motion.div variants={itemVariants} className="hero-badge w-fit shadow-xl backdrop-blur-md">
              <span className="hero-badge-dot" />
              <span className="text-xs sm:text-sm md:text-base font-medium tracking-wide">Explore The Hidden Gem of the Himalayas</span>
            </motion.div>

            {/* Main Title - Perfect Vertical Flow */}
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-[1.05] drop-shadow-2xl"
            >
              <span className="text-white/90">Plan your</span> <br className="hidden sm:block" />
              <span className="hero-title-accent">Trip</span>
            </motion.h1>

            {/* Subtitle - Perfectly Aligned */}
            <motion.div variants={itemVariants} className="max-w-2xl lg:max-w-3xl">
              <p className="hero-subtitle text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
                with AI-powered itineraries and local experiences from hidden valleys to vibrant festivals - plan, customize, and book with local experts.
              </p>
            </motion.div>

            {/* Button Container - Perfect Vertical Alignment */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-start items-stretch sm:items-start"
            >
              {/* Primary Button */}
              <motion.a
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="/destinations"
                className="btn-glow text-sm sm:text-base md:text-lg px-6 sm:px-8 py-3 md:py-4 w-full sm:w-auto text-center shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Browse Destinations
              </motion.a>
              
              {/* Secondary Button */}
              <motion.a
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="/itinerary-planner"
                className="btn-glass-light text-sm sm:text-base md:text-lg px-6 sm:px-8 py-3 md:py-4 w-full sm:w-auto text-center shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Plan Your Trip
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;