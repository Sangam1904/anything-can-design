import Layout from '../components/Layout'
import { motion } from 'framer-motion'
import { Award, Users, Target, Zap } from 'lucide-react'

export default function About() {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in every project, delivering the highest quality CAD models and designs.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in close collaboration with our clients to ensure their vision is perfectly realized.'
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'We embrace cutting-edge technology and innovative design approaches to solve complex challenges.'
    },
    {
      icon: Zap,
      title: 'Efficiency',
      description: 'We optimize our processes to deliver fast turnaround times without compromising quality.'
    }
  ]

  const skills = [
    { name: 'SOLIDWORKS', level: 95 },
    { name: 'CATIA', level: 90 },
    { name: 'Blender', level: 85 },
    { name: 'ANSYS', level: 80 },
    { name: '3DEXPERIENCE', level: 85 }
  ]

  return (
    <Layout 
      title="About Us"
      description="Learn about  Design  Anything - a professional CAD modeling and 3D design company. Meet our team and discover our mission to transform ideas into reality."
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
              About <span className="gradient-text">Anything Can Design</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We are passionate about transforming ideas into reality through expert engineering design, 
              innovative CAD modeling, and stunning 3D visualizations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-playfair font-bold mb-6 text-gray-800 dark:text-white">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                To empower businesses and individuals with cutting-edge CAD modeling and 3D design solutions 
                that bridge the gap between imagination and reality. We believe that every great product 
                starts with a great design.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Our team combines technical expertise with creative vision to deliver designs that are not 
                only functional and manufacturable but also aesthetically pleasing and innovative.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary to-accent rounded-2xl p-8 text-white"
            >
              <h3 className="text-2xl font-playfair font-bold mb-6">Our Vision</h3>
              <p className="text-lg mb-6 leading-relaxed">
                To become the leading force in digital design innovation, setting new standards for 
                CAD modeling, 3D visualization, and product development across industries.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Global design excellence</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Innovation leadership</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Sustainable design solutions</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
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
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              The principles that guide our work and relationships with clients
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
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
              Meet Our <span className="gradient-text">Team</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Passionate professionals dedicated to bringing your ideas to life
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6">
                <img 
                  src="/images/team/sangam.jpg" 
                  alt="Sangam - Founder & Lead Designer"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-white">
                Sangam
              </h3>
              <p className="text-secondary font-medium mb-4">Founder & Lead Designer</p>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                Expert in SOLIDWORKS, CATIA, and Blender with over 5 years of experience in 
                mechanical design and product development.
              </p>
              <div className="flex justify-center space-x-4">
                <span className="text-sm text-gray-500 dark:text-gray-400">SOLIDWORKS Expert</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">CATIA Certified</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-32 h-32 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl font-bold text-white">A</span>
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-white">
                Anjali
              </h3>
              <p className="text-secondary font-medium mb-4">3D Artist & Animator</p>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                Specialized in product visualization, rendering, and animation with expertise 
                in Blender and advanced lighting techniques.
              </p>
              <div className="flex justify-center space-x-4">
                <span className="text-sm text-gray-500 dark:text-gray-400">Blender Expert</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">Animation</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-32 h-32 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl font-bold text-white">R</span>
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-white">
                Rahul
              </h3>
              <p className="text-secondary font-medium mb-4">Simulation Engineer</p>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                ANSYS specialist with deep knowledge in structural analysis, thermal analysis, 
                and optimization for complex engineering problems.
              </p>
              <div className="flex justify-center space-x-4">
                <span className="text-sm text-gray-500 dark:text-gray-400">ANSYS Expert</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">FEA</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills */}
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
              Our <span className="gradient-text">Expertise</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Mastery of industry-leading software and technologies
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-gray-800 dark:text-white">{skill.name}</span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-primary to-accent h-3 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent">
        <div className="container-custom px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold mb-6 text-white">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and see how we can bring your ideas to life with our expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-secondary">
                Start Your Project
              </a>
              <a href="/portfolio" className="btn-outline border-white text-white hover:bg-white hover:text-primary">
                View Our Work
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  )
}
