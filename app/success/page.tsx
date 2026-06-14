export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-md w-full text-center">
        <div className="text-6xl mb-6">🐾</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Order Confirmed!
        </h1>
        <p className="text-gray-600 mb-6">
          Thank you for your purchase! Your Paws and Play Smart Toy is on its way. Your pup is going to love it!
        </p>
        <div className="bg-orange-50 rounded-2xl p-4 mb-8">
          <p className="text-orange-600 font-semibold text-sm">
            📦 Estimated delivery: 3-5 business days
          </p>
        </div>
        <a href="/" className="block w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-2xl text-center transition">
          Back to Home
        </a>
      </div>
    </main>
  )
}