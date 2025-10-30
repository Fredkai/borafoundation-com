/**
 * BORA FOUNDATION - Main JavaScript
 * Modern, interactive functionality for the website
 */

(function() {
    'use strict';

    // ========================================
    // Initialize AOS (Animate On Scroll)
    // ========================================
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            mirror: false,
            offset: 100
        });
    }

    // ========================================
    // Mobile Navigation Toggle
    // ========================================
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });
    }

    // Close mobile menu when clicking nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // ========================================
    // Sticky Header on Scroll
    // ========================================
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // ========================================
    // Active Navigation Link on Scroll
    // ========================================
    const sections = document.querySelectorAll('section[id]');
    
    function scrollActive() {
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink?.classList.add('active');
            } else {
                navLink?.classList.remove('active');
            }
        });
    }

    window.addEventListener('scroll', scrollActive);

    // ========================================
    // Smooth Scroll for Anchor Links
    // ========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just #
            if (href === '#') {
                e.preventDefault();
                return;
            }

            const targetElement = document.querySelector(href);
            
            if (targetElement) {
                e.preventDefault();
                const offsetTop = targetElement.offsetTop - 70; // Account for fixed header

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ========================================
    // Scroll to Top Button
    // ========================================
    const scrollTopBtn = document.getElementById('scroll-top');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollTopBtn?.classList.add('active');
        } else {
            scrollTopBtn?.classList.remove('active');
        }
    });

    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ========================================
    // Counter Animation for Impact Numbers
    // ========================================
    const impactNumbers = document.querySelectorAll('.impact-number');
    let countStarted = false;

    function animateCounter(element, target, duration = 2000) {
        const start = 0;
        const increment = target / (duration / 16); // 60fps
        let current = start;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target.toLocaleString();
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current).toLocaleString();
            }
        }, 16);
    }

    function checkImpactSection() {
        const impactSection = document.getElementById('impact');
        if (!impactSection || countStarted) return;

        const rect = impactSection.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

        if (isVisible && !countStarted) {
            countStarted = true;
            impactNumbers.forEach(number => {
                const target = parseInt(number.getAttribute('data-target'));
                animateCounter(number, target);
            });
        }
    }

    window.addEventListener('scroll', checkImpactSection);
    checkImpactSection(); // Check on page load

    // ========================================
    // Form Submission Handler
    // ========================================
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);

            // Here you would typically send the data to your server
            console.log('Form submitted with data:', data);

            // Show success message (you can customize this)
            alert('Thank you for your message! We will get back to you soon.');
            
            // Reset form
            contactForm.reset();
        });
    }

    // ========================================
    // Newsletter Form Handler
    // ========================================
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = this.querySelector('input[type="email"]').value;
            
            // Here you would typically send the email to your server
            console.log('Newsletter subscription:', email);

            // Show success message
            alert('Thank you for subscribing to our newsletter!');
            
            // Reset form
            this.reset();
        });
    }

    // ========================================
    // Gallery Image Click Handler (Optional)
    // ========================================
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            // You can implement a lightbox here
            console.log('Gallery item clicked');
            // Example: open image in modal or lightbox
        });
    });

    // ========================================
    // Lazy Loading for Images
    // ========================================
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    observer.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }

    // ========================================
    // Parallax Effect for Hero Section (Optional)
    // ========================================
    const hero = document.querySelector('.hero');
    
    if (hero) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const parallax = scrolled * 0.5;
            hero.style.transform = `translateY(${parallax}px)`;
        });
    }

    // ========================================
    // Dynamic Year in Footer
    // ========================================
    const currentYear = new Date().getFullYear();
    const yearElement = document.querySelector('.footer-bottom p');
    
    if (yearElement && yearElement.textContent.includes('2025')) {
        yearElement.textContent = yearElement.textContent.replace('2025', currentYear);
    }

    // ========================================
    // Prevent Form Submission on Enter (except textarea)
    // ========================================
    document.querySelectorAll('input:not([type="submit"])').forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
            }
        });
    });

    // ========================================
    // Add Loading Animation Class
    // ========================================
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
        
        // Fade in elements sequentially
        const fadeElements = document.querySelectorAll('.fade-in');
        fadeElements.forEach((element, index) => {
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * 100);
        });
    });

    // ========================================
    // Accessibility: Skip to main content
    // ========================================
    const skipLink = document.querySelector('.skip-link');
    
    if (skipLink) {
        skipLink.addEventListener('click', function(e) {
            e.preventDefault();
            const mainContent = document.getElementById('main-content');
            if (mainContent) {
                mainContent.setAttribute('tabindex', '-1');
                mainContent.focus();
            }
        });
    }

    // ========================================
    // Handle Window Resize
    // ========================================
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            // Close mobile menu on resize to desktop
            if (window.innerWidth > 768) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                document.body.style.overflow = '';
            }
        }, 250);
    });

    // ========================================
    // Console Welcome Message
    // ========================================
    console.log('%c BORA FOUNDATION ', 'background: #2e61d2; color: #ffffff; font-size: 20px; padding: 10px;');
    console.log('%c Empowering Communities, Transforming Lives ', 'color: #384259; font-size: 14px;');

    // ========================================
    // Debug Mode (can be removed in production)
    // ========================================
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        console.log('Debug mode active');
        
        // Log section positions for debugging
        document.addEventListener('keypress', function(e) {
            if (e.key === 'd' && e.ctrlKey) {
                console.table(
                    Array.from(sections).map(section => ({
                        id: section.id,
                        top: section.offsetTop,
                        height: section.offsetHeight
                    }))
                );
            }
        });
    }

})();

// ========================================
// Additional Utility Functions
// ========================================

/**
 * Debounce function to limit function calls
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Throttle function to limit function execution
 */
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

/**
 * Check if element is in viewport
 */
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
