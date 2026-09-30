# BORA Foundation — Official Website

> Helping Hands, Transforming Lives.

Official website for **BORA Foundation**, a non-governmental organization dedicated to community empowerment, education, healthcare support, and youth development.

---

## 📁 Project Structure

A clean, production-ready static website structure:

```
bora-foundation-website/
├── index.html            # Main website (responsive, modern NGO UI)
├── contact-handler.php   # Contact form email processing script
├── .htaccess             # Apache server config (caching, GZIP, security)
├── robots.txt            # Search engine crawler directives
├── .gitignore            # Git ignore rules
├── README.md             # Project documentation
├── css/
│   └── style.css         # Complete responsive design system & animations
├── js/
│   └── main.js           # Navigation, lightbox gallery, donation form, toasts
└── images/               # Logos, hero banners, and project photo gallery
```

---

## 🚀 Running Locally

No build tools or compilers are required. You can run it directly:

### Option 1: Direct File
Double-click `index.html` to open it in your web browser.

### Option 2: Local HTTP Server (Recommended)
Using Python:
```bash
python -m http.server 8000
```
Then navigate to `http://localhost:8000`.

---

## 🌐 Deployment to Hostinger / Apache

1. Upload the repository contents directly into your web root directory (usually `public_html/`).
2. Ensure `.htaccess` is uploaded to enable GZIP compression, browser caching, and security headers.
3. If using PHP mail for the contact form, ensure PHP is enabled in your hosting panel and update recipient email in `contact-handler.php`.

---

## 🛠️ Key Features

- **Responsive Design**: Fluid layout optimized across desktop, tablet, and mobile devices.
- **Modern NGO Palette**: Clean forest green theme with warm accent highlights.
- **Interactive Lightbox**: Fullscreen photo preview with keyboard navigation for project galleries.
- **Donation Section**: Flexible amount selection with support for custom contributions.
- **Smooth Feedback**: Toast notification system for form responses.
- **Fast Performance**: Zero heavy dependencies, optimized asset loading, and server caching.

---

## 📄 License & Ownership

© 2026 BORA Foundation. All rights reserved.
