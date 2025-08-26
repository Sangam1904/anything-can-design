# Website Deployment Guide

## 🚀 Quick Deploy to Vercel (Recommended)

### Option 1: Deploy via Vercel CLI (Fastest)

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel --prod
   ```

4. **Follow the prompts**:
   - Link to existing project or create new
   - Confirm deployment settings
   - Wait for deployment to complete

### Option 2: Deploy via Vercel Dashboard

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with GitHub
   - Click "New Project"
   - Import your GitHub repository
   - Configure settings:
     - Framework Preset: Next.js
     - Root Directory: `./`
     - Build Command: `npm run build`
     - Output Directory: `.next`
   - Click "Deploy"

## 🌐 Alternative Deployment Options

### Netlify Deployment

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `.next` folder
   - Or connect your GitHub repository

### GitHub Pages (Static Export)

1. **Add static export to next.config.js**:
   ```javascript
   module.exports = {
     output: 'export',
     trailingSlash: true,
     images: {
       unoptimized: true
     }
   }
   ```

2. **Build and deploy**:
   ```bash
   npm run build
   # Upload the 'out' folder to GitHub Pages
   ```

## 📁 Pre-Deployment Checklist

### ✅ Code Quality
- [ ] All components working properly
- [ ] No console errors
- [ ] Responsive design tested
- [ ] 3D model viewer functional
- [ ] All links working

### ✅ Content
- [ ] Project images added to `/public/images/projects/`
- [ ] 3D model files in `/public/models/`
- [ ] Downloadable materials in `/public/downloads/`
- [ ] Meta descriptions updated
- [ ] Contact information current

### ✅ Performance
- [ ] Images optimized
- [ ] 3D models compressed
- [ ] Bundle size reasonable
- [ ] Loading times acceptable

## 🔧 Environment Variables (if needed)

Create a `.env.local` file for any API keys:

```env
NEXT_PUBLIC_GA_ID=your-google-analytics-id
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## 📊 Post-Deployment

### 1. Test Your Live Site
- [ ] Homepage loads correctly
- [ ] Portfolio projects display
- [ ] 3D models load and interact
- [ ] Contact form works
- [ ] Mobile responsiveness

### 2. SEO Setup
- [ ] Google Search Console
- [ ] Google Analytics
- [ ] Meta tags verification
- [ ] Sitemap submission

### 3. Performance Monitoring
- [ ] Core Web Vitals
- [ ] Page load speeds
- [ ] 3D model loading times
- [ ] User interaction tracking

## 🛠️ Troubleshooting

### Common Issues

1. **3D Models Not Loading**:
   - Check file paths in `/public/models/`
   - Verify file formats (.glb, .gltf)
   - Check browser console for errors

2. **Build Failures**:
   - Clear `.next` folder: `rm -rf .next`
   - Clear node_modules: `rm -rf node_modules && npm install`
   - Check for TypeScript errors

3. **Deployment Issues**:
   - Verify build command: `npm run build`
   - Check for environment variables
   - Review deployment logs

### Performance Optimization

1. **3D Model Optimization**:
   ```bash
   # Use gltf-pipeline to optimize models
   npm install -g gltf-pipeline
   gltf-pipeline -i model.glb -o model-optimized.glb -d
   ```

2. **Image Optimization**:
   - Convert to WebP format
   - Compress images
   - Use appropriate sizes

## 📈 Analytics Setup

### Google Analytics
1. Create GA4 property
2. Add tracking code to `_app.js`
3. Set up conversion tracking

### Custom Events
Track 3D model interactions:
```javascript
// In ThreeViewer component
const trackModelView = () => {
  if (typeof gtag !== 'undefined') {
    gtag('event', 'view_3d_model', {
      'model_name': modelUrl,
      'project_title': project.title
    })
  }
}
```

## 🔄 Continuous Deployment

### GitHub Actions (Optional)
Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to Vercel
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

## 🎯 Success Metrics

After deployment, monitor:
- [ ] Page load times < 3 seconds
- [ ] 3D model load times < 5 seconds
- [ ] Mobile performance scores > 90
- [ ] User engagement with 3D models
- [ ] Portfolio project views

---

**Ready to deploy?** Choose your preferred method above and follow the steps. The Vercel CLI method is the fastest for getting your site live quickly!
