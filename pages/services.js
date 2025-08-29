import Layout from '../components/Layout'
import { motion } from 'framer-motion'
import { Box, Zap, Video, Palette, Settings, FileText, CheckCircle } from 'lucide-react'

export default function Services() {
  const services = [
    {
      id: 'cad',
      icon: Box,
      title: 'CAD Modeling',
      description: 'Professional 3D modeling using industry-standard software for mechanical, industrial, and product design.',
      features: [
        'Mechanical component design',
        'Assembly modeling and management',
        'GD&T and engineering drawings',
        'Sheet metal design',
        'Weldment design',
        'Surface modeling'
      ],
      software: ['SOLIDWORKS', 'CATIA', 'AutoCAD', 'Inventor'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: '3d-design',
      icon: Zap,
      title: '3D Design',
      description: 'Creative 3D design solutions for products, furniture, and industrial applications with complex geometry.',
      features: [
        'Product concept development',
        'Industrial design',
        'Furniture and interior design',
        'Complex surface modeling',
        'Aesthetic design optimization',
        'Manufacturing-ready models'
      ],
      software: ['Blender', 'CATIA', 'SOLIDWORKS', 'Rhino'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'animation',
      icon: Video,
      title: 'Product Animation',
      description: 'High-quality product animations and visualizations for marketing, presentations, and client demonstrations.',
      features: [
        'Assembly and disassembly animations',
        'Product walkthrough videos',
        'Marketing and promotional content',
        'Technical demonstration videos',
        'Interactive 3D presentations',
        'Motion graphics integration'
      ],
      software: ['Blender', 'SOLIDWORKS', 'CATIA', 'After Effects'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'rendering',
      icon: Palette,
      title: 'Rendering',
      description: 'Photorealistic renders and visualizations that bring your designs to life with stunning detail and lighting.',
      features: [
        'Photorealistic product renders',
        'Material and texture setup',
        'Advanced lighting design',
        'Environment and background creation',
        '360-degree product views',
        'Marketing-ready imagery'
      ],
      software: ['Blender', 'V-Ray', 'KeyShot', 'SOLIDWORKS Visualize'],
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'simulation',
      icon: Settings,
      title: 'Simulation',
      description: 'Engineering analysis and simulation using advanced tools for stress analysis, thermal analysis, and optimization.',
      features: [
        'Structural stress analysis',
        'Thermal analysis',
        'Modal analysis',
        'Design optimization',
        'Finite element analysis (FEA)',
        'Performance validation'
      ],
      software: ['ANSYS', 'SOLIDWORKS Simulation', 'CATIA Analysis'],
      color: 'from-indigo-500 to-blue-500'
    },
    {
      id: 'documentation',
      icon: FileText,
      title: 'Documentation',
      description: 'Complete technical documentation including drawings, specifications, and project reports.',
      features: [
        'Technical drawings and blueprints',
        'Assembly instructions',
        'Bill of materials (BOM)',
        'Project specifications',
        'User manuals and guides',
        'Quality control documentation'
      ],
      software: ['SOLIDWORKS', 'AutoCAD', 'CATIA', 'Microsoft Office'],
      color: 'from-gray-500 to-slate-500'
    }
  ]

  const process = [
    {
      step: 1,
      title: 'Consultation',
      description: 'We discuss your project requirements, timeline, and goals to understand your vision.'
    },
    {
      step: 2,
      title: 'Planning',
      description: 'We create a detailed project plan with milestones, deliverables, and timeline.'
    },
    {
      step: 3,
      title: 'Design',
      description: 'Our team develops the initial concepts and 3D models based on your specifications.'
    },
    {
      step: 4,
      title: 'Review',
      description: 'We share progress updates and gather your feedback for refinements.'
    },
    {
      step: 5,
      title: 'Refinement',
      description: 'We incorporate your feedback and make necessary adjustments to perfect the design.'
    },
    {
      step: 6,
      title: 'Delivery',
      description: 'We deliver the final files, documentation, and any additional assets you need.'
    }
  ]

  return (
    <Layout 
      title="Services"
      description="Professional CAD modeling, 3D design, product animation, rendering, and simulation services. Transform your ideas into reality with DesignAnything."
    >
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
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive design and engineering services to bring your ideas to life. 
              From concept to completion, we handle every aspect of your project.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-8"
              >
                {/* Service Header */}
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-playfair font-semibold mb-2 text-gray-800 dark:text-white">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-3">What's Included:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Software */}
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Software Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.software.map((soft) => (
                      <span 
                        key={soft}
                        className="text-sm font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full"
                      >
                        {soft}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold mb-6 text-gray-800 dark:text-white">
              Our <span className="gradient-text">Process</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A streamlined workflow designed to deliver exceptional results efficiently
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold mb-6 text-gray-800 dark:text-white">
              Flexible <span className="gradient-text">Pricing</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Transparent pricing tailored to your project requirements and budget
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="card p-8 text-center"
            >
              <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Basic</h3>
              <div className="text-4xl font-bold text-primary mb-6">₹1,200</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  <span>Simple 3D modeling</span>
                </li>
                <li className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  <span>Basic renders</span>
                </li>
                <li className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  <span>2 revisions</span>
                </li>
                <li className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  <span>Source files included</span>
                </li>
              </ul>
              <a href="/contact" className="btn-outline w-full">Get Started</a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="card p-8 text-center border-2 border-primary relative"
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Professional</h3>
              <div className="text-4xl font-bold text-primary mb-6">₹2,500+</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  <span>Complex 3D modeling</span>
                </li>
                <li className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  <span>Photorealistic renders</span>
                </li>
                <li className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  <span>Unlimited revisions</span>
                </li>
                <li className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  <span>Animation included</span>
                </li>
                <li className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  <span>Technical documentation</span>
                </li>
              </ul>
              <a href="/contact" className="btn-primary w-full">Get Started</a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="card p-8 text-center"
            >
              <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Enterprise</h3>
              <div className="text-4xl font-bold text-primary mb-6">Custom</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  <span>Full project management</span>
                </li>
                <li className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  <span>Advanced simulation</span>
                </li>
                <li className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  <span>Multiple iterations</span>
                </li>
                <li className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  <span>Ongoing support</span>
                </li>
                <li className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  <span>Priority communication</span>
                </li>
              </ul>
              <a href="/contact" className="btn-outline w-full">Contact Us</a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA removed as requested */}
    </Layout>
  )
}
