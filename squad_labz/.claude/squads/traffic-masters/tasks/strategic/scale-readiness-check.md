# Task: Scale Readiness Check

> **Owner:** @midas
> **Framework:** Jeremy Haynes — Scale Rules (#5) + Quality Gate AIOS
> **Inputs:** dados da campanha alvo (últimos 7 dias)

## Quando Executar

ANTES de qualquer aumento de budget > 20%. ANTES de escala horizontal. SEMPRE quando @ralph-burns for chamado.

## Os 5 Critérios (TODOS devem PASSAR)

### Critério 1: ROAS Estável
```
✅ PASS  →  ROAS ≥ 2.5 por mínimo 3 dias consecutivos
❌ FAIL  →  ROAS oscilando OU < 2.5
```

### Critério 2: Volume de Conversões
```
✅ PASS  →  ≥ 30 conversões nos últimos 7 dias
❌ FAIL  →  < 30 conversões (volume insuficiente p/ algoritmo confiar)
```

### Critério 3: Frequency Saudável
```
✅ PASS  →  Frequency < 2.0
❌ FAIL  →  Frequency ≥ 2.0 (audiência queimando, scale piora)
```

### Critério 4: Tracking Saudável (EMQ)
```
✅ PASS  →  EMQ ≥ 7 + CAPI ativo + dedup OK
❌ FAIL  →  Qualquer um dos acima falhando
```

### Critério 5: Criativo Performante
```
✅ PASS  →  Hook Rate ≥ 25% no ad principal
❌ FAIL  →  Hook Rate < 25% (criativo já com sinais de fadiga)
```

## Algoritmo

```
SE 5/5 PASS:
  → APPROVED for scale
  → Decisão: vertical (+20%) OU horizontal (duplicar) OU ambos

SE 4/5 PASS:
  → CONDITIONAL — corrigir o critério faltante antes de escalar
  → Bloqueio temporário

SE ≤ 3/5 PASS:
  → DENIED — scale prematuro
  → Voltar a otimizar antes de pensar em escalar
```

## Output Template

```
🚦 SCALE READINESS CHECK — {nome da campanha}
═══════════════════════════════════════════════

DADOS (últimos 7 dias):
- Spend: R${X}
- Revenue: R${Y}
- Conversões: {N}
- ROAS: {valor}
- Frequency: {valor}
- Hook Rate (ad principal): {valor}
- EMQ: {N}/10
- CAPI: {Ativo | Parcial | Inativo}

CRITÉRIOS:
  1. ROAS ≥ 2.5 estável 3 dias       [✅ | ❌]
  2. ≥ 30 conversões em 7 dias       [✅ | ❌]
  3. Frequency < 2.0                 [✅ | ❌]
  4. EMQ ≥ 7 + CAPI ativo + dedup    [✅ | ❌]
  5. Hook Rate ≥ 25% (ad principal)  [✅ | ❌]

SCORE: {N}/5

VEREDITO: {APPROVED | CONDITIONAL | DENIED}

DECISÃO RECOMENDADA:
{
  Se APPROVED:
    - Vertical scale: +20% budget
    - Horizontal scale: duplicar com {nova audiência}
    - Combinar: {recomendação específica}

  Se CONDITIONAL:
    - Critério faltante: {específico}
    - Ação corretiva: {dispatch para agente responsável}
    - Re-check em {janela}

  Se DENIED:
    - Critérios faltando: {lista}
    - Plano de correção: {steps}
    - NÃO escalar até score 5/5
}

DISPATCH:
  → @dash (vertical scale execution)
  → @ralph-burns (horizontal scale ou aggressive)
  → @nova (refresh criativo se Hook Rate baixo)
  → @track (correção EMQ se < 7)
```

## Constraints

- NUNCA aprove scale com score < 5/5 (não há "quase lá")
- NUNCA scale > 50% por dia sem aprovação MIDAS explícita (reseta learning phase)
- NUNCA scale durante fim de semana se cliente não monitora (espera segunda)
- NUNCA scale na semana de Black Friday (CPM volátil)
- SEMPRE log a decisão com timestamp e dados snapshot

## Quality Gate AIOS

Esta task implementa o `scale-gate.md` (checklist). Sem aprovação aqui, @ralph-burns NÃO executa scale.
