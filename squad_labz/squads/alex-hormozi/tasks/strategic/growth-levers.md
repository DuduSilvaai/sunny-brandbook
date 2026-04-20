# Task: Growth Levers

> **Owner:** @alex-hormozi
> **Frameworks:** More.Better.Different., 3 Ways to Grow (Hormozi), 4Rs (Retenção)
> **Inputs:** Métricas atuais (leads/mês, taxa de conversão, ticket médio, churn, LTV), maior gargalo percebido

## Quando Executar

- Quando o negócio está crescendo abaixo do potencial e não está claro onde focar
- Antes de escalar budget em qualquer canal (tráfego, vendas, produto)
- Após `*value-equation-audit` — para traduzir o diagnóstico em alavanca de crescimento
- Quando o fundador quer "fazer mais coisas" sem saber qual gera mais impacto

## Algoritmo

### Step 1 — Diagnóstico das 3 Alavancas Principais

As 3 maneiras de crescer um negócio (The 3 Ways to Grow):

**Alavanca 1 — Mais Clientes (Aquisição)**
- Métrica: Leads/mês e CAC
- Quando é o gargalo: poucos leads entrando, pipeline vazio, o negócio morre se parar de prospectar
- Sinal de represa: conversão > 30% mas volume baixo

**Alavanca 2 — Maior Valor por Compra (Ticket / Upsell)**
- Métrica: Ticket médio, taxa de upsell, revenue por cliente na primeira transação
- Quando é o gargalo: bom volume de clientes mas receita por cliente baixa
- Sinal de represa: upsell rate < 5%, sem oferta de continuidade

**Alavanca 3 — Maior Frequência de Compra (Retenção / LTV)**
- Métrica: Churn mensal, LTV, payback period
- Quando é o gargalo: balde furado — clientes entram mas saem rápido
- Sinal de represa: churn > 5% mensalmente

**Regra de prioridade:** SEMPRE fixe a Alavanca 3 (retenção) antes de investir em Alavancas 1 ou 2. Um balde furado não adianta encher mais rápido.

### Step 2 — Aplicar Framework More.Better.Different.

Para a alavanca identificada como mais represada, determinar a ordem de execução:

**MAIS** (volume): Fazer mais do que já está funcionando
- Quando aplicar: menos de 6 meses executando consistentemente a estratégia atual
- Exemplo: Se warm outreach funciona, fazer 50 contatos/dia em vez de 10
- Métrica de sucesso: dobrar o volume de atividade e medir impacto

**MELHOR** (eficiência): Otimizar o que funciona
- Quando aplicar: volume consistente por 6+ meses, resultado abaixo do threshold OK
- Exemplo: Otimizar o script de vendas, melhorar taxa de conversão do funil
- Métrica de sucesso: melhora de 20%+ na métrica-chave sem aumentar custo

**DIFERENTE** (inovação): Novo canal, modelo ou abordagem
- Quando aplicar: volume e otimização executados, retornos decrescentes evidentes
- Exemplo: Adicionar paid ads após dominar warm outreach e content
- Métrica de sucesso: novo canal atinge threshold OK em 90 dias

**Erro crítico:** Ir para DIFERENTE quando MAIS ainda não foi tentado adequadamente.

### Step 3 — Identificar a Alavanca Mais Represada

Scoring de represamento (1-5 por alavanca):
- 5: Crítico — gargalo claro, métricas em Kill
- 3: Moderado — métricas em OK mas abaixo do topo
- 1: Saudável — métricas em Scale, não é o gargalo

### Step 4 — Definir Sequência de Execução

Ordenar as alavancas por impacto vs esforço:
1. Alavanca mais represada (maior impacto imediato)
2. Segunda alavanca (complementar após estabilizar a primeira)
3. Terceira (otimização de longo prazo)

### Step 5 — Critério de Sucesso por Alavanca

Para cada alavanca recomendada, definir:
- Métrica principal (o número que muda)
- Threshold de kill (quando abandonar)
- Threshold de scale (quando dobrar aposta)
- Prazo de validação (mínimo 30 dias, ideal 90 dias)

## Output

```markdown
## Growth Levers — Resultado

### Diagnóstico das 3 Alavancas

| Alavanca | Métrica Atual | Status | Represamento |
|----------|--------------|--------|-------------|
| Aquisição (leads) | [X leads/mês] | Kill/OK/Scale | /5 |
| Ticket/Upsell | [R$ X / Y% upsell] | Kill/OK/Scale | /5 |
| Retenção/LTV | [X% churn / R$ Y LTV] | Kill/OK/Scale | /5 |

### Alavanca Prioritária

**Foco:** [Alavanca X — justificativa]
**Framework aplicado:** [MAIS / MELHOR / DIFERENTE]

**Sequência de execução:**
1. [Ação 1 — prazo — métrica]
2. [Ação 2 — prazo — métrica]
3. [Ação 3 — prazo — métrica]

### Critérios de Sucesso

| Alavanca | Kill | OK | Scale | Prazo |
|----------|------|----|-------|-------|
| [A1] | [métrica] | [métrica] | [métrica] | 30d |
| [A2] | [métrica] | [métrica] | [métrica] | 60d |

### Próximo Passo

[Ação específica + dono + prazo + métrica de validação]
```

## Thresholds

| Alavanca | Kill | OK | Scale |
|----------|------|----|-------|
| Leads/mês | < 20 | 20–100 | > 100 |
| Taxa de conversão | < 20% | 20%–50% | > 50% |
| Churn mensal | > 5% | 2%–5% | < 2% |
| Upsell rate | < 5% | 5%–15% | > 15% |
| LTV:CAC ratio | < 1:3 | 1:3 a 1:5 | > 1:5 |

**Regra absoluta:** NUNCA invista em aquisição (Alavanca 1) com churn > 5%. Fixe retenção primeiro — sempre.
