# 🐾 Paws & Play

A premium e-commerce product landing page for a smart interactive dog toy.

## 🔗 Live Demo
[paws-play.vercel.app](https://paws-play.vercel.app)


## ✨ Features
- Playful bright theme with orange accent colors
- Sticky navbar with smooth scroll navigation
- Hero split layout with product image
- 3-column features section with icons
- Interactive image gallery with thumbnail switcher
- Testimonials grid with 5-star ratings
- FAQ accordion with smooth open/close animation
- Buy Now section with success page redirect
- Detailed footer with guarantee badges
- Mobile responsive with hamburger menu

## 💳 Payment Integration
The Buy Now button redirects to a success confirmation page. For real client projects, I integrate:
- **Stripe** — for US/EU/Global clients
- **Razorpay** — for Indian clients
- **PayPal** — for international clients

## 🛠️ Tech Stack
- Next.js 15
- Tailwind CSS
- TypeScript
- Vercel (deployment)

## 🚀 Getting Started
```bash
git clone https://github.com/sweety-HJH223/paws-play.git
cd paws-play
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 📋 How the Buy Flow Works
1. Visitor browses product page
2. Clicks "Buy Now — $49"
3. Lands on order confirmation success page
4. (In real client projects — Stripe checkout in between)

## 📁 Project Structure

```
app/
├── page.tsx                  # Main page
├── success/page.tsx          # Order confirmation page
└── globals.css               # Global styles

components/paws-play/
├── navbar.tsx                # Sticky nav + hamburger
├── hero-section.tsx          # Split hero layout
├── features-section.tsx      # 3 feature cards
├── image-gallery.tsx         # Thumbnail carousel
├── testimonials-section.tsx  # Review cards
├── faq-section.tsx           # Accordion FAQ
├── buy-now-section.tsx       # CTA + buy button
└── footer.tsx                # Detailed footer
```
## 👩‍💻 Built By
**SweetyCodes** — [sweetycodes-jh.vercel.app](https://sweetycodes-jh.vercel.app/)
