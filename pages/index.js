import Layout from '../components/Layout'
import Hero from '../components/Hero'
import ServicesOverview from '../components/ServicesOverview'
import PortfolioPreview from '../components/PortfolioPreview'
import Testimonials from '../components/Testimonials'
import Stats from '../components/Stats'

export default function Home() {
  return (
    <Layout 
      title="Home"
      description="Bring concepts to life with Anything Can Design. High-quality CAD modeling, 3D visualization, and product animations. Innovative engineering solutions tailored for your needs."
    >
      <Hero />
      <Stats />
      <ServicesOverview />
      <PortfolioPreview />
      <Testimonials />
    </Layout>
  )
}
