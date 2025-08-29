import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Basavaraj Biradar',
      company: 'Tech Innovations Inc.',
      role: 'Product Manager',
      content: 'Design Anything  transformed our concept into a stunning 3D model that exceeded our expectations. The attention to detail and professional communication made the entire process seamless.',
      rating: 4,
      project: 'Smart Home Device Design'
    },
    {
      id: 2,
      name: 'Michael Chen',
      company: 'Automotive Solutions',
      role: 'Design Director',
      content: 'The CAD modeling work was exceptional. They delivered precise engineering drawings and 3D assemblies that were production-ready. Highly recommended for any automotive design project.',
      rating: 5,
      project: 'Electric Vehicle Components'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      company: 'Furniture Craft Co.',
      role: 'Creative Director',
      content: 'Outstanding surface modeling skills! They created beautiful, manufacturable furniture designs that perfectly captured our brand aesthetic. The renderings were photorealistic.',
      rating: 5,
      project: 'Luxury Furniture Collection'
    },
    {
      id: 4,
      name: 'David Thompson',
      company: 'Aerospace Dynamics',
      role: 'Engineering Manager',
      content: 'Professional, reliable, and technically excellent. The drone design work included comprehensive analysis and optimization. Delivered on time and within budget.',
      rating: 5,
      project: 'Commercial Drone Assembly'
    }
  ]

  return (
    <section className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-6">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied clients have to say about their experience working with us.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card p-8 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-secondary/20">
                <Quote className="w-8 h-8" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </blockquote>

              {/* Project */}
              <div className="mb-6">
                <span className="text-sm font-medium text-secondary bg-secondary/10 px-3 py-1 rounded-full">
                  {testimonial.project}
                </span>
              </div>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-gray-800 dark:text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
            <h3 className="text-2xl font-playfair font-bold mb-4 text-gray-800 dark:text-white">
              Ready to Join Our Happy Clients?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Start your project today and experience the same level of quality and professionalism that our clients rave about.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary">
                Start Your Project
              </a>
              <a href="/portfolio" className="btn-outline">
                View More Work
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
