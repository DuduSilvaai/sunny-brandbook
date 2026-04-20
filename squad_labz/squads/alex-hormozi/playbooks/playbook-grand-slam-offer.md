# Playbook: Grand Slam Offer

> **Agente:** @alex-hormozi
> **Duração estimada:** 1-2 semanas
> **Comando:** `*playbook grand-slam-offer`
> **Frameworks:** $100M Offers — Value Equation, Market Selection, GSO System, Pricing by Niche, Grand Slam Guarantee

## Objetivo

Construir uma Grand Slam Offer do zero: uma oferta tão boa que o prospect se sente estúpido em dizer não, que não pode ser comparada a nenhum concorrente, e que existe em "categoria de um".

**Critérios de conclusão:**
- Value Equation score ≥ 15
- Conversão de vendas ≥ 20%
- CAC:LTV ratio ≥ 1:3
- Cliente consegue explicar a oferta em 1 frase

---

## Fases

### Phase 0: Business Discovery (Dia 1)

**Comando:** `*business-discovery`

**O que coletar:**
- Produto/serviço (o quê e formato de entrega)
- Mercado-alvo atual (avatar + dor principal)
- Ticket médio, CAC e LTV atuais (se o negócio já existe)
- Maior problema agora: aquisição, conversão, retenção ou oferta?
- Resultados de clientes existentes (prova disponível)
- Meta 90 dias (número específico, não "crescer")

**Gate de saída:**
- [ ] Produto + mercado + ticket + prova atual + meta definidos
- [ ] Contexto preenchido no business-context-template.md

**Bloqueio:** Sem este gate, nenhuma fase seguinte pode ser executada. Qualquer recomendação sem contexto é opinião, não framework.

---

### Phase 1: Market Validation (Dia 2-3)

**Comando:** `*market-selector`
**Task:** `tasks/strategic/market-selector.md`

**O que fazer:**
1. Listar 3+ mercados candidatos (incluindo o atual)
2. Pontuar cada mercado nos 4 indicadores (Pain / Buying Power / Reachable / Growing)
3. Calcular score total por mercado (máx 20)
4. Comparar mercado atual vs melhores candidatos

**Gate de saída:**
- [ ] Score ≥ 12 nos 4 indicadores para o mercado escolhido
- [ ] Se score < 12: **PIVOTAR MERCADO antes de continuar** — não construir oferta para mercado ruim

**Regra crítica:** Um produto mediano em mercado excelente bate produto excelente em mercado ruim. Fixe o mercado antes da oferta.

---

### Phase 2: Value Equation Baseline (Dia 4)

**Comando:** `*value-equation-audit`
**Task:** `tasks/diagnostic/value-equation-audit.md`

**Aplicar se:** Existe oferta atual que será reformulada
**Pular se:** Negócio novo sem oferta anterior (ir direto para Phase 3)

**O que fazer:**
1. Pontuar oferta atual nas 4 variáveis (1-10 cada)
2. Calcular score atual
3. Identificar a variável mais fraca (prioridade de melhoria na Phase 3)

**Gate de saída:**
- [ ] Variável mais fraca identificada
- [ ] Score atual documentado (referência para medir melhoria após Phase 3)
- [ ] Plano de melhoria para a variável mais fraca

---

### Phase 3: Offer Construction (Dia 5-7)

**Comando:** `*grand-slam-offer-builder`
**Task:** `tasks/generative/grand-slam-offer-builder.md`

**O que construir:**
1. Dream Outcome com especificidade cirúrgica (quem + o quê + em quanto tempo + sem o quê)
2. Stack de valor completo (todos os deliverables com valores atribuídos)
3. Quick win (resultado percebido em 48-72h)
4. Componente de redução de esforço (done-for-you ou done-with-you)
5. Verificação de "categoria de um"

**Gate de saída:**
- [ ] 5 componentes GSO presentes (promoção + valor + preço + garantia + modelo de dinheiro)
- [ ] Ratio valor/preço ≥ 10x
- [ ] Oferta existe em "categoria de um" — não pode ser comparada por preço
- [ ] Avatar consegue explicar a oferta em 1 frase

---

### Phase 4: Pricing (Dia 8)

**Comando:** `*pricing-strategy`
**Task:** `tasks/strategic/pricing-strategy.md`

**O que definir:**
1. Nível de especificidade atual vs potencial (genérico → hiper-nicho)
2. Ticket recomendado baseado em especificidade e poder de compra do mercado
3. Documentação do Virtuous Price Circle para o contexto específico
4. Âncora de preço (valor percebido vs preço de entrada)

**Gate de saída:**
- [ ] Preço no quartil superior do mercado
- [ ] Justificativa de valor documentada (baseada em dream outcome, não em custo)
- [ ] Ratio valor entregue / preço cobrado ≥ 10x

**Anti-pattern a evitar:** Precificar comparando com concorrentes. Use o valor entregue como âncora, não o mercado.

---

### Phase 5: Guarantee (Dia 9)

**Comando:** `*guarantee-designer`
**Task:** `tasks/generative/guarantee-designer.md`

**O que criar:**
1. Identificar o maior medo do prospect (objeção central)
2. Selecionar tipo de garantia (Unconditional / Conditional / Anti-guarantee / Implied)
3. Calcular risco financeiro vs impacto na conversão
4. Formular texto com prazo + condição + o que recebe de volta

**Gate de saída:**
- [ ] Garantia elimina o maior medo do prospect especificamente
- [ ] Risco financeiro calculado e dentro de limites aceitáveis (reembolso projetado < 10%)
- [ ] Texto tem prazo + condição + consequência
- [ ] Causa leve desconforto ao oferecer (senão, não é forte o suficiente)

---

### Phase 6: Offer Gate (Dia 10)

**Checklist:** `checklists/offer-gate.md`

**O que validar:**
- Executar checklist completo item por item
- Qualquer ❌ = HOLD — corrigir antes de lançar
- Sem exceção: 100% ✅ para GO

**Gate de saída:**
- [ ] 100% dos itens do offer-gate.md aprovados
- [ ] Offer Gate assinado por @alex-hormozi

---

### Phase 7: Validation (Dia 11-14)

**Comando:** `*lead-machine`

**O que fazer:**
1. Validar a GSO com warm outreach (rede existente) — mínimo 20 conversas
2. Meta de conversão: ≥ 20% (4 de 20 conversas = GO)
3. Coletar feedback de prospects que disseram não — identificar objeção residual
4. Ajustar garantia ou componente de oferta se necessário

**Gate de saída:**
- [ ] Mínimo 3 vendas confirmadas via warm outreach
- [ ] Conversão ≥ 20%
- [ ] Nenhuma objeção sistêmica não resolvida

**ATENÇÃO:** Não escale para paid ads antes deste gate. Warm outreach é o teste mais barato e rápido da oferta.

---

## Critérios de Sucesso

| Métrica | Kill | OK | Scale |
|---------|------|----|-------|
| Value Equation score | < 5 | 5–15 | ≥ 15 |
| Conversão de vendas | < 5% | 20%–50% | > 50% |
| CAC:LTV ratio | < 1:3 | 1:3 a 1:5 | > 1:5 |
| Explicação em 1 frase | Não | Parcial | Sim |
| Reembolso rate | > 10% | 3%–10% | < 3% |

---

## Regras de Bloqueio

1. **Mercado score < 12** → Pivotar mercado antes de construir qualquer oferta
2. **Churn > 5%** → Executar *retention-4rs antes de lançar nova oferta
3. **Sem prova (0 cases)** → Recrutar 3-5 clientes beta antes de lançamento público
4. **Offer Gate com qualquer ❌** → Corrigir antes de lançar, sem exceção

---

## Anti-patterns Monitorados Durante o Playbook

- Pular Business Discovery → invalida todas as recomendações subsequentes
- Construir oferta antes de validar mercado → oferta perfeita para mercado errado
- Precificar pela concorrência → race to the bottom garantido
- Lançar sem garantia forte → conversão abaixo do potencial
- Escalar antes de 3 vendas validadas → amplificar problema em vez de crescimento

---

*Playbook Grand Slam Offer — @alex-hormozi | Synkra AIOS*
*Baseado em: $100M Offers — Alex Hormozi*
