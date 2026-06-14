'use client';

export function BuyNowSection() {
  const features = [
    'Smart interactive toy with app control',
    'Auto-play mode to keep your pup engaged',
    'Safe, non-toxic, chew-proof materials',
    'Works with all dog sizes and breeds',
  ];

  return (
    <section id="buy-section" className="w-full bg-gradient-to-br from-orange-50 to-blue-50 py-12 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          {/* Product Name */}
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-2 text-balance">
            Paws & Play Smart Toy
          </h2>

          {/* Price */}
          <div className="text-center mb-8">
            <p className="text-5xl md:text-6xl font-bold text-orange-500">$49</p>
          </div>

          {/* What's Included */}
          <div className="mb-8">
            <p className="text-center font-semibold text-gray-900 mb-4">What&apos;s Included:</p>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="text-orange-500 font-bold text-lg">✓</span>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Button */}
          <a
            href="/success"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-2xl text-center transition transform hover:scale-105 mb-6 text-lg"
          >
            Buy Now — $49
          </a>

          {/* Money Back Guarantee */}
          <p className="text-center text-gray-600 text-sm">
            🛡️ 30-day money back guarantee - 100% satisfaction or your money back!
          </p>
        </div>
      </div>
    </section>
  );
}
