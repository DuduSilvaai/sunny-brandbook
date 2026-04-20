# Task: Value Equation Audit

> **Owner:** @alex-hormozi
> **Frameworks:** Value Equation ($100M Offers), Diagnóstico por Variável
> **Inputs:** Oferta atual (descrição completa), ticket, prova existente, mecanismo de entrega

## Quando Executar

- Antes de qualquer investimento em tráfego ou escala
- Quando conversão de vendas está abaixo de 20%
- Gate obrigatório da Phase 2 do Playbook Grand Slam Offer
- Quando o cliente não consegue explicar a oferta em 1 frase
- Após qualquer reformulação de oferta — validar antes de relançar

## Definição da Fórmula

```
Valor = (Dream Outcome × Perceived Probability of Achievement)
        ÷ (Time Delay × Effort & Sacrifice)
```

**Lógica:**
- Numerador alto = prospect quer muito e acredita que vai funcionar
- Denominador baixo = prospect acha que consegue rápido e sem muita dor
- Score alto = oferta de alto valor percebido = conversão alta = preço premium justificado

## Algoritmo

### Step 1 — Pontuar cada Variável (1-10)

**Variável 1 — Dream Outcome (Resultado dos Sonhos)**

O quanto o resultado prometido é específico, desejável e relevante para o avatar?

- 10: Resultado específico, mensurável, urgente — ex: "dobrar receita em 90 dias"
- 7: Resultado claro mas sem prazo ou métrica — ex: "aumentar vendas"
- 5: Resultado vago mas relevante — ex: "crescer o negócio"
- 3: Resultado pouco atrativo ou genérico demais
- 1: Resultado que o prospect não deseja ou não entende

**Variável 2 — Perceived Probability (Probabilidade Percebida de Sucesso)**

O quanto o prospect acredita que vai funcionar PARA ELE ESPECIFICAMENTE?

- 10: Prova abundante (10+ cases similares ao avatar), garantia forte, mecanismo único explicado
- 7: 3-5 cases, garantia presente, resultado médio documentado
- 5: 1-2 cases, sem garantia clara, depende muito da credencial do vendedor
- 3: Sem casos específicos, credencial fraca, sem garantia
- 1: Sem nenhuma prova, sem garantia, prospect cético

**Variável 3 — Time Delay (Demora para Ver o Resultado)**

Quanto tempo até o primeiro resultado percebido pelo cliente?

- 10: Quick win em 24-48h + resultado final em < 30 dias
- 7: Primeiro resultado em 1-2 semanas, resultado final em 60-90 dias
- 5: Resultado perceptível em 3 meses
- 3: Resultado em 6 meses ou mais sem marcos intermediários
- 1: Resultado incerto e sem prazo definido

ATENÇÃO: score baixo = Delay ALTO = problema. Inverter a lógica ao calcular.

**Variável 4 — Effort & Sacrifice (Esforço e Sacrifício do Cliente)**

Quanto o cliente precisa fazer para obter o resultado?

- 10: Done-for-you completo — cliente não precisa fazer quase nada
- 7: Done-with-you — cliente faz com suporte intensivo, passos simples
- 5: Currículo claro mas exige disciplina e horas semanais consistentes
- 3: Processo complexo, curva de aprendizado alta, mudança de rotina significativa
- 1: Depende exclusivamente da disciplina do cliente sem suporte

ATENÇÃO: score baixo = Esforço ALTO = problema. Inverter a lógica ao calcular.

### Step 2 — Calcular o Score de Valor

```
Score = (DO × PP) / (TD × E&S)
```

Onde TD e E&S são convertidos: score baixo = fator alto (ruim), score alto = fator baixo (bom).

Conversão para cálculo: use (11 - score_variavel) para TD e E&S

```
Score = (DO × PP) / ((11 - TD_score) × (11 - E&S_score))
```

### Step 3 — Identificar a Variável Mais Fraca

A variável com score mais baixo é o maior gargalo da oferta. Esta é a prioridade de melhoria.

Diagnóstico por variável fraca:
- **Dream Outcome baixo** → Produto não entrega o que o avatar quer, ou comunicação é vaga → *offer-designer
- **Perceived Probability baixa** → Falta de prova, garantia fraca, credencial fraca → *guarantee-designer
- **Time Delay alto** → Cliente espera muito para ver resultado → adicionar quick win
- **Effort alto** → Implementação muito difícil → componente done-for-you ou simplificar

### Step 4 — Gerar 3 Ações para Melhorar a Variável Mais Fraca

Para cada ação:
- Descrição específica da mudança
- Impacto esperado na variável (score atual → score projetado)
- Prazo de implementação
- Recurso necessário

### Step 5 — Recalcular Score Projetado Após Melhorias

Mostrar o score atual vs score projetado após as 3 ações implementadas.

## Output

```markdown
## Value Equation Audit — Resultado

### Oferta Auditada
[Nome/descrição da oferta]

### Scorecard

| Variável | Score (1-10) | Status | Diagnóstico |
|----------|-------------|--------|-------------|
| Dream Outcome | /10 | Fraco/OK/Forte | [análise] |
| Perceived Probability | /10 | Fraco/OK/Forte | [análise] |
| Time Delay | /10 | Fraco/OK/Forte | [análise] |
| Effort & Sacrifice | /10 | Fraco/OK/Forte | [análise] |
| **Score Total** | **/X** | **Kill/OK/Scale** | |

### Variável Mais Fraca: [Variável X]

**3 Ações de Melhoria:**

1. **[Ação 1]**
   - Mudança: [descrição específica]
   - Impacto: [score atual] → [score projetado]
   - Prazo: [X dias]

2. **[Ação 2]**
   - Mudança: [descrição específica]
   - Impacto: [score atual] → [score projetado]
   - Prazo: [X dias]

3. **[Ação 3]**
   - Mudança: [descrição específica]
   - Impacto: [score atual] → [score projetado]
   - Prazo: [X dias]

### Score Projetado Após Melhorias: [Y] (+[Z] vs atual)

### Próximo Passo
[Comando + ação específica]
```

## Thresholds

| Score | Status | Decisão |
|-------|--------|---------|
| < 5 | Kill — oferta fraca | Rebuild completo da oferta |
| 5–15 | OK — oferta mediana | Otimizar variável mais fraca |
| > 15 | Scale — oferta forte | Escalar aquisição |

**Regra de escala:** NUNCA escale investimento em tráfego com score < 5. Mais tráfego em uma oferta fraca apenas acelera o fracasso.

**Anti-pattern:** Focar em copy ou criativo antes de corrigir a oferta. Copy é amplificador — amplifica tanto o que funciona quanto o que não funciona.
