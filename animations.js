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

document.addEventListener('DOMContentLoaded', () => {
    const productCards = document.querySelectorAll('.product-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    
    productCards.forEach(card => {
        card.classList.add('scroll-reveal');
        observer.observe(card);
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
});
