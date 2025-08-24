import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'
import { useState, useEffect } from 'react'

export default function Layout({ children, title = 'Anything Can Design', description = 'Professional CAD modeling, 3D design, and product animation services. Transform your ideas into reality with expert engineering design.' }) {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    // Check for saved dark mode preference
    const savedDarkMode = localStorage.getItem('darkMode')
    if (savedDarkMode) {
      setDarkMode(JSON.parse(savedDarkMode))
    }
  }, [])

  useEffect(() => {
    // Apply dark mode class to document
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
  }, [darkMode])

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <Head>
        <title>{title} | Anything Can Design</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="CAD modeling, 3D design, SOLIDWORKS, CATIA, product animation, engineering design, freelance CAD" />
        <meta name="author" content="Sangam - Anything Can Design" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://anythingcandesign.com/" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="/og-image.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://anythingcandesign.com/" />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content="/og-image.jpg" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />
      </Head>

      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <main className="pt-16">
        {children}
      </main>
      
      <Footer />
    </div>
  )
}
