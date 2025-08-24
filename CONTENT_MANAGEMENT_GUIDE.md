# Content Management Guide for "Anything Can Design" Website

## 🎯 Quick Overview
This guide will teach you how to customize your website content without any coding knowledge. You'll learn how to:
- Change the logo
- Replace images
- Add 3D models (.glb/.gltf files)
- Update text content
- Add new projects
- Customize colors and fonts

---

## 📁 Understanding Your Website Structure

Your website is organized into these main folders:
- `public/` - Images, logos, 3D models, and other files
- `components/` - Website sections (hero, portfolio, etc.)
- `pages/` - Different pages (home, about, contact, etc.)
- `styles/` - Colors, fonts, and styling

---

## 🖼️ 1. How to Change the Logo

### Current Logo Location
The logo is currently displayed as text "ACD" in the navigation bar.

### To Add Your Custom Logo:

1. **Prepare Your Logo File:**
   - Format: PNG, SVG, or JPG
   - Recommended size: 200x60 pixels
   - Name it: `logo.png` (or `logo.svg`)

2. **Add Logo to Website:**
   - Create a folder: `public/images/`
   - Place your logo file in: `public/images/logo.png`

3. **Update the Code:**
   Open `components/Navbar.js` and find this section:
   ```javascript
   <div className="flex items-center space-x-2">
     <span className="text-2xl font-bold text-primary">ACD</span>
   </div>
   ```
   
   Replace it with:
   ```javascript
   <div className="flex items-center space-x-2">
     <img src="/images/logo.png" alt="Anything Can Design" className="h-8 w-auto" />
   </div>
   ```

---

## 🖼️ 2. How to Replace Images

### Current Image Locations:
- Hero section background
- Portfolio project images
- Team member photos
- Service icons

### Step-by-Step Process:

1. **Prepare Your Images:**
   - Format: JPG, PNG, or WebP
   - Recommended sizes:
     - Hero background: 1920x1080px
     - Portfolio images: 800x600px
     - Team photos: 400x400px
     - Icons: 64x64px

2. **Create Image Folders:**
   ```
   public/
   ├── images/
   │   ├── hero/
   │   ├── portfolio/
   │   ├── team/
   │   └── icons/
   ```

3. **Replace Images by File:**

   **Hero Background:**
   - Add: `public/images/hero/hero-bg.jpg`
   - Update: `components/Hero.js` line with background image

   **Portfolio Images:**
   - Add: `public/images/portfolio/project1.jpg`
   - Update: `components/PortfolioPreview.js` and `pages/portfolio/index.js`

   **Team Photos:**
   - Add: `public/images/team/sangam.jpg`
   - Update: `pages/about.js`

---

## 🎮 3. How to Add 3D Models (.glb/.gltf Files)

### Step-by-Step Process:

1. **Prepare Your 3D Models:**
   - Format: .glb or .gltf
   - Optimize file size (under 10MB recommended)
   - Name them descriptively: `product-design.glb`

2. **Create Models Folder:**
   ```
   public/
   └── models/
       ├── product-design.glb
       ├── architectural-model.glb
       └── furniture-design.glb
   ```

3. **Add Models to Portfolio:**
   Open `pages/portfolio/index.js` and find the `projects` array:
   ```javascript
   const projects = [
     {
       id: 1,
       title: "Hydrogen Bike Design",
       description: "Revolutionary hydrogen-powered motorcycle concept",
       category: "Product Design",
       software: ["Fusion 360", "Blender"],
       image: "/images/portfolio/hydrogen-bike.jpg",
       modelUrl: "/models/hydrogen-bike.glb", // Add your model here
       downloadUrl: "/models/hydrogen-bike.glb",
       tags: ["Transportation", "Sustainability", "Innovation"]
     }
   ]
   ```

4. **Update Project Data:**
   - Replace `modelUrl` with your actual model path
   - Update `title`, `description`, `category`, `software`, `tags`
   - Add corresponding image in `public/images/portfolio/`

---

## 📝 4. How to Update Text Content

### Main Content Areas:

**Homepage Hero Section:**
File: `components/Hero.js`
- Main heading
- Subtitle
- Call-to-action buttons

**About Page:**
File: `pages/about.js`
- Company description
- Mission and vision
- Team information
- Skills and expertise

**Services Page:**
File: `pages/services.js`
- Service descriptions
- Features and benefits
- Pricing information

**Contact Page:**
File: `pages/contact.js`
- Contact information
- Office addresses
- Social media links

### Example: Updating Hero Section
Find this in `components/Hero.js`:
```javascript
<h1 className="text-5xl md:text-7xl font-playfair font-bold text-white mb-6">
  Design Anything, <br />
  <span className="text-secondary">Build Everything</span>
</h1>
```

Change to your preferred text:
```javascript
<h1 className="text-5xl md:text-7xl font-playfair font-bold text-white mb-6">
  Your Custom Heading, <br />
  <span className="text-secondary">Your Custom Subheading</span>
</h1>
```

---

## 🎨 5. How to Change Colors and Fonts

### Colors:
File: `tailwind.config.js`
Current color scheme:
```javascript
colors: {
  primary: '#0E3B2E',    // Deep Emerald Green (Rolex inspired)
  secondary: '#C8A951',  // Gold/Champagne
  accent: '#1F7AE0',     // Tech Blue
  dark: '#121212',       // Dark mode background
  light: '#FFFFFF',      // White background
}
```

To change colors:
1. Open `tailwind.config.js`
2. Find the `colors` section
3. Replace hex codes with your preferred colors
4. Save the file

### Fonts:
Current fonts:
- Playfair Display (headings)
- Inter (body text)
- Roboto (secondary text)

To change fonts:
1. Update `tailwind.config.js` fontFamily section
2. Update `styles/globals.css` Google Fonts import

---

## 📊 6. How to Add New Projects

### Step-by-Step Process:

1. **Add Project Image:**
   - Place in: `public/images/portfolio/your-project.jpg`

2. **Add 3D Model (if applicable):**
   - Place in: `public/models/your-project.glb`

3. **Update Portfolio Data:**
   Open `pages/portfolio/index.js` and add to the `projects` array:
   ```javascript
   {
     id: 10, // Use next available number
     title: "Your Project Title",
     description: "Your project description",
     category: "Your Category",
     software: ["Software1", "Software2"],
     image: "/images/portfolio/your-project.jpg",
     modelUrl: "/models/your-project.glb", // Optional
     downloadUrl: "/models/your-project.glb", // Optional
     tags: ["Tag1", "Tag2", "Tag3"]
   }
   ```

4. **Add to Homepage Preview:**
   Open `components/PortfolioPreview.js` and add to the `featuredProjects` array.

---

## 📝 7. How to Add Blog Posts

### Step-by-Step Process:

1. **Create Blog Data:**
   Open `pages/blog/index.js` and add to the `blogPosts` array:
   ```javascript
   {
     id: 5, // Use next available number
     title: "Your Blog Post Title",
     excerpt: "Brief description of your blog post...",
     content: "Full blog post content...",
     author: "Your Name",
     date: "2024-01-15",
     readTime: "5 min read",
     category: "Design Tips",
     image: "/images/blog/your-post.jpg"
   }
   ```

2. **Add Blog Image:**
   - Create folder: `public/images/blog/`
   - Add: `public/images/blog/your-post.jpg`

---

## 📥 8. How to Add Downloadable Files

### Step-by-Step Process:

1. **Add Files:**
   - Create folder: `public/downloads/`
   - Add your files: CAD models, reports, guides

2. **Update Downloads Page:**
   Open `pages/downloads.js` and add to the `downloads` array:
   ```javascript
   {
     id: 5, // Use next available number
     title: "Your File Name",
     description: "Description of the file",
     category: "CAD Models",
     fileType: "STEP",
     fileSize: "2.5 MB",
     downloadCount: 150,
     downloadUrl: "/downloads/your-file.step"
   }
   ```

---

## 🔧 9. How to Update Contact Information

### Locations to Update:

1. **Footer Contact:**
   File: `components/Footer.js`
   - Phone numbers
   - Email addresses
   - Office addresses
   - Social media links

2. **Contact Page:**
   File: `pages/contact.js`
   - Contact form settings
   - Office locations
   - Business hours

3. **About Page:**
   File: `pages/about.js`
   - Team member information
   - Company details

---

## 🚀 10. How to Test Your Changes

### Local Testing:
1. Save all your changes
2. Open terminal in your project folder
3. Run: `npm run dev`
4. Open: `http://localhost:3000`
5. Check all pages and sections

### Common Issues:
- **Images not showing:** Check file paths and names
- **3D models not loading:** Ensure .glb/.gltf files are in `public/models/`
- **Styling issues:** Clear browser cache (Ctrl+F5)

---

## 📋 11. Content Checklist

Before publishing, ensure you've updated:

### Essential Updates:
- [ ] Company logo
- [ ] Hero section text
- [ ] About page content
- [ ] Contact information
- [ ] Portfolio projects
- [ ] Team member photos
- [ ] Service descriptions

### Optional Updates:
- [ ] 3D models for projects
- [ ] Blog posts
- [ ] Downloadable files
- [ ] Color scheme
- [ ] Fonts
- [ ] Social media links

---

## 🆘 12. Getting Help

### If Something Doesn't Work:
1. **Check file paths:** Ensure all files are in correct folders
2. **File names:** Use lowercase, no spaces (use hyphens)
3. **File formats:** Use supported formats only
4. **File sizes:** Keep images under 2MB, models under 10MB

### Need More Help?
- Check the browser console for errors (F12)
- Verify all file paths are correct
. Ensure all files are saved before testing

---

## 🎯 Quick Reference Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Check for errors
npm run lint
```

---

**Remember:** Always save your files after making changes, and refresh your browser to see updates. If you're unsure about any step, start with small changes and test frequently!
