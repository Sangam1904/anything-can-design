import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Download, ExternalLink, Calendar, Tag, Code, Info, ArrowLeft, ArrowRight } from 'lucide-react'
import dynamic from 'next/dynamic'
import ModelErrorBoundary from './ModelErrorBoundary'

// Dynamically import ModelViewer to avoid SSR issues
const ModelViewer = dynamic(() => import('./ModelViewer'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-gray-800 dark:bg-gray-900 rounded-lg flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2"></div>
        <p className="text-gray-400 text-sm">Loading 3D viewer...</p>
      </div>
    </div>
  )
})

export default function ProjectDetailModal({
  project,
  isOpen,
  onClose,
  onNext,
  onPrevious,
  hasNext,
  hasPrevious
}) {
  // ALL HOOKS MUST BE CALLED UNCONDITIONALLY AT THE TOP LEVEL
  const [activeTab, setActiveTab] = useState('overview')
  const [isModelLoaded, setIsModelLoaded] = useState(false)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  // Define callbacks unconditionally
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') {
      onClose?.()
    } else if (e.key === 'ArrowRight' && hasNext) {
      onNext?.()
    } else if (e.key === 'ArrowLeft' && hasPrevious) {
      onPrevious?.()
    }
  }, [onClose, onNext, onPrevious, hasNext, hasPrevious])

  // Reset state when project changes
  useEffect(() => {
    if (project?.id) {
      setActiveTab('overview')
      setIsModelLoaded(false)
      setIsLightboxOpen(false)
      setLightboxIndex(0)
    }
  }, [project?.id])

  // Add/remove listeners conditionally INSIDE the effect
  useEffect(() => {
    if (!isOpen) return // guard inside the effect, not around the hook

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, handleKeyDown])

  // NOW we can have conditional returns after all hooks are declared
  if (!project || !isOpen) return null

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Info },
    { id: 'technical', label: 'Technical Details', icon: Code },
    { id: 'specifications', label: 'Specifications', icon: Tag }
  ]

  const galleryImages = (() => {
    if (project?.gallery && project.gallery.length) return project.gallery
    if (project?.image) return new Array(6).fill(project.image)
    return []
  })()

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-[90rem] max-h-[95vh] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-4">
              <h2 className="text-2xl font-playfair font-bold text-gray-900 dark:text-white">
                {project.title}
              </h2>
              {project.featured && (
                <span className="px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full">
                  Featured
                </span>
              )}
            </div>

            <div className="flex items-center space-x-2">
              {/* Navigation arrows */}
              {hasPrevious && (
                <button
                  onClick={onPrevious}
                  className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                  title="Previous project"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
              )}

              {hasNext && (
                <button
                  onClick={onNext}
                  className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                  title="Next project"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              )}

              <button
                onClick={onClose}
                className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                title="Close"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col lg:flex-row h-[calc(95vh-120px)]">
            {/* 3D Model Section */}
            <div className="lg:w-2/3 h-[28rem] lg:h-full bg-gray-50 dark:bg-gray-800">
              <ModelViewer
                modelPath={project.modelUrl}
                className="w-full h-full"
                height="h-full"
                showControls={true}
                autoRotate={false}
                onLoad={() => setIsModelLoaded(true)}
                onError={(error) => console.error('Model loading error:', error)}
              />
            </div>

            {/* Project Information Section */}
            <div className="lg:w-1/3 flex flex-col h-[28rem] lg:h-full">
              {/* Tabs */}
              <div className="flex border-b border-gray-200 dark:border-gray-700">
                {tabs.map((tab) => {
                  const Icon = tab.icon
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex-1 flex items-center justify-center space-x-2 px-4 py-3 text-sm font-medium transition-colors ${
                        activeTab === tab.id
                          ? 'text-primary border-b-2 border-primary bg-primary/5'
                          : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{tab.label}</span>
                    </button>
                  )
                })}
              </div>

              {/* Tab Content */}
              <div className="flex-1 overflow-y-auto p-6">
                {activeTab === 'overview' && (
                  <div className="space-y-6">
                    {/* Gallery */}
                    {galleryImages.length > 0 && (
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Project Gallery</h3>
                        <div className="flex space-x-3 overflow-x-auto pb-2">
                          {galleryImages.map((img, idx) => (
                            <button
                              key={idx}
                              onClick={() => { setIsLightboxOpen(true); setLightboxIndex(idx) }}
                              className="flex-shrink-0 w-28 h-20 rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-700 hover:ring-2 hover:ring-primary transition"
                              aria-label={`Open image ${idx + 1}`}
                            >
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img src={img} alt="Project image" className="w-full h-full object-cover" />
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                    {/* Basic Info */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        Project Overview
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Project Details */}
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Tag className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-600 dark:text-gray-300">
                          Category: <span className="font-medium">{project.category}</span>
                        </span>
                      </div>

                      <div className="flex items-center space-x-3">
                        <Code className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-600 dark:text-gray-300">
                          Software: <span className="font-medium">{project.software}</span>
                        </span>
                      </div>

                      <div className="flex items-center space-x-3">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-600 dark:text-gray-300">
                          Year: <span className="font-medium">{project.year}</span>
                        </span>
                      </div>
                    </div>

                    {/* Tags */}
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                        Technologies & Skills
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-xs font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'technical' && (
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Technical Details
                    </h3>

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
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Specifications
                    </h3>

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
              </div>

              {/* Action Buttons */}
              <div className="p-6 border-t border-gray-200 dark:border-gray-700">
                <div className="flex space-x-3">
                  {project.modelUrl && project.hasModel && (
                    <a
                      href={project.modelUrl}
                      download
                      className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-secondary text-white rounded-lg hover:bg-secondary/90 transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download Model</span>
                    </a>
                  )}

                  {project.videoUrl && (
                    <a
                      href={project.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Watch Video</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
      {/* Lightbox */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90" onClick={() => setIsLightboxOpen(false)}>
          <div className="relative max-w-5xl w-full px-6" onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={galleryImages[lightboxIndex]} alt="Project large" className="w-full max-h-[80vh] object-contain rounded-lg" />
            {/* Nav */}
            {galleryImages.length > 1 && (
              <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-2">
                <button
                  onClick={() => setLightboxIndex((lightboxIndex - 1 + galleryImages.length) % galleryImages.length)}
                  className="p-2 bg-white/20 hover:bg-white/30 rounded-full text-white"
                  aria-label="Previous image"
                >
                  ‹
                </button>
                <button
                  onClick={() => setLightboxIndex((lightboxIndex + 1) % galleryImages.length)}
                  className="p-2 bg-white/20 hover:bg-white/30 rounded-full text-white"
                  aria-label="Next image"
                >
                  ›
                </button>
              </div>
            )}
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-3 right-3 px-3 py-1 bg-white/20 hover:bg-white/30 rounded text-white"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </AnimatePresence>
  )
}
