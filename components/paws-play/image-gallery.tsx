'use client';

import { useState } from 'react';

export function ImageGallery() {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=800&q=80', // Dog with a toy
    'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=800&q=80', // Dog with toy in mouth
    'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=800&q=80', // Dog playing with a rope/doll toy
    'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=800&q=80', // Dog with a ball toy
    'https://images.unsplash.com/photo-1585664811087-47f65abbad64?w=800&q=80', // Dog with a small plushie
  ];

  return (
    <section className="w-full bg-white py-12 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12 text-balance">
          See It in Action
        </h2>

        {/* Main Image with smooth transition */}
        <div className="mb-8 overflow-hidden rounded-3xl shadow-lg">
          <img
            src={images[activeIndex]}
            alt={`Gallery image ${activeIndex + 1}`}
            className="w-full h-96 object-cover transition-opacity duration-300"
          />
        </div>

        {/* Thumbnail Gallery */}
        <div className="flex gap-4 justify-center overflow-x-auto pb-4">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`flex-shrink-0 w-20 h-20 rounded-2xl overflow-hidden transition-all ${
                activeIndex === index ? 'ring-4 ring-orange-500 scale-110' : 'opacity-60 hover:opacity-100'
              }`}
            >
              <img src={image} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
