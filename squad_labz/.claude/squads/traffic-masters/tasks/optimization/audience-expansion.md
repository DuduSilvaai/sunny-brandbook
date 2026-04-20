# Task: Audience Expansion (Andromeda Method)

> **Owner:** @dash (estrutura) + @midas (validação cross-channel)
> **Frameworks:** Brian Moncada Andromeda Method (#1) + Audience Saturation Detection (#3) + Haynes Audience Layering (#13) + Hormozi Hydra (#3)
> **Inputs:** adset/campanha vencedora, dados de saturação, business-context (mercado, persona)

## O Problema

Adset vencedor satura. Frequency sobe, ROAS cai. Não dá para escalar verticalmente para sempre. **Audience Expansion** = expandir horizontalmente (novos públicos) preservando o que funciona.

## Andromeda Method (Brian Moncada #1)

Estrutura de 3 camadas concêntricas (do mais quente ao mais frio):

```
┌─────────────────────────────────────────────────┐
│  CAMADA 3: BROAD (mais frio, maior volume)      │
│  ┌───────────────────────────────────────────┐  │
│  │  CAMADA 2: INTEREST (médio)               │  │
│  │  ┌─────────────────────────────────────┐  │  │
│  │  │  CAMADA 1: LAL (mais quente)        │  │  │
│  │  │  • LAL 1% (super qualificado)       │  │  │
│  │  │  • LAL 2-3% (qualificado)           │  │  │
│  │  │  • LAL 4-5% (médio)                 │  │  │
│  │  └─────────────────────────────────────┘  │  │
│  │  • Interesses afinizados                  │  │
│  │  • Comportamentos de compra              │  │
│  └───────────────────────────────────────────┘  │
│  • Sem segmentação (Meta decide)               │
│  • Apenas exclusões (compradores, etc.)        │
└─────────────────────────────────────────────────┘
```

**Princípio:** começar pelo mais quente, expandir para o mais frio conforme escala.

## LAL Ladder (Escada de Lookalike)

```
LAL 1%  →  LAL 2%  →  LAL 3%  →  LAL 5%  →  LAL 10%
(menor)                                       (maior)
mais qualificado                          mais volume

Source ideal (em ordem):
1. Compradores 180d (melhor)
2. Compradores 365d
3. ATC 180d
4. IC 180d
5. Visitantes high-intent (>50% scroll, time > 30s)
6. Engajamento 180d (último recurso)
```

## Algoritmo

### Cenário 1: Expansão LAL (Vertical da camada 1)
```
INPUT: adset vencedor com LAL 1% saturando

1. Validar saturação (Frequency > 3.5 OU Hook Rate ↓ > 30% em 7d)

2. Verificar source disponível:
   - Pixel tem 1.000+ compradores? → LAL 1-5% é viável
   - Pixel tem 100-999? → LAL 1-10% viável (qualidade menor)
   - Pixel tem < 100? → NÃO usar LAL ainda; usar interest stacking

3. Criar LAL ladder:
   - Duplicar adset → trocar audience: LAL 2%
   - Duplicar adset → trocar audience: LAL 3%
   - Duplicar adset → trocar audience: LAL 5%
   
4. NÃO mudar criativo, copy, oferta (Constants vs Variables — Brandon Carter)

5. Subir com mesmo budget do vencedor original (R$ 50-100/dia para teste)

6. Após 7 dias: comparar ROAS. Manter os que ROAS > 2.5, kill resto.
```

### Cenário 2: Interest Stacking (Camada 2)
```
INPUT: LAL saturado, persona bem definida

1. Listar 10-20 interesses afinizados (de business-context):
   - Influenciadores que persona segue
   - Marcas que persona consome
   - Tópicos relacionados ao problema/solução
   - Comportamentos de compra (Engaged Shoppers, etc.)

2. Agrupar em STACKS de afinidade (3-5 interesses por stack):
   Stack A: "Marketing avançado"
     - Neil Patel, Russell Brunson, Frank Kern, ClickFunnels, Marketing Direto
   Stack B: "Empreendedor digital"
     - Tony Robbins, Tim Ferriss, Empreendedorismo, E-commerce, Dropshipping
   Stack C: "Educação executiva"
     - MBA, Harvard Business Review, Forbes, Inc Magazine

3. Criar 1 adset por stack
4. Tamanho do stack ideal: 1-5M pessoas (Brasil) / 5-50M (US)

5. Mesmo criativo do vencedor (Constants) — mudar APENAS audiência

6. Após 7 dias: identificar stack vencedor, expandir com novos interesses afinizados
```

### Cenário 3: Broad Targeting (Camada 3)
```
INPUT: pixel maduro (5.000+ conversões), criativo MUITO forte

1. Validar pré-requisitos:
   - Pixel tem 5.000+ Purchase events últimos 90d
   - Criativo provou ROAS > 2.5 em LAL e Interest
   - Budget mínimo R$200/dia para Broad funcionar

2. Criar adset Broad:
   - Sem segmentação de interesse
   - Idade: range amplo (25-65 típico)
   - Gênero: ambos (a menos que produto seja gênero-específico)
   - Localização: país/região
   - EXCLUSÕES (importante):
     * Compradores 180d (não retarget)
     * Funcionários
     * Públicos custom irrelevantes

3. Criativos múltiplos (3-5 ads) — Meta vai testar e otimizar

4. CBO recomendado para Broad (algoritmo distribui)

5. Janela de avaliação: 14 dias (Broad demora para aprender)
```

### Cenário 4: Saturação Detection (Quando expandir)
```
SINAIS DE SATURAÇÃO (Brian Moncada #3):

1. Frequency > 3.5 em 7 dias                    → audiência viu repetidamente
2. CPM subindo > 30% em 7 dias                  → competição interna pelo público
3. CTR caindo > 25% sem mudar criativo          → fadiga de audiência (não criativo)
4. Audience size restante < 200k (1% do total)  → pool exaurido
5. ROAS caindo enquanto budget mantido          → curva diminishing returns

SE 2+ sinais: SATURADO → expandir audiência (não mexer no criativo)
SE FATIGUE confirmado (creative-fatigue-detector): mexer no criativo primeiro
```

## Output Template

```
🎯 AUDIENCE EXPANSION — {adset/campanha}
═══════════════════════════════════════════

CONTEXTO:
- Adset atual: {nome}
- Audience atual: {LAL X% / Interest stack / Broad}
- Tamanho atual: {N pessoas}
- Status: {SATURADO | PRÓXIMO DA SATURAÇÃO | AINDA TEM RUNWAY}

SINAIS DE SATURAÇÃO:
  1. Frequency:           {valor}    [{✅ | 🚨}]
  2. CPM trend:           {%}        [{✅ | 🚨}]
  3. CTR trend:           {%}        [{✅ | 🚨}]
  4. Audience restante:   {N}        [{✅ | 🚨}]
  5. ROAS trend:          {%}        [{✅ | 🚨}]
  
TOTAL: {N}/5 sinais positivos

ESTRATÉGIA RECOMENDADA:

  Camada atual: {LAL | Interest | Broad}
  Próximo passo: {LAL ladder | Interest stacking | Broad}

EXPANSÃO PROPOSTA:

  Opção A — LAL Ladder:
    - LAL 2% (size: {N}) — duplicar com mesmo criativo
    - LAL 3% (size: {N}) — idem
    - LAL 5% (size: {N}) — idem
    Budget sugerido: R${X}/dia por adset
    Janela de avaliação: 7 dias

  Opção B — Interest Stack:
    Stack A: {nome} — interesses: {lista}
    Stack B: {nome} — interesses: {lista}
    Stack C: {nome} — interesses: {lista}
    Budget sugerido: R${X}/dia por stack

  Opção C — Broad:
    Sem segmentação + exclusões: {lista}
    Budget mínimo: R$200/dia
    Janela: 14 dias (learning phase mais longo)

PRÉ-REQUISITOS VALIDADOS:
  [✅ | ❌] Pixel maduro (5.000+ conversões para Broad)
  [✅ | ❌] Criativo validado (ROAS > 2.5 nas camadas anteriores)
  [✅ | ❌] Budget disponível (mínimo por adset respeitado)
  [✅ | ❌] Constants preservados (NÃO mudar criativo/oferta)

RECOMENDAÇÃO FINAL:
  → {Opção A | B | C}
  Razão: {1 frase justificando}

EXECUÇÃO:
  AUTOMATIC (LAL ladder, Interest stacks):
    → criar via API + log
    
  REQUER MIDAS (Broad scale, mudança cross-channel):
    → DISPATCH @midas

  REQUER PLATFORM SPECIALIST:
    → DISPATCH @{ralph-burns para horizontal scale | depesh-mandalia para BPM}

VALIDAÇÃO PÓS-LANÇAMENTO:
  - Day 7: comparar ROAS de cada nova audiência vs original
  - Day 14: kill audiences com ROAS < 1.5
  - Day 21: scale vencedoras (>2.5) usando vertical-scale
```

## Constraints

- NUNCA expanda audiência sem validar saturação (5 sinais)
- NUNCA mude criativo + audiência ao mesmo tempo (Constants vs Variables)
- NUNCA pule da LAL para Broad (escalar pela camada — Andromeda)
- NUNCA Broad sem 5.000+ conversões no pixel (vai queimar budget)
- SEMPRE excluir compradores em Broad (waste de impressão)
- SEMPRE 7 dias mínimo de avaliação por nova audiência
- SEMPRE preservar adset original ao testar expansão (não substituir)
- NUNCA viole Hydra (60% budget máximo em 1 audience type)
