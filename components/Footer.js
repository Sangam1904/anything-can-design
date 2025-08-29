import Link from 'next/link'
import { Pin, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: [
      { name: 'CAD Modeling', href: '/services#cad' },
      { name: '3D Design', href: '/services#3d-design' },
      { name: 'Product Animation', href: '/services#animation' },
      { name: 'Rendering', href: '/services#rendering' },
    ],
    portfolio: [
      { name: 'Mechanical Design', href: '/portfolio?category=mechanical' },
      { name: 'Industrial Design', href: '/portfolio?category=industrial' },
      { name: 'Drone Design', href: '/portfolio?category=drones' },
      { name: 'Furniture Design', href: '/portfolio?category=furniture' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Blog', href: '/blog' },
      { name: 'Downloads', href: '/downloads' },
      { name: 'Contact', href: '/contact' },
    ],
  }

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/company/designanything/' },
    { name: 'YouTube', icon: Youtube, href: 'https://www.youtube.com/channel/UCeKbTkZ2z_Rx-6f6uEUroMw' },
    { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/_designanything_/' },
    { name: 'Pinterest', icon: Pin, href: 'https://in.pinterest.com/Designanything1904/' },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">ACD</span>
              </div>
              <span className="font-playfair text-xl font-bold">DesignAnything</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transforming ideas into reality through expert engineering design. 
              Professional CAD modeling, 3D design, and product animation services.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5 text-secondary" />
                <span>anythingcandesign@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5 text-secondary" />
                <span>+91 7498441756</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-secondary" />
                <span>India</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-playfair text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-secondary transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Portfolio */}
          <div>
            <h3 className="font-playfair text-lg font-semibold mb-4">Portfolio</h3>
            <ul className="space-y-2">
              {footerLinks.portfolio.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-secondary transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-playfair text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-secondary transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links & Newsletter */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-secondary hover:text-white transition-all duration-200"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <p className="text-gray-300 text-sm">Subscribe to our newsletter</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-secondary text-white placeholder-gray-400"
                />
                <button className="px-4 py-2 bg-secondary text-white rounded-r-lg hover:bg-secondary/90 transition-colors duration-200">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} DesignAnything. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-secondary transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-secondary transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
