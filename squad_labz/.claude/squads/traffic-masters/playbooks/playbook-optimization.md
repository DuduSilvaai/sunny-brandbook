# Playbook: Campaign Optimization

Para campanhas **já rodando** que precisam de melhoria — ROAS baixando, fadiga, ineficiência.

**Fases:** 1 → 2 → 3 → 4 → 5

## Fase 1: Health Check
**Agents:** @dash + @track
**Duração:** 0.5 dia
**Output:** Diagnóstico completo + score de saúde

- Auditoria de tracking (GIGO protection)
- Diagnóstico de métricas (ROAS, CPA, CTR, CPM, Frequency)
- Cross-correlation patterns (ex: CPA alto + CTR baixo = criativo fraco; CPA alto + CTR OK = conversão fraca)
- Attribution analysis (claimed vs TRUE ROAS)

**Tasks:**
- `@track *audit` → pixel/CAPI/EMQ health
- `@dash *diagnose` → metric-diagnosis cross-correlation
- `@dash *attribution` → TRUE ROAS vs claimed

**Gate:** Tracking saudável ANTES de confiar em dados.

---

## Fase 2: Creative Fatigue Detection
**Agent:** @nova + @dash
**Duração:** 0.5 dia
**Output:** Lista de criativos fatigados + plano de refresh

- Rodar fatigue detector (5 sinais)
- Identificar SAUDÁVEL / WATCH / FADIGA CONFIRMADA
- Mapear pipeline de refresh existente

**Tasks:**
- `@nova *fatigue` → creative-fatigue-detector (5 sinais)
- `@nova *refresh` → plano de refresh se ≥3/5

**Gate:** Pipeline de 3+ hooks novos por semana ativo.

---

## Fase 3: Kill & Scale Execution
**Agents:** @dash
**Duração:** Contínuo (loop)
**Output:** Adsets otimizados + log de decisões

Aplicar **deterministicamente** as regras de Jeremy Haynes:

**Kill Rules (pause imediato):**
- K1: ROAS < 0.5 → PAUSE
- K2: CPA > 2x target → PAUSE (após 1k impressões)
- K3: CTR < 0.5% → PAUSE AD (após 500 imp)
- K4: Hook Rate < 15% → PAUSE + refresh @nova
- K5: Frequency > 4 → PAUSE + expand @dash

**Scale Rules (incremento gradual):**
- S1: ROAS > 2.5 por 3d → +20% budget
- S2: ROAS > 4.0 por 5d → +50% budget (requer MIDAS)
- S3: ROAS > 3.0 + Freq < 2 → duplicate LAL

**Task:** `@dash *kill-scale` — aplicar regras com logs

**Gate:** Toda decisão tem log rastreável (timestamp + razão + framework).

---

## Fase 4: Budget Reallocation
**Agents:** @dash + @midas (se cross-channel)
**Duração:** 0.5 dia
**Output:** Budget realocado com validação

Aplicar **4 cenários** de budget-allocation:
- Within-campaign: 80/20 rule (vencedores ganham 80%, testes 20%)
- Cross-channel: proporcional ao TRUE ROAS (respeitar Hydra ≤ 60%)
- Vertical scale: +20%/dia (Haynes S1) ou +50% com MIDAS (S2)
- Hydra diversify: se 1 canal > 60%, abrir 2º

**Validações:**
- Daily Floor ≥ R$50/dia por adset
- Hydra ≤ 60% por canal
- Spending Limit = 2x daily budget

**Task:** `@dash *budget` → budget-allocation apropriado

**Gate:** Todas as validações ✅.

---

## Fase 5: Ongoing Monitoring
**Agent:** @midas (orquestrador) + all functional
**Duração:** Contínuo
**Output:** Campaign monitor loop operando

- Ativar campaign-monitor em cadências 1h/6h/24h
- Dashboards atualizados
- Alertas em tempo real
- Reports semanais

**Task:** `@midas *monitor` → campaign-monitor autônomo

**Handoff:**
```
Se múltiplos S1 acionados consistentemente → Playbook SCALE
Se tracking quebra (EMQ < 5 por 48h) → Playbook TRACKING-RECOVERY
Se 3+ criativos fatigam simultaneamente → sprint de refresh
```

---

## Gatilhos de Entrada

Execute este playbook quando:
- ROAS caindo > 20% em 7 dias
- CPA subindo > 30% em 7 dias
- Frequency > 3.5 em múltiplos adsets
- Hook Rate caindo > 30% (fadiga)
- Mudança de algoritmo/política da plataforma
- Pós-evento crítico (Black Friday) — reestabilização

---

**Duração Total:** Contínuo (não é one-shot — é ciclo operacional)
**Cadência:** Diário para kill/scale, semanal para creative refresh, mensal para budget review
**Success Criteria:** ROAS estável ou crescente, fatigue < 20% dos criativos, tracking EMQ ≥ 7
