"use client";
import { FaUserTie } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import { FaWallet } from "react-icons/fa";

export default function GetToKnowUs() {
  return (
    <section className=" rounded-xl p-2 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
      {/* Text Content */}
      <div className="flex-1">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Get to Know Us
        </h2>
        <h3 className="text-lg text-blue-600 font-semibold mb-4">
          Plan Your Trip with Sikkim Explorer
        </h3>
        <p className="text-gray-600 leading-relaxed mb-6">
          We specialize in connecting travelers with authentic local experiences
          through our innovative AI-powered trip planning platform. Our mission
          is to make exploring Sikkim's breathtaking landscapes and rich culture
          accessible, personalized, and unforgettable for every adventurer.
        </p>

        {/* Features List */}
        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <div className="bg-blue-100 text-blue-600 p-2 rounded-full">
              <FaUserTie size={20} />
            </div>
            <div>
              <h4 className="font-bold">Expert Local Guides</h4>
              <p className="text-gray-500 text-sm">
                Experienced professionals who know every hidden gem
              </p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <div className="bg-yellow-100 text-yellow-600 p-2 rounded-full">
              <FaLink size={20} />
            </div>
            <div>
              <h4 className="font-bold">Flexible Trips</h4>
              <p className="text-gray-500 text-sm">
                Customizable itineraries that adapt to your preferences
              </p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <div className="bg-green-100 text-green-600 p-2 rounded-full">
              <FaWallet size={20} />
            </div>
            <div>
              <h4 className="font-bold">Affordable Packages</h4>
              <p className="text-gray-500 text-sm">
                Best value trips without compromising on quality
              </p>
            </div>
          </li>
        </ul>
      </div>

      {/* Image */}
      <div className="flex-1 relative">
        <img
          src="https://www.esikkimtourism.in/wp-content/uploads/2019/04/topmarch.jpg"
          alt="Sikkim landscape"
          className="rounded-2xl shadow-lg w-full object-cover"
        />
        <div className="absolute bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg">
          ▲
        </div>
      </div>
    </section>
  );
}
