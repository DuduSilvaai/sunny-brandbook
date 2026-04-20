# Task: Budget Allocation

> **Owner:** @dash (cálculo) + @midas (validação > 50%)
> **Frameworks:** Haynes 80/20 Rule (#11) + Hormozi Hydra (#3) + Moncada Daily Floor (#10)
> **Inputs:** budget total disponível, ROAS por adset/canal, dados de saturação

## Princípios

```
1. 80/20 Rule (Haynes #11)
   80% do budget no vencedor, 20% em testes

2. Daily Floor (Moncada #10)
   Nunca < R$50/dia por adset ativo
   (algoritmo precisa volume mínimo para sair do learning phase)

3. Hydra Strategy (Hormozi #3)
   Nunca > 60% do budget total em 1 canal
   (risco de plataforma é existencial)

4. Vertical Scale Cap (Haynes #5)
   Aumentar máx +20%/dia (preservar learning phase)
   Acima de +50% requer MIDAS

5. Spending Limit (Haynes #23)
   Sempre 2x daily budget (margem de segurança)
```

## Algoritmo

### Cenário 1: Realocação dentro de Campanha (CBO/ABO)
```
INPUT: budget total da campanha, ROAS por adset

1. Identificar vencedores (ROAS > 2.5 estável 3 dias)
2. Identificar performers (ROAS 1.5-2.5)
3. Identificar testes (< 7 dias rodando OU < 30 conversões)
4. Identificar mortos (ROAS < 1.0 após janela)

ALOCAR:
  Vencedores:    80% (proporcional ao ROAS)
  Performers:    15% (manter)
  Testes:        5% (até validar OU killar)
  Mortos:        0% (kill — Haynes K1)

VALIDAR:
  - Cada adset ativo recebe ≥ R$50/dia (Daily Floor)
  - Spending Limit = 2x budget
```

### Cenário 2: Realocação entre Canais (Multi-Platform)
```
INPUT: budget total, TRUE ROAS por canal (após attribution analysis)

1. Calcular TRUE ROAS por canal (não claimed — usar attribution-analysis output)
2. Validar Hydra constraint (nenhum > 60%)
3. Realocar proporcionalmente ao TRUE ROAS

EXEMPLO:
  Budget total: R$100.000/mês
  Meta TRUE ROAS:    3.5  → score 35
  Google TRUE ROAS:  2.8  → score 28
  YouTube TRUE ROAS: 2.0  → score 20

  Alocação proporcional:
    Meta:    R$42.682  (35/83 = 42%)  ← respeita Hydra (< 60%)
    Google:  R$33.735  (28/83 = 34%)
    YouTube: R$24.099  (20/83 = 24%)

  SE Meta excedesse 60%: cap em 60% e redistribuir excedente
```

### Cenário 3: Vertical Scale Daily
```
INPUT: adset elegível para scale (passou scale-readiness-check)

1. Verificar regra S1 ou S2 atendida
2. Calcular novo budget:
   Se S1: budget atual × 1.20 (+20%)
   Se S2: budget atual × 1.50 (+50%) — REQUER MIDAS

3. Atualizar Spending Limit = 2x novo budget
4. Log decisão
5. Re-check em 24h
```

### Cenário 4: Diversificação Hydra (Abrir Novo Canal)
```
INPUT: 1 canal performando muito bem (>60% budget)

1. Validar Hydra (se > 60%, MUST diversificar)
2. Pegar lucro extra (não orçamento original)
3. Alocar para abrir 2º canal:
   - Primeiro canal mantém budget atual
   - Lucro extra alimenta novo canal
   - Setup: @midas dispatcha para platform specialist apropriado
4. Validação após 30 dias: novo canal precisa ROAS > break-even ou kill
```

## Output Template

```
💰 BUDGET ALLOCATION — {período}
═══════════════════════════════════════════

BUDGET TOTAL DISPONÍVEL: R${X}/mês (R${X/30}/dia)

CONTEXTO:
- Tipo de realocação: {within-campaign | cross-channel | vertical-scale | hydra-diversify}
- Constraint primária: {Daily Floor | Hydra | Scale Cap}

ALOCAÇÃO ATUAL:
  {breakdown atual}

ALOCAÇÃO PROPOSTA:
  {breakdown novo} — change: {%}

VALIDAÇÕES:
  [✅ | ❌] Daily Floor (todos ≥ R$50/dia)
  [✅ | ❌] Hydra (nenhum canal > 60%)
  [✅ | ❌] Vertical Scale Cap (≤ +20%/dia ou aprovado)
  [✅ | ❌] Spending Limit = 2x daily budget

JUSTIFICATIVA:
{citação de framework + dados que motivam a realocação}

RISCOS:
- {risco 1 + mitigação}
- {risco 2 + mitigação}

EXECUÇÃO:
  AUTOMATIC (≤ +20%, dentro de canal):
    → executar agora + log

  REQUER APROVAÇÃO MIDAS (> +50% OU cross-channel):
    → DISPATCH @midas

  REQUER PLATFORM SPECIALIST (novo canal):
    → DISPATCH @{kasim-aslam | tom-breeze | etc.}

PRÓXIMA REVISÃO: {data}
```

## Constraints

- NUNCA viole Daily Floor (R$50/dia)
- NUNCA exceda Hydra (60% por canal)
- NUNCA scale > 20% sem aprovação MIDAS
- NUNCA realoque budget de adset com < 7 dias de dados
- SEMPRE update Spending Limit junto com budget
- SEMPRE log + justificativa
