'use client';

export function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'Portland, OR',
      review: 'My golden retriever is absolutely obsessed with Paws & Play! The auto-play mode keeps him entertained for hours while I work. Best purchase ever!',
    },
    {
      name: 'Marcus Chen',
      location: 'Seattle, WA',
      review: 'Finally a toy that understands my busy schedule. I can control it from the app and my corgi goes crazy. Highly recommend!',
    },
    {
      name: 'Emma Rodriguez',
      location: 'Austin, TX',
      review: 'The quality and durability are incredible. My lab has been using it for months with zero signs of wear. Worth every penny!',
    },
  ];

  return (
    <section id="reviews" className="w-full bg-gray-50 py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12 text-balance">
          Happy Pups, Happy Owners
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl shadow-md hover:shadow-lg transition">
              {/* Avatar */}
              <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-orange-100 border-4 border-orange-500 flex items-center justify-center text-2xl">
  🐾
</div>
              </div>

              {/* Stars */}
              <div className="flex justify-center mb-4">
              <span className="text-2xl text-yellow-400">★★★★★</span>
              </div>

              {/* Review Text */}
              <p className="text-gray-700 text-center mb-6 leading-relaxed italic">&quot;{testimonial.review}&quot;</p>

              {/* Name and Location */}
              <div className="text-center">
                <p className="font-bold text-gray-900">{testimonial.name}</p>
                <p className="text-gray-500 text-sm">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
