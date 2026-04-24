# Sunny Design System

## Overview

**Sunny** is a Brazilian B2B SaaS platform for **AI-powered Solar Sales Intelligence**. The product combines a solar-specialized CRM with an autonomous SDR Agent (conversational AI) that qualifies and schedules leads in under 15 minutes, 24/7 — eliminating the commercial inaction that kills ~70% of solar leads in Brazil.

**Tagline:** *"Nenhum lead morre ao sol."* (No lead dies in the sun.)

**Category:** Solar Sales Intelligence (new category — not just a CRM)

**Target:** Brazilian solar integrators with R$1M–50M revenue, 5–100 salespeople, frustrated with generic CRMs.

---

## Source Materials

- **Brand Brief:** Full 5-phase brandbook provided inline (Phases 1–5: Brand Diagnosis, Positioning, Naming, Visual Identity, Activation)
- **Logo Files:** Provided as PNG variants (vertical, horizontal; colorido, branco, preto)
  - `assets/logo-vertical-colorido.png`
  - `assets/logo-horizontal-colorido.png`
  - `assets/logo-horizontal-branco.png`
  - `assets/logo-horizontal-preto.png`
  - `assets/logo-vertical-branco.png`
  - `assets/logo-vertical-preto.png`
- No Figma link or codebase provided — design system is built from the brandbook specification.

---

## Products / Surfaces

1. **Sunny OS** — The full SaaS product (CRM + SDR Agent + Dashboard)
   - **Sunny Agent** — Autonomous AI SDR (WhatsApp/Chat)
   - **Sunny Pipeline** — Solar-specialized CRM
   - **Sunny Command** — Dashboard / Torre de Comando
   - **Sunny Insights** — Analytics & reporting
2. **Sunny Enterprise** — White-label multi-tenant version

UI Kit located at: `ui_kits/sunny-app/index.html`

---

## CONTENT FUNDAMENTALS

### Tone & Voice
- **"The Solar General"** — Authoritative but genuinely caring. Commands with confidence, not arrogance. Speaks CEO-to-CEO on WhatsApp — direct, professional, never corporate-stiff.
- **Serious with moments of warmth.** The war metaphor is real but never cold. Celebrates wins with energy ("☀️ COLHEITA!").
- **Precise, not vague.** Numbers over adjectives. "Respondido em 8 minutos" not "resposta rápida". "3 reuniões agendadas" not "ótimos resultados".

### Language Rules
- **Formal ↔ Casual:** 4/10 — Professional but not corporate. Uses "você" not "o senhor".
- **PT-BR first** — all copy in Brazilian Portuguese. English only in technical contexts.
- **No vague superlatives** — never "inovador", "disruptivo", "revolucionário", "solução".
- **No "chatbot"** — always "SDR Agent" or "IA".
- **No "ferramenta"** — always "sistema" or "plataforma".

### Proprietary Vocabulary (ALWAYS USE)
| Word | Meaning |
|------|---------|
| **Amanhecer** | Moment results appear; setup complete, IA active |
| **Raio** | Speed of lead response (<15 min) |
| **Conversão** | Final result — leads converted, meetings booked |
| **Clareza Solar** | Full pipeline visibility, zero noise |
| **Torre de Comando** | The dashboard — war command center |
| **Lead Vivo** | A qualified, active lead in the funnel |
| **Overdrive** | Overperformance state (>100% of goal) |
| **Eclipse** | Pipeline cooling; inaction alert |
| **Guerra Comercial** | The sales operation |
| **Magnânimo** | Premium quality, generous, grand |

### Banned Words
`simples` `barato` `automatizado` `chatbot` `ferramenta` `solução` `revolucionário` `disruptivo` `fácil` `inovador`

### Casing
- Logo wordmark: ALL CAPS (`SUNNY`)
- Product names: Title Case (`Sunny Agent`, `Torre de Comando`)
- Headlines: Sentence case
- CTAs: Imperative verb, concise ("Ative seu SDR Agent", "Ver dashboard")

### Emoji Usage
Minimal and purposeful. Only in product notifications/celebrations:
- ☀️ Conversão / victory moments
- ⚠️ Eclipse / inaction alerts
- 🎉 First result milestones

---

## VISUAL FOUNDATIONS

### Aesthetic Direction
**"Dark Premium Luxury"** — Industrial Precision meets Solar Energy. The aesthetic lives in the same tier as Stripe, Linear, Vercel — far from the blue-corporate / literal-sun clichés of the solar sector. The tension: *dark authority + luminous solar energy*.

### Color Philosophy
60% dark base (Command Black / surfaces) + 30% text/content (whites, muted) + 10% solar accent (amber/orange).

| Role | Name | Hex |
|------|------|-----|
| Background | Command Black | `#09090B` |
| Surface | Surface | `#18181B` |
| Surface Hover | Surface Hover | `#27272A` |
| Border | Border | `#3F3F46` |
| Text Secondary | Muted | `#71717A` |
| Text Tertiary | Light | `#A1A1AA` |
| Text Primary | Foreground | `#FAFAFA` |
| Accent | Solar Flare | `#F5A524` |
| Accent Dark | Dawn Amber | `#E8740C` |
| Info/Cold | Horizon Blue | `#38BDF8` |
| Premium | Premium Violet | `#8B5CF6` |
| Success | Output Green | `#22C55E` |
| Error | Alert Red | `#EF4444` |
| Warning | Flare Warning | `#EAB308` |

### Typography
- **Headlines/Brand:** Space Grotesk Bold — geometric, commanding, character-rich
- **UI/Body:** Inter — humanist, screen-optimized, neutral
- **Data/Code:** JetBrains Mono — technical, precise, legible
- Kerning: tight (-0.02em) on headlines

### Backgrounds
- Always dark. Command Black `#09090B` is the primary.
- Cards use `#18181B` (Surface).
- No full-bleed photos without dark overlay (50–70% black + solar gradient edge).
- No light mode as primary — dark mode IS the brand.

### Gradients
- **Solar Gradient:** `linear-gradient(135deg, #F5A524 0%, #E8740C 100%)` — CTAs, primary actions
- **Dawn Gradient:** `linear-gradient(135deg, #E8740C 0%, #DC2626 100%)` — urgency, Eclipse alerts
- **Solar Glow:** `radial-gradient(circle, rgba(245,165,36,0.15) 0%, transparent 70%)` — behind logo, hover effects
- **Surface Gradient:** `linear-gradient(180deg, #18181B 0%, #09090B 100%)` — depth

### Cards
- Background: `#18181B` (Surface)
- Border: `1px solid rgba(63,63,70,0.5)` (Border at 50%)
- Border-radius: 12px
- Hover: `#27272A` bg + Solar Flare border at 20% opacity
- Shadow: `0 4px 6px -1px rgba(0,0,0,0.3)`

### Buttons
- **Primary:** Solar Gradient background, Command Black text, 8px radius
- **Secondary:** Surface bg, Border stroke, Foreground text
- **Ghost:** Transparent, Solar Flare text
- Hover: brightness(1.1) on primary; Surface Hover on secondary
- Active/press: scale(0.98)

### Animation
- Micro interactions: 150ms ease-out (hover, focus, toggle)
- Standard transitions: 250ms ease-in-out (opens, closes)
- Emphasis: 400ms cubic-bezier(0.16, 1, 0.3, 1) (modals, page transitions)
- Dramatic: 600–800ms spring (hero animations, logo reveal)
- Elements enter **bottom-to-top** (ascension = sun rising)
- CTAs pulse subtly with Solar Glow in idle
- Loading: skeleton gradients (Surface → Surface Hover)

### Borders & Radius
- Components: 8px (buttons), 12px (cards), 16px (modals), 9999px (badges/pills)
- Borders: subtle, `rgba(63,63,70,0.5)` — never harsh

### Iconography
- **Style:** Line icons, 1.5px stroke, rounded caps
- **Grid:** 24×24px, 2px safe area
- **Color:** Foreground (#FAFAFA) or Solar Flare (#F5A524) on dark backgrounds
- **CDN:** Lucide Icons (closest match to the line-icon style described)
- **Solar-themed preferred** when available (sun, bolt, target, calendar, pipeline)

### Imagery
- Dark, dramatic lighting (chiaroscuro tech)
- Golden hour / rim-light photography
- Duotone treatment: Command Black + Solar Flare for editorial use
- Never: generic handshakes, people pointing at screens, green-field solar panels

### Shadows
- `--shadow-sm`: `0 1px 2px rgba(0,0,0,0.3)`
- `--shadow-md`: `0 4px 6px -1px rgba(0,0,0,0.3)`
- `--shadow-lg`: `0 10px 15px -3px rgba(0,0,0,0.4)`
- `--shadow-glow`: `0 0 20px rgba(245,165,36,0.2)` — Solar Glow effect

### Spacing
Base unit: 4px. Scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128px.

### Logo
The logomark features a **sun with orbital rings** — a sun with radiating rays and an orbital arc encircling it, suggesting both solar energy and technological orbit/intelligence. The wordmark "SUNNY" appears in Space Grotesk Bold, ALL CAPS, with generous letter spacing.

**Logo variants:**
- `logo-vertical-colorido.png` — amber on transparent, vertical lockup (icon + wordmark below)
- `logo-horizontal-colorido.png` — amber on transparent, horizontal lockup
- `logo-horizontal-branco.png` — white on transparent, horizontal
- `logo-horizontal-preto.png` — black on transparent, horizontal
- `logo-vertical-branco.png` — white on transparent, vertical
- `logo-vertical-preto.png` — black on transparent, vertical

---

## File Index

| Path | Description |
|------|-------------|
| `README.md` | This file — brand overview, content + visual foundations |
| `colors_and_type.css` | All CSS design tokens (colors, type, spacing, shadows, motion) |
| `assets/` | Logo PNGs (all variants) |
| `preview/` | Design system card HTML files |
| `ui_kits/sunny-app/` | Sunny SaaS app UI kit (CRM + Dashboard + SDR Agent) |
| `SKILL.md` | Agent skill definition |

---

## Archetype & Positioning

- **Archetype:** Ruler (60%) + Magician (25%) + Caregiver (15%)
- **Onliness:** "The ONLY solar sales intelligence platform with an autonomous SDR Agent"
- **DNA:** "Nenhum lead morre" — obsession with full conversion
- **Enemy:** Commercial Inaction — leads dying without response
