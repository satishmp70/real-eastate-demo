import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import BlogCard from '@/components/BlogCard'
import { CalendarIcon, UserIcon, Share2, Facebook, Twitter, Linkedin } from 'lucide-react'

// Mock data for blog posts
const blogPosts = [
  {
    id: 1,
    title: 'Top 10 Home Design Trends for 2024',
    excerpt: 'Discover the latest interior design trends that are shaping the real estate market in 2024. From sustainable materials to smart home integration, learn what buyers are looking for.',
    content: `
      <p>The real estate market is constantly evolving, and with it, the design trends that buyers are looking for in their dream homes. As we move through 2024, several key trends are emerging that are reshaping how we think about residential spaces.</p>

      <h2>1. Sustainable Materials</h2>
      <p>Sustainability is no longer just a buzzword—it's a fundamental aspect of modern home design. Buyers are increasingly seeking homes that incorporate eco-friendly materials and energy-efficient features. From bamboo flooring to recycled glass countertops, sustainable materials are becoming the norm rather than the exception.</p>

      <h2>2. Smart Home Integration</h2>
      <p>The smart home revolution continues to gain momentum, with more homeowners looking for properties that offer seamless integration of technology. From automated lighting systems to voice-controlled appliances, smart home features are becoming essential selling points.</p>

      <h2>3. Biophilic Design</h2>
      <p>Bringing the outdoors in has never been more popular. Biophilic design elements, such as living walls, natural light optimization, and organic materials, are creating spaces that promote well-being and connection to nature.</p>

      <h2>4. Flexible Living Spaces</h2>
      <p>The pandemic has permanently changed how we use our homes. As a result, flexible living spaces that can adapt to various needs—from home offices to workout areas—are in high demand.</p>

      <h2>5. Minimalist Aesthetics</h2>
      <p>Clean lines, neutral color palettes, and clutter-free spaces continue to dominate the design landscape. This minimalist approach creates timeless interiors that appeal to a wide range of buyers.</p>
    `,
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2400&q=80',
    author: 'Sarah Johnson',
    date: 'March 15, 2024',
    category: 'Design',
    readTime: '5 min read',
  },
  // Add more blog posts as needed
]

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const post = blogPosts.find((p) => p.id === parseInt(params.id))
  
  if (!post) {
    return {
      title: 'Article Not Found | HouseArch',
    }
  }

  return {
    title: `${post.title} | HouseArch Blog`,
    description: post.excerpt,
  }
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = blogPosts.find((p) => p.id === parseInt(params.id))

  if (!post) {
    notFound()
  }

  return (
    <>
      <Navbar />
      
      <main className="pt-16">
        {/* Hero Section */}
        <div className="relative h-[60vh]">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 container flex items-center">
            <div className="max-w-3xl text-white">
              <span className="inline-block bg-primary text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                {post.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
              <div className="flex items-center gap-4 text-gray-200">
                <div className="flex items-center gap-1">
                  <UserIcon className="h-5 w-5" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-1">
                  <CalendarIcon className="h-5 w-5" />
                  <span>{post.date}</span>
                </div>
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <article className="py-12">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <div 
                  className="prose max-w-none"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Share Buttons */}
                <div className="mt-12 pt-8 border-t">
                  <h3 className="text-lg font-semibold mb-4">Share this article</h3>
                  <div className="flex gap-4">
                    <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                      <Facebook className="h-5 w-5" />
                    </button>
                    <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                      <Twitter className="h-5 w-5" />
                    </button>
                    <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </button>
                    <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                      <Share2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <h3 className="text-xl font-bold mb-6">Related Articles</h3>
                  <div className="space-y-6">
                    {blogPosts
                      .filter((p) => p.id !== post.id)
                      .slice(0, 3)
                      .map((relatedPost) => (
                        <BlogCard key={relatedPost.id} {...relatedPost} />
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>
    </>
  )
} 