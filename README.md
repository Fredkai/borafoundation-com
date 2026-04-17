# BORA Foundation Website

**Developed by KaiTech**
**Status:** ✅ Production Live
**Live Domain:** [https://borafoundation.com](https://borafoundation.com)

A modern, fully responsive, static website for the BORA Foundation built with clean HTML5, CSS3 (Custom Variables), and Vanilla JavaScript. This repository documents the entire codebase, server infrastructure, and secure routing setup.

---

## 📋 Table of Contents
- [Infrastructure Details](#infrastructure-details)
- [How It Works (Routing)](#how-it-works-routing)
- [Server Access & SSH](#server-access--ssh)
- [Deployment Guide (Updating the Website)](#deployment-guide-updating-the-website)
- [Local Development](#local-development)
- [Customization](#customization)
- [GitHub Upload Steps](#github-upload-steps)

---

## 🏗 Infrastructure Details

The website has been successfully migrated to a dedicated AWS Cloud environment properly secured behind Cloudflare's edge network.

* **Cloud Provider:** Amazon Web Services (AWS)
* **Instance OS:** Ubuntu Linux
* **Instance ID:** `i-0fd31969657727c57`
* **Elastic Public IP:** `34.207.17.11`
* **Web Server:** Nginx
* **Web Root Directory:** `/var/www/html/`
* **DNS & Security:** Cloudflare Zero Trust Tunnels
* **Tunnel ID:** `2c5bb49f-9021-49da-b074-531dbea62ea9`

---

## 🌐 How It Works (Routing)

This project does not rely on exposing standard HTTP (Port 80) or HTTPS (Port 443) ports publicly to the raw internet, greatly improving resistance to DDOS and scanning attacks. 

1. **Cloudflared Daemon:** The AWS server runs a background service called `cloudflared`.
2. **The Secure Tunnel:** `cloudflared` reaches out securely to Cloudflare using your specific tunnel token.
3. **DNS Proxy:** When an end-user navigates to `borafoundation.com`, Cloudflare intercepts the request, routes it through the secure tunnel (`2c5b...cfargotunnel.com`), and hands it seamlessly to the local Nginx web server.

---

## 🔐 Server Access & SSH

To manage the raw server files or restart services, you must connect via SSH using the provided `.pem` key.

**Required Key:** `bora key.pem`

**SSH Command (Run this in PowerShell or Terminal from this folder):**
```bash
ssh -i "bora key.pem" ubuntu@34.207.17.11
```

*(Note: Ensure your `bora key.pem` file is not publicly readable or your SSH client may throw a "permissions are too open" error).*

---

## 🚀 Deployment Guide (Updating the Website)

When you make changes to the local files (e.g., editing `index.html`, adding new images to the `images/` directory), you must securely copy them to the AWS web server so Nginx can serve them.

**Step 1: Upload the modified files to the server's home directory**
```bash
# Example: Uploading the updated index.html
scp -i "bora key.pem" index.html ubuntu@34.207.17.11:~/index.html

# Example: Uploading a new image
scp -i "bora key.pem" "images/new_photo.jpg" ubuntu@34.207.17.11:~/images/new_photo.jpg
```

**Step 2: Move the files to the Nginx Public Web Root**
Log into the server using SSH (see above), and run:
```bash
sudo mv ~/index.html /var/www/html/index.html
```

**Step 3: Fix the File Permissions**
Nginx requires the `www-data` user to own the files to display them without throwing a `403 Forbidden` error. Run this on the AWS server:
```bash
sudo chown -R www-data:www-data /var/www/html/
sudo find /var/www/html -type d -exec chmod 755 {} \;
sudo find /var/www/html -type f -exec chmod 644 {} \;
```

---

## 💻 Local Development

To run and preview the website locally on your computer before pushing to AWS:

**Using VS Code Live Server (Easiest)**
1. Open HTML file in VS Code.
2. Click "Go Live" at the bottom right (or right click the file -> Open with Live Server).
3. The site will appear in your default browser at `http://127.0.0.1:5500`.

**Using Python**
```bash
python -m http.server 8000
# Visit http://localhost:8000
```

---

## 🎨 Customization

The project is built entirely without heavy frameworks (No React, No Tailwind). It relies entirely on structured CSS.

* **Colors:** Can be modified instantly by changing the variables in `:root` at the top of `css/style.css` (e.g., `--primary: #10B981;`).
* **Images:** Added via HTML `<img>` tags and stored in the `images/` folder.
* **Footer:** Properly stamped with the foundation name and "Developed by KaiTech".
* **Interactivity:** Scroll animations provided by `AOS` (Animate On Scroll).

---

## ☁️ GitHub Upload Steps

To push all these beautiful codes and configuration notes directly your GitHub repository safely:

```bash
# 1. Initialize git (if not already done)
git init

# 2. Add all files
git add .

# 3. Commit the final layout and server details
git commit -m "Final deployment: KaiTech updates, layout fixes, and AWS Tunnel implementation"

# 4. Push to your main branch
git push origin main
```

