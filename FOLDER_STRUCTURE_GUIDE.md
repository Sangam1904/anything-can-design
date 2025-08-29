# 📁 Folder Structure Guide

This guide shows you exactly where to place your files in the website.

```
anything-can-design/
├── 📁 public/                    ← PUT YOUR FILES HERE
│   ├── 📁 images/               ← All images go here
│   │   ├── 📁 hero/             ← Hero section backgrounds
│   │   │   └── hero-bg.jpg
│   │   ├── 📁 portfolio/        ← Project images
│   │   │   ├── project1.jpg
│   │   │   ├── project2.jpg
│   │   │   └── my-project.jpg   ← Your project images
│   │   ├── 📁 team/             ← Team member photos
│   │   │   ├── sangam.jpg
│   │   │   ├── anjali.jpg
│   │   │   └── rahul.jpg
│   │   ├── 📁 blog/             ← Blog post images
│   │   │   ├── post1.jpg
│   │   │   └── my-blog.jpg
│   │   ├── 📁 icons/            ← Custom icons
│   │   │   └── custom-icon.png
│   │   └── logo.png             ← Your company logo
│   ├── 📁 models/               ← 3D models (.glb/.gltf)
│   │   ├── hydrogen-bike.glb
│   │   ├── solar-plant.glb
│   │   └── my-model.glb         ← Your 3D models
│   ├── 📁 downloads/            ← Downloadable files
│   │   ├── cad-model.step
│   │   ├── report.pdf
│   │   └── my-file.zip          ← Your files
│   ├── robots.txt
│   └── sitemap.xml
├── 📁 components/               ← Website sections (don't touch)
├── 📁 pages/                    ← Website pages (edit content here)
├── 📁 styles/                   ← Styling (edit colors/fonts here)
└── 📁 node_modules/             ← Dependencies (don't touch)
```

---

## 🎯 What Goes Where?

### 📸 Images (`public/images/`)
- **Logo:** `public/images/logo.png`
- **Hero Background:** `public/images/hero/hero-bg.jpg`
- **Project Images:** `public/images/portfolio/your-project.jpg`
- **Team Photos:** `public/images/team/your-name.jpg`
- **Blog Images:** `public/images/blog/your-post.jpg`

### 🎮 3D Models (`public/models/`)
- **Product Models:** `public/models/product-design.glb`
- **Architectural Models:** `public/models/building.glb`
- **Any .glb/.gltf files:** `public/models/your-model.glb`

### 📥 Downloads (`public/downloads/`)
- **CAD Files:** `public/downloads/cad-model.step`
- **Reports:** `public/downloads/report.pdf`
- **Guides:** `public/downloads/guide.pdf`
- **Any downloadable files:** `public/downloads/your-file.ext`

---

## 📝 Files You Can Edit

### 🎨 Colors & Fonts
- **File:** `tailwind.config.js`
- **What to change:** Colors, fonts, animations

### 📄 Content Pages
- **Homepage:** `components/Hero.js`
- **About:** `pages/about.js`
- **Services:** `pages/services.js`
- **Portfolio:** `pages/portfolio/index.js`
- **Contact:** `pages/contact.js`
- **Blog:** `pages/blog/index.js`
- **Downloads:** `pages/downloads.js`

### 🧩 Website Sections
- **Navigation:** `components/Navbar.js`
- **Footer:** `components/Footer.js`
- **Portfolio Preview:** `components/PortfolioPreview.js`
- **Services Overview:** `components/ServicesOverview.js`

---

## 🚫 Files You Should NOT Edit

- `node_modules/` - Dependencies (auto-generated)
- `package.json` - Project settings
- `next.config.js` - Next.js configuration
- `.gitignore` - Git ignore rules
- Any files in `.next/` folder

---

## 💡 Quick Tips

1. **File Names:** Use lowercase, no spaces (use hyphens)
   - ✅ `my-project.jpg`
   - ❌ `My Project.jpg`

2. **File Formats:**
   - Images: JPG, PNG, WebP
   - 3D Models: GLB, GLTF
   - Documents: PDF, STEP, ZIP

3. **File Sizes:**
   - Images: Under 2MB
   - 3D Models: Under 10MB
   - Documents: Under 50MB

4. **Paths in Code:**
   - Always start with `/` (forward slash)
   - Example: `/images/portfolio/my-project.jpg`

---

## 🔍 Finding Your Files

### Windows File Explorer:
1. Open your project folder
2. Navigate to `public` folder
3. Create subfolders as needed
4. Copy your files into the appropriate folders

### Example Paths:
```
/public/images/portfolio/my-project.jpg
/public/models/my-model.glb
/public/downloads/my-file.pdf
```

---

## ✅ Checklist

Before adding files, ensure:

- [ ] File name is lowercase with hyphens
- [ ] File is in the correct folder
- [ ] File format is supported
- [ ] File size is reasonable
- [ ] You've updated the corresponding code file
- [ ] You've tested the changes in browser

---

**🎯 Remember:** The `public/` folder is where ALL your custom files go. Everything else is code that you can edit to change text, colors, and layout!
