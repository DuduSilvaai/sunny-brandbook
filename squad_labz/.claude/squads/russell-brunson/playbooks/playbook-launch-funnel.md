# Playbook: Launch Funnel

> **Agente:** @russell-brunson
> **Duração estimada:** 2-4 semanas
> **Comando:** `*playbook launch-funnel`
> **Quando usar:** Lançar um funil do zero — desde a estratégia até o primeiro tráfego pago

---

## Visão Geral

Este playbook orquestra o processo completo de lançamento de um funil, cobrindo estratégia, oferta, copy, tráfego e gate de qualidade antes de lançar. Cada fase tem gate obrigatório — não avançar sem aprovação do gate anterior.

---

## Fases

### Phase 0: Business Discovery (Dia 1)

**Objetivo:** Capturar o contexto completo do negócio antes de qualquer decisão de funil.

**Executar:**
- `*business-discovery` — coleta estruturada de produto, ticket, avatar e meta

**Perguntas obrigatórias a responder:**
1. Qual é o produto / serviço a ser vendido?
2. Qual é o ticket (ou faixa de ticket)?
3. Quem é o avatar (descrição inicial)?
4. Qual é a meta de receita em 90 dias?
5. Qual é o budget de tráfego disponível?
6. Existem funis anteriores? Quais métricas geraram?

**Gate Phase 0:**
- [ ] Produto definido com clareza
- [ ] Ticket confirmado
- [ ] Avatar descrito (mesmo que preliminar)
- [ ] Meta numérica definida
- [ ] Budget de tráfego confirmado

---

### Phase 1: Funil Design (Dia 2-3)

**Objetivo:** Selecionar o tipo de funil ideal e projetar a Value Ladder.

**Executar:**
1. `*funnel-selector` — escolher tipo baseado em ticket e modelo de negócio
2. `*value-ladder` — projetar os 4 níveis da Value Ladder e sequência de ascensão

**Decisões a tomar:**
- Tipo de funil (com justificativa baseada no ticket e avatar)
- Páginas necessárias (lista completa)
- Sequência de OTO/downsell
- Nível atual na Value Ladder + próximos passos

**Gate Phase 1:**
- [ ] Tipo de funil selecionado e justificado
- [ ] Value Ladder com 4 níveis esboçados
- [ ] Sequência de OTO definida
- [ ] Páginas necessárias listadas

---

### Phase 2: Oferta (Dia 4-5)

**Objetivo:** Construir o Stack Slide e validar a oferta antes de criar copy.

**Executar:**
1. `*belief-audit` — mapear as 3 crenças falsas do avatar
2. `*offer-stack` — montar Stack Slide com bônus que quebram objeções

**Entregáveis:**
- Stack Slide com ≥ 5 itens (core + ≥ 4 bônus)
- Valor percebido total ≥ 10x o preço cobrado
- Garantia definida (tipo + prazo)
- Urgência real documentada (razão legítima)

**Gate Phase 2:**
- [ ] Stack com ≥ 5 itens
- [ ] Total ≥ 10x o preço
- [ ] As 3 crenças falsas mapeadas
- [ ] Cada crença coberta por história ou bônus
- [ ] Garantia configurada (mínimo 30 dias)

---

### Phase 3: Story & Copy (Dia 6-8)

**Objetivo:** Criar a copy completa do funil — história, headline, hook e sequência de email.

**Executar (em ordem):**
1. `*epiphany-bridge-story` — construir a história central do funil
2. `*headline` — gerar e testar ≥ 3 variações de headline para squeeze e PV
3. `*hook-story-offer` — criar ≥ 3 variações de anúncio para tráfego

**Regras de copy:**
- Headline usa vocabulário do avatar (Dimensão 7 do avatar)
- Origin Story completa (6 beats)
- Big Domino explicitado na copy da página de vendas
- CTA único e claro por página

**Gate Phase 3:**
- [ ] Headline com ≥ 3 variações criadas
- [ ] Origin Story / Epiphany Bridge completa (6 beats)
- [ ] Big Domino identificado e usado na copy
- [ ] Hook-Story-Offer: ≥ 3 variações para anúncios
- [ ] CTA único por página
- [ ] Copy Gate checklist aprovado (ver `checklists/copy-gate.md`)

---

### Phase 4: Tráfego (Dia 9-12)

**Objetivo:** Definir estratégia de tráfego, segmentação e plano de publicação.

**Executar:**
1. `*dream-customer-avatar` — finalizar avatar completo (se não estava completo)
2. `*dream-100` — mapear 100 fontes de tráfego onde o avatar está
3. `*traffic-temp` — definir mensagem por temperatura (cold / warm / hot)

**Entregáveis:**
- Lista de ≥ 3 canais de tráfego principais
- Segmentação definida por canal
- Mensagem adaptada por temperatura
- Orçamento por canal
- Thresholds de kill/scale por canal

**Gate Phase 4:**
- [ ] ≥ 3 canais de tráfego definidos
- [ ] Mensagem por temperatura criada
- [ ] Thresholds de kill definidos antes do lançamento
- [ ] Budget alocado por canal

---

### Phase 5: Pre-Launch Gate (Dia 13)

**Objetivo:** Verificação completa antes de ligar o tráfego.

**Executar:**
- Checklist completo: `checklists/pre-launch-gate.md`

**Regra:** 100% dos itens aprovados = GO. Qualquer item reprovado = HOLD até correção.

**Gate Phase 5:**
- [ ] Checklist `pre-launch-gate.md` 100% aprovado
- [ ] Funil testado end-to-end manualmente
- [ ] Email de confirmação recebido no teste
- [ ] Página de obrigado funcionando
- [ ] OTO funcionando

---

### Phase 6: Launch & Monitor (Dia 14+)

**Objetivo:** Lançar tráfego e monitorar métricas nas primeiras 48h.

**Protocolo de lançamento:**
1. Ligar tráfego com 20% do budget total no Dia 14
2. Monitorar opt-in rate a cada 50 visitas
3. Decisão de kill/scale no Dia 16 (após 200 visitas mínimas)
4. Scale para 100% do budget somente após validação dos thresholds

**Kill switch (parar imediatamente):**
- Opt-in < 15% após 200 visitas → parar tráfego, revisar headline/bait
- Conversão < 0.5% após 500 visitas → parar tráfego, revisar oferta/copy
- Erro técnico em qualquer etapa do funil → pausar até resolver

---

## Critérios de Sucesso do Playbook

| Métrica | Cold Traffic | Warm Traffic |
|---------|-------------|-------------|
| Opt-in rate | ≥ 25% | ≥ 40% |
| Conversão (PV) | ≥ 1% | ≥ 3% |
| OTO uptake | ≥ 10% | ≥ 20% |
| ROI em 30 dias | ≥ 1x (break even) | ≥ 3x |

---

## Arquivos Produzidos por este Playbook

- `business-context.md` — contexto completo do negócio
- `funnel-blueprint.md` — funil escolhido + Value Ladder
- `offer-stack.md` — Stack Slide completo
- `origin-story.md` — Epiphany Bridge do expert
- `copy-package.md` — headlines + copy de páginas + sequência de email
- `traffic-plan.md` — canais, segmentação e budget
