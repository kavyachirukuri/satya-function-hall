import Link from 'next/link'

export default function SahajaYogaPage() {
  return (
    <main className="min-h-screen bg-stone-100">
      <div className="bg-gradient-to-br from-green-700 to-emerald-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl mb-6">🧘‍♀️</div>
          <h1 className="text-5xl font-bold mb-6">Sahaja Yoga Dhyana Kendram</h1>
          <p className="text-xl text-stone-100">
            A peaceful meditation and yoga center dedicated to mental, physical, and spiritual well-being.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto py-16 px-4">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-green-700 mb-6">About Our Center</h2>
          <p className="text-gray-700 text-lg mb-6">
            The Sahaja Yoga Dhyana Kendram offers a serene environment for individuals seeking inner peace and spiritual growth. Our center welcomes people of all ages and backgrounds to experience the transformative power of meditation and yoga.
          </p>
          <p className="text-gray-700 text-lg">
            We believe that everyone deserves access to tools for mental and spiritual well-being, which is why all our classes and sessions are completely free of charge.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-green-700 mb-6">What We Offer</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-emerald-600 mr-3 text-2xl">•</span>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Free Yoga & Meditation Classes</h3>
                <p className="text-gray-700">Regular sessions to help you develop a consistent practice for physical and mental wellness.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-emerald-600 mr-3 text-2xl">•</span>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Open to All Age Groups</h3>
                <p className="text-gray-700">Our programs are designed to accommodate children, adults, and seniors.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-emerald-600 mr-3 text-2xl">•</span>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Calm and Natural Environment</h3>
                <p className="text-gray-700">Practice in a peaceful setting that promotes relaxation and inner connection.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-emerald-600 mr-3 text-2xl">•</span>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">No Registration or Fees Required</h3>
                <p className="text-gray-700">Simply walk in and join our community. All services are completely free.</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="bg-emerald-50 rounded-lg p-8 mb-8 border-2 border-emerald-200">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Learn More</h2>
          <p className="text-gray-700 mb-4">
            To learn more about Sahaja Yoga, visit the official Sahaja Yoga website and explore our YouTube playlist.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="https://sahajayoga.org.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition text-center"
            >
              🔗 Visit Sahaja Yoga Website
            </Link>
            <Link
              href="https://youtube.com/playlist?list=PLKXZPAdVuCnEZRAD7aEMs2xWhgkibg9Xj&si=DkmqxSkkc0dUtKe9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition text-center"
            >
              📺 Watch YouTube Playlist
            </Link>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/"
            className="inline-block bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  )
}