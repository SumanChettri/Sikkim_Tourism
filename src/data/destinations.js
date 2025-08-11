export const destinations = [
  {
    id: 1,
    name: "Gangtok - The Capital City",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    description: "Experience the vibrant culture of Sikkim's capital with its monasteries, markets, and stunning mountain views.",
    location: "Gangtok, East Sikkim",
    duration: "2-3 Days",
    rating: 4.8,
    price: "8,999",
    category: "City",
    highlights: ["MG Marg", "Rumtek Monastery", "Tsomgo Lake", "Cable Car Ride"],
    bestTime: "March to May, October to December",
    difficulty: "Easy"
  },
  {
    id: 2,
    name: "Lachung & Yumthang Valley",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    description: "Discover the Valley of Flowers with its pristine landscapes, hot springs, and snow-capped peaks.",
    location: "North Sikkim",
    duration: "3-4 Days",
    rating: 4.9,
    price: "15,999",
    category: "Nature",
    highlights: ["Yumthang Valley", "Zero Point", "Lachung Monastery", "Hot Springs"],
    bestTime: "March to May, October to December",
    difficulty: "Moderate"
  },
  {
    id: 3,
    name: "Pelling - Mountain Views",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    description: "Witness the majestic Kanchenjunga range and explore ancient monasteries in this peaceful hill station.",
    location: "West Sikkim",
    duration: "2-3 Days",
    rating: 4.7,
    price: "12,999",
    category: "Mountain",
    highlights: ["Kanchenjunga View", "Pemayangtse Monastery", "Sangachoeling Monastery", "Skywalk"],
    bestTime: "October to December, March to May",
    difficulty: "Easy"
  },
  {
    id: 4,
    name: "Namchi - South Sikkim",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    description: "Visit the Char Dham complex and enjoy panoramic views of the Himalayas and Teesta River.",
    location: "South Sikkim",
    duration: "2 Days",
    rating: 4.6,
    price: "9,999",
    category: "Religious",
    highlights: ["Char Dham", "Samdruptse", "Tendong Hill", "Teesta River"],
    bestTime: "March to May, October to December",
    difficulty: "Easy"
  },
  {
    id: 5,
    name: "Ravangla - Buddha Park",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    description: "Meditate in the serene Buddha Park and enjoy the peaceful atmosphere of this spiritual destination.",
    location: "South Sikkim",
    duration: "1-2 Days",
    rating: 4.5,
    price: "7,999",
    category: "Spiritual",
    highlights: ["Buddha Park", "Ralang Monastery", "Tendong Hill", "Local Markets"],
    bestTime: "March to May, October to December",
    difficulty: "Easy"
  },
  {
    id: 6,
    name: "Zuluk - Silk Route",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    description: "Experience the historic Silk Route with its winding roads and breathtaking mountain vistas.",
    location: "East Sikkim",
    duration: "2-3 Days",
    rating: 4.7,
    price: "11,999",
    category: "Adventure",
    highlights: ["Silk Route", "Thambi View Point", "Zuluk View Point", "Kupup Lake"],
    bestTime: "March to May, October to December",
    difficulty: "Moderate"
  }
]

export const categories = [
  "All",
  "City",
  "Nature",
  "Mountain",
  "Religious",
  "Spiritual",
  "Adventure"
]

export const getDestinationById = (id) => {
  return destinations.find(dest => dest.id === parseInt(id))
}

export const getDestinationsByCategory = (category) => {
  if (category === "All") return destinations
  return destinations.filter(dest => dest.category === category)
} 