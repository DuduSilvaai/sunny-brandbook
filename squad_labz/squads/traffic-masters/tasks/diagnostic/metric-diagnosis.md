# Task: Metric Diagnosis

> **Owner:** @dash
> **Frameworks:** Brian Moncada (Metric Thresholds #2), Jeremy Haynes (Kill Rules #4), `data/thresholds.md`
> **Inputs:** dados de campanha/adset/ad (últimos 7 dias mínimo)

## Quando Executar

Sempre que cliente perguntar "como está minha campanha?". Sempre antes de aplicar kill/scale rules. Diariamente em modo `*monitor-campaigns`.

## Métricas a Diagnosticar

```
ROAS               → Return on Ad Spend
CPA                → Cost Per Acquisition (vs target)
CTR (link)         → Click-Through Rate
Hook Rate          → 3-second view rate
Hold Rate          → 25% video view rate
Frequency          → impressões/usuário único
CPM                → Cost Per Mille
CPC (link)         → Cost Per Click
Conversion Rate    → conversions/clicks
```

## Algoritmo de Diagnóstico

```
PARA CADA métrica:
  1. Coletar valor atual (últimos 7 dias)
  2. Coletar tendência (% change vs 7 dias anteriores)
  3. Lookup em data/thresholds.md → status (KILL/ALARM/WATCH/HEALTHY/SCALE)
  4. Aplicar context (D2C vs Info, BR vs US — Moncada #2)
  5. Cross-correlate (ex: CTR baixo + Hook Rate baixo = problema de criativo)
  6. Recomendar ação determinística
```

## Cross-Correlation Patterns

| Sintoma combinado | Diagnóstico provável | Owner |
|-------------------|---------------------|-------|
| Hook Rate ↓ + CTR ↓ + ROAS ↓ | Criativo morrendo | @nova |
| Frequency ↑ + CPM ↑ + ROAS ↓ | Audiência saturada | @dash + @ralph-burns |
| CTR OK + ConvRate ↓ | Problema na LP/checkout | review LP/funnel |
| Hook Rate OK + Hold Rate ↓ | Hook funciona, body falha | @nova |
| ROAS Meta ≠ ROAS backend (>20%) | Tracking quebrado | @track |
| CPM normal + CTR ↓ | Criativo errado p/ audiência | @nova |
| CPM ↑↑ sudden | Concorrência ou bid algorithm | aguardar 48h |

## Output (use template do agente DASH)

Sempre formato visual table com status emoji + ação + framework citado.

## Constraints

- NUNCA diagnose com < 7 dias de dados (volatilidade)
- NUNCA ignore deviation de tracking (ROAS Meta vs backend) — sempre escalate @track
- SEMPRE consulte thresholds.md (não improvise números)
- SEMPRE diferencie ad-level, adset-level, campaign-level (problema diferente)
