// Main initialization
import { initAnimations } from './animations.js';
import { products } from './products.js';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// Styles
import './styles.css';
import './base.css';
import './animations.css';
import './variants.css';


gsap.registerPlugin(ScrollTrigger);

export class ProductRenderer {
    constructor() {
        this.productGrid = document.querySelector('.product-grid');
    }

    init() {
        this.renderProducts();
        this.initializeScrollTriggers();
        this.initializeTracking();
    }

    renderProducts() {
        const template = document.createElement('template');
       
        const productsHTML = products.map(product => `
            <article class="product-card" data-product-id="${product.id}">
                <div class="product-image-wrapper">
                    <img
                        src="${product.image}"
                        alt="${product.title}"
                        class="product-image"
                        loading="lazy"
                    >
                    <span class="price-tag">${product.price.toFixed(2)} €</span>
                    <button class="heart-button" aria-label="Als Favorit markieren">
                        <svg class="heart-icon" viewBox="0 0 24 24">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                        </svg>
                    </button>
                </div>
                <div class="product-info">
                    <h3 class="product-title">${product.title}</h3>
                    <p class="product-description">${product.description}</p>
                    <a
                        href="${product.link}"
                        class="cta-button"
                        target="_blank"
                        rel="noopener"
                        data-product-id="${product.id}"
                    >
                        <span>Jetzt shoppen</span>
                        ${this.generateHeartBurst()}
                    </a>
                </div>
            </article>
        `).join('');

        template.innerHTML = productsHTML;
        this.productGrid.appendChild(template.content);
    }

    generateHeartBurst() {
        return Array.from({length: 16}, (_, i) => `
            <span class="burst-heart" style="--i: ${i}">
                <svg viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
            </span>
        `).join('');
    }

    initializeScrollTriggers() {
        const buttons = document.querySelectorAll('.cta-button');
        buttons.forEach(button => {
            ScrollTrigger.create({
                trigger: button,
                start: 'top bottom-=100',
                end: 'bottom top+=100',
                once: true,
                onEnter: () => this.handleButtonAnimation(button)
            });
        });
    }

    handleButtonAnimation(button) {
        if (!button.dataset.animating) {
            button.dataset.animating = true;
            const productCard = button.closest('.product-card');
            productCard.classList.add('exploded');
            setTimeout(() => {
                delete button.dataset.animating;
            }, 800);
        }
    }

    initializeTracking() {
        document.querySelectorAll('.cta-button').forEach(button => {
            button.addEventListener('click', this.handleProductClick);
        });
    }

    handleProductClick(e) {
        const productCard = this.closest('.product-card');
        const productTitle = productCard.querySelector('.product-title').textContent;
        const price = parseFloat(productCard.querySelector('.price-tag').textContent);
       
        gtag('event', 'product_click', {
            event_category: 'ecommerce',
            event_label: productTitle,
            value: price
        });
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const renderer = new ProductRenderer();
    renderer.init();
    initAnimations();
});
