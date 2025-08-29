import Layout from '../components/Layout'
import { motion } from 'framer-motion'
import { Download, FileText, Box, File, Calendar, User, ArrowDown } from 'lucide-react'

export default function Downloads() {
  const downloads = [
    {
      id: 1,
      title: 'Hydrogen Bike Assembly Model',
      description: 'Complete SOLIDWORKS assembly of hydrogen-powered motorcycle with all components and engineering drawings.',
      category: 'CAD Models',
      fileType: 'STEP',
      fileSize: '45.2 MB',
      downloads: 20,
      date: '2025-08-15',
      author: 'Sangam',
      image: '/images/downloads/hydrogen-bike.jpg',
      
      fileUrl: '/downloads/hydrogen-bike-assembly.step',
      
      tags: ['Assembly', 'Mechanical', 'SOLIDWORKS']
    },
    {
      id: 2,
      title: 'Solar Floating Plant Design',
      description: 'CATIA model of innovative solar panel floating system with structural analysis and optimization data.',
      category: 'CAD Models',
      fileType: 'CATIA',
      fileSize: '32.8 MB',
      downloads: 189,
      date: '2025-08-10',
      author: 'Sangam',
      image: '/images/downloads/solar-plant.jpg',
      fileUrl: '/downloads/solar-floating-plant.zip',
      tags: ['Structural', 'Renewable Energy', 'CATIA']
    },
    {
      id: 3,
      title: 'Drone Design Technical Report',
      description: 'Comprehensive technical documentation including design specifications, analysis results, and manufacturing guidelines.',
      category: 'Technical Reports',
      fileType: 'PDF',
      fileSize: '8.5 MB',
      downloads: 10,
      date: '2025-08-05',
      author: 'Abhi Raut',
      image: '/images/downloads/drone-report.jpg',
      fileUrl: '/downloads/drone-design-report.pdf',
      tags: ['Technical', 'Documentation', 'Analysis']
    },
    {
      id: 4,
      title: 'Luxury Car Surface Model',
      description: 'High-end automotive surface model with complex curvature and aesthetic design for manufacturing.',
      category: 'CAD Models',
      fileType: 'CATIA',
      fileSize: '67.3 MB',
      downloads: 298,
      date: '2023-12-28',
      author: 'Sangam',
      image: '/images/downloads/car-surface.jpg',
      fileUrl: '/downloads/luxury-car-surface.zip',
      tags: ['Surface Modeling', 'Automotive', 'CATIA']
    },
    {
      id: 5,
      title: '3D Printing Guide for Product Design',
      description: 'Complete guide to designing for 3D printing including best practices, material selection, and optimization techniques.',
      category: 'Guides',
      fileType: 'PDF',
      fileSize: '12.1 MB',
      downloads: 445,
      date: '2023-12-20',
      author: 'Abhi Jagtap',
      image: '/images/downloads/3d-printing-guide.jpg',
      fileUrl: '/downloads/3d-printing-guide.pdf',
      tags: ['3D Printing', 'Design Guide', 'Manufacturing']
    },
    {
      id: 6,
      title: 'ANSYS Simulation Templates',
      description: 'Collection of ANSYS simulation templates for common engineering analysis scenarios.',
      category: 'Simulation',
      fileType: 'ANSYS',
      fileSize: '23.7 MB',
      downloads: 167,
      date: '2023-12-15',
      author: 'Sangam',
      image: '/images/downloads/ansys-templates.jpg',
      fileUrl: '/downloads/ansys-templates.zip',
      tags: ['Simulation', 'ANSYS', 'Templates']
    }
  ]

  const categories = ['All', 'CAD Models', 'Technical Reports', 'Guides', 'Simulation', 'Templates']

  return (
    <Layout 
      title="Downloads"
      description="Download CAD models, technical reports, design guides, and simulation templates from DesignAnything. Free resources for engineers and designers."
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
              Free <span className="gradient-text">Downloads</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Access our collection of CAD models, technical reports, design guides, and simulation templates. 
              All resources are free to download and use for educational and commercial purposes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Downloads Section */}
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

          {/* Downloads Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {downloads.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card overflow-hidden group"
              >
                {/* Download Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        {item.category === 'CAD Models' ? (
                          <Box className="w-8 h-8 text-secondary" />
                        ) : item.category === 'Technical Reports' ? (
                          <FileText className="w-8 h-8 text-secondary" />
                        ) : (
                          <File className="w-8 h-8 text-secondary" />
                        )}
                      </div>
                      <p className="text-lg font-medium">{item.title}</p>
                      <p className="text-gray-300 text-sm">{item.category}</p>
                    </div>
                  </div>
                </div>

                {/* Download Content */}
                <div className="p-6">
                  {/* Meta Information */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-secondary bg-secondary/10 px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                    <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(item.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Download className="w-4 h-4" />
                        <span>{item.downloads}</span>
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-playfair font-semibold mb-3 text-gray-800 dark:text-white">
                    {item.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  {/* File Info */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                      <span className="flex items-center space-x-1">
                        <File className="w-4 h-4" />
                        <span>{item.fileType}</span>
                      </span>
                      <span>{item.fileSize}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-bold">
                          {item.author.charAt(0)}
                        </span>
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {item.author}
                      </span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Download Button */}
                  <a 
                    href={item.fileUrl}
                    download
                    className="w-full btn-primary flex items-center justify-center group"
                  >
                    <ArrowDown className="w-5 h-5 mr-2 group-hover:translate-y-1 transition-transform duration-200" />
                    Download {item.fileType}
                  </a>
                </div>
              </motion.div>
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
              Load More Downloads
            </button>
          </motion.div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-playfair font-bold mb-6 text-gray-800 dark:text-white">
              How to Use These Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Download className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Download</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Click the download button to get the files. All downloads are free and require no registration.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Use</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Open the files in their respective software. CAD models work with SOLIDWORKS, CATIA, and other compatible software.
                </p>
              </div>
              
              <div className="text-center">
                                 <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                   <Box className="w-8 h-8 text-white" />
                 </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Learn</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Study the designs, modify them for your projects, and learn from our engineering approaches.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent">
        <div className="container-custom px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold mb-6 text-white">
              Need Custom CAD Models?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? We can create custom CAD models, technical reports, and design solutions for your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-secondary">
                Request Custom Design
              </a>
              <a href="/portfolio" className="btn-outline border-white text-white hover:bg-white hover:text-primary">
                View Our Work
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  )
}
