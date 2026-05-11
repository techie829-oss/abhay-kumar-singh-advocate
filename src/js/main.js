import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Initialize Lucide icons
lucide.createIcons();

// Hero Animations
window.addEventListener('load', () => {
    const tl = gsap.timeline();
    
    tl.to('.reveal', {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
    });
});

// Scroll Reveal Animations
const revealElements = document.querySelectorAll('.reveal-on-scroll');
revealElements.forEach((el) => {
    gsap.fromTo(el, 
        { opacity: 0, y: 50 },
        {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: el,
                start: 'top 85%',
                toggleActions: 'play none none none'
            }
        }
    );
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.classList.add('shadow-lg');
        nav.style.padding = '0.5rem 0';
    } else {
        nav.classList.remove('shadow-lg');
        nav.style.padding = '1rem 0';
    }
});
