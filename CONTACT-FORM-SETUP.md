# Contact Form Setup for Hostinger

## ✅ Files Created
1. **contact-handler.php** - Handles form submissions and sends emails
2. **Updated js/main.js** - Connects form to PHP handler

## 📋 Setup Instructions

### Step 1: Upload Files to Hostinger
Upload these files to your `public_html` folder:
- `contact-handler.php` (new file)
- `js/main.js` (updated)
- `index.html` (existing)

### Step 2: Configure Email in Hostinger

#### Option A: Use Existing Email (RECOMMENDED)
If you already have info@borafoundation.com set up in Hostinger:
1. No changes needed! The form will work automatically.

#### Option B: Create Email Account
If you don't have the email yet:
1. Go to Hostinger Control Panel
2. Click **Email Accounts**
3. Click **Create Email Account**
4. Create: `info@borafoundation.com`
5. Set a strong password
6. Click **Create**

### Step 3: Test the Contact Form

1. Visit your website: `https://yourdomain.com`
2. Scroll to the Contact section
3. Fill in the form:
   - Full Name: Test User
   - Email: your-email@example.com
   - Subject: Test Message
   - Message: This is a test
4. Click **Send Message**
5. Check `info@borafoundation.com` inbox for the email

### Step 4: Configure "From" Email (Optional)

In `contact-handler.php`, line 13:
```php
$from_email = "noreply@borafoundation.com";
```

Change this to:
- `noreply@borafoundation.com` (create this email in Hostinger)
- OR `info@borafoundation.com` (use same email)

**Note:** Some hosting providers require the "From" email to exist on the server.

## 🔧 Troubleshooting

### Issue: Emails Not Arriving

**Solution 1: Check Spam Folder**
- Emails might go to spam initially
- Mark as "Not Spam" to train the filter

**Solution 2: Verify PHP mail() is Enabled**
1. Create a file `test-mail.php`:
```php
<?php
$result = mail('info@borafoundation.com', 'Test Email', 'This is a test');
echo $result ? 'Mail sent!' : 'Mail failed!';
?>
```
2. Upload to public_html
3. Visit: `https://yourdomain.com/test-mail.php`
4. If it says "Mail failed", contact Hostinger support

**Solution 3: Contact Hostinger Support**
- Ask them to enable PHP mail() function
- Ask if there are any email sending restrictions

### Issue: Form Shows Error Message

**Check:**
1. PHP file uploaded correctly
2. File permissions are correct (644 or 755)
3. Check browser console (F12) for errors

### Issue: Button Shows "Sending..." Forever

**Solution:**
- Check that `contact-handler.php` is in the same folder as `index.html`
- Open browser console (F12) to see error details

## 📧 Email Format

When someone submits the form, you'll receive an email like this:

```
Subject: New Contact Form Submission - BORA Foundation: [Their Subject]

From: [Their Name]
Email: [Their Email]
Subject: [Their Subject]

Message:
[Their Message]

---
This email was sent from the BORA Foundation website contact form.
Sender IP: xxx.xxx.xxx.xxx
Time: 2025-11-03 12:30:45
```

## 🔒 Security Features

The PHP handler includes:
- ✅ Input sanitization (removes HTML tags)
- ✅ Email validation
- ✅ Required field validation
- ✅ XSS protection
- ✅ IP address logging
- ✅ Timestamp logging

## 📱 What Happens When Form is Submitted

1. User fills out form
2. Clicks "Send Message"
3. Button changes to "Sending..." with spinner
4. JavaScript sends data to `contact-handler.php`
5. PHP validates and sends email
6. User sees success/error message
7. Form resets (if successful)
8. Button returns to normal

## 🎯 Next Steps

1. Upload all files to Hostinger
2. Test the form
3. Check your info@borafoundation.com inbox
4. Delete `test-mail.php` after testing (if created)

## 💡 Alternative: Use Formspree (Backup Option)

If PHP mail doesn't work, you can use Formspree:

1. Sign up at https://formspree.io (free)
2. Create a form
3. Get form ID (e.g., `f/xxxxx`)
4. In `index.html`, find the form tag:
```html
<form class="contact-form">
```
5. Change it to:
```html
<form class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```
6. Remove the JavaScript form handler or comment it out

---

**✅ Your contact form is now ready to send emails to info@borafoundation.com!**
