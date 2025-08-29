import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Mail, Phone, MessageCircle } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="section-padding bg-gradient-to-br from-gray-900 to-primary">
      <div className="container-custom">
        <div className="text-center text-white">
          {/* Main CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl lg:text-6xl font-playfair font-bold mb-6">
              Ready to Transform Your Ideas?
            </h2>
            <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
              Let's collaborate to bring your vision to life with professional CAD modeling, 
              3D design, and stunning product animations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="btn-secondary group text-lg px-8 py-4">
                Start Your Project
                <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              
              <Link href="/portfolio" className="btn-outline border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
                View Our Work
                <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </motion.div>

          {/* Contact Methods */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-white/80 mb-4">Get a detailed quote</p>
              <a 
                href="mailto:anythingcandesign@gmail.com" 
                className="text-secondary hover:text-secondary/80 font-medium transition-colors duration-200"
              >
                anythingcandesign@gmail.com
              </a>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-white/80 mb-4">Speak directly</p>
              <a 
                href="tel:+917498441756 " 
                className="text-secondary hover:text-secondary/80 font-medium transition-colors duration-200"
              >
                +91 7498441756
              </a>
            </div>        

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Live Chat</h3>
              <p className="text-white/80 mb-4">Instant response</p>
              <button className="text-secondary hover:text-secondary/80 font-medium transition-colors duration-200">
                Start Chat
              </button>
            </div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 pt-8 border-t border-white/20"
          >
            <div className="flex flex-wrap justify-center items-center gap-8 text-white/70">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span className="text-sm">Free Consultation</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span className="text-sm">Fast Turnaround</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span className="text-sm">Unlimited Revisions</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span className="text-sm">Source Files Included</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
