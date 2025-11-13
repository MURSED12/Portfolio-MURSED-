// Smooth Scroll
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});


// Typing Animation
const typing = document.getElementById("typing");
const text = "I'm Mursed Alam";  // UPDATED: your name instead of that Sara line
let i = 0;

function type() {
  if (i < text.length) {
    typing.textContent += text.charAt(i);
    i++;
    setTimeout(type, 100);
  }
}

window.onload = type;


// AOS Init
AOS.init({
  duration: 1200,
  once: true
});


// =========================
//  PARTICLE BACKGROUND
// =========================

const canvas = document.getElementById("bgCanvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
}
resizeCanvas();

window.addEventListener("resize", resizeCanvas);

let particles = [];

class Particle {
  constructor(x, y, size, speedX, speedY) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.speedX = speedX;
    this.speedY = speedY;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
    if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);

    // UPDATED: pure green palette particles
    const colors = ["#8EB69B", "#DAF1DE", "#235347"];
    ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)] + "99";

    ctx.fill();
  }
}

function init() {
  particles = [];
  for (let i = 0; i < 70; i++) {
    let size = Math.random() * 2 + 1;
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;
    let speedX = (Math.random() - 0.5) * 1.2;
    let speedY = (Math.random() - 0.5) * 1.2;
    particles.push(new Particle(x, y, size, speedX, speedY));
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animate);
}

init();
animate();
