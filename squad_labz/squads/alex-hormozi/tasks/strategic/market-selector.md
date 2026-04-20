# Task: Market Selector

> **Owner:** @alex-hormozi
> **Frameworks:** Market Selection — Os 4 Indicadores (Starving Crowd)
> **Inputs:** Lista de mercados candidatos (mínimo 3), produto/serviço atual, ticket pretendido

## Quando Executar

- Antes de construir qualquer oferta ou investir em tráfego
- Quando o negócio está crescendo devagar e o mercado atual pode ser o gargalo
- Quando considerar expansão para novo nicho ou vertical
- Gate obrigatório da Phase 1 do Playbook Grand Slam Offer
- Quando churn > 5% — pode ser problema de mercado, não de produto

## Algoritmo

### Step 1 — Listar Mercados Candidatos
Eliciar do usuário mínimo 3 mercados candidatos. Se o usuário tiver apenas 1, gerar 2 alternativas baseadas em:
- Especificidade do avatar atual (ex: "empreendedores" → "donos de clínicas odontológicas")
- Adjacências de mercado (quem mais sofre a mesma dor?)

### Step 2 — Pontuar cada mercado nos 4 Indicadores (1-5 cada)

**Indicador 1 — Massive Pain (Dor Massiva)**
- 5: Dor urgente, financeira, ativa — o público perde dinheiro/saúde sem solução
- 3: Dor existente mas tolerável — "seria bom resolver"
- 1: Dor percebida mas não prioritária — não estão buscando ativamente

**Indicador 2 — Buying Power (Poder de Compra)**
- 5: Renda disponível alta, histórico de gastos no nicho, ticket similar vendido com frequência
- 3: Renda mediana, podem pagar mas precisam de justificativa de valor
- 1: Renda limitada, dependem de crédito ou não têm histórico de gastos no nicho

**Indicador 3 — Reachable (Alcançável)**
- 5: Avatar concentrado em plataformas específicas, associações, grupos online com alta densidade
- 3: Espalhado mas acessível via conteúdo ou paid ads com CAC razoável
- 1: Fragmentado, sem canais claros de concentração, CAC proibitivo

**Indicador 4 — Growing (Crescendo)**
- 5: Mercado em expansão acelerada, novo capital entrando, dor aumentando com tendências
- 3: Mercado estável — não crescendo mas também não encolhendo
- 1: Mercado em contração, tecnologia substituindo, dor diminuindo

### Step 3 — Calcular Score Total (máx 20)

```
Score = Pain + Buying Power + Reachable + Growing
```

### Step 4 — Análise Comparativa

- Ranking dos mercados candidatos por score
- Comparar melhor candidato vs mercado atual (se aplicável)
- Identificar onde cada mercado falhou (qual indicador mais fraco)

### Step 5 — Recomendação Final

Baseada no score e na análise comparativa:
- Score ≥ 16: **GO** — priorizar e comprometer recursos
- Score 12-15: **GO com atenção** — entrar mas monitorar o indicador mais fraco
- Score 8-11: **HOLD** — otimizar o indicador mais fraco antes de entrar
- Score < 8: **EVITAR** — mudar de mercado antes de qualquer investimento

## Output

```markdown
## Market Selector — Resultado

### Mercados Avaliados

| Mercado | Pain | Buying Power | Reachable | Growing | Total |
|---------|------|--------------|-----------|---------|-------|
| [M1]    |  /5  |     /5       |    /5     |   /5    |  /20  |
| [M2]    |  /5  |     /5       |    /5     |   /5    |  /20  |
| [M3]    |  /5  |     /5       |    /5     |   /5    |  /20  |

### Recomendação

**Mercado escolhido:** [nome]
**Score:** [X]/20 — [status: GO / GO com atenção / HOLD / EVITAR]

**Justificativa por indicador:**
- Pain: [análise]
- Buying Power: [análise]
- Reachable: [análise]
- Growing: [análise]

**Risco principal:** [indicador mais fraco + plano de mitigação]

**Próximo passo:** [comando ou ação específica]
```

## Thresholds

| Score | Status | Decisão |
|-------|--------|---------|
| ≥ 16 | Excelente | GO — priorizar e alocar recursos |
| 12–15 | Bom | GO — monitorar indicador mais fraco mensalmente |
| 8–11 | Marginal | HOLD — otimizar antes de entrar |
| < 8 | Ruim | EVITAR — pivot de mercado obrigatório |

**Regra de bloqueio:** Se 2 ou mais indicadores score ≤ 2, o mercado é inviável independente do total.

**Anti-pattern detectado:** "Niche Slapping" — mudar de mercado sem atingir ao menos 6 meses de comprometimento no anterior. Se isso ocorrer, sinalizar ao usuário antes de executar nova análise.
