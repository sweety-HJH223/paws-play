'use client';

export function FeaturesSection() {
  const features = [
    {
      title: 'Auto-Play Mode',
      description: 'Moves automatically throughout the day to keep your pup engaged and active.',
      icon: '⚡',
    },
    {
      title: 'App Controlled',
      description: 'Control the toy from your phone to play with your dog anytime, anywhere.',
      icon: '📱',
    },
    {
      title: 'Safe Materials',
      description: 'Made with non-toxic, chew-proof materials that are safe for all dog sizes.',
      icon: '✓',
    },
  ];

  return (
    <section id="features" className="w-full bg-gray-50 py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12 text-balance">
          Why Dogs Love Paws & Play
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-700 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
