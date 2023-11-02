const moveImage = document.getElementById('move');
const containerImage = document.querySelector('.image');



function move(e) {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const  containerRect = containerImage.getBoundingClientRect();
    const xOffset = mouseX - containerRect.left - Image.width / 2; 
    const yOffset = mouseY - containerRect.top - Image.height / 2; 

    Image.style.left = `${xOffset}px`;
    Image.style.top = `${yOffset}px`;

}

containerImage.addEventListener('mousemove', move);


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




