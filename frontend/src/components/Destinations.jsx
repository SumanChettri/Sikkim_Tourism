import React from "react";

const destinations = [
  {
    id: 1,
    title: "Gurudongmar Lake",
    description:
      "Sacred high-altitude lake at 17,800 feet, one of the highest lakes in the world with crystal clear waters",
    location: "North Sikkim",
    image: "https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg",
  },
  {
    id: 2, 
    title: "Tarey Bhir",
    description:
      "Stunning viewpoint offering panoramic vistas of rolling hills and the majestic Kanchenjunga range",
    location: "Namchi",
    image: "https://images.pexels.com/photos/462162/pexels-photo-462162.jpeg",
  },
  {
    id: 3,
    title: "Yumthang Valley",
    description:
      "Valley of Flowers with vibrant rhododendrons, primulas, and alpine blooms against snow-capped peaks",
    location: "North Sikkim",
    image: "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg",
  },
  {
    id: 4,
    title: "Zuluk",
    description:
      "Historic Silk Route with dramatic zigzag roads, offering breathtaking sunrise views over the Himalayas",
    location: "East Sikkim",
    image: "https://images.pexels.com/photos/1055058/pexels-photo-1055058.jpeg",
  },
];
const hiddenGems = [
  {
    id: 1,
    title: "Gurudongmar Lake",
    description:
      "Sacred high-altitude lake at 17,800 feet, one of the highest lakes in the world with crystal clear waters",
    location: "North Sikkim",
    image: "https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg",
  },
  {
    id: 2,
    title: "Tarey Bhir",
    description:
      "Stunning viewpoint offering panoramic vistas of rolling hills and the majestic Kanchenjunga range",
    location: "Namchi",
    image: "https://images.pexels.com/photos/462162/pexels-photo-462162.jpeg",
  },
  {
    id: 3,
    title: "Yumthang Valley",
    description:
      "Valley of Flowers with vibrant rhododendrons, primulas, and alpine blooms against snow-capped peaks",
    location: "North Sikkim",
    image: "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg",
  },
  {
    id: 4,
    title: "Zuluk",
    description:
      "Historic Silk Route with dramatic zigzag roads, offering breathtaking sunrise views over the Himalayas",
    location: "East Sikkim",
    image: "https://images.pexels.com/photos/1055058/pexels-photo-1055058.jpeg",
  },
];

const DestinationCard = ({ image, title, description, location }) => {
  return (
    <div className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <img src={image} alt={title} className="w-full h-64 object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-4 flex flex-col justify-end">
        <h3 className="text-white text-xl font-bold">{title}</h3>
        <p className="text-white text-sm">{description}</p>
        <span className="text-white/80 text-xs mt-1">📍 {location}</span>
      </div>
    </div>
  );
};

const DiscoverSikkim = () => {
  return (
    <section className="py-12 text-center">
      <h2 className="text-3xl font-bold mb-2">Discover Sikkim</h2>
      <p className="text-gray-600 mb-8">
        Explore the breathtaking landscapes and hidden gems of the Himalayan
        paradise
      </p>
      <div className="mb-10">
        <p className="text-left text-2xl pl-24 font-bold">Famous Places</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6 max-w-7xl mx-auto">
          {destinations.map((dest) => (
            <DestinationCard key={dest.id} {...dest} />
          ))}
        </div>
      </div>
      <div>
        <p className="text-left text-2xl pl-24 font-bold">Hidden Gems</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6 max-w-7xl mx-auto">
          {hiddenGems.map((dest) => (
            <DestinationCard key={dest.id} {...dest} />
          ))}
        </div>
      </div>

      <button className="mt-10 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300">
        Explore All Destinations →
      </button>
    </section>
  );
};

export default DiscoverSikkim;
