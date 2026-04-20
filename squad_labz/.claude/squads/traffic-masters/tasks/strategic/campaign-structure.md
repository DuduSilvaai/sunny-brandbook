# Task: Campaign Structure (CBO vs ABO)

> **Owner:** @midas
> **Framework:** Jeremy Haynes — CBO vs ABO Strategy (#2)
> **Inputs:** business-context.md + estado atual (testing vs scaling vs hybrid)

## Quando Executar

Sempre antes de criar nova campanha OU quando o estado muda (saiu de testing → scaling).

## Algoritmo de Decisão

```
SE total_winning_adsets < 3:
  → ABO (Ad Set Budget Optimization)
  RAZÃO: Controle granular, evita algoritmo concentrar em 1 vencedor sortudo

SE total_winning_adsets >= 3 AND ROAS estável > 2.5:
  → CBO (Campaign Budget Optimization)
  RAZÃO: Algoritmo realoca entre vencedores comprovados

SE testing + scaling simultâneo:
  → CBO + bid cap mínimo por adset (R$50/dia)
  RAZÃO: Hybrid — algoritmo otimiza mas garante volume mínimo de teste
```

## Output Template

```
🏗️ CAMPAIGN STRUCTURE — {nome do produto}
═══════════════════════════════════════════

ESTADO ATUAL:
- Adsets vencedores: {N}
- ROAS atual: {valor}
- Estágio: [ ] Testing  [ ] Scaling  [ ] Hybrid

ESTRUTURA RECOMENDADA: {CBO | ABO | CBO+cap}

CAMPANHA:
  Nome: [CBO|ABO]_[OBJETIVO]_[FUNIL]_[AUDIENCIA]_[DATA]
  Ex:   CBO_PURCHASE_VSL-R97_LAL1-PURCHASERS_20260415

  Objetivo: {Conversions | Sales | Leads}
  Optimization Event: {Purchase | Lead | etc.}
  Budget: R${X}/dia
  Bid Strategy: {Lowest Cost | Cost Cap | Bid Cap}

ADSETS (mínimo 3):
  1. [Audiência A] — R${Y}/dia (cap mínimo se hybrid)
     - Targeting: {detalhe}
     - Placements: Auto
  2. [Audiência B] — R${Y}/dia
  3. [Audiência C] — R${Y}/dia

ADS POR ADSET (3 ads = 1 vencedor + 2 challengers — Haynes #10):
  Ad 1 (Vencedor atual / Hero): {hook + criativo}
  Ad 2 (Challenger A): {hook + criativo}
  Ad 3 (Challenger B): {hook + criativo}

RAZÃO DA ESTRUTURA:
{citação do framework + dados que justificam}

NEXT STEPS:
1. Validar com @track tracking-gate (EMQ ≥ 7)
2. Brief criativo com @nova (3 hooks por adset)
3. Pré-launch checklist
4. Go-live
```

## Naming Convention (Haynes #3)

```
[ESTRUTURA]_[OBJETIVO]_[FUNIL]_[AUDIENCIA]_[DATA]

ESTRUTURA: CBO, ABO, CBO-CAP
OBJETIVO:  PURCHASE, LEAD, ATC, IC, REG
FUNIL:     VSL-R497, TRIPWIRE-R17, ZOOM-AULA, EBOOK
AUDIENCIA: BROAD, INT-{tema}, LAL1-PURCH, RTG-7D
DATA:      YYYYMMDD

Exemplo: CBO_PURCHASE_VSL-R497_LAL1-PURCH_20260415
```

## Constraints

- NUNCA crie estrutura sem business-context preenchido
- NUNCA use ABO se já tem 3+ vencedores estáveis (perde otimização do algoritmo)
- NUNCA use CBO puro se está em modo testing (algoritmo concentra prematuro)
- SEMPRE 3 ads por adset (vencedor + 2 challengers)
- SEMPRE auto-placements (Haynes #19)
- SEMPRE spending limit = 2x daily budget (margem de segurança)

## Handoff

Após estruturar:
- → @track para tracking-gate
- → @nova para briefs criativos
- → @midas para pre-launch validation
