import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import { motion } from 'framer-motion'
import { ArrowLeft, Download, ExternalLink, Calendar, Tag, Code, Info, Image as ImageIcon, FileText } from 'lucide-react'
import ThreeViewer from '../../components/ThreeViewer'
import { getProjectById, generateProjectData } from '../../utils/projectDiscovery'

export default function ProjectDetail() {
  const router = useRouter()
  const { id } = router.query
  const [project, setProject] = useState(null)
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('overview')
  const [isModelLoaded, setIsModelLoaded] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)

  useEffect(() => {
    if (id) {
      const foundProject = getProjectById(parseInt(id))
      if (foundProject) {
        setProject(foundProject)
      } else {
        // Project not found, redirect to portfolio
        router.push('/portfolio')
      }
      setLoading(false)
    }
  }, [id, router])

  if (loading) {
    return (
      <Layout title="Loading..." description="Loading project details...">
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600 dark:text-gray-400">Loading project...</p>
          </div>
        </div>
      </Layout>
    )
  }

  if (!project) {
    return (
      <Layout title="Project Not Found" description="The requested project could not be found.">
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Project Not Found</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-6">The requested project could not be found.</p>
            <button
              onClick={() => router.push('/portfolio')}
              className="btn-primary"
            >
              Back to Portfolio
            </button>
          </div>
        </div>
      </Layout>
    )
  }

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Info },
    { id: 'technical', label: 'Technical Details', icon: Code },
    { id: 'specifications', label: 'Specifications', icon: Tag },
    { id: 'gallery', label: 'Image Gallery', icon: ImageIcon },
    { id: 'downloads', label: 'Downloads', icon: FileText }
  ]

  // Mock image gallery data - you can replace this with actual project images
  const projectImages = [
    { id: 1, src: '/images/projects/hydrogen-bike-1.jpg', alt: 'Hydrogen Bike Front View', title: 'Front View' },
    { id: 2, src: '/images/projects/hydrogen-bike-2.jpg', alt: 'Hydrogen Bike Side View', title: 'Side View' },
    { id: 3, src: '/images/projects/hydrogen-bike-3.jpg', alt: 'Hydrogen Bike Detail', title: 'Detail View' },
    { id: 4, src: '/images/projects/hydrogen-bike-4.jpg', alt: 'Hydrogen Bike Assembly', title: 'Assembly' },
  ]

  // Mock downloadable materials
  const downloadableMaterials = [
    { id: 1, name: '3D Model File', type: 'GLB', size: '70.3 MB', url: project.modelUrl },
    { id: 2, name: 'Technical Specifications', type: 'PDF', size: '2.1 MB', url: '/downloads/tech-specs.pdf' },
    { id: 3, name: 'Assembly Instructions', type: 'PDF', size: '1.8 MB', url: '/downloads/assembly.pdf' },
    { id: 4, name: 'CAD Files', type: 'ZIP', size: '45.2 MB', url: '/downloads/cad-files.zip' },
  ]

  return (
    <Layout 
      title={project.title}
      description={project.description}
    >
      {/* Header Section */}
      <section className="pt-20 pb-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-dark dark:to-gray-900">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Back Button */}
            <button
              onClick={() => router.push('/portfolio')}
              className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </button>

            {/* Project Header */}
            <div className="mb-8">
              <div className="flex items-center space-x-4 mb-4">
                <h1 className="text-4xl lg:text-5xl font-playfair font-bold text-gray-900 dark:text-white">
                  {project.title}
                </h1>
                {project.featured && (
                  <span className="px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full">
                    Featured
                  </span>
                )}
              </div>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 leading-relaxed max-w-4xl">
                {project.description}
              </p>

              {/* Project Meta */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center space-x-2">
                  <Tag className="w-4 h-4" />
                  <span>{project.category}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Code className="w-4 h-4" />
                  <span>{project.software}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>{project.year}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* 3D Model Section - Wide */}
            <div className="lg:col-span-3">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden"
              >
                <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                  <h2 className="text-2xl font-playfair font-semibold text-gray-900 dark:text-white">
                    3D Model Viewer
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                    Interactive 3D model with pan, zoom, and rotate controls. Use your mouse to explore the model.
                  </p>
                </div>
                
                <div className="h-96 lg:h-[600px]">
                  {project.hasModel ? (
                    <ThreeViewer
                      modelUrl={project.modelUrl}
                      className="w-full h-full"
                      autoRotate={true}
                      showControls={true}
                      onLoad={() => setIsModelLoaded(true)}
                      onError={(error) => console.error('Model loading error:', error)}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800">
                      <div className="text-center text-gray-500 dark:text-gray-400">
                        <div className="w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                          </svg>
                        </div>
                        <p className="text-lg font-medium mb-2">3D Model Coming Soon</p>
                        <p className="text-sm">This project's 3D model is being prepared</p>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>

            {/* Project Information Section */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden sticky top-8"
              >
                {/* Tabs */}
                <div className="flex flex-wrap border-b border-gray-200 dark:border-gray-700">
                  {tabs.map((tab) => {
                    const Icon = tab.icon
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex-1 min-w-0 flex items-center justify-center space-x-2 px-3 py-3 text-xs font-medium transition-colors ${
                          activeTab === tab.id
                            ? 'text-primary border-b-2 border-primary bg-primary/5'
                            : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
                        }`}
                      >
                        <Icon className="w-3 h-3" />
                        <span className="hidden sm:inline">{tab.label}</span>
                      </button>
                    )
                  })}
                </div>

                {/* Tab Content */}
                <div className="p-6 max-h-96 overflow-y-auto">
                  {activeTab === 'overview' && (
                    <div className="space-y-6">
                      {/* Tags */}
                      <div>
                        <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-3">
                          Technologies & Skills
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 text-xs font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Project Details */}
                      <div className="space-y-4">
                        <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-700">
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Category</span>
                          <span className="text-sm text-gray-600 dark:text-gray-400">{project.category}</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-700">
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Software</span>
                          <span className="text-sm text-gray-600 dark:text-gray-400">{project.software}</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-700">
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Year</span>
                          <span className="text-sm text-gray-600 dark:text-gray-400">{project.year}</span>
                        </div>
                        {project.modelFile && (
                          <div className="flex justify-between items-center py-2">
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">File Size</span>
                            <span className="text-sm text-gray-600 dark:text-gray-400">
                              {(project.modelFile.size / 1024 / 1024).toFixed(1)} MB
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {activeTab === 'technical' && (
                    <div className="space-y-6">
                      {project.technicalDetails ? (
                        <ul className="space-y-3">
                          {project.technicalDetails.map((detail, index) => (
                            <li key={index} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-sm text-gray-600 dark:text-gray-300">
                                {detail}
                              </span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-gray-500 dark:text-gray-400 text-sm">
                          Technical details will be available soon.
                        </p>
                      )}
                    </div>
                  )}

                  {activeTab === 'specifications' && (
                    <div className="space-y-6">
                      {project.specifications ? (
                        <div className="space-y-4">
                          {Object.entries(project.specifications).map(([key, value]) => (
                            <div key={key} className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-700 last:border-b-0">
                              <span className="text-sm font-medium text-gray-700 dark:text-gray-300 capitalize">
                                {key.replace(/([A-Z])/g, ' $1').trim()}:
                              </span>
                              <span className="text-sm text-gray-600 dark:text-gray-400">
                                {value}
                              </span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-gray-500 dark:text-gray-400 text-sm">
                          Specifications will be available soon.
                        </p>
                      )}
                    </div>
                  )}

                  {activeTab === 'gallery' && (
                    <div className="space-y-4">
                      <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-3">
                        Project Images
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                        {projectImages.map((image) => (
                          <div
                            key={image.id}
                            className="relative group cursor-pointer"
                            onClick={() => setSelectedImage(image)}
                          >
                            <div className="aspect-square bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
                              <div className="w-full h-full flex items-center justify-center">
                                <ImageIcon className="w-8 h-8 text-gray-400" />
                              </div>
                            </div>
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors rounded-lg flex items-center justify-center">
                              <span className="text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                                {image.title}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeTab === 'downloads' && (
                    <div className="space-y-4">
                      <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-3">
                        Downloadable Materials
                      </h4>
                      <div className="space-y-3">
                        {downloadableMaterials.map((material) => (
                          <a
                            key={material.id}
                            href={material.url}
                            download
                            className="flex items-center justify-between p-3 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                          >
                            <div className="flex items-center space-x-3">
                              <Download className="w-4 h-4 text-gray-500" />
                              <div>
                                <p className="text-sm font-medium text-gray-900 dark:text-white">{material.name}</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">{material.type} • {material.size}</p>
                              </div>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
              <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <ImageIcon className="w-16 h-16 text-gray-400" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-4">{selectedImage.title}</h3>
            </div>
          </div>
        </div>
      )}
    </Layout>
  )
}
