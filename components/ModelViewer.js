"use client"

import React, { Suspense, useEffect, useRef, useState, useCallback } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, useGLTF, Html } from '@react-three/drei'
import * as THREE from 'three'

// Model preloading cache
const modelCache = new Map()
const preloadQueue = new Set()

// Preload a model
export function preloadModel(modelPath) {
  if (!modelPath || preloadQueue.has(modelPath)) return
  
  preloadQueue.add(modelPath)
  
  try {
    useGLTF.preload(modelPath)
    modelCache.set(modelPath, { status: 'preloaded', timestamp: Date.now() })
  } catch (error) {
    console.warn('Failed to preload model:', modelPath, error)
    modelCache.set(modelPath, { status: 'failed', error, timestamp: Date.now() })
  }
}

// Clear old cache entries (older than 5 minutes)
function cleanupCache() {
  const fiveMinutesAgo = Date.now() - 5 * 60 * 1000
  for (const [path, data] of modelCache.entries()) {
    if (data.timestamp < fiveMinutesAgo) {
      modelCache.delete(path)
    }
  }
}

// Loading component with progress
function LoadingFallback({ progress = 0 }) {
  return (
    <Html center>
      <div className="flex flex-col items-center space-y-3">
        <div className="relative">
          <div className="w-12 h-12 border-4 border-gray-200 dark:border-gray-700 rounded-full"></div>
          <div 
            className="absolute top-0 left-0 w-12 h-12 border-4 border-blue-600 rounded-full animate-spin"
            style={{
              borderTopColor: 'transparent',
              transform: `rotate(${progress * 360}deg)`
            }}
          ></div>
        </div>
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">Loading 3D Model</p>
          {progress > 0 && (
            <p className="text-gray-500 dark:text-gray-500 text-xs mt-1">
              {Math.round(progress * 100)}%
            </p>
          )}
        </div>
      </div>
    </Html>
  )
}

// Error component with retry
function ErrorFallback({ error, onRetry, retryCount = 0 }) {
  return (
    <Html center>
      <div className="flex flex-col items-center space-y-3 text-center">
        <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center">
          <svg className="w-8 h-8 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>
        <div>
          <p className="text-red-600 dark:text-red-400 text-sm font-medium">Model not available</p>
          {error && (
            <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">
              {error.message || error}
            </p>
          )}
          {retryCount > 0 && (
            <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">
              Retry {retryCount}/3
            </p>
          )}
        </div>
        {onRetry && retryCount < 3 && (
          <button
            onClick={onRetry}
            className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors"
          >
            Try Again
          </button>
        )}
      </div>
    </Html>
  )
}

// Model component with retry logic
function Model({ modelPath, onLoad, onError, retryCount = 0, onRetry }) {
  const [hasError, setHasError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [isLoaded, setIsLoaded] = useState(false)
  const sceneRef = useRef(null)
  
  // Reset error state when modelPath changes
  useEffect(() => {
    setHasError(false)
    setErrorMessage('')
    setIsLoaded(false)
  }, [modelPath])

  // Move useGLTF outside try-catch to follow React rules of hooks
  let gltfResult = null
  try {
    gltfResult = useGLTF(modelPath)
  } catch (error) {
    console.error('Error loading model:', error)
    return (
      <ErrorFallback 
        error="Failed to load model" 
        onRetry={onRetry}
        retryCount={retryCount}
      />
    )
  }

  // If useGLTF failed, show error
  if (!gltfResult || !gltfResult.scene) {
    return (
      <ErrorFallback 
        error="Failed to load model" 
        onRetry={onRetry}
        retryCount={retryCount}
      />
    )
  }

  const { scene } = gltfResult
  
  // Process the model when it loads
  useEffect(() => {
    if (scene && !isLoaded) {
      try {
        // Store reference for cleanup
        sceneRef.current = scene
        
        // Calculate bounding box
        const box = new THREE.Box3().setFromObject(scene)
        const center = box.getCenter(new THREE.Vector3())
        const size = box.getSize(new THREE.Vector3())
        
        // Center the model
        scene.position.sub(center)
        
        // Scale to fit in view
        const maxDim = Math.max(size.x, size.y, size.z)
        const scale = 4 / maxDim
        scene.scale.setScalar(scale)
        
        setIsLoaded(true)
        setHasError(false)
        
        // Update cache
        modelCache.set(modelPath, { status: 'loaded', timestamp: Date.now() })
        
        if (onLoad) onLoad()
      } catch (error) {
        console.error('Error processing model:', error)
        setHasError(true)
        setErrorMessage('Error processing model')
        if (onError) onError(error)
      }
    }
  }, [scene, modelPath, isLoaded, onLoad, onError])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (sceneRef.current) {
        // Dispose of geometries and materials
        sceneRef.current.traverse((child) => {
          if (child.geometry) {
            child.geometry.dispose()
          }
          if (child.material) {
            if (Array.isArray(child.material)) {
              child.material.forEach(material => material.dispose())
            } else {
              child.material.dispose()
            }
          }
        })
      }
    }
  }, [])

  if (hasError) {
    return (
      <ErrorFallback 
        error={errorMessage} 
        onRetry={onRetry}
        retryCount={retryCount}
      />
    )
  }

  return <primitive object={scene} />
}

// Main ModelViewer component
export default function ModelViewer({ 
  modelPath, 
  className = '', 
  height = 'h-64', 
  onLoad, 
  onError,
  autoRotate = false,
  showControls = true,
  cameraPosition = [0, 0, 5],
  scale = 1,
  position = [0, 0, 0],
  rotation = [0, 0, 0]
}) {
  const [isClient, setIsClient] = useState(false)
  const [retryCount, setRetryCount] = useState(0)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [isLoading, setIsLoading] = useState(false)

  // Initialize client-side rendering
  useEffect(() => {
    setIsClient(true)
    
    // Cleanup cache periodically
    const interval = setInterval(cleanupCache, 60000) // Every minute
    return () => clearInterval(interval)
  }, [])

  // Preload model when component mounts or modelPath changes
  useEffect(() => {
    if (modelPath && isClient) {
      preloadModel(modelPath)
    }
  }, [modelPath, isClient])

  // Handle retry
  const handleRetry = useCallback(() => {
    if (retryCount < 3) {
      setRetryCount(prev => prev + 1)
      setLoadingProgress(0)
      setIsLoading(true)
      
      // Simulate loading progress
      const progressInterval = setInterval(() => {
        setLoadingProgress(prev => {
          if (prev >= 0.9) {
            clearInterval(progressInterval)
            return 0.9
          }
          return prev + 0.1
        })
      }, 100)
      
      // Clear progress after a delay
      setTimeout(() => {
        setIsLoading(false)
        setLoadingProgress(0)
      }, 2000)
    }
  }, [retryCount])

  // Handle successful load
  const handleLoad = useCallback(() => {
    setRetryCount(0)
    setLoadingProgress(0)
    setIsLoading(false)
    if (onLoad) onLoad()
  }, [onLoad])

  // Handle error
  const handleError = useCallback((error) => {
    setIsLoading(false)
    setLoadingProgress(0)
    if (onError) onError(error)
  }, [onError])

  // Show placeholder if no model path
  if (!modelPath) {
    return (
      <div className={`flex items-center justify-center ${height} bg-gray-800 dark:bg-gray-900 text-gray-400 rounded-lg ${className}`}>
        <div className="text-center">
          <svg className="w-12 h-12 mx-auto mb-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
          <p className="text-sm font-medium">3D model not available</p>
        </div>
      </div>
    )
  }

  // Show loading during SSR
  if (!isClient) {
    return (
      <div className={`flex items-center justify-center ${height} bg-gray-800 dark:bg-gray-900 text-gray-400 rounded-lg ${className}`}>
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2"></div>
          <p className="text-sm">Loading 3D viewer...</p>
        </div>
      </div>
    )
  }

  return (
    <div className={`relative w-full ${height} bg-gradient-to-br from-gray-800 to-gray-900 dark:from-gray-900 dark:to-gray-800 rounded-lg shadow-lg overflow-hidden ${className}`}>
      <Canvas
        camera={{ position: cameraPosition, fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        shadows
      >
        {/* Lighting */}
        <ambientLight intensity={0.4} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={1}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />

        {/* Environment */}
        <Environment preset="city" />

        {/* Controls */}
        {showControls && (
          <OrbitControls
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
            autoRotate={autoRotate}
            autoRotateSpeed={1}
            dampingFactor={0.05}
            maxDistance={20}
            minDistance={1}
          />
        )}

        {/* Model */}
        <Suspense fallback={<LoadingFallback progress={loadingProgress} />}>
          <Model 
            modelPath={modelPath} 
            onLoad={handleLoad} 
            onError={handleError}
            retryCount={retryCount}
            onRetry={handleRetry}
          />
        </Suspense>
      </Canvas>

      {/* Controls Overlay */}
      {showControls && (
        <div className="absolute top-2 left-2">
          <div className="bg-black/50 backdrop-blur-sm rounded px-2 py-1">
            <div className="text-xs text-white space-y-1">
              <div>🖱️ Drag: Rotate</div>
              <div>🖱️ Scroll: Zoom</div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
