// Intersection Observer für Scroll-Animationen
const observerOptions = {
    threshold: 0.2,
    rootMargin: '50px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Performance-optimierte Lazy Loading Animation
const lazyLoadImages = () => {
    const images = document.querySelectorAll('.product-image');
    
    images.forEach(img => {
        img.style.opacity = '0';
        img.addEventListener('load', () => {
            img.style.transition = 'opacity 0.4s ease-in';
            img.style.opacity = '1';
        });
    });
};

document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.product-card, .section-header, .hero-content');
    
    animateElements.forEach(element => {
        element.classList.add('scroll-reveal');
        observer.observe(element);
    });

    const headerAnimation = document.querySelector('#headerAnimation');
    let hasReachedTarget = false;
    
    headerAnimation.addEventListener('ready', () => {
        headerAnimation.play();
        
        headerAnimation.addEventListener('frame', (e) => {
            if (e.detail.frame > 110 && !hasReachedTarget) {
                hasReachedTarget = true;
                requestAnimationFrame(() => {
                    headerAnimation.pause();
                });
            }
        });
    });

    // Initialize lazy loading
    // lazyLoadImages();
});