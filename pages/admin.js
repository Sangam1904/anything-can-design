import { useEffect, useState } from 'react'
import Layout from '../components/Layout'

export default function Admin() {
  const [isAuthed, setIsAuthed] = useState(false)
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [project, setProject] = useState({
    title: '',
    shortDescription: '',
    description: '',
    softwareUsed: '',
    tags: '',
    stepPath: '',
    gltfPath: '',
    thumbnail: '',
    gallery: '',
  })

  useEffect(() => {
    const ok = localStorage.getItem('admin_ok') === 'true'
    setIsAuthed(ok)
  }, [])

  const handleLogin = (e) => {
    e.preventDefault()
    if (password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD || password === 'designanything') {
      localStorage.setItem('admin_ok', 'true')
      setIsAuthed(true)
    } else {
      setMessage('Invalid password')
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setProject((p) => ({ ...p, [name]: value }))
  }

  const handleSave = (e) => {
    e.preventDefault()
    try {
      const gallery = project.gallery
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean)
      const software = project.softwareUsed
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean)
      const tags = project.tags
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean)

      const entry = {
        id: Date.now(),
        title: project.title,
        category: '3D Design',
        software: software.join(', '),
        description: project.shortDescription || project.description,
        image: project.thumbnail || '/images/projects/your-new-model.jpg',
        modelUrl: project.gltfPath || '',
        stepUrl: project.stepPath || '',
        tags,
        featured: false,
        hasModel: !!project.gltfPath,
        gallery,
        specifications: {},
        technicalDetails: [],
      }

      const existing = JSON.parse(localStorage.getItem('admin_projects') || '[]')
      existing.push(entry)
      localStorage.setItem('admin_projects', JSON.stringify(existing))
      setMessage('Project saved. It will appear in Portfolio (client-side only).')
      setProject({ title: '', shortDescription: '', description: '', softwareUsed: '', tags: '', stepPath: '', gltfPath: '', thumbnail: '', gallery: '' })
    } catch (err) {
      setMessage('Failed to save: ' + err.message)
    }
  }

  if (!isAuthed) {
    return (
      <Layout title="Admin Login" description="Admin access">
        <section className="pt-24 pb-16">
          <div className="container-custom">
            <form onSubmit={handleLogin} className="max-w-md mx-auto card p-6 space-y-4">
              <h1 className="text-2xl font-semibold mb-2">Admin Login</h1>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="w-full px-4 py-3 border rounded-lg" />
              <button className="btn-primary w-full" type="submit">Enter</button>
              {message && <p className="text-sm text-red-600">{message}</p>}
            </form>
          </div>
        </section>
      </Layout>
    )
  }

  return (
    <Layout title="Admin" description="Add portfolio projects">
      <section className="pt-24 pb-16">
        <div className="container-custom">
          <h1 className="text-3xl font-playfair font-bold mb-6">Add Project</h1>
          <form onSubmit={handleSave} className="card p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <input name="title" value={project.title} onChange={handleChange} placeholder="Title" className="px-4 py-3 border rounded-lg" />
            <input name="softwareUsed" value={project.softwareUsed} onChange={handleChange} placeholder="Software (comma-separated)" className="px-4 py-3 border rounded-lg" />
            <input name="tags" value={project.tags} onChange={handleChange} placeholder="Tags (comma-separated)" className="px-4 py-3 border rounded-lg" />
            <input name="thumbnail" value={project.thumbnail} onChange={handleChange} placeholder="Thumbnail path (e.g., /images/projects/p1.jpg)" className="px-4 py-3 border rounded-lg" />
            <input name="gltfPath" value={project.gltfPath} onChange={handleChange} placeholder="GLTF/GLB path (e.g., /models/p1.glb)" className="px-4 py-3 border rounded-lg" />
            <input name="stepPath" value={project.stepPath} onChange={handleChange} placeholder="STEP path (e.g., /downloads/p1.step)" className="px-4 py-3 border rounded-lg" />
            <textarea name="shortDescription" value={project.shortDescription} onChange={handleChange} placeholder="Short Description" className="md:col-span-2 px-4 py-3 border rounded-lg"></textarea>
            <textarea name="description" value={project.description} onChange={handleChange} placeholder="Detailed Description" className="md:col-span-2 px-4 py-3 border rounded-lg" rows={5}></textarea>
            <input name="gallery" value={project.gallery} onChange={handleChange} placeholder="Gallery images (comma-separated paths)" className="md:col-span-2 px-4 py-3 border rounded-lg" />
            <div className="md:col-span-2 flex justify-end">
              <button type="submit" className="btn-primary">Save Project</button>
            </div>
          </form>

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-3">Saved (local)</h2>
            <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-xs overflow-auto">{JSON.stringify(typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('admin_projects') || '[]') : [], null, 2)}</pre>
            {message && <p className="mt-2 text-green-600">{message}</p>}
          </div>
        </div>
      </section>
    </Layout>
  )
}


