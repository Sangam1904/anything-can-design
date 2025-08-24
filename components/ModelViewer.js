import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function ModelViewer({ 
  src, 
  alt = '3D Model', 
  className = '', 
  autoRotate = true, 
  cameraControls = true,
  shadowIntensity = 1,
  exposure = 1,
  environmentImage = 'neutral',
  showControls = true
}) {
  const modelRef = useRef(null)

  useEffect(() => {
    // Load model-viewer script if not already loaded
    if (typeof window !== 'undefined' && !window.customElements.get('model-viewer')) {
      const script = document.createElement('script')
      script.src = 'https://unpkg.com/@google/model-viewer@^3.4.0/dist/model-viewer.min.js'
      script.type = 'module'
      document.head.appendChild(script)
    }
  }, [])

  const handleModelLoad = () => {
    if (modelRef.current) {
      console.log('3D model loaded successfully')
    }
  }

  const handleModelError = (error) => {
    console.error('Error loading 3D model:', error)
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className={`relative ${className}`}
    >
      <model-viewer
        ref={modelRef}
        src={src}
        alt={alt}
        auto-rotate={autoRotate}
        camera-controls={cameraControls}
        shadow-intensity={shadowIntensity}
        exposure={exposure}
        environment-image={environmentImage}
        camera-orbit="45deg 55deg 2.5m"
        min-camera-orbit="auto auto 1m"
        max-camera-orbit="auto auto 10m"
        field-of-view="30deg"
        loading="eager"
        reveal="auto"
        ar
        ar-modes="webxr scene-viewer quick-look"
        ar-scale="auto"
        ar-placement="floor"
        ar-button
        onLoad={handleModelLoad}
        onError={handleModelError}
        className="w-full h-full rounded-lg"
        style={{
          '--poster-color': 'transparent',
          '--progress-bar-color': '#C8A951',
          '--progress-mask': '#ffffff'
        }}
      >
        {/* Loading indicator */}
        <div slot="progress-bar" className="progress-bar">
          <div className="progress-bar-fill"></div>
        </div>

        {/* Custom controls */}
        {showControls && (
          <div className="absolute bottom-4 right-4 flex flex-col space-y-2">
            <button
              onClick={() => modelRef.current?.resetCamera()}
              className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white transition-colors duration-200 shadow-lg"
              title="Reset Camera"
            >
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </button>
            
            <button
              onClick={() => {
                if (modelRef.current) {
                  modelRef.current.autoRotate = !modelRef.current.autoRotate
                }
              }}
              className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white transition-colors duration-200 shadow-lg"
              title="Toggle Auto Rotate"
            >
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </button>
          </div>
        )}

        {/* AR Button */}
        <button slot="ar-button" className="ar-button">
          View in AR
        </button>
      </model-viewer>

      {/* Fallback for unsupported browsers */}
      <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg" style={{ display: 'none' }}>
        <div className="text-center">
          <div className="w-16 h-16 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
          <p className="text-gray-600 dark:text-gray-400">3D model viewer not supported</p>
          <a 
            href={src} 
            download 
            className="text-primary hover:text-primary/80 font-medium mt-2 inline-block"
          >
            Download Model
          </a>
        </div>
      </div>

      <style jsx>{`
        model-viewer {
          width: 100%;
          height: 400px;
          background-color: #f8f9fa;
          border-radius: 12px;
          overflow: hidden;
        }
        
        .dark model-viewer {
          background-color: #1f2937;
        }
        
        .progress-bar {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 200px;
          height: 4px;
          background-color: rgba(255, 255, 255, 0.2);
          border-radius: 2px;
          overflow: hidden;
        }
        
        .progress-bar-fill {
          height: 100%;
          background-color: var(--progress-bar-color, #C8A951);
          transition: width 0.3s ease;
        }
        
        .ar-button {
          position: absolute;
          bottom: 16px;
          left: 16px;
          background-color: #007AFF;
          color: white;
          border: none;
          border-radius: 8px;
          padding: 8px 16px;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: background-color 0.2s ease;
        }
        
        .ar-button:hover {
          background-color: #0056CC;
        }
        
        @media (max-width: 768px) {
          model-viewer {
            height: 300px;
          }
        }
      `}</style>
    </motion.div>
  )
}
