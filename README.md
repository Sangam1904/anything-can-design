# DesignAnything - Portfolio Website

A professional portfolio website for DesignAnything, showcasing CAD modeling, 3D design, and product animation services. Built with Next.js, Tailwind CSS, and featuring 3D model viewer support.

## 🚀 Features

- **Modern Design**: Clean, professional design inspired by Rolex and Sketchfab
- **3D Model Viewer**: Interactive .glb/.gltf model viewer with AR support
- **Responsive**: Fully responsive design for all devices
- **Dark Mode**: Toggle between light and dark themes
- **Portfolio Showcase**: Filterable project gallery with search functionality
- **Contact Forms**: Professional contact forms with validation
- **Blog Ready**: CMS-ready blog system
- **SEO Optimized**: Meta tags, Open Graph, and structured data
- **Performance**: Optimized for speed and performance

## 🛠 Tech Stack

- **Frontend**: Next.js 14, React 18
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **3D Models**: Model Viewer (Google)
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/designanything.git
   cd designanything
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Colors
The color scheme is defined in `tailwind.config.js`:
- Primary: Deep Emerald Green (#0E3B2E)
- Secondary: Gold/Champagne (#C8A951)
- Accent: Tech Blue (#1F7AE0)

### Fonts
- Headings: Playfair Display
- Body: Inter

### Content
Update the following files to customize content:
- `components/Hero.js` - Hero section content
- `components/ServicesOverview.js` - Services information
- `components/PortfolioPreview.js` - Featured projects
- `components/Testimonials.js` - Client testimonials
- `pages/about.js` - About page content
- `pages/services.js` - Services details

## 📁 Project Structure

```
anything-can-design/
├── components/          # Reusable UI components
│   ├── Layout.js       # Main layout wrapper
│   ├── Navbar.js       # Navigation bar
│   ├── Footer.js       # Footer component
│   ├── Hero.js         # Hero section
│   ├── ModelViewer.js  # 3D model viewer
│   └── ...
├── pages/              # Next.js pages
│   ├── index.js        # Home page
│   ├── portfolio/      # Portfolio pages
│   ├── about.js        # About page
│   ├── services.js     # Services page
│   ├── contact.js      # Contact page
│   └── ...
├── styles/             # Global styles
│   └── globals.css     # Tailwind and custom styles
├── public/             # Static assets
│   ├── images/         # Images
│   ├── models/         # 3D models (.glb/.gltf)
│   └── ...
└── ...
```

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect Next.js and deploy

3. **Custom Domain**
   - In Vercel dashboard, go to Settings → Domains
   - Add your custom domain (e.g., designanything.com)
   - Update DNS settings as instructed

### Other Platforms

The site can also be deployed to:
- **Netlify**: Use `npm run build` and deploy the `out` folder
- **Railway**: Connect GitHub repository
- **Heroku**: Use the Next.js buildpack

## 📝 Content Management

### Adding Projects
1. Update the projects array in `components/PortfolioPreview.js`
2. Add project images to `public/images/projects/`
3. Add 3D models to `public/models/`
4. Update the portfolio page in `pages/portfolio/index.js`

### Adding Blog Posts
1. Create new files in `pages/blog/`
2. Use the blog template structure
3. Update the blog listing page

### Adding Services
1. Update the services array in `components/ServicesOverview.js`
2. Modify the services page in `pages/services.js`

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for environment variables:
```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

### Google Analytics
1. Get your GA4 measurement ID
2. Update the GA_MEASUREMENT_ID in `components/Layout.js`
3. Or use environment variable `NEXT_PUBLIC_GA_ID`

### Contact Form
The contact form currently uses a simulated submission. To connect to a real backend:
1. Set up an API route in `pages/api/contact.js`
2. Update the form submission in `pages/contact.js`
3. Consider using services like:
   - EmailJS
   - Formspree
   - Netlify Forms

## 🎯 SEO Optimization

The site includes:
- Meta tags for all pages
- Open Graph tags for social sharing
- Structured data markup
- Sitemap generation
- Robots.txt

## 📱 Mobile Optimization

- Responsive design for all screen sizes
- Touch-friendly navigation
- Optimized 3D model viewer for mobile
- Fast loading times

## 🔒 Security

- HTTPS enforcement
- Content Security Policy
- XSS protection
- Secure headers

## 📊 Performance

- Image optimization with Next.js
- Code splitting
- Lazy loading
- Optimized fonts
- Minified CSS/JS

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:
- Email: hello@designanything.com
- Website: https://designanything.com

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Model Viewer](https://modelviewer.dev/) - 3D model viewer
- [Lucide](https://lucide.dev/) - Icon library

---

Built with ❤️ by DesignAnything
