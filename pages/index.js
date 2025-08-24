import Layout from '../components/Layout'
import Hero from '../components/Hero'
import ServicesOverview from '../components/ServicesOverview'
import PortfolioPreview from '../components/PortfolioPreview'
import Testimonials from '../components/Testimonials'
import CTASection from '../components/CTASection'
import Stats from '../components/Stats'

export default function Home() {
  return (
    <Layout 
      title="Home"
      description="Transform your ideas into reality with Anything Can Design. Professional CAD modeling, 3D design, and product animation services. Expert engineering design solutions."
    >
      <Hero />
      <Stats />
      <ServicesOverview />
      <PortfolioPreview />
      <Testimonials />
      <CTASection />
    </Layout>
  )
}
