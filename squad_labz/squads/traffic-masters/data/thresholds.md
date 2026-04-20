# Thresholds Operacionais — Traffic Masters Squad

> **Quem usa:** @dash (decisões automáticas), @midas (validação de scale), @track (qualidade de pixel)

## 1. Tabela Master — ROAS

| Status | Range | Ação automática |
|--------|-------|-----------------|
| 💀 KILL | < 0.5 | PAUSAR ADSET imediato (Jeremy Haynes critical) |
| 🚨 ALARM | 0.5 - 1.0 | Investigar tracking + criativo em 24h |
| ⚠️ WATCH | 1.0 - 2.0 | Monitor diário, iterar criativo |
| ✅ HEALTHY | 2.0 - 2.5 | Manter, otimizar margem |
| 🚀 SCALE | > 2.5 (3 dias estável) | Vertical +20% budget |
| 🚀🚀 ROCKET | > 4.0 (5 dias estável) | Vertical +50% + horizontal duplicate |

## 2. Tabela Master — CPA (relativo ao target)

| Status | Multiplier | Ação |
|--------|-----------|------|
| 💀 KILL | > 2.0x target | PAUSAR após 1.000 imp |
| 🚨 ALARM | 1.5-2.0x | Iterar criativo, validar audiência |
| ⚠️ WATCH | 1.0-1.5x | Monitor, otimizar |
| ✅ HEALTHY | 0.8-1.0x | Manter |
| 🚀 SCALE | < 0.8x | Aumentar budget |

## 3. Tabela Master — CTR (Link Click-Through Rate)

| Status | Range | Ação |
|--------|-------|------|
| 💀 KILL AD | < 0.5% | PAUSAR após 500 imp |
| 🚨 ALARM | 0.5-0.8% | Trocar criativo |
| ⚠️ WATCH | 0.8-1.2% | Iterar hook |
| ✅ HEALTHY | 1.2-2.0% | Manter |
| 🚀 SCALE | > 2.0% | Replicar formato |

## 4. Tabela Master — Hook Rate (3s view rate)

| Status | Range | Ação |
|--------|-------|------|
| 💀 KILL | < 15% | PAUSAR + gerar novos hooks (@nova) |
| 🚨 ALARM | 15-20% | Iterar primeiros 3s |
| ⚠️ WATCH | 20-25% | Refinar |
| ✅ HEALTHY | 25-35% | Manter |
| 🚀 SCALE | > 35% | Replicar abordagem |

## 5. Tabela Master — Frequency

| Status | Range | Ação |
|--------|-------|------|
| 🚀 FRESH | < 1.5 | Audiência com headroom — escalar |
| ✅ HEALTHY | 1.5-2.5 | Manter |
| ⚠️ WATCH | 2.5-3.5 | Preparar refresh + nova audiência |
| 🚨 ALARM | 3.5-4.0 | Refresh OU expand audiência (Andromeda) |
| 💀 SATURATED | > 4.0 | PAUSAR + rotacionar |

## 6. Tabela Master — EMQ (Event Match Quality - Meta CAPI)

| Status | Score | Ação |
|--------|-------|------|
| 🟢 EXCELLENT | 9-10 | Manter — best practice |
| 🟡 GOOD | 7-8 | Ajustes finos opcionais |
| 🟠 ACCEPTABLE | 5-6 | Adicionar parâmetros (em, ph, fn, ln) |
| 🔴 POOR | < 5 | PRIORIDADE MÁXIMA — @track imediato |

**Mínimo aceitável:** EMQ ≥ 7 para campanhas em produção.

## 7. Tabela Master — CPM (Brasil, atualizar trimestralmente)

| Plataforma | 🚀 Cheap | ✅ Normal | ⚠️ Expensive | 💀 Burn |
|-----------|---------|----------|-------------|--------|
| Meta (FB/IG) | < R$25 | R$25-50 | R$50-80 | > R$80 |
| Google Display | < R$5 | R$5-15 | R$15-30 | > R$30 |
| YouTube | < R$15 | R$15-35 | R$35-60 | > R$60 |
| TikTok | < R$10 | R$10-25 | R$25-45 | > R$45 |

## 8. Tabela Master — Funnel Conversion Rates (benchmark)

| Etapa | 💀 Bad | ✅ OK | 🚀 Great |
|-------|-------|------|---------|
| Landing → Lead (info) | < 15% | 15-30% | > 30% |
| Lead → Sale (info R$497) | < 1% | 1-3% | > 3% |
| Visit → Cart (ecom) | < 5% | 5-10% | > 10% |
| Cart → Checkout (ecom) | < 30% | 30-50% | > 50% |
| Checkout → Purchase | < 50% | 50-70% | > 70% |

## 9. Janelas de Decisão

| Decisão | Mínimo de dados | Janela |
|---------|----------------|--------|
| Kill ad por CTR | 500 impressões | 24h |
| Kill adset por CPA | 1.000 impressões + 0 conversões | 48h |
| Kill adset por ROAS < 0.5 | qualquer | imediato |
| Scale vertical | 3 dias estável + 30+ conversões | — |
| Scale horizontal | 5 dias estável + 50+ conversões | — |
| Refresh criativo | Frequency > 3 OU CPM subindo > 30% | semanal |
| Audit tracking | Sempre que ROAS Meta vs Backend diverge > 20% | imediato |

---

**Auto-decision rule:** @dash deve aplicar estas tabelas de forma DETERMINÍSTICA — sem interpretação. Se o threshold for atingido, a ação correspondente é executada (com log de justificativa).
