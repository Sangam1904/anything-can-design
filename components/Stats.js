import { motion } from 'framer-motion'
import { Users, Award, Clock, Star } from 'lucide-react'

export default function Stats() {
  const stats = [
    {
      icon: Users,
      number: '10+',
      label: 'Happy Clients',
      description: 'Satisfied customers worldwide'
    },
    {
      icon: Award,
      number: '00+',
      label: 'Projects Completed',
      description: 'Successfully delivered designs'
    },
    {
      icon: Clock,
      number: '2+',
      label: 'Years Experience',
      description: 'Professional CAD expertise'
    },
    {
      icon: Star,
      number: '4.9',
      label: 'Client Rating',
      description: 'Average satisfaction score'
    }
  ]

  return (
    <section className="py-16 bg-gradient-to-r from-primary to-accent">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center text-white"
            >
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-playfair font-bold mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-semibold mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-white/80">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
