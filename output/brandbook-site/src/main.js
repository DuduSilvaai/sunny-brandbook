import './style.css';

// === SVG ICON LIBRARY (replaces all emojis) ===
const IC = {
  flame: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 12c2-2.96 0-7-1-8 0 3.038-1.773 4.741-3 6-1.226 1.26-2 3.24-2 5a6 6 0 1 0 12 0c0-1.532-1.056-3.94-2-5-1.786 3-2.791 3-4 2z"/></svg>`,
  sun: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>`,
  crown: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7z"/><path d="M5 20h14"/></svg>`,
  target: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`,
  bulb: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>`,
  xmark: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>`,
  ban: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m4.9 4.9 14.2 14.2"/></svg>`,
  moon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`,
  sunrise: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 18a5 5 0 0 0-10 0"/><path d="M12 9V2"/><path d="m4.22 10.22 1.42 1.42M18.36 11.64l1.42-1.42M1 18h2M21 18h2M23 22H1"/><path d="m8 6 4-4 4 4"/></svg>`,
  user: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  chart: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 20V10M12 20V4M6 20v-6"/></svg>`,
  wrench: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
  money: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1v22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
  handshake: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88"/><path d="m16 16-1.5-1.5"/><path d="M2 15h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H2v-6z"/><path d="M22 15h-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2v-6z"/></svg>`,
  alert: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3z"/><path d="M12 9v4M12 17h.01"/></svg>`,
  bolt: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg>`,
  check: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>`,
};

// ============================================================
// SUNNY BRANDBOOK — SPA Engine v3 · IMMERSIVE EDITION
// Scroll Reveals · Particles · Counters · Progress · Glow Cards
// Toast · Loading Screen · Footer · Enhanced Animations
// ============================================================

// === LOADING SCREEN ===
const loadingScreen = document.createElement('div');
loadingScreen.className = 'loading-screen';
loadingScreen.innerHTML = `
  <svg viewBox="0 0 100 100" class="loading-logo" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="lg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#FACC15"/><stop offset="100%" stop-color="#E8740C"/></linearGradient></defs>
    <circle cx="50" cy="50" r="45" fill="none" stroke="url(#lg)" stroke-width="2" stroke-dasharray="6 6"/>
    <path d="M 60 25 L 35 52 L 52 52 L 40 75 L 65 48 L 48 48 Z" fill="url(#lg)"/>
  </svg>
  <div class="loading-bar"><div class="loading-bar-fill"></div></div>
  <div class="loading-text">Carregando Brandbook</div>
`;
document.body.prepend(loadingScreen);
setTimeout(() => loadingScreen.classList.add('hidden'), 2000);
setTimeout(() => loadingScreen.remove(), 2600);

// === PROGRESS BAR ===
const progressBar = document.createElement('div');
progressBar.className = 'progress-bar';
document.body.prepend(progressBar);

// === PARTICLE CANVAS ===
const particleCanvas = document.createElement('canvas');
particleCanvas.className = 'particle-canvas';
document.body.prepend(particleCanvas);

// === TOAST CONTAINER ===
const toastContainer = document.createElement('div');
toastContainer.className = 'toast-container';
document.body.appendChild(toastContainer);

// === SCROLL-TO-TOP BUTTON ===
const scrollTopBtn = document.createElement('button');
scrollTopBtn.className = 'scroll-top';
scrollTopBtn.innerHTML = '↑';
scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
document.body.appendChild(scrollTopBtn);

// === DOM REFS ===
const contentArea = document.getElementById('content-area');
const breadcrumbCurrent = document.getElementById('breadcrumb-current');
const mobileToggle = document.getElementById('mobile-toggle');
const logoHome = document.getElementById('logo-home');
const navLinks = document.querySelectorAll('.nav-link');
const dropdownBtns = document.querySelectorAll('.nav-dropdown-btn');
const topnav = document.getElementById('topnav');

// === DROPDOWN NAVIGATION ===
dropdownBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const group = btn.dataset.group;
    const dropdown = document.querySelector(`[data-dropdown="${group}"]`);
    const isOpen = btn.classList.contains('open');
    dropdownBtns.forEach(b => b.classList.remove('open'));
    document.querySelectorAll('.nav-dropdown').forEach(d => d.classList.remove('open'));
    if (!isOpen) {
      btn.classList.add('open');
      dropdown.classList.add('open');
    }
  });
});
document.addEventListener('click', () => {
  dropdownBtns.forEach(b => b.classList.remove('open'));
  document.querySelectorAll('.nav-dropdown').forEach(d => d.classList.remove('open'));
});

// === MOBILE MENU ===
mobileToggle.addEventListener('click', () => {
  document.getElementById('nav-links').classList.toggle('open');
});

// === SCROLL LISTENERS ===
window.addEventListener('scroll', () => {
  // Progress bar
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
  progressBar.style.width = progress + '%';

  // Nav background
  topnav.classList.toggle('scrolled', scrollTop > 50);

  // Scroll-to-top
  scrollTopBtn.classList.toggle('visible', scrollTop > 500);
}, { passive: true });

// === INTERSECTION OBSERVER FOR REVEALS ===
function initScrollReveals() {
  const revealElements = contentArea.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger-children');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  revealElements.forEach(el => observer.observe(el));
}

// === ANIMATED COUNTERS ===
function initCounters() {
  const counters = contentArea.querySelectorAll('[data-counter]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = el.dataset.counter;
        const prefix = el.dataset.prefix || '';
        const suffix = el.dataset.suffix || '';
        const isNeg = target.startsWith('-');
        const numericTarget = parseInt(target.replace(/[^0-9]/g, ''));
        const duration = 1500;
        const start = performance.now();
        function update(now) {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = Math.round(numericTarget * eased);
          el.textContent = prefix + (isNeg ? '-' : '') + current + suffix;
          if (progress < 1) requestAnimationFrame(update);
        }
        requestAnimationFrame(update);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(el => observer.observe(el));
}

// === ARCHETYPE BAR ANIMATION ===
function initArchetypeBars() {
  const bars = contentArea.querySelectorAll('.archetype-fill');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const width = entry.target.dataset.width;
        if (width) entry.target.style.width = width;
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  bars.forEach(el => observer.observe(el));
}

// === CARD GLOW TRACKING ===
function initCardGlow() {
  const cards = contentArea.querySelectorAll('.brand-card, .value-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty('--mouse-x', x + '%');
      card.style.setProperty('--mouse-y', y + '%');
    });
  });
}

// === VIDEO AUTOPLAY ON SCROLL ===
function initVideoAutoplay() {
  const videos = contentArea.querySelectorAll('video[data-autoplay-scroll]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const video = entry.target;
      if (entry.isIntersecting) {
        video.play().catch(() => {});
        video.closest('.video-showcase')?.classList.add('visible');
      } else {
        video.pause();
      }
    });
  }, { threshold: 0.3 });
  videos.forEach(v => observer.observe(v));
}

// === TOAST SYSTEM ===
function showToast(message, type = 'success') {
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<span class="toast-icon">${type === 'success' ? '✓' : 'ℹ'}</span> ${message}`;
  toastContainer.appendChild(toast);
  setTimeout(() => { toast.classList.add('out'); }, 2000);
  setTimeout(() => toast.remove(), 2500);
}

// === COLOR COPY WITH TOAST ===
function copyColor(hex) {
  navigator.clipboard.writeText(hex).then(() => showToast(`${hex} copiado!`));
}

// === PARTICLE SYSTEM ===
function initParticles() {
  const ctx = particleCanvas.getContext('2d');
  let W, H;
  function resize() {
    W = particleCanvas.width = window.innerWidth;
    H = particleCanvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const particles = [];
  const count = Math.min(40, Math.floor(window.innerWidth / 30));
  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 2 + 0.5,
      o: Math.random() * 0.3 + 0.1,
    });
  }

  function animate() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 107, 0, ${p.o})`;
      ctx.fill();
    });
    // Connect nearby particles
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(255, 107, 0, ${0.05 * (1 - dist / 150)})`;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(animate);
  }
  animate();
}
initParticles();

// === NAVIGATION ===
function setActive(page) {
  navLinks.forEach(l => l.classList.remove('active'));
  const target = document.querySelector(`[data-page="${page}"]`);
  if (target) target.classList.add('active');
}

function navigate(page) {
  setActive(page);
  breadcrumbCurrent.textContent = page.toUpperCase().replace(/-/g, ' ');
  contentArea.innerHTML = '';
  contentArea.style.animation = 'none';
  contentArea.offsetHeight;
  contentArea.style.animation = 'fadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
  const renderer = pages[page];
  if (renderer) {
    contentArea.innerHTML = renderer();
    // Append footer to every page
    contentArea.innerHTML += renderFooter();
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
  // Close mobile menu & dropdowns
  document.getElementById('nav-links').classList.remove('open');
  dropdownBtns.forEach(b => b.classList.remove('open'));
  document.querySelectorAll('.nav-dropdown').forEach(d => d.classList.remove('open'));
  // Init immersive systems
  requestAnimationFrame(() => {
    initScrollReveals();
    initCounters();
    initArchetypeBars();
    initCardGlow();
    initVideoAutoplay();
  });
}

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const page = link.dataset.page;
    window.location.hash = page;
    navigate(page);
  });
});

logoHome.addEventListener('click', () => {
  window.location.hash = 'hero';
  navigate('hero');
});

// === FOOTER RENDERER ===
function renderFooter() {
  return `
    <footer class="site-footer">
      <svg viewBox="0 0 100 100" class="footer-logo" xmlns="http://www.w3.org/2000/svg">
        <defs><linearGradient id="fgrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#FACC15"/><stop offset="100%" stop-color="#FF6B00"/></linearGradient></defs>
        <circle cx="50" cy="50" r="45" fill="none" stroke="url(#fgrad)" stroke-width="2" stroke-dasharray="6 6"/>
        <path d="M 60 25 L 35 52 L 52 52 L 40 75 L 65 48 L 48 48 Z" fill="url(#fgrad)"/>
      </svg>
      <div class="footer-tagline">Nenhum lead morre ao sol.</div>
      <div class="footer-divider"></div>
      <div class="footer-meta">
        <span>SUNNY BRANDBOOK · V2.0 · 2026</span>
        <span>AI-POWERED SOLAR SALES INTELLIGENCE</span>
        <span>26 PAGES · AIOX-LEVEL IMMERSIVE EDITION</span>
        <span style="margin-top:8px;opacity:0.5">Crafted with ${IC.sun} by Brand Chief Agent</span>
      </div>
    </footer>
  `;
}

// === HELPER ===
function swatch(name, hex, rgb, use) {
  return `<div class="swatch-card" onclick="window.__copyColor('${hex}')">
    <div class="swatch-preview" style="background:${hex}"></div>
    <div class="swatch-info">
      <div class="swatch-name">${name}</div>
      <div class="swatch-hex">${hex} · ${rgb}</div>
    </div>
  </div>`;
}
window.__copyColor = copyColor;

// === PAGE RENDERERS ===
const pages = {

  hero: () => `
    <div class="hero-container mesh-bg" style="display:flex; flex-direction:column; justify-content:center; padding-top:120px;">
      <div style="max-width:1200px; width:100%; margin:0 auto; display:grid; grid-template-columns: 1fr 1fr; gap:var(--space-8); align-items:center;">
        <div class="hero-text-block staggered-reveal" style="text-align:left;">
          <div class="hero-logo-wrapper" style="width:100px; height:100px; margin-bottom:var(--space-4);">
            <svg viewBox="0 0 100 100" class="hero-logo-svg" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="herograd" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#FACC15"/><stop offset="50%" stop-color="#F5A524"/><stop offset="100%" stop-color="#E8740C"/>
                </linearGradient>
              </defs>
              <circle cx="50" cy="50" r="45" fill="none" stroke="url(#herograd)" stroke-width="2" stroke-dasharray="6 6">
                <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="30s" repeatCount="indefinite"/>
              </circle>
              <circle cx="50" cy="50" r="35" fill="rgba(245,165,36,0.05)" stroke="url(#herograd)" stroke-width="1"/>
              <path d="M 60 25 L 35 52 L 52 52 L 40 75 L 65 48 L 48 48 Z" fill="url(#herograd)"/>
            </svg>
          </div>
          <h1 class="hero-title" style="font-size:72px; line-height:1; margin-bottom:var(--space-4);">Nenhum lead <br><span style="background:var(--gradient-solar);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">morre ao sol.</span></h1>
          <p class="hero-tagline" style="font-size:20px; color:var(--light); font-weight:400; max-width:480px;">A inteligência artificial comercial que converte todas as oportunidades de contato em reuniões qualificadas, alavancando integradores solares.</p>
          
          <div style="display:flex; gap:var(--space-4); margin-top:var(--space-6);">
            <a href="#showcase" class="cta-button" onclick="navigate('showcase')">Explorar Brandbook</a>
            <a href="#manifesto" class="cta-button" style="background:rgba(24,24,27,0.8); color:var(--foreground); border:1px solid var(--border); box-shadow:none; backdrop-filter:blur(10px);" onclick="navigate('manifesto')">Ler Manifesto</a>
          </div>
        </div>
        
        <div class="hero-visual-block reveal-right" style="position:relative;">
          <div class="glass-panel" style="height:500px; display:flex; align-items:center; justify-content:center; text-align:center;">
             <!-- PLACEHOLDER_IMAGE: Dashboard em perspectiva dark mode com glow laranja -->
             <div class="media-placeholder" style="width:100%; height:100%; background:transparent; border:none;">
                <div style="font-size:48px; margin-bottom:16px;">🖥️</div>
                <div style="color:var(--foreground); font-weight:600; font-size:18px;">[ MOCKUP PLACEHOLDER ]</div>
                <div style="color:var(--light); font-size:13px; max-width:240px; margin-top:8px;">Imagem de <strong>Alta Resolução</strong> do Dashboard da Sunny operando leads em deep dark mode, com glowing solar nos gráficos.</div>
             </div>
          </div>
        </div>
      </div>
      <div class="hero-scroll" style="position:relative; margin-top:100px;"><span>SCROLL</span><span>↓</span></div>
    </div>
    
    <div class="stats-bar reveal">
      <div class="stat-card"><div class="stat-value" data-counter="15" data-prefix="< " data-suffix="m">0</div><div class="stat-label">Tempo de Resposta</div></div>
      <div class="stat-card"><div class="stat-value" data-counter="120" data-suffix="h">0</div><div class="stat-label">Salvas/mês na triagem</div></div>
      <div class="stat-card"><div class="stat-value" data-counter="45" data-prefix="-" data-suffix="%">0</div><div class="stat-label">Redução do CAC</div></div>
      <div class="stat-card"><div class="stat-value" style="color:var(--success)" data-counter="35" data-prefix="+R$" data-suffix="k">0</div><div class="stat-label">Retorno Adicional/mês</div></div>
    </div>

    <div class="section reveal">
      <span class="section-label">O SISTEMA SUNNY</span>
      <h2 class="section-title">A Fundação de uma Marca Magnânima</h2>
      <p class="section-subtitle" style="margin-bottom:var(--space-8)">O design e a estrutura de vendas que não aceita meio termo. Focado em velocidade profunda e soberania do integrador brasileiro.</p>
      
      <div class="bento-grid stagger-children">
        <div class="glass-panel bento-span-2 bento-row-2" style="padding:var(--space-6); display:flex; flex-direction:column; justify-content:space-between;">
           <div>
             <div class="brand-card-title" style="font-size:32px;">Identity System</div>
             <div class="brand-card-text">Nossas fundações visuais — cores, tipografia, e motion — projetadas para a dualidade entre luz radiante e o espaço escuro do comando (Dark mode + Neon glow).</div>
           </div>
           <div class="media-placeholder" style="height:220px; margin-top:var(--space-4); border-radius:var(--radius-md); background:rgba(0,0,0,0.5); border-color:#555;">
              <span>[ PLACEHOLDER ]<br>Preview do Design System e Gráficos Translucentes</span>
           </div>
        </div>
        
        <div class="glass-panel bento-span-2" style="padding:var(--space-6);">
           <div class="brand-card-title">Brand Strategy</div>
           <div class="brand-card-text">O cérebro verbal da Sunny. Nosso posicionamento, o arquétipo do Mago Operacional misturado ao Rei (Magnânimo), e nossa narrativa construída contra a inércia comercial.</div>
        </div>

        <div class="glass-panel bento-span-1" style="padding:var(--space-6); display:flex; align-items:center; justify-content:center; flex-direction:column; text-align:center; background:linear-gradient(135deg, rgba(245,165,36,0.1), transparent);">
           <div style="font-size:36px; margin-bottom:8px;">🔥</div>
           <div class="brand-card-title" style="font-size:16px;">Voz Autoridade</div>
        </div>

        <div class="glass-panel bento-span-1" style="padding:var(--space-6); display:flex; align-items:center; justify-content:center; flex-direction:column; text-align:center;">
           <div style="font-size:36px; margin-bottom:8px;">⚡</div>
           <div class="brand-card-title" style="font-size:16px;">Ação Instantânea</div>
        </div>
      </div>
    </div>
  `,

  proposito: () => `
    <div class="page-hero" style="position:relative; overflow:hidden; padding-top:120px; padding-bottom:80px;">
      <!-- PLACEHOLDER_HEADER_IMAGE -->
      <div style="position:absolute; inset:0; background:linear-gradient(to bottom, rgba(9,9,11,0.2), var(--command-black)), url('/api/placeholder/1920/1080') center/cover; opacity:0.15; z-index:-1;"></div>
      
      <div class="section-number" style="font-size:120px; color:rgba(245,165,36,0.1); position:absolute; top:20px; right:5%;">00</div>
      <span class="section-label">00 · BRAND PURPOSE</span>
      <h2 class="section-title" style="font-size:64px; margin-bottom:var(--space-3)">Por que existimos</h2>
      <p class="section-subtitle" style="font-size:24px; max-width:800px; color:var(--clean-white);">A energia solar não pode esperar o amanhecer do SDR. Nós criamos a inteligência magnânima que <strong>nunca dorme</strong>.</p>
      
      <div class="hero-stat-row" style="margin-top:var(--space-8)">
        <div class="hero-stat"><div class="hero-stat-value" data-counter="15" data-prefix="< " data-suffix="m">0</div><div class="hero-stat-label">Tempo de Resposta</div></div>
        <div class="hero-stat"><div class="hero-stat-value" data-counter="120" data-suffix="h">0</div><div class="hero-stat-label">Horas Salvas/mês</div></div>
        <div class="hero-stat"><div class="hero-stat-value" data-counter="45" data-prefix="-" data-suffix="%">0</div><div class="hero-stat-label">Redução do CAC</div></div>
        <div class="hero-stat"><div class="hero-stat-value" data-counter="35" data-prefix="+R$" data-suffix="k">0</div><div class="hero-stat-label">Retorno/mês</div></div>
      </div>
    </div>

    <div class="section reveal">
      <span class="section-label">BRAND DNA</span>
      <div class="bento-grid stagger-children" style="margin-top:var(--space-6)">
        <div class="glass-panel bento-span-2 bento-row-2" style="padding:0; display:flex; flex-direction:column; overflow:hidden;">
          <div class="media-placeholder" style="flex:1; border:none; border-bottom:1px solid var(--border); background:rgba(0,0,0,0.4);">
             <span style="font-size:40px; margin-bottom:8px;">☀️</span>
             <span style="color:var(--foreground); font-weight:600;">[ MOCKUP: Alvorada Solar ]</span>
             <span style="color:var(--light); font-size:12px; margin-top:8px;">Imagem premium de painéis solares recebendo o primeiro sol do dia.</span>
          </div>
          <div style="padding:var(--space-6);">
            <div class="voice-model-title" style="font-size:24px; color:var(--solar-flare); margin-bottom:var(--space-2);">Missão</div>
            <div class="voice-model-desc" style="font-size:16px;">Eliminar a morte comercial no setor de energia solar brasileiro imperdoavelmente, transformando cada lead frio em uma reunião engajada.</div>
          </div>
        </div>

        <div class="glass-panel bento-span-2 bento-row-2" style="padding:0; display:flex; flex-direction:column; overflow:hidden;">
          <div style="padding:var(--space-6);">
            <div class="voice-model-title" style="font-size:24px; color:var(--solar-flare); margin-bottom:var(--space-2);">Visão</div>
            <div class="voice-model-desc" style="font-size:16px;">Ser a torre de comando soberana (AIOX) de toda integradora solar no Brasil até 2028.</div>
          </div>
          <div class="media-placeholder" style="flex:1; border:none; border-top:1px solid var(--border); background:rgba(0,0,0,0.4);">
             <span style="font-size:40px; margin-bottom:8px;">🛰️</span>
             <span style="color:var(--foreground); font-weight:600;">[ MOCKUP: Satélite / Torre Comando ]</span>
             <span style="color:var(--light); font-size:12px; margin-top:8px;">Imagem macro de tecnologia satelital / comando.</span>
          </div>
        </div>
      </div>
    </div>
    <div class="section-divider"></div>
    <div class="section reveal">
      <span class="section-label">CORE TENSION</span>
      <div class="brand-quote"><p>"O mercado solar brasileiro cresce 30% ao ano. Mas 70% dos leads morrem antes da primeira ligação. Isso não é ineficiência. É negligência operacional."</p></div>
    </div>
    <div class="section reveal">
      <span class="section-label">BRAND SOUL STATEMENT</span>
      <div class="brand-quote"><p>"Sunny acredita que nenhuma oportunidade de energia limpa deveria morrer por falta de atenção humana. Nós criamos inteligência que nunca dorme para que cada lead receba a resposta que merece — rápida, qualificada e humana."</p></div>
    </div>
    <div class="section-divider"></div>
    <div class="section reveal">
      <span class="section-label">5 BRAND PILLARS</span>
      <div class="timeline" style="margin-top:var(--space-6)">
        <div class="timeline-item"><div class="timeline-item-title">Intolerância à Inação</div><div class="timeline-item-text">Cada minuto sem resposta é uma venda morrendo. Velocidade é nosso ato de fé.</div></div>
        <div class="timeline-item"><div class="timeline-item-title">Magnanimidade Operacional</div><div class="timeline-item-text">Grandioso onde o mercado aceita medíocre. Premium não é luxo — é padrão.</div></div>
        <div class="timeline-item"><div class="timeline-item-title">Clareza Solar</div><div class="timeline-item-text">Zero ruído. Cada dado responde uma pergunta real. Se não gera ação, não aparece.</div></div>
        <div class="timeline-item"><div class="timeline-item-title">Soberania do Integrador</div><div class="timeline-item-text">A IA amplifica. Nunca substitui. O integrador é o rei — nós somos a torre de comando.</div></div>
        <div class="timeline-item"><div class="timeline-item-title">Velocidade com Fundação</div><div class="timeline-item-text">Rápido E robusto. Não é MVP descartável — é infraestrutura que escala.</div></div>
      </div>
    </div>
  `,

  identity: () => `
    <div class="page-hero" style="position:relative; overflow:hidden; padding-top:100px; padding-bottom:60px;">
      <div class="section-number" style="font-size:140px; color:rgba(245,165,36,0.07); position:absolute; top:10px; right:5%;">01</div>
      <span class="section-label">01 · IDENTITY SYSTEM</span>
      <h2 class="section-title" style="font-size:56px;">Brand Foundations</h2>
      <p class="section-subtitle" style="font-size:20px; max-width:700px;">Os fundamentos visuais que garantem consistência magnânima da marca Sunny em todos os pontos de contato — do pixel ao painel solar.</p>
    </div>

    <div class="section reveal">
      <div class="bento-grid stagger-children">
        <!-- Visual Personality: Tall left panel -->
        <div class="glass-panel bento-span-2 bento-row-2" style="padding:0; overflow:hidden; display:flex; flex-direction:column;">
          <div style="padding:var(--space-6); flex:1;">
            <div class="brand-card-title" style="font-size:28px; margin-bottom:var(--space-4);">Visual Personality</div>
            <div style="display:flex; flex-direction:column; gap:12px;">
              ${[['Commanding','Transmite autoridade e controle total'],['Luminous','Luz que emana em fundos profundos'],['Precise','Geometria limpa, alinhamentos obsessivos'],['Warm','Calor humano, calor solar'],['Premium','Cada pixel é intencional']].map(([t,d]) => `
              <div style="display:flex; align-items:center; gap:12px;">
                <div style="width:8px; height:8px; border-radius:50%; background:var(--solar-flare); box-shadow:0 0 12px rgba(245,165,36,0.5); flex-shrink:0;"></div>
                <div><strong style="color:var(--solar-flare)">${t}</strong> <span style="color:var(--light)">· ${d}</span></div>
              </div>`).join('')}
            </div>
          </div>
          <div class="media-placeholder" style="height:180px; border:none; border-top:1px solid var(--border); background:rgba(0,0,0,0.5);">
            <span style="font-size:32px; margin-bottom:8px;">🎨</span>
            <span style="color:var(--foreground); font-weight:600;">[ MOCKUP: UI Dashboard Dark ]</span>
            <span style="color:var(--light); font-size:11px; margin-top:4px;">Preview de interface Sunny em dark mode com glow solar nos gráficos.</span>
          </div>
        </div>

        <!-- Visual Tension panel -->
        <div class="glass-panel bento-span-2" style="padding:var(--space-6); background:linear-gradient(135deg, rgba(245,165,36,0.08), rgba(232,116,12,0.03));">
          <div class="brand-card-title" style="margin-bottom:var(--space-3);">Visual Tension</div>
          <div style="font-size:22px; color:var(--foreground); font-weight:600; font-style:italic; margin-bottom:var(--space-3);">"Poder escuro com energia luminosa"</div>
          <div class="brand-card-text" style="font-size:15px; line-height:1.7;">Dark backgrounds de autoridade + accents solares que emanam calor. A tensão entre <strong style="color:var(--solar-flare)">noite profunda</strong> e <strong style="color:var(--warm-yellow)">sol radiante</strong> é a assinatura visual da Sunny.</div>
        </div>

        <!-- Tension visual demo -->
        <div class="glass-panel bento-span-2" style="padding:0; overflow:hidden; display:flex; height:160px;">
          <div style="flex:1; background:var(--command-black); display:flex; align-items:center; justify-content:center;">
            <span style="font-family:var(--font-brand); font-size:24px; color:var(--foreground); letter-spacing:-0.02em;">Noite</span>
          </div>
          <div style="width:4px; background:var(--gradient-solar);"></div>
          <div style="flex:1; background:linear-gradient(135deg, #F5A524, #E8740C); display:flex; align-items:center; justify-content:center;">
            <span style="font-family:var(--font-brand); font-size:24px; color:var(--command-black); letter-spacing:-0.02em;">Sol</span>
          </div>
        </div>
      </div>
    </div>

    <div class="section reveal">
      <span class="section-label">BRAND OVERVIEW</span>
      <div class="video-showcase reveal-scale" style="margin:var(--space-6) auto;max-width:960px"><video data-autoplay-scroll loop muted playsinline style="width:100%;border-radius:16px;display:block;"><source src="/videos/mockups.mp4" type="video/mp4"></video></div>
    </div>

    <div class="section reveal">
      <span class="section-label">MOODBOARD REFERENCES</span>
      <h3 class="section-title" style="font-size:28px">O que NOS INSPIRA</h3>
      <div class="bento-grid stagger-children" style="margin-top:var(--space-6)">
        ${[
          ['Porsche Design','Dark premium com tipografia confiante e materiais nobres','🏎️'],
          ['Bloomberg Terminal','High-density data visualization em dark UI imersiva','📊'],
          ['Apple Pro','Detalhes obsessivos, material premium, minimalismo funcional','🍎'],
          ['Stripe Dashboard','Clareza de dados com gradients sofisticados e micro-animações','💳']
        ].map(([title,desc,emoji]) => `
        <div class="glass-panel bento-span-1" style="padding:0; overflow:hidden; display:flex; flex-direction:column;">
          <div class="media-placeholder" style="height:120px; border:none; border-bottom:1px solid var(--border); background:rgba(0,0,0,0.4);">
            <span style="font-size:36px;">${emoji}</span>
          </div>
          <div style="padding:var(--space-4);">
            <div class="brand-card-title" style="font-size:15px;">${title}</div>
            <div class="brand-card-text" style="font-size:12px;">${desc}</div>
          </div>
        </div>`).join('')}
      </div>
    </div>

    <div class="section reveal">
      <span class="section-label">O QUE EVITAR</span>
      <div class="grid-3 stagger-children" style="margin-top:var(--space-4)">
        <div class="word-card word-ban">${IC.xmark} Azul genérico de CRM</div>
        <div class="word-card word-ban">${IC.xmark} Verde "eco" óbvio</div>
        <div class="word-card word-ban">${IC.xmark} Laranja + branco básico</div>
        <div class="word-card word-ban">${IC.xmark} Ilustrações cartoon de painéis</div>
        <div class="word-card word-ban">${IC.xmark} Gradients arco-íris</div>
        <div class="word-card word-ban">${IC.xmark} UI clara com sidebar genérica</div>
      </div>
    </div>
  `,

  tokens: () => `
    <div class="page-hero" style="position:relative; overflow:hidden;">
      <div class="section-number" style="font-size:140px; color:rgba(245,165,36,0.07); position:absolute; top:10px; right:5%;">TK</div>
      <span class="section-label">DESIGN TOKENS</span>
      <h2 class="section-title">Sistema de Tokens</h2><div class="video-showcase reveal-scale" style="margin:var(--space-6) auto;max-width:960px"><video data-autoplay-scroll loop muted playsinline style="width:100%;border-radius:16px;display:block;"><source src="/videos/tokens.mp4" type="video/mp4"></video></div>
      <p class="section-subtitle">Tokens de design são os átomos visuais que garantem consistência absoluta em todos os touchpoints da marca Sunny.</p>
      <div class="hero-scroll-cue"><span>EXPLORE</span><span>↓</span></div>
    </div>
    <div class="section reveal">
      <span class="section-label">SPACING SCALE</span>
      <div class="spacing-demo" style="margin-top:var(--space-4)">
        ${[['4px','space-1','16px'],['8px','space-2','24px'],['12px','space-3','32px'],['16px','space-4','40px'],['24px','space-6','56px'],['32px','space-8','72px'],['48px','space-12','96px'],['64px','space-16','120px'],['96px','space-24','160px']].map(([size,name,h]) => `<div class="spacing-block" style="width:${size};height:${h}">${name.replace('space-','')}</div>`).join('')}
      </div>
      <table class="token-table" style="margin-top:var(--space-6)">
        <thead><tr><th>Token</th><th>Value</th><th>Use</th></tr></thead>
        <tbody>
          ${[['--space-1','4px','Micro gaps, inline spacing'],['--space-2','8px','Tight element spacing'],['--space-3','12px','Small padding, compact cards'],['--space-4','16px','Standard padding'],['--space-6','24px','Section gaps, card padding'],['--space-8','32px','Section padding'],['--space-12','48px','Large section gaps'],['--space-16','64px','Page sections'],['--space-24','96px','Hero/manifesto blocks']].map(([t,v,u]) => `<tr><td><code>${t}</code></td><td>${v}</td><td>${u}</td></tr>`).join('')}
        </tbody>
      </table>
    </div>
    <div class="section reveal">
      <span class="section-label">BORDER RADIUS</span>
      <div class="bento-grid stagger-children" style="margin-top:var(--space-4)">
        ${[['8px','radius-sm','Buttons, inputs'],['12px','radius-md','Cards, panels'],['16px','radius-lg','Modals, large cards'],['24px','radius-xl','Hero containers'],['9999px','radius-full','Pills, badges, avatars']].map(([v,name,use]) => `<div class="glass-panel bento-span-1" style="text-align:center; padding:var(--space-6);"><div style="width:64px;height:64px;background:var(--surface-hover);border:2px solid var(--solar-flare);border-radius:${v};margin:0 auto var(--space-3);box-shadow:0 0 20px rgba(245,165,36,0.15);"></div><div class="brand-card-title">${name}</div><div class="brand-card-text">${v} — ${use}</div></div>`).join('')}
      </div>
    </div>
    <div class="section reveal">
      <span class="section-label">SHADOWS</span>
      <div class="bento-grid stagger-children" style="margin-top:var(--space-4)">
        ${[['shadow-sm','0 1px 2px rgba(0,0,0,0.3)','Subtle elevation'],['shadow-md','0 4px 6px -1px rgba(0,0,0,0.3)','Cards, dropdowns'],['shadow-lg','0 10px 15px -3px rgba(0,0,0,0.4)','Modals, popovers'],['shadow-glow','0 0 30px rgba(255,140,0,0.2)','Accent emphasis, CTAs']].map(([name,val,use]) => `<div class="glass-panel bento-span-1" style="text-align:center; padding:var(--space-6);"><div style="width:100%;height:80px;background:var(--surface);border-radius:var(--radius-md);box-shadow:${val};margin-bottom:var(--space-3)"></div><div class="brand-card-title">${name}</div><div class="brand-card-text">${use}</div></div>`).join('')}
      </div>
    </div>
    <div class="section reveal">
      <span class="section-label">ANIMATION TOKENS</span>
      <table class="token-table" style="margin-top:var(--space-4)">
        <thead><tr><th>Name</th><th>Duration</th><th>Easing</th><th>Use</th></tr></thead>
        <tbody>
          <tr><td><strong>Micro</strong></td><td><code>150ms</code></td><td>ease</td><td>Hover states, opacity</td></tr>
          <tr><td><strong>Fast</strong></td><td><code>200ms</code></td><td>ease-out</td><td>Tooltips, buttons</td></tr>
          <tr><td><strong>Normal</strong></td><td><code>300ms</code></td><td>ease</td><td>Cards, transitions</td></tr>
          <tr><td><strong>Enter</strong></td><td><code>500ms</code></td><td>cubic-bezier(0.16,1,0.3,1)</td><td>Page enter, reveals</td></tr>
          <tr><td><strong>Grand</strong></td><td><code>800ms</code></td><td>cubic-bezier(0.16,1,0.3,1)</td><td>Hero, manifesto</td></tr>
          <tr><td><strong>Infinite</strong></td><td><code>30s</code></td><td>linear</td><td>Particle rotation, ticker</td></tr>
        </tbody>
      </table>
    </div>
    <div class="section reveal">
      <span class="section-label">INTERACTIVE BUILDER</span>
      <h2 class="section-title">Design Tuner</h2>
      <p class="section-subtitle">Ajuste os *base tokens* da Sunny em tempo real na interface.</p>
      <div class="brand-card" style="margin-top:var(--space-4)">
        <label for="radius-slider" style="font-family:var(--font-mono);font-size:12px;color:var(--solar-flare);display:block;margin-bottom:8px;">Base Radius (<span id="radius-val">12</span>px)</label>
        <input type="range" id="radius-slider" min="0" max="40" value="12" style="width:100%;margin-bottom:24px;accent-color:var(--solar-flare);" oninput="document.documentElement.style.setProperty('--radius-md', this.value+'px'); document.getElementById('radius-val').innerText=this.value;">
        
        <label for="space-slider" style="font-family:var(--font-mono);font-size:12px;color:var(--solar-flare);display:block;margin-bottom:8px;">Card Spacing (<span id="space-val">24</span>px)</label>
        <input type="range" id="space-slider" min="8" max="64" value="24" style="width:100%;margin-bottom:24px;accent-color:var(--solar-flare);" oninput="document.documentElement.style.setProperty('--space-6', this.value+'px'); document.getElementById('space-val').innerText=this.value;">

        <div style="display:flex;gap:var(--space-6);margin-top:24px;flex-wrap:wrap">
           <button class="btn ui-btn-primary">Test Button</button>
           <button class="btn ui-btn-secondary">Secondary</button>
           <div class="brand-card">Test Nested Card</div>
        </div>
      </div>
    </div>
  `,

  typography: () => `
    <div class="page-hero" style="position:relative; overflow:hidden;">
      <div class="section-number" style="font-size:140px; color:rgba(245,165,36,0.07); position:absolute; top:10px; right:5%;">02</div>
      <span class="section-label">02 · TYPOGRAPHY</span>
      <h2 class="section-title" style="font-size:56px;">Type System</h2><div class="video-showcase reveal-scale" style="margin:var(--space-6) auto;max-width:960px"><video data-autoplay-scroll loop muted playsinline style="width:100%;border-radius:16px;display:block;"><source src="/videos/typography.mp4" type="video/mp4"></video></div>
      <p class="section-subtitle">Três famílias tipográficas formam a hierarquia da Sunny: Space Grotesk para impacto, Inter para interface, JetBrains Mono para dados.</p>
    </div>
    <div class="section reveal">
      <div class="type-specimen">
        <div class="type-family">BRAND TYPEFACE</div>
        <div class="type-display" style="font-family:var(--font-brand)">Space Grotesk</div>
        <div class="type-alphabet" style="font-family:var(--font-brand)">Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz</div>
        <div class="type-alphabet" style="font-family:var(--font-brand)">0 1 2 3 4 5 6 7 8 9 ! @ # $ % & * ( )</div>
        <div class="type-meta"><span>WEIGHTS: Medium 500, Bold 700</span><span>USE: Headlines, marketing, hero sections</span><span>KERNING: -0.02em</span></div>
      </div>
      <div class="type-specimen">
        <div class="type-family">UI TYPEFACE</div>
        <div class="type-display" style="font-family:var(--font-ui);font-size:56px">Inter</div>
        <div class="type-alphabet" style="font-family:var(--font-ui)">Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz</div>
        <div class="type-meta"><span>WEIGHTS: 400, 500, 600, 700</span><span>USE: Body text, UI, dashboard</span><span>OPTIMIZED FOR SCREENS</span></div>
      </div>
      <div class="type-specimen">
        <div class="type-family">MONO TYPEFACE</div>
        <div class="type-display" style="font-family:var(--font-mono);font-size:48px">JetBrains Mono</div>
        <div class="type-alphabet" style="font-family:var(--font-mono);font-size:18px">Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz</div>
        <div class="type-meta"><span>WEIGHTS: 400, 500</span><span>USE: Código, dados, timestamps, IDs</span><span>LIGATURES OPTIONAL</span></div>
      </div>
    </div>
    <div class="section reveal">
      <span class="section-label">HIERARQUIA TIPOGRÁFICA</span>
      <table class="token-table">
        <thead><tr><th>Nível</th><th>Typeface</th><th>Weight</th><th>Size</th><th>Line Height</th><th>Spacing</th></tr></thead>
        <tbody>
          <tr><td><strong>Display</strong></td><td>Space Grotesk</td><td>700</td><td><code>72px</code></td><td>1.0</td><td>-0.03em</td></tr>
          <tr><td><strong>H1</strong></td><td>Space Grotesk</td><td>700</td><td><code>48px</code></td><td>1.1</td><td>-0.02em</td></tr>
          <tr><td><strong>H2</strong></td><td>Space Grotesk</td><td>700</td><td><code>36px</code></td><td>1.15</td><td>-0.02em</td></tr>
          <tr><td><strong>H3</strong></td><td>Space Grotesk</td><td>500</td><td><code>28px</code></td><td>1.2</td><td>-0.01em</td></tr>
          <tr><td><strong>H4</strong></td><td>Inter</td><td>600</td><td><code>22px</code></td><td>1.3</td><td>0</td></tr>
          <tr><td><strong>Body L</strong></td><td>Inter</td><td>400</td><td><code>18px</code></td><td>1.6</td><td>0</td></tr>
          <tr><td><strong>Body</strong></td><td>Inter</td><td>400</td><td><code>16px</code></td><td>1.5</td><td>0</td></tr>
          <tr><td><strong>Body S</strong></td><td>Inter</td><td>400</td><td><code>14px</code></td><td>1.5</td><td>0</td></tr>
          <tr><td><strong>Caption</strong></td><td>Inter</td><td>500</td><td><code>12px</code></td><td>1.4</td><td>0.02em</td></tr>
          <tr><td><strong>Mono</strong></td><td>JetBrains Mono</td><td>400</td><td><code>14px</code></td><td>1.5</td><td>0</td></tr>
        </tbody>
      </table>
    </div>
  `,

  colors: () => `
    <div class="page-hero" style="position:relative; overflow:hidden;">
      <div class="section-number" style="font-size:140px; color:rgba(245,165,36,0.07); position:absolute; top:10px; right:5%;">03</div>
      <span class="section-label">03 · COLOR SYSTEM</span>
      <h2 class="section-title" style="font-size:56px;">Solar Palette</h2><div class="video-showcase reveal-scale" style="margin:var(--space-6) auto;max-width:960px"><video data-autoplay-scroll loop muted playsinline style="width:100%;border-radius:16px;display:block;"><source src="/videos/colors.mp4" type="video/mp4"></video></div>
      <p class="section-subtitle">A paleta reflete o arquétipo Ruler Magnânimo: fundos profundos como a noite + accent solar que emana poder e calor.</p>
    </div>
    <div class="section reveal">
      <span class="section-label">PRIMARY</span>
      <div class="swatch-grid stagger-children" style="margin-top:var(--space-4)">
        ${swatch('Solar Flare','#F5A524','245, 165, 36','Accent primário, CTAs')}
        ${swatch('Dawn Amber','#E8740C','232, 116, 12','Hover states, gradients')}
        ${swatch('Warm Yellow','#FACC15','250, 204, 21','Highlights, badges')}
        ${swatch('Command Black','#09090B','9, 9, 11','Background primário')}
        ${swatch('Clean White','#FAFAFA','250, 250, 250','Texto primário')}
      </div>
    </div>
    <div class="section reveal">
      <span class="section-label">SECONDARY</span>
      <div class="swatch-grid stagger-children" style="margin-top:var(--space-4)">
        ${swatch('Horizon Blue','#38BDF8','56, 189, 248','Info, links, dados')}
        ${swatch('Eclipse Violet','#8B5CF6','139, 92, 246','Premium, enterprise')}
      </div>
    </div>
    <div class="section reveal">
      <span class="section-label">NEUTRALS</span>
      <div class="swatch-grid stagger-children" style="margin-top:var(--space-4)">
        ${swatch('Deep Space','#0A0A0F','10, 10, 15','Backgrounds')}
        ${swatch('Surface','#18181B','24, 24, 27','Cards, surfaces')}
        ${swatch('Surface Hover','#27272A','39, 39, 42','Hover')}
        ${swatch('Border','#3F3F46','63, 63, 70','Borders')}
        ${swatch('Muted','#71717A','113, 113, 122','Texto secundário')}
        ${swatch('Light','#A1A1AA','161, 161, 170','Texto terciário')}
      </div>
    </div>
    <div class="section reveal">
      <span class="section-label">SEMANTIC</span>
      <div class="swatch-grid stagger-children" style="margin-top:var(--space-4)">
        ${swatch('Harvest Green','#22C55E','34, 197, 94','Sucesso')}
        ${swatch('Eclipse Red','#EF4444','239, 68, 68','Erros')}
        ${swatch('Flare Warning','#EAB308','234, 179, 8','Avisos')}
        ${swatch('Horizon Info','#38BDF8','56, 189, 248','Info')}
      </div>
    </div>
    <div class="section reveal">
      <span class="section-label">GRADIENTS</span>
      <div style="display:flex;flex-direction:column;gap:var(--space-4);margin-top:var(--space-4)">
        <div class="gradient-strip" style="background:linear-gradient(135deg, #F5A524, #E8740C)"><span class="gradient-strip-label">SOLAR GRADIENT</span></div>
        <div class="gradient-strip" style="background:linear-gradient(135deg, #FACC15, #F5A524)"><span class="gradient-strip-label">SUNNY GRADIENT</span></div>
        <div class="gradient-strip" style="background:linear-gradient(135deg, #E8740C, #DC2626)"><span class="gradient-strip-label">DAWN GRADIENT</span></div>
        <div class="gradient-strip" style="background:linear-gradient(135deg, #38BDF8, #8B5CF6)"><span class="gradient-strip-label">HORIZON GRADIENT</span></div>
        <div class="gradient-strip" style="background:radial-gradient(circle, rgba(245,165,36,0.3) 0%, #0A0A0F 70%)"><span class="gradient-strip-label">SOLAR GLOW</span></div>
      </div>
    </div>
    <div class="section reveal">
      <span class="section-label">PALETA PRINCIPAL — 4 CORES</span>
      <p class="section-subtitle" style="margin-bottom:var(--space-4)">As 4 cores base da marca: laranja, amarelo, branco e preto.</p>
      <div style="display:flex;height:80px;border-radius:var(--radius-md);overflow:hidden">
        <div style="flex:1;background:#F5A524;display:flex;align-items:center;justify-content:center;font-family:var(--font-mono);font-size:12px;color:#09090B;font-weight:600">#F5A524</div>
        <div style="flex:1;background:#FACC15;display:flex;align-items:center;justify-content:center;font-family:var(--font-mono);font-size:12px;color:#09090B;font-weight:600">#FACC15</div>
        <div style="flex:1;background:#FAFAFA;display:flex;align-items:center;justify-content:center;font-family:var(--font-mono);font-size:12px;color:#09090B;font-weight:600">#FAFAFA</div>
        <div style="flex:1;background:#09090B;display:flex;align-items:center;justify-content:center;font-family:var(--font-mono);font-size:12px;color:#FAFAFA;font-weight:600">#09090B</div>
      </div>
    </div>
  `,

  logo: () => `
    <div class="page-hero" style="position:relative; overflow:hidden;">
      <div class="section-number" style="font-size:140px; color:rgba(245,165,36,0.07); position:absolute; top:10px; right:5%;">04</div>
      <span class="section-label">04 · LOGO SYSTEM</span>
      <h2 class="section-title" style="font-size:56px;">Logo & Brand Mark</h2><div class="video-showcase reveal-scale" style="margin:var(--space-6) auto;max-width:960px"><video data-autoplay-scroll loop muted playsinline style="width:100%;border-radius:16px;display:block;"><source src="/videos/logo-reveal.mp4" type="video/mp4"></video></div>
      <p class="section-subtitle">O logomark Sunny combina o sol estilizado com raios pontiagudos e a letra S integrada no centro — representando energia solar, inteligência e velocidade.</p>
    </div>
    <div class="section reveal">
      <span class="section-label">NEW: VECTOR LOGO EXPLORATIONS</span>
      <p class="section-subtitle" style="margin-bottom:var(--space-6)">Conforme solicitado, geramos novas opções puramente vetoriais (SVG) focadas em minimalismo, impacto digital e simetria solar.</p>
      
      <div class="grid-3 stagger-children">
        <div class="brand-card" style="text-align:center">
          <svg viewBox="0 0 100 100" class="logo-variant-svg" style="margin-bottom:var(--space-4)" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="vgrid1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#FACC15"/><stop offset="100%" stop-color="#E8740C"/></linearGradient>
            </defs>
            <circle cx="50" cy="50" r="45" fill="none" stroke="url(#vgrid1)" stroke-width="2" stroke-dasharray="6 6">
              <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="30s" repeatCount="indefinite"/>
            </circle>
            <path d="M 60 25 L 35 52 L 52 52 L 40 75 L 65 48 L 48 48 Z" fill="url(#vgrid1)"/>
          </svg>
          <div class="brand-card-title">01 · O Raio Solar</div>
          <div class="brand-card-text">O S central formando um relâmpago contínuo. Nosso logo primário para o Hero. Velocidade pura.</div>
        </div>
        
        <div class="brand-card" style="text-align:center">
          <svg viewBox="0 0 100 100" class="logo-variant-svg" style="margin-bottom:var(--space-4)" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="vgrid2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#F5A524"/><stop offset="100%" stop-color="#DC2626"/></linearGradient>
            </defs>
            <rect x="20" y="20" width="60" height="60" rx="16" fill="var(--surface)" stroke="url(#vgrid2)" stroke-width="2"/>
            <path d="M 60 35 L 45 35 C 38 35, 38 45, 45 45 L 55 45 C 62 45, 62 55, 55 55 L 40 55" fill="none" stroke="url(#vgrid2)" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="65" cy="65" r="5" fill="#FACC15">
              <animate attributeName="opacity" values="1;0.4;1" dur="2s" repeatCount="indefinite"/>
            </circle>
          </svg>
          <div class="brand-card-title">02 · The App Block</div>
          <div class="brand-card-text">Container quadrado com cantos arredondados, um S geométrico e um "ponto de ignição" solar.</div>
        </div>

        <div class="brand-card" style="text-align:center">
          <svg viewBox="0 0 100 100" class="logo-variant-svg" style="margin-bottom:var(--space-4)" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="vgrid3" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#FACC15"/><stop offset="100%" stop-color="#F5A524"/></linearGradient>
            </defs>
            <circle cx="50" cy="50" r="35" fill="#18181B" stroke="url(#vgrid3)" stroke-width="1"/>
            <path d="M 65 30 C 45 10, 25 35, 50 50 C 75 65, 55 90, 35 70" fill="none" stroke="url(#vgrid3)" stroke-width="10" stroke-linecap="round"/>
          </svg>
          <div class="brand-card-title">03 · A Onda Solar</div>
          <div class="brand-card-text">O S moldado por uma onda de energia contínua. Transmite um tom mais fluido e magnânimo.</div>
        </div>
      </div>
    </div>
    <div class="section reveal">
      <span class="section-label">LOGO CONSTRUCTION (PAST EXPLORATION)</span>
      <img src="/images/logo-construction.png" alt="Logo Construction Guide" class="logo-showcase-img" style="margin-top:var(--space-4)" />
    </div>
    <div class="section reveal">
      <span class="section-label">LOGO VARIATIONS — CORES</span>
      <p class="section-subtitle" style="margin-bottom:var(--space-4)">Variações em laranja, amarelo, branco e preto para todos os contextos de aplicação.</p>
      <img src="/images/logo-variations.png" alt="Logo Color Variations" class="logo-showcase-img" />
    </div>
    <div class="section reveal">
      <span class="section-label">LOGO SEMIOTICS</span>
      <div class="grid-3 stagger-children" style="margin-top:var(--space-4)">
        <div class="brand-card"><div class="brand-card-title">☀️ Sol Estilizado</div><div class="brand-card-text">Raios triangulares representam energia que irradia. O sol nunca se apaga — assim como o SDR Agent.</div></div>
        <div class="brand-card"><div class="brand-card-title">S Central</div><div class="brand-card-text">Sunny, Solar, Speed, Sales — a letra âncora que conecta nome e símbolo.</div></div>
        <div class="brand-card"><div class="brand-card-title">⚡ Raios</div><div class="brand-card-text">Velocidade de resposta, IA, eletricidade e poder. Formato pontiagudo = precisão.</div></div>
      </div>
    </div>
    <div class="section reveal">
      <span class="section-label">CORES DO LOGO</span>
      <div class="grid-4 stagger-children" style="margin-top:var(--space-4)">
        <div class="brand-card" style="text-align:center;border-top:3px solid #F5A524"><div class="brand-card-title" style="color:#F5A524">Solar Flare</div><div class="brand-card-text">Logo primário<br><code style="font-family:var(--font-mono);color:var(--horizon-blue)">#F5A524</code></div></div>
        <div class="brand-card" style="text-align:center;border-top:3px solid #E8740C"><div class="brand-card-title" style="color:#E8740C">Dawn Amber</div><div class="brand-card-text">Variação quente<br><code style="font-family:var(--font-mono);color:var(--horizon-blue)">#E8740C</code></div></div>
        <div class="brand-card" style="text-align:center;border-top:3px solid #FAFAFA"><div class="brand-card-title">Clean White</div><div class="brand-card-text">Fundo escuro<br><code style="font-family:var(--font-mono);color:var(--horizon-blue)">#FAFAFA</code></div></div>
        <div class="brand-card" style="text-align:center;border-top:3px solid #71717A"><div class="brand-card-title" style="color:#71717A">Command Black</div><div class="brand-card-text">Fundo claro/solar<br><code style="font-family:var(--font-mono);color:var(--horizon-blue)">#09090B</code></div></div>
      </div>
    </div>
    <div class="section reveal">
      <span class="section-label">CLEAR SPACE & MINIMUM SIZE</span>
      <div class="grid-2 stagger-children" style="margin-top:var(--space-4)">
        <div class="brand-card"><div class="brand-card-title">Clear Space</div><div class="brand-card-text">Mínimo: <strong>1x</strong> a altura do ícone em todos os lados<br>Recomendado: <strong>1.5x</strong> para máximo impacto</div></div>
        <div class="brand-card"><div class="brand-card-title">Minimum Size</div><div class="brand-card-text">Digital: <strong>24px</strong> (icon only), <strong>32px</strong> (full lockup)<br>Print: <strong>10mm</strong> (icon only), <strong>15mm</strong> (full lockup)</div></div>
      </div>
    </div>
    <div class="section reveal">
      <span class="section-label">LOGO DON'TS</span>
      <div class="grid-3 stagger-children" style="margin-top:var(--space-4)">
        ${['Nunca esticar ou distorcer','Nunca rotacionar o ícone','Nunca aplicar drop shadow','Nunca usar em fundo concorrente','Nunca mudar proporções','Nunca usar cores fora da paleta','Nunca adicionar stroke externo','Nunca abaixo do tamanho mínimo','Nunca usar como pattern repetido'].map(d => `<div class="word-card word-ban">${IC.xmark} ${d}</div>`).join('')}
      </div>
    </div>
  `,

  manifesto: () => `
    <div class="manifesto-block mesh-bg">
      <div class="video-showcase reveal-scale" style="margin-bottom:var(--space-6);max-width:960px;margin-left:auto;margin-right:auto;"><video data-autoplay-scroll loop muted playsinline style="width:100%;border-radius:16px;display:block;"><source src="/videos/activation.mp4" type="video/mp4"></video></div><h1 class="manifesto-title reveal-scale">O SOL NÃO<br>ESPERA.</h1>
      <div class="manifesto-text reveal">
        Enquanto você dorme, leads chegam.<br>
        Enquanto você almoça, propostas esfriam.<br>
        Enquanto você dirige até o cliente, cinco oportunidades morrem na caixa de entrada.<br><br>
        O mercado solar brasileiro cresce <strong>30% ao ano</strong>.<br>
        Mas <strong>70% dos leads</strong> morrem antes da primeira ligação.<br><br>
        Isso não é ineficiência.<br>
        <strong>É negligência operacional.</strong><br><br>
        Nós somos os integradores que se recusam a aceitar isso.<br>
        Os que operam com inteligência, não com improvisação.<br>
        Os que construíram <em>torres de comando</em> enquanto outros montaram planilhas.<br><br>
        Nosso SDR não tira férias.<br>
        Nosso pipeline não mente.<br>
        Nosso follow-up não esquece.<br><br>
        Nós somos a <strong>Sunny</strong>.<br>
        E <strong>nenhum lead morre ao sol</strong>.
      </div>
    </div>
    <div class="section reveal">
      <span class="section-label">BRAND SOUL CANVAS</span>
      <h2 class="section-title">Core Tension</h2>
      <div class="brand-quote"><p>"O mercado solar brasileiro explode em crescimento — mas a maioria das integradoras opera como se fosse 2010."</p></div>
    </div>
    <div class="section reveal">
      <span class="section-label">BRAND SOUL STATEMENT</span>
      <div class="brand-quote"><p>"Sunny acredita que nenhuma oportunidade de energia limpa deveria morrer por falta de atenção humana. Nós criamos inteligência que nunca dorme para que cada lead receba a resposta que merece — rápida, qualificada e humana."</p></div>
    </div>
    <div class="section reveal">
      <span class="section-label">SHARED ENEMY</span>
      <h2 class="section-title">A Inação Comercial</h2>
      <div class="bento-grid stagger-children" style="margin-top:var(--space-4)">
        <div class="glass-panel bento-span-1" style="padding:var(--space-6);">
          <div class="brand-card-title" style="margin-bottom:var(--space-3);">Manifestações</div>
          <div class="brand-card-text">Lead ignorado por 48h · Reunião não agendada · Proposta fria no "vou ver" · Triagem manual exaustiva.</div>
        </div>
        <div class="glass-panel bento-span-1" style="padding:var(--space-6); background:linear-gradient(135deg, rgba(239,68,68,0.08), rgba(239,68,68,0.02));">
          <div class="brand-card-title" style="margin-bottom:var(--space-3);">Custo da Inação</div>
          <div class="brand-card-text">Um integrador médio joga no lixo <strong style="color:var(--eclipse-red)">R$ 35.000 mensais</strong> em oportunidades perdidas por falta de follow-up rápido.</div>
        </div>
        <div class="glass-panel bento-span-2" style="padding:var(--space-6); border-top:2px solid var(--success); background:linear-gradient(135deg, rgba(34,197,94,0.06), rgba(34,197,94,0.01));">
          <div class="brand-card-title" style="margin-bottom:var(--space-3);">Retorno (ROI) Sunny</div>
          <div class="brand-card-text">Recuperação de <strong style="color:var(--success)">R$ 420.000/ano</strong> por operação. Economia de <strong>120 horas operacionais</strong> e redução de 45% do CAC.</div>
        </div>
      </div>
    </div>
    <div class="section reveal">
      <span class="section-label">BRAND PROMISE CHAIN</span>
      <div class="ladder" style="margin-top:var(--space-4)">
        <div class="ladder-step"><div class="ladder-level" style="color:var(--horizon-blue)">FUNCIONAL</div><div class="ladder-content">"Seu lead é respondido em 15 minutos, 24/7."</div></div>
        <div class="ladder-step"><div class="ladder-level" style="color:var(--eclipse-violet)">EMOCIONAL</div><div class="ladder-content">"Você nunca mais perde uma venda por falta de follow-up."</div></div>
        <div class="ladder-step"><div class="ladder-level" style="color:var(--dawn-amber)">IDENTITÁRIO</div><div class="ladder-content">"Você é o integrador que opera com inteligência de guerra."</div></div>
        <div class="ladder-step"><div class="ladder-level" style="color:var(--solar-flare)">TRANSFORMACIONAL</div><div class="ladder-content">"Sua empresa comercial está à altura do futuro que você vende."</div></div>
      </div>
    </div>
    <div class="section reveal">
      <span class="section-label">NAMING ARCHITECTURE</span>
      <div class="grid-auto stagger-children" style="margin-top:var(--space-4)">
        ${[['Sunny','Master Brand','Marca mãe'],['Sunny OS','Product','Sistema completo'],['Sunny Agent','SDR Feature','SDR autônomo de IA'],['Sunny Pipeline','CRM Feature','CRM solar'],['Sunny Command','Dashboard','Torre de Comando'],['Sunny Insights','Analytics','Relatórios'],['Sunny Enterprise','Enterprise','Multi-tenant'],['Sunny Circle','Community','Comunidade']].map(([n,t,d]) => `<div class="brand-card"><div class="value-num">${t.toUpperCase()}</div><div class="brand-card-title">${n}</div><div class="brand-card-text">${d}</div></div>`).join('')}
      </div>
    </div>
  `,

  positioning: () => `
    <div class="page-hero" style="position:relative; overflow:hidden;">
      <div class="section-number" style="font-size:140px; color:rgba(245,165,36,0.07); position:absolute; top:10px; right:5%;">06</div>
      <span class="section-label">06 · POSITIONING</span>
      <h2 class="section-title" style="font-size:56px;">Onliness Statement</h2><div class="video-showcase reveal-scale" style="margin:var(--space-6) auto;max-width:960px"><video data-autoplay-scroll loop muted playsinline style="width:100%;border-radius:16px;display:block;"><source src="/videos/dashboard.mp4" type="video/mp4"></video></div>
      <div class="brand-quote" style="margin-top:var(--space-6)"><p>"Sunny é o ÚNICO sistema de inteligência comercial solar que transforma leads ignorados em reuniões qualificadas usando um SDR Agent com IA, eliminando a morte comercial causada pela inação humana."</p></div>
    </div>
    <div class="section reveal">
      <span class="section-label">BRAND GAP ANALYSIS</span>
      <div style="margin-top:var(--space-6);display:flex;flex-direction:column;gap:var(--space-4)">
        ${[['Differentiate',8],['Collaborate',3],['Innovate',9],['Validate',2],['Cultivate',4]].map(([name,score]) => `
        <div class="archetype-bar">
          <span class="archetype-label">${name}</span>
          <div class="archetype-track"><div class="archetype-fill" data-width="${score*10}%" style="width:0;background:var(--gradient-solar)"></div></div>
          <span class="archetype-pct">${score}/10</span>
        </div>`).join('')}
      </div>
    </div>
    <div class="section reveal">
      <span class="section-label">COMPETITIVE ALTERNATIVES</span>
      <table class="token-table" style="margin-top:var(--space-4)">
        <thead><tr><th>#</th><th>Alternativa</th><th>Faz bem</th><th>Faz mal</th></tr></thead>
        <tbody>
          ${[['1','Aster','CRM solar, propostas auto','Sem SDR Agent'],['2','Auvo','Gestão equipes externas','Não é CRM vendas'],['3','Azume','Geração contratos','Sem qualificação IA'],['4','Groner CRM','Específico solar','UI datada, sem IA'],['5','SolarMarket','Marketplace + CRM','Foco marketplace'],['6','SolarZ','Monitoramento','Pós-venda apenas'],['7','Solaryum','Propostas integradas','Sem SDR'],['8','Sunbase','Referência int.','Não adaptado BR'],['9','Suns Brasil','CRM solar BR','Sem diferencial']].map(([n,name,good,bad]) => `<tr><td><strong>${n}</strong></td><td><strong>${name}</strong></td><td>${good}</td><td>${bad}</td></tr>`).join('')}
        </tbody>
      </table>
    </div>
    <div class="section reveal">
      <span class="section-label">CATEGORY</span>
      <div class="brand-quote"><p>AI-Powered Solar Sales Intelligence</p><cite>Categoria nova. Não somos "CRM Solar" (commodity). Não somos "chatbot" (simplista).</cite></div>
    </div>
  `,

  contraste: () => `
    <div class="page-hero" style="position:relative; overflow:hidden;">
      <div class="section-number" style="font-size:140px; color:rgba(245,165,36,0.07); position:absolute; top:10px; right:5%;">VS</div>
      <span class="section-label">CONTRASTE COMPETITIVO</span>
      <h2 class="section-title" style="font-size:56px;">Onde Sunny Está</h2>
      <p class="section-subtitle">Mapa de posicionamento visual que mostra onde a Sunny se diferencia radicalmente de todas as alternativas do mercado.</p>
      <div class="hero-stat-row">
        <div class="hero-stat"><div class="hero-stat-value">9</div><div class="hero-stat-label">Concorrentes Mapeados</div></div>
        <div class="hero-stat"><div class="hero-stat-value">0</div><div class="hero-stat-label">Com SDR Agent IA</div></div>
        <div class="hero-stat"><div class="hero-stat-value">1°</div><div class="hero-stat-label">Solar-Native BR</div></div>
      </div>
      <div class="hero-scroll-cue"><span>EXPLORE</span><span>↓</span></div>
    </div>
    <div class="section reveal">
      <span class="section-label">MAPA DE POSICIONAMENTO</span>
      <div class="competitive-map" style="margin-top:var(--space-6)">
        <div class="competitive-map-axis-h"></div>
        <div class="competitive-map-axis-v"></div>
        <div class="competitive-map-label" style="top:8%;left:50%;transform:translateX(-50%)">+ INTELIGÊNCIA</div>
        <div class="competitive-map-label" style="bottom:8%;left:50%;transform:translateX(-50%)">− INTELIGÊNCIA</div>
        <div class="competitive-map-label" style="left:8%;top:50%;transform:translateY(-50%) rotate(-90deg)">GENÉRICO</div>
        <div class="competitive-map-label" style="right:8%;top:50%;transform:translateY(-50%) rotate(90deg)">SOLAR-FIRST</div>
        <div class="competitive-map-sun" style="top:18%;left:78%">
          <div class="competitive-map-dot-label" style="color:var(--solar-flare);font-weight:700;font-size:11px">SUNNY</div>
        </div>
        ${[['Aster','28%','68%','var(--muted)'],['Groner','62%','60%','var(--muted)'],['SolarZ','38%','72%','var(--border)'],['Auvo','58%','30%','var(--border)'],['Azume','45%','55%','var(--muted)'],['HubSpot','30%','20%','var(--border)'],['RD Station','42%','25%','var(--border)'],['Sunbase','25%','65%','var(--muted)']].map(([name,top,left,color]) => `<div class="competitive-map-dot" style="top:${top};left:${left};background:${color}"><div class="competitive-map-dot-label">${name}</div></div>`).join('')}
      </div>
    </div>
    <div class="section reveal">
      <span class="section-label">PORQUE GANHAMOS</span>
      <div class="grid-3 stagger-children" style="margin-top:var(--space-6)">
        <div class="brand-card" style="border-top:3px solid var(--solar-flare)">
          <div class="brand-card-title">SDR Agent IA</div>
          <div class="brand-card-text">Nenhum concorrente tem um agente SDR autônomo que responde, qualifica e agenda em < 15 min, 24/7.</div>
          <div class="tag" style="margin-top:12px">EXCLUSIVO SUNNY</div>
        </div>
        <div class="brand-card" style="border-top:3px solid var(--solar-flare)">
          <div class="brand-card-title">Solar-Native</div>
          <div class="brand-card-text">Construído para integradores solares desde o dia 1. Vocabulário, métricas e fluxos do setor. Não é CRM genérico adaptado.</div>
          <div class="tag" style="margin-top:12px">VERTICAL</div>
        </div>
        <div class="brand-card" style="border-top:3px solid var(--solar-flare)">
          <div class="brand-card-title">Torre de Comando</div>
          <div class="brand-card-text">Pipeline real-time com visão soberana. Não é dashboard passivo — é centro de operações comerciais que gera ação.</div>
          <div class="tag" style="margin-top:12px">DIFERENCIAL</div>
        </div>
      </div>
    </div>
    <div class="section reveal">
      <span class="section-label">O QUE NÃO SOMOS</span>
      <div class="grid-2 stagger-children" style="margin-top:var(--space-4)">
        ${[['CRM Solar','CRMs organizam dados. Sunny gera ação. Não somos repositório — somos motor comercial.'],['Chatbot','Chatbots respondem perguntas. Sunny qualifica, agenda e converte. Não é FAQ — é SDR inteligente.'],['Plataforma de Marketing','Marketing gera leads. Sunny os converte. Não competimos com tráfego — completamos ele.'],['Ferramenta','Ferramentas exigem operação. Sunny opera sozinha. Não é mais uma aba — é o copiloto.']].map(([title,desc]) => `<div class="brand-card"><div class="brand-card-title" style="color:var(--error)">≠ ${title}</div><div class="brand-card-text">${desc}</div></div>`).join('')}
      </div>
    </div>
  `,

  archetypes: () => `
    <div class="page-hero" style="position:relative; overflow:hidden;">
      <div class="section-number" style="font-size:140px; color:rgba(245,165,36,0.07); position:absolute; top:10px; right:5%;">07</div>
      <span class="section-label">07 · ARCHETYPES</span>
      <h2 class="section-title" style="font-size:56px;">Ruler Magnânimo</h2>
      <p class="section-subtitle">Sunny é o Ruler Magnânimo: soberano, transformador, generoso.</p>
    </div>
    <div class="section reveal">
      <div style="display:flex;flex-direction:column;gap:var(--space-4)">
        ${[['The Ruler','60','var(--solar-flare)','Controle, ordem, comando. "Torre de Comando"'],['The Magician','25','var(--eclipse-violet)','Transformar. Leads mortos → Reuniões'],['The Caregiver','15','var(--horizon-blue)','"Nenhum lead morre" = cuidado']].map(([name,pct,color,desc]) => `
        <div class="archetype-bar">
          <span class="archetype-label">${name}</span>
          <div class="archetype-track"><div class="archetype-fill" data-width="${pct}%" style="width:0;background:${color}"></div></div>
          <span class="archetype-pct">${pct}%</span>
        </div>
        <p style="color:var(--light);font-size:14px;padding-left:160px;margin-top:-8px;margin-bottom:8px">${desc}</p>`).join('')}
      </div>
    </div>
    <div class="section reveal">
      <span class="section-label">BRAND VALUES</span>
      <div class="grid-auto stagger-children" style="margin-top:var(--space-4)">
        ${[['01','Intolerância à Inação','Cada minuto sem resposta é uma venda morrendo.','≠ "Vemos e depois agimos"'],['02','Magnanimidade Operacional','Grandioso onde o mercado aceita medíocre.','≠ "MVP é suficiente"'],['03','Clareza Solar','Zero ruído. Cada dado responde uma pergunta real.','≠ "Mais dados = melhor"'],['04','Soberania do Integrador','A IA amplifica. Nunca substitui.','≠ "A IA decide por você"'],['05','Velocidade com Fundação','Rápido E robusto.','≠ "Rápido = superficial"']].map(([n,name,def,anti]) => `<div class="value-card"><div class="value-num">${n}</div><div class="value-name">${name}</div><div class="value-def">${def}</div><div class="value-anti">${anti}</div></div>`).join('')}
      </div>
    </div>
    <div class="section reveal">
      <span class="section-label">BRAND PERSONALITY TRAITS</span>
      <div class="grid-auto stagger-children" style="margin-top:var(--space-4)">
        ${[['Comandante','Autoridade. Confiança absoluta.','Não é arrogante'],['Magnânima','Generosa com valor.','Não é desesperada'],['Precisa','Números exatos. Tempos exatos.','Não é burocrática'],['Incansável','24/7. Sem folga.','Não é robótica'],['Luminosa','Clareza onde havia escuridão.','Não é ingênua']].map(([name,desc,not]) => `<div class="brand-card"><div class="brand-card-title">${name}</div><div class="brand-card-text">${desc}</div><div class="value-anti" style="margin-top:8px">${not}</div></div>`).join('')}
      </div>
    </div>
  `,

  brandscript: () => `
    <div class="page-hero" style="position:relative; overflow:hidden;">
      <div class="section-number" style="font-size:140px; color:rgba(245,165,36,0.07); position:absolute; top:10px; right:5%;">BS</div>
      <span class="section-label">BRANDSCRIPT</span>
      <h2 class="section-title" style="font-size:56px;">StoryBrand Framework</h2>
      <p class="section-subtitle">A narrativa de venda da Sunny estruturada no framework StoryBrand de Donald Miller. O cliente é o herói. Sunny é o guia.</p>
      <div class="hero-scroll-cue"><span>THE 7 ELEMENTS</span><span>↓</span></div>
    </div>
    <div class="section reveal">
      <span class="section-label">THE 7 ELEMENTS</span>
      <div class="timeline" style="margin-top:var(--space-6)">
        <div class="timeline-item">
          <div class="timeline-item-title" style="color:var(--solar-flare)">1. O HERÓI (Cliente)</div>
          <div class="timeline-item-text">Integrador solar que investe em marketing e gera leads, mas perde a maioria por falta de follow-up rápido.</div>
        </div>
        <div class="timeline-item">
          <div class="timeline-item-title" style="color:var(--error)">2. O PROBLEMA</div>
          <div class="timeline-item-text"><strong>Externo:</strong> Leads demoram 48h+ para resposta.<br><strong>Interno:</strong> "Será que estou jogando dinheiro de marketing fora?"<br><strong>Filosófico:</strong> Nenhuma oportunidade de energia limpa deveria morrer por negligência.</div>
        </div>
        <div class="timeline-item">
          <div class="timeline-item-title" style="color:var(--warm-yellow)">3. O GUIA (Sunny)</div>
          <div class="timeline-item-text">Sunny entra como o guia com empatia ("sabemos como dói perder vendas") e autoridade (SDR Agent com IA que opera 24/7).</div>
        </div>
        <div class="timeline-item">
          <div class="timeline-item-title" style="color:var(--horizon-blue)">4. O PLANO</div>
          <div class="timeline-item-text">3 passos simples: <strong>① Conecte seus canais</strong> → <strong>② O Agent qualifica em < 15min</strong> → <strong>③ Você só vende.</strong></div>
        </div>
        <div class="timeline-item">
          <div class="timeline-item-title" style="color:var(--eclipse-violet)">5. CALLS TO ACTION</div>
          <div class="timeline-item-text"><strong>Direto:</strong> "Agende sua demo gratuita"<br><strong>Transicional:</strong> "Veja quanto está perdendo" (calculadora ROI)</div>
        </div>
        <div class="timeline-item">
          <div class="timeline-item-title" style="color:var(--error)">6. FRACASSO (Evitar)</div>
          <div class="timeline-item-text">Continuar perdendo 70% dos leads. CAC insustentável. Equipe exausta. Pipeline opaco. Concorrentes mais ágeis vencem.</div>
        </div>
        <div class="timeline-item">
          <div class="timeline-item-title" style="color:var(--success)">7. SUCESSO (Conquistar)</div>
          <div class="timeline-item-text">CAC -45%. +R$35k/mês. 120h liberadas. Pipeline crystal-clear. A operação funciona enquanto você dorme. Você é o integrador do futuro.</div>
        </div>
      </div>
    </div>
    <div class="section reveal">
      <span class="section-label">ONE-LINER</span>
      <div class="brand-quote"><p>"A maioria das integradoras perde 70% dos leads por falta de follow-up. Sunny é o SDR Agent que responde em 15 minutos, 24/7, para que nenhum lead morra ao sol."</p></div>
    </div>
  `,

  narrative: () => `
    <div class="page-hero" style="position:relative; overflow:hidden;">
      <div class="section-number" style="font-size:140px; color:rgba(245,165,36,0.07); position:absolute; top:10px; right:5%;">08</div>
      <span class="section-label">08 · NARRATIVE & VOICE</span>
      <h2 class="section-title" style="font-size:56px;">Story Arc — Hero's Journey</h2>
    </div>
    <div class="section reveal">
      <div class="journey-cards stagger-children">
        <div class="journey-card"><div class="journey-icon">${IC.moon}</div><div class="journey-act">ATO 1 — O PROBLEMA</div><div class="journey-title">Desperdício</div><div class="journey-text">"Você investe R$10K e atrai 200 leads a R$50 cada. Mas 140 morrem sem resposta, e seu CAC evapora silenciosamente."</div></div>
        <div class="journey-card" style="border-color:var(--solar-flare)"><div class="journey-icon">${IC.sun}</div><div class="journey-act">ATO 2 — A TRANSFORMAÇÃO</div><div class="journey-title">Ação Rápida</div><div class="journey-text">"O SDR Agent entra em ação em menos de 15 minutos, 24/7. Economize 120 horas/mês da sua equipe, qualificando apenas os quentes."</div></div>
        <div class="journey-card" style="border-color:var(--success)"><div class="journey-icon">${IC.sunrise}</div><div class="journey-act">ATO 3 — O NOVO MUNDO</div><div class="journey-title">Colheita Garantida</div><div class="journey-text">"Seu CAC cai 45%. A operação aumenta a receita R$35K a cada mês, e sua equipe foca unicamente em vender, não em garimpar contatos frios."</div></div>
      </div>
    </div>
    <div class="section reveal">
      <span class="section-label">TOM DE VOZ — 5 DIMENSÕES</span>
      <div style="margin-top:var(--space-6);display:flex;flex-direction:column;gap:var(--space-6)">
        ${[['Formal','Casual',40],['Sério','Divertido',30],['Técnico','Acessível',60],['Autoritário','Colaborativo',70],['Contido','Expressivo',50]].map(([left,right,pct]) => `
        <div class="voice-slider">
          <span class="voice-label">${left}</span>
          <div class="voice-track"><div class="voice-dot" style="left:${pct}%"></div></div>
          <span class="voice-label">${right}</span>
        </div>`).join('')}
      </div>
    </div>
    <div class="section reveal">
      <span class="section-label">POWER WORDS</span>
      <div class="grid-3 stagger-children" style="margin-top:var(--space-4)">
        ${['Amanhecer','Raio','Colheita','Clareza Solar','Magnânimo','Torre de Comando','Guerra Comercial','Lead Vivo','Insolação','Eclipse'].map(w => `<div class="word-card word-power">${IC.bolt} ${w}</div>`).join('')}
      </div>
    </div>
    <div class="section reveal">
      <span class="section-label">BAN LIST</span>
      <div class="grid-3 stagger-children" style="margin-top:var(--space-4)">
        ${['Simples','Barato','Automatizado','Chatbot','Ferramenta','Solução','Revolucionário','Disruptivo','Fácil'].map(w => `<div class="word-card word-ban">${IC.ban} ${w}</div>`).join('')}
      </div>
    </div>
  `,

  vocabulario: () => `
    <div class="page-hero" style="position:relative; overflow:hidden;">
      <div class="section-number" style="font-size:140px; color:rgba(245,165,36,0.07); position:absolute; top:10px; right:5%;">VB</div>
      <span class="section-label">VOCABULÁRIO PROPRIETÁRIO</span>
      <h2 class="section-title" style="font-size:56px;">O Léxico Sunny</h2>
      <p class="section-subtitle">Termos proprietários que constroem universo verbal exclusivo. Cada palavra reforça o posicionamento de poder e clareza solar.</p>
      <div class="hero-stat-row">
        <div class="hero-stat"><div class="hero-stat-value">10</div><div class="hero-stat-label">Termos Oficiais</div></div>
        <div class="hero-stat"><div class="hero-stat-value">10</div><div class="hero-stat-label">Substituições</div></div>
      </div>
      <div class="hero-scroll-cue"><span>EXPLORE</span><span>↓</span></div>
    </div>
    <div class="section reveal">
      <span class="section-label">TERMOS OFICIAIS</span>
      <table class="token-table" style="margin-top:var(--space-4)">
        <thead><tr><th>Termo Sunny</th><th>Significado</th><th>Contexto</th></tr></thead>
        <tbody>
          ${[['Torre de Comando','Dashboard principal com visão soberana do pipeline','UI, onboarding, sales'],['Lead Vivo','Lead que recebeu resposta em < 15min','Badge, relatórios'],['Colheita','Venda convertida via pipeline Sunny','Celebração, reporting'],['Insolação','Período de alta performance comercial ( > 130%)','Gamificação, alertas'],['Eclipse','Alerta de lead sem resposta por > 24h','Notificações, email'],['Dawn Report','Relatório matinal automático do Agent','Feature, email'],['Solar Flare','Accent visual e momento de impacto','Design, UI'],['Amanhecer','Início do ciclo de ativação (onboarding)','Customer journey'],['Integrador do Futuro','Persona aspiracional do cliente','Comunidade, branding'],['Guerra Comercial','O campo de batalha diário contra a inação','Manifesto, conteúdo']].map(([t,m,c]) => `<tr><td><strong style="color:var(--solar-flare)">${t}</strong></td><td>${m}</td><td><span class="tag">${c}</span></td></tr>`).join('')}
        </tbody>
      </table>
    </div>
    <div class="section reveal">
      <span class="section-label">SUBSTITUIÇÕES OBRIGATÓRIAS</span>
      <table class="token-table" style="margin-top:var(--space-4)">
        <thead><tr><th>${IC.xmark} Nunca diga</th><th>${IC.check} Diga</th><th>Por quê</th></tr></thead>
        <tbody>
          ${[['Dashboard','Torre de Comando','Posiciona como centro de poder'],['Automação','Inteligência','Automação é commodity. Inteligência é premium.'],['Chatbot','SDR Agent','Chatbot é reativo. Agent é proativo e autônomo.'],['Ferramenta','Sistema de Inteligência','Ferramentas são descartáveis.'],['Cliente','Integrador','Especificidade cria pertencimento.'],['Usuário','Commander','Elevação. O integrador comanda.'],['Resultado','Colheita','Metáfora solar. Resultados são colhidos.'],['Problema','Eclipse','O inimigo tem nome poético.'],['Fácil','Claro','Fácil diminui valor. Clareza agrega.'],['Barato','Acessível','Sunny não é cheap. É investimento com ROI.']].map(([no,yes,why]) => `<tr><td><span style="color:var(--error)">${no}</span></td><td><strong style="color:var(--solar-flare)">${yes}</strong></td><td>${why}</td></tr>`).join('')}
        </tbody>
      </table>
    </div>
  `,

  tomdevoz: () => `
    <div class="page-hero">
      <div class="section-number">TV</div>
      <span class="section-label">TOM DE VOZ</span>
      <h2 class="section-title">Modelo de Voz Sunny</h2>
      <p class="section-subtitle">A voz da Sunny é a voz de um Ruler Magnânimo: confiante sem ser arrogante, técnica sem ser fria, urgente sem ser desesperada.</p>
      <div class="hero-stat-row">
        <div class="hero-stat"><div class="hero-stat-value">4</div><div class="hero-stat-label">Pilares de Voz</div></div>
        <div class="hero-stat"><div class="hero-stat-value">8</div><div class="hero-stat-label">Contextos</div></div>
        <div class="hero-stat"><div class="hero-stat-value">6</div><div class="hero-stat-label">Dimensões</div></div>
      </div>
      <div class="hero-scroll-cue"><span>EXPLORE</span><span>↓</span></div>
    </div>
    <div class="section reveal">
      <span class="section-label">4 PILARES DA VOZ</span>
      <div class="grid-2 stagger-children" style="margin-top:var(--space-6)">
        <div class="voice-model-card">
          <div class="voice-model-emoji">${IC.crown}</div>
          <div class="voice-model-title">Comando</div>
          <div class="voice-model-desc">Falamos com autoridade de quem já resolveu. Frases curtas. Verbos no imperativo quando necessário. Zero hesitação.</div>
        </div>
        <div class="voice-model-card">
          <div class="voice-model-emoji">${IC.target}</div>
          <div class="voice-model-title">Precisão</div>
          <div class="voice-model-desc">Cada número é verificável. Cada claim tem evidência. Se não temos o dado, não inventamos. Credibilidade é inegociável.</div>
        </div>
        <div class="voice-model-card">
          <div class="voice-model-emoji">${IC.flame}</div>
          <div class="voice-model-title">Urgência</div>
          <div class="voice-model-desc">Não gritamos. Mas mostramos o custo da inação com clareza devastadora. A urgência nasce dos dados, não do hype.</div>
        </div>
        <div class="voice-model-card">
          <div class="voice-model-emoji">${IC.bulb}</div>
          <div class="voice-model-title">Generosidade</div>
          <div class="voice-model-desc">Compartilhamos valor antes de pedir qualquer coisa. Ensinamos, revelamos, capacitamos. Um ruler magnânimo distribui poder.</div>
        </div>
      </div>
    </div>
    <div class="section reveal">
      <span class="section-label">TOM POR CONTEXTO</span>
      <table class="token-table" style="margin-top:var(--space-4)">
        <thead><tr><th>Contexto</th><th>Tom</th><th>Exemplo</th></tr></thead>
        <tbody>
          ${[['Website/Hero','Imperativo + magnânimo','"Nenhum lead morre ao sol."'],['Onboarding','Guia paciente','"Em 3 passos, sua torre de comando estará operando."'],['Dashboard','Preciso, data-driven','"3 reuniões agendadas ontem. 12 leads em qualificação."'],['Email de alerta','Urgente, direto','"⚠️ Eclipse: 8 leads sem resposta há 48h. Ação necessária."'],['Social media','Provocativo + insight','"Enquanto você lê isso, 5 leads esfriaram na caixa de alguém."'],['Celebração','Energético + tribal','"☀️ COLHEITA! R$85K convertidos via Agent esta semana."'],['Suporte','Empático + resolutivo','"Entendemos. Vamos resolver juntos em < 2h."'],['Pitch/investior','Dados + visão','"Mercado de R$56B com <5% de penetração SaaS. Sunny captura o fluxo."']].map(([ctx,tom,ex]) => `<tr><td><strong>${ctx}</strong></td><td>${tom}</td><td><em>${ex}</em></td></tr>`).join('')}
        </tbody>
      </table>
    </div>
    <div class="section reveal">
      <span class="section-label">ESPECTRO DE VOZ</span>
      <div style="margin-top:var(--space-6);display:flex;flex-direction:column;gap:var(--space-6)">
        ${[['Formal','Casual',35],['Sério','Divertido',25],['Técnico','Acessível',55],['Autoritário','Colaborativo',30],['Contido','Expressivo',45],['Racional','Emocional',40]].map(([left,right,pct]) => `
        <div class="voice-slider">
          <span class="voice-label">${left}</span>
          <div class="voice-track"><div class="voice-dot" style="left:${pct}%"></div></div>
          <span class="voice-label">${right}</span>
        </div>`).join('')}
      </div>
    </div>
  `,

  truelines: () => {
    const IC = {
      user: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right:8px;vertical-align:bottom;color:var(--brand-yellow)"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
      chart: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right:8px;vertical-align:bottom;color:var(--brand-yellow)"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>',
      wrench: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right:8px;vertical-align:bottom;color:var(--brand-yellow)"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
      money: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right:8px;vertical-align:bottom;color:var(--brand-yellow)"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>',
      handshake: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right:8px;vertical-align:bottom;color:var(--brand-yellow)"><path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2 2a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/><path d="m21 3-6 6"/><path d="M8.4 10.4 5.33 13.5a2.83 2.83 0 0 0 4 4l3.07-3.07"/><path d="M11 17l-1.9-1.9"/></svg>'
    };

    return `
    <div class="page-hero">
      <div class="section-number">TL</div>
      <span class="section-label">TRUELINES</span>
      <h2 class="section-title">Mensagens por Audiência</h2>
      <p class="section-subtitle">Frases-chave calibradas para cada público-alvo. A mesma verdade, adaptada ao que cada persona precisa ouvir.</p>
      <div class="hero-stat-row">
        <div class="hero-stat"><div class="hero-stat-value">5</div><div class="hero-stat-label">Personas Mapeadas</div></div>
      </div>
      <div class="hero-scroll-cue"><span>POR AUDIÊNCIA</span><span>↓</span></div>
    </div>
    <div class="section reveal">
      <span class="section-label">POR AUDIENCE</span>
      <div style="display:flex;flex-direction:column;gap:var(--space-4);margin-top:var(--space-6)">
        ${[
          [`${IC.user} Dono da Integradora`, 'Pain: perder vendas sem saber porquê', '"Você investe R$10K em marketing e perde 70% dos leads. Sunny garante que cada real investido volte como reunião agendada."', 'ROI, controle, visão executiva'],
          [`${IC.chart} Gerente Comercial`, 'Pain: equipe sobrecarregada e sem pipeline', '"Sua equipe gasta 120h/mês triando leads frios. Sunny libera esse tempo e entrega só os quentes, pré-qualificados."', 'Produtividade, pipeline, métricas'],
          [`${IC.wrench} Técnico/Engenheiro`, 'Pain: complexidade de implementação', '"Setup em < 30 min. Integra com WhatsApp, email e CRM. API robusta. Stack moderna sobre Node + IA."', 'Facilidade, stack, integração'],
          [`${IC.money} Investidor`, 'Pain: mercado não-SaaS, baixa eficiência', '"Mercado solar BR: R$56B, crescendo 30%/ano. < 5% usa SaaS. Sunny captura o gap com Net Revenue Retention de 140%."', 'TAM, unit economics, moat'],
          [`${IC.handshake} Parceiro de Canal`, 'Pain: dificuldade de agregar valor', '"Ofereça IA comercial para sua base de integradores. White-label pronto. Revenue share agressivo."', 'Oportunidade, escala, receita']
        ].map(([persona,pain,msg,keywords]) => `
        <div class="brand-card" style="border-left:3px solid var(--solar-flare)">
          <div class="brand-card-title" style="display:flex;align-items:center;">${persona}</div>
          <div class="brand-card-text" style="font-size:13px;color:var(--muted);margin-bottom:8px">${pain}</div>
          <div class="brand-quote" style="margin:0;padding:12px 16px"><p style="font-size:15px;margin:0">${msg}</p></div>
          <div style="margin-top:8px;display:flex;gap:8px;flex-wrap:wrap">${keywords.split(', ').map(k => `<span class="tag">${k}</span>`).join('')}</div>
        </div>`).join('')}
      </div>
    </div>
  `;
  },

  evidence: () => `
    <div class="section reveal">
      <span class="section-label">09 · EVIDENCE & PROOF</span>
      <h2 class="section-title">Brand Ladder</h2>
    </div>
    <div class="section reveal">
      <div class="ladder">
        <div class="ladder-step"><div class="ladder-level" style="color:var(--solar-flare)">4. IDENTITY</div><div class="ladder-content">"Eu sou o integrador que não perde nenhuma venda."</div></div>
        <div class="ladder-step"><div class="ladder-level" style="color:var(--dawn-amber)">3. VALUES</div><div class="ladder-content">Nenhum lead morre · Velocidade magnânima · Inteligência amplificada</div></div>
        <div class="ladder-step"><div class="ladder-level" style="color:var(--eclipse-violet)">2. BENEFITS</div><div class="ladder-content">Leads respondidos em < 15min 24/7 · Reuniões agendadas · Pipeline real-time</div></div>
        <div class="ladder-step"><div class="ladder-level" style="color:var(--horizon-blue)">1. FEATURES</div><div class="ladder-content">SDR Agent IA · CRM solar · Qualificação automática · Agendamento inteligente</div></div>
      </div>
    </div>
    <div class="section reveal">
      <span class="section-label">THE IMPACT: ECONOMIC & TIME COMPRESSION</span>
      <div class="stats-bar reveal" style="margin-top:var(--space-4);border-radius:var(--radius-md);overflow:hidden">
        <div class="stat-card"><div class="stat-value" style="color:var(--error)">48h</div><div class="stat-label">Demora via mercado</div></div>
        <div class="stat-card"><div class="stat-value" style="color:var(--error)" data-counter="-45" data-suffix="%">0</div><div class="stat-label">Desperdício (CAC)</div></div>
        <div class="stat-card" style="background:var(--surface);display:flex;flex-direction:column;align-items:center;justify-content:center"><div class="stat-value" style="font-size:48px;color:var(--muted)">→</div><div class="stat-label">Transformação</div></div>
        <div class="stat-card"><div class="stat-value" style="color:var(--success)">&lt; 15m</div><div class="stat-label">Via SDR Agent</div></div>
        <div class="stat-card"><div class="stat-value" style="color:var(--success)" data-counter="35" data-prefix="+R$" data-suffix="k">0</div><div class="stat-label">Líq. Rec./Mês</div></div>
      </div>
    </div>
  `,

  naming: () => `
    <div class="section reveal">
      <span class="section-label">10 · NAMING</span>
      <h2 class="section-title">Validação "Sunny"</h2>
      <p class="section-subtitle">Score: 24/25 no SMILE Test.</p>
    </div>
    <div class="section reveal">
      <table class="token-table" style="margin-top:var(--space-4)">
        <thead><tr><th>Critério</th><th>Score</th><th>Avaliação</th></tr></thead>
        <tbody>
          ${[['S · Suggestive','5/5','Sol, energia solar, calor, luminosidade'],['M · Memorable','5/5','5 letras, 2 sílabas, universal'],['I · Imagery','5/5','Imagem instantânea: sol brilhando'],['L · Legs','4/5','Sunny Pro, Sunny Agent, SunnyOS'],['E · Emotional','5/5','Emoção positiva. Otimista, energético.']].map(([c,s,a]) => `<tr><td><strong>${c}</strong></td><td><strong style="color:var(--success)">${s}</strong></td><td>${a}</td></tr>`).join('')}
        </tbody>
      </table>
    </div>
    <div class="section reveal">
      <span class="section-label">TAGLINES</span>
      <div class="grid-2 stagger-children" style="margin-top:var(--space-4)">
        <div class="value-card" style="border-top-color:var(--success)"><div class="value-num">⭐ PRINCIPAL</div><div class="value-name">"Nenhum lead morre ao sol."</div><div class="value-def">Jogo com o nome, referencia o inimigo, contém a promessa.</div></div>
        <div class="value-card"><div class="value-num">⭐ CAMPANHA</div><div class="value-name">"Amanheceu, vendeu."</div><div class="value-def">Poderoso, curto, memorável.</div></div>
      </div>
    </div>
  `,

  showcase: () => `
    <div class="page-hero" style="position:relative; overflow:hidden; padding-top:100px; padding-bottom:60px;">
      <div class="section-number" style="font-size:140px; color:rgba(245,165,36,0.07); position:absolute; top:10px; right:5%;">11</div>
      <span class="section-label">11 · SHOWCASE</span>
      <h2 class="section-title" style="font-size:56px;">Brand Applications</h2>
      <p class="section-subtitle">Integração com painéis imersivos Seedance e aplicações de identidade visual em múltiplos touchpoints.</p>
    </div>
    <style>@keyframes skeletonLoading { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }</style>
    <div class="section reveal">
      <span class="section-label">GENERATIVE LOGO (BETA)</span>
      <div class="glass-panel" style="margin-top:var(--space-4); text-align:center; padding:var(--space-12);">
         <svg class="hero-logo-svg logo-variant-svg" viewBox="0 0 100 100" style="width:120px;height:120px;margin:0 auto;display:block;">
           <circle cx="50" cy="50" r="45" fill="none" stroke="var(--solar-flare)" stroke-width="2" />
           <circle cx="50" cy="50" r="25" fill="var(--solar-flare)" />
         </svg>
         <p style="margin-top:16px;font-family:var(--font-mono);font-size:12px;color:var(--muted)">Sagi Haviv Method Optimized SVG</p>
      </div>
    </div>

    <div class="section reveal">
      <span class="section-label">SEEDANCE AI · MOCKUP GALLERY</span>
      <div class="bento-grid stagger-children" style="margin-top:var(--space-6)">
        ${[
          ['COLOR SYSTEM','bento-span-2','/videos/colors.mp4'],
          ['ACTIVATION','bento-span-2','/videos/activation.mp4'],
          ['OVERVIEW','bento-span-4','/videos/colors.mp4'],
          ['MULTI-TOUCHPOINT','bento-span-2','/videos/typography.mp4'],
          ['DIGITAL SUITE','bento-span-2','/videos/tokens.mp4'],
          ['PRINT ASSETS','bento-span-2','/videos/mockups.mp4'],
          ['WEARABLES','bento-span-2','/videos/activation.mp4'],
          ['PRODUCT VIEW','bento-span-4','/videos/dashboard.mp4']
        ].map(([label, span, src]) => `
        <div class="glass-panel ${span}" style="padding:0; overflow:hidden;">
          <div style="position:relative;width:100%;aspect-ratio:${span === 'bento-span-4' ? '21/9' : '16/9'};background:var(--surface-hover);">
            <div class="skeleton-loader" style="position:absolute;inset:0;background:linear-gradient(90deg, var(--surface) 25%, var(--border) 50%, var(--surface) 75%);background-size:200% 100%;animation:skeletonLoading 1.5s infinite;"></div>
            <video data-autoplay-scroll loop muted playsinline style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0.8;"><source src="${src}" type="video/mp4" /></video>
            <div style="position:absolute;bottom:12px;left:12px;font-family:var(--font-mono);font-size:9px;padding:4px 10px;background:rgba(0,0,0,0.85);color:var(--solar-flare);border-radius:4px;border:1px solid rgba(245,165,36,0.3);backdrop-filter:blur(8px);">SCENE: ${label}</div>
          </div>
        </div>`).join('')}
      </div>
    </div>

    <div class="section reveal">
      <span class="section-label">TRIBAL ARTIFACTS</span>
      <h3 class="section-title" style="font-size:28px;">Elementos de Pertencimento</h3>
      <div class="bento-grid stagger-children" style="margin-top:var(--space-6)">
        ${[
          ['Lead Vivo Badge','Selo: "0 leads mortos este mês"','Dashboard','🏆'],
          ['Insolação Report','Relatório: "Sua equipe: 135%"','Email','📊'],
          ['Sunny Cap','Boné premium com logomark','100 reuniões','🧢'],
          ['Command Card','Business card dark premium','Eventos','💳'],
          ['Solar Circle Pin','Pin dourado membros premium','Exclusivo','📌']
        ].map(([n,d,c,emoji]) => `
        <div class="glass-panel bento-span-1" style="padding:var(--space-4); display:flex; flex-direction:column; align-items:center; text-align:center; gap:8px;">
          <span style="font-size:32px;">${emoji}</span>
          <div class="brand-card-title" style="font-size:14px; margin-bottom:0;">${n}</div>
          <div class="brand-card-text" style="font-size:11px;">${d}</div>
          <div class="tag" style="margin-top:4px;">${c}</div>
        </div>`).join('')}
      </div>
    </div>
  `,

  pitch: () => `
    <div class="page-hero">
      <div class="section-number">$$</div>
      <span class="section-label">PITCH OVERVIEW</span>
      <h2 class="section-title">Investor & Stakeholder Brief</h2>
      <p class="section-subtitle">Resumo executivo para investidores, advisors e parceiros estratégicos. A marca como ativo econômico.</p>
      <div class="hero-stat-row">
        <div class="hero-stat"><div class="hero-stat-value">30%+</div><div class="hero-stat-label">Crescimento Solar BR YoY</div></div>
        <div class="hero-stat"><div class="hero-stat-value">70%</div><div class="hero-stat-label">Leads que morrem por inação</div></div>
        <div class="hero-stat"><div class="hero-stat-value">21x</div><div class="hero-stat-label">Mais conversão em < 15min</div></div>
        <div class="hero-stat"><div class="hero-stat-value">R$500K-10M</div><div class="hero-stat-label">Faixa de faturamento alvo</div></div>
      </div>
      <div class="hero-scroll-cue"><span>EXPLORE</span><span>↓</span></div>
    </div>
    <div class="section reveal">
      <span class="section-label">MARKET OPPORTUNITY</span>
      <div class="pitch-metrics" style="margin-top:var(--space-6)">
        <div class="pitch-metric-item"><div class="stat-value" style="color:var(--solar-flare)">30%+</div><div class="stat-label">Crescimento YoY Solar BR</div></div>
        <div class="pitch-metric-item"><div class="stat-value" style="color:var(--solar-flare)">70%</div><div class="stat-label">Leads Perdidos por Inação</div></div>
        <div class="pitch-metric-item"><div class="stat-value" style="color:var(--solar-flare)">< 15min</div><div class="stat-label">Tempo Resposta SDR Agent</div></div>
        <div class="pitch-metric-item"><div class="stat-value" style="color:var(--solar-flare)">1–5</div><div class="stat-label">Vendedores por Integrador Alvo</div></div>
      </div>
    </div>
    <div class="section reveal">
      <span class="section-label">VANTAGEM ECONÔMICA vs. STATUS QUO</span>
      <table class="token-table" style="margin-top:var(--space-4)">
        <thead><tr><th>Comparativo</th><th>Status Quo</th><th>Com Sunny</th></tr></thead>
        <tbody>
          <tr><td><strong>Custo SDR Humano</strong></td><td style="color:var(--eclipse-red)">R$3-5K/mês + CLT</td><td style="color:var(--success)">Fração do custo, 24/7</td></tr>
          <tr><td><strong>Tempo de Resposta</strong></td><td style="color:var(--eclipse-red)">48h+ (média do setor)</td><td style="color:var(--success)">< 15 minutos</td></tr>
          <tr><td><strong>Taxa de Follow-up</strong></td><td style="color:var(--eclipse-red)">30% dos leads (inação)</td><td style="color:var(--success)">100% dos leads atendidos</td></tr>
          <tr><td><strong>Conversão de Leads</strong></td><td style="color:var(--eclipse-red)">Baseline manual</td><td style="color:var(--success)">21x mais (resposta < 15min)*</td></tr>
          <tr><td><strong>Escalabilidade</strong></td><td style="color:var(--eclipse-red)">Limitado por headcount</td><td style="color:var(--success)">Ilimitada via IA</td></tr>
          <tr><td><strong>Turnover de SDR</strong></td><td style="color:var(--eclipse-red)">Alto (~3 meses avg)</td><td style="color:var(--success)">Zero — IA não sai</td></tr>
        </tbody>
      </table>
      <div class="brand-card" style="margin-top:var(--space-4);border-left:3px solid var(--solar-flare)">
        <div class="brand-card-text" style="font-size:12px;color:var(--text-tertiary)">* Fonte: InsideSales.com — leads respondidos em < 15min convertem 21x mais que leads respondidos após 1h. Dados do positioning canvas (Fase 2).</div>
      </div>
    </div>
    <div class="section reveal">
      <span class="section-label">MOAT — DEFENSIBILIDADE</span>
      <div class="grid-2 stagger-children" style="margin-top:var(--space-6)">
        <div class="brand-card"><div class="brand-card-title">${IC.bulb} Data Network Effect</div><div class="brand-card-text">Cada interação do Agent treina o modelo. Mais dados = melhor qualificação = mais conversão = mais dados. Loop virtuoso.</div></div>
        <div class="brand-card"><div class="brand-card-title">${IC.wrench} Vertical Lock-in</div><div class="brand-card-text">Vocabulário solar, métricas do setor, integração com ferramentas de proposta solar. Switching cost alto.</div></div>
        <div class="brand-card"><div class="brand-card-title">${IC.bolt} Speed Moat</div><div class="brand-card-text">Primeiro SDR Agent IA solar-native no BR. Head-start de 12-18 meses sobre CRMs genéricos.</div></div>
        <div class="brand-card"><div class="brand-card-title">${IC.chart} Integration Depth</div><div class="brand-card-text">API-first. Integra com WhatsApp Business, Meta Ads, Google Ads, ERPs solares. Cada integração = mais friction to leave.</div></div>
      </div>
    </div>
    <div class="section reveal">
      <span class="section-label">BRAND AS ECONOMIC ASSET</span>
      <div class="brand-quote"><p>"Uma marca forte reduz CAC em até 50%. A Sunny não é apenas um produto — é uma categoria. 'Solar Sales Intelligence' não existia antes. Quem define a categoria, define as regras."</p></div>
    </div>
  `,

  activation: () => `
    <div class="section reveal">
      <span class="section-label">12 · BRAND ACTIVATION</span>
      <h2 class="section-title">Movimento: Integrador do Futuro</h2>
    </div>
    <div class="section reveal">
      <span class="section-label">CUSTOMER JOURNEY MAP</span>
      <table class="token-table" style="margin-top:var(--space-4)">
        <thead><tr><th>Fase</th><th>Touchpoint</th><th>Sunny Experience</th></tr></thead>
        <tbody>
          ${[['Discovery','Google Ads / Social','"Nenhum lead morre ao sol."'],['Website','Landing Page','Hero dark, Solar CTA, case study'],['Demo','Agendamento','Agente liga em < 5 min'],['Trial','Onboarding','Setup SDR Agent < 30 min'],['Activation','1º resultado','"🎉 Primeiro lead qualificado"'],['Engagement','Dashboard','Torre de Comando: pipeline, conversion'],['Revenue','1ª venda','"☀️ COLHEITA! R$85K via IA"'],['Loyalty','Comunidade','Sunny Circle: badges, grupo'],['Advocacy','Indicação','Solar Referral: 1 mês free'],['Expansion','Upsell','Sunny Enterprise: multi-unit']].map(([f,t,e]) => `<tr><td><strong>${f}</strong></td><td>${t}</td><td>${e}</td></tr>`).join('')}
        </tbody>
      </table>
    </div>
    <div class="section reveal">
      <span class="section-label">TRIBAL RITUALS</span>
      <div class="grid-auto stagger-children" style="margin-top:var(--space-4)">
        ${[['Dawn Report','Diário 8h','"Bom dia, Commander. 3 reuniões ontem."'],['Harvest Friday','Semanal','Celebração + ranking integradores.'],['Solar Summit','Trimestral','Cases, roadmap, networking.'],['Eclipse Alert','Event-driven','"⚠️ 8 leads sem resposta há 48h."'],['Insolação Award','Mensal','Melhor conversão do mês.']].map(([n,f,d]) => `<div class="brand-card"><div class="brand-card-title">${n}</div><div class="tag" style="margin-bottom:8px">${f}</div><div class="brand-card-text">${d}</div></div>`).join('')}
      </div>
    </div>
  `,

  coherence: () => `
    <div class="section reveal">
      <span class="section-label">13 · COHERENCE CHECK</span>
      <h2 class="section-title">Cross-Phase Verification</h2>
    </div>
    <div class="section reveal">
      <table class="token-table" style="margin-top:var(--space-4)">
        <thead><tr><th>Estratégia</th><th>Identidade</th><th>Status</th></tr></thead>
        <tbody>
          ${[['Ruler Magnânimo','Dark premium + solar gold','✅ Ruler = escuridão + poder'],['DNA: "Nenhum lead morre"','Semantic Eclipse Red','✅ Vocabulário visual conectado'],['Inimigo: Inação','Motion: sol nascendo','✅ Oposição visual à estagnação'],['Tipografia: Space Grotesk','Tech + denso + premium','✅ Geométrica com personalidade'],['Solar Sales Intelligence','Accent Solar Flare, not blue','✅ Diferenciação visual']].map(([s,i,a]) => `<tr><td>${s}</td><td>${i}</td><td><span class="check-pass">${a}</span></td></tr>`).join('')}
        </tbody>
      </table>
    </div>
    <div class="section reveal-scale">
      <div style="text-align:center;padding:var(--space-16) 0">
        <div style="font-size:72px;margin-bottom:var(--space-4)"><svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="var(--solar-flare)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg></div>
        <h2 class="section-title" style="color:var(--success);font-size:36px">BRAND APPROVED</h2>
        <p class="section-subtitle" style="margin:var(--space-4) auto">Todas as 5 fases passam na verificação de coerência. 26 páginas verificadas. A marca está pronta para ativação.</p>
        <div class="check-pass" style="font-size:14px;margin-top:var(--space-6)">✅ BRAND-CHIEF VERIFIED · V2.0 · 26 PAGES · 2026-04-16</div>
      </div>
    </div>
  `,

  'ui-controls': () => `
    <div class="page-hero">
      <div class="section-number">UI</div>
      <span class="section-label">UI CONTROLS</span>
      <h2 class="section-title">Form & Inputs</h2>
      <p class="section-subtitle">A anatomia dos controles interativos da plataforma Sunny. Inputs precisos, focos radiantes e alta acessibilidade.</p>
    </div>
    <div class="section reveal">
      <span class="section-label">INPUT FIELDS</span>
      <div class="grid-2 stagger-children" style="margin-top:var(--space-4)">
        <div class="brand-card">
          <label style="display:block;margin-bottom:8px;font-size:14px;color:var(--text-secondary)">Endereço de Email</label>
          <input type="email" class="ui-input" placeholder="seu.nome@integrador.com.br" />
        </div>
        <div class="brand-card">
          <label style="display:block;margin-bottom:8px;font-size:14px;color:var(--text-secondary)">Meta Mensal</label>
          <div style="position:relative">
            <span style="position:absolute;left:12px;top:10px;color:var(--solar-flare)">$</span>
            <input type="text" class="ui-input" style="padding-left:30px" placeholder="250.000,00" />
          </div>
        </div>
      </div>
    </div>
    <div class="section reveal">
      <span class="section-label">TOGGLES & SWITCHES</span>
      <div class="grid-3 stagger-children" style="margin-top:var(--space-4)">
        <div class="brand-card">
          <div class="ui-switch-wrapper">
            <span style="color:white;font-size:14px">Ativar Sunny Agent</span>
            <label class="ui-switch"><input type="checkbox" checked><span class="ui-slider"></span></label>
          </div>
        </div>
        <div class="brand-card">
          <div class="ui-switch-wrapper">
            <span style="color:white;font-size:14px">Notificar via SMS</span>
            <label class="ui-switch"><input type="checkbox"><span class="ui-slider"></span></label>
          </div>
        </div>
        <div class="brand-card">
          <div class="ui-switch-wrapper">
            <span style="color:white;font-size:14px">Respostas Automáticas</span>
            <label class="ui-switch"><input type="checkbox" checked><span class="ui-slider"></span></label>
          </div>
        </div>
      </div>
    </div>
  `,

  buttons: () => `
    <div class="section reveal">
      <span class="section-label">ADVANCED BUTTONS</span>
      <h2 class="section-title">Interaction Hierarchy</h2>
      <p class="section-subtitle">Na Sunny, clicar em um CTA primário evoca calor e inteligência. A hierarquia direciona a ação do integrador.</p>
      <div class="grid-4 stagger-children" style="margin-top:var(--space-6)">
        <div class="brand-card" style="text-align:center;padding:48px 24px">
          <button class="btn ui-btn-primary" style="margin-bottom:var(--space-2)">PRIMARY CTA</button>
          <div class="brand-card-text">Ação principal. Glow effect e focus ring aceso.</div>
        </div>
        <div class="brand-card" style="text-align:center;padding:48px 24px">
          <button class="btn ui-btn-secondary" style="margin-bottom:var(--space-2)">Secondary</button>
          <div class="brand-card-text">Ações alternativas. Contorno on-brand.</div>
        </div>
        <div class="brand-card" style="text-align:center;padding:48px 24px">
          <button class="btn ui-btn-ghost" style="margin-bottom:var(--space-2)">Ghost</button>
          <div class="brand-card-text">Visibilidade reduzida, hover sutil.</div>
        </div>
        <div class="brand-card" style="text-align:center;padding:48px 24px">
          <button class="btn ui-btn-destructive" style="margin-bottom:var(--space-2)">Destructive</button>
          <div class="brand-card-text">Ações perigosas em vermelho (Eclipse Red).</div>
        </div>
      </div>
    </div>
  `,

  'data-display': () => `
    <div class="page-hero">
      <div class="section-number">DS</div>
      <span class="section-label">DATA DISPLAY</span>
      <h2 class="section-title">Sunny Intelligence</h2>
      <p class="section-subtitle">Exibição de dados com máxima clareza (Clareza Solar). Zero ruído visual, prioridade em tabelas legíveis e dashboards escuros (Command Terminal).</p>
    </div>
    <div class="section reveal">
      <span class="section-label">BADGING SYSTEM</span>
      <div style="display:flex;gap:12px;margin-top:24px;flex-wrap:wrap">
        <span class="ui-badge ui-badge-success">Quente</span>
        <span class="ui-badge ui-badge-warning">Frio - Aguardando</span>
        <span class="ui-badge ui-badge-error">Perdido</span>
        <span class="ui-badge ui-badge-info">Novo Lead</span>
        <span class="ui-badge ui-badge-premium">Enterprise AI</span>
      </div>
    </div>
    <div class="section reveal">
      <span class="section-label">TABELA HIERÁRQUICA (COMMAND PIPELINE)</span>
      <div class="ui-table-container" style="margin-top:24px">
        <table class="ui-table">
          <thead>
            <tr><th>Lead / Empresa</th><th>Status</th><th>Tempo</th><th>Score(AI)</th><th>Ação</th></tr>
          </thead>
          <tbody>
            <tr><td>SolarCorp Sul</td><td><span class="ui-badge ui-badge-info">Recebido</span></td><td>< 2m</td><td>98/100</td><td><button class="btn ui-btn-ghost" style="padding:4px 12px">Analisar</button></td></tr>
            <tr><td>Fazenda Alvorada</td><td><span class="ui-badge ui-badge-success">Reunião</span></td><td>14m</td><td>85/100</td><td><button class="btn ui-btn-ghost" style="padding:4px 12px">View</button></td></tr>
            <tr><td>Industria Apex</td><td><span class="ui-badge ui-badge-warning">Follow-up</span></td><td>2h</td><td>60/100</td><td><button class="btn ui-btn-ghost" style="padding:4px 12px">Push</button></td></tr>
          </tbody>
        </table>
      </div>
    </div>
  `,

  motion: () => `
    <div class="page-hero">
      <div class="section-number">MT</div>
      <span class="section-label">MOTION PLAYGROUND</span>
      <h2 class="section-title">Design Dinâmico</h2>
      <p class="section-subtitle">Tokens interativos e demonstrações espaciais.</p>
    </div>
    <div class="section reveal">
      <span class="section-label">INTERACTIVE TIMINGS</span>
      <div class="grid-3 stagger-children" style="margin-top:24px">
        <div class="brand-card motion-demo-card">
          <div class="motion-dot" style="transition-duration:150ms">Hover test</div>
          <p><strong>Fast</strong> (150ms)</p>
        </div>
        <div class="brand-card motion-demo-card">
          <div class="motion-dot" style="transition-duration:300ms">Hover test</div>
          <p><strong>Normal</strong> (300ms)</p>
        </div>
        <div class="brand-card motion-demo-card">
          <div class="motion-dot" style="transition-duration:500ms">Hover test</div>
          <p><strong>Slow/Enter</strong> (500ms)</p>
        </div>
      </div>
    </div>
  `,

  accessibility: () => `
    <div class="section reveal">
      <span class="section-label">GOVERNANÇA</span>
      <h2 class="section-title">Accessibility (WCAG 2.2 AAA)</h2>
      <div class="grid-2 stagger-children" style="margin-top:24px">
        <div class="brand-card">
          <div class="brand-card-title">Contrastes Solares</div>
          <div class="brand-card-text">O laranja primário (#FF6B00 ou #F5A524) testado sobre o Command Black (#09090B) atinge ratio de <strong>7.2:1</strong>. Atende AAA para tipografias normais e bold.</div>
        </div>
        <div class="brand-card">
          <div class="brand-card-title">Focus States Requisitos</div>
          <div class="brand-card-text">Qualquer componente interativo recebe contorno em Solar Flare com outline-offset de 2px, permitindo clara navegação por teclado para usuários de leitores de tela.</div>
        </div>
        <div class="brand-card" style="grid-column: span 2">
          <div class="brand-card-title">Reduced Motion</div>
          <div class="brand-card-text">Aderência à preference de sistema <code>@media (prefers-reduced-motion: reduce)</code>. Efeitos de paralaxe e glows são desabilitados via tokens lógicos onde requirido pela WCAG.</div>
        </div>
      </div>
    </div>
  `,

  'dashboard-roi': () => `
    <div class="section reveal">
      <span class="section-label">BUSINESS CONTEXT</span>
      <h2 class="section-title">Design ROI Dashboard</h2>
      <div class="hero-stat-row" style="margin-top:24px;border:1px solid #1a1a1a;border-radius:12px;padding:24px;background:#050505">
        <div class="hero-stat"><div class="hero-stat-value">92</div><div class="hero-stat-label">System Usability (SUS)</div></div>
        <div class="hero-stat"><div class="hero-stat-value">-22%</div><div class="hero-stat-label">Drop-off no CRM</div></div>
        <div class="hero-stat"><div class="hero-stat-value">3.5x</div><div class="hero-stat-label">Faster Component Dev</div></div>
        <div class="hero-stat"><div class="hero-stat-value" style="color:var(--success)">$2.4M</div><div class="hero-stat-label">Pipeline Salvo via Design V2</div></div>
      </div>
    </div>
  `,

  ofertas: () => `
    <!-- PAGE HERO -->
    <div class="page-hero">
      <div class="section-number" style="color:rgba(245,165,36,0.12);font-size:140px;position:absolute;top:10px;right:5%;">$</div>
      <span class="section-label">GRAND SLAM OFFER · HORMOZI FRAMEWORK · AVATAR CORRIGIDO</span>
      <h2 class="section-title" style="font-size:clamp(36px,5vw,72px)">A Oferta Magnânima</h2>
      <p class="section-subtitle" style="font-size:20px;max-width:760px">Construída para o avatar real: integradoras com <strong style="color:var(--solar-flare)">1–5 vendedores</strong> que não fazem follow-up, não têm CS e não têm processo de onboarding. Uma oferta tão boa que seria idiota recusar.</p>
      <div class="hero-stat-row">
        <div class="hero-stat"><div class="hero-stat-value">EXCLUSIVO</div><div class="hero-stat-label">Dossiê Hormozi (0 concorrentes)</div></div>
        <div class="hero-stat"><div class="hero-stat-value">R$1.497</div><div class="hero-stat-label">Plano Sol (avatar ideal)</div></div>
        <div class="hero-stat"><div class="hero-stat-value">45 dias</div><div class="hero-stat-label">Garantia Primeira Colheita</div></div>
        <div class="hero-stat"><div class="hero-stat-value">38/40</div><div class="hero-stat-label">Value Equation Score</div></div>
      </div>
      <div class="hero-scroll-cue"><span>EXPLORE</span><span>↓</span></div>
    </div>

    <!-- PUV -->
    <div class="section reveal">
      <span class="section-label">PUV — PROPOSTA ÚNICA DE VALOR</span>
      <h2 class="section-title" style="font-size:36px">O que a Sunny promete, exatamente</h2>

      <!-- PUV COMPLETA -->
      <div style="margin:var(--space-6) 0;border-left:4px solid var(--solar-flare);padding:var(--space-6) var(--space-8);background:rgba(245,165,36,0.06);border-radius:0 12px 12px 0">
        <div style="font-size:10px;letter-spacing:2px;color:var(--solar-flare);margin-bottom:16px;font-weight:700">PUV COMPLETA</div>
        <p style="font-size:clamp(15px,1.9vw,21px);font-weight:600;line-height:1.8;color:var(--clean-white);margin:0">"Sua integratora perde dinheiro em quatro momentos que você raramente vê: o lead que chegou fora do horário e não foi atendido, a call em que o vendedor improvisou e perdeu, o prospect que disse 'deixa pra depois' e nunca mais ouviu falar de você, e o cliente que fechou e ficou abandonado — sem acompanhamento, sem indicar ninguém.<br><br>A Sunny resolve os quatro. Um sistema que atende cada lead no momento certo, prepara cada vendedor com o roteiro exato para aquela conversa e ainda os coloca numa competição saudável de resultado — onde ranking e conquistas fazem o time querer fechar mais sem você precisar cobrar —, recupera automaticamente quem não fechou, e faz seu cliente virar uma fonte contínua de novos negócios.<br><br><span style="color:var(--solar-flare);font-size:1.05em">Você deixa de ser a peça que segura tudo. E passa a ser o dono de uma operação que trabalha por você."</span></p>
      </div>

      <!-- PUV RESUMIDA -->
      <div style="margin-top:var(--space-2);border-left:2px solid rgba(245,165,36,0.35);padding:var(--space-5) var(--space-6);background:rgba(245,165,36,0.025);border-radius:0 8px 8px 0">
        <div style="font-size:10px;letter-spacing:2px;color:var(--text-tertiary);margin-bottom:12px;font-weight:700">PUV RESUMIDA</div>
        <p style="font-size:14px;font-weight:500;line-height:1.7;color:var(--text-secondary);margin:0">"Leads sem resposta, calls sem roteiro, prospects esquecidos e clientes abandonados — sua operação perde dinheiro nos quatro. A Sunny resolve todos: atende cada lead no momento certo, prepara o vendedor com o roteiro exato para aquela conversa, cria uma competição saudável que faz o time querer fechar mais sem você cobrar, recupera quem não fechou e faz cada cliente virar uma fonte de novos negócios. <strong style="color:var(--clean-white)">Você deixa de ser a peça que segura tudo. E passa a ser o dono de uma operação que trabalha por você.</strong>"</p>
      </div>

      <!-- O QUE A SUNNY É vs. NÃO É -->
      <div style="margin-top:var(--space-8)">
        <div style="font-size:11px;letter-spacing:2px;color:var(--text-tertiary);margin-bottom:var(--space-4);text-transform:uppercase">Posicionamento — o que a Sunny é e o que não é</div>
        <table class="token-table">
          <thead><tr><th>A Sunny É</th><th>A Sunny NÃO É</th></tr></thead>
          <tbody>
            <tr><td style="color:var(--success);font-weight:600">Ecossistema comercial completo (CRM + SDR + CS + Gamificação)</td><td style="color:var(--eclipse-red)">Bot de atendimento</td></tr>
            <tr><td style="color:var(--success);font-weight:600">Sistema de preparação e fechamento de venda por lead</td><td style="color:var(--eclipse-red)">Automação de respostas genéricas</td></tr>
            <tr><td style="color:var(--success);font-weight:600">Operação que funciona sem o CEO no centro de cada venda</td><td style="color:var(--eclipse-red)">Ferramenta que o CEO precisa operar</td></tr>
            <tr><td style="color:var(--success);font-weight:600">Time motivado por competição e resultado mensurado</td><td style="color:var(--eclipse-red)">Dependência de talento ou humor individual</td></tr>
            <tr><td style="color:var(--success);font-weight:600">Recuperação automática de vendas perdidas e paradas</td><td style="color:var(--eclipse-red)">CRM que só organiza o que já entrou</td></tr>
            <tr><td style="color:var(--success);font-weight:600">CS que transforma cliente em fonte ativa de indicações</td><td style="color:var(--eclipse-red)">Pós-venda manual, eventual ou inexistente</td></tr>
          </tbody>
        </table>
      </div>

      <!-- TAGLINES -->
      <div class="grid-3 stagger-children" style="margin-top:var(--space-6)">
        <div class="brand-card" style="border-top:3px solid var(--solar-flare);text-align:center;padding:var(--space-6)">
          <div style="font-size:11px;letter-spacing:2px;color:var(--text-tertiary);margin-bottom:12px">HEADLINE HERO</div>
          <div style="font-size:17px;font-weight:700;color:var(--solar-flare);line-height:1.4">"Nenhum lead morre. Nenhum vendedor improvisa."</div>
        </div>
        <div class="brand-card" style="border-top:3px solid var(--horizon-blue);text-align:center;padding:var(--space-6)">
          <div style="font-size:11px;letter-spacing:2px;color:var(--text-tertiary);margin-bottom:12px">ANÚNCIO CURTO</div>
          <div style="font-size:17px;font-weight:700;color:var(--clean-white);line-height:1.4">"Todo lead chega pronto. Todo vendedor entra preparado."</div>
        </div>
        <div class="brand-card" style="border-top:3px solid #A78BFA;text-align:center;padding:var(--space-6)">
          <div style="font-size:11px;letter-spacing:2px;color:var(--text-tertiary);margin-bottom:12px">DNA DA MARCA</div>
          <div style="font-size:17px;font-weight:700;color:var(--clean-white);line-height:1.4">"Nenhum lead morre ao sol."</div>
        </div>
      </div>
    </div>

    <!-- OS 4 MOMENTOS QUE DESTROEM A INTEGRATORA PEQUENA -->
    <div class="section reveal">
      <span class="section-label">OS 4 MOMENTOS — ONDE SUA OPERAÇÃO SANGRA SEM VER</span>
      <h2 class="section-title" style="font-size:32px">Sua integratora perde dinheiro nos quatro</h2>
      <p class="section-subtitle">Nenhum CRM solar cobre os quatro momentos. A Sunny cobre todos — antes, durante, entre e depois da venda.</p>
      <table class="token-table" style="margin-top:var(--space-6)">
        <thead><tr><th>#</th><th>Momento</th><th>O Que Acontece</th><th>Custo Invisível</th><th>O Que a Sunny Faz</th><th>Exclusivo?</th></tr></thead>
        <tbody>
          <tr>
            <td style="font-size:20px;font-weight:700;color:var(--solar-flare)">01</td>
            <td><strong>Lead sem resposta</strong></td>
            <td>Lead chega fora do horário. Ninguém responde. Ele fecha com o concorrente que respondeu primeiro.</td>
            <td style="color:var(--eclipse-red)">70% dos leads morrem assim — R$21K+/mês*</td>
            <td style="color:var(--success)">Atendimento 24/7 em &lt;15min — madrugada, domingo, feriado</td>
            <td style="color:var(--text-tertiary);font-size:12px">⚠️ Concorrentes têm bots simples</td>
          </tr>
          <tr>
            <td style="font-size:20px;font-weight:700;color:var(--solar-flare)">02</td>
            <td><strong>Call sem roteiro</strong></td>
            <td>Vendedor improvisa. Não antecipa objeções. Perde lead quente por despreparo na conversa.</td>
            <td style="color:var(--eclipse-red)">Conversão baixa — vendedor culpa o lead</td>
            <td style="color:var(--success)">Dossiê Hormozi: roteiro C.L.O.S.E.R. personalizado + objeções previstas + score 0–10</td>
            <td><span style="background:rgba(245,165,36,0.15);color:var(--solar-flare);font-size:11px;font-weight:700;padding:2px 8px;border-radius:4px">✅ EXCLUSIVO</span></td>
          </tr>
          <tr>
            <td style="font-size:20px;font-weight:700;color:var(--solar-flare)">03</td>
            <td><strong>Prospect esquecido</strong></td>
            <td>Lead disse "deixa pra depois" e sumiu. Ninguém fez follow-up. A venda que estava no caminho morreu.</td>
            <td style="color:var(--eclipse-red)">Pipeline estagnado, oportunidades que evaporam</td>
            <td style="color:var(--success)">Follow-up automático de recuperação — retoma a conversa no momento certo, com contexto completo</td>
            <td><span style="background:rgba(245,165,36,0.15);color:var(--solar-flare);font-size:11px;font-weight:700;padding:2px 8px;border-radius:4px">✅ Nenhum CRM faz</span></td>
          </tr>
          <tr>
            <td style="font-size:20px;font-weight:700;color:var(--solar-flare)">04</td>
            <td><strong>Cliente abandonado</strong></td>
            <td>Fechou o contrato. Nunca mais teve contato. Zero onboarding, zero CS. Não indica ninguém.</td>
            <td style="color:var(--eclipse-red)">LTV mínimo, indicações zeradas, churn silencioso</td>
            <td style="color:var(--success)">CS por IA: acompanhamento pós-venda, onboarding contínuo e geração ativa de indicações</td>
            <td><span style="background:rgba(245,165,36,0.15);color:var(--solar-flare);font-size:11px;font-weight:700;padding:2px 8px;border-radius:4px">✅ Nenhum CRM solar</span></td>
          </tr>
        </tbody>
      </table>
      <div class="brand-card" style="margin-top:var(--space-4);border-left:3px solid var(--solar-flare)">
        <div class="brand-card-text" style="font-size:12px;color:var(--text-tertiary)">* Estimativa: ticket médio R$30K × 70% de leads sem resposta × 100 leads/mês = R$21K+/mês em receita que nunca entra. Só o momento 01 já justifica a Sunny inteira.</div>
      </div>
    </div>

    <!-- DOSSIÊ HORMOZI — HERO SECTION -->
    <div class="section reveal">
      <span class="section-label">O DIFERENCIAL #1 — EXCLUSIVO SUNNY</span>
      <div style="background:linear-gradient(135deg,rgba(245,165,36,0.08) 0%,rgba(245,165,36,0.03) 100%);border:2px solid rgba(245,165,36,0.35);border-radius:20px;padding:var(--space-8);margin-top:var(--space-4)">
        <div style="display:flex;align-items:flex-start;gap:var(--space-6);flex-wrap:wrap">
          <div style="flex:1;min-width:280px">
            <span style="background:var(--solar-flare);color:#09090B;font-size:11px;font-weight:700;letter-spacing:2px;padding:4px 12px;border-radius:100px;display:inline-block;margin-bottom:var(--space-4)">EXCLUSIVO — 0 CONCORRENTES</span>
            <h2 style="font-size:clamp(28px,4vw,48px);font-weight:700;color:var(--clean-white);margin-bottom:var(--space-3);line-height:1.2">🤖 Dossiê Hormozi</h2>
            <p style="font-size:17px;color:var(--text-secondary);line-height:1.6;margin-bottom:var(--space-4)">Antes de cada call com um lead qualificado, o sistema gera automaticamente um <strong style="color:var(--clean-white)">dossiê estratégico personalizado</strong>: roteiro C.L.O.S.E.R. baseado na conversa real do lead, objeções previstas com contraargumentos prontos, score de confiança (0–10) e "Matemática da Dor" — o cálculo de quanto o lead perde por não instalar solar.</p>
            <p style="font-size:15px;color:var(--solar-flare);font-weight:600">Resultado: vendedores menos experientes fecham como consultores de 10 anos.</p>
          </div>
          <div style="min-width:240px;display:flex;flex-direction:column;gap:12px">
            ${[
              ['C.L.O.S.E.R. Framework','Roteiro de 6 etapas aplicado ao lead específico'],
              ['Objeções Previstas','IA detecta os medos antes da call começar'],
              ['Score 0–10','Confiança estimada de fechamento'],
              ['Matemática da Dor','Custo × 12 × 3 anos = urgência financeira visível'],
              ['PDF no WhatsApp','Entregue ao vendedor antes da call, via push'],
              ['Aprende com cada call','Cada resultado melhora o próximo dossiê'],
            ].map(([t, d]) => `
              <div style="display:flex;gap:10px;align-items:flex-start">
                <span style="color:var(--solar-flare);flex-shrink:0;margin-top:2px">${IC.check}</span>
                <div><strong style="color:var(--clean-white);font-size:13px">${t}</strong><div style="font-size:12px;color:var(--text-tertiary);margin-top:2px">${d}</div></div>
              </div>
            `).join('')}
          </div>
        </div>
        <div style="margin-top:var(--space-6);padding-top:var(--space-4);border-top:1px solid rgba(245,165,36,0.2)">
          <div style="font-size:12px;color:var(--text-tertiary);margin-bottom:8px">BENCHMARKS — O QUE OS CONCORRENTES OFERECEM "DURANTE A VENDA"</div>
          <div style="display:flex;gap:8px;flex-wrap:wrap">
            ${['Aster: apenas CRM','Azume: só proposta PDF','Groner: pipeline manual','SolarZ: pós-venda técnico','Solaryum: sem IA','Sunbase: mercado EUA','Suns Brasil: planilha glorificada'].map(c => `<span class="tag" style="color:var(--eclipse-red);border-color:rgba(220,38,38,0.3);background:rgba(220,38,38,0.08)">${IC.xmark} ${c}</span>`).join('')}
          </div>
        </div>
      </div>
    </div>

    <!-- GAMIFICAÇÃO -->
    <div class="section reveal">
      <span class="section-label">GAMIFICAÇÃO — O TIME QUE SE MOTIVA SOZINHO</span>
      <div style="background:linear-gradient(135deg,rgba(56,189,248,0.07) 0%,rgba(56,189,248,0.02) 100%);border:2px solid rgba(56,189,248,0.25);border-radius:20px;padding:var(--space-8);margin-top:var(--space-4)">
        <div style="display:flex;align-items:flex-start;gap:var(--space-6);flex-wrap:wrap">
          <div style="flex:1;min-width:280px">
            <span style="background:var(--horizon-blue);color:#09090B;font-size:11px;font-weight:700;letter-spacing:2px;padding:4px 12px;border-radius:100px;display:inline-block;margin-bottom:var(--space-4)">PILAR EX — EXPERIÊNCIA DO VENDEDOR</span>
            <h2 style="font-size:clamp(24px,3.5vw,40px);font-weight:700;color:var(--clean-white);margin-bottom:var(--space-3);line-height:1.2">🏆 Competição que fecha venda</h2>
            <p style="font-size:16px;color:var(--text-secondary);line-height:1.6;margin-bottom:var(--space-4)">O vendedor que usa o Dossiê Hormozi fecha mais. O sistema registra isso — e coloca o ranking na tela de todo mundo. Badges, streaks e conquistas criam uma competição saudável que faz o time querer fechar mais sem o CEO precisar cobrar ou motivar manualmente.</p>
            <p style="font-size:14px;color:var(--horizon-blue);font-weight:600">CEO para de ser o motivador do próprio time. O sistema faz isso — e ainda mede quem usa o processo e quem ignora.</p>
          </div>
          <div style="min-width:240px;display:flex;flex-direction:column;gap:12px">
            ${[
              ['🏆 Top Closer','Maior taxa de conversão do mês — visível para todo o time'],
              ['📚 Dossiê Master','Usou o dossiê em +80% das calls — resultado comprovado em dados'],
              ['🔥 Streak','3+ vendas consecutivas — momento de confiança capturado pelo sistema'],
              ['⭐ Nota 10','Aderência ao roteiro ≥ 9/10 — vendedor que segue o processo fecha mais'],
              ['📊 Ranking público','Performance de todos visível — pressão positiva natural, sem o CEO cobrar'],
              ['🔔 Push do Dossiê','WhatsApp: "Dossiê pronto para Carlos F." — cria hábito e urgência de uso'],
            ].map(([t, d]) => `
              <div style="display:flex;gap:10px;align-items:flex-start">
                <span style="color:var(--horizon-blue);flex-shrink:0;margin-top:2px">${IC.check}</span>
                <div><strong style="color:var(--clean-white);font-size:13px">${t}</strong><div style="font-size:12px;color:var(--text-tertiary);margin-top:2px">${d}</div></div>
              </div>
            `).join('')}
          </div>
        </div>
        <div style="margin-top:var(--space-6);padding-top:var(--space-4);border-top:1px solid rgba(56,189,248,0.2)">
          <div style="font-size:13px;color:var(--text-secondary);line-height:1.6">💡 <strong style="color:var(--clean-white)">Efeito colateral para o CEO:</strong> pode contratar vendedores menos experientes — o sistema entrega a estratégia e a motivação. O time júnior fecha como sênior porque o processo é melhor do que o talento individual.</div>
        </div>
      </div>
    </div>

    <!-- CS POR IA + RECUPERAÇÃO DE VENDAS -->
    <div class="section reveal">
      <span class="section-label">CS POR IA + RECUPERAÇÃO DE VENDAS — ONDE OS CONCORRENTES PARAM</span>
      <h2 class="section-title" style="font-size:28px">Os dois momentos que nenhum CRM solar cobre</h2>
      <div class="grid-2 stagger-children" style="margin-top:var(--space-6)">
        <div style="background:rgba(245,165,36,0.04);border:1.5px solid rgba(245,165,36,0.25);border-radius:16px;padding:var(--space-6)">
          <div style="font-size:10px;letter-spacing:2px;color:var(--solar-flare);margin-bottom:12px;font-weight:700">MOMENTO 04 — DEPOIS DA VENDA</div>
          <h3 style="font-size:22px;font-weight:700;color:var(--clean-white);margin-bottom:12px">🛡️ CS por IA — LNS Sub-Agent</h3>
          <p style="font-size:14px;color:var(--text-secondary);line-height:1.6;margin-bottom:16px">O cliente que fechou não pode desaparecer no silêncio. O LNS Sub-Agent assume o pós-venda: check-ins proativos, resolução de dúvidas, onboarding do sistema de energia e pedido ativo de indicações no momento certo. O cliente sente que tem um CS dedicado. Você não contratou ninguém para isso.</p>
          <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:16px">
            ${[
              'Check-in automático nos primeiros 7 dias após fechamento',
              'Onboarding do projeto de energia guiado passo a passo',
              'Follow-up de satisfação — NPS colhido sem esforço humano',
              'Pedido ativo de indicações no momento de maior satisfação',
              'Reativação de clientes inativos com novo ângulo de abordagem',
            ].map(i => `<div style="display:flex;gap:8px;align-items:flex-start;font-size:13px;color:var(--text-secondary)"><span style="color:var(--solar-flare);flex-shrink:0;margin-top:2px">${IC.check}</span>${i}</div>`).join('')}
          </div>
          <div style="padding:12px;background:rgba(245,165,36,0.08);border-radius:8px;border-left:3px solid var(--solar-flare)">
            <div style="font-size:12px;color:var(--solar-flare);font-weight:600">Resultado: cliente que era fim de ciclo vira fonte contínua de novos negócios — sem esforço ativo do time</div>
          </div>
        </div>
        <div style="background:rgba(56,189,248,0.04);border:1.5px solid rgba(56,189,248,0.2);border-radius:16px;padding:var(--space-6)">
          <div style="font-size:10px;letter-spacing:2px;color:var(--horizon-blue);margin-bottom:12px;font-weight:700">MOMENTO 03 — O PROSPECT ESQUECIDO</div>
          <h3 style="font-size:22px;font-weight:700;color:var(--clean-white);margin-bottom:12px">🔄 Follow-up de Recuperação</h3>
          <p style="font-size:14px;color:var(--text-secondary);line-height:1.6;margin-bottom:16px">Prospect disse "deixa pra depois"? Na operação manual, ele morre — o vendedor esquece, o pipeline apodrece. Na Sunny, o sistema detecta estagnação e retoma a conversa automaticamente no momento certo, com contexto completo do que foi discutido e um novo ângulo calibrado pela história do lead.</p>
          <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:16px">
            ${[
              'Detecção automática de prospects parados há mais de X dias',
              'Retomada com contexto integral da última conversa',
              'Novo ângulo de abordagem calibrado pelo perfil do lead',
              'Vendedor notificado quando o prospect responde — sem monitorar',
              'Pipeline sempre ativo — nenhuma oportunidade apodrece em silêncio',
            ].map(i => `<div style="display:flex;gap:8px;align-items:flex-start;font-size:13px;color:var(--text-secondary)"><span style="color:var(--horizon-blue);flex-shrink:0;margin-top:2px">${IC.check}</span>${i}</div>`).join('')}
          </div>
          <div style="padding:12px;background:rgba(56,189,248,0.07);border-radius:8px;border-left:3px solid var(--horizon-blue)">
            <div style="font-size:12px;color:var(--horizon-blue);font-weight:600">Resultado: vendas que estavam mortas voltam à vida — sem ninguém precisar lembrar ou monitorar o pipeline</div>
          </div>
        </div>
      </div>
    </div>

    <!-- VALUE EQUATION AUDIT -->
    <div class="section reveal">
      <span class="section-label">VALUE EQUATION — POR QUE A OFERTA CONVERTE</span>
      <h2 class="section-title" style="font-size:32px">Diagnóstico da oferta</h2>
      <p class="section-subtitle">Fórmula: <code style="color:var(--solar-flare)">(Dream Outcome × Probabilidade Percebida) ÷ (Atraso × Esforço)</code> · Threshold para escalar: ≥ 15</p>
      <div class="grid-2 stagger-children" style="margin-top:var(--space-6)">
        <div class="brand-card" style="border-top:3px solid var(--solar-flare)">
          <div class="brand-card-title">${IC.flame} Dream Outcome — <span style="color:var(--solar-flare)">Score: 10/10</span></div>
          <div class="brand-card-text">Acordar com reuniões qualificadas no calendário. Vendedores entrando em cada call preparados. Clientes sendo nutridos sem trabalho humano. Revenue crescendo sem contratar. O sonho do dono de integratora pequena que quer operar como uma grande — sem o custo de uma.</div>
        </div>
        <div class="brand-card" style="border-top:3px solid var(--success)">
          <div class="brand-card-title">${IC.target} Probabilidade Percebida — <span style="color:var(--success)">Score: 9/10</span></div>
          <div class="brand-card-text">21× mais conversão em &lt;15min (InsideSales.com). Garantia "Primeira Colheita": 10 reuniões em 45 dias ou devolução. Demo ao vivo com o lead real do integrador. Dossiê Hormozi gerado ao vivo. Prova antes de pagar.</div>
        </div>
        <div class="brand-card" style="border-top:3px solid var(--horizon-blue)">
          <div class="brand-card-title">${IC.bolt} Time Delay — <span style="color:var(--horizon-blue)">Score: 9/10</span></div>
          <div class="brand-card-text">Setup em &lt;30 minutos via UI (cola o token do WhatsApp, define nome da IA, pronto). Primeiro lead respondido pela IA em &lt;1 hora. Primeiro Dossiê Hormozi gerado no mesmo dia. Integrador vê resultado no dia 1.</div>
        </div>
        <div class="brand-card" style="border-top:3px solid #A78BFA">
          <div class="brand-card-title">${IC.wrench} Esforço & Sacrifício — <span style="color:#A78BFA">Score: 10/10</span></div>
          <div class="brand-card-text">Zero setup técnico. Zero planilha de leads para importar. Zero treinamento longo. O integrador cola o token do WhatsApp, define o nome da IA e pronto — o sistema qualifica leads e gera dossiês sozinho. Zero-Touch Onboarding.</div>
        </div>
      </div>
      <div class="brand-card" style="margin-top:var(--space-4);background:rgba(245,165,36,0.08);border:1px solid rgba(245,165,36,0.3);text-align:center">
        <div class="brand-card-title" style="font-size:22px;color:var(--solar-flare)">Value Equation Score: <strong>38/40</strong> — ESCALAR IMEDIATAMENTE</div>
        <div class="brand-card-text" style="margin-top:4px;font-size:13px">Threshold para escala: ≥ 15 · Sunny: 38 · Diferença: 23 pontos acima do mínimo</div>
      </div>
    </div>

    <!-- GRAND SLAM OFFER STACK -->
    <div class="section reveal">
      <span class="section-label">GRAND SLAM OFFER — STACK DE VALOR COMPLETO</span>
      <h2 class="section-title" style="font-size:32px">O que o integrador recebe</h2>
      <p class="section-subtitle">Dossiê Hormozi no topo — o único item que nenhum concorrente entrega. O integrador compara o preço com o valor percebido do stack, não com o concorrente.</p>
      <div style="margin-top:var(--space-6)">
        ${[
          ['🤖','Dossiê Hormozi por Lead','Roteiro C.L.O.S.E.R. personalizado, objeções previstas, score de fechamento e PDF entregue via WhatsApp antes de cada call.','R$150/lead','EXCLUSIVO: consultor de vendas cobra R$300–500/lead para fazer isso manualmente. Concorrentes não oferecem.','var(--solar-flare)','EXCLUSIVO'],
          ['☀️','Sunny Agent (SDR IA 24/7)','Responde, qualifica e agenda via WhatsApp, 24h/7d. Substitui 1 SDR completo. Nunca falta, nunca esquece.','R$3.500/mês','SDR humano júnior: R$2.500–3.500/mês, só funciona 8h/dia, sem final de semana','rgba(245,165,36,0.4)',null],
          ['🛡️','LNS Sub-Agent (CS por IA)','Acompanha clientes pós-venda, faz follow-up, onboarding contínuo e retenção proativa. Sem equipe de CS.','R$1.200/mês','CS humano: R$2.000–4.000/mês. Ou: cliente abandonado e churn silencioso','rgba(245,165,36,0.4)',null],
          ['🎯','Sunny Pipeline (CRM Solar)','CRM com campos, estágios e métricas desenhados para o ciclo solar. Nenhum campo genérico.','R$1.200/mês','HubSpot customizado: R$2.500/mês + 6 meses de setup + consultor','rgba(245,165,36,0.4)',null],
          ['📊','Sunny Command (Dashboard)','Torre de Comando: pipeline ao vivo, conversion rate, response time, Insolação meter. Não é planilha.','R$800/mês','Power BI customizado: R$1.200/mês mínimo','rgba(245,165,36,0.4)',null],
          ['🏆','Sunny Circle (Comunidade)','Grupo exclusivo de integradores: cases reais, benchmarks, roadmap antecipado, networking.','R$500/mês','Mastermind de negócios solar: R$800–2.000/mês','rgba(245,165,36,0.4)',null],
          ['📈','Weekly Harvest Report','Relatório automático toda semana: leads, reuniões, conversão IA vs. humano, Insolação do time.','R$400/mês','BI solar externo: R$600/mês','rgba(245,165,36,0.4)',null],
          ['🚀','Onboarding White-Glove','Setup completo em &lt;30min: nome da IA, persona, regras do negócio, WhatsApp integrado.','R$2.000','Consultoria de implementação: R$5.000–10.000','rgba(245,165,36,0.4)',null],
        ].map(([ico, name, desc, val, anchor, borderColor, badge]) => `
          <div class="brand-card" style="display:flex;gap:16px;align-items:flex-start;margin-bottom:12px;border-left:3px solid ${borderColor};transition:border-color 0.2s" onmouseenter="this.style.borderLeftColor='var(--solar-flare)'" onmouseleave="this.style.borderLeftColor='${borderColor}'">
            <span style="font-size:28px;flex-shrink:0">${ico}</span>
            <div style="flex:1">
              <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:12px;flex-wrap:wrap">
                <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
                  <strong style="color:var(--clean-white);font-size:15px">${name}</strong>
                  ${badge ? `<span style="background:rgba(245,165,36,0.2);color:var(--solar-flare);font-size:10px;font-weight:700;padding:2px 8px;border-radius:4px">${badge}</span>` : ''}
                </div>
                <span style="color:var(--solar-flare);font-weight:700;font-size:14px;white-space:nowrap">${val}</span>
              </div>
              <div style="color:var(--text-secondary);font-size:13px;margin-top:4px">${desc}</div>
              <div style="color:var(--text-tertiary);font-size:11px;margin-top:4px;font-style:italic">${anchor}</div>
            </div>
          </div>
        `).join('')}
        <div class="brand-card" style="background:rgba(245,165,36,0.1);border:1px solid rgba(245,165,36,0.4);text-align:center;margin-top:var(--space-4)">
          <div style="font-size:13px;color:var(--text-tertiary);margin-bottom:8px">VALOR TOTAL DO STACK (recorrente + único)</div>
          <div style="font-size:42px;font-weight:700;color:var(--solar-flare)">R$ 18.000+/mês</div>
          <div style="font-size:13px;color:var(--text-secondary);margin-top:8px">Plano Sol: R$1.497/mês · Ratio valor/preço: 12:1</div>
        </div>
      </div>
    </div>

    <!-- PLANOS (PRICING) -->
    <div class="section reveal">
      <span class="section-label">TIERED PRICING — PLANOS CALIBRADOS PARA O AVATAR REAL</span>
      <h2 class="section-title" style="font-size:32px">Escolha sua potência</h2>
      <p class="section-subtitle">Todos os planos são investimentos com retorno mensurável. O Dossiê Hormozi está disponível a partir do Plano Sol — onde está o avatar principal.</p>
      <div class="grid-3 stagger-children" style="margin-top:var(--space-6)">
        <!-- Raio -->
        <div class="brand-card" style="padding:var(--space-6);display:flex;flex-direction:column;gap:12px">
          <div>
            <div style="font-size:11px;letter-spacing:2px;color:var(--text-tertiary);margin-bottom:8px">PLANO</div>
            <div style="font-size:28px;font-weight:700;color:var(--clean-white)">⚡ Raio</div>
            <div style="font-size:13px;color:var(--text-secondary);margin-top:4px">1–2 vendedores · Integratora iniciando automação</div>
          </div>
          <div style="border-top:1px solid var(--border-subtle);padding-top:12px">
            <div style="font-size:13px;color:var(--text-tertiary)">por mês</div>
            <div style="font-size:40px;font-weight:700;color:var(--clean-white)">R$697</div>
            <div style="font-size:12px;color:var(--solar-flare)">→ ROI positivo com 1 projeto/mês</div>
          </div>
          <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:8px">
            ${['Sunny Agent (SDR IA 24/7)','Sunny Pipeline (CRM Solar)','100 leads qualificados/mês','Onboarding White-Glove &lt;30min','Dashboard básico','Suporte via chat'].map(i => `<li style="font-size:13px;color:var(--text-secondary);display:flex;gap:8px;align-items:center"><span style="color:var(--success)">${IC.check}</span>${i}</li>`).join('')}
            <li style="font-size:13px;color:var(--text-tertiary);display:flex;gap:8px;align-items:center"><span style="color:var(--text-tertiary)">${IC.xmark}</span>Dossiê Hormozi (disponível no Sol)</li>
            <li style="font-size:13px;color:var(--text-tertiary);display:flex;gap:8px;align-items:center"><span style="color:var(--text-tertiary)">${IC.xmark}</span>CS por IA (disponível no Sol)</li>
          </ul>
        </div>
        <!-- Sol — POPULAR -->
        <div class="brand-card" style="padding:var(--space-6);display:flex;flex-direction:column;gap:12px;border:2px solid var(--solar-flare);position:relative">
          <div style="position:absolute;top:-14px;left:50%;transform:translateX(-50%);background:var(--solar-flare);color:#09090B;font-size:11px;font-weight:700;letter-spacing:2px;padding:4px 16px;border-radius:100px">AVATAR PRINCIPAL</div>
          <div>
            <div style="font-size:11px;letter-spacing:2px;color:var(--text-tertiary);margin-bottom:8px">PLANO</div>
            <div style="font-size:28px;font-weight:700;color:var(--solar-flare)">☀️ Sol</div>
            <div style="font-size:13px;color:var(--text-secondary);margin-top:4px">3–5 vendedores · Integratora no avatar principal</div>
          </div>
          <div style="border-top:1px solid var(--border-subtle);padding-top:12px">
            <div style="font-size:13px;color:var(--text-tertiary)">por mês</div>
            <div style="font-size:40px;font-weight:700;color:var(--solar-flare)">R$1.497</div>
            <div style="font-size:12px;color:var(--text-secondary)">Stack de R$18.000+/mês · Ratio 12:1</div>
          </div>
          <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:8px">
            ${[
              'Tudo do Raio +',
              '🤖 Dossiê Hormozi (EXCLUSIVO)',
              '🛡️ CS por IA (LNS Sub-Agent)',
              'Leads ilimitados/mês',
              'Gamificação + Ranking closers',
              'Sunny Circle (comunidade)',
              'Weekly Harvest Report',
              'Dashboard Command completo',
              'Suporte prioritário',
            ].map((i, idx) => `<li style="font-size:13px;color:${idx > 0 && idx < 3 ? 'var(--solar-flare)' : 'var(--text-secondary)'};display:flex;gap:8px;align-items:center;font-weight:${idx > 0 && idx < 3 ? '600' : '400'}"><span style="color:var(--solar-flare)">${IC.check}</span>${i}</li>`).join('')}
          </ul>
        </div>
        <!-- Commander -->
        <div class="brand-card" style="padding:var(--space-6);display:flex;flex-direction:column;gap:12px;border:1px solid rgba(167,139,250,0.4)">
          <div>
            <div style="font-size:11px;letter-spacing:2px;color:var(--text-tertiary);margin-bottom:8px">PLANO</div>
            <div style="font-size:28px;font-weight:700;color:#A78BFA">👑 Commander</div>
            <div style="font-size:13px;color:var(--text-secondary);margin-top:4px">5+ vendedores · Revendas · White-label</div>
          </div>
          <div style="border-top:1px solid var(--border-subtle);padding-top:12px">
            <div style="font-size:13px;color:var(--text-tertiary)">por mês</div>
            <div style="font-size:40px;font-weight:700;color:var(--clean-white)">R$3.497</div>
            <div style="font-size:12px;color:#A78BFA">→ White-label + API + multi-instância</div>
          </div>
          <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:8px">
            ${['Tudo do Sol +','Vendedores ilimitados','White-label (sua marca na IA)','API REST completa','Multi-instância WhatsApp','Analytics avançados (BI)','Onboarding dedicado','SLA garantido (99.9%)'].map(i => `<li style="font-size:13px;color:var(--text-secondary);display:flex;gap:8px;align-items:center"><span style="color:#A78BFA">${IC.check}</span>${i}</li>`).join('')}
          </ul>
        </div>
      </div>

      <!-- Anchoring table -->
      <div class="section reveal" style="margin-top:var(--space-8)">
        <span class="section-label">ANCORAGEM — O CUSTO REAL PARA UMA INTEGRATORA DE 1–5 VENDEDORES</span>
        <table class="token-table" style="margin-top:var(--space-4)">
          <thead><tr><th>Opção</th><th>Custo Real</th><th>Cobre os 3 Momentos?</th><th>Resultado Honesto</th></tr></thead>
          <tbody>
            <tr>
              <td><strong>SDR júnior (1x)</strong></td>
              <td style="color:var(--eclipse-red)">R$2.500–3.500/mês</td>
              <td style="color:var(--eclipse-red)">❌ Só ANTES · Sem roteiro · Sem CS</td>
              <td style="color:var(--eclipse-red)">Sai em 3 meses, leva o pipeline</td>
            </tr>
            <tr>
              <td><strong>CRM solar (Aster/Azume)</strong></td>
              <td style="color:var(--text-tertiary)">R$400–800/mês</td>
              <td style="color:var(--eclipse-red)">❌ Só organiza · Não atende · Sem dossiê</td>
              <td style="color:var(--text-tertiary)">Planilha mais bonita. Leads ainda morrem.</td>
            </tr>
            <tr>
              <td><strong>Status quo (WhatsApp + planilha)</strong></td>
              <td style="color:var(--eclipse-red)">R$0 + R$21K invisíveis/mês</td>
              <td style="color:var(--eclipse-red)">❌ Nunca · Improvisa · Zero CS</td>
              <td style="color:var(--eclipse-red)">70% dos leads morrem. Nenhum vendedor fecha bem.</td>
            </tr>
            <tr>
              <td><strong style="color:var(--solar-flare)">☀️ Sunny Sol</strong></td>
              <td style="color:var(--success)">R$1.497/mês</td>
              <td style="color:var(--success)">✅ ANTES + DURANTE + DEPOIS</td>
              <td style="color:var(--success)">Leads respondidos, vendedores roteirizados, CS por IA</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- GARANTIA PRIMEIRA COLHEITA -->
    <div class="section reveal">
      <span class="section-label">GRAND SLAM GUARANTEE — CALIBRADA PARA INTEGRADORAS PEQUENAS</span>
      <h2 class="section-title" style="font-size:32px">Garantia Primeira Colheita</h2>
      <div style="background:rgba(245,165,36,0.06);border:2px solid rgba(245,165,36,0.3);border-radius:16px;padding:var(--space-8);margin-top:var(--space-6);text-align:center">
        <div style="font-size:48px;margin-bottom:16px">☀️</div>
        <h3 style="font-size:28px;font-weight:700;color:var(--clean-white);margin-bottom:16px">45 Dias · 10 Reuniões + 1 Dossiê</h3>
        <p style="font-size:18px;color:var(--text-secondary);max-width:680px;margin:0 auto 24px;line-height:1.6">Se em <strong style="color:var(--solar-flare)">45 dias</strong> você não tiver pelo menos <strong style="color:var(--solar-flare)">10 reuniões qualificadas</strong> agendadas pela IA e <strong style="color:var(--solar-flare)">1 Dossiê Hormozi</strong> gerado antes de uma call, devolvemos <strong style="color:var(--solar-flare)">100%</strong> de tudo que pagou.</p>
        <p style="font-size:14px;color:var(--text-tertiary);max-width:520px;margin:0 auto 24px">Threshold calibrado para integradoras com ~50–150 leads/mês. Se você tem leads chegando e WhatsApp ativo, a Sunny entrega. A garantia é confiante, não temerária.</p>
        <div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap">
          ${['Sem formulário burocrático','Sem conversa difícil','Sem prazo de 90 dias','Transferência imediata'].map(i => `<span class="tag" style="background:rgba(245,165,36,0.15);color:var(--solar-flare);border-color:rgba(245,165,36,0.3)">${IC.check} ${i}</span>`).join('')}
        </div>
      </div>
      <div class="grid-2 stagger-children" style="margin-top:var(--space-4)">
        <div class="brand-card" style="border-left:3px solid var(--solar-flare)">
          <div class="brand-card-title">Por que a garantia é segura para a Sunny?</div>
          <div class="brand-card-text">Gate de qualificação: o integrador precisa ter leads chegando (mín. 50/mês) e WhatsApp Business ativo. Quem passa pelo gate, colhe em &lt;2 semanas. A garantia não é generosidade — é confiança no produto. Nenhum cliente elegível deixou de ter resultado em beta.</div>
        </div>
        <div class="brand-card" style="border-left:3px solid var(--horizon-blue)">
          <div class="brand-card-title">O que a garantia faz pela conversão?</div>
          <div class="brand-card-text">Elimina o único obstáculo de um integrador cético: "E se não funcionar no meu caso?" Com zero risco financeiro, a objeção desaparece. A garantia transforma ceticismo em teste — e o teste transforma descrédito em defensor da marca. É o Gate 0 da fidelidade tribal.</div>
        </div>
      </div>
    </div>

    <!-- ANTI-PATTERNS DA OFERTA -->
    <div class="section reveal">
      <span class="section-label">ANTI-PATTERNS — O QUE NUNCA FAZER NA OFERTA</span>
      <h2 class="section-title" style="font-size:28px">Erros que destroem a percepção de valor</h2>
      <div class="grid-2 stagger-children" style="margin-top:var(--space-4)">
        ${[
          ['Avatar errado','Nunca comunicar "5-100 vendedores". O avatar real é 1–5. Mensagem errada = prospect errado = churn alto.'],
          ['Enterrar o Dossiê Hormozi','O dossiê é o único diferencial exclusivo. Deve ser a primeira coisa mencionada na demo, não um item de lista no fim.'],
          ['Vender por preço','Nunca comparar preço com concorrente. Ancoragem: custo do SDR humano júnior (R$3.500/mês) vs Sunny Sol (R$1.497 + 3 serviços extras).'],
          ['Escalar antes de validar','Sem tráfego pago antes de conversão ≥ 20% no pitch presencial. Valide a oferta com warm outreach primeiro.'],
          ['Demo de feature','Demo não mostra "funcionalidades". Mostra 1 resultado: lead entra → IA responde → dossiê gerado → reunião agendada. 3 minutos máximo.'],
          ['Churn > 5%','Nunca escalar aquisição com churn acima de 5%. Integradoras pequenas indicam muito quando satisfeitas. Cuide do LTV primeiro.'],
        ].map(([t, d]) => `<div class="brand-card" style="border-left:3px solid var(--eclipse-red)"><div class="brand-card-title" style="color:var(--eclipse-red)">${IC.xmark} ${t}</div><div class="brand-card-text">${d}</div></div>`).join('')}
      </div>
    </div>

    <!-- PRÓXIMA AÇÃO -->
    <div class="section reveal">
      <span class="section-label">PRÓXIMA AÇÃO — SEQUÊNCIA HORMOZI PARA LANÇAR</span>
      <div class="brand-card" style="background:rgba(245,165,36,0.08);border:1px solid rgba(245,165,36,0.3);padding:var(--space-8)">
        <h3 style="font-size:22px;font-weight:700;color:var(--clean-white);margin-bottom:var(--space-4)">Antes de escalar qualquer canal de aquisição:</h3>
        <div style="display:flex;flex-direction:column;gap:12px">
          ${[
            ['1','Validar PUV com 10 conversas warm outreach (donos de integratora conhecidos)','Fundador','48h','Conversão ≥ 20% no pitch'],
            ['2','Ativar Dossiê Hormozi nos primeiros 3 clientes e medir taxa de fechamento','Produto + CS','7 dias','Ao menos 1 fechamento com dossiê'],
            ['3','Garantir churn < 5% antes de qualquer campanha paga','CS + Produto','2 semanas','Retenção monitorada e saudável'],
            ['4','Coletar 3 cases com: leads respondidos, reuniões geradas, projetos fechados','CS','30 dias','Prova social com número real'],
            ['5','Ativar cold outreach + content orgânico com a nova PUV e avatar correto','Marketing','45 dias','CAC:LTV ≥ 1:3'],
          ].map(([n, a, d, p, m]) => `
            <div style="display:flex;gap:16px;align-items:flex-start;padding:12px;background:rgba(255,255,255,0.03);border-radius:8px;border:1px solid var(--border-subtle)">
              <div style="background:var(--solar-flare);color:#09090B;font-weight:700;font-size:13px;width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0">${n}</div>
              <div style="flex:1">
                <div style="font-weight:600;color:var(--clean-white);font-size:14px">${a}</div>
                <div style="font-size:12px;color:var(--text-tertiary);margin-top:4px">${d} · Prazo: ${p} · Meta: <span style="color:var(--success)">${m}</span></div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `,

  'sunny-awards': () => `
    <style>
      @keyframes awards-pulse { 0%,100%{opacity:.7;transform:scale(1)} 50%{opacity:1;transform:scale(1.04)} }
      @keyframes awards-shimmer { 0%{background-position:-200% center} 100%{background-position:200% center} }
      @keyframes awards-orbit { from{transform:rotate(0deg) translateX(140px) rotate(0deg)} to{transform:rotate(360deg) translateX(140px) rotate(-360deg)} }
      @keyframes awards-float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
      @keyframes awards-glow-pulse { 0%,100%{box-shadow:0 0 20px rgba(245,165,36,.35),0 0 60px rgba(245,165,36,.15)} 50%{box-shadow:0 0 40px rgba(245,165,36,.65),0 0 100px rgba(245,165,36,.3),0 0 200px rgba(245,165,36,.1)} }
      @keyframes badge-appear { from{opacity:0;transform:scale(.5) rotate(-15deg)} to{opacity:1;transform:scale(1) rotate(0deg)} }
      @keyframes scan-line { 0%{top:-10%} 100%{top:110%} }
      @keyframes neon-flicker { 0%,95%,100%{opacity:1} 96%{opacity:.4} 98%{opacity:.9} }
      .awards-shimmer-text {
        background:linear-gradient(90deg,#F5A524 0%,#FACC15 25%,#fff 50%,#FACC15 75%,#F5A524 100%);
        background-size:200% auto;
        -webkit-background-clip:text; -webkit-text-fill-color:transparent;
        animation:awards-shimmer 3s linear infinite;
      }
      .award-badge-card {
        position:relative; border-radius:20px; padding:28px 24px; overflow:hidden;
        transition:transform .3s cubic-bezier(.34,1.56,.64,1), box-shadow .3s ease;
        cursor:pointer;
      }
      .award-badge-card:hover { transform:translateY(-6px) scale(1.02); }
      .award-badge-card::before {
        content:''; position:absolute; inset:0; border-radius:20px;
        background:linear-gradient(135deg,rgba(255,255,255,.07) 0%,transparent 60%);
        pointer-events:none;
      }
      .award-badge-card::after {
        content:''; position:absolute; top:-50%; left:-50%; width:200%; height:200%;
        background:radial-gradient(circle at center,rgba(255,255,255,.05) 0%,transparent 60%);
        pointer-events:none; transition:opacity .4s;
        opacity:0;
      }
      .award-badge-card:hover::after { opacity:1; }
      .hook-phase-card {
        border-radius:18px; padding:28px; position:relative; overflow:hidden;
        transition:transform .3s ease, box-shadow .3s ease;
      }
      .hook-phase-card:hover { transform:translateY(-4px); }
      .scan-effect {
        position:absolute; left:0; right:0; height:2px;
        background:linear-gradient(90deg,transparent,rgba(245,165,36,.8),transparent);
        animation:scan-line 4s linear infinite; pointer-events:none;
      }
    </style>

    <!-- ═══════════════════ HERO ULTRA-GLOWING ═══════════════════ -->
    <div style="position:relative;overflow:hidden;min-height:80vh;display:flex;flex-direction:column;justify-content:center;padding:120px var(--space-8) 80px;background:#030308;">
      <!-- BACKGROUND LAYERS -->
      <div style="position:absolute;inset:0;background:radial-gradient(ellipse 80% 60% at 50% -10%,rgba(245,165,36,.28) 0%,transparent 65%),radial-gradient(ellipse 40% 40% at 80% 80%,rgba(56,189,248,.12) 0%,transparent 60%),radial-gradient(ellipse 30% 30% at 20% 70%,rgba(167,139,250,.1) 0%,transparent 60%);pointer-events:none"></div>
      <div style="position:absolute;inset:0;background-image:repeating-linear-gradient(0deg,transparent,transparent 60px,rgba(245,165,36,.025) 60px,rgba(245,165,36,.025) 61px),repeating-linear-gradient(90deg,transparent,transparent 60px,rgba(245,165,36,.025) 60px,rgba(245,165,36,.025) 61px);pointer-events:none;z-index:0"></div>
      <!-- Scan line -->
      <div class="scan-effect"></div>

      <!-- ORBITAL RINGS -->
      <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:600px;height:600px;border:1px solid rgba(245,165,36,.06);border-radius:50%;pointer-events:none"></div>
      <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:450px;height:450px;border:1px solid rgba(245,165,36,.04);border-radius:50%;pointer-events:none"></div>

      <!-- FLOATING TROPHIES -->
      <div style="position:absolute;top:15%;right:8%;font-size:80px;animation:awards-float 5s ease-in-out infinite;opacity:.15;pointer-events:none">🏆</div>
      <div style="position:absolute;top:60%;right:15%;font-size:50px;animation:awards-float 7s ease-in-out 1s infinite;opacity:.1;pointer-events:none">⭐</div>
      <div style="position:absolute;top:25%;left:5%;font-size:40px;animation:awards-float 6s ease-in-out 2s infinite;opacity:.1;pointer-events:none">🔥</div>

      <div style="position:relative;z-index:2;max-width:900px">
        <div style="display:inline-flex;align-items:center;gap:10px;background:rgba(245,165,36,.1);border:1px solid rgba(245,165,36,.35);border-radius:100px;padding:6px 18px;margin-bottom:var(--space-6)">
          <span style="width:8px;height:8px;border-radius:50%;background:var(--solar-flare);box-shadow:0 0 10px var(--solar-flare);animation:awards-pulse 2s infinite;flex-shrink:0"></span>
          <span style="font-size:11px;letter-spacing:3px;color:var(--solar-flare);font-weight:700">SUNNY AWARDS · GAMIFICAÇÃO · HOOK MODEL NIR EYAL</span>
        </div>

        <h1 style="font-size:clamp(52px,8vw,96px);font-weight:700;line-height:1;margin-bottom:var(--space-6);font-family:var(--font-brand)">
          <span class="awards-shimmer-text">Sunny</span><br>
          <span style="color:var(--foreground)">Awards</span>
        </h1>

        <p style="font-size:clamp(16px,2vw,22px);color:var(--light);max-width:660px;line-height:1.7;margin-bottom:var(--space-8)">O sistema de gamificação que transforma vendedores em atletas de performance — sem o CEO cobrar, motivar ou micro-gerenciar.<br><span style="color:var(--solar-flare);font-weight:600">O Loop ∞ de Nir Eyal aplicado à operação solar.</span></p>

        <!-- STAT ROW GLOWING -->
        <div style="display:flex;gap:var(--space-4);flex-wrap:wrap">
          ${[
            ['4','fases','Hook Model Loop','rgba(245,165,36,.8)'],
            ['6','badges','Conquistas ativas','rgba(250,204,21,.8)'],
            ['~3','semanas','Hábito formado','rgba(56,189,248,.8)'],
            ['∞','loop','Auto-reforçante','rgba(167,139,250,.8)'],
          ].map(([v,u,l,c]) => `
            <div style="background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:16px;padding:20px 24px;position:relative;overflow:hidden;min-width:120px">
              <div style="position:absolute;top:0;left:0;right:0;height:2px;background:${c};border-radius:2px;opacity:.7"></div>
              <div style="font-size:36px;font-weight:700;color:${c};font-family:var(--font-brand);line-height:1">${v}</div>
              <div style="font-size:12px;color:var(--text-tertiary,#71717A);font-weight:600;margin-top:2px">${u}</div>
              <div style="font-size:11px;color:var(--muted);margin-top:4px">${l}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>

    <!-- ═══════════════════ O PROBLEMA ═══════════════════ -->
    <div class="section reveal" style="position:relative;overflow:hidden">
      <div style="position:absolute;inset:0;background:radial-gradient(ellipse 50% 80% at 0% 50%,rgba(220,38,38,.07) 0%,transparent 60%);pointer-events:none"></div>
      <span class="section-label">O PROBLEMA — POR QUE VENDEDORES PARAM DE USAR O SISTEMA</span>
      <h2 class="section-title" style="font-size:32px">Sem engajamento, o melhor sistema vira gaveta</h2>
      <p class="section-subtitle">O Dossiê Hormozi foi gerado. Ninguém abriu. O CEO não sabe quem usa o processo. O vendedor esqueceu que existe.<br><span style="color:rgba(220,38,38,.9)">Esse é o colapso silencioso que os Sunny Awards resolvem.</span></p>

      <div class="grid-3 stagger-children" style="margin-top:var(--space-6)">
        ${[
          ['😶','Alerta silenciado','O alerta de dossiê pronto estava desativado. O vendedor não sabe que tem um roteiro completo esperando — e entra na call no improviso.','rgba(220,38,38,.65)','rgba(220,38,38,.08)'],
          ['📉','CEO no escuro','Sem painel de performance do time, o CEO não sabe quem usa o processo e quem ignora. Zero dados para cobrança, treino ou promoção.','rgba(220,38,38,.65)','rgba(220,38,38,.06)'],
          ['🔇','Loop quebrado','Sem feedback do vendedor, a IA não aprende. Sem aprendizado, o próximo dossiê é genérico. O sistema para de melhorar sozinho.','rgba(220,38,38,.65)','rgba(220,38,38,.05)'],
        ].map(([ic,t,d,bc,bg]) => `
          <div style="background:${bg};border:1.5px solid ${bc};border-radius:18px;padding:28px;position:relative;overflow:hidden;transition:transform .3s ease,box-shadow .3s ease" onmouseenter="this.style.transform='translateY(-4px)';this.style.boxShadow='0 0 30px ${bc.replace('.65','.2')}'" onmouseleave="this.style.transform='';this.style.boxShadow=''">
            <div style="position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,transparent,${bc},transparent)"></div>
            <div style="font-size:36px;margin-bottom:14px">${ic}</div>
            <div style="font-size:15px;font-weight:700;color:#f87171;margin-bottom:10px">${t}</div>
            <div style="font-size:13px;color:var(--light);line-height:1.7">${d}</div>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- ═══════════════════ HOOK MODEL 4 FASES ═══════════════════ -->
    <div class="section reveal" style="position:relative;overflow:hidden">
      <div style="position:absolute;inset:0;background:radial-gradient(ellipse 60% 60% at 100% 0%,rgba(245,165,36,.08) 0%,transparent 60%),radial-gradient(ellipse 40% 40% at 0% 100%,rgba(56,189,248,.06) 0%,transparent 60%);pointer-events:none"></div>
      <span class="section-label">HOOK MODEL — NIR EYAL · O LOOP ∞ QUE CRIA DEPENDÊNCIA POSITIVA</span>
      <h2 class="section-title" style="font-size:32px">O Loop que transforma hábito em resultado</h2>
      <p class="section-subtitle" style="margin-bottom:var(--space-8)">Cada fase responde a uma pergunta-chave. Juntas, criam um ciclo que o vendedor não quer quebrar — porque sair significa perder tudo que investiu.</p>

      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(270px,1fr));gap:var(--space-5)">
        ${[
          {
            num:'01', name:'GATILHO', emoji:'🔴', q:'"O que leva o vendedor ao sistema?"',
            color:'rgba(220,38,38,1)', colorMid:'rgba(220,38,38,.4)', colorBg:'rgba(220,38,38,.08)',
            items:[
              ['Externo','🔥 Push WhatsApp: "Dossiê pronto para <b style=\'color:#fca5a5\'>Carlos F.</b> — Score <b style=\'color:#fca5a5\'>8/10</b>"'],
              ['Externo','📊 Badge <span style=\'background:rgba(220,38,38,.25);color:#fca5a5;padding:1px 7px;border-radius:4px;font-weight:700\'>1 dossiê pendente</span> na sidebar do CRM'],
              ['Interno','😟 Ansiedade de improvisar — medo de perder a comissão por despreparo'],
              ['Interno','☀️ Rotina matinal: abre CRM antes do café (~3 semanas de uso)'],
            ],
            footer:'Meta: migrar de gatilho externo → interno em ~3 semanas.',
          },
          {
            num:'02', name:'AÇÃO', emoji:'🟢', q:'"Qual é o comportamento mais simples antes da recompensa?"',
            color:'rgba(34,197,94,1)', colorMid:'rgba(34,197,94,.4)', colorBg:'rgba(34,197,94,.07)',
            items:[
              ['Fricção zero','Push → 1 clique → dossiê expandido. Sem navegação extra.'],
              ['Regra Eyal','<code style=\'font-size:11px\'>Motivação × Habilidade > Fricção</code>. +2 cliques = hábito não se forma.'],
              ['Deep link','<code style=\'font-size:10px;color:rgba(34,197,94,.9)\'>crm.sunny.com/leads/247#dossie</code>'],
            ],
            footer:'Quanto menor a fricção, mais rápido o hábito se instala.',
          },
          {
            num:'03', name:'RECOMPENSA', emoji:'🟡', q:'"A recompensa satisfaz, mas deixa querendo mais?"',
            color:'rgba(234,179,8,1)', colorMid:'rgba(234,179,8,.4)', colorBg:'rgba(234,179,8,.08)',
            items:[
              ['Da Tribo','🏆 Ranking: "Você subiu para 2º lugar este mês" — status público'],
              ['Da Caça','🧠 Insight inesperado do Hormozi — objeção que a IA detectou e ele não esperava'],
              ['Do Ego','⭐ Score de aderência: "Sua última call teve 9/10" — progresso pessoal'],
            ],
            footer:'Variabilidade = slot machine effect. Cada dossiê revela algo novo. Isso cria o vício.',
          },
          {
            num:'04', name:'INVESTIMENTO', emoji:'🔵', q:'"Que trabalho aumenta a probabilidade de retorno?"',
            color:'rgba(56,189,248,1)', colorMid:'rgba(56,189,248,.4)', colorBg:'rgba(56,189,248,.07)',
            items:[
              ['Registro','Won / Lost / Follow-up + motivo da perda'],
              ['Score','Aderência ao roteiro Hormozi: slider 0–10'],
              ['Feedback','Texto livre para a IA: "objeção do cônjuge veio mais cedo"'],
            ],
            footer:'IKEA Effect: o vendedor sente que o sistema é "dele". Cancelar = perder o investimento.',
          },
        ].map(p => `
          <div class="hook-phase-card" style="background:${p.colorBg};border:1.5px solid ${p.colorMid};box-shadow:0 4px 24px ${p.colorBg.replace('.07','.1').replace('.08','.1')}" onmouseenter="this.style.boxShadow='0 0 40px ${p.colorBg.replace('.07','.15').replace('.08','.15')}'" onmouseleave="this.style.boxShadow='0 4px 24px ${p.colorBg.replace('.07','.1').replace('.08','.1')}'">
            <div class="scan-effect" style="background:linear-gradient(90deg,transparent,${p.colorMid},transparent)"></div>
            <div style="display:flex;align-items:center;gap:12px;margin-bottom:var(--space-4)">
              <div style="background:${p.colorBg};border:1.5px solid ${p.color};border-radius:50%;width:42px;height:42px;display:flex;align-items:center;justify-content:center;font-size:18px;box-shadow:0 0 16px ${p.colorMid}">${p.emoji}</div>
              <div>
                <div style="font-size:10px;letter-spacing:2px;color:${p.color};font-weight:700">FASE ${p.num}</div>
                <div style="font-size:17px;font-weight:800;color:var(--foreground);letter-spacing:-.3px">${p.name}</div>
              </div>
            </div>
            <div style="font-size:12px;color:var(--muted);margin-bottom:14px;font-style:italic">${p.q}</div>
            <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:16px">
              ${p.items.map(([tag, txt]) => `
                <div style="display:flex;gap:8px;align-items:flex-start">
                  <span style="font-size:9px;background:${p.colorBg};color:${p.color};border:1px solid ${p.colorMid};padding:2px 7px;border-radius:4px;flex-shrink:0;margin-top:2px;font-weight:700;letter-spacing:.5px">${tag.toUpperCase()}</span>
                  <div style="font-size:12px;color:var(--light);line-height:1.5">${txt}</div>
                </div>
              `).join('')}
            </div>
            <div style="padding-top:12px;border-top:1px solid ${p.colorMid};font-size:11px;color:${p.color};font-style:italic">${p.footer}</div>
          </div>
        `).join('')}
      </div>

      <!-- LOOP VISUAL GLOWING -->
      <div style="margin-top:var(--space-8);text-align:center;padding:var(--space-6) var(--space-8);background:rgba(0,0,0,.4);border:1px solid rgba(245,165,36,.2);border-radius:20px;position:relative;overflow:hidden">
        <div style="position:absolute;inset:0;background:radial-gradient(ellipse at 50% 50%,rgba(245,165,36,.06) 0%,transparent 70%);pointer-events:none"></div>
        <div style="font-size:11px;letter-spacing:3px;color:var(--muted);margin-bottom:var(--space-4);font-weight:600">O CICLO INFINITO</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:10px;flex-wrap:wrap">
          ${[
            ['🔴 Gatilho','rgba(220,38,38,.7)','rgba(220,38,38,.12)'],
            ['→','var(--muted)','transparent'],
            ['🟢 Ação','rgba(34,197,94,.7)','rgba(34,197,94,.1)'],
            ['→','var(--muted)','transparent'],
            ['🟡 Recompensa','rgba(234,179,8,.7)','rgba(234,179,8,.1)'],
            ['→','var(--muted)','transparent'],
            ['🔵 Investimento','rgba(56,189,248,.7)','rgba(56,189,248,.1)'],
          ].map(([label, c, bg]) => label === '→'
            ? `<span style="color:${c};font-size:18px;font-weight:300">→</span>`
            : `<span style="background:${bg};color:${c};border:1px solid ${c.replace('.7','.3')};padding:8px 18px;border-radius:100px;font-weight:700;font-size:13px;box-shadow:0 0 12px ${bg.replace('.1','.15').replace('.12','.15')}">${label}</span>`
          ).join('')}
          <span style="color:var(--solar-flare);font-weight:900;font-size:24px;text-shadow:0 0 20px var(--solar-flare)">→ ∞</span>
        </div>
        <div style="font-size:12px;color:var(--muted);margin-top:var(--space-4)">Mais investimento → Melhor recompensa → Mais investimento → Loop auto-reforçante que reduz dependência operacional a cada ciclo.</div>
      </div>
    </div>

    <!-- ═══════════════════ BADGES — DESIGN ULTRA ═══════════════════ -->
    <div class="section reveal" style="position:relative;overflow:hidden">
      <div style="position:absolute;inset:0;background:radial-gradient(ellipse 70% 50% at 50% 0%,rgba(245,165,36,.1) 0%,transparent 60%);pointer-events:none"></div>
      <span class="section-label">SUNNY AWARDS — AS 6 CONQUISTAS DO SISTEMA</span>
      <h2 class="section-title" style="font-size:clamp(28px,4vw,48px)">Badges que criam <span class="awards-shimmer-text">identidade de performance</span></h2>
      <p class="section-subtitle" style="margin-bottom:var(--space-8)">Cada badge é uma recompensa variável que reforça o comportamento certo. Quem tem o badge é reconhecido pelo time. Quem não tem — quer ter.</p>

      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:var(--space-5)">
        ${[
          { icon:'🏆', name:'Top Closer',       color:'#F5A524', glow:'rgba(245,165,36,.5)',  bg:'rgba(245,165,36,.07)', border:'rgba(245,165,36,.35)', tier:'OURO',    desc:'Maior taxa de conversão do mês',        criteria:'Conversão #1 no período mensal', impact:'Posição de prestígio máximo — visível para todo o time.', freq:'Mensal' },
          { icon:'📚', name:'Dossiê Master',     color:'#38BDF8', glow:'rgba(56,189,248,.5)',   bg:'rgba(56,189,248,.06)',  border:'rgba(56,189,248,.28)', tier:'PLATINA', desc:'Usou o dossiê em +80% das calls',       criteria:'Abertura do Dossiê Hormozi em ≥ 80% dos leads', impact:'Prova que o processo funciona. Quem usa dossiê fecha mais.', freq:'Contínuo' },
          { icon:'🔥', name:'Streak',            color:'#EF4444', glow:'rgba(239,68,68,.5)',    bg:'rgba(239,68,68,.06)',   border:'rgba(239,68,68,.28)',  tier:'RARO',    desc:'3+ vendas consecutivas',               criteria:'3 fechamentos seguidos sem interrupção', impact:'Momento de confiança capturado. Time percebe quem está em chamas.', freq:'Event-driven' },
          { icon:'⭐', name:'Nota 10',           color:'#A78BFA', glow:'rgba(167,139,250,.5)',  bg:'rgba(167,139,250,.06)', border:'rgba(167,139,250,.28)',tier:'ELITE',   desc:'Aderência ao roteiro ≥ 9/10',          criteria:'Score C.L.O.S.E.R. igual ou superior a 9/10', impact:'Valida que seguir o processo é melhor que improvisar.', freq:'Por call registrada' },
          { icon:'☀️', name:'Insolação',         color:'#FACC15', glow:'rgba(250,204,21,.5)',   bg:'rgba(250,204,21,.06)',  border:'rgba(250,204,21,.25)', tier:'MENSAL',  desc:'Meta mensal atingida em 135%+',         criteria:'135%+ da meta de reuniões qualificadas', impact:'Reconhecimento público — post social "Integrador do mês".', freq:'Mensal' },
          { icon:'💀', name:'Zero Morte',        color:'#34D399', glow:'rgba(52,211,153,.5)',   bg:'rgba(52,211,153,.06)',  border:'rgba(52,211,153,.25)', tier:'LENDÁRIO', desc:'0 leads sem resposta no mês',          criteria:'100% dos leads atribuídos com resposta', impact:'Incorpora o DNA da marca: "Nenhum lead morre ao sol."', freq:'Mensal' },
        ].map((b, i) => `
          <div class="award-badge-card" style="background:${b.bg};border:1.5px solid ${b.border};box-shadow:0 4px 32px ${b.glow.replace('.5','.12')};animation:badge-appear .5s cubic-bezier(.34,1.56,.64,1) ${i * 0.08}s both" onmouseenter="this.style.boxShadow='0 0 60px ${b.glow.replace('.5','.3')},0 0 120px ${b.glow.replace('.5','.1')}'" onmouseleave="this.style.boxShadow='0 4px 32px ${b.glow.replace('.5','.12')}'">
            <!-- TOP GLOW LINE -->
            <div style="position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,transparent,${b.color},transparent);border-radius:3px 3px 0 0"></div>
            <!-- BIG ICON BG -->
            <div style="position:absolute;top:-10px;right:-10px;font-size:100px;opacity:.06;pointer-events:none;line-height:1">${b.icon}</div>

            <!-- TIER BADGE -->
            <div style="position:absolute;top:16px;right:16px;background:${b.bg};border:1px solid ${b.border};color:${b.color};font-size:9px;font-weight:800;letter-spacing:1.5px;padding:3px 10px;border-radius:100px;box-shadow:0 0 10px ${b.glow.replace('.5','.25')}">${b.tier}</div>

            <!-- ICON GLOWING -->
            <div style="font-size:52px;margin-bottom:16px;filter:drop-shadow(0 0 16px ${b.glow.replace('.5','.8')});animation:awards-pulse ${3 + i * .4}s ease-in-out infinite">${b.icon}</div>

            <div style="font-size:20px;font-weight:800;color:var(--foreground);margin-bottom:6px;letter-spacing:-.3px">${b.name}</div>
            <div style="font-size:13px;color:${b.color};font-weight:600;margin-bottom:16px">${b.desc}</div>

            <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:16px">
              <div style="display:flex;gap:8px;align-items:flex-start"><span style="font-size:9px;color:var(--muted);font-weight:700;letter-spacing:1px;flex-shrink:0;margin-top:3px">CRITÉRIO</span><span style="font-size:12px;color:var(--light);line-height:1.5">${b.criteria}</span></div>
              <div style="display:flex;gap:8px;align-items:flex-start"><span style="font-size:9px;color:var(--muted);font-weight:700;letter-spacing:1px;flex-shrink:0;margin-top:3px">IMPACTO</span><span style="font-size:12px;color:var(--light);line-height:1.5">${b.impact}</span></div>
            </div>

            <div style="display:flex;justify-content:space-between;align-items:center;padding-top:14px;border-top:1px solid ${b.border}">
              <span style="font-size:9px;letter-spacing:1.5px;color:var(--muted);font-weight:700">FREQUÊNCIA</span>
              <span style="font-size:11px;color:${b.color};font-weight:700;background:${b.bg};padding:3px 10px;border-radius:100px;border:1px solid ${b.border}">${b.freq}</span>
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- ═══════════════════ RANKING PÚBLICO ═══════════════════ -->
    <div class="section reveal" style="position:relative;overflow:hidden">
      <div style="position:absolute;inset:0;background:radial-gradient(ellipse 50% 60% at 100% 50%,rgba(56,189,248,.07) 0%,transparent 60%);pointer-events:none"></div>
      <span class="section-label">SELLER RANKING — TORRE DE COMANDO DO TIME COMERCIAL</span>
      <h2 class="section-title" style="font-size:32px">O ranking que cria <span style="color:var(--horizon-blue)">pressão positiva natural</span></h2>
      <p class="section-subtitle">O CEO para de cobrar. O ranking faz isso sozinho. Cada vendedor sabe exatamente onde está — e o que precisa fazer para subir.</p>

      <!-- RANKING CARD -->
      <div style="background:rgba(10,10,14,.9);border:1px solid rgba(56,189,248,.2);border-radius:24px;overflow:hidden;margin-top:var(--space-6);box-shadow:0 0 60px rgba(56,189,248,.06)">
        <!-- Header -->
        <div style="padding:20px 28px;border-bottom:1px solid rgba(255,255,255,.06);display:flex;justify-content:space-between;align-items:center;background:rgba(56,189,248,.04)">
          <div>
            <div style="font-size:15px;font-weight:700;color:var(--foreground)">Seller Ranking — Abril 2026</div>
            <div style="font-size:11px;color:var(--muted);margin-top:2px">Performance em tempo real · Atualizado a cada call registrada</div>
          </div>
          <div style="display:flex;align-items:center;gap:8px;background:rgba(34,197,94,.1);border:1px solid rgba(34,197,94,.3);border-radius:100px;padding:6px 14px">
            <span style="width:7px;height:7px;border-radius:50%;background:#22C55E;box-shadow:0 0 8px #22C55E;animation:awards-pulse 1.5s infinite"></span>
            <span style="font-size:11px;font-weight:700;color:#4ade80">LIVE</span>
          </div>
        </div>

        <!-- Column headers -->
        <div style="padding:10px 28px;border-bottom:1px solid rgba(255,255,255,.04);display:grid;grid-template-columns:40px 1fr 90px 90px 90px;gap:16px;align-items:center">
          ${['#','VENDEDOR','CONVERSÃO','USO DOSSIÊ','ADERÊNCIA'].map(h => `<span style="font-size:9px;letter-spacing:1.5px;color:var(--muted);font-weight:700">${h}</span>`).join('')}
        </div>

        <!-- Rows -->
        ${[
          { pos:1, name:'Rafael M.', conv:'68%', dossie:'94%', score:'9.2', badges:['🏆','📚','🔥'], streak:true,  c:'#F5A524', glow:'rgba(245,165,36,.15)' },
          { pos:2, name:'Camila S.', conv:'61%', dossie:'88%', score:'8.7', badges:['📚','⭐'],       streak:false, c:'#E8740C', glow:'transparent' },
          { pos:3, name:'Lucas P.',  conv:'54%', dossie:'76%', score:'8.1', badges:['⭐'],            streak:false, c:'#A78BFA', glow:'transparent' },
          { pos:4, name:'Ana F.',    conv:'47%', dossie:'61%', score:'7.4', badges:[],               streak:false, c:'var(--muted)', glow:'transparent' },
        ].map(v => `
          <div style="padding:16px 28px;border-bottom:1px solid rgba(255,255,255,.04);display:grid;grid-template-columns:40px 1fr 90px 90px 90px;gap:16px;align-items:center;background:${v.glow};transition:background .2s" onmouseenter="this.style.background='rgba(255,255,255,.025)'" onmouseleave="this.style.background='${v.glow}'">
            <div style="font-size:20px;font-weight:800;color:${v.c};text-shadow:0 0 12px ${v.c}">${v.pos}</div>
            <div>
              <div style="font-size:14px;font-weight:600;color:var(--foreground)">${v.name}${v.streak ? ' <span style=\'filter:drop-shadow(0 0 4px #ef4444)\'>🔥</span>' : ''}</div>
              <div style="display:flex;gap:5px;margin-top:5px">${v.badges.map(b => `<span style="font-size:16px;filter:drop-shadow(0 0 6px rgba(245,165,36,.6))">${b}</span>`).join('')}</div>
            </div>
            <div style="text-align:right"><div style="font-size:15px;font-weight:800;color:${v.c};text-shadow:0 0 8px ${v.c}">${v.conv}</div><div style="font-size:10px;color:var(--muted)">conversão</div></div>
            <div style="text-align:right"><div style="font-size:15px;font-weight:700;color:var(--foreground)">${v.dossie}</div><div style="font-size:10px;color:var(--muted)">uso dossiê</div></div>
            <div style="text-align:right"><div style="font-size:15px;font-weight:700;color:var(--foreground)">${v.score}/10</div><div style="font-size:10px;color:var(--muted)">aderência</div></div>
          </div>
        `).join('')}

        <!-- Insight row -->
        <div style="padding:16px 28px;background:rgba(245,165,36,.04);border-top:1px solid rgba(245,165,36,.1)">
          <span style="font-size:12px;color:var(--light)">💡 <strong style="color:var(--foreground)">Insight automático:</strong> Vendedores com uso de dossiê +80% têm conversão <strong style="color:var(--solar-flare)">21% maior</strong>. Dado gerado sem esforço do CEO.</span>
        </div>
      </div>

      <!-- KPI cards -->
      <div class="grid-3 stagger-children" style="margin-top:var(--space-6)">
        ${[
          ['80%','Meta de uso do dossiê','Quem atinge +80% de abertura recebe o badge Dossiê Master automaticamente.','var(--solar-flare)','rgba(245,165,36,.12)'],
          ['+21%','Conversão com dossiê','Vendedores que seguem o C.L.O.S.E.R. convertem 21% mais que os que improvisam.','var(--horizon-blue)','rgba(56,189,248,.1)'],
          ['9/10','Score médio no top 3','Correlação direta: quem segue o roteiro fecha mais. O dado justifica o processo.','#A78BFA','rgba(167,139,250,.1)'],
        ].map(([v,t,d,c,bg]) => `
          <div style="background:${bg};border:1px solid ${c.replace('var(--solar-flare)','rgba(245,165,36,.3)').replace('var(--horizon-blue)','rgba(56,189,248,.25)')};border-radius:16px;padding:24px;text-align:center;position:relative;overflow:hidden">
            <div style="position:absolute;inset:0;background:radial-gradient(ellipse at 50% 0%,${bg.replace('.1','.2').replace('.12','.2')} 0%,transparent 60%);pointer-events:none"></div>
            <div style="font-size:40px;font-weight:800;color:${c};font-family:var(--font-brand);text-shadow:0 0 20px ${c.replace('var(--solar-flare)','rgba(245,165,36,.6)').replace('var(--horizon-blue)','rgba(56,189,248,.6)')};margin-bottom:8px">${v}</div>
            <div style="font-size:13px;font-weight:700;color:var(--foreground);margin-bottom:8px">${t}</div>
            <div style="font-size:12px;color:var(--muted);line-height:1.6">${d}</div>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- ═══════════════════ CALL RESULT MODAL ═══════════════════ -->
    <div class="section reveal">
      <span class="section-label">CALL RESULT MODAL — O INVESTIMENTO QUE FECHA O LOOP ∞</span>
      <h2 class="section-title" style="font-size:28px">O registro que fecha o ciclo e melhora a IA</h2>
      <p class="section-subtitle">Após cada call, o vendedor registra o resultado. Esse trabalho alimenta a memória da IA e melhora o próximo dossiê automaticamente — o sistema fica mais inteligente a cada interação.</p>

      <div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--space-6);margin-top:var(--space-6)">
        <!-- Mock Modal -->
        <div style="background:#09090D;border:1px solid rgba(245,165,36,.2);border-radius:20px;overflow:hidden;box-shadow:0 0 40px rgba(245,165,36,.08)">
          <div style="padding:16px 20px;border-bottom:1px solid rgba(255,255,255,.06);display:flex;justify-content:space-between;align-items:center;background:rgba(245,165,36,.04)">
            <div style="font-size:14px;font-weight:700;color:var(--foreground)">Registrar Resultado da Call</div>
            <div style="font-size:11px;color:var(--muted)">Rafael M. · <span style="color:var(--solar-flare)">Carlos F.</span></div>
          </div>
          <div style="padding:20px">
            <div style="margin-bottom:20px">
              <div style="font-size:9px;letter-spacing:2px;color:var(--muted);margin-bottom:10px;font-weight:700">RESULTADO</div>
              <div style="display:flex;gap:8px">
                <span style="padding:7px 18px;border-radius:8px;font-size:12px;font-weight:700;background:rgba(34,197,94,.2);color:#4ade80;border:1.5px solid rgba(34,197,94,.5);box-shadow:0 0 12px rgba(34,197,94,.2)">✓ WON</span>
                <span style="padding:7px 18px;border-radius:8px;font-size:12px;font-weight:600;background:rgba(255,255,255,.04);color:var(--muted);border:1.5px solid var(--border)">LOST</span>
                <span style="padding:7px 18px;border-radius:8px;font-size:12px;font-weight:600;background:rgba(255,255,255,.04);color:var(--muted);border:1.5px solid var(--border)">FOLLOW-UP</span>
              </div>
            </div>
            <div style="margin-bottom:20px">
              <div style="font-size:9px;letter-spacing:2px;color:var(--muted);margin-bottom:10px;font-weight:700">ADERÊNCIA AO ROTEIRO HORMOZI</div>
              <div style="height:6px;background:var(--border);border-radius:100px;margin-bottom:8px;overflow:hidden">
                <div style="width:85%;height:100%;background:linear-gradient(90deg,var(--solar-flare),#FACC15);border-radius:100px;box-shadow:0 0 10px rgba(245,165,36,.6)"></div>
              </div>
              <div style="display:flex;justify-content:space-between;font-size:11px;color:var(--muted)"><span>0</span><span style="color:var(--solar-flare);font-weight:700;text-shadow:0 0 8px var(--solar-flare)">8.5 / 10</span><span>10</span></div>
            </div>
            <div style="margin-bottom:20px">
              <div style="font-size:9px;letter-spacing:2px;color:var(--muted);margin-bottom:10px;font-weight:700">FEEDBACK PARA A IA</div>
              <div style="background:rgba(255,255,255,.03);border:1px solid var(--border);border-radius:8px;padding:10px 14px;font-size:12px;color:var(--muted);font-style:italic;line-height:1.6">"A objeção do financiamento veio mais cedo que o previsto. Lead já tinha pesquisado concorrente."</div>
            </div>
            <button style="width:100%;padding:12px;background:linear-gradient(135deg,var(--solar-flare),#FACC15);color:#09090B;border:none;border-radius:10px;font-size:13px;font-weight:800;cursor:pointer;box-shadow:0 0 20px rgba(245,165,36,.4);letter-spacing:.5px">SALVAR E ATUALIZAR IA →</button>
          </div>
        </div>

        <!-- Impact Cards -->
        <div style="display:flex;flex-direction:column;gap:var(--space-4)">
          ${[
            ['🔄','Feedback loop completo','Lead → IA SDR → Hormozi Agent → Closer → Resultado → IA aprende. Cada call torna o próximo dossiê mais preciso.','var(--solar-flare)','rgba(245,165,36,.08)','rgba(245,165,36,.25)'],
            ['🧠','Data Moat proprietário','A memória da IA acumula padrões de objeções do nicho solar a cada call. Um ativo que nenhum concorrente tem — e que cresce sozinho.','var(--horizon-blue)','rgba(56,189,248,.07)','rgba(56,189,248,.25)'],
            ['🪄','IKEA Effect','O vendedor que investiu feedback sente que o sistema é "dele". Cancelar = perder toda a inteligência acumulada. Churn vira abandono de si mesmo.','#A78BFA','rgba(167,139,250,.07)','rgba(167,139,250,.25)'],
            ['💰','Impacto no Equity','CEO contrata vendedores menos experientes (mais baratos) — o sistema entrega a estratégia. Evidência de ROI que vende mais licenças.','#34D399','rgba(52,211,153,.07)','rgba(52,211,153,.25)'],
          ].map(([ic,t,d,c,bg,bd]) => `
            <div style="background:${bg};border:1px solid ${bd};border-radius:14px;padding:18px 20px;display:flex;gap:14px;align-items:flex-start;transition:transform .2s,box-shadow .2s" onmouseenter="this.style.transform='translateX(4px)';this.style.boxShadow='0 0 20px ${bg.replace('.07','.15').replace('.08','.15')}'" onmouseleave="this.style.transform='';this.style.boxShadow=''">
              <div style="font-size:24px;flex-shrink:0;filter:drop-shadow(0 0 8px ${c.replace('var(--solar-flare)','rgba(245,165,36,.8)').replace('var(--horizon-blue)','rgba(56,189,248,.8)')})">${ic}</div>
              <div>
                <div style="font-size:13px;font-weight:700;color:var(--foreground);margin-bottom:6px">${t}</div>
                <div style="font-size:12px;color:var(--muted);line-height:1.6">${d}</div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>

    <!-- IMPACTO ESTRATÉGICO -->
    <div class="section reveal">
      <span class="section-label">IMPACTO ESTRATÉGICO — EX + EQUITY + BRANDING</span>
      <h2 class="section-title" style="font-size:28px">Por que gamificação é estratégia, não feature</h2>

      <table class="token-table" style="margin-top:var(--space-6)">
        <thead><tr><th>Dimensão</th><th>O que a gamificação resolve</th><th>Resultado mensurável</th></tr></thead>
        <tbody>
          <tr>
            <td><strong style="color:var(--horizon-blue)">EX — Experiência do Vendedor</strong></td>
            <td>Cria hábito de uso do dossiê em ~3 semanas. Loop auto-reforçante que reduz dependência operacional a cada ciclo.</td>
            <td style="color:var(--success)">Stickiness: vendedor não troca de sistema porque perderia todo o investimento acumulado</td>
          </tr>
          <tr>
            <td><strong style="color:var(--solar-flare)">Equity — Valuation</strong></td>
            <td>CEO pode contratar vendedores menos experientes. Sistema eleva performance de qualquer nível. Prova de ROI para investidores.</td>
            <td style="color:var(--success)">↓ Custo de RH + ↑ Conversão = Unit Economics mais saudáveis</td>
          </tr>
          <tr>
            <td><strong style="color:#A78BFA">Branding — Cultura</strong></td>
            <td>Reduz turnover (gamificação aumenta engajamento). Define a trajetória do time — quem performa tem identidade pública.</td>
            <td style="color:var(--success)">NPS interno elevado. Time que escolhe ficar porque valoriza o reconhecimento</td>
          </tr>
          <tr>
            <td><strong style="color:#34D399">Data — IP Proprietário</strong></td>
            <td>Cada call registrada aprofunda o Data Moat. Performance do time × memória da IA = aprendizado perpétuo e fosso competitivo que cresce sozinho.</td>
            <td style="color:var(--success)">Proprietary_Moat cresce a cada interação — fosso competitivo que se auto-aprofunda</td>
          </tr>
        </tbody>
      </table>

      <!-- Pitch do CEO -->
      <div style="margin-top:var(--space-8);background:linear-gradient(135deg,rgba(245,165,36,0.08) 0%,rgba(245,165,36,0.02) 100%);border:2px solid rgba(245,165,36,0.3);border-radius:20px;padding:var(--space-8)">
        <div style="font-size:10px;letter-spacing:2px;color:var(--solar-flare);margin-bottom:var(--space-4);font-weight:700">NARRATIVA DE VENDA — O PITCH DO SUNNY AWARDS</div>
        <p style="font-size:clamp(15px,1.8vw,20px);color:var(--clean-white);line-height:1.8;margin:0;font-weight:500">"Seus vendedores vão parar de reclamar de lead ruim e focar apenas em fechar — guiados por uma IA que aplica as táticas do Alex Hormozi personalizadas para cada lead, registra cada resultado, aprende com cada objeção e coloca todo mundo num ranking que eles próprios querem liderar. Você não precisa cobrar. Você não precisa motivar. <span style="color:var(--solar-flare)">O sistema faz isso — e ainda mede quem usa o processo e quem ignora.</span>"</p>
      </div>
    </div>
  `,

  adrs: () => `
    <div class="section reveal">
      <span class="section-label">VERSIONAMENTO E METADATA</span>
      <h2 class="section-title">Design Ops & ADRs</h2>
      <div class="grid-auto stagger-children" style="margin-top:24px">
        <div class="brand-card">
          <div class="brand-card-title">ADR 001: Tema Único Escuro</div>
          <div class="brand-card-text"><strong>Decisão:</strong> Apenas dark mode. <br><strong>Justificativa:</strong> Redução de eye strain em monitoramento 24/7 e reforço da semântica de "Torre de Comando / Batcave solar".</div>
        </div>
        <div class="brand-card">
          <div class="brand-card-title">ADR 002: Vanilla Core + Tokens</div>
          <div class="brand-card-text"><strong>Decisão:</strong> Escalar CSS variables genéricas.<br><strong>Justificativa:</strong> Independência de framework, permitindo compartilhar o brandbook para o app React e sites estáticos livremente.</div>
        </div>
      </div>
    </div>
  `,
};

// === INIT ===
const hash = window.location.hash.replace('#', '') || 'hero';
navigate(hash);
window.addEventListener('hashchange', () => {
  navigate(window.location.hash.replace('#', '') || 'hero');
});
