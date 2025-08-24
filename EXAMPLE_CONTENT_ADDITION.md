# 🎯 Practical Example: Adding Your Content

This file shows you exactly how to add your own content to the website with real examples.

---

## 📝 Example 1: Adding Your Logo

### Step 1: Prepare Your Logo
- Save your logo as: `public/images/logo.png`
- Recommended size: 200x60 pixels
- Format: PNG (transparent background preferred)

### Step 2: Update the Navbar
Open `components/Navbar.js` and replace the logo section:

**Current (Text Logo):**
```javascript
{/* OPTION 1: Text-based Logo (Current) */}
<div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
  <span className="text-white font-bold text-lg">ACD</span>
</div>
```

**New (Image Logo):**
```javascript
{/* OPTION 2: Image-based Logo */}
<img 
  src="/images/logo.png" 
  alt="Anything Can Design" 
  className="h-8 w-auto"
/>
```

---

## 🎮 Example 2: Adding a 3D Model Project

### Step 1: Prepare Your Files
1. **3D Model:** Save as `public/models/my-project.glb`
2. **Project Image:** Save as `public/images/portfolio/my-project.jpg`

### Step 2: Add to Portfolio
Open `pages/portfolio/index.js` and add to the `projects` array:

```javascript
{
  id: 7, // Use next available number
  title: 'My Custom Project',
  category: 'Product Design',
  software: 'Fusion 360',
  description: 'This is my amazing project description that showcases my skills.',
  image: '/images/portfolio/my-project.jpg',
  modelUrl: '/models/my-project.glb',
  videoUrl: 'https://www.youtube.com/watch?v=your-video',
  tags: ['Custom Tag', 'Design', 'Innovation'],
  featured: true,
  year: 2024
}
```

### Step 3: Test Your Model
1. Save the file
2. Run: `npm run dev`
3. Go to: `http://localhost:3000/portfolio`
4. Click on your project to see the 3D model

---

## 📸 Example 3: Adding Team Member Photos

### Step 1: Prepare Photos
- Save photos as: `public/images/team/sangam.jpg`, `public/images/team/anjali.jpg`, etc.
- Recommended size: 400x400 pixels
- Format: JPG or PNG

### Step 2: Update About Page
Open `pages/about.js` and find the team section:

```javascript
const team = [
  {
    name: 'Sangam',
    role: 'Lead Designer',
    image: '/images/team/sangam.jpg', // Add your photo here
    bio: 'Expert in product design and 3D modeling with 5+ years experience.',
    skills: ['SOLIDWORKS', 'CATIA', 'Fusion 360'],
    linkedin: 'https://linkedin.com/in/sangam'
  },
  {
    name: 'Anjali',
    role: 'CAD Specialist',
    image: '/images/team/anjali.jpg', // Add your photo here
    bio: 'Specialized in mechanical design and engineering analysis.',
    skills: ['ANSYS', 'SOLIDWORKS', 'AutoCAD'],
    linkedin: 'https://linkedin.com/in/anjali'
  }
]
```

---

## 🎨 Example 4: Changing Colors

### Step 1: Choose Your Colors
Open `tailwind.config.js` and update the colors:

```javascript
colors: {
  primary: '#1F2937',    // Your primary color
  secondary: '#F59E0B',  // Your secondary color
  accent: '#3B82F6',     // Your accent color
  dark: '#111827',       // Dark mode background
  light: '#FFFFFF',      // Light mode background
}
```

### Step 2: Test Changes
1. Save the file
2. Refresh your browser
3. All elements using these colors will update automatically

---

## 📝 Example 5: Updating Hero Text

### Step 1: Change Main Heading
Open `components/Hero.js` and find:

```javascript
<h1 className="text-5xl md:text-7xl font-playfair font-bold text-white mb-6">
  Design Anything, <br />
  <span className="text-secondary">Build Everything</span>
</h1>
```

Change to:
```javascript
<h1 className="text-5xl md:text-7xl font-playfair font-bold text-white mb-6">
  Your Custom Heading, <br />
  <span className="text-secondary">Your Custom Subheading</span>
</h1>
```

### Step 2: Change Subtitle
Find:
```javascript
<p className="text-xl text-gray-300 mb-8 max-w-2xl">
  We transform ideas into reality through innovative design and engineering solutions.
</p>
```

Change to:
```javascript
<p className="text-xl text-gray-300 mb-8 max-w-2xl">
  Your custom subtitle that describes your business and services.
</p>
```

---

## 📊 Example 6: Adding a New Service

### Step 1: Update Services Overview
Open `components/ServicesOverview.js` and add to the `services` array:

```javascript
{
  icon: <Box className="w-8 h-8" />,
  title: 'Your New Service',
  description: 'Description of your new service offering.',
  features: ['Feature 1', 'Feature 2', 'Feature 3'],
  price: 'Starting from $500'
}
```

### Step 2: Update Detailed Services
Open `pages/services.js` and add a new service section:

```javascript
{
  title: 'Your New Service',
  description: 'Detailed description of your service.',
  features: [
    'Comprehensive analysis',
    'Detailed documentation',
    'Technical support'
  ],
  software: ['Software 1', 'Software 2'],
  process: [
    'Step 1: Initial consultation',
    'Step 2: Design phase',
    'Step 3: Review and approval',
    'Step 4: Final delivery'
  ],
  pricing: {
    basic: '$500',
    standard: '$1000',
    premium: '$2000'
  }
}
```

---

## 📥 Example 7: Adding Downloadable Files

### Step 1: Add Your Files
- Save files in: `public/downloads/`
- Examples: `public/downloads/cad-model.step`, `public/downloads/report.pdf`

### Step 2: Update Downloads Page
Open `pages/downloads.js` and add to the `downloads` array:

```javascript
{
  id: 5,
  title: 'Your CAD Model',
  description: 'Description of your downloadable file.',
  category: 'CAD Models',
  fileType: 'STEP',
  fileSize: '2.5 MB',
  downloadCount: 150,
  downloadUrl: '/downloads/cad-model.step'
}
```

---

## 🔧 Example 8: Updating Contact Information

### Step 1: Update Footer
Open `components/Footer.js` and find the contact section:

```javascript
<div className="space-y-4">
  <h3 className="text-lg font-semibold text-white">Contact Info</h3>
  <div className="space-y-2 text-gray-300">
    <p>📍 Your Address, City, State</p>
    <p>📞 +91 98765 43210</p>
    <p>✉️ info@anythingcandesign.com</p>
  </div>
</div>
```

### Step 2: Update Contact Page
Open `pages/contact.js` and update:

```javascript
const contactInfo = {
  phone: '+91 98765 43210',
  email: 'info@anythingcandesign.com',
  address: 'Your Address, City, State, PIN',
  hours: 'Mon-Fri: 9AM-6PM'
}
```

---

## 🚀 Quick Test Checklist

After making changes:

1. **Save all files** (Ctrl+S)
2. **Check terminal** for any errors
3. **Refresh browser** (Ctrl+F5)
4. **Test all pages** that you modified
5. **Check mobile view** (F12 → Mobile device)
6. **Verify 3D models** load correctly
7. **Test contact form** functionality

---

## 🆘 Common Issues & Solutions

### Images Not Showing
- ✅ Check file path: `/images/your-file.jpg`
- ✅ Ensure file exists in correct folder
- ✅ Use lowercase file names
- ✅ Check file format (JPG, PNG, WebP)

### 3D Models Not Loading
- ✅ Check file path: `/models/your-model.glb`
- ✅ Ensure .glb/.gltf format
- ✅ Check file size (under 10MB)
- ✅ Verify model file is not corrupted

### Colors Not Updating
- ✅ Save `tailwind.config.js`
- ✅ Clear browser cache (Ctrl+F5)
- ✅ Restart development server (`npm run dev`)

### Text Not Changing
- ✅ Save the file after editing
- ✅ Check for typos in file names
- ✅ Ensure you're editing the correct file
- ✅ Refresh browser after changes

---

**💡 Pro Tip:** Start with small changes and test frequently. This way, if something goes wrong, you'll know exactly what caused it!
