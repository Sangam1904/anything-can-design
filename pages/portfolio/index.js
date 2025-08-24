import { useState } from 'react'
import Layout from '../../components/Layout'
import { motion } from 'framer-motion'
import { Search, Filter, Download, ExternalLink } from 'lucide-react'
import ModelViewer from '../../components/ModelViewer'

export default function Portfolio() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedSoftware, setSelectedSoftware] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'Hydrogen Bike Design',
      category: 'Mechanical Design',
      software: 'SOLIDWORKS',
      description: 'Complete 3D modeling and assembly design of a hydrogen-powered motorcycle with detailed engineering analysis.',
      image: '/images/projects/hydrogen-bike.jpg',
      modelUrl: 'https://modelviewer.dev/shared-assets/models/Astronaut.glb', // Test model for now
      videoUrl: 'https://www.youtube.com/watch?v=example1',
      tags: ['Assembly Design', 'Mechanical', 'Engineering Analysis'],
      featured: true,
      year: 2024
    },
    {
      id: 2,
      title: 'Solar Floating Plant',
      category: 'Industrial Design',
      software: 'CATIA',
      description: 'Innovative solar panel floating system design with structural analysis and optimization.',
      image: '/images/projects/solar-plant.jpg',
      modelUrl: 'https://modelviewer.dev/shared-assets/models/Astronaut.glb', // Test model for now
      videoUrl: 'https://www.youtube.com/watch?v=example2',
      tags: ['Structural Analysis', 'Renewable Energy', 'Optimization'],
      featured: true,
      year: 2024
    },
    {
      id: 3,
      title: 'Drone Assembly',
      category: 'Product Design',
      software: 'SOLIDWORKS',
      description: 'Complete drone design with aerodynamic optimization and manufacturing-ready components.',
      image: '/images/projects/drone.jpg',
      modelUrl: 'https://modelviewer.dev/shared-assets/models/Astronaut.glb', // Test model for now
      videoUrl: 'https://www.youtube.com/watch?v=example3',
      tags: ['Aerodynamics', 'Product Design', 'Manufacturing'],
      featured: true,
      year: 2023
    },
    {
      id: 4,
      title: 'Luxury Car Surfacing',
      category: 'Surface Modeling',
      software: 'CATIA',
      description: 'High-end automotive surface modeling with complex curvature and aesthetic design.',
      image: '/images/projects/car-surfacing.jpg',
      modelUrl: 'https://modelviewer.dev/shared-assets/models/Astronaut.glb', // Test model for now
      videoUrl: 'https://www.youtube.com/watch?v=example4',
      tags: ['Surface Modeling', 'Automotive', 'Aesthetic Design'],
      featured: true,
      year: 2023
    },
    {
      id: 5,
      title: 'Smart Home Device',
      category: 'Product Design',
      software: 'SOLIDWORKS',
      description: 'IoT smart home device with ergonomic design and user-friendly interface.',
      image: '/images/projects/smart-device.jpg',
      modelUrl: 'https://modelviewer.dev/shared-assets/models/Astronaut.glb', // Test model for now
      tags: ['IoT', 'Ergonomic Design', 'User Interface'],
      featured: false,
      year: 2023
    },
    {
      id: 6,
      title: 'Industrial Robot Arm',
      category: 'Mechanical Design',
      software: 'CATIA',
      description: 'Precision industrial robot arm with advanced kinematics and control systems.',
      image: '/images/projects/robot-arm.jpg',
      modelUrl: 'https://modelviewer.dev/shared-assets/models/Astronaut.glb', // Test model for now
      tags: ['Robotics', 'Kinematics', 'Precision Engineering'],
      featured: false,
      year: 2023
    }
  ]

  const categories = ['all', 'Mechanical Design', 'Industrial Design', 'Product Design', 'Surface Modeling']
  const software = ['all', 'SOLIDWORKS', 'CATIA', 'Blender', 'ANSYS']

  // Filter projects
  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory
    const matchesSoftware = selectedSoftware === 'all' || project.software === selectedSoftware

    return matchesSearch && matchesCategory && matchesSoftware
  })

  return (
    <Layout 
      title="Portfolio"
      description="Explore our portfolio of CAD modeling, 3D design, and product animation projects. From mechanical design to surface modeling, see our expertise in action."
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
              Our <span className="gradient-text">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Explore our diverse collection of CAD modeling, 3D design, and product animation projects. 
              Each project showcases our expertise in transforming ideas into reality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>

              <select
                value={selectedSoftware}
                onChange={(e) => setSelectedSoftware(e.target.value)}
                className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              >
                {software.map(soft => (
                  <option key={soft} value={soft}>
                    {soft === 'all' ? 'All Software' : soft}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          {filteredProjects.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
                No projects found
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Try adjusting your search criteria or filters
              </p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="card overflow-hidden group"
                >
                  {/* Project Image/Model */}
                  <div className="relative h-64 overflow-hidden">
                    {project.modelUrl ? (
                      <ModelViewer 
                        src={project.modelUrl}
                        alt={project.title}
                        className="h-full"
                        showControls={true}
                        autoRotate={true}
                        cameraControls={true}
                      />
                    ) : (
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
                    )}
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex space-x-4">
                        <a 
                          href={`/portfolio/${project.id}`}
                          className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200"
                        >
                          <ExternalLink className="w-5 h-5 text-white" />
                        </a>
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

                    {/* Software & Year */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        {project.software}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {project.year}
                      </span>
                    </div>

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
                      <a 
                        href={`/portfolio/${project.id}`}
                        className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors duration-200 group"
                      >
                        View Details
                        <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                      </a>
                      
                      {project.modelUrl && (
                        <a 
                          href={project.modelUrl}
                          download
                          className="inline-flex items-center text-secondary hover:text-secondary/80 font-medium transition-colors duration-200"
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  )
}
