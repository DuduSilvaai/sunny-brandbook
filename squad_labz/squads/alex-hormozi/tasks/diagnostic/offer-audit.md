# Task: Offer Audit

> **Owner:** @alex-hormozi
> **Frameworks:** Value Equation, Anti-patterns ($100M Offers), Grand Slam Offer Checklist
> **Inputs:** Oferta existente completa (descrição, preço, garantia, avatar, prova), métricas de conversão atuais

## Quando Executar

- Quando a taxa de conversão está abaixo do threshold OK (< 20%)
- Quando clientes compram mas pedem reembolso (refund > 3%)
- Antes de qualquer decisão de escalar tráfego ou budget
- Diagnóstico de rotina a cada 90 dias para ofertas ativas
- Quando o fundador sente que "a oferta não está funcionando" sem saber por quê

## Definição

Uma auditoria de oferta não é crítica — é diagnóstico. O objetivo é identificar o gap específico entre o que a oferta promete e o que o prospect acredita que vai receber. Todo problema de conversão tem raiz em alguma variável da Value Equation ou em um anti-pattern estrutural.

## Algoritmo

### Step 1 — Checklist de Diagnóstico (score: Sim / Parcial / Não)

**Bloco 1 — Dream Outcome**
- A oferta tem Dream Outcome específico e mensurável?
  - Não = "ajudamos empresas a crescer" / Sim = "dobramos receita de agências em 90 dias"
- O avatar consegue explicar a oferta em 1 frase?
  - Teste: peça para 3 clientes explicarem o que compraram — se as explicações divergem, há problema
- O resultado prometido é urgente para o avatar? (não "seria bom ter")

**Bloco 2 — Prova e Credibilidade**
- Existe prova social (mínimo 3 cases ou depoimentos com resultado específico)?
- Os depoimentos mencionam resultado mensurável (não apenas "adorei o produto")?
- Há antes-e-depois documentado com números?

**Bloco 3 — Preço e Posicionamento**
- O preço está no quartil superior do mercado?
  - Se não: candidato imediato para *pricing-strategy
- A justificativa de preço está baseada em valor entregue (não em custo)?
- Existe âncora de preço (valor avulso vs preço de entrada)?

**Bloco 4 — Garantia**
- A garantia elimina o maior medo do prospect?
- O texto da garantia tem prazo + condição + o que recebe de volta?
- A garantia causa leve desconforto ao oferecer? (se não, não é forte o suficiente)

**Bloco 5 — Diferenciação**
- A oferta pode ser comparada a concorrentes por preço?
  - Sim = commodity, não é uma Grand Slam Offer
- Existe componente único que concorrentes não têm?
- Os 5 componentes GSO estão presentes (promoção, valor, preço, garantia, modelo de dinheiro)?

**Bloco 6 — Execução pelo Cliente**
- O cliente consegue implementar sem dependência excessiva do fundador?
- Existe quick win nas primeiras 48-72h de entrega?
- O onboarding reduz o esforço percebido a menos de 5h/semana?

### Step 2 — Detectar Anti-patterns

Verificar presença de cada anti-pattern dos frameworks Hormozi:

**Anti-pattern 1 — Oferta Genérica Sem Nicho (chunk-05)**
- Sinal: oferta serve "qualquer pessoa" ou "qualquer empresa"
- Consequência: preço não pode subir, diferenciação impossível
- Solução: *niche-selector + *pricing-strategy

**Anti-pattern 2 — Preço Baixo Como Estratégia**
- Sinal: "somos mais baratos que X"
- Consequência: race to the bottom, margens destruídas, clientes menos comprometidos
- Solução: *pricing-strategy (Virtuous Price Circle)

**Anti-pattern 3 — Sem Garantia Clara**
- Sinal: "satisfação garantida" sem especificidade
- Consequência: prospect não percebe reversão de risco, conversão baixa
- Solução: *guarantee-designer

**Anti-pattern 4 — Avatar Amplo Demais (Starving Crowd test)**
- Sinal: o avatar não está "morrendo de fome" pela solução
- Consequência: CAC alto, ciclo de vendas longo
- Solução: *market-selector para validar mercado

**Anti-pattern 5 — Escalando Antes de Validar**
- Sinal: investindo em paid ads com < 3 cases documentados
- Consequência: amplifica o problema, queima capital
- Solução: validar com warm outreach (mínimo 3 vendas) antes de escalar

**Anti-pattern 6 — Retenção Quebrada**
- Sinal: refund rate > 10% ou churn > 5%
- Consequência: todo novo cliente é compensado por um perdido
- Solução: *retention-4rs antes de qualquer escala

### Step 3 — Calcular Score Global da Auditoria

Pontuação por bloco (cada item: 2 pontos = Sim, 1 = Parcial, 0 = Não):

| Bloco | Itens | Score Máximo | Score Atual |
|-------|-------|-------------|-------------|
| Dream Outcome | 3 | 6 | /6 |
| Prova e Credibilidade | 3 | 6 | /6 |
| Preço e Posicionamento | 3 | 6 | /6 |
| Garantia | 3 | 6 | /6 |
| Diferenciação | 3 | 6 | /6 |
| Execução pelo Cliente | 3 | 6 | /6 |
| **Total** | **18** | **36** | **/36** |

### Step 4 — Priorizar Correções

Ordenar os blocos com menor score:
1. Bloco mais crítico → ação imediata
2. Segundo bloco → ação em 2 semanas
3. Terceiro bloco → ação em 30 dias

Para cada correção: identificar o comando que executa a melhoria.

## Output

```markdown
## Offer Audit — Resultado

### Oferta Auditada: [Nome]

### Scorecard Geral

| Bloco | Score | Status |
|-------|-------|--------|
| Dream Outcome | /6 | Fraco/OK/Forte |
| Prova e Credibilidade | /6 | Fraco/OK/Forte |
| Preço e Posicionamento | /6 | Fraco/OK/Forte |
| Garantia | /6 | Fraco/OK/Forte |
| Diferenciação | /6 | Fraco/OK/Forte |
| Execução pelo Cliente | /6 | Fraco/OK/Forte |
| **Total** | **/36** | **Kill/Otimizar/Scale** |

### Anti-patterns Detectados

1. [Anti-pattern X] — Severidade: Alta/Média
   - Evidência: [o que foi observado]
   - Antídoto: [comando + ação]

### Plano de Correção

**Prioridade 1 (esta semana):** [ação + comando]
**Prioridade 2 (próximas 2 semanas):** [ação + comando]
**Prioridade 3 (próximo mês):** [ação + comando]

### Score Projetado Após Correções: [X]/36
```

## Thresholds

| Score Global | Status | Decisão |
|-------------|--------|---------|
| < 18 | Kill — oferta quebrada | Rebuild — executar *offer-designer |
| 18–27 | Otimizar | Corrigir blocos mais fracos por prioridade |
| > 27 | Scale | Oferta sólida — escalar aquisição |

**Regra de escala:** Score < 27 + qualquer anti-pattern Kill-level = HOLD em escala até corrigir.
