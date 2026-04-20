# Brian Moncada — 10 Frameworks (21% do squad)

> **Owner agents:** @midas, @dash, @molly-pittman
> **Source:** Andromeda Method + Audience Saturation + Broad Testing + Daily Floor discipline
> **Aplicabilidade:** Principalmente Meta Ads; Metric Thresholds e Geo-LTV são cross-platform.

---

## 1. Andromeda Method (Audience Strategy)

**Categoria:** Audience / Strategic
**Quando usar:** Definir estratégia de audiência em toda conta nova OU expansão em conta madura.

### Estrutura de 3 camadas
```
LAYER 1 — BROAD       (sem targeting, só geo + idade)  → Discovery
LAYER 2 — INTEREST    (3-5 interests stack)            → Validation
LAYER 3 — LOOKALIKE   (LAL 1-5% Purchasers/AddToCart)  → Scale
```

### Algoritmo (ordem obrigatória)
1. **Começar por BROAD** se pixel tem ≥ 50 PC/semana. Se não tem, pular para Interest Stacking primeiro e voltar para BROAD quando atingir.
2. **Validar BROAD** com criativo forte (Hook Rate ≥ 25%, ROAS ≥ 1.5) por 5-7 dias.
3. **Se BROAD validou** → adicionar Interest Stacking em paralelo (validation).
4. **Com Interest + Broad ambos rodando** → criar LAL (scale).
5. **LAL quebrado (ROAS < 1.5)** → voltar para Interest até acumular mais PC events.

### Thresholds
| Camada | Mínimo para validar | Mínimo para avançar |
|--------|---------------------|---------------------|
| Broad | ROAS ≥ 1.5, 50+ conv | ROAS ≥ 2.0, 100+ conv |
| Interest | ROAS ≥ 2.0, 30+ conv | ROAS ≥ 2.5, 60+ conv |
| LAL | ROAS ≥ 2.5, 30+ conv | ROAS ≥ 3.0 → scale S1/S3 |

### Exemplo numérico (e-com R$180 AOV)
- Semana 1: Broad 25-55 BR, R$150/dia. ROAS 1.8, 45 conv → validação borderline, iterar criativo.
- Semana 2: Broad mantém, Hook Rate+8% → ROAS 2.2, 70 conv ✅. Lançar Interest Stack ("ecom fashion BR").
- Semana 3: Interest ROAS 2.6, 40 conv ✅. Lançar LAL 1-5% Purchasers.
- Semana 4: LAL ROAS 2.9, 50 conv ✅. Acumulado → dividir budget 40/30/30 (LAL/Broad/Interest).

### Anti-padrões
- ❌ Começar por LAL quando pixel tem < 200 PC lifetime → LAL mal formada.
- ❌ Escalar LAL antes de saturar Interest ou Broad → perde hedge.
- ❌ Rodar 3 camadas simultâneas com budget dividido igualmente → cada uma com volume insuficiente para aprender.
- ❌ Trocar camadas a cada 3 dias sem dados consolidados.

### Conecta com
- `tasks/optimization/audience-expansion.md`
- Haynes #12 (Lookalike Stacking), Haynes #13 (Interest Stacking), Haynes #14 (Broad Audience Test)
- Agentes: @dash, @molly-pittman, @depesh-mandalia

---

## 2. Metric Thresholds (Brian's specific bands)

**Categoria:** Diagnostic
**Quando usar:** Todo *diagnose e health check.

### Tabela mestre
| Métrica | 💀 Alarm | ⚠️ Watch | ✅ Healthy | 🚀 Scale |
|---------|---------|---------|-----------|---------|
| ROAS (D2C e-com) | < 1.0 | 1.0-1.8 | 1.8-2.5 | > 2.5 |
| ROAS (Info) | < 1.5 | 1.5-2.5 | 2.5-3.5 | > 3.5 |
| ROAS (Lead gen — high-ticket) | < 2.0 | 2.0-3.0 | 3.0-5.0 | > 5.0 |
| CPM (BR) | > R$80 | R$50-80 | R$25-50 | < R$25 |
| CPM (US) | > $60 | $40-60 | $20-40 | < $20 |
| CPC | > R$3 | R$1.5-3 | R$0.50-1.50 | < R$0.50 |
| CPA (relativo AOV) | > 1.5× AOV | 1-1.5× AOV | 0.5-1× AOV | < 0.5× AOV |
| Hook Rate | < 15% | 15-25% | 25-35% | > 35% |
| Hold Rate (25%) | < 20% | 20-35% | 35-50% | > 50% |

### Janela de confiança
- **Mínimo:** 1.000 impressões OU 20 conversões (o que vier primeiro) antes de interpretar.
- **Estável:** 3 dias consecutivos no mesmo band.
- **Tendência:** subiu de band nos últimos 5 dias → sinal de melhora; desceu → sinal de queda.

### Algoritmo de diagnóstico
1. Capturar snapshot de métricas atuais.
2. Classificar cada métrica em band.
3. Se **qualquer métrica em Alarm** → dispatch @dash *diagnose (raiz causa).
4. Se **maioria em Watch** → refresh creative + expand audience.
5. Se **maioria em Healthy/Scale** → aplicar S1-S3.

### Exemplo numérico
- Adset conta info-BR: ROAS 1.8, CPM R$72, CPC R$2.10, CPA 1.2× AOV, Hook Rate 22%.
- Classificação: ROAS Watch, CPM Watch, CPC Watch, CPA Watch, Hook Rate Watch.
- Veredito: 5/5 em Watch → refresh creative + expand audience (K5 preventivo).

### Anti-padrões
- ❌ Usar bands D2C para info-product → ROAS esperado diferente.
- ❌ Comparar CPM BR vs US → mercados tem preços diferentes.
- ❌ Agir em alarm com < 1.000 imp.

### Conecta com
- `data/thresholds.md`, `tasks/diagnostic/metric-diagnosis.md`
- Agentes: @dash

---

## 3. Audience Saturation Detection

**Categoria:** Diagnostic / Audience
**Quando usar:** Toda auditoria semanal OU sempre que Frequency > 3.

### 5 sinais (4+ confirmam saturação)
1. **Frequency > 4** em 7 dias
2. **CPM subindo > 30%** em 7 dias
3. **CTR caindo > 30%** em 7 dias
4. **ROAS caindo > 25%** em 7 dias
5. **Conversion rate caindo > 20%** em 7 dias

### Algoritmo
1. Rodar relatório dos últimos 14 dias, comparar últimos 7 vs 7 anteriores.
2. Calcular variação percentual de cada sinal.
3. Contar sinais disparados.
4. ≥ 4 sinais → saturação confirmada → K5 + Andromeda expansion OR rotação.

### Ações pós-saturação
| Contexto | Ação |
|----------|------|
| Audience size < 1M | Rotacionar criativo (não é saturação real, é fadiga criativa) |
| Audience size 1M-10M | Expand LAL (1% → 3% → 5%) OU Interest Stack novo |
| Audience size > 10M | Testar Broad + novo criativo; saturação é real e difícil |

### Exemplo numérico
- Adset "LAL1-Purchaser": Frequency 4.3 ✅, CPM R$48→R$63 (+31%) ✅, CTR 1.8%→1.2% (-33%) ✅, ROAS 3.1→2.2 (-29%) ✅, Conv rate 2.4%→2.0% (-17%) ❌.
- 4/5 sinais → saturação. Ação: expandir para LAL 1-5% stack.

### Anti-padrões
- ❌ Pausar adset com Frequency 4 quando só 1-2 sinais estão presentes → pode ser variação normal.
- ❌ Expandir sem rotação de criativo → audiência nova vê mesmo ad fatigado, parece saturação imediata.

### Conecta com
- Haynes #4 (K5 Kill Rule), Haynes #9 (Creative Refresh), Moncada #1 (Andromeda)
- Agentes: @dash, @nova

---

## 4. Broad Testing Methodology

**Categoria:** Audience / Testing
**Quando usar:** Conta com ≥ 50 PC/semana, oferta nova a validar, ou escala em conta madura.

### Setup
```
Audience: 1 país + idade range (ex: 25-55), gênero total
Placements: Auto
Bidding: Lowest cost (CBO OR ABO)
Creatives: 5-10 distintos (mix de categorias)
Budget: 3-5× AOV/dia mínimo
Duração: 3-7 dias
```

### Decisão
| ROAS 7d | Conversões | Decisão |
|---------|------------|---------|
| ≥ 2.5 | 50+ | **SCALE** → S1 ou expandir |
| 1.5-2.5 | 30+ | **ITERATE creatives** (manter audiência) |
| 1.0-1.5 | 20+ | **ITERATE oferta** (mensagem + offer) |
| < 1.0 | qualquer | **KILL** ou rever oferta fundamentalmente |

### Por que Broad ao invés de targeting detalhado?
- Meta algoritmo pós-2023 ganhou eficiência em descobrir targeting com sinal de pixel.
- Broad dá escala máxima (audiência 10M+).
- Custo por impressão geralmente 15-25% menor.

### Exemplo
- E-com brasileira R$220 AOV, budget R$1.200/dia broad (5× AOV).
- Dia 5: ROAS 2.7, 72 conv → **SCALE** (S1 +20% → R$1.440/dia).
- Dia 12: ROAS 2.4, Freq 2.8 — abaixar prioridade de broad, diversificar com LAL.

### Anti-padrões
- ❌ Broad com budget baixo (< 2× AOV) → algoritmo não acha volume para aprender.
- ❌ Broad + criativo fraco → KILL em 3d, mas erro foi no criativo, não no Broad.
- ❌ Misturar interesses em "broad" → é Interest Stacking, não Broad de fato.

### Conecta com
- Moncada #1 (Andromeda Layer 1), Haynes #14 (Broad Audience Test)
- Agentes: @dash, @depesh-mandalia

---

## 5. Cross-Sell Sequencing

**Categoria:** Retention / LTV
**Quando usar:** Após conquistar base de Purchaser ≥ 300.

### Regra
Seguir compra do cliente com sequência automatizada de ofertas complementares em D+7, D+14, D+30.

### Algoritmo
1. Custom Audience: Purchasers últimos 30d (roll).
2. Criar 3 ad sets retargeting, cada um com janela distinta:
   - **D+7**: oferta complementar premium (40-80% AOV original).
   - **D+14**: bundle/upsell (exclusivo post-purchase, desconto).
   - **D+30**: reativação + oferta diferente (novo produto).
3. Exclusão cruzada: Purchaser do Cross-sell não recebe o ad de novo.

### Thresholds
- **LTV atual / AOV > 1.3** → cross-sell vale a pena (cliente repete).
- **LTV / AOV < 1.1** → foco em awareness, não em cross-sell.

### Exemplo (e-com cosméticos, AOV R$220)
- D+7: creme complementar R$120 (55% AOV) — ROAS 5.4, CR 12%.
- D+14: kit 3 produtos R$480 (bundle) — ROAS 4.8.
- D+30: lançamento de novo SKU — ROAS 3.2.
- LTV incremental: +R$180/customer em 30d.

### Anti-padrões
- ❌ Oferta idêntica em D+7, D+14, D+30 → saturação de frequência.
- ❌ Ignorar exclusão Purchaser→Purchaser novo → ofertar produto X pra quem já comprou X.
- ❌ Cross-sell antes de 5d da primeira compra → cliente ainda não consumiu valor da primeira compra.

### Conecta com
- Hormozi #1 (Unit Economics / LTV), Haynes #15 (Custom Audience Pyramid)
- Agentes: @dash, @depesh-mandalia

---

## 6. Reactivation Campaign

**Categoria:** LTV / Retention
**Quando usar:** Base de clientes inativos (60-180 dias) ≥ 500.

### Regra
Audience = Purchasers 60-180d que **não compraram no D+30** (dead leg).

### Algoritmo
1. Criar Custom Audience: Purchaser 180d MINUS Purchaser 60d.
2. Criativo: "voltamos" OU "nova coleção" OU oferta única (desconto ≥ 20%).
3. Budget: 5-10% do budget de aquisição.
4. Medir CR incremental (compras que não aconteceriam sem reativação).

### Thresholds
- **CR ≥ 2%** → manter e iterar.
- **CR 1-2%** → iterar criativo/oferta.
- **CR < 1%** → pausar; base não é reativável (cliente churned pra sempre).

### Exemplo
- Base: 1.800 Purchasers 60-180d. Audience: 1.400 (após exclusão).
- Campanha 30d, R$2.400 spend, 32 compras (CR 2.3%), revenue R$7.800 → ROAS 3.25.

### Anti-padrões
- ❌ Reativar sem exclusão de ativos → canibaliza aquisição.
- ❌ Mesma oferta da aquisição → cliente inativo quer novidade.
- ❌ Reativar janela < 60d → ainda é "warm", não inativo.

### Conecta com
- Moncada #5 (Cross-Sell), Hormozi #1 (LTV)
- Agentes: @dash, @pedro-sobral (BR), @depesh-mandalia

---

## 7. Geo-LTV Mapping

**Categoria:** Audience / Segmentation
**Quando usar:** Após 3 meses de dados OU suspeita de variância regional.

### Regra
Mapear LTV médio por região. Se variance max/min > 30% → split de campaign obrigatório.

### Fórmula
```
LTV_region = AOV_region × Frequency_region × Retention_region × Margem
Variance = (LTV_max / LTV_min) - 1
Se Variance > 30% → split
```

### Algoritmo
1. Exportar Purchasers por estado/região dos últimos 180 dias.
2. Calcular AOV por região.
3. Calcular frequência de recompra por região.
4. Multiplicar por margem bruta.
5. Identificar regiões com LTV acima/abaixo da média em > 30%.
6. Criar campanhas separadas com budget proporcional ao LTV.

### Exemplo (e-com BR)
| Região | AOV | Freq (6mo) | LTV | Variance vs média |
|--------|-----|-----------|-----|-------------------|
| SP | R$240 | 2.3 | R$552 | +18% |
| RJ | R$210 | 2.0 | R$420 | -10% |
| Nordeste | R$180 | 1.6 | R$288 | -38% |
| Sul | R$220 | 2.1 | R$462 | -1% |

LTV médio R$468. NE com -38% → **split obrigatório**.

### Ações pós-mapeamento
- SP: budget 40% (LTV top, tolerância CPA maior).
- Sul + RJ: budget 35%, CPA target médio.
- NE: budget 15%, CPA target 60% do alvo geral (margem menor).
- Criativo específico por região (idioma regional BR ajuda em NE).

### Anti-padrões
- ❌ Splittar sem ter 300+ Purchasers por região → amostra insuficiente.
- ❌ Orçamento igual em todas regiões apesar de LTV diferente.
- ❌ Ignorar custos logísticos (frete por região) no cálculo de margem.

### Conecta com
- Haynes #25 (Geo Splitting), Hormozi #1 (Unit Economics)
- Agentes: @dash, @pedro-sobral

---

## 8. Creative-Audience Matrix

**Categoria:** Testing
**Quando usar:** Validar nova combinação criativo × audiência.

### Regra
Testar **1 criativo em 3 audiências** OU **3 criativos em 1 audiência**. **Nunca 3×3 simultâneo** (Constants vs Variables — Carter #1).

### Matrix
```
           Creative-A   Creative-B   Creative-C
LAL-1%        ✅           ❌           ❌
Interest      ✅           ❌           ❌
Broad         ✅           ❌           ❌

OU

           Creative-A   Creative-B   Creative-C
LAL-1%        ✅           ✅           ✅
Interest      ❌           ❌           ❌
Broad         ❌           ❌           ❌
```

### Algoritmo
1. Escolher eixo: testar criativo (audiência fixa) OU audiência (criativo fixo).
2. Rodar 5 dias com budget igual em cada célula.
3. Medir ROAS por célula.
4. Promover vencedor + iterar no outro eixo em fase 2.

### Quando usar cada eixo
- **1 criativo × N audiências** (quando tem criativo quente mas audiência pequena/saturada).
- **N criativos × 1 audiência** (quando tem audiência forte mas procura hook novo).

### Exemplo
- Fase 1: Creative "UGC-CURIOSIDADE" em 3 audiências (LAL, Interest, Broad).
  - LAL ROAS 3.1 ✅, Interest 2.4, Broad 1.8.
- Fase 2: LAL vencedora — testar 3 criativos (Creative-A "UGC", B "UGC2", C "Studio").
  - A 3.1, B 3.5, C 2.0 → B vence.
- Validação final: Creative-B em LAL.

### Anti-padrões
- ❌ 3×3 simultâneo → 9 células com budget dividido; cada uma não tem volume para conclusão.
- ❌ Trocar eixos em duas etapas < 3 dias → ruído domina.

### Conecta com
- Carter #1 (Constants vs Variables), Carter #2 (Scientific Hook Testing)
- Agentes: @nova, @dash

---

## 9. Funnel Step Optimization

**Categoria:** Optimization Event Selection
**Quando usar:** Setup de adset / troubleshooting de conversão.

### Regra
Otimizar para o **evento mais ALTO na hierarquia do pixel** (Haynes #18) com ≥ 50 conv/semana.

### Hierarquia de otimização
```
Purchase (ideal)       → se ≥ 50/semana
InitiateCheckout      → se PC < 50/semana
AddToCart             → se IC < 50/semana
ViewContent           → se ATC < 50/semana (raro)
```

### Algoritmo
1. Verificar contagem semanal de cada evento no pixel.
2. Escolher o mais alto com ≥ 50 conv/semana.
3. Se Purchase < 50/semana → otimizar IC e aceitar volume maior com qualidade menor.
4. Cada 4 semanas, revisitar — se Purchase subiu > 50/semana → migrar adset para otimizar PC.

### Trade-offs
| Evento | Volume | Qualidade | Quando usar |
|--------|--------|-----------|-------------|
| Purchase | Baixo | Máxima | Conta madura (> 200 PC/mês) |
| InitiateCheckout | Médio | Alta | Conta em crescimento |
| AddToCart | Alto | Média | Conta nova / baixo volume |
| ViewContent | Muito alto | Baixa | Bootstrapping (não recomendado) |

### Exemplo
- Conta nova: 18 PC/semana, 85 IC/semana.
- Otimizar IC (tem volume). Após 3 meses: PC subiu para 70/semana → migrar para PC.

### Anti-padrões
- ❌ Otimizar Purchase com < 50 conv/semana → algoritmo não sai do learning.
- ❌ Otimizar ViewContent achando que "mais volume = melhor" → qualidade despenca.

### Conecta com
- Haynes #18 (Pixel Hierarchy)
- Agentes: @dash, @track

---

## 10. Daily Budget Floor

**Categoria:** Budget / Structural
**Quando usar:** Setup de todo adset.

### Regra
**Nunca < R$50/dia por ad set ativo** (algoritmo precisa volume mínimo de leilões diários).

### Por quê
- Meta algoritmo precisa aproximadamente 20-30 leilões para "aprender" por dia.
- CPM médio BR R$30 → R$50 = ~1.700 impressões = ~20 leilões competitivos = mínimo viável.
- Abaixo de R$50/dia, adset não sai de learning phase.

### Exceções (pode ir abaixo)
- **Retargeting hot** (7d) com audiência muito pequena (< 5k) → R$30/dia ok.
- **Test muito específico** por 3 dias com micro-audiência (< 50k) → R$40/dia ok.

### Algoritmo
1. Calcular número de adsets ativos.
2. Daily budget total ≥ 50 × N (adsets).
3. Se budget total < 50×N → consolidar adsets (menos e mais concentrados).

### Exemplo
- Conta com budget R$400/dia.
- Errado: 10 adsets × R$40 → cada um sub-ótimo, nenhum sai de learning.
- Certo: 6 adsets × R$67 → todos acima do floor, decisões claras.

### Anti-padrões
- ❌ Spread budget thin → learning phase eterno.
- ❌ R$30/dia com audiência 5M+ → Meta custa mais para achar 1 conversão.
- ❌ Pausar adset por ROAS baixo mas ele nem saiu de learning → decisão prematura.

### Conecta com
- Haynes #11 (Testing Pyramid 80/20), Haynes #23 (Spending Limit)
- Agentes: @dash, @midas

---

## Resumo Operacional

### Frameworks por agente
- **@dash**: 2, 3, 4, 5, 6, 7, 8, 9, 10
- **@nova**: 3 (saturation drives refresh), 8
- **@molly-pittman**: 1 (Andromeda é base), 4 (broad testing)
- **@pedro-sobral**: 6 (reativação BR), 7 (geo-LTV BR)
- **@depesh-mandalia**: 4 (broad), 5 (cross-sell e-com)

### Cadência de aplicação
- **Diária:** #2 (metric check no campaign-monitor)
- **Semanal:** #3 (saturation detection), #8 (creative-audience matrix iteração), #10 (budget floor audit)
- **Mensal:** #7 (geo-LTV review), #9 (event selection check)
- **Trimestral:** #5, #6 (LTV sequences review)

---

**Referência:** Use estes frameworks via `*audience-expansion`, `*metric-diagnosis`, `*budget`, `*attribution`.
