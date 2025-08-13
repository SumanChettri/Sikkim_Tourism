"use client";
import React, { useState } from "react";

export default function Gallery() {
const adminImages = [
  {
    id: "1",
    src: "https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg",
    alt: "Mountain view with sunrise",
    location: "Himalayan Sunrise, Gangtok",
  },
  {
    id: "2",
    src: "https://images.pexels.com/photos/462162/pexels-photo-462162.jpeg",
    alt: "Sunset over calm lake",
    location: "Tsomgo Lake, East Sikkim",
  },
  {
    id: "3",
    src: "https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg",
    alt: "People enjoying a cultural festival",
    location: "Pang Lhabsol Festival, Gangtok",
  },
  {
    id: "4",
    src: "https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg",
    alt: "People enjoying a cultural festival",
    location: "Losar Celebration, Sikkim",
  },
];

const touristImages = [
  {
    id: "5",
    src: "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg",
    alt: "Sunset reflecting on a mountain lake",
    location: "Khecheopalri Lake, West Sikkim",
  },
  {
    id: "6",
    src: "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg",
    alt: "Sunset reflecting on a mountain lake",
    location: "Gurudongmar Lake, North Sikkim",
  },
  {
    id: "7",
    src: "https://images.pexels.com/photos/1055058/pexels-photo-1055058.jpeg",
    alt: "Busy street market",
    location: "MG Marg Market, Gangtok",
  },
  {
    id: "8",
    src: "https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg",
    alt: "Local food served at an outdoor market",
    location: "Street Food Stalls, Namchi",
  },
];


  const [selectedImage, setSelectedImage] = useState(null);

  const renderGallerySection = (title, images) => (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-6 border-b border-gray-300 pb-2">
        {title}
      </h2>
      <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4">
        {images.map((img) => (
          <div
            key={img.id}
            className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl"
            onClick={() => setSelectedImage(img.src)}
          >
            <img
              src={img.src}
              alt={img.alt || "Gallery image"}
              className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
            />
            {/* Text Overlay */}
            <div className="absolute bottom-0 left-0 w-full bg-black/50 text-white text-sm p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {img.location}
            </div>
          </div>
        ))}
      </div>
    </section>
  );

  return (
    <div className="section-padding container-custom max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold mb-8 text-gray-800 tracking-tight">
        Gallery
      </h1>

      {renderGallerySection("Our Gallery", adminImages)}
      {renderGallerySection("Tourist Gallery", touristImages)}

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Preview"
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
          />
        </div>
      )}
    </div>
  );
}
