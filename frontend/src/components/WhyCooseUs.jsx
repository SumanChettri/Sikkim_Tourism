// WhyChooseUs.jsx
import FeatureCard from "./FeatureCard";
import { FaCompass, FaMapMarkedAlt, FaCar } from "react-icons/fa";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <FaCompass className="text-blue-500 text-xl" />,
      title: "AI-Powered Itinerary Planning",
      description:
        "Get personalized travel itineraries crafted by advanced AI algorithms. Our system analyzes your preferences, budget, and travel dates to create the perfect Sikkim adventure tailored just for you.",
      linkText: "Smart Planning",
      linkColor: "#3B82F6", // Tailwind blue-500
    },
    {
      icon: <FaMapMarkedAlt className="text-green-500 text-xl" />,
      title: "Hidden Gems of Sikkim",
      description:
        "Discover secret locations and off-the-beaten-path destinations that only locals know. Our curated database includes hidden waterfalls, secluded monasteries, and breathtaking viewpoints away from tourist crowds.",
      linkText: "Exclusive Access",
      linkColor: "#10B981", // Tailwind green-500
    },
    {
      icon: <FaCar className="text-orange-500 text-xl" />,
      title: "Local Taxi & Guide Booking",
      description:
        "Book verified local drivers and experienced guides with just one click. All our partners are background-checked, licensed, and speak multiple languages to ensure your safety and comfort throughout your journey.",
      linkText: "Trusted Partners",
      linkColor: "#F97316", // Tailwind orange-500
    },
  ];

  return (
    <section className="py-8 ">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-4 ">
          Why Choose Our AI Travel Planner
        </h2>
        <p className=" mb-12 ">
          Experience the future of travel planning with our intelligent platform
          designed specifically for exploring the beautiful landscapes of Sikkim
        </p>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3 justify-items-center">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        {/* Button */}
        <div className="mt-12">
          <a
            href="#"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-semibold inline-flex items-center gap-2"
          >
            Start Planning Your Trip →
          </a>
        </div>
      </div>
    </section>
  );
}
