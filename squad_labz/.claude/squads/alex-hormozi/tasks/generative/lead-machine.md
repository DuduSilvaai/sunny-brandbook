# Task: Lead Machine

> **Owner:** @alex-hormozi
> **Frameworks:** $100M Leads — 4 Core Lead Sources, More.Better.Different., CAC por Fonte
> **Inputs:** Fontes de lead atuais, volume de leads/mês por fonte, CAC atual, ticket médio, meta de leads/mês

## Quando Executar

- Quando o pipeline está vazio (menos de 20 leads qualificados/mês)
- Antes de investir em qualquer canal novo de aquisição
- Após fixar oferta e churn — nunca antes
- Gate da Phase 0 do Playbook Lead Machine

## Definição

O sistema de leads não é um canal. É uma máquina com 4 fontes que se alimentam mutuamente. O erro mais caro em aquisição é escalar um canal novo antes de dominar os existentes. A ordem importa: sempre More antes de Different.

## Algoritmo

### Step 1 — Auditar Fontes de Lead Atuais

Mapear performance atual por fonte:

| Fonte | Leads/mês | CAC atual | Taxa de conversão | Status |
|-------|-----------|-----------|-------------------|--------|
| Warm Outreach | | | | |
| Content (inbound) | | | | |
| Cold Outreach | | | | |
| Paid Ads | | | | |

Se uma fonte tem CAC < LTV/3 e está operando, ela é candidata a MAIS antes de qualquer nova fonte.

### Step 2 — Entender as 4 Fontes de Leads de Hormozi

**Fonte 1 — Warm Outreach (Rede Existente)**
- O que é: Contato direto com pessoas que já te conhecem (WhatsApp, Instagram DM, email pessoal, LinkedIn)
- Por que primeiro: CAC mais baixo possível, feedback imediato, conversão mais alta
- Algoritmo de execução:
  1. Listar todos os contatos que conhecem você pessoalmente (mínimo 100)
  2. Segmentar quem pode ser prospect ou pode indicar um prospect
  3. Enviar mensagem personalizada (não broadcast, não copy genérico)
  4. Meta: 5-10 conversas por dia, 30 dias consecutivos
- Threshold de sucesso: 1 cliente fechado a cada 20 conversas (5%)

**Fonte 2 — Content (Conteúdo Orgânico)**
- O que é: Conteúdo que atrai prospects inbound passivamente
- Por que segundo: Constrói ativo de longo prazo, leads mais qualificados (já te conhecem antes de comprar)
- Algoritmo de execução:
  1. Escolher 1 plataforma (onde o avatar se concentra — não diversificar no início)
  2. Definir cadência mínima: 5 posts/semana por 90 dias sem parar
  3. Formato: 80% educação (value), 20% oferta (CTA)
  4. Meta: 3-5 leads inbound/mês nos primeiros 90 dias
- Threshold de sucesso: 10+ leads/mês após 6 meses consistentes

**Fonte 3 — Cold Outreach (Prospecção Ativa)**
- O que é: Contato direto com pessoas que não te conhecem (email frio, DM frio, LinkedIn)
- Por que terceiro: Escalável mas exige oferta validada e mensagem afiada
- Algoritmo de execução:
  1. Definir lista de prospects qualificados (mínimo 500 contatos)
  2. Mensagem hiperpersonalizada (não template genérico)
  3. Sequência de follow-up: 5-7 touchpoints em 14 dias
  4. Meta: 1 reunião a cada 50 contatos (2%)
- Threshold de sucesso: CAC via cold ≤ LTV/3

**Fonte 4 — Paid Ads (Tráfego Pago)**
- O que é: Anúncios pagos (Meta, Google, YouTube, LinkedIn) para escalar o que já funciona
- Por que quarto: Amplifica o que funciona — se o orgânico não funciona, o pago também não vai funcionar
- Algoritmo de execução:
  1. Identificar o conteúdo orgânico com mais engajamento (já provou funcionar)
  2. Transformar em ad (mesmo gancho, mesmo ângulo)
  3. Budget inicial mínimo: 10% do ticket médio por dia de teste
  4. Meta: ROAS ≥ 3:1 antes de escalar

### Step 3 — Maximizar a Fonte Que Já Funciona (More)

Antes de adicionar nova fonte, verificar:
- A fonte atual está operando no máximo volume possível?
- O volume foi sustentado por ao menos 30 dias consecutivos?
- A mensagem foi otimizada (ao menos 3 variações testadas)?

Se não: aplicar MAIS na fonte atual antes de adicionar qualquer nova.

### Step 4 — Adicionar Segunda Fonte Complementar

Sequência recomendada por estágio:

| Estágio do Negócio | Fonte 1 | Fonte 2 |
|-------------------|---------|---------|
| 0 a 3 clientes | Warm Outreach | Warm Outreach (mais volume) |
| 3 a 30 clientes | Warm Outreach | Content |
| 30 a 100 clientes | Content | Cold Outreach |
| 100+ clientes | Cold Outreach | Paid Ads |

### Step 5 — Definir Meta por Fonte e CAC Target

Para cada fonte ativa:
- Meta de leads/mês
- CAC target (máximo = LTV/3)
- Métrica de monitoramento semanal
- Critério de corte (quando abandonar a fonte ou reduzir investimento)

## Output

```markdown
## Lead Machine — Resultado

### Auditoria Atual

| Fonte | Status Atual | Volume | CAC | Diagnóstico |
|-------|-------------|--------|-----|-------------|
| Warm Outreach | [Ativo/Inativo] | [X/mês] | [R$] | [análise] |
| Content | [Ativo/Inativo] | [X/mês] | [R$] | [análise] |
| Cold Outreach | [Ativo/Inativo] | [X/mês] | [R$] | [análise] |
| Paid Ads | [Ativo/Inativo] | [X/mês] | [R$] | [análise] |

### Plano de Ação

**Prioridade 1 — [Fonte mais represada]**
- Ação: [específica]
- Volume target: [X leads/mês]
- CAC target: R$ [Y]
- Prazo de validação: [30/60/90 dias]

**Prioridade 2 — [Segunda fonte]**
- Ação: [específica]
- Volume target: [X leads/mês]
- CAC target: R$ [Y]
- Prazo de validação: [30/60/90 dias]

### Meta Consolidada

- Leads/mês total target: [X]
- CAC médio target: R$ [Y]
- LTV/CAC ratio target: [Z:1]

### Próximo Passo

[Ação específica amanhã — dono — prazo — métrica]
```

## Thresholds

| Métrica | Kill | OK | Scale |
|---------|------|----|-------|
| Leads/mês (total) | < 20 | 20–100 | > 100 |
| CAC:LTV ratio | > 1:3 | 1:3 a 1:5 | < 1:5 (CAC < LTV/5) |
| Conversão warm outreach | < 5% | 5%–20% | > 20% |
| Conversão cold outreach | < 1% | 1%–5% | > 5% |
| ROAS paid ads | < 2:1 | 2:1 a 5:1 | > 5:1 |

**Regra absoluta:** Não ative Paid Ads antes de ter ao menos 1 fonte orgânica (Warm ou Content) operando no threshold OK. Pagar para escalar algo que não funciona organicamente só queima capital.
