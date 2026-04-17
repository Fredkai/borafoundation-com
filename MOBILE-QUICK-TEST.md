# 🚀 Quick Mobile Testing Guide

## View Your Mobile Website NOW - 3 Easy Ways!

### ⚡ Method 1: Browser DevTools (FASTEST - 30 seconds)

**Chrome/Edge:**
1. Right-click on your `index.html` file
2. Select "Open with" → Chrome or Edge
3. Press `F12` (or right-click → Inspect)
4. Click the phone/tablet icon in top-left (or press `Ctrl+Shift+M`)
5. Select a device from dropdown:
   - **iPhone 12 Pro** (390x844)
   - **iPhone SE** (375x667)
   - **Samsung Galaxy S20** (360x800)
   - **iPad** (768x1024)

**You can now:**
- ✅ See exactly how it looks on mobile
- ✅ Test portrait and landscape modes
- ✅ Click the hamburger menu
- ✅ Test all interactions

---

### 📱 Method 2: Test on Your Real Phone (WiFi Required)

**Step 1: Start a Local Server**

Open PowerShell in your project folder and run ONE of these:

```powershell
# Option A: Python (if installed)
python -m http.server 8000

# Option B: PHP (if installed)
php -S 0.0.0.0:8000

# Option C: Node.js (if installed)
npx http-server -p 8000
```

**Step 2: Get Your Computer's IP Address**

In PowerShell, type:
```powershell
ipconfig
```
Look for **IPv4 Address** (e.g., 192.168.1.5)

**Step 3: Open on Your Phone**

1. Make sure your phone is on the **same WiFi** as your computer
2. Open browser on your phone
3. Type: `http://YOUR_IP_ADDRESS:8000`
   - Example: `http://192.168.1.5:8000`

✅ **Your website will load on your phone!**

---

### 🌐 Method 3: Deploy Online (View from Anywhere)

**Option A: Netlify (Easiest - 2 minutes)**

1. Go to [netlify.com](https://netlify.com)
2. Sign up (free)
3. Drag your `bora-foundation-website` folder to the upload area
4. Get instant URL like: `https://bora-foundation.netlify.app`
5. Open URL on any mobile device

**Option B: GitHub Pages (Free)**

1. Create GitHub account
2. Create new repository
3. Upload your files
4. Enable Pages in Settings
5. Access at: `https://yourusername.github.io/bora-foundation`

---

## 🧪 What to Test on Mobile

### Navigation
- [ ] Click hamburger menu (☰)
- [ ] Menu opens smoothly
- [ ] Links work and close menu
- [ ] Scroll works with menu closed

### Content
- [ ] All text is readable
- [ ] Images load and display properly
- [ ] Buttons are easy to tap
- [ ] No horizontal scrolling

### Sections
- [ ] Hero section displays well
- [ ] About section is readable
- [ ] Programs cards stack nicely
- [ ] Gallery images show properly
- [ ] Contact form is usable

### Forms
- [ ] Can tap into input fields
- [ ] Keyboard doesn't cover inputs
- [ ] Submit button is accessible
- [ ] No page zoom on focus

### Interactions
- [ ] All buttons respond to tap
- [ ] Links have visual feedback
- [ ] Scroll-to-top button appears
- [ ] Smooth scrolling works

---

## 📏 Test These Screen Sizes

| Device | Width | How to Test |
|--------|-------|-------------|
| iPhone SE | 375px | DevTools → iPhone SE |
| iPhone 12 | 390px | DevTools → iPhone 12 Pro |
| Samsung Galaxy | 360px | DevTools → Galaxy S20 |
| iPad | 768px | DevTools → iPad |
| Small Desktop | 1024px | Resize browser window |

---

## 🐛 Common Issues & Fixes

### Issue: "Can't access from phone"
**Fix:** 
- Make sure phone and computer are on same WiFi
- Check firewall isn't blocking port 8000
- Try your computer's IP address, not localhost

### Issue: "Menu doesn't work"
**Fix:** 
- Hard refresh page (Ctrl+F5)
- Check JavaScript is enabled
- Open browser console for errors

### Issue: "Text too small"
**Fix:** 
- Already optimized! Should auto-scale
- Try portrait mode for better reading

### Issue: "Images don't load"
**Fix:**
- Check images exist in `/images/` folder
- Verify file names match exactly (case-sensitive)

---

## ✨ Current Mobile Features

Your website now has:
- ✅ Responsive layout (works on ALL devices)
- ✅ Mobile hamburger menu
- ✅ Touch-optimized buttons (44px minimum)
- ✅ Single-column layout on mobile
- ✅ Optimized font sizes
- ✅ Mobile-friendly forms
- ✅ Landscape mode support
- ✅ Works on iOS and Android
- ✅ Can be added to home screen

---

## 🎯 Quick Checklist

Before sharing with others:

- [ ] Tested on Chrome DevTools mobile view
- [ ] Tested on real phone (if possible)
- [ ] All images load correctly
- [ ] Mobile menu works
- [ ] Contact form is functional
- [ ] All links work
- [ ] Text is readable
- [ ] No errors in browser console (F12)

---

## 💡 Pro Tips

1. **Best Testing Device in DevTools:**
   - Use "iPhone 12 Pro" (most common size)
   - Also test "iPhone SE" (smaller screens)

2. **Rotate Screen:**
   - In DevTools, click rotate icon
   - Tests landscape mode

3. **Network Speed:**
   - In DevTools, throttle to "Fast 3G"
   - See how it performs on mobile networks

4. **Performance:**
   - Open DevTools → Lighthouse
   - Run mobile audit
   - Get performance score

---

## 🆘 Need Help?

**Quick Commands Reference:**

```powershell
# Check Python version
python --version

# Check PHP version
php --version

# Check Node.js version
node --version

# Get your IP address
ipconfig

# Stop server (in PowerShell)
Ctrl + C
```

---

## 🎉 Success Indicators

You'll know it's working when:
- ✅ Page loads without errors
- ✅ Content fits the screen (no horizontal scroll)
- ✅ Hamburger menu appears on small screens
- ✅ Tap targets are easy to click
- ✅ Images display properly
- ✅ Text is readable without zooming

---

**Your website is ready to view on mobile! Start with Method 1 (Browser DevTools) - it's the fastest way to see it working!**

---

*Made with ❤️ by KaiTech*
