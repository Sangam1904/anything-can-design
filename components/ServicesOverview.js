import { motion } from 'framer-motion'
import { Box, Zap, Video, Palette, Settings, FileText } from 'lucide-react'
import Link from 'next/link'

export default function ServicesOverview() {
  const services = [
    {
      icon: Box,
      title: 'CAD Modeling',
      description: 'Professional 3D modeling using SOLIDWORKS, CATIA, and other industry-standard software. From concept sketches to detailed assemblies.',
      features: ['Mechanical Design', 'Assembly Design', 'GD&T', 'Drafting'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Zap,
      title: '3D Design',
      description: 'Creative 3D design solutions for products, furniture, and industrial applications. Surface modeling and complex geometry.',
      features: ['Surface Modeling', 'Product Design', 'Industrial Design', 'Furniture Design'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Video,
      title: 'Product Animation',
      description: 'High-quality product animations and visualizations for marketing, presentations, and client demonstrations.',
      features: ['Assembly Animation', 'Product Walkthrough', 'Marketing Videos', 'Technical Demos'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Palette,
      title: 'Rendering',
      description: 'Photorealistic renders and visualizations that bring your designs to life with stunning detail and lighting.',
      features: ['Photorealistic Renders', 'Material Setup', 'Lighting Design', 'Environment Creation'],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Settings,
      title: 'Simulation',
      description: 'Engineering analysis and simulation using ANSYS for stress analysis, thermal analysis, and optimization.',
      features: ['Stress Analysis', 'Thermal Analysis', 'Optimization', 'FEA'],
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: FileText,
      title: 'Documentation',
      description: 'Complete technical documentation including drawings, specifications, and project reports.',
      features: ['Technical Drawings', 'Specifications', 'Project Reports', 'User Manuals'],
      color: 'from-gray-500 to-slate-500'
    }
  ]

  return (
    <section className="section-padding bg-white dark:bg-gray-900">
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
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive design and engineering services to bring your ideas to life. 
            From initial concept to final production-ready files.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card p-8 hover:scale-105 transition-transform duration-300 group"
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-playfair font-semibold mb-4 text-gray-800 dark:text-white">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Learn More Link */}
              <Link 
                href={`/services#${service.title.toLowerCase().replace(' ', '-')}`}
                className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors duration-200"
              >
                Learn More
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
