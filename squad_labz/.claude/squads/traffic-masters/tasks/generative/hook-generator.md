# Task: Hook Generator

> **Owner:** @nova
> **Frameworks:** Jeremy Haynes Hook Categories (#6) + Brandon Carter Scientific Hook Testing (#2) + Hormozi Grand Slam Equation (#2)
> **Inputs:** business-context.md (produto, avatar, awareness, oferta)

## Quando Executar

ANTES de cada nova campanha. Quando @nova *fatigue detecta saturação. Toda semana mesmo se vencedor existe (Brandon Carter Pipeline #3).

## Output Mínimo: 10 hooks distribuídos pelas 6 categorias

```
PROBLEMA      (3 hooks)
RESULTADO     (2 hooks)
CURIOSIDADE   (2 hooks)
CONTROVERSO   (1 hook)
PROVA SOCIAL  (1 hook)
TUTORIAL      (1 hook)
─────────────
TOTAL: 10 (mínimo)
```

## Regras de Construção

### Regra 1: 3 segundos
Cada hook deve ser dito/lido em ≤ 3 segundos (vídeo) ou primeira linha (estático).

### Regra 2: Specificity > Generality
```
❌ "Aumente suas vendas com Meta Ads"
✅ "De R$0 a R$50k em 90 dias com 3 ads"
```

### Regra 3: Pattern Interrupt
Use elemento inesperado: número estranho, palavra controversa, contradição, pergunta absurda.

### Regra 4: Awareness Match
```
Avatar inconsciente do problema → CURIOSIDADE ou TUTORIAL
Consciente do problema         → PROBLEMA
Consciente da solução          → RESULTADO ou PROVA SOCIAL
Mais consciente                → CONTROVERSO
```

### Regra 5: Grand Slam Hormozi
Maximize Sonho × Probabilidade ÷ (Tempo × Esforço):
```
- Sonho:        resultado mensurável específico
- Probabilidade: prova social, autoridade, garantia
- Tempo:        prazo curto explícito
- Esforço:      "sem", "fácil", "automatizado"
```

## Templates por Categoria

### PROBLEMA (3 variações)
```
T1: "Cansado de [problema específico]?"
T2: "Você já [ação dolorosa] sem [resultado esperado]?"
T3: "[Número] sinais de que [problema escondido] está [destruindo X]"
```

### RESULTADO (2 variações)
```
T1: "De [estado atual] a [estado final] em [tempo]"
T2: "Como [persona] conseguiu [resultado] sem [esforço típico]"
```

### CURIOSIDADE (2 variações)
```
T1: "O segredo que [autoridade] não te conta sobre [tema]"
T2: "Por que [grupo conhecido] está [ação contraintuitiva]"
```

### CONTROVERSO (1 variação)
```
T: "Esqueça [conselho mainstream]. [Ação contrária] funciona melhor."
```

### PROVA SOCIAL (1 variação)
```
T: "[Número] [persona] já [conquista] usando [método]"
```

### TUTORIAL (1 variação)
```
T: "Como [resultado desejado] em [N] passos (mesmo se [obstáculo])"
```

## Output Template

```
💡 HOOKS — {produto/oferta}
═══════════════════════════════════════
Avatar: {persona}
Nível de awareness: {Schwartz level}
Mecanismo único: {USP}
═══════════════════════════════════════

PROBLEMA (3):
  1. "{hook}"
  2. "{hook}"
  3. "{hook}"

RESULTADO (2):
  4. "{hook}"
  5. "{hook}"

CURIOSIDADE (2):
  6. "{hook}"
  7. "{hook}"

CONTROVERSO (1):
  8. "{hook}"

PROVA SOCIAL (1):
  9. "{hook}"

TUTORIAL (1):
  10. "{hook}"

RECOMENDAÇÃO PARA TESTE INICIAL (Brandon Carter #2):
  - Testar 5 hooks distintos (1 de cada categoria + 1 wildcard)
  - Mesma audiência, mesma oferta (Constants vs Variables)
  - Budget igual por hook (CBO com cap mínimo)
  - Janela: 3-5 dias OU 1.000 imp/hook
  - Decisão: Hook Rate > 25% → manter, < 15% → kill, 15-25% → iterar

DISPATCH:
  → @nova *brief para o(s) hook(s) selecionado(s)
  → @midas para revisar e aprovar test plan
```

## Constraints

- NUNCA gere menos de 10 hooks
- NUNCA repita estrutura entre hooks (variar template)
- SEMPRE classifique por categoria
- SEMPRE valide se hook bate com awareness do avatar
- NUNCA use clichês ("você sabia?", "atenção!") sem twist
- SEMPRE inclua specificity (números, prazos, nomes)
