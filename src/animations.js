import '@dotlottie/player-component';

export const initHeaderAnimation = () => {
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
};

export const initAnimations = () => {
    initHeaderAnimation();
};
