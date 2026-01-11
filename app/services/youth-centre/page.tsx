import Link from 'next/link'

export default function YouthCentrePage() {
  return (
    <main className="min-h-screen bg-stone-100">
      <div className="bg-gradient-to-br from-green-700 to-emerald-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl mb-6">👨‍🎓</div>
          <h1 className="text-5xl font-bold mb-6">Rural Youth Centre</h1>
          <p className="text-xl text-stone-100">
            A dedicated space for rural youth to learn, grow, and prepare for future opportunities.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto py-16 px-4">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-green-700 mb-6">Empowering the Next Generation</h2>
          <p className="text-gray-700 text-lg mb-6">
            The Rural Youth Centre is our commitment to supporting young people in rural communities. We provide a welcoming space where youth can access resources, guidance, and opportunities to shape their futures.
          </p>
          <p className="text-gray-700 text-lg">
            Through education, skill development, and career support, we aim to bridge the gap between rural youth and opportunities for growth and success.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-green-700 mb-6">What We Offer</h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <span className="text-emerald-600 mr-4 text-3xl">📖</span>
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">Education & Career Guidance</h3>
                <p className="text-gray-700 text-lg">
                  Receive personalized counseling on educational pathways, career choices, and professional development. Our advisors help you understand your options and plan your future.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-emerald-600 mr-4 text-3xl">💼</span>
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">Job Search Assistance</h3>
                <p className="text-gray-700 text-lg">
                  Get help with resume writing, interview preparation, and job search strategies. We connect youth with employment opportunities and provide support throughout the application process.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-emerald-600 mr-4 text-3xl">🌟</span>
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">Self-Growth & Skill Development</h3>
                <p className="text-gray-700 text-lg">
                  Participate in workshops and programs focused on developing soft skills, confidence building, communication, and leadership abilities.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-emerald-600 mr-4 text-3xl">📋</span>
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">Government Schemes Awareness</h3>
                <p className="text-gray-700 text-lg">
                  Learn about available government programs, scholarships, skill development schemes, and financial aid opportunities that can support your educational and career goals.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-emerald-600 mr-4 text-3xl">💻</span>
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">Free Wi-Fi & Computer Access for Learning</h3>
                <p className="text-gray-700 text-lg">
                  Access high-speed internet and computer facilities to research, learn online, complete applications, and develop digital skills essential for today's opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-emerald-50 rounded-lg p-8 mb-8 border-2 border-emerald-200">
          <h2 className="text-2xl font-bold text-green-700 mb-4">A Safe Space for Growth</h2>
          <p className="text-gray-700 mb-4">
            The Rural Youth Centre is more than just a facility—it's a community hub where young people can come together, share experiences, support each other, and work towards common goals.
          </p>
          <p className="text-gray-700">
            All our services are free of charge, ensuring that financial constraints don't prevent any youth from accessing opportunities for growth and development.
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