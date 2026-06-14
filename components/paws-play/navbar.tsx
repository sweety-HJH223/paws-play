'use client';

import { useState, useEffect } from 'react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleGetYours = () => {
    const buySection = document.getElementById('buy-section');
    buySection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 text-2xl font-bold">
            <span className="text-gray-900">Paws & Play</span>
            <span className="text-orange-500 ml-2">🐾</span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-orange-500 transition font-medium">
              Features
            </a>
            <a href="#reviews" className="text-gray-700 hover:text-orange-500 transition font-medium">
              Reviews
            </a>
            <a href="#faq" className="text-gray-700 hover:text-orange-500 transition font-medium">
              FAQ
            </a>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={handleGetYours}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-2xl transition"
            >
              Get Yours — $49
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-orange-500 transition"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-3">
            <a href="#features" className="block text-gray-700 hover:text-orange-500 transition font-medium">
              Features
            </a>
            <a href="#reviews" className="block text-gray-700 hover:text-orange-500 transition font-medium">
              Reviews
            </a>
            <a href="#faq" className="block text-gray-700 hover:text-orange-500 transition font-medium">
              FAQ
            </a>
            <button
              onClick={handleGetYours}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-2xl transition"
            >
              Get Yours — $49
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
