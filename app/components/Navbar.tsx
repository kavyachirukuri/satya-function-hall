'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-stone-100 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition whitespace-nowrap">
            <div className="relative h-10 w-10 md:h-12 md:w-12 flex-shrink-0">
              <Image
                src="/logo.png"
                alt="Satya Social Welfare Trust Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-green-700 text-xl font-bold whitespace-nowrap">
              Satya Social Welfare Trust
            </span>
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-emerald-600 hover:text-green-700 transition">
              Home
            </Link>
            <Link href="#services" className="text-emerald-600 hover:text-green-700 transition">
              Services
            </Link>
            <Link href="#contact" className="text-emerald-600 hover:text-green-700 transition">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}