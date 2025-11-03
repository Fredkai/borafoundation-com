# 📝 HOW TO EDIT YOUR WEBSITE AFTER HOSTINGER DEPLOYMENT

After your website is live on Hostinger, you have **3 main methods** to make changes.

---

## 🎯 WHICH METHOD SHOULD YOU USE?

### Method 1: Edit Locally + Re-upload (RECOMMENDED) ⭐
**Best for:** Any changes, safest method  
**Difficulty:** ⭐ Easy  
**Time:** 5-10 minutes per change

### Method 2: Direct Edit via Hostinger File Manager
**Best for:** Quick text changes only  
**Difficulty:** ⭐⭐ Medium  
**Time:** 2-5 minutes per change

### Method 3: FTP with FileZilla (Advanced)
**Best for:** Frequent updates, bulk changes  
**Difficulty:** ⭐⭐⭐ Advanced  
**Time:** Initial setup 10 min, then instant sync

---

## 🌟 METHOD 1: EDIT LOCALLY + RE-UPLOAD (RECOMMENDED)

This is the **safest and most recommended** method.

### Why Use This Method?
- ✅ Edit files on your computer safely
- ✅ Preview changes before uploading
- ✅ Keep backup of original files
- ✅ Can test in browser first
- ✅ No risk of breaking live site

### Step-by-Step Process

#### STEP 1: Edit Files on Your Computer (5 min)

1. **Navigate to your website folder:**
   ```
   C:\Users\kaita\bora-foundation-website\
   ```

2. **Open the file you want to edit:**
   - **For text changes:** Open `index.html` with Notepad or text editor
   - **For styling:** Open `css/style.css`
   - **For functionality:** Open `js/main.js`
   - **For images:** Add/replace in `images/` folder

3. **Make your changes:**
   - Example: Change phone number, update text, add images, etc.

4. **Save the file** (Ctrl+S)

#### STEP 2: Test Locally (2 min - IMPORTANT!)

1. **Open** `index.html` in your browser (double-click it)
2. **Check** your changes look correct
3. **Verify** nothing is broken
4. **Test** on mobile (resize browser window)

#### STEP 3: Upload to Hostinger (3 min)

1. **Login to Hostinger:**
   - Go to https://hostinger.com
   - Login → Open **Hepsia Control Panel**

2. **Open File Manager:**
   - Click **File Manager**
   - Navigate to **public_html** folder

3. **Upload the changed file:**
   - Click **Upload** button
   - Select the file you edited (e.g., `index.html`)
   - Click **Open**
   - When asked "File exists, replace?" → Click **Yes** or **Replace**

4. **Wait for upload to complete** (progress bar)

#### STEP 4: Verify Changes Live (1 min)

1. **Open your website:** `https://yourdomain.com`
2. **Hard refresh** to clear cache: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
3. **Check changes** are visible
4. **Done!** ✅

---

### Common Edits with Method 1

#### ✏️ Edit 1: Change Text Content

**What to edit:** `index.html`

1. Open `index.html` in Notepad
2. Find the text you want to change (Ctrl+F to search)
3. Change the text
4. Save file (Ctrl+S)
5. Re-upload `index.html` to Hostinger

**Example:**
```html
<!-- BEFORE -->
<h1>Welcome to BORA Foundation</h1>

<!-- AFTER -->
<h1>Welcome to New BORA Foundation</h1>
```

---

#### 🎨 Edit 2: Change Colors

**What to edit:** `css/style.css`

1. Open `css/style.css` in Notepad
2. Find the color you want to change
3. Replace with new color code
4. Save file (Ctrl+S)
5. Re-upload entire `css` folder to Hostinger

**Example:**
```css
/* BEFORE */
--primary-color: #ff6b6b;

/* AFTER */
--primary-color: #3498db;
```

---

#### 🖼️ Edit 3: Replace Images

**What to edit:** `images/` folder

1. **Prepare new image:**
   - Compress at https://tinypng.com
   - Rename to match existing name (e.g., `about-image.jpg`)

2. **Replace in local folder:**
   - Delete old image from `images/`
   - Add new image with same name

3. **Upload to Hostinger:**
   - File Manager → `public_html/images/`
   - Upload new image
   - Replace when asked

---

#### 📧 Edit 4: Update Contact Information

**What to edit:** `index.html`

1. Open `index.html`
2. Find the contact section (search for "contact")
3. Update phone, email, address
4. Save file
5. Re-upload `index.html`

**Example:**
```html
<!-- BEFORE -->
<p>Phone: +254 123 456 789</p>

<!-- AFTER -->
<p>Phone: +254 987 654 321</p>
```

---

## 📂 METHOD 2: DIRECT EDIT VIA HOSTINGER FILE MANAGER

Edit files directly on the server. **Use with caution!**

### ⚠️ Warning:
- Risk of breaking live site
- No local backup
- Can't preview before changes go live
- **Only use for small text changes**

### Step-by-Step

#### STEP 1: Access File Manager (2 min)

1. Login to Hostinger
2. Open **Hepsia Control Panel**
3. Click **File Manager**
4. Navigate to **public_html**

#### STEP 2: Edit File (3 min)

1. **Find the file** you want to edit (e.g., `index.html`)
2. **Right-click** on the file
3. Select **Edit** or **Code Edit**
4. File opens in editor

#### STEP 3: Make Changes (2 min)

1. **Find** the section you want to change (Ctrl+F to search)
2. **Edit** the text/code
3. **Save** the file (click **Save** button)
4. **Close** the editor

#### STEP 4: Verify Changes (1 min)

1. Visit: `https://yourdomain.com`
2. Hard refresh: `Ctrl+Shift+R`
3. Check changes are visible

---

### When to Use Method 2

✅ **Good for:**
- Quick typo fixes
- Emergency phone number update
- Small text changes

❌ **NOT good for:**
- Major changes
- Multiple file edits
- Image replacements
- Styling changes

---

## 💻 METHOD 3: FTP WITH FILEZILLA (ADVANCED)

Set up FTP for **instant, real-time editing**.

### Why Use FTP?
- ✅ Edit files directly on server
- ✅ Drag-and-drop to upload
- ✅ Sync local and server files
- ✅ Bulk file operations
- ✅ Fast for frequent updates

### One-Time Setup (10 min)

#### STEP 1: Get FTP Credentials from Hostinger

1. **Login to Hostinger**
2. Go to **FTP Accounts** or **Files** section
3. Find your FTP credentials:
   - **Host:** `ftp.yourdomain.com` or IP address
   - **Username:** Your FTP username
   - **Password:** Your FTP password
   - **Port:** `21` (FTP) or `22` (SFTP)

4. **Copy these credentials** (keep them safe!)

#### STEP 2: Download FileZilla

1. Go to: https://filezilla-project.org
2. Click **Download FileZilla Client** (FREE)
3. Install FileZilla
4. Open FileZilla

#### STEP 3: Connect to Hostinger

1. In FileZilla, go to **File** → **Site Manager**
2. Click **New Site**
3. Name it: "BORA Foundation - Hostinger"
4. Enter your credentials:
   - **Protocol:** FTP or SFTP
   - **Host:** (from Step 1)
   - **Port:** 21 (FTP) or 22 (SFTP)
   - **Logon Type:** Normal
   - **User:** (from Step 1)
   - **Password:** (from Step 1)

5. Click **Connect**
6. If asked about certificate, click **Always trust** → **OK**

#### STEP 4: Navigate to Website Files

1. **Right panel** (Remote site) shows server files
2. Navigate to **public_html** folder
3. You should see: `index.html`, `css/`, `js/`, `images/`

4. **Left panel** (Local site) shows your computer
5. Navigate to: `C:\Users\kaita\bora-foundation-website\`

---

### Using FTP to Edit (After Setup)

#### Method A: Edit Locally + Upload via FTP

1. **Edit file** on your computer (left panel)
2. **Save** the file
3. **Drag file** from left panel to right panel
4. File uploads automatically
5. Refresh your website to see changes

#### Method B: Direct Edit on Server

1. **Right-click** file in right panel (server)
2. Select **View/Edit**
3. File opens in your default editor (Notepad)
4. **Make changes**
5. **Save** (Ctrl+S)
6. FileZilla asks "Upload?" → Click **Yes**
7. File syncs to server automatically

---

### FTP Pro Tips

- ✅ **Always keep FileZilla connected** for instant uploads
- ✅ **Right-click → Upload** to upload files
- ✅ **Drag-and-drop** works too
- ✅ **Red/yellow/green** indicators show upload status
- ✅ **Compare directories** to see differences
- ✅ **Download first** before deleting server files

---

## 🔄 COMPLETE WORKFLOW: LOCAL EDITING → UPLOAD

### The Recommended Workflow

```
1. EDIT LOCALLY
   └─> Open file in C:\Users\kaita\bora-foundation-website\
   └─> Make changes
   └─> Save file
   └─> Test in browser (open index.html locally)

2. VERIFY CHANGES
   └─> Check changes look correct
   └─> Test on different screen sizes
   └─> Check for errors (F12 console)

3. UPLOAD TO HOSTINGER
   └─> Method 1: Hostinger File Manager → Upload → Replace
   └─> Method 3: FileZilla → Drag file to right panel

4. TEST LIVE
   └─> Visit https://yourdomain.com
   └─> Hard refresh (Ctrl+Shift+R)
   └─> Verify changes visible
   └─> Test on mobile

5. DONE ✅
```

---

## 📋 COMMON EDITING TASKS

### Task 1: Update Phone Number

**File:** `index.html`

1. Open `index.html` in Notepad
2. Search (Ctrl+F): "Phone" or your current number
3. Replace with new number
4. Save (Ctrl+S)
5. Re-upload `index.html` to Hostinger
6. Refresh website

---

### Task 2: Change Hero/Header Text

**File:** `index.html`

1. Open `index.html`
2. Find the `<header>` or `<section class="hero">` section
3. Change the `<h1>` or `<h2>` text
4. Save file
5. Re-upload
6. Refresh website

---

### Task 3: Add New Gallery Image

**Files:** `index.html` + new image in `images/`

1. **Prepare image:**
   - Compress at https://tinypng.com
   - Rename: `gallery-7.jpg`
   - Save to local `images/` folder

2. **Update HTML:**
   - Open `index.html`
   - Find gallery section
   - Add new image code:
   ```html
   <div class="gallery-item">
       <img src="images/gallery-7.jpg" alt="Description">
   </div>
   ```

3. **Upload both:**
   - Upload `index.html`
   - Upload `images/gallery-7.jpg`

4. **Test:** Refresh website

---

### Task 4: Change Background Color

**File:** `css/style.css`

1. Open `css/style.css`
2. Find the section you want to change (e.g., `body` or `.hero`)
3. Change `background-color` value:
   ```css
   .hero {
       background-color: #3498db; /* Change this color */
   }
   ```

4. Save file
5. Re-upload entire `css` folder
6. Hard refresh website (Ctrl+Shift+R)

---

### Task 5: Update Mission Statement

**File:** `index.html`

1. Open `index.html`
2. Search (Ctrl+F): "mission" or current mission text
3. Replace with new mission statement
4. Save file
5. Re-upload `index.html`
6. Refresh website

---

## 🛠️ TOOLS YOU'LL NEED

### Text Editors (Choose One)

**Built-in (Windows):**
- ✅ **Notepad** - Simple, already installed
- ✅ **Notepad++** - Free, powerful (download: https://notepad-plus-plus.org)

**Advanced (Optional):**
- **Visual Studio Code** - Free, professional (download: https://code.visualstudio.com)
- **Sublime Text** - Fast, elegant (download: https://www.sublimetext.com)

### Image Tools

- **Compress:** https://tinypng.com
- **Resize:** https://www.iloveimg.com/resize-image
- **Edit:** Microsoft Paint (built-in) or GIMP (free)

### FTP Client

- **FileZilla** - Free, powerful (download: https://filezilla-project.org)

---

## ⚠️ IMPORTANT EDITING RULES

### DO:
- ✅ **Always edit locally first** (safest)
- ✅ **Test before uploading** (open index.html in browser)
- ✅ **Keep backups** of original files
- ✅ **Hard refresh** after changes (Ctrl+Shift+R)
- ✅ **Compress images** before upload
- ✅ **Use same file names** when replacing images

### DON'T:
- ❌ **Don't edit live files** unless emergency
- ❌ **Don't delete files** without backup
- ❌ **Don't change file structure** without understanding
- ❌ **Don't upload huge images** (compress first!)
- ❌ **Don't edit files you don't understand**

---

## 🔍 TESTING YOUR CHANGES

After editing, always test:

### Basic Checks
- [ ] Website loads without errors
- [ ] Changes are visible
- [ ] No broken images
- [ ] Links still work
- [ ] Navigation menu works
- [ ] Mobile menu works (on phone)

### Browser Console Check
- [ ] Press **F12** → **Console** tab
- [ ] No red errors
- [ ] All resources loading (Network tab)

### Multi-Browser Test
- [ ] Test in Chrome
- [ ] Test in Firefox
- [ ] Test in Edge
- [ ] Test on mobile (phone)

---

## 🆘 TROUBLESHOOTING EDITS

### Issue: Changes Not Showing

**Solutions:**
```
✅ Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
✅ Clear browser cache
✅ Test in Incognito mode
✅ Wait 5 minutes (cache refresh)
✅ Check file was uploaded correctly
✅ Verify file name matches exactly
```

### Issue: Website Broken After Edit

**Solutions:**
```
✅ Re-upload original file from local backup
✅ Check browser console (F12) for errors
✅ Verify file uploaded completely
✅ Check file structure didn't change
✅ Contact Hostinger support if needed
```

### Issue: Image Not Displaying

**Solutions:**
```
✅ Check file name matches exactly (case-sensitive)
✅ Verify image uploaded to images/ folder
✅ Check file path in HTML: images/your-image.jpg
✅ Compress image if too large
✅ Try different browser
```

---

## 📞 QUICK REFERENCE

### Need to Change:

| What | File | Method |
|------|------|--------|
| Text content | `index.html` | Edit locally + re-upload |
| Colors/styles | `css/style.css` | Edit locally + re-upload css/ |
| Images | `images/` folder | Replace image, same filename |
| Phone/email | `index.html` | Edit locally + re-upload |
| Menu items | `index.html` | Edit locally + re-upload |
| Footer text | `index.html` | Edit locally + re-upload |

---

## 🎯 RECOMMENDED EDITING WORKFLOW

### For Beginners:
**Use Method 1** (Edit Locally + Re-upload via Hostinger File Manager)
- Safest
- Most control
- Easy to understand

### For Regular Updates:
**Use Method 3** (FTP with FileZilla)
- Fast
- Efficient
- Great for frequent changes

### For Emergency Quick Fixes:
**Use Method 2** (Direct Edit via Hostinger File Manager)
- Quick
- No software needed
- Use sparingly

---

## 📚 ADDITIONAL RESOURCES

- **Hostinger File Manager Guide:** https://support.hostinger.com/en/articles/1583258-how-to-use-file-manager
- **FileZilla Tutorial:** https://filezilla-project.org/client_features.php
- **HTML Tutorial:** https://www.w3schools.com/html/
- **CSS Tutorial:** https://www.w3schools.com/css/

---

## ✅ QUICK CHECKLIST: MAKING EDITS

Before making any edit:
- [ ] Know which file to edit
- [ ] Have backup of original file
- [ ] Edit locally first
- [ ] Test changes in browser
- [ ] Upload to Hostinger
- [ ] Hard refresh live site
- [ ] Verify changes visible
- [ ] Test on mobile

---

**🎉 You're now ready to edit your website anytime!**

**Recommended:** Start with **Method 1** (Edit Locally + Re-upload) until you're comfortable.

**Questions?** Refer to this guide or contact Hostinger Support.

---

**Last Updated:** November 3, 2025  
**Version:** 1.0  
**Status:** ✅ Complete
