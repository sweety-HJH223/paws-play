'use client'

export function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-3">
              Paws & Play <span className="text-orange-500">🐾</span>
            </h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              The smart interactive dog toy that keeps your pup happy, healthy and entertained — even when you're away.
            </p>
            <div className="flex gap-3">
              <span className="bg-orange-500/10 text-orange-400 text-xs font-semibold px-3 py-1 rounded-full border border-orange-500/20">
                🐶 Dog Approved
              </span>
              <span className="bg-green-500/10 text-green-400 text-xs font-semibold px-3 py-1 rounded-full border border-green-500/20">
                ✅ Non-Toxic
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#features" className="text-gray-400 hover:text-orange-500 transition text-sm">Features</a></li>
              <li><a href="#reviews" className="text-gray-400 hover:text-orange-500 transition text-sm">Reviews</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-orange-500 transition text-sm">FAQ</a></li>
              <li><a href="#buy-section" className="text-gray-400 hover:text-orange-500 transition text-sm">Buy Now</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Support</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition text-sm">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition text-sm">Shipping Info</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition text-sm">Returns & Refunds</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition text-sm">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Guarantee bar */}
        <div className="bg-gray-800 rounded-2xl p-6 mb-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <p className="text-2xl mb-1">🛡️</p>
            <p className="text-white font-semibold text-sm">30-Day Money Back</p>
            <p className="text-gray-400 text-xs mt-1">No questions asked</p>
          </div>
          <div>
            <p className="text-2xl mb-1">🚚</p>
            <p className="text-white font-semibold text-sm">Free Shipping</p>
            <p className="text-gray-400 text-xs mt-1">On all orders over $35</p>
          </div>
          <div>
            <p className="text-2xl mb-1">⭐</p>
            <p className="text-white font-semibold text-sm">4.9/5 Rating</p>
            <p className="text-gray-400 text-xs mt-1">From 2,400+ happy owners</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">© 2024 Paws & Play Inc. All rights reserved.</p>
          <p className="text-gray-500 text-sm">
            Made with ❤️ for dogs everywhere 🐾
          </p>
        </div>

      </div>
    </footer>
  )
}