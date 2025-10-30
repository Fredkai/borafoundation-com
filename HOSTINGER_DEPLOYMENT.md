# 🚀 BORA FOUNDATION - Hostinger Deployment Guide

**Last Updated:** October 30, 2025 | **Version:** 1.0 | **Status:** ✅ Ready for Deployment

---

## 📌 Quick Overview

This guide provides **step-by-step instructions** for deploying your BORA Foundation website to **Hostinger** hosting. The entire process takes approximately **15-30 minutes**.

### What You'll Accomplish
- ✅ Upload website files to Hostinger
- ✅ Configure your domain
- ✅ Enable SSL/HTTPS
- ✅ Optimize performance
- ✅ Test the live website

---

## 📋 Pre-Deployment Checklist

Before you start, ensure you have:

- [ ] Hostinger account (active and logged in)
- [ ] Domain name registered (or assigned from Hostinger)
- [ ] All website files prepared locally:
  - [ ] `index.html`
  - [ ] `css/style.css`
  - [ ] `js/main.js`
  - [ ] Images in `images/` folder
  - [ ] `.htaccess` file
  - [ ] `robots.txt` file
- [ ] Your foundation's images ready (not placeholders)
- [ ] Contact information updated in `index.html`
- [ ] Colors customized in `css/style.css`
- [ ] Browser open with Hostinger logged in

---

## 🔑 Step 1: Get Access to Hostinger Control Panel

### 1.1 Login to Hostinger
1. Go to https://hostinger.com
2. Click **Account** (top right)
3. Enter your email and password
4. Click **Sign In**

### 1.2 Navigate to Control Panel
1. After login, look for **Hepsia Control Panel** option
2. Click to open the control panel
3. You should see various options like File Manager, Domains, Email, etc.

### 1.3 Bookmark This Page
- Save the Hostinger control panel URL for future reference
- You'll need this for SSL, caching, and other settings

---

## 📁 Step 2: Prepare Files for Upload

### 2.1 Organize Your Files Locally

Ensure your files are organized exactly like this:
```
bora-foundation-website/
├── index.html
├── .htaccess
├── robots.txt
├── css/
│   └── style.css
├── js/
│   └── main.js
└── images/
    ├── about-image.jpg
    ├── gallery-1.jpg
    ├── gallery-2.jpg
    ├── gallery-3.jpg
    ├── gallery-4.jpg
    ├── gallery-5.jpg
    └── gallery-6.jpg
```

### 2.2 Image Optimization (IMPORTANT!)

Before uploading, optimize your images:

1. **Compress Images**
   - Visit https://tinypng.com
   - Upload each image
   - Download compressed version
   - Save to `images/` folder
   - **Goal:** Each image < 200KB

2. **Image Sizes (Recommended)**
   - `about-image.jpg` - 600×600px (~80KB)
   - `gallery-*.jpg` - 800×600px (~100KB each)

3. **Image Format**
   - Use JPG for photographs
   - Use PNG for graphics with transparency

### 2.3 Verify Content Updates

Before uploading, check:
- [ ] Foundation name is correct in HTML
- [ ] Mission/vision statements are updated
- [ ] Contact information is current
- [ ] Phone number is correct
- [ ] Email address is correct
- [ ] Address is updated
- [ ] Social media links are correct
- [ ] Colors match brand (in CSS)

---

## 🔧 Step 3: Upload Files to Hostinger

### Option A: Using Hostinger File Manager (RECOMMENDED - EASIEST)

#### Step 3A.1: Open File Manager
1. In Hostinger Control Panel, click **File Manager**
2. You should see folders like `public_html`, `mail`, etc.
3. Double-click to open **public_html** folder
4. This is your website root (where all files go)

#### Step 3A.2: Upload index.html
1. Click **Upload** button
2. Select `index.html` from your computer
3. Click **Open**
4. File uploads (watch progress bar)
5. Once complete, you'll see `index.html` in the file list

#### Step 3A.3: Upload CSS Folder
1. Click **Upload** button
2. Select the entire `css` folder
3. Click **Open**
4. Wait for upload to complete
5. You should now see a `css` folder in `public_html`

#### Step 3A.4: Upload JS Folder
1. Click **Upload** button
2. Select the entire `js` folder
3. Click **Open**
4. Wait for upload to complete
5. You should now see a `js` folder in `public_html`

#### Step 3A.5: Upload Images Folder
1. Click **Upload** button
2. Select the entire `images` folder (with your images inside)
3. Click **Open**
4. Wait for upload to complete (this may take longer)
5. You should now see an `images` folder in `public_html`

#### Step 3A.6: Upload .htaccess File
1. Click **Upload** button
2. Select `.htaccess` file
3. Click **Open**
4. You should now see `.htaccess` in `public_html`

#### Step 3A.7: Upload robots.txt File
1. Click **Upload** button
2. Select `robots.txt` file
3. Click **Open**
4. You should now see `robots.txt` in `public_html`

#### Step 3A.8: Verify File Structure
Your `public_html` should now contain:
```
public_html/
├── index.html          ✅
├── .htaccess           ✅
├── robots.txt          ✅
├── css/                ✅
│   └── style.css
├── js/                 ✅
│   └── main.js
└── images/             ✅
    ├── about-image.jpg
    └── gallery-*.jpg
```

---

### Option B: Using FTP with FileZilla (ALTERNATIVE)

#### Step 3B.1: Get FTP Credentials from Hostinger

1. In Hostinger Control Panel, look for **FTP Accounts** or **Accounts**
2. Click to expand FTP section
3. You should see FTP login credentials:
   - **Host:** `your-domain.com` OR `ftp.your-domain.com`
   - **Username:** Usually your email or a custom username
   - **Password:** Your FTP password
   - **Port:** Usually `21` (or `22` for SFTP)

4. Copy these credentials somewhere safe

#### Step 3B.2: Download FileZilla
- Visit https://filezilla-project.org
- Download **FileZilla Client** (free)
- Install and open FileZilla

#### Step 3B.3: Connect to Server
1. In FileZilla, go to **File > Site Manager**
2. Click **New Site**
3. Enter your FTP credentials:
   - Host: (from step 3B.1)
   - Port: 21 (or 22 for SFTP)
   - Protocol: FTP (or SFTP)
   - Username: (from step 3B.1)
   - Password: (from step 3B.1)

4. Click **Connect**
5. Wait for connection

#### Step 3B.4: Navigate to public_html
1. In the right panel (Remote site), look for `public_html` folder
2. Double-click to open it
3. This is where you'll upload files

#### Step 3B.5: Upload Files
1. In left panel (Local site), navigate to your website folder
2. Select all files and folders (index.html, css/, js/, images/, .htaccess, robots.txt)
3. Right-click and select **Upload**
4. Watch the progress bar
5. Once complete, files appear in right panel

#### Step 3B.6: Verify Uploads
- You should see identical structure in right panel (public_html)
- All files should be present

---

## 🌐 Step 4: Configure Your Domain

### Step 4.1: Check Domain Status

1. In Hostinger Control Panel, go to **Domains**
2. Look for your domain in the list
3. Check the status:
   - **Active** ✅ = Ready to use
   - **Pending** ⏳ = Wait for activation
   - **Not Active** ❌ = Need to activate

### Step 4.2: If Domain is New (Not Yet Configured)

1. Go to **Domains** section
2. Click **Add New Domain** or **Add Existing Domain**
3. Enter your domain name (e.g., `borafoundation.com`)
4. Follow the setup wizard
5. Wait for DNS propagation (24-48 hours)

### Step 4.3: If Domain is Already Active

1. Verify it points to Hostinger nameservers:
   - `ns1.hostinger.com`
   - `ns2.hostinger.com`
   - `ns3.hostinger.com`
   - `ns4.hostinger.com`

2. If not, update DNS records at your domain registrar

3. Wait 24-48 hours for DNS propagation

### Step 4.4: Test DNS (Optional)

1. Visit https://mxtoolbox.com
2. Enter your domain name
3. Click **DNS Lookup**
4. Verify it points to Hostinger IPs

---

## 🔒 Step 5: Enable SSL Certificate (HTTPS)

### Step 5.1: Access SSL Section

1. In Hostinger Control Panel, go to **SSL** section
2. Look for your domain in the list

### Step 5.2: Enable Let's Encrypt SSL

1. Find your domain
2. Click **Enable** or **Install** SSL
3. Select **Let's Encrypt** (free option)
4. Click **Proceed**

### Step 5.3: Wait for Activation

1. SSL activation usually takes **5 minutes to 24 hours**
2. You'll get a notification when it's ready
3. Once active, your site will be accessible via `https://yourdomain.com`

### Step 5.4: Force HTTPS (Recommended)

1. Go back to **File Manager**
2. Open the `.htaccess` file (right-click > Edit)
3. Add these lines at the top:
   ```apache
   # Force HTTPS
   RewriteEngine On
   RewriteCond %{HTTPS} off
   RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
   ```

4. Click **Save**
5. Now all traffic will redirect to HTTPS

---

## ⚡ Step 6: Enable Performance Features

### Step 6.1: Enable GZIP Compression

1. In Hostinger Control Panel, go to **Performance**
2. Find **GZIP Compression**
3. Click **Enable**
4. This reduces file sizes by 60-70% ⚡

### Step 6.2: Enable Browser Caching

1. In Performance section, find **Browser Caching** or **Static File Caching**
2. Click **Enable**
3. Set cache duration:
   - Static files: 1-6 months
   - Images: 6-12 months
4. This speeds up repeat visits

### Step 6.3: Enable CDN (Optional)

1. Look for **CDN** option in Performance section
2. If available, enable for image optimization
3. This serves images from global servers

---

## ✅ Step 7: Verify Installation

### Step 7.1: Visit Your Domain

1. Open a new browser tab
2. Type your domain: `https://yourdomain.com`
3. Press Enter
4. Wait for page to load

### Step 7.2: Check Website Loads

Verify:
- ✅ Page loads without errors
- ✅ HTTPS lock icon appears (green)
- ✅ All text is visible
- ✅ Images display correctly
- ✅ Navigation menu works
- ✅ Colors are visible
- ✅ No console errors (F12)

### Step 7.3: Test Navigation

1. Click on different navigation links
2. Verify each section loads
3. Try clicking buttons
4. Test hover effects

### Step 7.4: Open Browser Console

1. Press **F12** to open Developer Tools
2. Go to **Console** tab
3. Check for any red errors
4. If errors exist, note them down for troubleshooting

### Step 7.5: Test on Mobile

1. On your smartphone, go to your domain
2. Verify:
   - ✅ Layout is responsive
   - ✅ Hamburger menu appears
   - ✅ Hamburger menu opens when clicked
   - ✅ Text is readable
   - ✅ No horizontal scrolling
   - ✅ Buttons are clickable

---

## 🔗 Step 8: Connect Contact Form (Optional)

The contact form currently shows JavaScript alerts. To make it functional:

### Option A: Formspree.io (FREE, RECOMMENDED)

#### A.1: Sign Up for Formspree
1. Visit https://formspree.io
2. Click **Get Started**
3. Enter your email
4. Click **Sign Up**
5. Verify your email

#### A.2: Create New Form
1. In Formspree dashboard, click **New Form**
2. Enter form name: "Contact Form"
3. Choose "I want to create a custom form"
4. Click **Create**

#### A.3: Get Form ID
1. Copy the form ID (looks like: `f/xxxxx`)
2. You'll need this for the next step

#### A.4: Update HTML
1. Open `index.html` in a text editor
2. Find: `<form class="contact-form"`
3. Add to the form tag: `action="https://formspree.io/f/YOUR_FORM_ID" method="POST"`
4. Example:
   ```html
   <form class="contact-form" action="https://formspree.io/f/abcdef123" method="POST">
   ```
5. Save the file

#### A.5: Upload Updated File
1. Upload the updated `index.html` to Hostinger
2. Right-click > Replace if asked

#### A.6: Test Form
1. Visit your domain
2. Scroll to contact form
3. Fill in all fields
4. Click Send
5. Check your email for the submission

---

### Option B: Mailchimp (For Newsletters)

1. Visit https://mailchimp.com
2. Create account
3. Set up form in Mailchimp
4. Copy the form code
5. Replace the newsletter form in your HTML
6. Upload to Hostinger

---

### Option C: Backend Integration (Advanced)

If you want full backend integration:
1. Use PHP mail() function
2. Use third-party email API
3. Set up email authentication
4. Consult Hostinger support for details

---

## 🔍 Step 9: Test Performance

### Step 9.1: Run Google PageSpeed Insights

1. Visit https://pagespeed.web.dev
2. Enter your domain
3. Click **Analyze**
4. Wait for results

### Expected Results
- **Mobile Score:** 90+/100 ✅
- **Desktop Score:** 95+/100 ✅
- **Load Time:** < 2 seconds ✅

### If Score is Low

Optimize:
1. Compress images more (TinyPNG.com)
2. Enable GZIP compression (done in Step 6)
3. Enable browser caching (done in Step 6)
4. Clear Hostinger cache (if option available)
5. Wait 24 hours for DNS/cache to propagate

---

### Step 9.2: Run Google Lighthouse

1. Open your website
2. Press **F12** to open Developer Tools
3. Go to **Lighthouse** tab
4. Click **Analyze page load**
5. Wait for results

### Expected Scores
- **Performance:** 90+/100 ✅
- **Accessibility:** 95+/100 ✅
- **Best Practices:** 95+/100 ✅
- **SEO:** 100/100 ✅

---

## 🐛 Step 10: Troubleshooting Deployment

### Issue: Website Shows 404 Error
**Solution:**
1. Verify files uploaded to `public_html`
2. Check folder structure is correct
3. Verify `index.html` is in `public_html` root
4. Wait 5 minutes and refresh
5. Contact Hostinger support

### Issue: HTTPS Lock Not Showing
**Solution:**
1. SSL may still be activating (up to 24 hours)
2. Hard refresh browser (Ctrl+Shift+R)
3. Check SSL status in Hostinger
4. If still pending, wait 24 hours

### Issue: Styles/Images Not Loading
**Solution:**
1. Clear browser cache (Ctrl+Shift+R)
2. Check file paths are correct
3. Verify files uploaded to Hostinger
4. Check console (F12) for 404 errors
5. Wait for DNS propagation if new domain

### Issue: Mobile Menu Not Working
**Solution:**
1. Check JavaScript file uploaded
2. Verify `js/main.js` is in `js` folder
3. Open console (F12) for errors
4. Try different browser
5. Clear browser cache

### Issue: Domain Not Working
**Solution:**
1. Wait 24-48 hours for DNS propagation
2. Check domain points to Hostinger nameservers
3. Verify domain is active in Hostinger
4. Try flushing DNS:
   - **Windows:** Open Command Prompt, type: `ipconfig /flushdns`
   - **Mac:** Terminal: `sudo dscacheutil -flushcache`

### Issue: Website is Very Slow
**Solution:**
1. Compress images more (< 150KB each)
2. Enable GZIP compression (Step 6.1)
3. Enable browser caching (Step 6.2)
4. Clear Hostinger cache
5. Wait 24 hours for optimization

---

## 📋 Post-Deployment Checklist

After deployment, verify:

- [ ] Website accessible at https://yourdomain.com
- [ ] HTTPS lock icon visible (green)
- [ ] All pages load without errors
- [ ] Images display correctly
- [ ] Navigation links work
- [ ] Mobile menu works
- [ ] Animations visible
- [ ] No console errors (F12)
- [ ] Responsive on mobile/tablet
- [ ] Contact form working (if integrated)
- [ ] PageSpeed Score > 90
- [ ] Lighthouse scores acceptable
- [ ] Google Analytics added (optional)
- [ ] Google Search Console verified (optional)
- [ ] Backup created

---

## 🎯 Next Steps After Deployment

### Immediate (Today)
- [ ] Verify website is live
- [ ] Test on multiple devices
- [ ] Share with team for feedback

### This Week
- [ ] Set up Google Analytics
- [ ] Submit to Google Search Console
- [ ] Monitor for errors/issues
- [ ] Gather feedback

### This Month
- [ ] Connect contact form
- [ ] Set up email forwarding
- [ ] Monitor performance
- [ ] Plan content updates

### Ongoing
- [ ] Update content regularly
- [ ] Monitor analytics
- [ ] Fix broken links
- [ ] Optimize images
- [ ] Keep software updated

---

## 📞 Support Resources

### Hostinger Support
- **Help Portal:** https://support.hostinger.com
- **Contact Support:** From Hostinger control panel
- **Live Chat:** Usually available 24/7

### Technical Help
- **Errors:** Check console (F12)
- **Documentation:** README_FULL.md
- **Git Repository:** https://github.com/Fredkai/borafoundation-com

### Performance Tools
- **PageSpeed Insights:** https://pagespeed.web.dev
- **GTmetrix:** https://gtmetrix.com
- **Image Compression:** https://tinypng.com

---

## ✅ Final Checklist

Before considering deployment complete:

- [ ] Domain configured and active
- [ ] SSL/HTTPS enabled and working
- [ ] All files uploaded to `public_html`
- [ ] Folder structure correct
- [ ] Website loads without errors
- [ ] All links functional
- [ ] Responsive design working
- [ ] GZIP compression enabled
- [ ] Browser caching enabled
- [ ] PageSpeed score acceptable
- [ ] Lighthouse scores acceptable
- [ ] Tested on multiple devices
- [ ] No console errors
- [ ] Contact form working (if applicable)
- [ ] Team notified

---

## 🎉 Deployment Complete!

Your BORA Foundation website is now **live on Hostinger**! 

### You've Successfully:
✅ Uploaded all website files
✅ Configured your domain
✅ Enabled SSL/HTTPS security
✅ Optimized performance
✅ Tested the live website

### Your Website is:
- **Secure** (HTTPS/SSL enabled)
- **Fast** (GZIP compression, caching)
- **Responsive** (mobile-friendly)
- **Professional** (clean, modern design)
- **Ready** (for visitors and customers)

---

## 📞 Need Help?

1. **Check This Guide:** Review troubleshooting section
2. **Read Documentation:** See README_FULL.md
3. **Check Console:** Press F12 for errors
4. **Contact Hostinger:** Use their support chat
5. **Visit GitHub:** https://github.com/Fredkai/borafoundation-com

---

**🚀 Congratulations! Your website is live! 🎊**

**Last Updated:** October 30, 2025 | **Version:** 1.0 | **Status:** ✅ Complete
