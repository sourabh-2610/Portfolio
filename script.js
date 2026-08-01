/* ==========================================
   PREMIUM PORTFOLIO — SCRIPT.JS
   ========================================== */

'use strict';

// ── Utility: $ selector ──────────────────────
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

// ==========================================
// SECTION 1: ANIMATED BACKGROUND PARTICLES
// ==========================================
(function initCanvas() {
  const canvas = $('#bg-canvas');
  const ctx = canvas.getContext('2d');
  let W, H, particles = [], mouse = { x: -9999, y: -9999 };

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random() * W;
      this.y = Math.random() * H;
      this.size = Math.random() * 1.5 + 0.5;
      this.speedX = (Math.random() - 0.5) * 0.4;
      this.speedY = (Math.random() - 0.5) * 0.4;
      this.opacity = Math.random() * 0.5 + 0.1;
      this.hue = Math.random() > 0.5 ? 262 : 195; // purple or cyan
      this.life = 0;
      this.maxLife = Math.random() * 200 + 100;
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      this.life++;
      if (this.life > this.maxLife || this.x < 0 || this.x > W || this.y < 0 || this.y > H)
        this.reset();
      // Mouse attraction
      const dx = mouse.x - this.x;
      const dy = mouse.y - this.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 150) {
        this.x += dx * 0.005;
        this.y += dy * 0.005;
      }
    }
    draw() {
      const alpha = this.opacity * (1 - this.life / this.maxLife);
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${this.hue}, 80%, 70%, ${alpha})`;
      ctx.fill();
    }
  }

  function drawConnections() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const a = particles[i], b = particles[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(124,58,237,${(1 - dist / 120) * 0.12})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => { p.update(); p.draw(); });
    drawConnections();
    requestAnimationFrame(animate);
  }

  resize();
  for (let i = 0; i < 100; i++) particles.push(new Particle());
  animate();

  window.addEventListener('resize', resize);
  window.addEventListener('mousemove', e => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });
})();


// ==========================================
// SECTION 2: CUSTOM CURSOR
// ==========================================
(function initCursor() {
  const dot = $('#cursor-dot');
  const ring = $('#cursor-ring');
  let rx = 0, ry = 0, mx = 0, my = 0;
  let ringAF;

  function lerpCursor() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx + 'px';
    ring.style.top = ry + 'px';
    ringAF = requestAnimationFrame(lerpCursor);
  }

  document.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
    dot.style.left = e.clientX + 'px';
    dot.style.top = e.clientY + 'px';
  });

  document.addEventListener('mouseleave', () => {
    dot.style.opacity = '0';
    ring.style.opacity = '0';
  });

  document.addEventListener('mouseenter', () => {
    dot.style.opacity = '1';
    ring.style.opacity = '1';
  });

  // Hover effect on interactive elements
  const hoverEls = $$('a, button, input, textarea, [class*="btn"], .skill-card, .project-card, .social-btn, .slider-btn');
  hoverEls.forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
  });

  lerpCursor();
})();


// ==========================================
// SECTION 3: NAVIGATION SCROLL BEHAVIOR
// ==========================================
(function initNav() {
  const navbar = $('#navbar');
  const navLinks = $$('.nav-link');
  const sections = $$('section[id]');
  const hamburger = $('#hamburger');
  const mobileMenu = $('#mobile-menu');
  const mobLinks = $$('.mob-link');

  // Scroll classes
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
    updateActiveLink();
  }, { passive: true });

  // Active link on scroll
  function updateActiveLink() {
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
    });
    navLinks.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
  }

  // Hamburger toggle
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });

  mobLinks.forEach(l => {
    l.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
    });
  });

  updateActiveLink();
})();


// ==========================================
// SECTION 4: SCROLL REVEAL ANIMATION
// ==========================================
(function initReveal() {
  const els = $$('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const delay = el.dataset.delay ? parseInt(el.dataset.delay) : 0;
        setTimeout(() => el.classList.add('visible'), delay);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.12 });

  els.forEach(el => observer.observe(el));
})();


// ==========================================
// SECTION 5: COUNTER ANIMATION (Hero Stats)
// ==========================================
(function initCounters() {
  const counterEls = $$('.stat-num[data-target]');

  function animateCounter(el) {
    const target = parseInt(el.dataset.target);
    const duration = 1800;
    const start = performance.now();
    function step(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target);
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target;
    }
    requestAnimationFrame(step);
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        animateCounter(e.target);
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });

  counterEls.forEach(el => observer.observe(el));
})();


// ==========================================
// SECTION 6: SKILL BAR ANIMATION
// ==========================================
(function initSkillBars() {
  const bars = $$('.skill-fill');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const bar = e.target;
        setTimeout(() => {
          bar.style.width = bar.dataset.width + '%';
        }, 200);
        observer.unobserve(bar);
      }
    });
  }, { threshold: 0.3 });

  bars.forEach(b => observer.observe(b));
})();


// ==========================================
// SECTION 7: TESTIMONIAL SLIDER
// ==========================================
(function initSlider() {
  const track = $('#testimonial-track');
  const prevBtn = $('#slider-prev');
  const nextBtn = $('#slider-next');
  const dotsContainer = $('#slider-dots');
  const cards = $$('.testimonial-card');
  const visibleCount = window.innerWidth <= 768 ? 1 : 2;
  const total = Math.ceil(cards.length / visibleCount);
  let current = 0;
  let autoSlideInterval;

  // Create dots
  for (let i = 0; i < total; i++) {
    const dot = document.createElement('div');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    dot.addEventListener('click', () => goTo(i));
    dotsContainer.appendChild(dot);
  }

  function goTo(idx) {
    current = (idx + total) % total;
    const cardWidth = cards[0].offsetWidth + 24; // gap = 24
    track.style.transform = `translateX(-${current * cardWidth * visibleCount}px)`;
    $$('.dot', dotsContainer).forEach((d, i) => d.classList.toggle('active', i === current));
  }

  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  nextBtn.addEventListener('click', () => { next(); resetAuto(); });
  prevBtn.addEventListener('click', () => { prev(); resetAuto(); });

  function startAuto() {
    autoSlideInterval = setInterval(next, 5000);
  }

  function resetAuto() {
    clearInterval(autoSlideInterval);
    startAuto();
  }

  startAuto();
  window.addEventListener('resize', () => goTo(0));
})();


// ==========================================
// SECTION 8: CONTACT FORM
// ==========================================
(function initForm() {
  const form = $('#contact-form');
  const btnText = $('#btn-text');
  const submitBtn = $('#submit-btn');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = $('#name').value.trim();
    const email = $('#email').value.trim();
    const message = $('#message').value.trim();

    if (!name || !email || !message) {
      shakeForm(form);
      return;
    }

    // Simulate submission
    submitBtn.disabled = true;
    btnText.textContent = 'Sending...';
    submitBtn.style.opacity = '0.7';

    await new Promise(r => setTimeout(r, 1800));

    btnText.textContent = '✓ Message Sent!';
    submitBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
    submitBtn.style.opacity = '1';

    setTimeout(() => {
      form.reset();
      btnText.textContent = 'Send Message';
      submitBtn.style.background = '';
      submitBtn.disabled = false;
    }, 3000);
  });

  function shakeForm(el) {
    el.animate([
      { transform: 'translateX(0)' },
      { transform: 'translateX(-8px)' },
      { transform: 'translateX(8px)' },
      { transform: 'translateX(-6px)' },
      { transform: 'translateX(6px)' },
      { transform: 'translateX(0)' },
    ], { duration: 400, easing: 'ease-out' });
  }
})();


// ==========================================
// SECTION 9: TYPING ANIMATION EFFECT
// ==========================================
(function initTyping() {
  // Add a subtle typing cursor glow to code card
  const codeCard = $('.about-code-card');
  if (!codeCard) return;
  // Already looks great, just ensure it's visible on reveal
})();


// ==========================================
// SECTION 10: MAGNETIC BUTTONS
// ==========================================
(function initMagnetic() {
  const magneticEls = $$('.btn-primary, .btn-ghost, .nav-cta, .social-btn, .back-top');

  magneticEls.forEach(el => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) * 0.25;
      const dy = (e.clientY - cy) * 0.25;
      el.style.transform = `translate(${dx}px, ${dy}px)`;
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform = '';
    });
  });
})();


// ==========================================
// SECTION 11: SMOOTH SCROLL (ENHANCED)
// ==========================================
(function initSmoothScroll() {
  $$('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href === '#') return;
      const target = $(href);
      if (target) {
        e.preventDefault();
        const top = target.getBoundingClientRect().top + window.scrollY - 72;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
})();


// ==========================================
// SECTION 12: SECTION TRANSITIONS / TILT
// ==========================================
(function initTilt() {
  const projectCards = $$('.project-card, .skill-card');

  projectCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `perspective(1000px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateY(-8px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
})();


// ==========================================
// SECTION 13: HERO PARALLAX
// ==========================================
(function initParallax() {
  const heroVisual = $('#hero-visual');
  if (!heroVisual) return;

  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    if (scrolled < window.innerHeight) {
      heroVisual.style.transform = `translateY(${scrolled * 0.2}px)`;
    }
  }, { passive: true });
})();


// ==========================================
// SECTION 14: PAGE LOAD FADE
// ==========================================
(function initLoad() {
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.5s ease';
  window.addEventListener('load', () => {
    document.body.style.opacity = '1';
  });
})();


// ==========================================
// SECTION 15: GRADIENT TRAIL EFFECT
// ==========================================
(function initGradientTrail() {
  const trail = [];
  const maxTrail = 8;

  document.addEventListener('mousemove', (e) => {
    trail.push({ x: e.clientX, y: e.clientY, time: Date.now() });
    if (trail.length > maxTrail) trail.shift();
  });
})();
