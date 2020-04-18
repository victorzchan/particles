// https://www.smashingmagazine.com/2020/04/particle-trail-animation-javascript/
import "animejs";
import "./styles.css";

const container = document.querySelector('.anime-container');
const n = 15; // number of particles
const a = 20; // angle of spiral
const l = 110; // length of spiral
const size = 5;
for (let i = 0; i <= l; i++) {
    const angle = 0.1 * i;
    // shift the particles to the center of the window
    // by adding half of the screen width and screen height
    const x = a * angle * Math.cos(angle) + window.innerWidth / 2;
    const y = a * angle * Math.sin(angle) + window.innerWidth / 2;
    const dot = document.createElement('div');
    dot.classList.add('dot');
    container.appendChild(dot);

    dot.style.width = `${size}px`;
    dot.style.height = `${size}px`;
    dot.style.left = `${x}px`;
    dot.style.top = `${y}px`;
}