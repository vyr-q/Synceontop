<!-- Add this inside your <body> -->
<canvas id="snowCanvas"></canvas>

<script>
// Red Falling Dots / DOS Snow Effect
const canvas = document.getElementById('snowCanvas');
const ctx = canvas.getContext('2d');

let particles = [];
const characters = ['●', '■', '◆', '0', '1', '▓', '▒', '█', '•', '◉'];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

class Particle {
    constructor() {
        this.reset();
    }
    
    reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height - canvas.height;
        this.size = Math.random() * 7 + 5;
        this.speed = Math.random() * 3 + 1.5;
        this.char = characters[Math.floor(Math.random() * characters.length)];
        this.opacity = Math.random() * 0.6 + 0.4;
        this.angle = Math.random() * 360;
        this.wobble = Math.random() * 0.5 + 0.5;
    }
    
    update() {
        this.y += this.speed;
        this.angle += 0.8;
        this.x += Math.sin(this.angle * 0.05) * this.wobble;
        
        if (this.y > canvas.height + 20) {
            this.reset();
        }
    }
    
    draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = '#ff3333';
        ctx.shadowColor = '#ff0000';
        ctx.shadowBlur = 12;
        ctx.font = `${this.size}px Courier New`;
        ctx.fillText(this.char, this.x, this.y);
        ctx.restore();
    }
}

function initParticles(count) {
    particles = [];
    for (let i = 0; i < count; i++) {
        particles.push(new Particle());
    }
}

function animate() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.12)'; // Trail effect
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
    }
    
    requestAnimationFrame(animate);
}

// Initialize
window.addEventListener('resize', () => {
    resizeCanvas();
});

resizeCanvas();
initParticles(180); // Number of falling dots (adjust for performance)
animate();
</script>