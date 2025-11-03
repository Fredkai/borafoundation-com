# 🔧 TROUBLESHOOTING GUIDE - Hostinger Deployment

Quick solutions to common deployment problems.

---

## 🚨 WEBSITE NOT LOADING

### Symptom: "404 Not Found" Error

**Possible Causes:**
1. Files not uploaded to correct location
2. `index.html` not in `public_html` root
3. Domain not configured properly

**Solutions:**
```
✅ Check File Manager → public_html → verify index.html exists
✅ Re-upload index.html if missing
✅ Wait 5 minutes and hard refresh (Ctrl+Shift+R)
✅ Check domain status in Hostinger Domains section
✅ Contact Hostinger support if issue persists
```

---

### Symptom: "DNS_PROBE_FINISHED_NXDOMAIN"

**Possible Causes:**
1. Domain not pointed to Hostinger
2. DNS not propagated yet

**Solutions:**
```
✅ Check nameservers at domain registrar:
   - Should be: ns1.hostinger.com, ns2.hostinger.com, etc.
✅ Wait 24-48 hours for DNS propagation
✅ Flush DNS cache:
   Windows: ipconfig /flushdns
   Mac: sudo dscacheutil -flushcache
✅ Try accessing via IP address (ask Hostinger support)
```

---

## 🔒 SSL/HTTPS ISSUES

### Symptom: No Green Lock Icon

**Possible Causes:**
1. SSL certificate not activated yet
2. Mixed content (HTTP and HTTPS)
3. Certificate installation failed

**Solutions:**
```
✅ Wait up to 24 hours for SSL activation
✅ Check SSL status: Hostinger → SSL → Check status
✅ Force HTTPS in .htaccess:
   RewriteEngine On
   RewriteCond %{HTTPS} off
   RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
✅ Hard refresh browser (Ctrl+Shift+R)
✅ Clear browser cache
✅ Reinstall SSL certificate in Hostinger
```

---

### Symptom: "Your Connection is Not Private"

**Possible Causes:**
1. SSL certificate expired
2. Certificate mismatch

**Solutions:**
```
✅ Check SSL expiry: Hostinger → SSL → Check expiry date
✅ Reinstall Let's Encrypt certificate
✅ Contact Hostinger support
✅ Try different browser
```

---

## 🎨 STYLING ISSUES

### Symptom: No CSS Styles (Plain HTML)

**Possible Causes:**
1. CSS file not uploaded
2. Wrong file path in HTML
3. CSS file in wrong location

**Solutions:**
```
✅ Check css/style.css exists in File Manager
✅ Verify folder structure:
   public_html/css/style.css (NOT public_html/style.css)
✅ Check index.html has correct path:
   <link rel="stylesheet" href="css/style.css">
✅ Clear browser cache (Ctrl+Shift+R)
✅ Re-upload css folder
```

---

### Symptom: Some Styles Missing

**Possible Causes:**
1. CSS file truncated during upload
2. Browser cache

**Solutions:**
```
✅ Hard refresh (Ctrl+Shift+R)
✅ Open DevTools (F12) → Console → Check for errors
✅ Re-upload style.css
✅ Verify file size matches original
```

---

## 🖼️ IMAGE ISSUES

### Symptom: Images Not Displaying (Broken Image Icons)

**Possible Causes:**
1. Images not uploaded
2. Wrong file paths
3. Wrong file names (case-sensitive)

**Solutions:**
```
✅ Check images/ folder exists in File Manager
✅ Verify all images uploaded
✅ Check file names match exactly (case-sensitive):
   about-image.jpg NOT About-Image.JPG
✅ Verify paths in HTML:
   <img src="images/about-image.jpg">
✅ Open DevTools (F12) → Network → Check 404 errors
✅ Re-upload images folder
```

---

### Symptom: Images Load Slowly

**Possible Causes:**
1. Images too large
2. Not compressed
3. GZIP not enabled

**Solutions:**
```
✅ Compress images: https://tinypng.com
✅ Target: < 150KB per image
✅ Enable GZIP: Hostinger → Performance → GZIP
✅ Enable Browser Caching: Hostinger → Performance
✅ Use WebP format if possible
```

---

## 📱 MOBILE ISSUES

### Symptom: Mobile Menu Not Working

**Possible Causes:**
1. JavaScript file not uploaded
2. JavaScript error
3. Browser compatibility

**Solutions:**
```
✅ Check js/main.js exists in File Manager
✅ Open DevTools (F12) → Console → Check errors
✅ Verify folder structure:
   public_html/js/main.js
✅ Re-upload js folder
✅ Try different mobile browser
✅ Clear mobile browser cache
```

---

### Symptom: Layout Broken on Mobile

**Possible Causes:**
1. CSS not loaded
2. Viewport meta tag missing

**Solutions:**
```
✅ Check index.html has viewport meta tag:
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
✅ Verify CSS loaded (check DevTools)
✅ Test in different mobile browsers
✅ Hard refresh on mobile
```

---

## ⚡ PERFORMANCE ISSUES

### Symptom: Website Loads Very Slowly

**Possible Causes:**
1. Images too large
2. No compression enabled
3. No caching

**Solutions:**
```
✅ Compress images (< 150KB each)
✅ Enable GZIP: Hostinger → Performance → GZIP
✅ Enable Browser Caching: Hostinger → Performance
✅ Wait 24 hours for optimization to take effect
✅ Test: https://pagespeed.web.dev
✅ Enable CDN if available in Hostinger
```

---

### Symptom: PageSpeed Score < 70

**Possible Causes:**
1. Large images
2. Missing optimizations
3. Render-blocking resources

**Solutions:**
```
✅ Compress all images further
✅ Enable GZIP compression
✅ Enable browser caching
✅ Minify CSS/JS (use online tools)
✅ Wait 24-48 hours for DNS/cache propagation
✅ Check detailed report on pagespeed.web.dev
```

---

## 📧 CONTACT FORM ISSUES

### Symptom: Form Shows JavaScript Alert

**This is NORMAL** - The form is not connected yet.

**Solutions:**
```
✅ Connect to Formspree (see DEPLOYMENT_CHECKLIST.md)
✅ OR connect to backend email service
✅ OR use Hostinger's PHP mail() function
```

---

### Symptom: Formspree Form Not Submitting

**Possible Causes:**
1. Wrong form ID
2. Form not activated
3. Network issue

**Solutions:**
```
✅ Verify form action URL:
   action="https://formspree.io/f/YOUR_FORM_ID"
✅ Check Formspree account is verified
✅ Test form in different browser
✅ Check browser console (F12) for errors
✅ Contact Formspree support
```

---

## 🌐 DOMAIN ISSUES

### Symptom: Domain Shows "Coming Soon" Page

**Possible Causes:**
1. Files not uploaded yet
2. Domain not configured
3. Cache issue

**Solutions:**
```
✅ Verify files in public_html
✅ Check domain is active: Hostinger → Domains
✅ Wait 5-10 minutes
✅ Hard refresh (Ctrl+Shift+R)
✅ Clear browser cache
✅ Contact Hostinger support
```

---

### Symptom: www vs non-www Issues

**Possible Causes:**
1. Redirect not configured
2. DNS issue

**Solutions:**
```
✅ Add to .htaccess:
   # Force www
   RewriteCond %{HTTP_HOST} !^www\. [NC]
   RewriteRule ^(.*)$ https://www.%{HTTP_HOST}/$1 [R=301,L]
   
   OR
   
   # Force non-www
   RewriteCond %{HTTP_HOST} ^www\.(.*)$ [NC]
   RewriteRule ^(.*)$ https://%1/$1 [R=301,L]
✅ Choose one option and add to .htaccess
✅ Wait 5 minutes and test
```

---

## 🔍 BROWSER CONSOLE ERRORS

### How to Check Console

1. Open your website
2. Press **F12** (or right-click → Inspect)
3. Click **Console** tab
4. Look for red errors

---

### Common Errors & Solutions

**Error:** `Failed to load resource: 404`
```
✅ File is missing on server
✅ Check file path is correct
✅ Re-upload missing file
```

**Error:** `Blocked by CORS policy`
```
✅ Usually not an issue for static sites
✅ Contact Hostinger if persists
```

**Error:** `Uncaught ReferenceError: $ is not defined`
```
✅ jQuery not loaded
✅ Check if jQuery is needed
✅ Add jQuery if required
```

---

## 📞 WHEN TO CONTACT HOSTINGER SUPPORT

Contact support if:
- ✅ Files uploaded but 404 persists after 1 hour
- ✅ SSL not activating after 24 hours
- ✅ Domain configuration issues
- ✅ Server errors (500, 502, 503)
- ✅ Cannot access File Manager
- ✅ Billing or account issues

**How to Contact:**
1. Login to Hostinger
2. Click **Help** or **Support**
3. Use **Live Chat** (24/7)
4. OR submit ticket

---

## 🔧 USEFUL TESTING TOOLS

### Performance Testing
- **PageSpeed Insights:** https://pagespeed.web.dev
- **GTmetrix:** https://gtmetrix.com
- **Pingdom:** https://tools.pingdom.com

### DNS Testing
- **DNS Checker:** https://dnschecker.org
- **MX Toolbox:** https://mxtoolbox.com
- **What's My DNS:** https://whatsmydns.net

### SSL Testing
- **SSL Labs:** https://www.ssllabs.com/ssltest
- **SSL Checker:** https://www.sslshopper.com/ssl-checker.html

### Image Optimization
- **TinyPNG:** https://tinypng.com
- **Compressor.io:** https://compressor.io
- **Squoosh:** https://squoosh.app

### Browser Testing
- **BrowserStack:** https://www.browserstack.com
- **LambdaTest:** https://www.lambdatest.com

---

## 📋 DIAGNOSTIC CHECKLIST

If something's not working, check:

**Files & Structure**
- [ ] All files uploaded to public_html
- [ ] Correct folder structure (css/, js/, images/)
- [ ] index.html in root of public_html
- [ ] File names correct (case-sensitive)

**Domain & DNS**
- [ ] Domain is active in Hostinger
- [ ] Nameservers point to Hostinger
- [ ] DNS propagation complete (24-48 hours)
- [ ] Domain not expired

**SSL/HTTPS**
- [ ] SSL certificate installed
- [ ] SSL status shows "Active"
- [ ] .htaccess forces HTTPS
- [ ] No mixed content errors

**Browser**
- [ ] Cache cleared (Ctrl+Shift+R)
- [ ] Different browser tested
- [ ] Incognito mode tested
- [ ] No browser extensions interfering

**Console**
- [ ] No red errors in console (F12)
- [ ] All resources loading (Network tab)
- [ ] No 404 errors

---

## ✅ FINAL TROUBLESHOOTING STEPS

If NOTHING works:

1. **Delete everything in public_html**
2. **Re-upload ALL files**
3. **Wait 10 minutes**
4. **Hard refresh browser (Ctrl+Shift+R)**
5. **Test in Incognito mode**
6. **Contact Hostinger Support**

---

## 📞 SUPPORT RESOURCES

- **Hostinger Support:** https://support.hostinger.com
- **Live Chat:** Available in Hostinger Control Panel (24/7)
- **Hostinger Community:** https://community.hostinger.com
- **Hostinger Tutorials:** https://support.hostinger.com/en/collections/

---

**Still having issues?** Document the error (screenshot), check browser console, and contact Hostinger support with details.
