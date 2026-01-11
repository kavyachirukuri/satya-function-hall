'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function FunctionHallPage() {
  // Place your video file in the public folder
  // Example: public/function-hall-video.mp4
  // Then update the videoSrc to: '/function-hall-video.mp4'
  const videoSrc = '/function-hall-video.mp4' // Update with your actual video filename

  return (
    <main className="min-h-screen bg-stone-100">
      <div className="bg-gradient-to-br from-green-700 to-emerald-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl mb-6">🏛</div>
          <h1 className="text-5xl font-bold mb-6">Satya Function Hall</h1>
          <p className="text-xl text-stone-100">
            An affordable and spacious venue for weddings, receptions, and community events.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-16 px-4">
        {/* Video Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Video Container */}
            <div className="flex-1 flex justify-center">
              <div className="relative bg-black rounded-lg overflow-hidden shadow-2xl w-full max-w-[280px] aspect-[9/16]">
                <video
                  className="w-full h-full"
                  controls
                  preload="metadata"
                  poster="/function-hall-poster.jpg"
                  style={{ objectFit: 'contain' }}
                >
                  <source src={videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            {/* Details */}
            <div className="flex-1 bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-green-700 mb-4">Tour Our Venue</h2>
              <p className="text-gray-700 text-lg mb-4">
                Take a virtual tour of our spacious function hall. Experience the elegant ambiance, modern facilities, and beautiful green surroundings that make Satya Function Hall the perfect choice for your special events.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">✓</span>
                  <span>Spacious halls for up to 1000 guests</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">✓</span>
                  <span>Modern amenities and facilities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">✓</span>
                  <span>Beautiful natural surroundings</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">✓</span>
                  <span>Easy access and parking</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.section>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-lg shadow-lg p-8 mb-8"
          >
            <h2 className="text-3xl font-bold text-green-700 mb-6">About Our Venue</h2>
            <p className="text-gray-700 text-lg mb-6">
              Satya Function Hall provides an ideal setting for your special occasions. Located in a serene environment with easy access, our venue combines spacious facilities with natural beauty to make your events memorable.
            </p>
            <p className="text-gray-700 text-lg">
              We understand the importance of affordable options for the community, which is why we offer competitive pricing while maintaining high-quality facilities.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-lg shadow-lg p-8 mb-8"
          >
            <h2 className="text-3xl font-bold text-green-700 mb-6">Facilities & Amenities</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-emerald-600 mr-3 text-2xl">•</span>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">AC & Non-AC Halls Available</h3>
                    <p className="text-gray-700">Choose the option that best fits your needs and budget.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-emerald-600 mr-3 text-2xl">•</span>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Seating Capacity up to 1000 People</h3>
                    <p className="text-gray-700">Spacious enough to accommodate large gatherings comfortably.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-emerald-600 mr-3 text-2xl">•</span>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Large Stage for Custom Decoration</h3>
                    <p className="text-gray-700">Ample space to personalize your event setup.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-emerald-600 mr-3 text-2xl">•</span>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Kitchen & Dining Facilities</h3>
                    <p className="text-gray-700">Fully equipped kitchen for catering your event.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-emerald-600 mr-3 text-2xl">•</span>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Green Surroundings</h3>
                    <p className="text-gray-700">Beautiful natural environment with easy access.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-emerald-50 rounded-lg p-8 mb-8 border-2 border-emerald-200"
          >
            <h2 className="text-3xl font-bold text-green-700 mb-6">Contact Us</h2>
            <div className="space-y-4 text-gray-700">
              <div className="flex items-start">
                <span className="text-2xl mr-4">📍</span>
                <div>
                  <h3 className="font-semibold mb-1">Location</h3>
                  <p className="text-lg">Rajupalem Road, Gollalamamidada</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-2xl mr-4">📞</span>
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-lg">9848118765 / 8008135757</p>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <p className="text-gray-700 mb-4">
                For bookings and inquiries, please contact us at the numbers above. We'd be happy to discuss your event requirements and availability.
              </p>
            </div>
          </motion.div>

          <div className="text-center">
            <Link
              href="/"
              className="inline-block bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}