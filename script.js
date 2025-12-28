/* ═══════════════════════════════════════════════════════════════════════════
   PERSONAL WEBSITE SCRIPTS
   - Terminal typing effect
   - Scroll-triggered fade-in animations
   ═══════════════════════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
    initTypingEffect();
    initScrollAnimations();
});

/* ─────────────────────────────────────────────────────────────────────────────
   TYPING EFFECT
   Edit the 'phrases' array below to change what gets typed
   ───────────────────────────────────────────────────────────────────────────── */
function initTypingEffect() {
    const element = document.getElementById('typing-text');
    if (!element) return;

    // ═══════════════════════════════════════════════════════════════════════
    // CUSTOMIZE YOUR TAGLINES HERE
    // ═══════════════════════════════════════════════════════════════════════
    const phrases = [
        'quantitative trader @ optiver',
        'unsw graduate',
        'machine learning datathon winner',
        'building things...'
    ];

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let isPaused = false;

    const typeSpeed = 50;      // Speed when typing (ms per character)
    const deleteSpeed = 50;    // Speed when deleting (ms per character)
    const pauseDuration = 2000; // How long to pause after typing a phrase

    function type() {
        const currentPhrase = phrases[phraseIndex];

        if (isPaused) {
            isPaused = false;
            isDeleting = true;
            setTimeout(type, pauseDuration);
            return;
        }

        if (isDeleting) {
            element.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;

            if (charIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                setTimeout(type, 500);
                return;
            }
        } else {
            element.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;

            if (charIndex === currentPhrase.length) {
                isPaused = true;
                setTimeout(type, pauseDuration);
                return;
            }
        }

        setTimeout(type, isDeleting ? deleteSpeed : typeSpeed);
    }

    // Start typing after a short delay
    setTimeout(type, 1000);
}

/* ─────────────────────────────────────────────────────────────────────────────
   SCROLL ANIMATIONS
   Adds 'visible' class to elements with 'fade-in' class when they enter viewport
   ───────────────────────────────────────────────────────────────────────────── */
function initScrollAnimations() {
    // Add fade-in class to sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.add('fade-in');
    });

    // Create intersection observer
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}
