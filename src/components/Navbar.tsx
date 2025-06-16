'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Globe, Menu, X } from 'lucide-react'

const markets = [
  { name: 'UAE', count: '920 new buildings' },
  { name: 'Turkey', count: '1077 new buildings' },
  { name: 'Thailand', count: '574 new buildings' },
  { name: 'Indonesia', count: '243 new buildings' },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-primary">
            HouseArch
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/markets" className="text-gray-600 hover:text-primary">
              Markets
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-primary">
              Blog
            </Link>
            <Link href="/developers" className="text-gray-600 hover:text-primary">
              Developers
            </Link>
            <button
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              className="flex items-center space-x-2 text-gray-600 hover:text-primary"
            >
              <Globe className="h-5 w-5" />
              <span>English</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link href="/markets" className="text-gray-600 hover:text-primary">
                Markets
              </Link>
              <Link href="/blog" className="text-gray-600 hover:text-primary">
                Blog
              </Link>
              <Link href="/developers" className="text-gray-600 hover:text-primary">
                Developers
              </Link>
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center space-x-2 text-gray-600 hover:text-primary"
              >
                <Globe className="h-5 w-5" />
                <span>English</span>
              </button>
            </div>
          </div>
        )}

        {/* Language Dropdown */}
        {isLanguageOpen && (
          <div className="absolute right-4 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
            <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
              English
            </button>
            <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
              العربية
            </button>
            <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
              Türkçe
            </button>
          </div>
        )}
      </div>
    </nav>
  )
} 