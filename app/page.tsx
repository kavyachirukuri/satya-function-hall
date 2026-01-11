'use client'

import Hero from './components/Hero'
import ServiceCard from './components/ServiceCard'
import Link from 'next/link'
import { motion } from 'framer-motion'

const services = [
  {
    icon: '🧘‍♀️',
    title: 'Sahaja Yoga Dhyana Kendram',
    description: 'A peaceful meditation and yoga center dedicated to mental, physical, and spiritual well-being.',
    features: [
      'Free yoga & meditation classes',
      'Open to all age groups',
      'Calm and natural environment',
      'No registration or fees required',
    ],
    linkText: 'Click to visit the Sahaja Yoga website',
    linkUrl: 'https://sahajayoga.org.in/',
    ctaText: 'Learn More',
    ctaUrl: '/services/sahajayoga',
  },
  {
    icon: ' 🏛   ',
    title: ' Satya Function Hall',
    description: 'An affordable and spacious venue for weddings, receptions, and community events.',
    features: [
      'AC & Non-AC halls available',
      'Seating capacity up to 1000 people',
      'Large stage for custom decoration',
      'Kitchen & dining facilities',
      'Green surroundings with easy access',
    ],
    ctaText: 'View Details',
    ctaUrl: '/services/function-hall',
  },
  {
    icon: '🌾',
    title: "Farmer's Service",
    description: 'Practical guidance and information to support farmers in making informed decisions.',
    features: [
      'Land-related information',
      'Crop selection & cultivation guidance',
      'Farmer-focused advisory support',
      'Awareness of agricultural practices',
    ],
    ctaText: 'Explore Farmer Services',
    ctaUrl: '/services/farmers',
  },
  {
    icon: '👨‍🎓',
    title: 'Rural Youth Centre',
    description: 'A dedicated space for rural youth to learn, grow, and prepare for future opportunities.',
    features: [
      'Education, career guidance & Job search assistance',
      'Self-growth & skill development',
      'Government schemes awareness',
      'Free Wi-Fi & computer access for learning',
    ],
    ctaText: 'Visit Youth Centre',
    ctaUrl: '/services/youth-centre',
  },
]

const impactPoints = [
  'Community-focused initiatives',
  'Free & affordable services',
  'Inclusive and accessible programs',
  'Strong commitment to social welfare',
]

export default function Home() {
  return (
    <main>
      <Hero />

      {/* About Section */}
      <section className="py-16 px-4 bg-stone-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-green-700 mb-6 text-center">
              Who We Are
            </h2>
            <div className="max-w-4xl mx-auto text-center space-y-4 text-gray-700 text-lg">
              <p>
                Satya Social Welfare Trust works at the grassroots level to support individuals and communities through meaningful social, spiritual, and educational initiatives. Our focus is on creating long-term impact by providing free guidance, affordable facilities, and learning opportunities for all.
              </p>
              <p className="font-semibold text-emerald-600">
                We believe true development begins with inner well-being, informed farming, and empowered youth.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-green-700 mb-12 text-center"
          >
            Our Services
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 px-4 bg-emerald-50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-green-700 mb-8 text-center"
          >
            Why Choose Us
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {impactPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <div className="text-3xl mb-3">✔</div>
                <p className="text-gray-700 font-semibold">{point}</p>
              </motion.div>
            ))}
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center text-lg text-gray-700 font-medium italic"
          >
            We don't just provide services — we build opportunities and confidence.
          </motion.p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-green-700 to-emerald-600 text-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-6">
            Be a Part of Positive Change
          </h2>
          <p className="text-xl mb-10 text-stone-100">
            Whether you are seeking inner peace, a venue for your celebration, farming guidance, or learning opportunities — Satya Social Welfare Trust is here to support you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="#contact"
                className="bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-stone-100 transition shadow-lg inline-flex items-center justify-center min-h-[48px]"
              >
                Get in Touch
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="#services"
                className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition border-2 border-white inline-flex items-center justify-center min-h-[48px] box-border"
              >
                Visit Our Services
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </main>
  )
}