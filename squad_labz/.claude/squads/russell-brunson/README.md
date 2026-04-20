# Russell Brunson Squad

**Slash prefix:** `/russell-brunson:` (`rb`)
**Philosophy:** Hook → Story → Offer > Value Ladder > Traffic
**Version:** 1.0.0

---

## Visão Geral

O **Russell Brunson Squad** é um time de 10 agentes especializados em **funnels**, **copywriting** e **marketing digital direto**. Cada agente encarna um aspecto do trabalho de Russell Brunson (CEO ClickFunnels, autor da Secrets Trilogy), destilado dos livros:

- **DotCom Secrets** — arquitetura de funnels e value ladder
- **Expert Secrets** — epifanias, missão, movimento
- **Traffic Secrets** — Dream 100, distribuição
- **Challenge Secrets** — challenge funnels (Pedro Adão)
- **Network Marketing Secrets** — NM-specific
- **Linchpin** — ecosistema de especialistas

Arquitetura em **3 tiers** inspirada no padrão Traffic Masters (comandante + funcionais + especialistas).

---

## Arquitetura (3 Tiers)

### Tier 0 — Orchestrator
- **@rb-commander** — decide, delega, valida. Nunca executa.

### Tier 1 — Domain (livros-pilar)
- **@dotcom** — Value Ladder, Funnel Types, Hook-Story-Offer structure
- **@expert** — Belief shifts, Epiphany, Attractive Character, Movement
- **@traffic** — Dream 100, Hooks for traffic, Organic + Paid distribution

### Tier 2 — Specialist (frameworks profundos)
- **@perfect-webinar** — The Perfect Webinar Script (90-min format)
- **@epiphany-bridge** — Epiphany Bridge stories + Hero's Two Journeys
- **@offer-stack** — Stack slide, bonuses, risk reversal, pricing anchors
- **@dream-100** — Dream 100 research, Work Your Way In/Buy Your Way In
- **@challenge-funnel** — 5-Day Challenge architecture (Pedro Adão)
- **@network-mkt** — Network Marketing Secrets (bridge funnel, 3-way calls)

---

## Como Usar

### Ativação
```
@rb-commander
```
ou
```
/russell-brunson:rb-commander
```

### Fluxo recomendado
```
1. @rb-commander               → mandatory Phase 0 (*business-discovery)
2. *funnel-selector            → identifica funil ideal
3. Commander delega p/ domain  → @dotcom | @expert | @traffic
4. Domain delega p/ specialist → @perfect-webinar, @offer-stack, etc.
5. *audit / *thresholds        → valida conversão contra benchmarks
```

---

## Comandos Principais (via @rb-commander)

| Comando | O que faz |
|---------|-----------|
| `*help` | Lista comandos + tiers |
| `*business-discovery` | Phase 0 obrigatória — preenche business-context.md |
| `*funnel-selector` | Escolhe funil ideal (VSL, webinar, challenge, book) |
| `*value-ladder` | Desenha value ladder do negócio |
| `*playbook <name>` | Aciona playbook (new-funnel-launch | webinar-setup) |
| `*audit` | Audita funil existente contra thresholds |
| `*strategy` | Define estratégia de lançamento |
| `*offer-review` | Revisa oferta (stack + risk reversal) |

---

## Thresholds Chave

| Métrica | Kill | OK | Scale |
|---------|------|----|----|
| Squeeze page opt-in | < 25% | 25-40% | > 40% |
| Webinar close rate | < 5% | 5-10% | > 10% |
| Challenge conversion | < 5% | 5-15% | > 15% |

Fonte: `data/chunk-09-thresholds.md`.

---

## Knowledge Base

Os 10 chunks de conhecimento ficam em `data/`:

1. `chunk-01-dotcom-secrets.md` — Value Ladder, Funnel Types
2. `chunk-02-expert-secrets.md` — Belief, Epiphany, Movement
3. `chunk-03-traffic-secrets.md` — Dream 100, Distribution
4. `chunk-04-perfect-webinar-script.md` — 90-min webinar
5. `chunk-05-epiphany-bridge-scripts.md` — Story frameworks
6. `chunk-06-challenge-secrets.md` — 5-Day Challenge
7. `chunk-07-network-marketing.md` — NM funnels
8. `chunk-08-linchpin.md` — Ecosystem model
9. `chunk-09-thresholds.md` — Benchmarks quantitativos
10. `chunk-10-vocabulary.md` — Vocabulário canônico

---

## Convenções

- **Vocabulário:** sempre use termos de `data/chunk-10-vocabulary.md` (Hook, Epiphany Bridge, Value Ladder, Stack, etc. — nunca genéricos)
- **Frameworks:** cite sempre livro + página/capítulo ao aplicar
- **Story-driven:** todo trabalho inicia com business-context preenchido
- **Specialists não executam sem handoff do commander**

---

## Origem

Este squad foi construído a partir do **Mind Clone** de Russell Brunson localizado em `squads/mmos-squad/minds/russell_brunson/` (artefatos + system prompts + KB extraída dos 6 livros).

Squad pack AIOS-compatible seguindo o padrão de `squads/traffic-masters/`.

---

*Russell Brunson Squad v1.0.0 — "Todo negócio precisa de um funil"*
