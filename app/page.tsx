import { Navbar } from '@/components/paws-play/navbar'
import { HeroSection } from '@/components/paws-play/hero-section'
import { FeaturesSection } from '@/components/paws-play/features-section'
import { ImageGallery } from '@/components/paws-play/image-gallery'
import { TestimonialsSection } from '@/components/paws-play/testimonials-section'
import { FaqSection } from '@/components/paws-play/faq-section'
import { BuyNowSection } from '@/components/paws-play/buy-now-section'
import { Footer } from '@/components/paws-play/footer'

export const metadata = {
  title: 'Paws & Play - Smart Interactive Dog Toy | Keep Your Pup Happy',
  description: 'The smart interactive dog toy that moves, plays, and reacts automatically.',
}

export default function Home() {
  return (
    <main className="w-full bg-white">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <ImageGallery />
      <TestimonialsSection />
      <FaqSection />
      <BuyNowSection />
      <Footer />
    </main>
  )
}