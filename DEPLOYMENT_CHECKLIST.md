# 🚀 BORA Foundation - Hostinger Deployment Checklist

**Date Started:** _______________  
**Estimated Time:** 15-30 minutes  
**Your Domain:** _______________

---

## ✅ PRE-DEPLOYMENT CHECKLIST

### Files Ready
- [ ] `index.html` present
- [ ] `css/style.css` present
- [ ] `js/main.js` present
- [ ] `images/` folder with all images
- [ ] `.htaccess` file present
- [ ] `robots.txt` file present

### Content Updated
- [ ] Foundation name is correct
- [ ] Mission/vision updated
- [ ] Contact phone number updated
- [ ] Contact email updated
- [ ] Address updated
- [ ] Social media links correct
- [ ] Brand colors customized in CSS

### Images Optimized
- [ ] Images compressed (< 200KB each)
- [ ] Proper filenames (about-image.jpg, gallery-*.jpg)
- [ ] Images replaced (not using placeholders)

---

## 🔑 STEP 1: ACCESS HOSTINGER

- [ ] Go to https://hostinger.com
- [ ] Click **Account** (top right)
- [ ] Enter email and password
- [ ] Click **Sign In**
- [ ] Navigate to **Hepsia Control Panel**
- [ ] Bookmark this page

**Notes:** _______________________________________________

---

## 📁 STEP 2: UPLOAD FILES

### Open File Manager
- [ ] Click **File Manager** in Hostinger Control Panel
- [ ] Open **public_html** folder
- [ ] Verify it's empty (or backup existing files)

### Upload Each File/Folder
- [ ] Upload `index.html`
- [ ] Upload `css/` folder
- [ ] Upload `js/` folder
- [ ] Upload `images/` folder (may take longer)
- [ ] Upload `.htaccess` file
- [ ] Upload `robots.txt` file

### Verify Structure
```
public_html/
├── index.html          ✅
├── .htaccess           ✅
├── robots.txt          ✅
├── css/
│   └── style.css       ✅
├── js/
│   └── main.js         ✅
└── images/
    └── [all images]    ✅
```

**Upload Complete Time:** _______________

---

## 🌐 STEP 3: CONFIGURE DOMAIN

- [ ] Go to **Domains** section in Hostinger
- [ ] Find your domain in the list
- [ ] Verify status is **Active**
- [ ] Check DNS points to Hostinger nameservers:
  - `ns1.hostinger.com`
  - `ns2.hostinger.com`
  - `ns3.hostinger.com`
  - `ns4.hostinger.com`

**If domain is new:**
- [ ] Add domain in Hostinger
- [ ] Update nameservers at registrar
- [ ] Wait 24-48 hours for DNS propagation

**Domain Status:** _______________

---

## 🔒 STEP 4: ENABLE SSL/HTTPS

- [ ] Go to **SSL** section in Hostinger
- [ ] Find your domain
- [ ] Click **Enable** or **Install SSL**
- [ ] Select **Let's Encrypt** (free)
- [ ] Click **Proceed**
- [ ] Wait 5 minutes to 24 hours for activation

### Force HTTPS Redirect
- [ ] Open File Manager
- [ ] Edit `.htaccess` file
- [ ] Verify these lines are at the top:
```apache
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```
- [ ] Save file

**SSL Status:** _______________

---

## ⚡ STEP 5: ENABLE PERFORMANCE FEATURES

### GZIP Compression
- [ ] Go to **Performance** section
- [ ] Find **GZIP Compression**
- [ ] Click **Enable**

### Browser Caching
- [ ] In Performance section
- [ ] Find **Browser Caching**
- [ ] Click **Enable**
- [ ] Set cache duration: 6-12 months

### CDN (Optional)
- [ ] Check if **CDN** option available
- [ ] Enable if desired

**Performance Features Enabled:** _______________

---

## ✅ STEP 6: TEST YOUR WEBSITE

### Basic Tests
- [ ] Visit: `https://yourdomain.com`
- [ ] HTTPS lock icon appears (green)
- [ ] Page loads without errors
- [ ] All text visible
- [ ] Images display correctly
- [ ] Navigation links work
- [ ] Colors display correctly

### Browser Console Check
- [ ] Press **F12** to open Developer Tools
- [ ] Go to **Console** tab
- [ ] Verify no red errors
- [ ] Note any warnings

### Mobile Test
- [ ] Open site on smartphone
- [ ] Layout is responsive
- [ ] Hamburger menu appears
- [ ] Hamburger menu works when clicked
- [ ] Text is readable
- [ ] No horizontal scrolling
- [ ] Buttons work

**Test Results:** _______________

---

## 🔍 STEP 7: PERFORMANCE TESTING

### PageSpeed Insights
- [ ] Go to https://pagespeed.web.dev
- [ ] Enter your domain
- [ ] Click **Analyze**
- [ ] **Mobile Score:** _____ / 100
- [ ] **Desktop Score:** _____ / 100

### Lighthouse (Browser)
- [ ] Open your website
- [ ] Press **F12**
- [ ] Go to **Lighthouse** tab
- [ ] Click **Analyze page load**
- [ ] **Performance:** _____ / 100
- [ ] **Accessibility:** _____ / 100
- [ ] **Best Practices:** _____ / 100
- [ ] **SEO:** _____ / 100

**Performance Issues Found:** _______________

---

## 📧 STEP 8: CONNECT CONTACT FORM (OPTIONAL)

### Using Formspree (Recommended)
- [ ] Visit https://formspree.io
- [ ] Sign up with email
- [ ] Click **New Form**
- [ ] Name: "Contact Form"
- [ ] Copy form ID (looks like: `f/xxxxx`)
- [ ] Open `index.html` in text editor
- [ ] Find: `<form class="contact-form"`
- [ ] Add: `action="https://formspree.io/f/YOUR_FORM_ID" method="POST"`
- [ ] Save file
- [ ] Re-upload to Hostinger
- [ ] Test form submission

**Form Status:** _______________

---

## 🎯 POST-DEPLOYMENT CHECKLIST

### Immediate
- [ ] Website is live and accessible
- [ ] HTTPS is working
- [ ] All pages load correctly
- [ ] Mobile version works
- [ ] Share link with team for feedback

### This Week
- [ ] Set up Google Analytics (optional)
- [ ] Submit to Google Search Console (optional)
- [ ] Monitor for errors
- [ ] Gather user feedback

### This Month
- [ ] Update content regularly
- [ ] Monitor analytics
- [ ] Fix any broken links
- [ ] Optimize images further if needed

---

## 🐛 COMMON ISSUES & SOLUTIONS

### Issue: 404 Error
**Solution:**
- Verify files in `public_html`
- Check `index.html` is in root
- Wait 5 minutes and refresh
- Contact Hostinger support

### Issue: HTTPS Not Working
**Solution:**
- Wait up to 24 hours for SSL activation
- Hard refresh: Ctrl+Shift+R
- Check SSL status in Hostinger

### Issue: Images Not Loading
**Solution:**
- Clear browser cache (Ctrl+Shift+R)
- Check file paths in HTML
- Verify images uploaded to Hostinger
- Check console (F12) for 404 errors

### Issue: Mobile Menu Not Working
**Solution:**
- Verify `js/main.js` uploaded
- Check console (F12) for errors
- Try different browser
- Clear cache

### Issue: Website is Slow
**Solution:**
- Compress images more (< 150KB)
- Enable GZIP compression
- Enable browser caching
- Wait 24 hours for optimization

---

## 📞 SUPPORT RESOURCES

- **Hostinger Support:** https://support.hostinger.com
- **Live Chat:** Available in Hostinger Control Panel
- **PageSpeed Test:** https://pagespeed.web.dev
- **Image Compression:** https://tinypng.com
- **Formspree:** https://formspree.io

---

## ✅ DEPLOYMENT COMPLETE!

- [ ] All steps completed
- [ ] Website is live
- [ ] Performance is acceptable
- [ ] Team notified

**Deployment Completed:** _______________  
**Final URL:** _______________  
**Notes:** _______________

---

🎉 **Congratulations! Your BORA Foundation website is now live!**
