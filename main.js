const products = [
    {
        id: 1,
        title: "Sheldon Octopus Beanie Boo",
        description: "",
        price: 7.99,
        image: "https://m.media-amazon.com/images/I/71nwUpjtIUL._AC_SL1500_.jpg",
        link: "https://amzn.to/4aR56aQ"
    },
    {
        id: 2,
        title: "Heather die Einhorn-Katze 15cm",
        description: "Regenbogen Plüsch-Einhorn mit Glitzeraugen, 65cm",
        price: 8.99,
        image: "https://m.media-amazon.com/images/I/71CsimT+mKL._AC_SL1500_.jpg",
        link: "https://amzn.to/3WR6h4n"
    },
    {
        id: 3,
        title: "Lainey Leopard 15cm",
        description: "Entdecke Lainey, den süßen Leoparden mit dem extra flauschigen Fell! Seine großen, funkelnden Augen und die typischen Leoparden-Flecken machen ihn zu einem echten Hingucker. Das superweiche Material lädt zum Kuscheln ein und zaubert garantiert ein Lächeln ins Gesicht.",
        price: 14.99,
        image: "https://m.media-amazon.com/images/I/61HsKXiIcLL._AC_SL1024_.jpg",
        link: "https://amzn.to/4aO33EC"
    },

    {
        id: 4,
        title: "Harmony Unicorn",
        description: "Süßes regenbogen Einhorn",
        price: 14.99,
        image: "https://m.media-amazon.com/images/I/51-k+ODb+oL._AC_SL1024_.jpg",
        link: "https://amzn.to/4143gQJ"
    },
    {
        id: 5,
        title: "TY Beanie Boos 15 cm Plush Toy",
        description: "",
        price: 11.99,
        image: "https://m.media-amazon.com/images/I/61jPSnw5xvL._AC_SL1000_.jpg",
        link: "https://amzn.to/40SE4eL"
    },
    {
        id: 6,
        title: "Husky Thunder Baby Blue",
        description: "",
        price: 11.99,
        image: "https://m.media-amazon.com/images/I/61rL-7simxL._AC_SL1500_.jpg",
        link: "https://amzn.to/4164VoP"
    },
    {
        id: 7,
        title: "Flint Dragon Beanie Boo",
        description: "",
        price: 7.99,
        image: "https://m.media-amazon.com/images/I/71PXjYaysWL._AC_SL1500_.jpg",
        link: "https://amzn.to/3Qb72Br"
    },
    {
        id: 8,
        title: "Beanie Boos Chessie Monkey",
        description: "",
        price: 7.99,
        image: "https://m.media-amazon.com/images/I/71PhWZYzg3L._AC_SL1500_.jpg",
        link: "https://amzn.to/4jRWDbG"
    },
    // {
    //     id: 9,
    //     title: "Baby Yoda Plüsch",
    //     description: "The Child aus The Mandalorian, 25cm",
    //     price: 29.99,
    //     image: "https://m.media-amazon.com/images/I/71uzJ9f0tcL._AC_UF894,1000_QL80_.jpg",
    //     link: "https://www.amazon.de/dp/B0825SNNRV"
    // },
    // {
    //     id: 10,
    //     title: "Squishmallow Axolotl",
    //     description: "Trendiges Axolotl in Rosa, 20cm",
    //     price: 18.99,
    //     image: "https://m.media-amazon.com/images/I/71uzJ9f0tcL._AC_UF894,1000_QL80_.jpg",
    //     link: "https://www.amazon.de/dp/B09QXTN5B4"
    // },
    // {
    //     id: 11,
    //     title: "Molang Bunny",
    //     description: "Süßes Molang Häschen aus Korea, 25cm",
    //     price: 21.99,
    //     image: "https://m.media-amazon.com/images/I/71uzJ9f0tcL._AC_UF894,1000_QL80_.jpg",
    //     link: "https://www.amazon.de/dp/B07N1JPPX8"
    // },
    // {
    //     id: 12,
    //     title: "Djungelskog Bär",
    //     description: "IKEA Braunbär Kuscheltier, 40cm",
    //     price: 24.99,
    //     image: "https://m.media-amazon.com/images/I/71uzJ9f0tcL._AC_UF894,1000_QL80_.jpg",
    //     link: "https://www.amazon.de/dp/B08Q3HBQPB"
    // },
    // {
    //     id: 13,
    //     title: "Rilakkuma Bär",
    //     description: "Original San-X Rilakkuma, 35cm",
    //     price: 32.99,
    //     image: "https://m.media-amazon.com/images/I/71uzJ9f0tcL._AC_UF894,1000_QL80_.jpg",
    //     link: "https://www.amazon.de/dp/B00VXKBS0M"
    // },
    // {
    //     id: 14,
    //     title: "Dino Squishmallow",
    //     description: "Weicher Dinosaurier in Mintgrün, 30cm",
    //     price: 23.99,
    //     image: "https://m.media-amazon.com/images/I/71uzJ9f0tcL._AC_UF894,1000_QL80_.jpg",
    //     link: "https://www.amazon.de/dp/B09KMXYZ2P"
    // },
    // {
    //     id: 15,
    //     title: "Totoro Plüsch",
    //     description: "Studio Ghibli Totoro Kuscheltier, 28cm",
    //     price: 25.99,
    //     image: "https://m.media-amazon.com/images/I/71uzJ9f0tcL._AC_UF894,1000_QL80_.jpg",
    //     link: "https://www.amazon.de/dp/B00VGIW1X6"
    // },
    // {
    //     id: 16,
    //     title: "Avocado Plüsch",
    //     description: "Trendiges Avocado Kissen, 40cm",
    //     price: 19.99,
    //     image: "https://m.media-amazon.com/images/I/71uzJ9f0tcL._AC_UF894,1000_QL80_.jpg",
    //     link: "https://www.amazon.de/dp/B07XFCLJ6Q"
    // },
    // {
    //     id: 17,
    //     title: "Blobfish Plüsch",
    //     description: "Viraler TikTok Blobfish, 20cm",
    //     price: 17.99,
    //     image: "https://m.media-amazon.com/images/I/71uzJ9f0tcL._AC_UF894,1000_QL80_.jpg",
    //     link: "https://www.amazon.de/dp/B08MVDW5D5"
    // },
    // {
    //     id: 18,
    //     title: "Shiba Inu Plüsch",
    //     description: "Japanischer Shiba Hund, 30cm",
    //     price: 26.99,
    //     image: "https://m.media-amazon.com/images/I/71uzJ9f0tcL._AC_UF894,1000_QL80_.jpg",
    //     link: "https://www.amazon.de/dp/B07Q3BVQX9"
    // },
    // {
    //     id: 19,
    //     title: "Capybara XL",
    //     description: "Trending Capybara Plüsch, 45cm",
    //     price: 29.99,
    //     image: "https://m.media-amazon.com/images/I/71uzJ9f0tcL._AC_UF894,1000_QL80_.jpg",
    //     link: "https://www.amazon.de/dp/B0BN6WXYZ1"
    // },
    // {
    //     id: 20,
    //     title: "Faultier Kuscheltier",
    //     description: "Süßes Faultier mit Baby, 35cm",
    //     price: 22.99,
    //     image: "https://m.media-amazon.com/images/I/71uzJ9f0tcL._AC_UF894,1000_QL80_.jpg",
    //     link: "https://www.amazon.de/dp/B07Q3BVQX9"
    // }
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
                    <a href="${product.link}" class="cta-button" target="_blank" rel="noopener">
                        <span>Jetzt shoppen</span>
                        ${Array.from({length: 16}, (_, i) => `
                            <span class="burst-heart" style="--i: ${i}">
                                <svg viewBox="0 0 24 24">
                                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                                </svg>
                            </span>
                        `).join('')}
                    </a>
                </div>
            `;
            fragment.appendChild(article);
        });
        
        productGrid.appendChild(fragment);
    }

    renderProducts();

    let isAnimating = false;
    const buttons = document.querySelectorAll('.cta-button');
    
    buttons.forEach(button => {
        ScrollTrigger.create({
            trigger: button,
            start: 'top bottom-=100',
            end: 'bottom top+=100',
            once: true,
            onEnter: () => {
                if (!isAnimating) {
                    isAnimating = true;
                    // Find the parent product-card and add exploded class
                    const productCard = button.closest('.product-card');
                    productCard.classList.add('exploded');
                    setTimeout(() => {
                        isAnimating = false;
                    }, 800);
                }
            }
        });
    });
});



function initializeTracking() {
    // Event-Listener für alle Produkt-Clicks
    document.querySelectorAll('.cta-button').forEach(button => {
        button.addEventListener('click', function(e) {
            const productCard = this.closest('.product-card');
            const productTitle = productCard.querySelector('.product-title').textContent;
            
            gtag('event', 'product_click', {
                'event_category': 'ecommerce',
                'event_label': productTitle,
                'value': parseFloat(productCard.querySelector('.price-tag').textContent)
            });
        });
    });
}

// Füge diese Zeile am Ende deines DOMContentLoaded Event-Listeners hinzu
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    initializeTracking();
});
