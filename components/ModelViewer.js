import React, { Suspense, useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, useGLTF, Html } from '@react-three/drei'
import * as THREE from 'three'

// Loading fallback component
function LoadingFallback() {
  return (
    <Html center>
      <div className="flex items-center space-x-2">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        <span className="text-gray-600 dark:text-gray-400">Loading 3D Model...</span>
      </div>
    </Html>
  )
}

// Model loader component with error handling
function Model({ modelPath }) {
  const { scene } = useGLTF(modelPath)
  
  // Center and scale the model
  useEffect(() => {
    if (scene) {
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
    }
  }, [scene])

  return <primitive object={scene} />
}

// Main ModelViewer component
export default function ModelViewer({ modelPath, className = '', height = 'h-64' }) {
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

  return (
    <div className={`relative w-full ${height} bg-gradient-to-br from-gray-800 to-gray-900 dark:from-gray-900 dark:to-gray-800 rounded-lg shadow-lg overflow-hidden ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
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
        <OrbitControls
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          autoRotate={false}
          autoRotateSpeed={1}
          dampingFactor={0.05}
          maxDistance={20}
          minDistance={1}
        />

        {/* Model */}
        <Suspense fallback={<LoadingFallback />}>
          <Model modelPath={modelPath} />
        </Suspense>
      </Canvas>

      {/* Controls Overlay */}
      <div className="absolute top-2 left-2">
        <div className="bg-black/50 backdrop-blur-sm rounded px-2 py-1">
          <div className="text-xs text-white space-y-1">
            <div>🖱️ Drag: Rotate</div>
            <div>🖱️ Scroll: Zoom</div>
          </div>
        </div>
      </div>
    </div>
  )
}
