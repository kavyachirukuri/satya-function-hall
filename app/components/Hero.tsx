'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-green-600 via-green-500 to-green-400 text-white min-h-screen flex items-center py-20 px-4">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left: Text Content */}
          <div className="flex-1 text-center md:text-left">
          <motion.h3
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xl md:text-2xl mb-6"
            >
              With Her Holiness Shri Mataji Nirmala Devi Blessings... 
            </motion.h3>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Satya Social Welfare Trust
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl mb-4 font-light"
            >
              Serving Society. Empowering Lives. Building the Future as per the teachings of H.H.Shri Mataji Nirmala Devi through Sahaja Yoga.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-md md:text-lg mb-10 text-stone-100"
            >
              Satya Social Welfare Trust is a non-profit organization dedicated to spiritual wellness, rural development, farmer support, and youth empowerment. Our initiatives are rooted in service, accessibility, and social responsibility.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="#services"
                  className="bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-stone-100 transition shadow-lg inline-flex items-center justify-center min-h-[48px]"
                >
                  Explore Our Services
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="#contact"
                  className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition border-2 border-white inline-flex items-center justify-center min-h-[48px] box-border"
                >
                  Contact Us
                </Link>
              </motion.div>
            </motion.div>
          </div>
          {/* Right: Logo/Visual */}
          <div className="flex-1 flex justify-center items-center w-full md:w-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-full max-w-xs sm:max-w-sm md:max-w-md aspect-square flex items-center justify-center min-h-[250px] sm:min-h-[300px] md:min-h-0"
            >
              <div className="relative w-full h-full">
                <Image
                  src="/logo.png"
                  alt="Satya Social Welfare Trust Logo"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}