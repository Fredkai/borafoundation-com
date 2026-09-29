/**
 * BORA FOUNDATION — main.js
 * Clean NGO website · Redesigned 2026
 */

(function () {
  'use strict';

  /* ================================================================
     AOS INIT
  ================================================================ */
  if (typeof AOS !== 'undefined') {
    AOS.init({ duration: 800, easing: 'ease-out-quad', once: true, offset: 80 });
  }

  /* ================================================================
     HEADER SCROLL
  ================================================================ */
  const header = document.getElementById('header');
  function onScroll() {
    if (window.scrollY > 80) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ================================================================
     MOBILE NAV TOGGLE
  ================================================================ */
  const navToggle = document.getElementById('nav-toggle');
  const navMenu   = document.getElementById('nav-menu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      const isOpen = navMenu.classList.toggle('active');
      navToggle.classList.toggle('active', isOpen);
      navToggle.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close on nav-link click
    navMenu.querySelectorAll('.nav-link').forEach(function (link) {
      link.addEventListener('click', function () {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  // Close nav on resize to desktop
  window.addEventListener('resize', debounce(function () {
    if (window.innerWidth > 768 && navMenu) {
      navMenu.classList.remove('active');
      navToggle && navToggle.classList.remove('active');
      document.body.style.overflow = '';
    }
  }, 200));

  /* ================================================================
     ACTIVE NAV LINK ON SCROLL
  ================================================================ */
  const sections = document.querySelectorAll('section[id]');

  function updateActiveLink() {
    const scrollY = window.pageYOffset;
    sections.forEach(function (section) {
      const top    = section.offsetTop - 110;
      const bottom = top + section.offsetHeight;
      const id     = section.getAttribute('id');
      const link   = document.querySelector('.nav-link[href="#' + id + '"]');
      if (link) {
        if (scrollY >= top && scrollY < bottom) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      }
    });
  }

  window.addEventListener('scroll', updateActiveLink, { passive: true });

  /* ================================================================
     SMOOTH SCROLL FOR ANCHOR LINKS
  ================================================================ */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') { e.preventDefault(); return; }
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const top = target.offsetTop - 70;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

  /* ================================================================
     SCROLL TO TOP BUTTON
  ================================================================ */
  const scrollTopBtn = document.getElementById('scroll-top');

  window.addEventListener('scroll', function () {
    if (scrollTopBtn) {
      scrollTopBtn.classList.toggle('active', window.scrollY > 350);
    }
  }, { passive: true });

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ================================================================
     GALLERY LIGHTBOX
  ================================================================ */
  const galleryItems   = document.querySelectorAll('.gallery-item');
  const lightbox       = document.getElementById('lightbox');
  const lightboxImg    = document.getElementById('lightbox-img');
  const lightboxCap    = document.getElementById('lightbox-caption');
  const lightboxClose  = document.getElementById('lightbox-close');
  const lightboxPrev   = document.getElementById('lightbox-prev');
  const lightboxNext   = document.getElementById('lightbox-next');

  let currentIndex = 0;

  function openLightbox(index) {
    const item    = galleryItems[index];
    const imgSrc  = item.getAttribute('data-img') || item.querySelector('img').src;
    const caption = item.getAttribute('data-caption') || '';
    currentIndex  = index;
    lightboxImg.src = imgSrc;
    lightboxImg.alt = caption;
    lightboxCap.textContent = caption;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
    setTimeout(function () { lightboxImg.src = ''; }, 300);
  }

  galleryItems.forEach(function (item, i) {
    item.addEventListener('click', function () { openLightbox(i); });
    item.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLightbox(i); }
    });
    item.setAttribute('tabindex', '0');
    item.setAttribute('role', 'button');
    item.setAttribute('aria-label', 'View: ' + (item.getAttribute('data-caption') || 'image'));
  });

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightbox) lightbox.addEventListener('click', function (e) { if (e.target === lightbox) closeLightbox(); });

  if (lightboxPrev) {
    lightboxPrev.addEventListener('click', function (e) {
      e.stopPropagation();
      currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
      openLightbox(currentIndex);
    });
  }

  if (lightboxNext) {
    lightboxNext.addEventListener('click', function (e) {
      e.stopPropagation();
      currentIndex = (currentIndex + 1) % galleryItems.length;
      openLightbox(currentIndex);
    });
  }

  document.addEventListener('keydown', function (e) {
    if (!lightbox || !lightbox.classList.contains('active')) return;
    if (e.key === 'Escape')      closeLightbox();
    if (e.key === 'ArrowLeft')   lightboxPrev && lightboxPrev.click();
    if (e.key === 'ArrowRight')  lightboxNext && lightboxNext.click();
  });

  /* ================================================================
     DONATE — AMOUNT PILL SELECTION
  ================================================================ */
  window.selectAmount = function (btn, amount) {
    document.querySelectorAll('.amount-pill').forEach(function (p) { p.classList.remove('selected'); });
    btn.classList.add('selected');
    const customInput = document.getElementById('custom-amount');
    if (customInput) { customInput.value = ''; }
    // Update PayPal link dynamically if possible
    const paypalBtn = document.getElementById('paypal-donate-btn');
    if (paypalBtn) {
      paypalBtn.href = 'https://www.paypal.me/DinahBora/' + amount;
    }
  };

  // Custom amount input clears pill selection
  const customAmountInput = document.getElementById('custom-amount');
  if (customAmountInput) {
    customAmountInput.addEventListener('input', function () {
      document.querySelectorAll('.amount-pill').forEach(function (p) { p.classList.remove('selected'); });
      const paypalBtn = document.getElementById('paypal-donate-btn');
      if (paypalBtn && this.value) {
        paypalBtn.href = 'https://www.paypal.me/DinahBora/' + this.value;
      }
    });
  }

  /* ================================================================
     CONTACT FORM
  ================================================================ */
  const contactForm = document.getElementById('contact-form');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const submitBtn = document.getElementById('contact-submit-btn');
      const originalHTML = submitBtn.innerHTML;
      const name    = document.getElementById('contact-name').value.trim();
      const email   = document.getElementById('contact-email').value.trim();
      const subject = document.getElementById('contact-subject').value.trim();
      const message = document.getElementById('contact-message').value.trim();

      // Basic validation
      if (!name || !email || !subject || !message) {
        showToast('Please fill in all required fields.', 'error');
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showToast('Please enter a valid email address.', 'error');
        return;
      }

      // Show loading
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span>Sending...</span><i class="fas fa-spinner fa-spin"></i>';

      const formData = new FormData(contactForm);

      fetch('contact-handler.php', { method: 'POST', body: formData })
        .then(function (res) { return res.json(); })
        .then(function (data) {
          if (data.success) {
            showToast(data.message || 'Message sent! We\'ll be in touch soon.', 'success');
            contactForm.reset();
          } else {
            showToast(data.message || 'Something went wrong. Please try again.', 'error');
          }
        })
        .catch(function () {
          showToast('Could not send message. Please email us directly at info@borafoundation.com', 'error');
        })
        .finally(function () {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalHTML;
        });
    });
  }

  /* ================================================================
     TOAST NOTIFICATION
  ================================================================ */
  function showToast(message, type) {
    const toast    = document.getElementById('toast');
    const toastMsg = document.getElementById('toast-message');
    const toastIcon= document.getElementById('toast-icon');
    if (!toast) return;
    toastMsg.textContent = message;
    toast.className = 'toast' + (type === 'error' ? ' error' : '');
    toastIcon.className = type === 'error' ? 'fas fa-exclamation-circle' : 'fas fa-check-circle';
    toast.classList.add('show');
    setTimeout(function () { toast.classList.remove('show'); }, 5000);
  }

  /* ================================================================
     DYNAMIC YEAR IN FOOTER
  ================================================================ */
  const yearEl = document.getElementById('footer-year');
  if (yearEl) { yearEl.textContent = new Date().getFullYear(); }

  /* ================================================================
     PREVENT ENTER KEY SUBMIT ON TEXT INPUTS (except textarea)
  ================================================================ */
  document.querySelectorAll('input:not([type="submit"])').forEach(function (input) {
    input.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') { e.preventDefault(); }
    });
  });

  /* ================================================================
     PAGE LOAD FADE IN
  ================================================================ */
  window.addEventListener('load', function () {
    document.body.classList.add('loaded');
  });

  /* ================================================================
     ACCESSIBILITY: SKIP LINK
  ================================================================ */
  const skipLink = document.querySelector('.skip-link');
  if (skipLink) {
    skipLink.addEventListener('click', function (e) {
      e.preventDefault();
      const main = document.getElementById('main-content');
      if (main) { main.setAttribute('tabindex', '-1'); main.focus(); }
    });
  }

  /* ================================================================
     UTILITY: DEBOUNCE
  ================================================================ */
  function debounce(fn, wait) {
    let t;
    return function () {
      clearTimeout(t);
      t = setTimeout(fn.bind(this, arguments), wait);
    };
  }

  /* ================================================================
     CONSOLE BRAND
  ================================================================ */
  console.log('%c BORA FOUNDATION ', 'background:#1d7050;color:#fff;font-size:18px;padding:8px 16px;border-radius:4px;');
  console.log('%c Helping Hands, Transforming Lives ', 'color:#2e8b62;font-size:13px;');

})();
