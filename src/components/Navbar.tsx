'use client'

import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-600">
          Portofolioku
        </Link>
        <div className="space-x-4">
          <Link href="#projects" className="text-gray-600 hover:text-blue-600">
            Projects
          </Link>
          <Link href="#contact" className="text-gray-600 hover:text-blue-600">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}
