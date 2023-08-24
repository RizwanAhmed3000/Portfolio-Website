// const headings = document.querySelector('.leftContainer');

ScrollReveal({ 
    reset: true, 
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.animateTop', { origin: 'top' });
ScrollReveal().reveal('.rightContainer, .cardsContainerAnimation', { origin: 'bottom' });
ScrollReveal().reveal('.imageContainer', { origin: 'left' });
ScrollReveal().reveal('.About', { origin: 'right' });