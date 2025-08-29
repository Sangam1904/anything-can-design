"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import ModelViewer from './ModelViewer'

// Main ThreeViewer component (fallback to ModelViewer)
export default function ThreeViewer({ 
  modelUrl, 
  className = '', 
  autoRotate = false, 
  showControls = true,
  cameraPosition = [0, 0, 5],
  scale = 1,
  backgroundColor = '#f8fafc',
  onLoad,
  onError
}) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  const handleLoad = () => {
    setIsLoading(false)
    if (onLoad) onLoad()
  }

  const handleError = (error) => {
    setIsLoading(false)
    setHasError(true)
    if (onError) onError(error)
  }

  if (!modelUrl) {
    return (
      <div className={`flex items-center justify-center bg-gray-100 dark:bg-gray-800 ${className}`}>
        <div className="text-center text-gray-500 dark:text-gray-400">
          <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
          <p className="text-sm">No 3D model available</p>
        </div>
      </div>
    )
  }

  return (
    <div className={`relative ${className}`}>
      {/* Loading overlay */}
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-gray-100 dark:bg-gray-800 flex items-center justify-center z-10"
        >
          <div className="text-center">
            <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Loading 3D Model...</p>
          </div>
        </motion.div>
      )}

      {/* Error overlay */}
      {hasError && (
        <div className="absolute inset-0 bg-red-50 dark:bg-red-900/20 flex items-center justify-center z-10">
          <div className="text-center text-red-600 dark:text-red-400">
            <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <p className="text-sm font-medium">Failed to load 3D model</p>
            <p className="text-xs mt-1">Please try refreshing the page</p>
          </div>
        </div>
      )}

      {/* 3D Model Viewer */}
      <div style={{ background: backgroundColor }}>
        <ModelViewer
          modelPath={modelUrl}
          className="w-full h-full"
          onLoad={handleLoad}
          onError={handleError}
        />
      </div>

      {/* Controls info overlay */}
      {showControls && (
        <div className="absolute bottom-4 left-4 bg-black/50 text-white text-xs px-3 py-2 rounded-lg backdrop-blur-sm">
          <div className="flex items-center space-x-4">
            <span>🖱️ Drag to rotate</span>
            <span>🔍 Scroll to zoom</span>
            <span>✋ Right-click to pan</span>
          </div>
        </div>
      )}
    </div>
  )
}

// Preload models for better performance
export function preloadModel(url) {
  if (url) {
    // Preloading logic can be added here if needed
    console.log('Preloading model:', url)
  }
}
