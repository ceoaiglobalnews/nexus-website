/**
 * Nexus Health Operations - Main JavaScript
 * Handles scroll animations, FAQ accordion, cookie consent, and form validation
 */

(function() {
    'use strict';

    // ============================================
    // Constants
    // ============================================
    const SCROLL_TRIGGER_OFFSET = 800;
    const VISIBILITY_OFFSET = 100;
    const COOKIE_BANNER_DELAY = 3000; // Show after 3 seconds instead of 1
    const DEBOUNCE_DELAY = 100;
    const TRANSITION_DELAY = 400;
    const COOKIE_BANNER_SHOW_DELAY = 10;

    // ============================================
    // Utility Functions
    // ============================================

    /**
     * Debounce function to limit how often a function can fire
     * @param {Function} func - The function to debounce
     * @param {number} wait - The delay in milliseconds
     * @returns {Function} - Debounced function
     */
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func.apply(this, args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    /**
     * Check if element is visible in viewport
     * @param {Element} element - DOM element to check
     * @returns {boolean} - Whether element is visible
     */
    function isElementVisible(element) {
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top;
        const elementBottom = rect.bottom;
        return (elementTop < window.innerHeight - VISIBILITY_OFFSET) && (elementBottom > 0);
    }

    // ============================================
    // Scroll Animations
    // ============================================

    /**
     * Check and animate elements on scroll
     */
    function checkScrollAnimations() {
        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach(element => {
            if (isElementVisible(element) && !element.classList.contains('animated')) {
                element.classList.add('animated');
            }
        });
    }

    /**
     * Handle floating CTA button visibility based on scroll position
     */
    function handleFloatingCta() {
        const floatingCta = document.getElementById('floatingCta');
        if (!floatingCta) return;

        const scrollPosition = window.scrollY;

        if (scrollPosition > SCROLL_TRIGGER_OFFSET) {
            floatingCta.classList.add('visible');
            floatingCta.setAttribute('aria-hidden', 'false');
        } else {
            floatingCta.classList.remove('visible');
            floatingCta.setAttribute('aria-hidden', 'true');
        }
    }

    /**
     * Debounced scroll handler
     */
    const handleScroll = debounce(() => {
        checkScrollAnimations();
        handleFloatingCta();
    }, DEBOUNCE_DELAY);

    // ============================================
    // FAQ Accordion
    // ============================================

    /**
     * Initialize FAQ accordion functionality
     */
    function initFaqAccordion() {
        const faqItems = document.querySelectorAll('.faq-item');

        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            const answer = item.querySelector('.faq-answer');

            if (!question || !answer) return;

            // Set initial ARIA attributes
            const answerId = `faq-answer-${Math.random().toString(36).substr(2, 9)}`;
            answer.id = answerId;
            question.setAttribute('aria-expanded', 'false');
            question.setAttribute('aria-controls', answerId);
            question.setAttribute('role', 'button');
            question.setAttribute('tabindex', '0');

            question.addEventListener('click', () => {
                toggleFaqItem(item, question);
            });

            // Keyboard accessibility
            question.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleFaqItem(item, question);
                }
            });
        });
    }

    /**
     * Toggle FAQ item open/closed
     * @param {Element} item - FAQ item element
     * @param {Element} question - Question element
     */
    function toggleFaqItem(item, question) {
        const isActive = item.classList.contains('active');

        // Close all FAQ items
        document.querySelectorAll('.faq-item').forEach(faq => {
            faq.classList.remove('active');
            const q = faq.querySelector('.faq-question');
            if (q) q.setAttribute('aria-expanded', 'false');
        });

        // Toggle current item
        if (!isActive) {
            item.classList.add('active');
            question.setAttribute('aria-expanded', 'true');
        }
    }

    // ============================================
    // Smooth Scroll Navigation
    // ============================================

    /**
     * Initialize smooth scroll for anchor links
     */
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const href = this.getAttribute('href');

                // Ignore empty hash or hash-only links
                if (href === '#' || href.length === 1) {
                    e.preventDefault();
                    return;
                }

                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });

                    // Update focus for accessibility
                    target.focus({ preventScroll: true });
                }
            });
        });
    }

    // ============================================
    // Cookie Consent Banner
    // ============================================

    /**
     * Show cookie consent banner if not already responded
     */
    function initCookieBanner() {
        const cookieConsent = localStorage.getItem('cookieConsent');

        if (!cookieConsent) {
            setTimeout(() => {
                const banner = document.getElementById('cookieBanner');
                if (!banner) return;

                banner.style.display = 'block';
                banner.setAttribute('role', 'dialog');
                banner.setAttribute('aria-label', 'Cookie consent');
                banner.setAttribute('aria-live', 'polite');

                // Small delay to trigger transition
                setTimeout(() => {
                    banner.classList.add('show');
                }, COOKIE_BANNER_SHOW_DELAY);
            }, COOKIE_BANNER_DELAY);
        }
    }

    /**
     * Accept cookies
     */
    window.acceptCookies = function() {
        localStorage.setItem('cookieConsent', 'accepted');
        hideCookieBanner();
    };

    /**
     * Decline cookies
     */
    window.declineCookies = function() {
        localStorage.setItem('cookieConsent', 'declined');
        hideCookieBanner();
    };

    /**
     * Hide cookie banner with animation
     */
    function hideCookieBanner() {
        const banner = document.getElementById('cookieBanner');
        if (!banner) return;

        banner.classList.remove('show');
        banner.classList.add('hide');

        // Remove from DOM after transition completes
        setTimeout(() => {
            banner.style.display = 'none';
        }, TRANSITION_DELAY);
    }

    // ============================================
    // Form Validation and Submission
    // ============================================

    /**
     * Validate email format
     * @param {string} email - Email to validate
     * @returns {boolean} - Whether email is valid
     */
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    /**
     * Show error message for form field
     * @param {Element} field - Input field element
     * @param {string} message - Error message to display
     */
    function showFieldError(field, message) {
        field.classList.add('error');

        let errorDiv = field.parentElement.querySelector('.form-error');
        if (!errorDiv) {
            errorDiv = document.createElement('div');
            errorDiv.className = 'form-error';
            field.parentElement.appendChild(errorDiv);
        }

        errorDiv.textContent = message;
        errorDiv.classList.add('show');
        field.setAttribute('aria-invalid', 'true');
    }

    /**
     * Clear error message for form field
     * @param {Element} field - Input field element
     */
    function clearFieldError(field) {
        field.classList.remove('error');
        field.removeAttribute('aria-invalid');

        const errorDiv = field.parentElement.querySelector('.form-error');
        if (errorDiv) {
            errorDiv.classList.remove('show');
        }
    }

    /**
     * Validate form field
     * @param {Element} field - Input field to validate
     * @returns {boolean} - Whether field is valid
     */
    function validateField(field) {
        const value = field.value.trim();
        const fieldName = field.name || field.id;

        clearFieldError(field);

        if (field.hasAttribute('required') && !value) {
            showFieldError(field, 'This field is required');
            return false;
        }

        if (field.type === 'email' && value && !isValidEmail(value)) {
            showFieldError(field, 'Please enter a valid email address');
            return false;
        }

        if (field.tagName === 'SELECT' && value === '') {
            showFieldError(field, 'Please select an option');
            return false;
        }

        return true;
    }

    /**
     * Initialize contact form validation and submission
     */
    function initContactForm() {
        const contactForm = document.getElementById('contactForm');
        if (!contactForm) return;

        // Real-time validation on blur
        const formFields = contactForm.querySelectorAll('input, textarea, select');
        formFields.forEach(field => {
            field.addEventListener('blur', () => {
                validateField(field);
            });

            // Clear error on input
            field.addEventListener('input', () => {
                if (field.classList.contains('error')) {
                    clearFieldError(field);
                }
            });
        });

        // Form submission handler
        contactForm.addEventListener('submit', function(e) {
            let isValid = true;

            // Validate all required fields
            formFields.forEach(field => {
                if (!validateField(field)) {
                    isValid = false;
                }
            });

            if (!isValid) {
                e.preventDefault();

                // Focus first error field
                const firstError = contactForm.querySelector('.error');
                if (firstError) {
                    firstError.focus();
                }

                return false;
            }

            // Show loading state
            const submitBtn = contactForm.querySelector('.submit-btn');
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.textContent = 'Sending...';
            }

            // Form will submit normally to Formspree
            // On successful submission, Formspree will handle the redirect
            // For custom success handling, you would need to use AJAX
        });
    }

    // ============================================
    // Initialization
    // ============================================

    /**
     * Initialize all functionality when DOM is ready
     */
    function init() {
        // Check initial scroll position
        checkScrollAnimations();
        handleFloatingCta();

        // Attach scroll event listener with debouncing
        window.addEventListener('scroll', handleScroll);

        // Initialize components
        initFaqAccordion();
        initSmoothScroll();
        initCookieBanner();
        initContactForm();
    }

    // Run initialization when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        // DOM already loaded
        init();
    }

})();
