import { Metadata } from 'next'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import LocationCard from '@/components/LocationCard'
import { Search } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Locations | HouseArch',
  description: 'Explore our featured locations and find your perfect neighborhood. Discover properties in the most desirable areas.',
}

// Mock data for locations
const locations = [
  {
    id: 1,
    name: 'Beverly Hills',
    state: 'California',
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    description: 'Luxury living at its finest in the heart of Los Angeles. Known for its upscale shopping, fine dining, and celebrity homes.',
    avgPrice: '$4.2M',
    totalProperties: 156,
  },
  {
    id: 2,
    name: 'Miami Beach',
    state: 'Florida',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    description: 'Beachfront paradise with vibrant nightlife and cultural diversity. Home to stunning Art Deco architecture and world-class amenities.',
    avgPrice: '$2.8M',
    totalProperties: 243,
  },
  {
    id: 3,
    name: 'Manhattan',
    state: 'New York',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80',
    description: 'The heart of New York City, offering iconic skyline views, cultural landmarks, and unparalleled urban living.',
    avgPrice: '$3.5M',
    totalProperties: 189,
  },
  {
    id: 4,
    name: 'Aspen',
    state: 'Colorado',
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    description: 'Mountain paradise known for world-class skiing, luxury resorts, and breathtaking natural beauty.',
    avgPrice: '$5.1M',
    totalProperties: 98,
  },
]

export default function LocationsPage() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-gray-900">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Explore Our Locations
            </h1>
            <p className="text-lg md:text-xl">
              Discover properties in the most desirable neighborhoods across the country.
            </p>
          </div>
        </div>
      </section>

      {/* Locations Content */}
      <section className="py-12 bg-gray-50">
        <div className="container">
          {/* Search Bar */}
          <div className="mb-12">
            <div className="relative max-w-2xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search locations..."
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="mb-12 h-[400px] bg-gray-200 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Interactive Map Coming Soon</p>
          </div>

          {/* Locations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((location) => (
              <LocationCard key={location.id} {...location} />
            ))}
          </div>

          {/* Featured Location */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8">Featured Location: Beverly Hills</h2>
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image
                src={locations[0].image}
                alt="Beverly Hills"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-3xl font-bold mb-4">Beverly Hills, California</h3>
                <p className="text-lg mb-6 max-w-2xl">
                  Experience luxury living in one of the most prestigious neighborhoods in the world. 
                  From iconic Rodeo Drive to the famous Beverly Hills Hotel, this area offers the 
                  perfect blend of sophistication and comfort.
                </p>
                <div className="flex gap-4">
                  <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                    <p className="text-sm text-gray-300">Average Price</p>
                    <p className="text-xl font-bold">$4.2M</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                    <p className="text-sm text-gray-300">Properties</p>
                    <p className="text-xl font-bold">156</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                    <p className="text-sm text-gray-300">Year Founded</p>
                    <p className="text-xl font-bold">1914</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
} 