import Link from 'next/link'

export default function FarmersPage() {
  return (
    <main className="min-h-screen bg-stone-100">
      <div className="bg-gradient-to-br from-green-700 to-emerald-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl mb-6">🌾</div>
          <h1 className="text-5xl font-bold mb-6">Farmer's Service</h1>
          <p className="text-xl text-stone-100">
            Practical guidance and information to support farmers in making informed decisions.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto py-16 px-4">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-green-700 mb-6">Supporting Our Farming Community</h2>
          <p className="text-gray-700 text-lg mb-6">
            At Satya Social Welfare Trust, we recognize the vital role that farmers play in our society. Our Farmer's Service program is designed to empower farmers with the knowledge and information they need to succeed.
          </p>
          <p className="text-gray-700 text-lg">
            We provide free guidance and support to help farmers make informed decisions about their land, crops, and agricultural practices.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-green-700 mb-6">Our Services</h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <span className="text-emerald-600 mr-4 text-3xl">🌱</span>
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">Land-Related Information</h3>
                <p className="text-gray-700 text-lg">
                  Get assistance with land documentation, soil quality information, and property-related queries. We help you understand your land rights and available resources.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-emerald-600 mr-4 text-3xl">🌾</span>
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">Crop Selection & Cultivation Guidance</h3>
                <p className="text-gray-700 text-lg">
                  Receive expert advice on choosing the right crops for your land, understanding seasonal patterns, and implementing best practices for cultivation and yield optimization.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-emerald-600 mr-4 text-3xl">👨‍🌾</span>
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">Farmer-Focused Advisory Support</h3>
                <p className="text-gray-700 text-lg">
                  Access personalized guidance tailored to your specific farming situation. Our advisors work with you to address your unique challenges and opportunities.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-emerald-600 mr-4 text-3xl">📚</span>
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">Awareness of Agricultural Practices</h3>
                <p className="text-gray-700 text-lg">
                  Learn about modern farming techniques, sustainable practices, organic farming methods, and how to adapt to changing agricultural landscapes.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-emerald-50 rounded-lg p-8 mb-8 border-2 border-emerald-200">
          <h2 className="text-2xl font-bold text-green-700 mb-4">How We Can Help</h2>
          <p className="text-gray-700 mb-4">
            Our team is committed to supporting farmers through free consultations and information sharing. Whether you're facing challenges with crop selection, need help understanding government schemes, or want to explore new farming techniques, we're here to help.
          </p>
          <p className="text-gray-700">
            Visit our center or contact us to learn more about how we can support your farming journey.
          </p>
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