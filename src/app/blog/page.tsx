import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import BlogCard from '@/components/BlogCard'
import { Search } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog | HouseArch',
  description: 'Explore our latest articles about real estate trends, home buying tips, and market insights.',
}

// Mock data for blog posts
const blogPosts = [
  {
    id: 1,
    title: 'Top 10 Home Design Trends for 2024',
    excerpt: 'Discover the latest interior design trends that are shaping the real estate market in 2024. From sustainable materials to smart home integration, learn what buyers are looking for.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2400&q=80',
    author: 'Sarah Johnson',
    date: 'March 15, 2024',
    category: 'Design',
    featured: true,
  },
  {
    id: 2,
    title: 'How to Prepare Your Home for Sale',
    excerpt: 'Learn the essential steps to prepare your home for sale and maximize its value. From staging tips to necessary repairs, we cover everything you need to know.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2400&q=80',
    author: 'Michael Chen',
    date: 'March 12, 2024',
    category: 'Selling',
    featured: true,
  },
  {
    id: 3,
    title: 'Real Estate Market Outlook 2024',
    excerpt: 'Get insights into the current real estate market trends and predictions for the coming year. Understand how economic factors are influencing property values.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2400&q=80',
    author: 'David Wilson',
    date: 'March 10, 2024',
    category: 'Market',
    featured: false,
  },
  {
    id: 4,
    title: 'First-Time Home Buyer Guide',
    excerpt: 'A comprehensive guide for first-time home buyers. Learn about mortgages, down payments, and the home buying process from start to finish.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2400&q=80',
    author: 'Emily Brown',
    date: 'March 8, 2024',
    category: 'Buying',
    featured: false,
  },
]

const categories = [
  'All',
  'Design',
  'Market',
  'Buying',
  'Selling',
  'Investment',
  'Lifestyle',
]

export default function BlogPage() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[40vh] bg-gray-900">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Real Estate Insights
            </h1>
            <p className="text-lg md:text-xl">
              Stay informed with the latest trends, tips, and market updates in the real estate industry.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-12 bg-gray-50">
        <div className="container">
          {/* Search and Categories */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
              <div className="relative w-full md:w-96">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    className="px-4 py-2 rounded-full border border-gray-300 hover:bg-primary hover:text-white hover:border-primary transition-colors"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Featured Posts */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Featured Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts
                .filter((post) => post.featured)
                .map((post) => (
                  <div key={post.id} className="relative h-[400px] group">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-lg" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <span className="inline-block bg-primary text-white px-3 py-1 rounded-full text-sm font-medium mb-2">
                        {post.category}
                      </span>
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-200 mb-4 line-clamp-2">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-sm">
                        <span>{post.author}</span>
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* All Posts */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Latest Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <BlogCard key={post.id} {...post} />
              ))}
            </div>
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