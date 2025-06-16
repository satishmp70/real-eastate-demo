import { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import { BedIcon, BathIcon, SquareIcon, MapPinIcon, CalendarIcon } from 'lucide-react'

// Mock data for properties (in a real app, this would come from an API or database)
const properties = [
  {
    id: 1,
    title: 'Modern Villa in Beverly Hills',
    price: '$4,500,000',
    location: 'Beverly Hills, CA',
    description: 'Stunning modern villa with panoramic views of Los Angeles. This luxurious property features high-end finishes, smart home technology, and an infinity pool. The open-concept living space is perfect for entertaining, while the private master suite offers a spa-like bathroom and walk-in closet.',
    images: [
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80',
    ],
    beds: 5,
    baths: 4,
    sqft: 4500,
    yearBuilt: 2020,
    features: [
      'Smart Home Technology',
      'Infinity Pool',
      'Wine Cellar',
      'Home Theater',
      'Gourmet Kitchen',
      'Private Garden',
      '3-Car Garage',
      'Security System',
    ],
  },
  // Add more properties as needed
]

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const property = properties.find((p) => p.id === parseInt(params.id))
  
  if (!property) {
    return {
      title: 'Property Not Found | HouseArch',
    }
  }

  return {
    title: `${property.title} | HouseArch`,
    description: property.description,
  }
}

export default function PropertyPage({ params }: { params: { id: string } }) {
  const property = properties.find((p) => p.id === parseInt(params.id))

  if (!property) {
    notFound()
  }

  return (
    <>
      <Navbar />
      
      <main className="pt-16">
        {/* Image Gallery */}
        <div className="relative h-[60vh]">
          <Image
            src={property.images[0]}
            alt={property.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Property Details */}
        <div className="container py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{property.title}</h1>
              <p className="text-2xl font-bold text-primary mb-6">{property.price}</p>
              
              <div className="flex items-center gap-4 text-gray-600 mb-8">
                <div className="flex items-center gap-1">
                  <MapPinIcon className="h-5 w-5" />
                  <span>{property.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <CalendarIcon className="h-5 w-5" />
                  <span>Built in {property.yearBuilt}</span>
                </div>
              </div>

              <div className="flex items-center gap-8 mb-8">
                <div className="flex items-center gap-2">
                  <BedIcon className="h-6 w-6 text-primary" />
                  <span className="text-lg">{property.beds} Beds</span>
                </div>
                <div className="flex items-center gap-2">
                  <BathIcon className="h-6 w-6 text-primary" />
                  <span className="text-lg">{property.baths} Baths</span>
                </div>
                <div className="flex items-center gap-2">
                  <SquareIcon className="h-6 w-6 text-primary" />
                  <span className="text-lg">{property.sqft} sqft</span>
                </div>
              </div>

              <div className="prose max-w-none mb-12">
                <h2 className="text-2xl font-bold mb-4">Description</h2>
                <p>{property.description}</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Features</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {property.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 text-gray-600"
                    >
                      <div className="h-2 w-2 bg-primary rounded-full" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
                <h2 className="text-xl font-bold mb-4">Contact Agent</h2>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="block w-full rounded-md border border-gray-300 px-4 py-2 focus:border-primary focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="block w-full rounded-md border border-gray-300 px-4 py-2 focus:border-primary focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="block w-full rounded-md border border-gray-300 px-4 py-2 focus:border-primary focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="block w-full rounded-md border border-gray-300 px-4 py-2 focus:border-primary focus:ring-primary"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-primary w-full"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
} 