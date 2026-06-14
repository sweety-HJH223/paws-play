'use client';

export function HeroSection() {
  const handleGetYours = () => {
    const buySection = document.getElementById('buy-section');
    buySection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="w-full bg-white py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight text-balance">
              Keep Your Pup Entertained, Even When You&apos;re Away.
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mt-6 leading-relaxed text-balance">
              The smart interactive toy that moves, plays, and reacts to your dog automatically.
            </p>
            <button
              onClick={handleGetYours}
              className="mt-8 inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-2xl transition transform hover:scale-105 w-fit"
            >
              Get Yours Now — $49
            </button>
          </div>

          {/* Right Side - Product Image */}
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&auto=format&fit=crop"
              alt="Smart Interactive Dog Toy"
              className="w-full max-w-md rounded-3xl shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
