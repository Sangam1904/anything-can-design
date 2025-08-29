// Client-safe project discovery system
// This version doesn't use Node.js modules and works in both server and client contexts

// Supported 3D model file extensions
const SUPPORTED_MODEL_EXTENSIONS = ['.gltf', '.glb', '.obj', '.fbx', '.dae', '.3ds']

// Project metadata structure
const PROJECT_METADATA = {
  // Hydrogen Bike - existing project
  'hydrogen-bike': {
    id: 1,
    title: 'Hydrogen Bike Design',
    category: 'Mechanical Design',
    software: 'SOLIDWORKS',
    description: 'Complete 3D modeling and assembly design of a hydrogen-powered motorcycle with detailed engineering analysis.',
    image: '/images/projects/p1.jpg', // Use existing image
    gallery: [
      '/images/projects/p1.jpg' // Only use existing image
    ],
    modelUrl: '/models/hydrogen-bike.glb',
    videoUrl: 'https://www.youtube.com/watch?v=example1',
    tags: ['Assembly Design', 'Mechanical', 'Engineering Analysis'],
    featured: true,
    year: 2024,
    specifications: {
      complexity: 'High',
      parts: '150+ components',
      analysis: 'Structural & Thermal',
      manufacturing: 'Production Ready'
    },
    technicalDetails: [
      'Complete assembly modeling with 150+ components',
      'Structural analysis for load-bearing components',
      'Thermal analysis for hydrogen storage system',
      'Manufacturing-ready design with detailed drawings',
      'Ergonomic design optimization for rider comfort'
    ]
  },
  
  // Solar Plant - existing project
  'solar-plant': {
    id: 2,
    title: 'Solar Floating Plant',
    category: 'Industrial Design',
    software: 'CATIA',
    description: 'Innovative solar panel floating system design with structural analysis and optimization.',
    image: '/images/projects/p1.jpg', // Use existing image
    gallery: [
      '/images/projects/p1.jpg' // Only use existing image
    ],
    modelUrl: '/models/solar-plant.glb',
    videoUrl: 'https://www.youtube.com/watch?v=example2',
    tags: ['Structural Analysis', 'Renewable Energy', 'Optimization'],
    featured: true,
    year: 2024,
    specifications: {
      complexity: 'High',
      scale: 'Industrial',
      analysis: 'Structural & Environmental',
      deployment: 'Water-based'
    },
    technicalDetails: [
      'Floating platform design for solar panel deployment',
      'Structural analysis for water environment loads',
      'Environmental impact optimization',
      'Modular design for scalable deployment',
      'Weather-resistant engineering solutions'
    ]
  },
  
  // Drone Assembly - existing project
  'drone': {
    id: 3,
    title: 'Drone Assembly',
    category: 'Product Design',
    software: 'SOLIDWORKS',
    description: 'Complete drone design with aerodynamic optimization and manufacturing-ready components.',
    image: '/images/projects/p1.jpg', // Use existing image
    gallery: [
      '/images/projects/p1.jpg' // Only use existing image
    ],
    modelUrl: '/models/drone.glb',
    videoUrl: 'https://www.youtube.com/watch?v=example3',
    tags: ['Aerodynamics', 'Product Design', 'Manufacturing'],
    featured: true,
    year: 2023,
    specifications: {
      complexity: 'Medium',
      parts: '50+ components',
      analysis: 'Aerodynamic & Structural',
      manufacturing: 'Production Ready'
    },
    technicalDetails: [
      'Complete drone assembly with 50+ components',
      'Aerodynamic optimization for flight efficiency',
      'Structural analysis for load-bearing components',
      'Manufacturing-ready design with detailed drawings',
      'Modular design for easy maintenance and upgrades'
    ]
  },
  
  // Car Surfacing - existing project
  'car-surfacing': {
    id: 4,
    title: 'Luxury Car Surfacing',
    category: 'Surface Modeling',
    software: 'CATIA',
    description: 'High-end automotive surface modeling with complex curvature and aesthetic design.',
    image: '/images/projects/p1.jpg', // Use existing image
    gallery: [
      '/images/projects/p1.jpg' // Only use existing image
    ],
    modelUrl: '/models/car-surfacing.glb',
    videoUrl: 'https://www.youtube.com/watch?v=example4',
    tags: ['Surface Modeling', 'Automotive', 'Aesthetic Design'],
    featured: true,
    year: 2023,
    specifications: {
      complexity: 'High',
      surfaces: 'Complex Curvature',
      quality: 'Class A',
      application: 'Luxury Automotive'
    },
    technicalDetails: [
      'Complex surface modeling with Class A quality',
      'Aesthetic design optimization',
      'Manufacturing feasibility analysis',
      'Surface continuity and curvature analysis',
      'Design for manufacturing considerations'
    ]
  },
  
  // Add your new project metadata here - EXAMPLE:
  'your-new-model': {
    id: 5,
    title: 'Your New Model Title',
    category: 'Your Category',
    software: 'Your Software',
    description: 'Detailed description of your new 3D model project.',
    image: '/images/projects/p1.jpg', // Use existing image
    modelUrl: '/models/your-new-model.glb',
    videoUrl: 'https://www.youtube.com/watch?v=your-video',
    tags: ['Tag1', 'Tag2', 'Tag3'],
    featured: true,
    year: 2024,
    specifications: {
      complexity: 'Medium',
      parts: '50+ components',
      analysis: 'Structural',
      application: 'Your Application'
    },
    technicalDetails: [
      'Technical detail 1',
      'Technical detail 2',
      'Technical detail 3',
      'Technical detail 4',
      'Technical detail 5',
      
      ]
    },    
  'your-new-model-2': {
      id: 6,
    title: 'Your New Model Title 2',
    category: 'Mechanical Design',
    software: 'SOLIDWORKS',
    description: 'Detailed description of your new 3D model project.',
    image: '/images/projects/p1.jpg', // Use existing image
    modelUrl: '/models/your-new-model-2.glb',
    videoUrl: 'https://www.youtube.com/watch?v=your-video',
    tags: ['Tag1', 'Tag2', 'Tag3'],
    featured: true,
    year: 2024,
    specifications: {
      complexity: 'Medium',
      parts: '50+ components',
      analysis: 'Structural',
      application: 'Your Application'
    },
    technicalDetails: [
      'Technical detail 1',
      'Technical detail 2',
      'Technical detail 3',
      'Technical detail 4',
      'Technical detail 5',
      
      ]
    }
}

// Known model files (manually maintained)
const KNOWN_MODEL_FILES = [
  {
    filename: 'hydrogen-bike.glb',
    name: 'hydrogen-bike',
    extension: '.glb',
    path: '/models/hydrogen-bike.glb',
    size: 73669932 // 70.3 MB in bytes
  },
  {
    filename: 'solar-plant.glb',
    name: 'solar-plant',
    extension: '.glb',
    path: '/models/solar-plant.glb',
    size: 20039216 // 19.1 MB in bytes
  },
  {
      filename: 'your-new-model-2.glb',
      name: 'your-new-model-2',
    extension: '.glb',
    path: '/models/your-new-model-2.glb',
    size: 10039216 // 9.6 MB in bytes
  },
  // Add your new model here - EXAMPLE:
  // {
  //   filename: 'your-new-model.glb',
  //   name: 'your-new-model',
  //   extension: '.glb',
  //   path: '/models/your-new-model.glb',
  //   size: 52428800 // 50 MB in bytes (replace with actual file size)
  // }
]

/**
 * Get known model files (client-safe version)
 * @returns {Array} Array of known model files
 */
export function discoverModelFiles() {
  return KNOWN_MODEL_FILES
}

/**
 * Generate dynamic project data by combining metadata with known models
 * @returns {Array} Array of complete project objects
 */
export function generateProjectData() {
  const modelFiles = discoverModelFiles()
  const projects = []
  
  // Process each model file and match with metadata
  modelFiles.forEach(modelFile => {
    const projectKey = modelFile.name.toLowerCase().replace(/[^a-z0-9]/g, '-')
    const metadata = PROJECT_METADATA[projectKey]
    
    if (metadata) {
      // Found matching metadata, create complete project object
      projects.push({
        ...metadata,
        modelFile,
        modelUrl: modelFile.path,
        hasModel: true
      })
    } else {
      // No metadata found, create generic project object
      const genericProject = {
        id: projects.length + 1,
        title: modelFile.name.split('-').map(word => 
          word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' '),
        category: '3D Design',
        software: 'Unknown',
        description: `3D model design project: ${modelFile.name}`,
        image: null,
        modelUrl: modelFile.path,
        videoUrl: null,
        tags: ['3D Design', 'CAD Modeling'],
        featured: false,
        year: new Date().getFullYear(),
        modelFile,
        hasModel: true,
        specifications: {
          complexity: 'Unknown',
          fileSize: `${(modelFile.size / 1024 / 1024).toFixed(1)} MB`
        },
        technicalDetails: [
          '3D model design and optimization',
          'CAD modeling and assembly',
          'File format: ' + modelFile.extension.toUpperCase()
        ]
      }
      projects.push(genericProject)
    }
  })
  
  // Add projects that have metadata but no model files (for future models)
  Object.entries(PROJECT_METADATA).forEach(([key, metadata]) => {
    const hasModelFile = projects.some(p => p.id === metadata.id)
    if (!hasModelFile) {
      projects.push({
        ...metadata,
        modelUrl: null,
        hasModel: false,
        modelFile: null
      })
    }
  })

  // Merge admin-saved projects from localStorage (client only)
  if (typeof window !== 'undefined') {
    try {
      const adminProjects = JSON.parse(localStorage.getItem('admin_projects') || '[]')
      if (Array.isArray(adminProjects)) {
        adminProjects.forEach(p => {
          projects.push({
            ...p,
            hasModel: !!p.modelUrl
          })
        })
      }
    } catch {}
  }
  
  return projects.sort((a, b) => a.id - b.id)
}

/**
 * Get project by ID
 * @param {number} id - Project ID
 * @returns {Object|null} Project object or null if not found
 */
export function getProjectById(id) {
  const projects = generateProjectData()
  return projects.find(project => project.id === parseInt(id)) || null
}

/**
 * Get projects by category
 * @param {string} category - Category name
 * @returns {Array} Array of projects in the specified category
 */
export function getProjectsByCategory(category) {
  const projects = generateProjectData()
  if (category === 'all') return projects
  return projects.filter(project => project.category === category)
}

/**
 * Get projects by software
 * @param {string} software - Software name
 * @returns {Array} Array of projects using the specified software
 */
export function getProjectsBySoftware(software) {
  const projects = generateProjectData()
  if (software === 'all') return projects
  return projects.filter(project => project.software === software)
}

/**
 * Search projects by text
 * @param {string} searchTerm - Search term
 * @returns {Array} Array of matching projects
 */
export function searchProjects(searchTerm) {
  const projects = generateProjectData()
  const term = searchTerm.toLowerCase()
  
  return projects.filter(project => 
    project.title.toLowerCase().includes(term) ||
    project.description.toLowerCase().includes(term) ||
    project.tags.some(tag => tag.toLowerCase().includes(term)) ||
    project.software.toLowerCase().includes(term)
  )
}

/**
 * Get all available categories
 * @returns {Array} Array of unique categories
 */
export function getCategories() {
  const projects = generateProjectData()
  const categories = [...new Set(projects.map(p => p.category))]
  return ['all', ...categories]
}

/**
 * Get all available software
 * @returns {Array} Array of unique software
 */
export function getSoftware() {
  const projects = generateProjectData()
  const software = [...new Set(projects.map(p => p.software))]
  return ['all', ...software]
}

/**
 * Get featured projects
 * @returns {Array} Array of featured projects
 */
export function getFeaturedProjects() {
  const projects = generateProjectData()
  return projects.filter(project => project.featured)
}
