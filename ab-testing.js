const variants = {
    romantic: {
        colors: {
            primary: '#FF9EAA',
            secondary: '#FFD1D8',
            accent: '#FF6B6B'
        },
        style: 'romantic'
    },
    minimal: {
        colors: {
            primary: '#F8B7CD',
            secondary: '#FFDDE4',
            accent: '#FF8DA1'
        },
        style: 'minimal'
    },
    luxury: {
        colors: {
            primary: '#E0BFB8',
            secondary: '#F8E6BE',
            accent: '#D4A5A5'
        },
        style: 'luxury'
    }
};

function initABTest() {
    const variant = Math.random() < 0.33 ? 'romantic' : 
                   Math.random() < 0.66 ? 'minimal' : 'luxury';
    document.body.setAttribute('data-variant', variant);
    applyVariant(variant);
}
