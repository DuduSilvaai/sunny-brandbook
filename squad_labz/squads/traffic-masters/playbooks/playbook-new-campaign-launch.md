# Playbook: New Campaign Launch

Para lançar campanhas **do zero** — infoproduto, e-commerce, SaaS, lead gen.

**Fases:** 0 → 1 → 2 → 3 → 4 → 5 → 6

## Fase 0: Business Discovery
**Agent:** @midas
**Duração:** 1 dia
**Output:** `business-context.md` preenchido

- Coletar persona, ticket, CAC alvo, ROAS alvo, budget mensal
- Validar unit economics mínimo (LTV/CAC ≥ 3:1)
- Definir plataformas e mercado
- Sign-off pelo stakeholder

**Task:** `*business-discovery` (usa `business-context-template.md`)

**Gate:** Completude ≥ 80% → prossegue; < 80% → volta a perguntar.

---

## Fase 1: Unit Economics & Funil
**Agents:** @dash + @midas
**Duração:** 1 dia
**Output:** Modelo financeiro validado + tipo de funil definido

- Calcular CAC máximo sustentável (Hormozi)
- Calcular Break-Even ROAS
- Calcular Payback Period
- Escolher funil apropriado (R$17, tráfego direto, Zoom, tripwire, etc.)

**Tasks:**
- `@dash *unit-economics` — Hormozi framework aplicado
- `@midas *funnel-selection` — algoritmo de decisão de 8 funis

**Gate:** LTV/CAC ≥ 3:1 e Payback ≤ 90 dias → aprovado.

---

## Fase 2: Campaign Structure
**Agents:** @midas + @dash
**Duração:** 1 dia
**Output:** Estrutura CBO/ABO + naming convention + budget split

- Decidir CBO vs ABO (algoritmo Jeremy Haynes)
- Definir # de adsets, audiências, criativos
- Aplicar 80/20 budget rule (Haynes #11)
- Validar Daily Floor (R$50/dia mínimo por adset)
- Validar Hydra (≤ 60% em 1 canal)

**Tasks:**
- `@midas *campaign-structure` — CBO vs ABO decision
- `@dash *budget-allocation` — within-campaign scenario

**Gate:** Estrutura respeita Daily Floor + Hydra.

---

## Fase 3: Creative Development
**Agents:** @nova
**Duração:** 3-5 dias
**Output:** 10+ hooks + 3 ângulos + copy + briefs + criativos

- Gerar 10 ângulos (match awareness Schwartz)
- Gerar 10+ hooks (6 categorias — Jeremy Haynes DSL)
- Criar copy (primary text, headline, description)
- Criar briefs (imagem + UGC)
- Validar Constants vs Variables (Brandon Carter — 1 variável por teste)

**Tasks:**
- `@nova *angles` → 10 ângulos universais
- `@nova *hooks` → 10+ hooks top 3 ângulos
- `@nova *copy` → primary/headline/description (char limits)
- `@nova *brief` → brief criativo completo
- `@nova *image` → image brief + UGC brief (2.3x ROAS — Haynes #27)

**Gate:** Mínimo 3 criativos únicos (1 por ângulo top) prontos para subir.

---

## Fase 4: Tracking Setup
**Agents:** @track
**Duração:** 1-2 dias
**Output:** Pixel + CAPI + eventos + EMQ validado

- Instalar pixel com hierarquia de 5 eventos (PageView → ViewContent → ATC → IC → Purchase)
- Configurar CAPI com event_id para dedup
- Validar EMQ ≥ 7 (Event Match Quality)
- Configurar Aggregated Event Measurement (iOS14+)
- Testar dedup < 5%

**Tasks:**
- `@track *audit` → auditoria completa de tracking
- `@track *capi` → setup CAPI
- `@track *emq` → validação de qualidade

**Gate Obrigatório (tracking-gate.md):** EMQ ≥ 7, CAPI operacional, dedup < 5%.

---

## Fase 5: Pre-Launch Gate
**Agent:** @midas (coordena)
**Duração:** 0.5 dia
**Output:** Checklist assinado

- Revisar todos os gates anteriores
- Validar pre-launch-checklist.md
- Confirmar budget disponível
- Confirmar criativos aprovados compliance
- Confirmar tracking health

**Task:** `@midas *pre-launch-gate`

**Gate:** 100% dos itens do checklist ✅ → liberar launch.

---

## Fase 6: Launch & Learning Phase
**Agents:** @midas + @dash + @track
**Duração:** 7-14 dias (learning phase)
**Output:** Campanha rodando + primeiros insights

- Subir campanha no ar
- Monitorar learning phase (Meta: 50 conversões em 7 dias para sair)
- **NÃO MEXER** durante learning phase (salvo violação crítica)
- Campaign monitor em modo observer nos primeiros 3 dias
- After day 3: começar aplicar kill rules (K1-K5)
- After day 7: aplicar scale rules (S1-S3)

**Tasks:**
- `@track *monitor` → campaign monitor loop
- `@dash *diagnose` → métrica diagnosis se anomalia

**Gate de Saída do Learning Phase:** 50+ conversões em 7 dias E ROAS ≥ break-even.

---

## Handoff → Outros Playbooks

```
Se Learning Phase falhou (< 50 conv em 7d):
  → @dash *diagnose → @nova *refresh → relaunch

Se Learning Phase OK + ROAS > 2.5 estável:
  → Playbook OPTIMIZATION (manter saudável)

Se Learning Phase OK + ROAS > 4.0 estável:
  → Playbook SCALE (agressivo)
```

---

**Duração Total:** 9-16 dias (do discovery ao fim do learning phase)
**Agentes envolvidos:** @midas, @dash, @nova, @track (+ Tier 2 se plataforma específica)
**Success Criteria:** Todos os gates ✅, ROAS break-even atingido, tracking EMQ ≥ 7
