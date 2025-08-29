import Layout from '../../components/Layout'
import { motion } from 'framer-motion'
import { Calendar, Clock, User, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: 'Optimizing Solar Trees in CAD: A Complete Guide',
      excerpt: 'Learn how to design efficient solar tree structures using advanced CAD modeling techniques and optimization strategies.',
      author: 'Sangam',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'CAD Tutorials',
      image: '/images/blog/solar-trees.jpg',
      slug: 'optimizing-solar-trees-cad'
    },
    {
      id: 2,
      title: 'The Future of 3D Printing in Product Design',
      excerpt: 'Explore how 3D printing is revolutionizing product design and manufacturing processes across industries.',
      author: 'Anjali',
      date: '2024-01-10',
      readTime: '6 min read',
      category: 'Industry Insights',
      image: '/images/blog/3d-printing.jpg',
      slug: 'future-3d-printing-product-design'
    },
    {
      id: 3,
      title: 'Advanced Surface Modeling Techniques in CATIA',
      excerpt: 'Master complex surface modeling workflows in CATIA for automotive and aerospace applications.',
      author: 'Sangam',
      date: '2024-01-05',
      readTime: '12 min read',
      category: 'CAD Tutorials',
      image: '/images/blog/catia-surfacing.jpg',
      slug: 'advanced-surface-modeling-catia'
    },
    {
      id: 4,
      title: 'Creating Stunning Product Animations with Blender',
      excerpt: 'Step-by-step guide to creating professional product animations and visualizations using Blender.',
      author: 'Anjali',
      date: '2023-12-28',
      readTime: '10 min read',
      category: 'Animation',
      image: '/images/blog/blender-animation.jpg',
      slug: 'creating-product-animations-blender'
    },
    {
      id: 5,
      title: 'Engineering Analysis with ANSYS: Best Practices',
      excerpt: 'Essential tips and best practices for conducting effective engineering analysis using ANSYS simulation tools.',
      author: 'Rahul',
      date: '2023-12-20',
      readTime: '15 min read',
      category: 'Simulation',
      image: '/images/blog/ansys-analysis.jpg',
      slug: 'engineering-analysis-ansys-best-practices'
    },
    {
      id: 6,
      title: 'Designing Hydrogen-Powered Vehicles: Challenges and Solutions',
      excerpt: 'Explore the unique challenges and innovative solutions in designing hydrogen-powered transportation systems.',
      author: 'Sangam',
      date: '2023-12-15',
      readTime: '14 min read',
      category: 'Case Studies',
      image: '/images/blog/hydrogen-vehicles.jpg',
      slug: 'designing-hydrogen-powered-vehicles'
    },
    {
      id: 7,
      title: 'Designing Hydrogen-Powered Vehicles: Challenges and Solutions',
      excerpt: 'Explore the unique challenges and innovative solutions in designing hydrogen-powered transportation systems.',
      author: 'Sangam',
      date: '2023-12-15',
      readTime: '14 min read',
      category: 'Case Studies',
      image: '/images/blog/hydrogen-vehicles.jpg',
      slug: 'designing-hydrogen-powered-vehicles'
    },
    
   
  ]

  const categories = ['All', 'CAD Tutorials', 'Industry Insights', 'Animation', 'Simulation', 'Case Studies']

  return (
    <Layout 
      title="Blog"
      description="Read our latest articles on CAD modeling, 3D design, product animation, and engineering insights. Expert tutorials and industry knowledge from DesignAnything."
    >
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-dark dark:to-gray-900">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-6xl font-playfair font-bold mb-6">
              Our <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Insights, tutorials, and industry knowledge from our team of CAD modeling and 3D design experts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          {/* Categories Filter */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-primary hover:text-white hover:border-primary transition-colors duration-200"
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card overflow-hidden group"
              >
                {/* Blog Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                        </svg>
                      </div>
                      <p className="text-lg font-medium">{post.title}</p>
                      <p className="text-gray-300 text-sm">{post.category}</p>
                    </div>
                  </div>
                </div>

                {/* Blog Content */}
                <div className="p-6">
                  {/* Meta Information */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-secondary bg-secondary/10 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-playfair font-semibold mb-3 text-gray-800 dark:text-white group-hover:text-primary transition-colors duration-200">
                    {post.title}
                  </h3>
                  
                  {/* Excerpt */}
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Author */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-bold">
                          {post.author.charAt(0)}
                        </span>
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {post.author}
                      </span>
                    </div>
                    
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors duration-200 group"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Load More Button */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <button className="btn-outline">
              Load More Articles
            </button>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-playfair font-bold mb-4 text-gray-800 dark:text-white">
              Stay Updated
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Subscribe to our newsletter for the latest CAD tutorials, industry insights, and project updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
              <button className="btn-primary">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  )
}
