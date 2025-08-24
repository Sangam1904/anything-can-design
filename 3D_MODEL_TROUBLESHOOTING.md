# 🎮 3D Model Troubleshooting Guide

This guide will help you fix issues with 3D models not displaying or not being interactive on your website.

---

## 🚨 Common Issues & Solutions

### Issue 1: Model Viewer Shows Placeholder but No 3D Model

**Symptoms:**
- You see the model viewer container
- Loading indicator appears but never completes
- No 3D model is visible

**Solutions:**

1. **Check Browser Console (F12):**
   - Look for error messages
   - Check if model-viewer script loaded
   - Verify model URL is accessible

2. **Test with Sample Model:**
   ```javascript
   // Use this test URL in your portfolio
   modelUrl: 'https://modelviewer.dev/shared-assets/models/Astronaut.glb'
   ```

3. **Verify Your Model File:**
   - Ensure file is in `.glb` or `.gltf` format
   - Check file size (under 10MB recommended)
   - Verify file is not corrupted

### Issue 2: Model Loads but Can't Move/Interact

**Symptoms:**
- 3D model is visible
- Can't rotate, zoom, or pan
- No camera controls working

**Solutions:**

1. **Enable Camera Controls:**
   ```javascript
   <ModelViewer 
     src={modelUrl}
     cameraControls={true}
     autoRotate={true}
     showControls={true}
   />
   ```

2. **Check Model Viewer Settings:**
   ```javascript
   camera-orbit="45deg 55deg 2.5m"
   min-camera-orbit="auto auto 1m"
   max-camera-orbit="auto auto 10m"
   field-of-view="30deg"
   ```

3. **Mobile Device Issues:**
   - Touch controls might be disabled
   - Try tapping and dragging
   - Check if device supports WebGL

### Issue 3: Model Appears Black or Invisible

**Symptoms:**
- Model loads but appears black
- No textures or materials visible
- Model is invisible

**Solutions:**

1. **Check Lighting Settings:**
   ```javascript
   exposure={1}
   shadow-intensity={1}
   environment-image="neutral"
   ```

2. **Verify Model Materials:**
   - Ensure model has proper materials
   - Check if textures are embedded
   - Try different environment maps

3. **Update Model Viewer:**
   - Use latest version of model-viewer
   - Check for compatibility issues

### Issue 4: Model Takes Too Long to Load

**Symptoms:**
- Loading indicator spins forever
- Model eventually loads but very slowly
- Browser becomes unresponsive

**Solutions:**

1. **Optimize Model File:**
   - Reduce polygon count
   - Compress textures
   - Use optimized .glb format

2. **Check File Size:**
   - Keep models under 10MB
   - Use CDN for large models
   - Implement progressive loading

3. **Network Issues:**
   - Check internet connection
   - Verify model URL is accessible
   - Use local files for testing

---

## 🔧 Step-by-Step Debugging

### Step 1: Check Browser Console
1. Open your website
2. Press F12 to open Developer Tools
3. Go to Console tab
4. Look for error messages
5. Check for model-viewer related errors

### Step 2: Test with Sample Model
1. Replace your model URL with:
   ```
   https://modelviewer.dev/shared-assets/models/Astronaut.glb
   ```
2. Save and refresh page
3. Check if sample model works

### Step 3: Verify Your Model File
1. Open your .glb/.gltf file in a 3D viewer
2. Check file size and format
3. Verify model has proper geometry and materials

### Step 4: Test Model URL
1. Copy your model URL
2. Paste in browser address bar
3. Check if file downloads or displays

---

## 📝 Code Examples

### Basic Working Model Viewer:
```javascript
<ModelViewer 
  src="/models/your-model.glb"
  alt="Your 3D Model"
  className="h-64"
  showControls={true}
  autoRotate={true}
  cameraControls={true}
/>
```

### Advanced Model Viewer with Error Handling:
```javascript
<ModelViewer 
  src={modelUrl}
  alt={modelTitle}
  className="h-64"
  showControls={true}
  autoRotate={true}
  cameraControls={true}
  exposure={1}
  shadowIntensity={1}
  environmentImage="neutral"
/>
```

### Portfolio Project with Model:
```javascript
{
  id: 1,
  title: "Your Project",
  description: "Project description",
  category: "Product Design",
  software: "Fusion 360",
  image: "/images/portfolio/project.jpg",
  modelUrl: "/models/your-model.glb", // Your model here
  tags: ["Design", "3D Modeling"],
  featured: true,
  year: 2024
}
```

---

## 🛠️ Model Preparation Checklist

Before uploading your 3D model:

- [ ] **File Format:** .glb or .gltf
- [ ] **File Size:** Under 10MB
- [ ] **Materials:** Properly applied
- [ ] **Textures:** Embedded or accessible
- [ ] **Geometry:** Clean, no errors
- [ ] **Scale:** Appropriate size
- [ ] **Origin:** Centered properly

---

## 🌐 Browser Compatibility

### Supported Browsers:
- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge

### Mobile Support:
- ✅ iOS Safari
- ✅ Android Chrome
- ⚠️ Some older mobile browsers may have issues

### WebGL Requirements:
- ✅ Modern graphics card
- ✅ Updated graphics drivers
- ✅ WebGL enabled

---

## 📱 Mobile-Specific Issues

### Touch Controls:
- Tap and drag to rotate
- Pinch to zoom
- Double tap to reset view

### Performance:
- Models may load slower on mobile
- Reduce model complexity for mobile
- Use lower resolution textures

### AR Features:
- Requires ARCore (Android) or ARKit (iOS)
- Device must support AR
- Camera permissions required

---

## 🔍 Testing Your Models

### Local Testing:
1. Place model in `public/models/`
2. Use path: `/models/your-model.glb`
3. Test in development server

### Online Testing:
1. Upload to cloud storage
2. Use direct URL
3. Test in production environment

### Model Validation:
1. Use online GLB validators
2. Check in multiple browsers
3. Test on different devices

---

## 🆘 Getting Help

### If Nothing Works:
1. **Check Console Errors:** F12 → Console
2. **Test Sample Model:** Use provided test URL
3. **Verify File:** Open model in 3D software
4. **Check Network:** Ensure file is accessible
5. **Try Different Browser:** Test in Chrome

### Common Error Messages:
- `Failed to load model-viewer script` → Network issue
- `Model failed to load` → File not found or corrupted
- `WebGL not supported` → Browser compatibility issue
- `CORS error` → Cross-origin resource sharing issue

---

## 💡 Pro Tips

1. **Start Simple:** Use basic models first
2. **Test Frequently:** Check after each change
3. **Use Sample Models:** Test with known working models
4. **Check File Paths:** Ensure URLs are correct
5. **Optimize Models:** Keep file sizes small
6. **Mobile Test:** Always test on mobile devices

---

**Remember:** The most common issue is incorrect file paths or corrupted model files. Always test with a known working model first!
