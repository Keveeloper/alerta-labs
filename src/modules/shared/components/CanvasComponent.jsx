import React, { useRef, useEffect } from 'react';

class Particle {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.vx = 0;
    this.vy = 0;
    this.accelX = 0;
    this.accelY = 0;
    this.life = 2000;
    this.alpha = 1;
    this.size = 20;
  }

  update() {
    this.vx += this.accelX;
    this.vy += this.accelY;
    this.x += this.vx;
    this.y += this.vy;
  }

  draw(ctx) {
    ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
  }

  isAlive() {
    return this.life >= 0;
  }
}

class ParticleSystem {
  constructor() {
    this.particles = [];
    this.updateHandler = undefined;
  }

  addParticle(particle) {
    this.particles.push(particle);
  }

  update(deltaTime = 0) {
    this.particles.forEach(particle => {
      particle.update(deltaTime);
      this.updateHandler && this.updateHandler(particle);
    });
  }

  onUpdate(fn) {
    this.updateHandler = fn;
  }
}

function CanvasComponent() {
  const canvasRef = useRef(null);

  useEffect(() => {
    let canvas = canvasRef.current;
    let ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    let system = new ParticleSystem();

    for (let i = 0; i < 1000; i++) {
      let particle = new Particle();
      let angle = Math.PI / 2 * (Math.random() - 0.5) * 2;
      particle.x = Math.random() * width;
      particle.y = Math.random() * height;
      particle.life = Math.random() * 1000 + 1000;
      particle.size = Math.random() * 1.5;
      particle.maxLife = particle.life;
      system.addParticle(particle);
    }

    system.onUpdate((particle) => {
      if (!particle.isAlive()) {
        particle.x = Math.random() * width;
        particle.y = Math.random() * height;
        particle.vx = 0;
        particle.vy = 0;
        particle.life = Math.random() * 5000 + 5000;
        particle.maxLife = particle.life;
      }

      particle.life -= 10;
      particle.accelX = (Math.random() - 0.5) * 0.02;
      particle.accelY = (Math.random() - 0.5) * 0.02;

      if (particle.life >= particle.maxLife / 2) {
        particle.alpha = 1 - (particle.life / particle.maxLife);
      } else {
        particle.alpha = particle.life / particle.maxLife;
      }

      particle.update();
    });

    function render() {
      system.update();
      ctx.globalCompositeOperation = 'source-over';
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, width, height);

      let grad = ctx.createRadialGradient(width / 2, height / 2, 0, width / 2, height / 2, width);
      grad.addColorStop(0.75, 'transparent');

      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      ctx.globalCompositeOperation = 'lighter';

      system.particles.forEach(particle => particle.draw(ctx));

      requestAnimationFrame(render);
    }

    render();

    return () => {
      cancelAnimationFrame(render);
    };
  }, []);

  return <canvas ref={canvasRef} className='lazy-bg' />;
}

export default CanvasComponent;