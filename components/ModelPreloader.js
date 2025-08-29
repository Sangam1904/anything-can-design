"use client"

import { useEffect } from 'react'
import { preloadModel } from './ModelViewer'

export default function ModelPreloader({ projects = [] }) {
  useEffect(() => {
    // Preload all model URLs from projects
    projects.forEach(project => {
      if (project.modelUrl && project.hasModel) {
        preloadModel(project.modelUrl)
      }
    })
  }, [projects])

  // This component doesn't render anything
  return null
}
