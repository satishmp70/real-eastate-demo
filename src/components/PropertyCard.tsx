'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { BedIcon, BathIcon, SquareIcon } from 'lucide-react'

interface PropertyCardProps {
  id: number
  title: string
  price: string
  location: string
  image: string
  beds: number
  baths: number
  sqft: number
  featured?: boolean
}

export default function PropertyCard({
  id,
  title,
  price,
  location,
  image,
  beds,
  baths,
  sqft,
  featured = false,
}: PropertyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
    >
      <Link href={`/properties/${id}`}>
        <div className="relative h-64 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {featured && (
            <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
              Featured
            </div>
          )}
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-primary font-bold text-xl mb-2">{price}</p>
          <p className="text-gray-600 mb-4">{location}</p>
          <div className="flex justify-between text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <BedIcon className="h-4 w-4" />
              <span>{beds} beds</span>
            </div>
            <div className="flex items-center gap-1">
              <BathIcon className="h-4 w-4" />
              <span>{baths} baths</span>
            </div>
            <div className="flex items-center gap-1">
              <SquareIcon className="h-4 w-4" />
              <span>{sqft} sqft</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
} 