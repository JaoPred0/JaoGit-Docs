// 📌 Bootstrap - Framework CSS responsivo (carregado corretamente como <link>)
const linkBootstrap = document.createElement('link');
linkBootstrap.rel = 'stylesheet';
linkBootstrap.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css';
document.head.appendChild(linkBootstrap);

// 🚀 AOS (Animate On Scroll) - Efeitos de animação ao rolar a página
const scriptAOS = document.createElement('script');
scriptAOS.src = 'https://unpkg.com/aos@next/dist/aos.js';
document.head.appendChild(scriptAOS);

// 🎡 Swiper - Biblioteca para criação de carrosséis e sliders
const scriptSwiper = document.createElement('script');
scriptSwiper.src = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js';
document.head.appendChild(scriptSwiper);
