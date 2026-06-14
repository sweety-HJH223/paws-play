'use client'

import { useState } from 'react'

const faqs = [
  {
    question: 'Is it safe for all dog sizes?',
    answer: 'Yes! Paws & Play is designed for all dog sizes — from tiny chihuahuas to large labs. The materials are non-toxic and chew-proof.',
  },
  {
    question: 'How does the auto-play mode work?',
    answer: 'The toy moves automatically at random intervals to keep your dog engaged. You can set the intensity and schedule from the app.',
  },
  {
    question: 'Do I need a smartphone to use it?',
    answer: 'No! The toy works perfectly in auto-play mode without any app. The app is optional for extra control and scheduling.',
  },
  {
    question: 'What is your return policy?',
    answer: 'We offer a 30-day money back guarantee. If your pup does not love it, we will give you a full refund — no questions asked.',
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="w-full bg-white py-12 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition"
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                <span className="text-orange-500 text-2xl font-bold ml-4">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}