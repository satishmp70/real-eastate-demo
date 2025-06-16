'use client'

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import PropertyCard from "@/components/PropertyCard";
import BlogSection from "@/components/BlogSection";
import DevelopersSection from "@/components/DevelopersSection";

const featuredProperties = [
  {
    id: 1,
    title: "Modern Villa in Beverly Hills",
    price: "$4,500,000",
    location: "Beverly Hills, CA",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    beds: 5,
    baths: 4,
    sqft: 4500,
  },
  {
    id: 2,
    title: "Luxury Penthouse with Ocean View",
    price: "$3,200,000",
    location: "Miami Beach, FL",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    beds: 4,
    baths: 3,
    sqft: 3800,
  },
  {
    id: 3,
    title: "Contemporary Townhouse",
    price: "$2,800,000",
    location: "Manhattan, NY",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80",
    beds: 3,
    baths: 3,
    sqft: 3200,
  },
];

const popularDestinations = [
  {
    id: 1,
    country: "UAE",
    city: "Dubai",
    price: "from $90K",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: 2,
    country: "Turkey",
    city: "Istanbul",
    price: "from $100K",
    image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
  },
  {
    id: 3,
    country: "Turkey",
    city: "Antalya",
    price: "from $58K",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: 4,
    country: "Thailand",
    city: "Phuket",
    price: "from $59K",
    image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: 5,
    country: "Turkey",
    city: "Alanya",
    price: "from $75K",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  }
]

const newBuildings = [
  {
    id: 1,
    country: "UAE",
    title: "Peninsula Four",
    price: "$2M",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: 2,
    country: "UAE",
    title: "Peninsula Five",
    price: "$436K",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80"
  },
  {
    id: 3,
    country: "UAE",
    title: "Belgravia Square",
    price: "Available by request",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  }
]

export default function Home() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[80vh]">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Luxury Home"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative container h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Find Ideal Real Estate Properties Online
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Explore our online real estate listings to start finding properties across different countries. Whether you're searching for your dream home or a lucrative investment opportunity, our online platform makes finding the perfect real estate property easier than ever.
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <select className="px-4 py-3 rounded-md bg-white/10 backdrop-blur-sm text-white border border-white/20">
                <option value="">Bedrooms</option>
                <option value="1">1+</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
              </select>
              <select className="px-4 py-3 rounded-md bg-white/10 backdrop-blur-sm text-white border border-white/20">
                <option value="">Price, USD</option>
                <option value="0-100000">$0 - $100,000</option>
                <option value="100000-200000">$100,000 - $200,000</option>
                <option value="200000-500000">$200,000 - $500,000</option>
                <option value="500000+">$500,000+</option>
              </select>
              <button className="px-4 py-3 rounded-md bg-white/10 backdrop-blur-sm text-white border border-white/20">
                More filters
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Popular destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {popularDestinations.map((destination) => (
              <Link
                key={destination.id}
                href={`/properties?location=${destination.city}`}
                className="group relative h-64 rounded-lg overflow-hidden"
              >
                <Image
                  src={destination.image}
                  alt={destination.city}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <p className="text-sm text-white/80">{destination.country}</p>
                  <h3 className="text-xl font-bold">{destination.city}</h3>
                  <p className="text-sm">{destination.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* New Buildings */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">New buildings for sale</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newBuildings.map((building) => (
              <div key={building.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={building.image}
                    alt={building.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-600">{building.country}</p>
                  <h3 className="text-xl font-bold mb-2">{building.title}</h3>
                  <p className="text-primary font-semibold">{building.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <BlogSection />

      {/* Developers Section */}
      <DevelopersSection />

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">We'll find you properties for free</h2>
          <p className="text-lg mb-8">Fit your budget, get help in English, save time searching on your own</p>
          <button className="px-8 py-3 bg-white text-primary rounded-md font-semibold hover:bg-gray-100 transition-colors">
            Get started
          </button>
        </div>
      </section>
    </>
  );
}
