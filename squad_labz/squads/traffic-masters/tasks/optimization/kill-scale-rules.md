# Task: Kill/Scale Rules (Determinístico)

> **Owner:** @dash
> **Frameworks:** Jeremy Haynes Kill Rules (#4) + Scale Rules (#5)
> **Inputs:** dados de campanha/adset/ad em tempo real

## Princípio

Decisões DETERMINÍSTICAS. Sem interpretação. Sem "vamos esperar mais". Threshold atingido = ação executada + log.

## Kill Rules (PAUSAR)

```
═══════════════ SEVERIDADE CRÍTICA — IMEDIATO ═══════════════

REGRA K1: ROAS < 0.5
  → AÇÃO: PAUSAR ADSET imediato
  → JUSTIFICATIVA: perda de R$0.50 por R$1 gasto = sangrando
  → JANELA: imediato (sem mínimo de impressões)
  → LOG: [AUTO-DECISION] Adset {nome}: ROAS {X} < 0.5 → PAUSE (Haynes K1)

REGRA K2: CPA > 2x target
  → AÇÃO: PAUSAR ADSET
  → JANELA: após 1.000 impressões mínimo
  → LOG: [AUTO-DECISION] Adset {nome}: CPA R${X} > {2 × target} → PAUSE (Haynes K2)

═══════════════ SEVERIDADE ALTA — AÇÃO NECESSÁRIA ═══════════════

REGRA K3: CTR < 0.5%
  → AÇÃO: PAUSAR AD (não adset)
  → JANELA: após 500 impressões
  → LOG: [AUTO-DECISION] Ad {nome}: CTR {X}% < 0.5% → PAUSE (Haynes K3)

REGRA K4: Hook Rate < 15%
  → AÇÃO: PAUSAR + dispatch @nova *hooks
  → JANELA: após 1.000 impressões
  → LOG: [AUTO-DECISION] Ad {nome}: Hook Rate {X}% < 15% → PAUSE + REFRESH (Haynes K4)

REGRA K5: Frequency > 4
  → AÇÃO: PAUSAR + dispatch @dash *expand
  → JANELA: imediato (Frequency é cumulativo)
  → LOG: [AUTO-DECISION] Adset {nome}: Freq {X} > 4 → PAUSE + EXPAND (Haynes K5)
```

## Scale Rules (AUMENTAR)

```
═══════════════ ESCALA VERTICAL ═══════════════

REGRA S1: ROAS > 2.5 estável por 3 dias
  → AÇÃO: +20% budget
  → REQUISITO: 30+ conversões nos 7 dias
  → CADÊNCIA: 1x por dia (não múltiplas vezes)
  → LOG: [AUTO-DECISION] Adset {nome}: ROAS {X} > 2.5 (3 dias) → +20% budget (Haynes S1)

REGRA S2: ROAS > 4.0 estável por 5 dias
  → AÇÃO: +50% budget + escalate @midas
  → REQUISITO: 50+ conversões nos 7 dias
  → APROVAÇÃO: requer @midas (mudança > 50%)
  → LOG: [AUTO-DECISION] Adset {nome}: ROAS {X} > 4.0 (5 dias) → ESCALATE +50% (Haynes S2)

═══════════════ ESCALA HORIZONTAL ═══════════════

REGRA S3: ROAS > 3.0 + Frequency < 2
  → AÇÃO: duplicar adset com nova audiência
  → AUDIÊNCIA: LAL escalonado (LAL2, LAL3, LAL5) ou Interest novo
  → DISPATCH: @ralph-burns para execução
  → LOG: [AUTO-DECISION] Adset {nome}: ROAS {X} > 3.0 + Freq {Y} < 2 → DUPLICATE (Haynes S3)
```

## Algoritmo de Aplicação

```
PARA CADA campanha/adset/ad ativo:
  PARA CADA regra (K1 → K5, S1 → S3):
    SE condição == TRUE AND janela atendida:
      EXECUTAR ação
      LOG decisão com timestamp + dados snapshot
      SE ação requer aprovação:
        DISPATCH escalation
      SE ação requer outro agente:
        DISPATCH agente

NUNCA executar ação sem log.
NUNCA pular janela mínima.
```

## Output Template

```
⚙️ KILL/SCALE EXECUTION — {timestamp}
═══════════════════════════════════════════

CAMPANHAS ANALISADAS: {N}
ADSETS ANALISADOS: {N}
ADS ANALISADOS: {N}

DECISÕES:

KILL EXECUTADAS:
  - Adset "{nome}" (Razão: K1 — ROAS 0.4 < 0.5)
  - Ad "{nome}" (Razão: K3 — CTR 0.3% < 0.5%)
  - ... 

KILL PENDENTES (janela não atingida):
  - Ad "{nome}" (CTR 0.4% mas só 320 imp — esperando 500)

SCALE EXECUTADAS:
  - Adset "{nome}" +20% (Razão: S1 — ROAS 2.8 estável 3 dias)
  - ...

SCALE PENDENTES (requer aprovação):
  - Adset "{nome}" +50% pendente (Razão: S2)  → DISPATCH @midas

DISPATCH:
  - @nova *hooks para 2 ads pausados por K4
  - @ralph-burns *horizontal-scale para 1 adset com S3
  - @midas para aprovação de S2

PRÓXIMA EXECUÇÃO: {timestamp + 1h ou next trigger}
```

## Constraints

- NUNCA viole janela mínima (impressões / dias)
- NUNCA tome decisão sem log rastreável
- NUNCA execute scale > 50% sem MIDAS (Haynes S2 requer aprovação)
- SEMPRE incluir framework + número da regra na justificativa
- SEMPRE dispatch a agentes downstream (refresh, expand, etc.)
- NUNCA aplique regras durante eventos especiais (Black Friday) sem confirmação MIDAS
