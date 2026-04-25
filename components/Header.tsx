'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-[#1B2A4A] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-white font-bold text-xl tracking-tight">
            SE Gutter Cleaning
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-gray-200 hover:text-white transition-colors text-sm font-medium">
              Home
            </Link>
            <Link href="/gutter-cleaning/" className="text-gray-200 hover:text-white transition-colors text-sm font-medium">
              Gutter Cleaning
            </Link>
            <Link href="/about/" className="text-gray-200 hover:text-white transition-colors text-sm font-medium">
              About
            </Link>
            <Link
              href="/get-a-quote/"
              className="bg-[#2ECC71] hover:bg-green-500 text-white text-sm font-semibold px-4 py-2 rounded transition-colors"
            >
              Get a Free Quote
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden pb-4 flex flex-col gap-3">
            <Link href="/" className="text-gray-200 hover:text-white text-sm font-medium py-2 border-b border-[#0F1A30]" onClick={() => setMobileOpen(false)}>
              Home
            </Link>
            <Link href="/gutter-cleaning/" className="text-gray-200 hover:text-white text-sm font-medium py-2 border-b border-[#0F1A30]" onClick={() => setMobileOpen(false)}>
              Gutter Cleaning
            </Link>
            <Link href="/about/" className="text-gray-200 hover:text-white text-sm font-medium py-2 border-b border-[#0F1A30]" onClick={() => setMobileOpen(false)}>
              About
            </Link>
            <Link
              href="/get-a-quote/"
              className="bg-[#2ECC71] hover:bg-green-500 text-white text-sm font-semibold px-4 py-2 rounded text-center"
              onClick={() => setMobileOpen(false)}
            >
              Get a Free Quote
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}
