# Task: Funnel Audit

> **Owner:** @russell-brunson
> **Frameworks:** DotCom Secrets — Funil por Etapas, Traffic Secrets — Temperatura de Tráfego
> **Inputs:** métricas atuais do funil por etapa, fonte de tráfego, produto e ticket

## Quando Executar

Quando um funil existente não está performando nos thresholds esperados ou antes de escalar tráfego. Executar antes de aumentar budget ou testar nova copy. Identifica o gargalo mais crítico para priorizar a correção.

## Algoritmo

### Etapa 1: Coleta de Métricas por Fase do Funil

Para cada etapa, coletar os dados dos últimos 30 dias (mínimo 200 visitas para validade estatística):

**Topo de Funil (Aquisição)**
- Volume de visitantes únicos (por fonte)
- Opt-in rate (visitantes / leads)
- CPL — Custo por Lead (por fonte)
- Temperatura do tráfego (cold / warm / hot)

**Meio de Funil (Engajamento)**
- Taxa de abertura de email (sequência pós opt-in)
- Taxa de clique (email → página de vendas)
- Show-up rate (se webinar: registrados / presentes)
- Engajamento no conteúdo (tempo na página, visualizações do VSL)

**Fundo de Funil (Conversão)**
- Taxa de conversão (visitantes PV / compradores)
- Ticket médio (se múltiplos produtos)
- OTO uptake (compradores core / aceitantes OTO)
- Refund rate (30 dias pós compra)

### Etapa 2: Diagnóstico por Comparação com Thresholds

Comparar cada métrica com os thresholds de referência e classificar:
- Verde: dentro ou acima do threshold
- Amarelo: 50-80% do threshold
- Vermelho: abaixo de 50% do threshold

**Thresholds de referência:**

| Etapa | Métrica | Cold Traffic | Warm Traffic |
|-------|---------|-------------|-------------|
| Opt-in | Rate | ≥ 25% | ≥ 40% |
| Email | Abertura Day 1 | ≥ 25% | ≥ 35% |
| Email | Clique | ≥ 3% | ≥ 8% |
| Webinar | Show-up | ≥ 20% | ≥ 35% |
| Webinar | Close | ≥ 5% | ≥ 10% |
| VSL | Conversão | ≥ 1% | ≥ 3% |
| OTO | Uptake | ≥ 10% | ≥ 20% |

### Etapa 3: Identificação do Gargalo Primário

Regra de prioridade: sempre corrigir o gargalo mais próximo do topo antes de otimizar conversão no fundo.

Árvore de diagnóstico:

```
Opt-in < 25%?
  → Problema: Headline da squeeze page ou bait (lead magnet não relevante)
  → Ação: A/B test 3 headlines novas + revisar relevância do lead magnet

Opt-in OK, email abertura < 25%?
  → Problema: Assunto de email (subject line) ou entregabilidade
  → Ação: Revisar subject lines dos Day 1-3 + verificar SPF/DKIM

Email abertura OK, show-up webinar < 20%?
  → Problema: Sequência de email pré-webinar (lembretes e antecipação)
  → Ação: Adicionar sequência de 3 lembretes + SMS se disponível

Show-up OK, close webinar < 5%?
  → Problema: Big Domino fraco OU Stack Slide insuficiente
  → Ação: Executar *belief-audit + *offer-stack-builder

OTO uptake < 10%?
  → Problema: OTO não complementa o core OU preço muito alto em relação ao core
  → Ação: Revisar relevância da OTO + testar preço 50% menor
```

### Etapa 4: Priorizar Ação Corretiva

Para o gargalo identificado, definir:
1. Hipótese de causa (em 1 frase)
2. Ação de teste (específica, com variável única modificada)
3. Volume mínimo para validação (≥ 100 visitas / ≥ 50 leads conforme etapa)
4. Critério de sucesso (threshold que confirma correção)
5. Prazo de avaliação (mínimo 7 dias após atingir volume)

### Etapa 5: Relatório de Auditoria

Estrutura do output:

```
FUNIL AUDITADO: [nome]
PERÍODO: [datas]
FONTE DE TRÁFEGO: [canal] | TEMPERATURA: [cold/warm]

DIAGNÓSTICO POR ETAPA:
- Topo: [Verde/Amarelo/Vermelho] — opt-in [X%] vs threshold [Y%]
- Meio: [Verde/Amarelo/Vermelho] — [métrica] [X%] vs threshold [Y%]
- Fundo: [Verde/Amarelo/Vermelho] — conversão [X%] vs threshold [Y%]

GARGALO PRIMÁRIO: [etapa]
HIPÓTESE: [causa em 1 frase]
AÇÃO: [teste específico]
CRITÉRIO DE SUCESSO: [threshold atingido]
PRAZO: [data de avaliação]
```

## Output

- Relatório de auditoria completo (formato acima)
- Priorização de ações (máximo 3 — mais que isso dispersa foco)
- Kill/Scale decision: se conversão < 50% dos thresholds após 500 visitas → parar e reconstruir antes de escalar

## Thresholds

| Kill Switch | Condição |
|------------|---------|
| Parar tráfego | Opt-in < 15% após 200 visitas |
| Não escalar | Conversão < 0.5% após 500 visitas |
| Revisão urgente | OTO uptake < 5% após 100 compradores |
