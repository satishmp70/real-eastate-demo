'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import { Search, Building2 } from 'lucide-react'

const developers = [
  {
    id: 1,
    name: 'Emaar Properties',
    country: 'UAE',
    count: '137 new buildings',
    description: 'Emaar Properties is one of the world\'s most valuable and admired real estate development companies. With proven competencies in properties, shopping malls & retail, and hospitality & leisure.',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    id: 2,
    name: 'Azizi Developments',
    country: 'UAE',
    count: '29 new buildings',
    description: 'Azizi Developments is a leading developer in the UAE, known for creating exceptional residential and commercial properties that combine luxury, comfort, and innovation.',
    image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80'
  },
  {
    id: 3,
    name: 'DAMAC',
    country: 'UAE',
    count: '99 new buildings',
    description: 'DAMAC Properties is one of the leading luxury real estate developers in the Middle East, with a portfolio of high-end residential, commercial, and leisure properties.',
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    id: 4,
    name: 'Danube Properties',
    country: 'UAE',
    count: '19 new buildings',
    description: 'Danube Properties is a leading real estate developer in the UAE, known for creating high-quality residential and commercial properties that offer excellent value for money.',
    image: 'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    id: 5,
    name: 'Sobha Realty',
    country: 'UAE',
    count: '27 new buildings',
    description: 'Sobha Realty is a premium real estate developer known for its commitment to quality and innovation in creating exceptional living spaces.',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    id: 6,
    name: 'Ellington Properties',
    country: 'UAE',
    count: '50 new buildings',
    description: 'Ellington Properties is a boutique real estate developer focused on creating unique and luxurious residential properties that stand out in the market.',
    image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80'
  }
]

export default function DevelopersPage() {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredDevelopers = developers.filter(developer =>
    developer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    developer.country.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[40vh] bg-gray-900">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Top Real Estate Developers
            </h1>
            <p className="text-lg md:text-xl">
              Discover the most trusted and innovative real estate developers in the region.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Listings Section */}
      <section className="py-12 bg-gray-50">
        <div className="container">
          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search developers..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Developers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDevelopers.map((developer) => (
              <motion.div
                key={developer.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="relative h-48">
                  <Image
                    src={developer.image}
                    alt={developer.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Building2 className="h-5 w-5 text-primary" />
                    <p className="text-sm text-gray-600">{developer.country}</p>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{developer.name}</h3>
                  <p className="text-gray-600 mb-4">{developer.description}</p>
                  <div className="flex justify-between items-center">
                    <p className="text-primary font-semibold">{developer.count}</p>
                    <Link
                      href={`/properties?developer=${developer.name}`}
                      className="text-primary hover:underline"
                    >
                      View Properties
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
} 