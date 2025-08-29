"use client"

import { useState } from 'react'
import Layout from '../../components/Layout'
import { motion } from 'framer-motion'
import { Search, Filter, Download, ExternalLink } from 'lucide-react'
import dynamic from 'next/dynamic'
import ProjectDetailModal from '../../components/ProjectDetailModal'
import ModelPreloader from '../../components/ModelPreloader'

// Dynamically import ModelViewer to avoid SSR issues
const ModelViewer = dynamic(() => import('../../components/ModelViewer'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-64 bg-gray-800 dark:bg-gray-900 rounded-lg flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2"></div>
        <p className="text-gray-400 text-sm">Loading 3D viewer...</p>
      </div>
    </div>
  )
})
import { 
  generateProjectData, 
  getCategories, 
  getSoftware, 
  searchProjects 
} from '../../utils/projectDiscovery'

export default function Portfolio() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedSoftware, setSelectedSoftware] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const projects = generateProjectData()
  const categories = getCategories()
  const software = getSoftware()

  // Filter projects
  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory
    const matchesSoftware = selectedSoftware === 'all' || project.software === selectedSoftware

    return matchesSearch && matchesCategory && matchesSoftware
  })

  // Modal handlers
  const openProjectModal = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeProjectModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  const nextProject = () => {
    const currentIndex = filteredProjects.findIndex(p => p.id === selectedProject.id)
    const nextIndex = (currentIndex + 1) % filteredProjects.length
    setSelectedProject(filteredProjects[nextIndex])
  }

  const previousProject = () => {
    const currentIndex = filteredProjects.findIndex(p => p.id === selectedProject.id)
    const prevIndex = currentIndex === 0 ? filteredProjects.length - 1 : currentIndex - 1
    setSelectedProject(filteredProjects[prevIndex])
  }

  const hasNext = selectedProject && filteredProjects.length > 1
  const hasPrevious = selectedProject && filteredProjects.length > 1

  return (
    <Layout 
      title="Portfolio"
      description="Explore our portfolio of CAD modeling, 3D design, and product animation projects. From mechanical design to surface modeling, see our expertise in action."
    >
      {/* Preload all project models */}
      <ModelPreloader projects={projects} />
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
                    <ModelViewer 
                      modelPath={project.modelUrl}
                      className="h-full"
                      height="h-64"
                      showControls={false}
                      autoRotate={true}
                      onLoad={() => console.log('Model loaded:', project.title)}
                      onError={(error) => console.error('Model loading error for', project.title, ':', error)}
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex space-x-4">
                        <button 
                          onClick={() => openProjectModal(project)}
                          className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200"
                        >
                          <ExternalLink className="w-5 h-5 text-white" />
                        </button>
                        {project.modelUrl && project.hasModel && (
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
                      <button 
                        onClick={() => openProjectModal(project)}
                        className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors duration-200 group"
                      >
                        View Details
                        <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                      </button>
                      
                      {project.modelUrl && project.hasModel && (
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

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeProjectModal}
        onNext={nextProject}
        onPrevious={previousProject}
        hasNext={hasNext}
        hasPrevious={hasPrevious}
      />
    </Layout>
  )
}
