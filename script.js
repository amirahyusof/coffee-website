document.addEventListener('mousemove', move);

function move(e) {
    document.querySelectorAll('.move').forEach(layer => {
        const speed = parseFloat(layer.getAttribute('data-speed'));

        const x = (window.innerWidth - e.pageX * speed) / 120;
        const y = (window.innerHeight - e.pageY * speed) / 120;

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
}


gsap.from('.logo', {opacity:0, duration:1, delay: 2, y: 10})
gsap.from('.menu-btn', {opacity:0, duration:1, delay: 2.5, y: 20})
gsap.from('.navigation, .nav-bar', {opacity: 0, duration: 1, delay: 2.1, y: 30, stagger: 0.2})

gsap.from('.info', {opacity:0, duration:1, delay: 1.5, y: 30})
gsap.from('.description', {opacity:0, duration:1, delay: 1.8, y: 30})
gsap.from('.info-btn', {opacity:0, duration:1, delay: 2.1, y: 30})
gsap.from('.image', {opacity:0, duration:1, delay: 2.6, y: 30})

gsap.from('.video-info', {opacity:0, duration:1, delay: 1.5, y: 30})
gsap.from('.video', {opacity:0, duration:1, delay: 1.8, y: 30})

gsap.from('.price-info', {opacity:0, duration:1, delay: 1.5, y: 30})
gsap.from('.flexbox', {opacity:0, duration:1, delay: 1.8, y: 30})

gsap.from('.title', {opacity:0, duration:1, delay: 1.3, y: 30})
gsap.from('.container01', {opacity:0, duration:1, delay: 1.5, y: 30})
gsap.from('.container02', {opacity:0, duration:1, delay: 1.8, y: 30})
gsap.from('.container03', {opacity:0, duration:1, delay: 2.0, y: 30})
gsap.from('.engage', {opacity:0, duration:1, delay: 2.3, y: 30})

gsap.from('.intro-contact', {opacity:0, duration:1, delay: 1.3, y: 30})
gsap.from('.image-contact', {opacity:0, duration:1, delay: 1.5, y: 30})
gsap.from('.container-way', {opacity:0, duration:1, delay: 1.8, y: 30})
gsap.from('.contact-form', {opacity:0, duration:1, delay: 2.0, y: 30})




