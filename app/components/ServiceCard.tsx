'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

interface ServiceCardProps {
  icon: string
  title: string
  description: string
  features: string[]
  linkText?: string
  linkUrl?: string
  ctaText?: string
  ctaUrl?: string
  contact?: {
    location?: string
    phone?: string
  }
}

export default function ServiceCard({
  icon,
  title,
  description,
  features,
  linkText,
  linkUrl,
  ctaText,
  ctaUrl,
  contact,
}: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="bg-white rounded-lg shadow-lg p-8 border border-stone-200 hover:shadow-xl transition-all duration-300 cursor-pointer"
    >
      <div className="flex items-center gap-5">
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ duration: 0.3 }}
        className="text-4xl mb-4 inline-block"
      >
       {icon} 
      </motion.div>
      <h3 className="text-2xl font-bold text-green-700 mb-4">{title}</h3>
      </div>

      <p className="text-gray-700 mb-6">{description}</p>
      
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-emerald-600 mr-2">•</span>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>

      {linkUrl && linkText && (
        <div className="mb-4">
          <Link
            href={linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-600 hover:text-green-700 underline font-medium"
          >
            🔗 {linkText}
          </Link>
        </div>
      )}

      {contact && (
        <div className="mb-4 space-y-2 text-gray-700">
          {contact.location && (
            <div className="flex items-start">
              <span className="mr-2">📍</span>
              <span>{contact.location}</span>
            </div>
          )}
          {contact.phone && (
            <div className="flex items-start">
              <span className="mr-2">📞</span>
              <span>{contact.phone}</span>
            </div>
          )}
        </div>
      )}

      {ctaUrl && ctaText && (
        <Link
          href={ctaUrl}
          className="inline-block bg-green-700 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-800 transition mt-4"
        >
          {ctaText}
        </Link>
      )}
    </motion.div>
  )
}