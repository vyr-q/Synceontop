<script>
// Glowing Snow Effect
const canvas = document.getElementById('snowCanvas');
const ctx = canvas.getContext('2d');

let particles = [];
const characters = ['❄', '❅', '❆', '•', '✧', '⭒'];

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
        this.size = Math.random() * 7 + 4;
        this.speed = Math.random() * 2.8 + 1.2;
        this.char = characters[Math.floor(Math.random() * characters.length)];
        this.opacity = Math.random() * 0.7 + 0.5;
        this.angle = Math.random() * 360;
        this.wobble = Math.random() * 0.8 + 0.4;
        this.glow = Math.random() * 15 + 10; // Glow intensity
    }
    
    update() {
        this.y += this.speed;
        this.angle += 1.5;
        this.x += Math.sin(this.angle * 0.03) * this.wobble;
        
        if (this.y > canvas.height + 50) {
            this.reset();
        }
    }
    
    draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.shadowColor = '#ffffff';      // White glow
        ctx.shadowBlur = this.glow;
        ctx.fillStyle = '#ffffff';
        ctx.font = `${this.size}px Arial`;
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
    // Semi-transparent trail for smooth effect
    ctx.fillStyle = 'rgba(10, 10, 10, 0.12)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
    }
    
    requestAnimationFrame(animate);
}

// Initialize
window.addEventListener('resize', resizeCanvas);
resizeCanvas();
initParticles(180);   // Number of snowflakes
animate();
</script>
