import { Metadata } from 'next'

interface LocationPageProps {
  params: {
    id: string
  }
}

export const metadata: Metadata = {
  title: 'Location Details',
  description: 'View details about this location',
}

export default function LocationPage({ params }: LocationPageProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Location Details</h1>
      <p>Location ID: {params.id}</p>
    </div>
  )
} 