'use client'

import Navbar from '@/components/Navbar'
import SearchFilters from '@/components/SearchFilters'
import PropertyCard from '@/components/PropertyCard'

// Mock data for properties
const properties = [
  {
    id: 1,
    title: 'Modern Villa in Beverly Hills',
    price: '$4,500,000',
    location: 'Beverly Hills, CA',
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    beds: 5,
    baths: 4,
    sqft: 4500,
    featured: true,
  },
  {
    id: 2,
    title: 'Luxury Penthouse with Ocean View',
    price: '$3,200,000',
    location: 'Miami Beach, FL',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    beds: 4,
    baths: 3,
    sqft: 3800,
    featured: false,
  },
  {
    id: 3,
    title: 'Contemporary Townhouse',
    price: '$2,800,000',
    location: 'Manhattan, NY',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80',
    beds: 3,
    baths: 3,
    sqft: 3200,
    featured: false,
  },
  {
    id: 4,
    title: 'Luxury Apartment in Downtown',
    price: '$1,950,000',
    location: 'Chicago, IL',
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    beds: 2,
    baths: 2,
    sqft: 1800,
    featured: false,
  },
  {
    id: 5,
    title: 'Waterfront Estate',
    price: '$5,800,000',
    location: 'Seattle, WA',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    beds: 6,
    baths: 5,
    sqft: 5200,
    featured: true,
  },
  {
    id: 6,
    title: 'Modern Loft in Arts District',
    price: '$1,200,000',
    location: 'Los Angeles, CA',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80',
    beds: 1,
    baths: 2,
    sqft: 1200,
    featured: false,
  },
]

export default function PropertiesPage() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[40vh] bg-gray-900">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Find Your Dream Home
            </h1>
            <p className="text-lg md:text-xl">
              Browse through our collection of luxury properties and find the perfect place to call home.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Listings Section */}
      <section className="py-12 bg-gray-50">
        <div className="container">
          <SearchFilters onSearch={(filters) => console.log(filters)} />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <PropertyCard key={property.id} {...property} />
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <nav className="flex items-center gap-2">
              <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
                Previous
              </button>
              <button className="px-4 py-2 bg-primary text-white rounded-md">
                1
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
                2
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
                3
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
                Next
              </button>
            </nav>
          </div>
        </div>
      </section>
    </>
  )
} 