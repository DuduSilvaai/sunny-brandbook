# Task: Pricing Strategy

> **Owner:** @alex-hormozi
> **Frameworks:** Pricing by Niche, Virtuous Price Circle, Value Equation
> **Inputs:** Produto/serviço atual, ticket atual, mercado-alvo, concorrentes de referência (se houver)

## Quando Executar

- Quando o ticket está abaixo do quartil superior do mercado
- Antes de lançar uma nova oferta (definir preço a partir do valor, não do custo)
- Quando a taxa de conversão está acima de 50% — sinal de que o preço está baixo demais
- Gate obrigatório da Phase 4 do Playbook Grand Slam Offer
- Após `*offer-audit` que detectar comoditização por preço

## Algoritmo

### Step 1 — Mapear a Oferta no Nível de Especificidade Atual

Identificar em qual nível o produto/serviço se posiciona hoje:

| Nível | Descrição | Exemplo (gestão de tempo) | Efeito no Preço |
|-------|-----------|--------------------------|-----------------|
| Genérico | Serve qualquer pessoa | "Gestão de tempo" | $19 |
| Nicho | Serve um segmento | "Para profissionais de vendas" | $99 |
| Específico | Serve um sub-segmento | "Para representantes B2B outbound" | $499 |
| Hiper-nicho | Serve um perfil exato | "Para reps B2B outbound de ferramentas elétricas" | $1.997 |

Aplicar ao produto do usuário e identificar onde está hoje.

### Step 2 — Calcular o Impacto de Especificidade no Preço

Para cada nível adicional de especificidade, estimar o multiplicador de preço viável:
- Genérico → Nicho: 3x a 5x
- Nicho → Específico: 3x a 5x
- Específico → Hiper-nicho: 2x a 4x

### Step 3 — Verificar Poder de Compra do Mercado-Alvo

Cruzar com o resultado do `*market-selector` (Indicador 2: Buying Power):
- Score ≥ 4: preço hiper-nicho é sustentável
- Score 3: preço específico é o teto seguro
- Score ≤ 2: revisar o mercado antes de precificar

### Step 4 — Aplicar o Virtuous Price Circle

Documentar o ciclo completo para o usuário entender o mecanismo:

```
Preço alto
  → cliente paga mais → comprometimento maior → executa melhor
  → melhores resultados → mais prova (depoimentos, cases)
  → prova justifica o preço alto
  → permite reinvestimento em qualidade de entrega
  → [ciclo continua]
```

**Por que preço baixo quebra o ciclo:**
- Cliente menos comprometido → resultados piores
- Resultados piores → prova mais fraca
- Prova fraca → não justifica subir preço no futuro
- Margem menor → menos recurso para melhorar entrega

**Prova psicológica:** Estudos com vinhos idênticos vendidos a preços diferentes mostram que participantes avaliam EXPERIÊNCIA como melhor no produto mais caro — mesmo sendo o mesmo produto. Preço altera percepção de qualidade.

### Step 5 — Definir Preço Final + Justificativa

Calcular:
1. Preço atual → preço target (com multiplicador de especificidade)
2. Valor entregue estimado (dream outcome em $) vs preço cobrado
3. Ratio mínimo aceitável: valor entregue ≥ 10x o preço cobrado

Verificar:
- O preço está no quartil superior do mercado? (não topo, não fundo)
- A justificativa de valor está documentada em termos de dream outcome?
- A taxa de conversão atual é ≥ 20%? Se sim, o preço provavelmente pode ser aumentado

## Output

```markdown
## Pricing Strategy — Resultado

### Diagnóstico Atual

- Ticket atual: [R$/$/€ X]
- Nível de especificidade: [genérico/nicho/específico/hiper-nicho]
- Posição no mercado: [abaixo / na média / quartil superior]

### Recomendação de Preço

**Próximo nível de especificidade:** [avatar mais específico]
**Ticket recomendado:** [R$/$/€ Y]
**Multiplicador:** [X]x vs ticket atual
**Justificativa de valor:** [dream outcome entregue em $] vs [preço cobrado]
**Ratio valor/preço:** [X]x (mínimo aceitável: 10x)

### Virtuous Price Circle

[Documentar o ciclo específico para o produto do usuário]

### Por que competir em preço é suicídio estratégico

[Exemplo específico ao contexto do usuário]

### Próximo Passo

[Comando ou ação com prazo e critério de validação]
```

## Thresholds

| Métrica | Kill | OK | Scale |
|---------|------|----|-------|
| Taxa de conversão | < 5% (preço alto demais ou oferta fraca) | 20%–50% | > 50% (sinal de preço baixo) |
| Ratio valor/preço | < 5x | 5x–10x | > 10x |
| Posição no mercado | Quartil inferior | Quartil médio | Quartil superior |

**Regra de ouro:** Se conversão > 50%, aumente o preço imediatamente. Você está deixando dinheiro na mesa E prejudicando o comprometimento dos clientes.

**Anti-pattern:** Usar concorrentes como âncora de preço. Concorrentes podem estar precificando errado também. Use o valor entregue como âncora — não o mercado.
