import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ExternalLink, Download } from 'lucide-react'

export default function PortfolioPreview() {
  const featuredProjects = [
    {
      id: 1,
      title: 'Hydrogen Bike Design',
      category: 'Mechanical Design',
      description: 'Complete 3D modeling and assembly design of a hydrogen-powered motorcycle with detailed engineering analysis.',
      image: '/images/projects/hydrogen-bike.jpg',
      modelUrl: '/models/hydrogen-bike.glb',
      tags: ['SOLIDWORKS', 'Assembly Design', 'Mechanical'],
      featured: true
    },
    {
      id: 2,
      title: 'Solar Floating Plant',
      category: 'Industrial Design',
      description: 'Innovative solar panel floating system design with structural analysis and optimization.',
      image: '/images/projects/solar-plant.jpg',
      modelUrl: '/models/solar-plant.glb',
      tags: ['CATIA', 'Structural Analysis', 'Renewable Energy'],
      featured: true
    },
    {
      id: 3,
      title: 'Drone Assembly',
      category: 'Product Design',
      description: 'Complete drone design with aerodynamic optimization and manufacturing-ready components.',
      image: '/images/projects/drone.jpg',
      modelUrl: '/models/drone.glb',
      tags: ['SOLIDWORKS', 'Aerodynamics', 'Product Design'],
      featured: true
    },
    {
      id: 4,
      title: 'Luxury Car Surfacing',
      category: 'Surface Modeling',
      description: 'High-end automotive surface modeling with complex curvature and aesthetic design.',
      image: '/images/projects/car-surfacing.jpg',
      modelUrl: '/models/car-surfacing.glb',
      tags: ['CATIA', 'Surface Modeling', 'Automotive'],
      featured: true
    }
  ]

  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore our latest work showcasing expertise in CAD modeling, 3D design, and product animation.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card overflow-hidden group"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                      </svg>
                    </div>
                    <p className="text-lg font-medium">{project.title}</p>
                    <p className="text-gray-300 text-sm">{project.category}</p>
                  </div>
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <Link 
                      href={`/portfolio/${project.id}`}
                      className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200"
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </Link>
                    {project.modelUrl && (
                      <a 
                        href={project.modelUrl}
                        download
                        className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200"
                      >
                        <Download className="w-5 h-5 text-white" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-secondary bg-secondary/10 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                      Featured
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-playfair font-semibold mb-3 text-gray-800 dark:text-white">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-between">
                  <Link 
                    href={`/portfolio/${project.id}`}
                    className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors duration-200 group"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                  
                  {project.modelUrl && (
                    <a 
                      href={project.modelUrl}
                      download
                      className="inline-flex items-center text-secondary hover:text-secondary/80 font-medium transition-colors duration-200"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download Model
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/portfolio" className="btn-primary group">
            View All Projects
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
