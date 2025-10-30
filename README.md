# BORA FOUNDATION - Modern Website

**Status:** ✅ Production Ready | **GitHub:** https://github.com/Fredkai/borafoundation-com

A modern, fully responsive website for BORA Foundation built with clean HTML, CSS, and JavaScript. This website is optimized for performance, accessibility, and SEO.

## 🎯 Repository Information

- **Repository:** https://github.com/Fredkai/borafoundation-com
- **Owner:** Fredkai
- **Created:** October 30, 2025
- **Version:** 1.0
- **License:** MIT
- **Live Website:** https://borafoundation.com

## 📋 Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Deployment to Hostinger](#deployment-to-hostinger)
- [Customization](#customization)
- [Browser Support](#browser-support)
- [Performance Tips](#performance-tips)
- [Support](#support)

## ✨ Features

### Modern Design
- Clean, professional design with modern color scheme
- Beautiful gradient backgrounds and smooth animations
- Custom CSS with CSS variables for easy theming
- Fully responsive layout (mobile-first approach)

### Interactivity
- Smooth scrolling navigation
- Mobile hamburger menu with smooth transitions
- Sticky header that changes on scroll
- Scroll-to-top button
- Animated counters on impact section
- AOS (Animate On Scroll) animations
- Form validation and submission handling
- Newsletter subscription form

### Performance
- Optimized images with lazy loading support
- Minimal external dependencies
- Fast load times
- Code splitting ready
- Production-ready build

### Accessibility
- Semantic HTML5 structure
- Skip-to-main-content link
- Proper heading hierarchy
- ARIA labels and roles
- Keyboard navigation support
- Color contrast compliance

### SEO Optimized
- Meta tags and structured data
- Clean URL structure
- Responsive design (Google Mobile-Friendly)
- Fast page load times
- Proper heading hierarchy
- Alt text for images

## 📁 Project Structure

```
bora-foundation-website/
├── index.html              # Main HTML file
├── css/
│   └── style.css          # All styles (1000+ lines)
├── js/
│   └── main.js            # All JavaScript functionality
├── images/                # Image directory
│   ├── about-image.jpg
│   ├── gallery-1.jpg
│   ├── gallery-2.jpg
│   └── ... (more images)
├── assets/                # Additional assets
├── .htaccess              # Apache configuration
├── robots.txt             # SEO robots file
└── README.md              # This file
```

## 🚀 Getting Started

### Prerequisites
- A web browser (Chrome, Firefox, Safari, Edge)
- Text editor (VS Code, Sublime, Atom)
- FTP client (for deployment) or file manager

### Local Development

1. **Clone or Download the Project**
   ```bash
   # If using git
   git clone <repository-url>
   
   # Or simply download and extract the ZIP file
   ```

2. **Open in Browser**
   - Simply double-click `index.html` to open in your default browser
   - Or use a local server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Python 2
   python -m SimpleHTTPServer 8000
   
   # Using Node.js (with http-server)
   npm install -g http-server
   http-server
   ```

3. **View Live**
   - Open http://localhost:8000 in your browser

## 🌍 Deployment to Hostinger

### Step-by-Step Guide

#### 1. **Prepare Your Domain**
   - Log in to your Hostinger account
   - Go to Hepsia Control Panel
   - Navigate to Domains section
   - Add your custom domain or use the default Hostinger domain

#### 2. **Access File Manager or FTP**
   
   **Option A: Using Hostinger File Manager (Recommended)**
   - In Hepsia Control Panel, go to File Manager
   - Navigate to `public_html` folder
   - This is your root directory

   **Option B: Using FTP**
   - Get FTP credentials from Hostinger
   - Open your FTP client (FileZilla, WinSCP, etc.)
   - Connect using:
     - Host: your-domain.com or ftp.your-domain.com
     - Username: Your FTP username
     - Password: Your FTP password
     - Port: 21 (or 22 for SFTP)

#### 3. **Upload Files**
   - Upload all files from `bora-foundation-website` to `public_html`
   - Keep the folder structure intact:
     ```
     public_html/
     ├── index.html
     ├── css/
     ├── js/
     ├── images/
     └── assets/
     ```

#### 4. **Configure Your Domain (if not already done)**
   - Update DNS records to point to Hostinger's nameservers
   - Or use the domain management in Hostinger panel
   - Allow 24-48 hours for DNS propagation

#### 5. **Add Images**
   - Replace placeholder images in the `images/` folder
   - Maintain the same filenames or update references in `index.html`

#### 6. **Verify Installation**
   - Visit your domain in a browser
   - Check all links and functionality
   - Test on mobile devices

#### 7. **Optional: Enable SSL Certificate**
   - In Hostinger control panel, go to SSL section
   - Enable free Let's Encrypt SSL
   - This provides HTTPS for your site

### Hostinger-Specific Settings

#### Enable GZIP Compression
1. In Hepsia Control Panel
2. Go to Performance
3. Enable GZIP Compression

#### Enable Caching
1. In Hepsia Control Panel
2. Go to Caching
3. Enable Static File Caching

#### Set Error Pages
1. In Hepsia Control Panel
2. Go to Error Pages
3. Customize if needed

## 🎨 Customization

### Update Content

1. **Company Information**
   - Edit `index.html` to update:
     - Foundation name
     - Mission statement
     - Contact information
     - Social media links

2. **Colors and Branding**
   - Edit `css/style.css` CSS variables section:
   ```css
   :root {
       --primary-color: #2e61d2;
       --secondary-color: #384259;
       --accent-color: #ffbd03;
       /* Update these colors to match your brand */
   }
   ```

3. **Images**
   - Replace images in `images/` folder
   - Update image paths in HTML if filenames change
   - Recommended sizes:
     - About image: 600x600px
     - Gallery items: 800x600px
     - Optimize all images for web (use ImageOptim, TinyPNG, etc.)

4. **Fonts**
   - Fonts are loaded from Google Fonts
   - To change, update the font link in `index.html` head section
   - Update CSS variable in `style.css`

### Add New Sections

1. Add new HTML section in `index.html`
2. Create corresponding CSS in `style.css`
3. Add JavaScript functionality in `js/main.js` if needed

## 🔧 Form Submission

The contact form and newsletter form currently show alerts. To make them functional:

### Option 1: Simple Email (Formspree)
1. Sign up at https://formspree.io
2. Update form action:
   ```html
   <form class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

### Option 2: Professional Email Service (Mailchimp)
1. For newsletters, integrate Mailchimp:
   ```html
   <form class="newsletter-form" action="https://mailchimp.com/..." method="POST">
   ```

### Option 3: Backend Integration
- Connect to your server's email service
- Update form handling in `js/main.js`

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari 11+
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ⚡ Performance Tips

1. **Image Optimization**
   - Use tools like ImageOptim or TinyPNG
   - Serve WebP format for modern browsers
   - Use proper image sizes

2. **Caching**
   - Enable browser caching in `.htaccess`
   - Set appropriate cache headers
   - Use CDN for assets

3. **Minification**
   - Use CSSNano for CSS minification
   - Use Terser for JavaScript minification
   - Minify HTML

4. **Code Splitting**
   - Load JavaScript only when needed
   - Defer non-critical resources

5. **SEO**
   - Update meta tags
   - Add Google Analytics
   - Submit sitemap to Search Console

## 📱 Responsive Breakpoints

- Desktop: 1024px and above
- Tablet: 768px - 1023px
- Mobile: Below 768px
- Extra Small: Below 480px

## 🔐 Security

1. Update `.htaccess` to include security headers
2. Use HTTPS (SSL certificate)
3. Keep dependencies updated
4. Validate all user inputs
5. Use Content Security Policy (CSP)

## 📊 Analytics & Tracking

Add Google Analytics:
```html
<!-- Add this before closing </head> tag -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🐛 Troubleshooting

### Issue: Styles not loading
- Check CSS file path in HTML
- Clear browser cache (Ctrl+Shift+R)
- Check browser console for errors

### Issue: JavaScript not working
- Check browser console for errors
- Verify JavaScript file is loaded
- Check for JavaScript conflicts

### Issue: Images not showing
- Verify image file paths
- Check image file permissions
- Ensure images are in correct format

### Issue: Responsive design not working
- Check viewport meta tag is present
- Clear cache and hard refresh
- Test in different browsers

## 📞 Support

For issues or questions:
1. Check this README thoroughly
2. Review the code comments
3. Inspect browser console (F12) for errors
4. Check Hostinger help documentation
5. Contact your hosting provider

## 📄 License

This website template is provided as-is for BORA Foundation.

## ✅ Checklist Before Going Live

- [ ] Update all company information
- [ ] Add real images and branding
- [ ] Set up contact form functionality
- [ ] Enable SSL certificate
- [ ] Set up Google Analytics
- [ ] Test all links and functionality
- [ ] Test on mobile devices
- [ ] Set up email notifications
- [ ] Create sitemap.xml
- [ ] Submit to search engines
- [ ] Set up 404 error page
- [ ] Enable gzip compression
- [ ] Set up caching
- [ ] Test page speed (GTmetrix, PageSpeed)
- [ ] Check SEO (Yoast, SEMrush)

## 🎯 Next Steps

1. **Add Your Content**
   - Update text, images, and contact info
   - Customize colors to match your brand

2. **Deploy to Hostinger**
   - Follow the deployment guide above
   - Test thoroughly after deployment

3. **Optimize & Monitor**
   - Set up analytics
   - Monitor performance
   - Gather user feedback

4. **Maintain & Update**
   - Keep content fresh
   - Update images regularly
   - Monitor for broken links

---

**Created:** 2025
**Last Updated:** October 30, 2025
**Version:** 1.0

For more information, visit: https://borafoundation.com
