// https://www.smashingmagazine.com/2020/04/particle-trail-animation-javascript/
import anime from "animejs";
import "./styles.css";

const container = document.querySelector('.anime-container');

const n = 15; // number of particles
// every step in l increases the distance from the middle by this amount of px 
const a = 2;
// number of steps in the spiral
const l = 110;
const dotSizeRange = [5, 10];
const spread = 15; // will spread in a radius of 15px

for (let i = 0; i <= l; i++) {
    const angle = 0.1 * i;

    // shift the particles to the center of the window
    // by adding half of the screen width and screen height
    const x = a * i * Math.cos(angle) + window.innerWidth / 2;
    const y = a * i * Math.sin(angle) + window.innerHeight / 2;

    // create n particles for each angle
    for (let j = 0; j <= n; j++) {
        const dot = document.createElement('div');
        const size = anime.random(...dotSizeRange);
        dot.style.width = `${size}px`;
        dot.style.height = `${size}px`;
        dot.style.left = `${x + anime.random(-spread, spread)}px`;
        dot.style.top = `${y + anime.random(-spread, spread)}px`;
        dot.style.opacity = 0;

        dot.classList.add('dot');

        container.appendChild(dot);
    }
}

anime({
    loop: true,
    easing: "linear",
    targets: document.getElementsByClassName('dot'),
    opacity: [
        { value: 1, duration: 50, delay: anime.stagger(2) },
        { value: 0, duration: 1200 }
    ],
    width: { value: 2, duration: 500, delay: anime.stagger(2) },
    height: { value: 2, duration: 500, delay: anime.stagger(2) },
    translateX: {
        value: () => anime.random(-30, 30),
        duration: 1500,
        delay: anime.stagger(2)
    },
    translateY: {
        value: () => anime.random(-30, 30),
        duration: 1500,
        delay: anime.stagger(2)
    },
});