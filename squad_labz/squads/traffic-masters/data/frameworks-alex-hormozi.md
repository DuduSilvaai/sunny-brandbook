# Alex Hormozi — 5 Frameworks (11% do squad)

> **Owner agents:** @midas, @dash
> **Source:** $100M Offers + $100M Leads + Unit Economics doctrine
> **Aplicabilidade:** Cross-platform — Meta, Google, YouTube, TikTok.

---

## 1. Unit Economics (LTV/CAC)

**Categoria:** Strategic / Financial
**Quando usar:** Antes de qualquer decisão de budget, scaling ou funnel selection. Gate obrigatório em Phase 1 do *playbook-new-campaign-launch*.

### Lei dos 3:1
LTV deve ser ≥ 3× CAC. Abaixo disso, o negócio sangra.

### Fórmulas
```
CAC = (Spend Total + Custos de Vendas) / Novos Clientes

LTV = AOV × Purchase Frequency × Retention Months × Margem Bruta

LTV/CAC = mínimo 3 / ideal 5+

Payback Period = CAC / (Avg Monthly Revenue per Customer × Margem)
              = ideal < 6 meses; aceitável < 12 meses
```

### Bands de decisão
| LTV/CAC | Veredito | Ação |
|---------|----------|------|
| < 1 | Insustentável | **PAUSE campanhas, rever oferta** |
| 1-3 | Sangue lento | Reduzir spend, melhorar oferta antes de escalar |
| 3-5 | Saudável | Manter e escalar moderado |
| 5-10 | Excelente | Scale agressivo (S2) |
| > 10 | Sub-spending | **Aumentar spend** — você está deixando dinheiro na mesa |

### Exemplo numérico 1 — e-com cosméticos BR
- Spend: R$45.000/mês, custos de vendas R$3.500 → total R$48.500.
- Novos clientes: 310.
- **CAC = R$156,45**
- AOV R$240, frequência 2.1× em 6 meses, retenção 6m, margem 52%.
- **LTV = 240 × 2.1 × 6 × 0.52 = R$1.572** (em 6 meses).
- **LTV/CAC = 1.572 / 156 = 10.0** → Excelente, aumentar spend.

### Exemplo numérico 2 — curso online R$997
- Spend R$28.000/mês, custos (checkout/gateway) R$2.100 → R$30.100.
- Novos alunos: 42.
- **CAC = R$717**
- AOV R$997, frequência 1.1× (poucos rebuys), margem 88%.
- **LTV = 997 × 1.1 × ∞ × 0.88 ≈ R$965**
- **LTV/CAC = 965 / 717 = 1.34** → **Sangue lento. Rever oferta ou reduzir CAC** (pipeline orgânico + email).

### Exemplo numérico 3 — SaaS B2B R$299/mês
- Spend R$50.000/mês, custos de onboarding R$3k → R$53k.
- Novos clientes: 65.
- **CAC = R$815**
- ARPU R$299/mês, retenção 14 meses (churn 7%/mês), margem 78%.
- **LTV = 299 × 14 × 0.78 = R$3.265**
- **LTV/CAC = 3.265 / 815 = 4.0** → Saudável, escalar moderado.
- Payback: R$815 / (R$299 × 0.78) = **3.5 meses** ✅.

### Anti-padrões
- ❌ Usar LTV teórica (cenário melhor) para justificar CAC alto → realidade sempre é pior.
- ❌ Ignorar Payback Period em conta com fluxo de caixa apertado → ROI positivo mas quebra a empresa.
- ❌ Calcular LTV com retenção de 24m se conta tem só 3m de dados → extrapolação.
- ❌ Escalar com LTV/CAC = 2 esperando que "melhore com escala" → não melhora sozinho.

### Conecta com
- `tasks/strategic/unit-economics.md`
- Hormozi #5 (CAC vs nCAC), Moncada #7 (Geo-LTV)
- Agentes: @dash (owner), @midas (gate)

---

## 2. Grand Slam Offer Equation

**Categoria:** Creative / Offer Design
**Quando usar:** Criação de nova oferta ou reframe de oferta existente em copy/ad.

### Fórmula
```
Valor Percebido = (Sonho × Probabilidade Percebida) ÷ (Tempo × Esforço)
```

**Maximizar numerador. Minimizar denominador.**

### Os 4 componentes
| Componente | O que é | Como elevar / reduzir |
|------------|---------|----------------------|
| **Sonho** | Resultado específico e mensurável | Especificar número + contexto ("R$50k/mês sem equipe") |
| **Probabilidade** | Credibilidade de atingir | Prova social, garantia, autoridade, método |
| **Tempo** | Duração percebida | Prazo curto e claro ("em 30 dias") |
| **Esforço** | Quanto custa ao cliente (energia/skill) | "Sem", "automatizado", "fácil", "em 15 min/dia" |

### Algoritmo de avaliação
1. Peg sua oferta. Para cada componente, dar nota 1-10.
2. Multiplicar numerador (Sonho × Probabilidade) e denominador (Tempo × Esforço).
3. Comparar competidor. Se seu índice < concorrente → não vença com tráfego; reescreva a oferta.
4. Iterar hook e copy focando no componente mais fraco.

### Exemplo numérico 1 — infoproduto R$997 (curso de marketing)
| Componente | Oferta fraca | Oferta Grand Slam |
|------------|-------------|-------------------|
| Sonho | "aprender marketing" (5/10) | "R$50k/mês em 90d com 3h/dia" (9/10) |
| Probabilidade | "tenho experiência" (4/10) | "+500 alunos, R$ em prints, garantia 60d" (9/10) |
| Tempo | "programa completo" (4/10) | "resultados em 30d, módulo em 7d" (9/10) |
| Esforço | "estude pesado" (3/10) | "templates prontos, só copiar" (9/10) |
| **Índice** | (5×4)/(4×3)=**1.67** | (9×9)/(9×9)=**1.0** mas em escala alta |

Escala absoluta: Grand Slam tem componentes 9/10 em tudo → conversão sobe 3-5× vs oferta fraca.

### Exemplo numérico 2 — serviço B2B R$5.000/mês
- Antes: "Ajudamos empresas a crescer com marketing" (vago em tudo).
- Depois: "Triplicamos seu MRR em 120 dias ou devolvemos tudo. Zero trabalho pra você — entregamos chave na mão."
  - Sonho (3× MRR) ✅, Probabilidade (garantia) ✅, Tempo (120d claro) ✅, Esforço (turn-key) ✅.

### Anti-padrões
- ❌ Inflar Sonho sem Probabilidade → "promessa exagerada" → CTR alto, conversão baixa.
- ❌ Minimizar Esforço falsamente ("em 5 minutos ficará rico") → desconfiança.
- ❌ Reduzir Tempo sem entregar ("7 dias") e depois explicar letras miúdas → reclamações.
- ❌ Ignorar componente mais fraco e "reforçar" o já forte → marginal decrescente.

### Conecta com
- `tasks/generative/angle-generator.md`, `tasks/generative/brief-creator.md`
- Agentes: @nova, @midas

---

## 3. Hydra Strategy (Multi-Channel Diversification)

**Categoria:** Strategic / Risk Management
**Quando usar:** Toda revisão trimestral de portfolio.

### Regra
Não deixar > 60% do budget em 1 canal único. Risco de plataforma é **existencial**.

### Portfolio Mix (padrões por tipo de negócio)
| Business | Meta | Google | YouTube | Other |
|----------|------|--------|---------|-------|
| **D2C e-com** | 45-55% | 20-30% | 10-15% | 5-15% (TikTok, Pinterest) |
| **Infoproduto** | 50-60% | 15-25% | 10-20% | 5-10% (TikTok) |
| **Lead gen B2B high-ticket** | 30-40% | 40-50% (search intent) | 10-20% | 5-10% (LinkedIn) |
| **Local service** | 40-50% | 40-50% (Local Services Ads) | 5-10% | 5% |

### Algoritmo de diversificação
1. Checar cap: se 1 canal > 60% → **alerta crítico**.
2. Se entre 50-60% → **watch**; quando o canal primário gerar 20% acima do budget médio nos últimos 3 meses, redirecionar o lucro extra para o canal #2.
3. Se < 50% → diversificação saudável.
4. Nunca abrir 3+ canais simultaneamente — focar em estabilizar #1 e #2 antes do #3.

### Exemplo numérico — infoproduto BR
- Budget atual R$120k/mês. Meta R$90k (75%), Google R$20k (17%), YouTube R$10k (8%).
- Meta em 75% → risco crítico. Se Meta banir BM → perda de 75% do pipeline overnight.
- Plano: nos próximos 90d, crescer Google para 25% e YouTube para 15% → Meta cai para 60% naturalmente sem cortar.
- Orçamento incremental mensal: R$10k para Google (R$30k target), R$5k para YouTube (R$15k target).

### Quando ignorar 60% cap
- **Conta novinha** (< 6 meses): ok ter 80% Meta enquanto aprende.
- **Canal único dominante estrutural** (ex: marketplace Amazon para e-com): ratio 80/20 Amazon/Meta pode ser defensável.

### Anti-padrões
- ❌ Abrir 4 canais de uma vez → nenhum tem budget para aprender.
- ❌ Copiar criativo de Meta direto para Google Search → não funciona (search tem intent, não interrupt).
- ❌ Deixar sinal de alerta (> 60%) por mais de 3 meses sem ação → ban surpreende.
- ❌ Diversificar por FOMO sem o canal primário estar saudável → pulveriza budget.

### Conecta com
- `tasks/optimization/budget-allocation.md`, `checklists/scale-gate.md`
- Agentes: @midas (decisão), @dash (execução), @kasim-aslam (Google), @tom-breeze (YouTube)

---

## 4. Funil R$17 (Tripwire / Self-Liquidating Offer)

**Categoria:** Strategic / Funnel
**Quando usar:** Cold traffic + pixel novo que precisa volume de eventos rápido + oferta de médio/alto ticket no backend.

### Estrutura
```
COLD TRAFFIC → R$17 Tripwire (cobre CAC) → Order Bump → Upsell 1 → Upsell 2
                                                                    ↓
                                                              Email Sequence
                                                                    ↓
                                                              Backend High-Ticket
```

### Métricas-chave
- **AOV ≥ 1.5× CPA do tripwire.** Se AOV < CPA → mata margem.
- Take rate Order Bump: 30-50%.
- Take rate Upsell 1: 15-25%.
- Take rate Upsell 2: 10-15%.

### Algoritmo
1. Criar oferta frontend R$17 (ebook, checklist, mini-curso).
2. Custo de aquisição do R$17: CPA R$14-25 aceitável (break-even).
3. Order Bump R$47 (take rate 35% = +R$16 AOV blended).
4. Upsell 1 R$197 (take rate 18% = +R$35 AOV).
5. Upsell 2 R$497 (take rate 10% = +R$50 AOV).
6. **AOV blended médio: R$17 + R$16 + R$35 + R$50 = R$118.**

### Exemplo numérico
- Mês 1: 1.200 vendas de R$17 (CPA R$18, spend R$21.6k).
- Order Bump take 40% = 480 × R$47 = R$22.5k.
- Upsell 1 take 20% = 240 × R$197 = R$47.3k.
- Upsell 2 take 10% = 120 × R$497 = R$59.6k.
- **Revenue front: R$150.4k. Spend R$21.6k. Margem bruta (70%) = R$105k.**
- Além disso: **1.200 leads qualificados** entram na lista pro backend R$2.997.
- Conversão backend típica 3-5% em 30d → 36-60 × R$2.997 = **R$108k-180k de backend**.
- **ROAS total funil: 6-10×.**

### Quando NÃO usar R$17
- Ticket médio final < R$300 → backend pequeno, não justifica engenharia do tripwire.
- Nicho B2B enterprise → decisor não compra R$17 (posicionamento errado).
- Produto físico com frete > R$17 → economics quebra.

### Anti-padrões
- ❌ Cobrar R$17 mas entregar pouco valor → lista "queimada", ninguém compra backend.
- ❌ Ter só tripwire sem Order Bump/Upsell → CAC paga, lucro zero.
- ❌ Tripwire sem email sequence pro backend → perde 60% do LTV.
- ❌ Preços Upsell muito altos (R$497 → R$1.997) → take rate despenca.

### Conecta com
- `tasks/strategic/funnel-selection.md`, Hormozi #1 (Unit Economics)
- Agentes: @midas (decisão), @dash (medir AOV), @nova (criativos tripwire)

---

## 5. CAC vs nCAC Distinction

**Categoria:** Reporting / Analytics
**Quando usar:** Setup de dashboards financeiros + qualquer reporting para CEO/investors.

### Definições
- **CAC (blended):** Custo total / Total de novos clientes (incluindo orgânicos, indicação, paid, parceria).
- **nCAC (new CAC):** Spend em ads / Novos clientes *atribuídos a paid ads only*.
- **CAC orgânico:** Custo de conteúdo/SEO / clientes orgânicos.

### Fórmulas
```
CAC_blended  = (Spend_total_marketing) / (Total novos clientes)
nCAC         = (Paid_ad_spend) / (Paid_attributed_new_customers)
CAC_organic  = (Content_cost + SEO_cost) / (Organic_new_customers)
```

### Qual otimizar vs qual reportar
| Stakeholder | Métrica | Por quê |
|-------------|---------|---------|
| **Marketing / @dash** | **nCAC** | É o que você controla via paid ads |
| **CEO / Board** | **CAC blended** | É o que move o negócio |
| **Finance** | **Payback Period (blended)** | Fluxo de caixa |

### Exemplo numérico — SaaS BR
- Mês: 220 novos clientes total.
- 140 via paid (Meta+Google), 60 via orgânico (SEO+conteúdo), 20 via indicação.
- Paid spend R$84k, content/SEO R$15k, indicação R$0 (mas programa de ref custa R$5k/mês).
- **nCAC = 84.000 / 140 = R$600** (otimização de ads)
- **CAC orgânico = 15.000 / 60 = R$250**
- **CAC blended = (84k + 15k + 5k) / 220 = R$472** (visão CEO)

### Interpretação
- CEO vê "CAC R$472" e acha saudável.
- Dash sabe que nCAC está R$600 — aquisição via ads está 27% mais cara que blended.
- Ações: tentar trazer nCAC a R$500 OU subir a capacidade orgânica (que vem mais barata).

### Anti-padrões
- ❌ Otimizar paid ads para CAC blended → você não controla orgânico, está tentando reduzir o que não depende de ads.
- ❌ Reportar nCAC para o board → eles acham que CAC geral é aquele e tomam decisões erradas.
- ❌ Não separar canais de aquisição nas queries do data warehouse → nunca consegue calcular nCAC.

### Conecta com
- `tasks/diagnostic/attribution-analysis.md`, Hormozi #1 (Unit Economics)
- Agentes: @dash (owner), @midas, @track (configurar attribution)

---

## Resumo Operacional

### Frameworks por agente
- **@dash**: 1, 3, 5 (reporting), 4 (AOV medir)
- **@midas**: 1 (gate), 3 (portfolio), 4 (funnel decision)
- **@nova**: 2 (Grand Slam em copy/hooks)
- **@track**: 5 (attribution setup)

### Cadência
- **Toda campanha nova:** gate #1 (Unit Economics).
- **Trimestral:** review #3 (Hydra portfolio).
- **Pós-launch:** auditar #4 (R$17 funnel metrics).
- **Mensal:** #5 (nCAC vs blended no reporting).

---

**Referência:** Use estes frameworks via `*unit-economics`, `*funnel-selection`, `*budget`, `*attribution`.
