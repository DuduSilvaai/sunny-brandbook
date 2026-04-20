// inject.js
import fs from 'fs';

const file = 'c:/Users/edugu/Downloads/sunny-brandbook/output/brandbook-site/src/main.js';
let code = fs.readFileSync(file, 'utf8');

// 1. Hero: /videos/hero.mp4 is ALREADY THERE!

// 2. Identity (<span class="section-label">01 </span>): mockups.mp4
code = code.replace(
  '<img src="/images/brand-mockup.png" alt="Sunny Brand Overview" class="logo-showcase-img" style="margin-top:var(--space-4)" />',
  '<div class="video-showcase reveal-scale" style="margin:var(--space-6) auto;max-width:960px"><video data-autoplay-scroll loop muted playsinline style="width:100%;border-radius:16px;border:1px solid var(--border);display:block;"><source src="/videos/mockups.mp4" type="video/mp4"></video></div>'
);

// 3. Typography: typography.mp4
code = code.replace(
  '<h2 class="section-title">Type System</h2>',
  '<h2 class="section-title">Type System</h2><div class="video-showcase reveal-scale" style="margin:var(--space-6) auto;max-width:960px"><video data-autoplay-scroll loop muted playsinline style="width:100%;border-radius:16px;border:1px solid var(--border);display:block;"><source src="/videos/typography.mp4" type="video/mp4"></video></div>'
);

// 4. Color System: colors.mp4
code = code.replace(
  '<h2 class="section-title">Solar Palette</h2>',
  '<h2 class="section-title">Solar Palette</h2><div class="video-showcase reveal-scale" style="margin:var(--space-6) auto;max-width:960px"><video data-autoplay-scroll loop muted playsinline style="width:100%;border-radius:16px;border:1px solid var(--border);display:block;"><source src="/videos/colors.mp4" type="video/mp4"></video></div>'
);

// 5. Logo System: logo-reveal.mp4
code = code.replace(
  '<h2 class="section-title">Logo & Brand Mark</h2>',
  '<h2 class="section-title">Logo & Brand Mark</h2><div class="video-showcase reveal-scale" style="margin:var(--space-6) auto;max-width:960px"><video data-autoplay-scroll loop muted playsinline style="width:100%;border-radius:16px;border:1px solid var(--border);display:block;"><source src="/videos/logo-reveal.mp4" type="video/mp4"></video></div>'
);

// 6. Tokens: tokens.mp4
code = code.replace(
  '<h2 class="section-title">Sistema de Tokens</h2>',
  '<h2 class="section-title">Sistema de Tokens</h2><div class="video-showcase reveal-scale" style="margin:var(--space-6) auto;max-width:960px"><video data-autoplay-scroll loop muted playsinline style="width:100%;border-radius:16px;border:1px solid var(--border);display:block;"><source src="/videos/tokens.mp4" type="video/mp4"></video></div>'
);

// 7. Dashboard/Positioning: dashboard.mp4 
code = code.replace(
  '<h2 class="section-title">Onliness Statement</h2>',
  '<h2 class="section-title">Onliness Statement</h2><div class="video-showcase reveal-scale" style="margin:var(--space-6) auto;max-width:960px"><video data-autoplay-scroll loop muted playsinline style="width:100%;border-radius:16px;border:1px solid var(--border);display:block;"><source src="/videos/dashboard.mp4" type="video/mp4"></video></div>'
);

// 8. Activation: activation.mp4 (put it on the Manifesto page)
code = code.replace(
  '<h1 class="manifesto-title reveal-scale">O SOL NÃO<br>ESPERA.</h1>',
  '<div class="video-showcase reveal-scale" style="margin-bottom:var(--space-6);max-width:960px;margin-left:auto;margin-right:auto;"><video data-autoplay-scroll loop muted playsinline style="width:100%;border-radius:16px;border:1px solid var(--border);display:block;"><source src="/videos/activation.mp4" type="video/mp4"></video></div><h1 class="manifesto-title reveal-scale">O SOL NÃO<br>ESPERA.</h1>'
);

// Remove duplicate videos due to React strict mode reloading or re-running replacements (if any)
fs.writeFileSync(file, code);
console.log("Replaced");
