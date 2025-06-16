import { Metadata } from 'next'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import { Award, Users, Home, Heart, Star, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us | HouseArch',
  description: 'Learn about HouseArch, our mission, values, and the team behind our success in luxury real estate.',
}

// Mock data for team members
const teamMembers = [
  {
    name: 'Sarah Johnson',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1061&q=80',
    bio: 'With over 15 years of experience in luxury real estate, Sarah founded HouseArch with a vision to transform the industry.',
  },
  {
    name: 'Michael Chen',
    role: 'Chief Technology Officer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
    bio: 'Michael leads our technology initiatives, ensuring we stay at the forefront of real estate innovation.',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Head of Sales',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80',
    bio: 'Emily brings 12 years of sales expertise and a passion for matching clients with their dream properties.',
  },
]

// Mock data for values
const values = [
  {
    icon: <Heart className="h-8 w-8 text-primary" />,
    title: 'Client-Centric',
    description: 'We put our clients first, ensuring their needs and aspirations are at the heart of everything we do.',
  },
  {
    icon: <Star className="h-8 w-8 text-primary" />,
    title: 'Excellence',
    description: 'We strive for excellence in every aspect of our service, from property selection to client care.',
  },
  {
    icon: <Shield className="h-8 w-8 text-primary" />,
    title: 'Integrity',
    description: 'We conduct our business with the highest standards of honesty, transparency, and ethical practices.',
  },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-gray-900">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About HouseArch
            </h1>
            <p className="text-lg md:text-xl">
              Redefining luxury real estate through innovation, integrity, and exceptional service.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="prose max-w-none">
                <p className="text-lg mb-4">
                  Founded in 2015, HouseArch emerged from a vision to transform the luxury real estate 
                  experience. We recognized that the industry needed a fresh approach—one that combined 
                  cutting-edge technology with personalized service.
                </p>
                <p className="text-lg mb-4">
                  Today, we're proud to be at the forefront of real estate innovation, serving clients 
                  across the most prestigious locations in the United States. Our commitment to excellence 
                  has earned us recognition as one of the leading luxury real estate platforms.
                </p>
                <p className="text-lg">
                  What sets us apart is our dedication to understanding each client's unique needs and 
                  aspirations. We don't just sell properties; we help people find their perfect home and 
                  investment opportunities.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Luxury Home"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-primary mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary text-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <p className="text-white/80">Properties Sold</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <p className="text-white/80">Happy Clients</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <p className="text-white/80">Years Experience</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">25+</div>
              <p className="text-white/80">Team Members</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
} 