# Task: Attribution Analysis

> **Owner:** @dash + @track (joint)
> **Frameworks:** Multi-touch attribution + Meta AEM (iOS14+) + GA4 cross-channel
> **Inputs:** Meta Ads Manager + GA4 + backend (CRM/checkout)

## Quando Executar

Quando ROAS de plataformas individuais NÃO bate com revenue total. Quando MIDAS precisa decidir mix de canais (Hydra Strategy). Mensalmente em manutenção. Sempre que abrir 2º+ canal.

## O Problema

```
Meta diz:    R$50.000 atribuídos
Google diz:  R$30.000 atribuídos
YouTube diz: R$20.000 atribuídos
─────────────────────────────────
Soma:        R$100.000

Backend diz: R$70.000 (real)

→ Cada plataforma reivindica conversões que outras também atribuem (overlap).
→ Cliente paga "R$100k em revenue" quando na verdade são R$70k.
```

## Modelos de Atribuição

| Modelo | Quem ganha crédito | Bom para |
|--------|-------------------|----------|
| **Last Click** | Último canal antes da conversão | Bottom-funnel canal |
| **First Click** | Primeiro canal na jornada | Top-funnel discovery |
| **Linear** | Crédito igual entre todos os touches | Visão balanced |
| **Time Decay** | Mais peso para touches recentes | Ciclos curtos |
| **Position-Based (40-20-40)** | First 40% + Middle 20% + Last 40% | Equilibrado |
| **Data-Driven (GA4)** | ML calcula crédito por jornada | Volume alto |

## Metodologia de Análise

### Step 1: Backend = Source of Truth
```
Pegue revenue REAL do checkout/CRM (não soma de plataformas)
Esta é a única verdade absoluta.
```

### Step 2: Compare Per-Channel Claims
```
Meta atribui:   R${X}
Google atribui: R${Y}
YouTube:        R${Z}
─────────────────
Total claimed:  R${X+Y+Z}

Backend real:   R${B}

Overlap factor = (X+Y+Z) / B
```

### Step 3: Aplicar Discount Factor
```
SE overlap factor = 1.0  → sem overlap (raro, multi-channel)
SE overlap factor = 1.3  → 30% de double-counting (típico)
SE overlap factor = 2.0  → 50% double-counting (sinal de problema)

True per-channel revenue ≈ claimed / overlap_factor
```

### Step 4: Reconciliar com UTMs/CRM
```
Para vendas registradas, qual era o:
  - First touch source/medium?
  - Last touch source/medium?
  - Touches intermediários?

→ Usar UTMs consistentes em TODAS as campanhas
→ Cross-reference com customer survey ("como conheceu?")
```

### Step 5: Decisão de Mix de Canal
```
Per-channel TRUE ROAS:
  Meta:    {X / overlap_factor / spend_meta}
  Google:  {Y / overlap_factor / spend_google}
  YouTube: {Z / overlap_factor / spend_youtube}

Decisão: alocar mais budget para canal com TRUE ROAS maior
        (não claimed ROAS).
```

## Sintomas Comuns

| Sintoma | Causa provável | Fix |
|---------|---------------|-----|
| Meta reivindica 80%+ das vendas | View-through inflado | Mudar para 7d-click only |
| Google PMax reivindica tudo | PMax canibaliza outros canais | Excluir customer match audiences |
| Discrepância > 30% Meta vs backend | iOS14 underreporting OU CAPI quebrado | @track *audit |
| Direct/None alto no GA4 | UTMs faltando ou redirect quebrando | UTM audit |
| ROAS Meta > 5x mas backend baixo | View-through fake conversions | Atribuição mais conservadora |

## Output Template

```
📐 ATTRIBUTION ANALYSIS — {período}
═══════════════════════════════════════

REVENUE REAL (backend):              R${B}
SOMA CLAIMS (todas plataformas):     R${T}
OVERLAP FACTOR:                      {T/B}
DISCOUNT FACTOR:                     {1/(T/B) × 100}%

PER-CHANNEL TRUE ROAS:
  Meta:    Spend R${} | Claimed R${} | True R${} | True ROAS: {}
  Google:  Spend R${} | Claimed R${} | True R${} | True ROAS: {}
  YouTube: Spend R${} | Claimed R${} | True R${} | True ROAS: {}

JORNADA TÍPICA (top 3):
  1. {first_touch} → {middle_touches} → {last_touch}  ({N}% das vendas)
  2. ...
  3. ...

RECOMENDAÇÕES:
1. Reduzir budget em {canal com lowest true ROAS}
2. Aumentar em {canal com highest true ROAS}
3. {fix de tracking se aplicável}
4. {ajuste de modelo de atribuição se aplicável}

NEXT STEPS:
  → @midas para decisão de re-allocation
  → @track se houve gap de tracking detectado
  → Implementar UTM audit se Direct/None > 20%
```

## Constraints

- NUNCA aceite soma de claims como revenue real
- NUNCA otimize por claimed ROAS (otimize por TRUE ROAS)
- SEMPRE backend = source of truth
- SEMPRE valide UTMs (90% dos problemas de atribuição são UTM mal configurado)
