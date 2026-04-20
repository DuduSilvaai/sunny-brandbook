# Task: Funnel Analysis

> **Owner:** @dash
> **Frameworks:** Conversion Rate benchmarks (data/thresholds.md #8), Molly Pittman Customer Journey
> **Inputs:** dados de cada etapa do funil (visitors, conversions por step)

## Quando Executar

Quando ROAS está abaixo do esperado e métricas de ad estão OK (problema é downstream). Quando lançar funil novo. Mensalmente em manutenção.

## Análise por Etapa

```
TRAFFIC → LANDING → LEAD → SALE (info)
TRAFFIC → PRODUCT → CART → CHECKOUT → PURCHASE (ecom)
TRAFFIC → REGISTRATION → ATTEND → PITCH → CLOSE (webinar)
```

## Métricas por Tipo de Funil

### Info (Lead → Sale)
| Etapa | 💀 Bad | ✅ OK | 🚀 Great |
|-------|-------|------|---------|
| Ad → Landing visit | (CTR métrica) | | |
| Landing → Lead capture | < 15% | 15-30% | > 30% |
| Lead → Sale (R$497) | < 1% | 1-3% | > 3% |
| Lead → Sale (R$2k+) | < 0.5% | 0.5-2% | > 2% |

### Ecommerce
| Etapa | 💀 Bad | ✅ OK | 🚀 Great |
|-------|-------|------|---------|
| Visit → Cart | < 5% | 5-10% | > 10% |
| Cart → Checkout | < 30% | 30-50% | > 50% |
| Checkout → Purchase | < 50% | 50-70% | > 70% |
| Visit → Purchase (overall) | < 1% | 1-3% | > 3% |

### Webinar / Live
| Etapa | 💀 Bad | ✅ OK | 🚀 Great |
|-------|-------|------|---------|
| Ad → Registration | < 10% | 10-25% | > 25% |
| Registration → Show-up (Live BR) | < 25% | 25-40% | > 40% |
| Show-up → Stay till pitch | < 50% | 50-75% | > 75% |
| Stay till pitch → Buy | < 3% | 3-10% | > 10% |

## Algoritmo de Análise

```
PARA CADA etapa do funil:
  1. Calcular conversion rate (output/input)
  2. Comparar com benchmark (tabela acima)
  3. Identificar etapa(s) com pior gap
  4. Calcular impacto: "se esta etapa fosse benchmark, ROAS seria X"
  5. Priorizar fix por impacto (não por facilidade)
```

## Drop-off Bottleneck Detection

```
SE drop-off > 70% em 1 etapa única → BOTTLENECK CRÍTICO
Ações típicas:

Landing → Lead capture < 15%:
  - Headline confusa ou não bate com ad
  - Form muito longo
  - Mobile UX ruim
  - LP lenta (> 3s)
  → @nova *copy + dev review

Cart → Checkout < 30%:
  - Frete revelado tarde
  - Falta payment methods (Pix BR)
  - Conta obrigatória
  - Trust signals faltando
  → UX/dev review

Checkout → Purchase < 50%:
  - Erro de pagamento
  - Decline rate alto (cartão)
  - Falta parcelamento
  - Bug técnico
  → técnico + payment provider

Show-up Webinar < 25%:
  - Email/SMS sequence fraca
  - Sem WhatsApp reminders
  - Horário ruim
  - Promessa de aula fraca
  → @nova *sequence + ops
```

## Output Template

```
🔍 FUNNEL ANALYSIS — {nome do funil}
═══════════════════════════════════════

ETAPA → CONVERSÃO → STATUS
{Step 1 → Step 2}: {X}% → {emoji status}
{Step 2 → Step 3}: {Y}% → {emoji status}
{Step 3 → Step 4}: {Z}% → {emoji status}

OVERALL CONVERSION (Visit → Final): {valor}%

BOTTLENECK PRIMÁRIO: {etapa}
- Conversão atual: {X}%
- Benchmark: {Y}%
- Gap: {diff}
- Impacto se fixed: ROAS de {atual} → {projetado}

DIAGNÓSTICO:
{causa provável + evidência}

FIXES PRIORIZADOS (por impacto):
1. {fix 1} → owner: {agente/equipe}
2. {fix 2}
3. {fix 3}

DISPATCH:
  → {agente owner do bottleneck}
```

## Constraints

- NUNCA analise funil sem ter dados de TODAS as etapas
- NUNCA otimize etapa não-bottleneck (waste)
- SEMPRE valide se tracking de cada etapa está correto (gap pode ser tracking)
- SEMPRE compare contra benchmark do TIPO certo (info ≠ ecom ≠ webinar)
