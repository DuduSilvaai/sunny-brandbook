# Task: Guarantee Designer

> **Owner:** @alex-hormozi
> **Frameworks:** Grand Slam Guarantee ($100M Offers), Reversão de Risco, Value Equation (Perceived Probability)
> **Inputs:** Oferta atual ou em construção, maior objeção do prospect, ticket da oferta, margem bruta disponível

## Quando Executar

- Durante a construção de qualquer Grand Slam Offer (Componente 4)
- Quando a taxa de conversão está abaixo de 20% e a objeção principal é "e se não funcionar?"
- Quando a Perceived Probability está baixa no *value-equation-audit
- Gate obrigatório da Phase 5 do Playbook Grand Slam Offer

## Definição

A garantia é o mecanismo que elimina o maior medo do prospect antes que ele precise perguntar. Uma garantia forte não é custo — é investimento em conversão. A oferta mais fácil de vender é aquela onde o risco de comprar é zero.

**Regra de Hormozi:** Sua garantia deve causar leve desconforto quando você a oferece. Se não sentir nenhum desconforto, ela não é forte o suficiente para mover a agulha de conversão.

## Algoritmo

### Step 1 — Identificar a Maior Objeção do Prospect

A garantia deve ser construída em torno do maior medo, não de uma lista genérica de objeções. Eliciar:

- "O que o prospect mais teme ao comprar esta oferta?"
- Categorias comuns de medo:
  - "E se não funcionar para mim?" (dúvida sobre resultado)
  - "E se eu não conseguir implementar?" (dúvida sobre capacidade própria)
  - "E se eu perder meu dinheiro?" (risco financeiro)
  - "E se não valer o preço?" (risco de valor percebido)

### Step 2 — Selecionar o Tipo de Garantia

Tipos de garantia em ordem crescente de força:

**Tipo 1 — Unconditional (Incondicional)**
- Reembolso total sem perguntas dentro de X dias
- Força: alta (elimina risco financeiro completamente)
- Risco: pode ser abusada; requer produto que entrega valor rapidamente
- Quando usar: ofertas de até R$2.000, produto com resultado percebido em < 30 dias

**Tipo 2 — Conditional (Condicional)**
- Reembolso se o cliente cumprir X condições e não atingir Y resultado em Z dias
- Força: muito alta (elimina risco E aumenta comprometimento)
- Risco: condições precisam ser razoáveis — muito difícil = garantia inútil
- Quando usar: programas de transformação com resultado mensurável

**Tipo 3 — Anti-guarantee (Sem reembolso)**
- Não há reembolso, mas a oferta é tão específica e transparente que não precisa
- Força: variável (funciona quando a prova é esmagadora)
- Quando usar: serviços customizados, consultoria, onde o resultado depende do cliente
- Requisito: ter prova sólida antes de usar este tipo

**Tipo 4 — Implied Guarantee (Garantia Implícita)**
- Os resultados são tão óbvios e documentados que a garantia é desnecessária
- Força: mais alta possível (mas exige portfólio robusto de prova)
- Quando usar: negócios maduros com NPS > 70 e > 50 cases documentados

### Step 3 — Calcular o Risco Financeiro da Garantia

Para garantias com reembolso:

```
Risco = Taxa de reembolso esperada × Ticket médio × Volume mensal de vendas
```

- Taxa de reembolso aceitável: < 10% (se > 10%, problema é de entrega, não de garantia)
- Se risco financeiro > 15% da receita bruta: revisar as condições da garantia

### Step 4 — Formular o Texto da Garantia

Estrutura obrigatória do texto:

```
"Se você [condição específica de esforço do cliente], e não [resultado específico e mensurável]
em [prazo claro], nós [o que o cliente recebe de volta: reembolso total / crédito / extensão]."
```

Exemplos:
- Ruim: "Garantia de satisfação ou seu dinheiro de volta."
- Bom: "Se você completar os módulos, implementar os 3 sistemas e não dobrar sua taxa de conversão em 90 dias, devolvemos 100% do investimento — sem burocracia."

### Step 5 — Verificar Especificidade

Checklist de qualidade da garantia:
- [ ] Tem prazo claro (número de dias)
- [ ] Tem condição clara (o que o cliente precisa fazer)
- [ ] Tem resultado claro (o que constitui "não funcionou")
- [ ] Tem consequência clara (o que o cliente recebe se não funcionar)
- [ ] Causa leve desconforto ao oferecer (se não causar, aumentar a força)

## Output

```markdown
## Guarantee Designer — Resultado

### Maior Objeção Identificada
[Frase exata que representa o maior medo do prospect]

### Tipo de Garantia Selecionado
[Tipo + justificativa baseada no produto e na objeção]

### Texto da Garantia

> "[Texto completo da garantia com prazo + condição + o que recebe de volta]"

### Análise de Risco Financeiro

- Taxa de reembolso projetada: [X%]
- Risco financeiro mensal: R$ [Y]
- Impacto na conversão estimado: +[Z%]
- Ratio risco/benefício: [positivo/negativo + justificativa]

### Checklist de Qualidade

- [x] Tem prazo claro: [X dias]
- [x] Tem condição específica: [condição]
- [x] Tem resultado mensurável: [resultado]
- [x] Tem consequência definida: [o que recebe]
- [x] Causa desconforto ao oferecer: [sim/não — se não, revisar]

### Próximo Passo
[Integrar na GSO + testar em 10 conversas de vendas e medir impacto na conversão]
```

## Thresholds

| Métrica | Kill | OK | Scale |
|---------|------|----|-------|
| Taxa de reembolso | > 10% | 3%–10% | < 3% |
| Impacto na conversão | 0% | +5%–+15% | > +15% |
| Ratio risco/conversão | Risco > Benefício | Equilíbrio | Benefício > Risco |

**Anti-pattern:** Criar garantia genérica ("satisfação garantida") que não endereça a objeção específica. Uma garantia que não menciona o maior medo do prospect não move a agulha de conversão.
