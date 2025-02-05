const products = [
    {
        id: 1,
        title: "Steiff Teddybär Honey",
        description: "Klassischer Kuschelbär in Honigbraun, 38cm",
        price: 39.99,
        image: "https://m.media-amazon.com/images/I/71uzJ9f0tcL._AC_UF894,1000_QL80_.jpg",
        link: "https://www.amazon.de/dp/B000EQHC44"
    },
    {
        id: 2,
        title: "Einhorn Luna XL",
        description: "Regenbogen Plüsch-Einhorn mit Glitzeraugen, 65cm",
        price: 29.99,
        image: "https://m.media-amazon.com/images/I/71uzJ9f0tcL._AC_UF894,1000_QL80_.jpg",
        link: "https://www.amazon.de/dp/B08MVDW5D5"
    },
    {
        id: 3,
        title: "Kawaii Panda Baby",
        description: "Flauschiger Panda im Anime-Style, 25cm",
        price: 19.99,
        image: "https://m.media-amazon.com/images/I/71uzJ9f0tcL._AC_UF894,1000_QL80_.jpg",
        link: "https://www.amazon.de/dp/B09B9ZY8K8"
    },
    {
        id: 4,
        title: "Nici Koala Dreams",
        description: "Süßer Koala mit Schlafmütze, 32cm",
        price: 24.99,
        image: "https://m.media-amazon.com/images/I/71uzJ9f0tcL._AC_UF894,1000_QL80_.jpg",
        link: "https://www.amazon.de/dp/B07Q3BVQX9"
    },
    {
        id: 5,
        title: "Pusheen Katze",
        description: "Original Pusheen Plüschkatze, 30cm",
        price: 22.99,
        image: "https://m.media-amazon.com/images/I/71uzJ9f0tcL._AC_UF894,1000_QL80_.jpg",
        link: "https://www.amazon.de/dp/B00VGIW1V8"
    },
    {
        id: 6,
        title: "Jellycat Hase Bashful",
        description: "Luxuriöser Plüschhase in Beige, 31cm",
        price: 27.99,
        image: "https://m.media-amazon.com/images/I/71uzJ9f0tcL._AC_UF894,1000_QL80_.jpg",
        link: "https://www.amazon.de/dp/B00JCZ7L1M"
    },
    {
        id: 7,
        title: "Pokémon Pikachu",
        description: "Offizielles Pokémon Plüsch, 20cm",
        price: 19.99,
        image: "https://m.media-amazon.com/images/I/71uzJ9f0tcL._AC_UF894,1000_QL80_.jpg",
        link: "https://www.amazon.de/dp/B08MVDW5D5"
    },
    {
        id: 8,
        title: "Alpaka Kuscheltier XXL",
        description: "Flauschiges Alpaka in Regenbogenfarben, 50cm",
        price: 34.99,
        image: "https://m.media-amazon.com/images/I/71uzJ9f0tcL._AC_UF894,1000_QL80_.jpg",
        link: "https://www.amazon.de/dp/B07SQTWW7G"
    },
    {
        id: 9,
        title: "Baby Yoda Plüsch",
        description: "The Child aus The Mandalorian, 25cm",
        price: 29.99,
        image: "https://m.media-amazon.com/images/I/71uzJ9f0tcL._AC_UF894,1000_QL80_.jpg",
        link: "https://www.amazon.de/dp/B0825SNNRV"
    },
    {
        id: 10,
        title: "Squishmallow Axolotl",
        description: "Trendiges Axolotl in Rosa, 20cm",
        price: 18.99,
        image: "https://m.media-amazon.com/images/I/71uzJ9f0tcL._AC_UF894,1000_QL80_.jpg",
        link: "https://www.amazon.de/dp/B09QXTN5B4"
    },
    {
        id: 11,
        title: "Molang Bunny",
        description: "Süßes Molang Häschen aus Korea, 25cm",
        price: 21.99,
        image: "https://m.media-amazon.com/images/I/71uzJ9f0tcL._AC_UF894,1000_QL80_.jpg",
        link: "https://www.amazon.de/dp/B07N1JPPX8"
    },
    {
        id: 12,
        title: "Djungelskog Bär",
        description: "IKEA Braunbär Kuscheltier, 40cm",
        price: 24.99,
        image: "https://m.media-amazon.com/images/I/71uzJ9f0tcL._AC_UF894,1000_QL80_.jpg",
        link: "https://www.amazon.de/dp/B08Q3HBQPB"
    },
    {
        id: 13,
        title: "Rilakkuma Bär",
        description: "Original San-X Rilakkuma, 35cm",
        price: 32.99,
        image: "https://m.media-amazon.com/images/I/71uzJ9f0tcL._AC_UF894,1000_QL80_.jpg",
        link: "https://www.amazon.de/dp/B00VXKBS0M"
    },
    {
        id: 14,
        title: "Dino Squishmallow",
        description: "Weicher Dinosaurier in Mintgrün, 30cm",
        price: 23.99,
        image: "https://m.media-amazon.com/images/I/71uzJ9f0tcL._AC_UF894,1000_QL80_.jpg",
        link: "https://www.amazon.de/dp/B09KMXYZ2P"
    },
    {
        id: 15,
        title: "Totoro Plüsch",
        description: "Studio Ghibli Totoro Kuscheltier, 28cm",
        price: 25.99,
        image: "https://m.media-amazon.com/images/I/71uzJ9f0tcL._AC_UF894,1000_QL80_.jpg",
        link: "https://www.amazon.de/dp/B00VGIW1X6"
    },
    {
        id: 16,
        title: "Avocado Plüsch",
        description: "Trendiges Avocado Kissen, 40cm",
        price: 19.99,
        image: "https://m.media-amazon.com/images/I/71uzJ9f0tcL._AC_UF894,1000_QL80_.jpg",
        link: "https://www.amazon.de/dp/B07XFCLJ6Q"
    },
    {
        id: 17,
        title: "Blobfish Plüsch",
        description: "Viraler TikTok Blobfish, 20cm",
        price: 17.99,
        image: "https://m.media-amazon.com/images/I/71uzJ9f0tcL._AC_UF894,1000_QL80_.jpg",
        link: "https://www.amazon.de/dp/B08MVDW5D5"
    },
    {
        id: 18,
        title: "Shiba Inu Plüsch",
        description: "Japanischer Shiba Hund, 30cm",
        price: 26.99,
        image: "https://m.media-amazon.com/images/I/71uzJ9f0tcL._AC_UF894,1000_QL80_.jpg",
        link: "https://www.amazon.de/dp/B07Q3BVQX9"
    },
    {
        id: 19,
        title: "Capybara XL",
        description: "Trending Capybara Plüsch, 45cm",
        price: 29.99,
        image: "https://m.media-amazon.com/images/I/71uzJ9f0tcL._AC_UF894,1000_QL80_.jpg",
        link: "https://www.amazon.de/dp/B0BN6WXYZ1"
    },
    {
        id: 20,
        title: "Faultier Kuscheltier",
        description: "Süßes Faultier mit Baby, 35cm",
        price: 22.99,
        image: "https://m.media-amazon.com/images/I/71uzJ9f0tcL._AC_UF894,1000_QL80_.jpg",
        link: "https://www.amazon.de/dp/B07Q3BVQX9"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    function renderProducts() {
        const productGrid = document.querySelector('.product-grid');
        const fragment = document.createDocumentFragment();
        
        products.forEach(product => {
            const article = document.createElement('article');
            article.className = 'product-card';
            article.innerHTML = `
                <div class="product-image-wrapper">
                    <img src="${product.image}" alt="${product.title}" class="product-image">
                    <span class="price-tag">${product.price.toFixed(2)} €</span>
                    <button class="heart-button">
                        <svg class="heart-icon" viewBox="0 0 24 24">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                        </svg>
                    </button>
                </div>
                <div class="product-info">
                    <h3 class="product-title">${product.title}</h3>
                    <p class="product-description">${product.description}</p>
                    <a href="${product.link}" class="cta-button" target="_blank" rel="noopener"><span>Jetzt shoppen</span></a>
                </div>
            `;
            fragment.appendChild(article);
        });
        
        productGrid.appendChild(fragment);
    }

    function initHeartButtons() {
        const heartButtons = document.querySelectorAll('.heart-button');
        heartButtons.forEach(button => {
            button.addEventListener('click', () => {
                button.classList.toggle('active');
            });
        });
    }

    function initButtonAnimations() {
        const buttons = document.querySelectorAll('.cta-button');
        
        buttons.forEach(button => {
            ScrollTrigger.create({
                trigger: button,
                start: 'top bottom',
                end: 'top 70%',
                onEnter: () => {
                    button.classList.add('exploded');
                    createHeartBurst(button);
                },
                onLeaveBack: () => {
                    button.classList.remove('exploded');
                    button.querySelectorAll('.burst-heart').forEach(heart => heart.remove());
                }
            });
        });
    }
    
    // Pre-calculate heart positions and angles once
    const heartTemplates = Array.from({ length: 12 }, (_, i) => ({
        angle: (i * 30) * (Math.PI / 180),
        className: 'burst-heart'
    }));
    function createHeartBurst(button) {
        const rect = button.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        
        // Use pre-calculated templates to create hearts
        heartTemplates.forEach(template => {
            const heart = document.createElement('div');
            heart.className = template.className;
            
            const startX = Math.cos(template.angle) * (width/2);
            const startY = Math.sin(template.angle) * (height/2);
            
            heart.style.setProperty('--start-x', `${startX}px`);
            heart.style.setProperty('--start-y', `${startY}px`);
            heart.style.setProperty('--angle', `${template.angle}rad`);
            
            button.appendChild(heart);
            heart.addEventListener('animationend', () => heart.remove(), { once: true });
        });
    }
    renderProducts();
    initHeartButtons();
    initButtonAnimations();

    // Loading Animation
    const body = document.body;
    
    // Create and inject loading overlay
    const loadingOverlay = document.createElement('div');
    loadingOverlay.className = 'loading-overlay';
    loadingOverlay.innerHTML = `
        <div class="loading-content">
            <div class="loading-icon">
                <svg viewBox="0 0 24 24" class="heart-icon">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
            </div>
            <div class="loading-progress">
                <div class="progress-bar"></div>
            </div>
        </div>
    `;
    body.appendChild(loadingOverlay);

    // Stagger product card animations
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });

    // Remove loading overlay
    window.addEventListener('load', () => {
        loadingOverlay.style.opacity = '0';
        setTimeout(() => {
            loadingOverlay.remove();
        }, 600);
    });
});
