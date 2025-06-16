'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { MapPinIcon, HomeIcon, DollarSignIcon } from 'lucide-react'

interface LocationCardProps {
  id: number
  name: string
  state: string
  image: string
  description: string
  avgPrice: string
  totalProperties: number
}

export default function LocationCard({
  id,
  name,
  state,
  image,
  description,
  avgPrice,
  totalProperties,
}: LocationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
    >
      <Link href={`/locations/${id}`}>
        <div className="relative h-48 overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
            <h3 className="text-xl font-semibold mb-1">{name}</h3>
            <p className="text-sm text-gray-200">{state}</p>
          </div>
        </div>
        <div className="p-6">
          <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <DollarSignIcon className="h-4 w-4" />
              <span>Avg. {avgPrice}</span>
            </div>
            <div className="flex items-center gap-1">
              <HomeIcon className="h-4 w-4" />
              <span>{totalProperties} Properties</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
} 