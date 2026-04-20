# Jeremy Haynes — 28 Frameworks (60% do squad)

> **Owner agents:** @midas, @dash, @nova, @ralph-burns
> **Source:** DSL Revolution + Campaign Organization + Scale/Kill methodology (2022-2026)
> **Aplicabilidade:** Meta Ads (core), Google/YouTube (parcial), TikTok (parcial)

Todos os frameworks seguem o mesmo template: **Categoria → Quando usar → Algoritmo → Thresholds → Exemplo numérico → Anti-padrões → Conexões**.

---

## 1. DSL Revolution Framework (Creative Structure)

**Categoria:** Creative
**Quando usar:** Todo criativo de vídeo (Meta Reels/Stories/Feed, TikTok, YouTube Shorts). É o DNA de qualquer peça.

**Estrutura de 3 atos:**

```
0-3s    DISRUPT   → Hook (pattern interrupt)
3-15s   SOLVE     → Problema + Solução + Mecanismo único
15s+    LEAD      → Prova social + CTA específico
```

### Algoritmo
1. **DISRUPT (0-3s):** aplicar 1 dos 6 Hook Categories (#6). Medir Hook Rate (3-sec video view ÷ impressões).
2. **SOLVE (3-15s):** PASP Stack (Stupar) ou PAS clássico. Mecanismo único = o "por que só aqui". Medir Hold Rate (25-sec retention).
3. **LEAD (15s+):** prova social (depoimentos, números, cases) + CTA único e verbal ("clique em saiba mais"). Medir CTR.

### Thresholds por camada
| Camada | Métrica | Mínimo | Ideal | Se abaixo |
|--------|---------|--------|-------|-----------|
| DISRUPT | Hook Rate | 15% | ≥ 25% | Trocar hook (obrigatório < 15%) |
| SOLVE | Hold Rate (25s) | 20% | ≥ 35% | Reescrever mecanismo único |
| LEAD | CTR | 1.0% | ≥ 2.0% | Refazer CTA |

### Exemplo numérico
Vídeo de 45s vendendo curso de Meta Ads R$997:
- 0-3s: "Você já tem pixel instalado e seus ads ainda não convertem?" (hook PROBLEMA)
- 3-15s: "Isso é porque 9 de 10 pixels estão medindo errado. O método CAPI + EMQ corrige em 48h sem refazer nada." (mecanismo único)
- 15-45s: "+500 alunos subiram de 1.2 ROAS para 3.5 em 30 dias. Clique em saiba mais e baixe o checklist grátis." (prova + CTA)
- Resultado esperado: Hook Rate 28%, Hold Rate 38%, CTR 2.1%, CPA R$42, ROAS 3.8.

### Anti-padrões
- ❌ Hook genérico ("Oi pessoal, tudo bem?") → queima o pattern interrupt.
- ❌ SOLVE sem mecanismo único → copy commodity → CTR < 1%.
- ❌ Múltiplos CTAs no LEAD → diluição → Hook/Hold fortes mas CTR despenca.
- ❌ CTA visual sem verbalizar → perde 30-40% do CTR.

### Conecta com
- `tasks/generative/hook-generator.md`, `tasks/generative/brief-creator.md`
- `tasks/generative/creative-fatigue-detector.md` (K4 se Hook Rate < 15%)
- Agentes: @nova (owner), @dash (validação de métricas)

---

## 2. CBO vs ABO Strategy

**Categoria:** Strategic
**Quando usar:** Decisão de estrutura de campanha logo após o *funnel-selection*.

| Cenário | Estrutura | Por quê |
|---------|-----------|---------|
| Testing (< 3 ad sets vencedores) | **ABO** (Ad Set Budget Optimization) | Controle por ad set |
| Scaling (≥ 3 vencedores estáveis) | **CBO** (Campaign Budget Optimization) | Algoritmo realoca |
| Mix (testing + scaling) | **CBO + cap mínimo por ad set** | Hybrid (Daily Floor Moncada) |

### Algoritmo
1. **< 50 conversões nos últimos 7 dias?** → ABO (algoritmo não tem sinal).
2. **≥ 3 ad sets com ROAS > 2.5 por 5+ dias?** → migrar para CBO.
3. **Conta com budget mensal > R$100k?** → CBO + Cost Cap (#21).
4. **Oferta nova (primeira semana)?** → ABO com 3 ad sets paralelos, mesmo criativo.

### Exemplo numérico
- Semana 1 (R$300/dia): ABO com 3 ad sets × R$100.
- Semana 2: 2 ad sets com ROAS 2.8 e 3.1, 1 com ROAS 0.9 → pausar 3º, manter ABO.
- Semana 3: +1 ad set LAL, agora 3 vencedores → migrar para CBO R$500/dia.
- Regra: sempre **gradual** — CBO seco mata learning phase.

### Anti-padrões
- ❌ CBO com 1-2 adsets → 80% do budget vai no melhor, você perde os outros.
- ❌ ABO permanente em scaling → você manualmente tenta o que o algoritmo faz melhor.
- ❌ Alternar CBO/ABO toda semana → reseta learning.

### Conecta com
- `tasks/strategic/campaign-structure.md`
- Agentes: @midas (decide), @dash (valida conversões)

---

## 3. Campaign Organization (Naming Convention)

**Categoria:** Tracking
**Quando usar:** Todo nome de campanha/adset/ad. Sem convenção → BI quebra.

### Formato
```
[CBO|ABO]_[OBJETIVO]_[FUNIL]_[AUDIENCIA]_[DATA]
ex: CBO_PURCHASE_VSL-R97_LAL1-PURCHASERS_20260415
```

### Campos
- **Estrutura:** CBO / ABO
- **Objetivo:** PURCHASE / LEAD / VIEW / ENGAGE / REACH
- **Funil:** VSL / ADV / WEBINAR / TRIPWIRE-R17 / DIRETO
- **Audiência:** LAL{%}-{seed} / INT-{tema} / BROAD / RETAR-{dias}
- **Data:** YYYYMMDD (dia do launch ou última iteração)

### Adset sub-naming
```
[AD-TIPO]_[HOOK-CATEGORIA]_[VARIAVEL-TESTE]_[VERSAO]
ex: UGC_CURIOSIDADE_THUMB-A_V03
```

### Anti-padrões
- ❌ Nome genérico "Campanha 1" → impossível auditar 90 dias depois.
- ❌ Misturar underscore + hífen → quebra parser de BI.
- ❌ Trocar convenção meio do mês → destrói série temporal.

### Conecta com
- `tasks/diagnostic/attribution-analysis.md` (usa naming para split)
- Agentes: @midas, @track

---

## 4. Kill Rules K1-K5 (Severidade Crítica)

**Categoria:** Optimization (determinístico — sem interpretação)
**Quando usar:** Loop autônomo a cada 1h (campaign-monitor) OU auditoria manual (*diagnose).

### Tabela mestre
| Regra | Sinal | Threshold | Ação | Janela mínima | Severidade |
|-------|-------|-----------|------|---------------|------------|
| **K1** | ROAS | < 0.5 | PAUSAR ADSET | imediato | Crítica |
| **K2** | CPA | > 2x target | PAUSAR ADSET | 1.000 imp | Crítica |
| **K3** | CTR | < 0.5% | PAUSAR AD | 500 imp | Alta |
| **K4** | Hook Rate | < 15% | PAUSAR + gerar novos hooks | 1.000 imp | Alta |
| **K5** | Frequency | > 4 | PAUSAR + expand audience (Andromeda) | imediato | Média |

### Diagnóstico da causa (antes de agir)
Ao detectar uma regra Kill, diagnosticar a raiz:
1. **K1/K2 (economics):** é criativo (CTR baixo), audiência (Freq alta), tracking (CAPI off) ou oferta (LTV/CAC < 3)?
2. **K3 (CTR):** hook fraco (K4) OU mismatch audiência-oferta.
3. **K4 (Hook):** thumbnail, primeiros 3s, câmera, luz, pattern interrupt ausente.
4. **K5 (Freq):** audiência pequena OU repetição excessiva (frequency cap ausente).

### Ações pós-pausa
| Regra | Ação seguinte |
|-------|---------------|
| K1/K2 | Diagnose funnel (drop-off Landing→Checkout) + Unit Economics |
| K3 | Se K4 também, refresh; senão, teste nova audiência |
| K4 | Hook generator (3 categorias diferentes) + AB test |
| K5 | LAL ladder expansion (Andromeda #1) + frequency cap 2/7d |

### Exemplo numérico
- Adset "UGC_CURIOSIDADE_V03": ROAS 0.38 em 2 dias, CPA R$180 (target R$65), Frequency 2.1.
- Diagnóstico: K1 (crítica) + K2 (crítica). Frequency normal → não é audiência.
- CTR 0.4% → K3 também.
- Raiz provável: hook/criativo fraco → PAUSE + dispatch @nova *hooks.

### Anti-padrões
- ❌ Aplicar K1/K2 em adset recém-lançado (< 1.000 imp) → learning phase ativo, dados ruidosos.
- ❌ Pausar sem log → perde histórico para análise de padrões.
- ❌ K5 com audiência pequena (< 500k) → pausar é inútil; expandir é a solução.
- ❌ Agir sobre K3 sem checar K4 → se Hook Rate está OK mas CTR baixo, problema é mismatch, não criativo.

### Conecta com
- `tasks/optimization/kill-scale-rules.md` (lógica)
- `tasks/automation/campaign-monitor.md` (execução autônoma)
- Agentes: @dash (owner), @midas (aprovação em budgets > R$10k/dia)

---

## 5. Scale Rules S1-S3 (Vertical + Horizontal)

**Categoria:** Scaling (determinístico)
**Quando usar:** Adset/campaign provou em testing, passou no *scale-readiness-check* (5/5 gates).

### Tabela mestre
| Regra | Condição | Ação | Velocidade | Necessita @midas? |
|-------|----------|------|------------|-------------------|
| **S1** | ROAS > 2.5 × 3d + 30 conv | +20% budget | 1x/dia | Não |
| **S2** | ROAS > 4.0 × 5d + 50 conv | +50% budget | 1x a cada 2d | **Sim** (aprovação) |
| **S3** | ROAS > 3.0 + Freq < 2 | Duplicar LAL (horizontal) | Criar LAL2/LAL3 | Não |

### Definição de "estável"
- ROAS dentro de ±15% do ROAS-médio nos últimos 3 dias (ex: média 2.8 → aceitar 2.4-3.2).
- Variância diária > 30% → **NÃO é estável**, aguardar.
- Dias de blackout (Black Friday, dia de pagamento) → excluir da janela.

### Velocidade por tamanho de audiência
| Audience size | Max daily scale |
|---------------|-----------------|
| < 1M | +15%/dia (segurança) |
| 1M - 10M | +20%/dia (padrão Haynes) |
| > 10M | +30%/dia (LAL grandes) |

### Pausar scale
- Após 3 dias de scale, **ROAS caiu > 25%** → voltar ao budget anterior por 3 dias antes de retomar.
- Frequency cruzou 3.5 durante scale → pausar scale, duplicar LAL (S3).
- CPA subiu > 30% → scale direto no limite; recuar 20%.

### Exemplo numérico
- Adset "CBO_PURCHASE_VSL_LAL3-ATC_20260310": R$500/dia, ROAS 2.9 (média 3d), 35 conv/3d, Freq 1.8.
- S1 atende → +20% → R$600/dia.
- Dia 4: ROAS 3.1, 40 conv, Freq 1.9 → +20% → R$720/dia.
- Dia 5: ROAS 2.3, 30 conv, Freq 2.4 → **pausar scale**, voltar a R$600/dia por 3 dias.

### Anti-padrões
- ❌ Duplicar budget (+100%) de uma vez → reset de learning phase, ROAS colapsa.
- ❌ Scale com < 30 conversões → amostra insuficiente, escala ruído.
- ❌ S3 sem LAL de segundo grau disponível → duplicar adset idêntico é inútil.
- ❌ Scale em sexta à noite → Meta algoritmo reotimiza no fim de semana.

### Conecta com
- `tasks/strategic/scale-readiness-check.md`
- `tasks/optimization/budget-allocation.md`
- `checklists/scale-gate.md`
- Agentes: @dash (execução), @ralph-burns (tier 2 scale), @midas (S2 approval)

---

## 6. Hook Categories (6 tipos)

**Categoria:** Creative
**Quando usar:** Na hora de escrever hook — toda sessão de *hooks* gera ≥ 10 variações distribuídas nos 6 tipos.

### Tabela + exemplos reais
| Categoria | Audiência (Schwartz) | Trigger psicológico | Exemplo 1 | Exemplo 2 |
|-----------|---------------------|---------------------|-----------|-----------|
| **PROBLEMA** | Consciente da dor | Validação | "Cansado de ads que queimam dinheiro?" | "Seu CAC está alto e você não sabe por quê?" |
| **RESULTADO** | Consciente da solução | Aspiração concreta | "De R$0 a R$50k/mês em 90 dias" | "Como saí de ROAS 0.8 para 3.5 em 30 dias" |
| **CURIOSIDADE** | Fria | Gap de informação | "O segredo que ninguém te conta sobre Meta Ads" | "Por que 90% dos anúncios morrem em 5 dias" |
| **CONTROVERSO** | Qualquer | Pattern interrupt | "Esqueça CBO. Aqui está o que funciona em 2026" | "Pixel estava morto em 2024. CAPI é o futuro." |
| **PROVA SOCIAL** | Média/fria | Conformidade | "+500 alunos já dominam isso" | "A agência do Hormozi usa esse método" |
| **TUTORIAL** | Problem-aware | Reciprocidade | "Como criar ads lucrativos em 3 passos" | "5 minutos pra auditar sua conta" |

### Regra de distribuição (10 hooks por sessão)
- 2x PROBLEMA (core da dor primária + secundária)
- 2x RESULTADO (resultado monetário + resultado de tempo)
- 2x CURIOSIDADE (gap de info + contraintuitivo)
- 2x CONTROVERSO (against-the-grain)
- 1x PROVA SOCIAL (autoridade externa)
- 1x TUTORIAL (educacional — melhor para YouTube)

### Matchup audiência × categoria
```
Fria / Unaware      → CURIOSIDADE, CONTROVERSO, TUTORIAL
Problem-aware       → PROBLEMA, TUTORIAL
Solution-aware      → RESULTADO, PROVA SOCIAL
Product-aware       → PROVA SOCIAL, CONTROVERSO (diferenciação)
Most-aware          → RESULTADO (oferta direta)
```

### Anti-padrões
- ❌ 10 hooks todos da mesma categoria → você testa "qual palavra", não "qual ângulo".
- ❌ CURIOSIDADE para audiência most-aware → dilui; ela quer oferta.
- ❌ PROBLEMA genérico sem especificidade ("cansado de falhar?") → não ativa.

### Conecta com
- `tasks/generative/hook-generator.md`
- `tasks/generative/angle-generator.md`
- Agentes: @nova (owner)

---

## 7. Hook Rate Optimization

**Categoria:** Creative / Metric
**Quando usar:** Auditoria de qualquer ad que roda há ≥ 3 dias.

### Definição
Hook Rate = (3-second video views ÷ impressions) × 100.

### Thresholds
| Range | Status | Ação |
|-------|--------|------|
| ≥ 35% | Excelente | Manter, escalar (S1/S3) |
| 25-35% | Bom (meta Haynes) | Continuar testando variações |
| 15-25% | Fronteira | Refresh preventivo em 7d (ou Freq > 3) |
| < 15% | Ruim | **K4 — pausar obrigatório** |

### Algoritmo de otimização
1. Medir Hook Rate em cada criativo a cada 1.000 impressões.
2. Se < 15% após 1.000 imp → pausar ad (K4).
3. Gerar 3 novos hooks (3 categorias diferentes) via @nova *hooks.
4. Testar em paralelo no mesmo adset (3-Ad Rule, #10).
5. Manter o novo ≥ 25% após 2.000 imp.

### Exemplo numérico
- Ad "UGC_PROBLEMA_V01": 15.000 imp, 1.400 three-sec views → 9.3% Hook Rate → **K4 imediato**.
- Gerar 3 hooks novos (CURIOSIDADE + CONTROVERSO + RESULTADO) → subir.
- Após 3 dias: Hook Rate 28%, 32%, 18% → manter 2 primeiros.

### Anti-padrões
- ❌ Medir Hook Rate antes de 500 imp → ruído estatístico.
- ❌ "Otimizar" hook pelo CTR — CTR mede interesse na oferta; Hook Rate mede pattern interrupt.

### Conecta com
- `tasks/generative/creative-fatigue-detector.md`
- Agentes: @nova

---

## 8. Hold Rate Optimization

**Categoria:** Creative / Metric
**Quando usar:** Após Hook Rate validado (≥ 25%). Medir segundo filtro de qualidade.

### Definição
Hold Rate = (25-second video views OR %-completion específica ÷ 3-second video views).

### Thresholds
| Métrica Meta | Mínimo | Meta Haynes |
|--------------|--------|-------------|
| Thruplay rate | 15% | ≥ 25% |
| 25%-completion | 30% | ≥ 50% |
| 75%-completion | 10% | ≥ 20% |

### Algoritmo
1. Após 1.000 imp, Hook Rate ≥ 25% e Hold Rate < 20% → o problema está em SOLVE (camada 3-15s da DSL).
2. Reescrever SOLVE com mecanismo único mais forte. PAS/PASP Stack (Stupar).
3. Manter hook, mudar apenas 3-15s (Constants vs Variables).
4. Revalidar em 2.000 imp.

### Exemplo numérico
- Ad: Hook Rate 32% ✅, 25%-completion 18% ❌.
- Diagnóstico: hook funciona, mas a promessa dos 3-15s não segura.
- Ação: reescrever SOLVE → acrescentar mecanismo único (ex: "método CAPI+EMQ") → após 2.000 imp: 25%-completion 42% ✅.

### Anti-padrões
- ❌ Trocar hook (que está bom) junto → não sabe qual variável resolveu.
- ❌ Cortar vídeo pra 15s pra "melhorar Hold" → reduz Thruplay mas quebra LEAD; CTR cai.

### Conecta com
- Jeremy #1 (DSL Revolution), Carter #1 (Constants vs Variables)
- Agentes: @nova

---

## 9. Creative Refresh Cycle

**Categoria:** Creative / Lifecycle
**Quando usar:** Auditoria semanal de todos os ads ativos.

### Regras de refresh
| Trigger | Ação | Velocidade |
|---------|------|------------|
| **7 dias rodando** | Refresh preventivo (nova variação) | Moderada |
| **Frequency > 3** | Refresh obrigatório | Urgente |
| **Hook Rate queda > 20% em 3d** | Refresh | Urgente |
| **CTR queda > 25%** | Refresh | Urgente |

### Algoritmo
1. Cada segunda-feira: listar ads ativos.
2. Para cada ad: calcular dias rodando, Frequency atual, delta de Hook Rate e CTR (últimos 3d vs 3d anteriores).
3. Sinal de fadiga (3+ gatilhos acima) → flag para refresh.
4. Produzir 2 variações por ad fatigado (nova thumbnail OU nova abertura OU novo hook).
5. Lançar no mesmo adset (3-Ad Rule).

### Exemplo numérico
- Ad rodando há 9 dias, Frequency 3.2, Hook Rate 26 → 19 (−27%), CTR 2.1 → 1.6 (−24%). Três gatilhos → refresh urgente.
- Produzir: (A) nova thumb com UGC face, (B) novo hook CONTROVERSO. Rodar em paralelo.

### Anti-padrões
- ❌ Esperar Hook Rate cair a 15% para refresh → perde 3-5 dias de performance intermediária.
- ❌ Refresh total (trocar criativo inteiro) quando só o hook está fatigado.

### Conecta com
- Jeremy #27 (UGC Priority), Carter #3 (Hook Iteration Velocity)
- Agentes: @nova, @ralph-burns

---

## 10. 3-Ad Rule

**Categoria:** Creative / Structure
**Quando usar:** Toda estrutura de adset.

### Regra
Sempre 3 ads por ad set: **1 vencedor + 2 challengers**.

### Algoritmo
1. Vencedor: ad com melhor ROAS nos últimos 7 dias.
2. Challenger 1: variação do vencedor (Carter Constants vs Variables — mudar 1 elemento).
3. Challenger 2: variação de categoria diferente (ex: se vencedor é PROBLEMA, challenger 2 é CURIOSIDADE).
4. Após 5 dias: se 1 challenger supera vencedor → novo vencedor + 2 novos challengers.

### Exemplo
- Adset atual: Ad-A (vencedor, ROAS 3.2), Ad-B (refresh do A, ROAS 2.9), Ad-C (CONTROVERSO, ROAS 3.5).
- Dia 6: C bate A → promover C a vencedor; substituir A; produzir novos B, C.

### Anti-padrões
- ❌ 1 ad só por adset → nenhum backup, criativo fadiga e adset toda cai.
- ❌ 10 ads por adset → budget dilui, cada ad vê < 100 impressões/dia.

### Conecta com
- Carter #1 (Constants vs Variables)
- Agentes: @nova

---

## 11. Testing Pyramid (80/20 Rule)

**Categoria:** Budget
**Quando usar:** Alocação semanal de budget.

### Regra
- **80% do budget** → vencedor comprovado (ROAS > 2.5, 50+ conversões).
- **20% do budget** → testes (criativos novos, audiências novas, offers novos).

### Algoritmo de alocação
1. Listar vencedores estáveis (≥ 5d ROAS > 2.5).
2. Budget de vencedores = 80% × total.
3. Testes = 20% × total, distribuídos em 3-5 adsets paralelos.
4. Promover vencedor-teste após validação (5+ dias, 30+ conv) → puxa budget do slice de testes.

### Exemplo
- Budget mensal R$60k / R$2k dia.
- R$1.600/dia vencedores (3 adsets × R$533).
- R$400/dia em testes (4 adsets × R$100).

### Anti-padrões
- ❌ 100% no vencedor → sem pipeline → quando fatiga, não há substituto pronto.
- ❌ 50/50 → diluir demais os vencedores → ROAS médio cai.

### Conecta com
- `tasks/optimization/budget-allocation.md`
- Agentes: @dash

---

## 12. Lookalike Stacking

**Categoria:** Targeting / Audience
**Quando usar:** Montar adset com audiência quente-próxima.

### Regra
LAL 1% + 3% + 5% no **mesmo ad set** (stack), seed = Purchaser ou ATC.

### Algoritmo
1. Confirmar seed: Purchasers 30d ≥ 500 (mínimo Meta).
2. Criar 3 LALs: 1%, 3%, 5%.
3. Adicionar as 3 no mesmo adset (Meta une como OR).
4. Rodar com auto-placements + broad age (ex: 25-55).

### Thresholds
- **Seed < 500** → pular Lookalike, ir para Interest Stacking (#13).
- **Seed < 1.000** → usar 2-5% apenas (1% é volátil com seed pequena).

### Exemplo
- Seed: 1.200 Purchasers 30d → criar LAL1, LAL3, LAL5. Budget R$200/dia. Após 7d: ROAS 3.1, 60 conv. → validado.

### Anti-padrões
- ❌ 1 LAL por adset → fragmenta audiência, algoritmo custa mais para achar.
- ❌ LAL de "all site visitors" → baixo sinal de compra.

### Conecta com
- Moncada #1 (Andromeda Method)
- Agentes: @dash, @molly-pittman

---

## 13. Interest Stacking

**Categoria:** Targeting
**Quando usar:** Conta nova sem seed suficiente OU fallback de LAL.

### Regra
3-5 interesses **correlatos** em 1 ad set (OR boolean).

### Algoritmo
1. Mapear 10-15 interesses candidatos (autores, marcas, temas, skills).
2. Agrupar por cluster (ex: "Copywriting": Gary Halbert + Dan Kennedy + DigitalMarketer).
3. Pegar 3-5 do cluster com size total ≥ 500k.
4. Testar em 1 adset; medir ROAS vs broad (#14).

### Thresholds
- **Size combinado < 200k** → stacking não compensa; ir broad.
- **Size combinado > 5M** → quase broad; dá mesmo resultado que #14.

### Exemplo
- Oferta: curso de Meta Ads para agências. Stack: "Digital Marketer" + "Russell Brunson" + "Jeremy Haynes" + "Ad agency" + "Facebook advertising". Size 1.3M. ROAS 2.7.

### Anti-padrões
- ❌ Misturar temas (ex: "Copywriting" + "Gestão financeira") → audiência incoerente.
- ❌ Interesses muito largos (ex: "Marketing") → mesmo efeito que broad, sem o sinal.

### Conecta com
- Moncada #1 (Andromeda camada Interest)
- Agentes: @dash, @molly-pittman

---

## 14. Broad Audience Test

**Categoria:** Targeting
**Quando usar:** Criativo forte + iOS14+ pós-2022 + pixel com sinal.

### Regra
Sem targeting detalhado. Só **país + idade + gênero** (se relevante). Criativo carrega o peso.

### Algoritmo
1. Verificar pré-requisito: ≥ 50 Purchase events/semana no pixel (sinal para algoritmo).
2. Criar adset broad: Brasil, 25-55, todos gêneros.
3. Rodar 7 dias com budget 10-20% do total.
4. Comparar ROAS vs LAL/Interest. Se superior → migrar mais budget.

### Thresholds
- **Pixel < 50 conv/sem** → broad é roleta. Usar LAL.
- **Pixel ≥ 200 conv/sem** → broad geralmente ganha (algoritmo tem sinal de sobra).

### Exemplo
- Conta madura: 350 Purchases/sem. Broad adset R$150/dia. Após 10d: ROAS 2.9 vs LAL 2.6. Migrar broad para 40% do budget.

### Anti-padrões
- ❌ Broad em conta nova (< 50 conv/sem) → queima budget pra aprender sozinho.
- ❌ Broad com criativo genérico → performance despenca.

### Conecta com
- Moncada #1 (Andromeda camada Broad), Moncada #4 (Broad Testing Methodology)
- Agentes: @dash, @depesh-mandalia

---

## 15. Custom Audience Pyramid

**Categoria:** Retargeting / Audience
**Quando usar:** Retargeting e warm funnel.

### Pirâmide (hot → cold)
```
Purchaser 180d              → audiência mais quente (LAL seed premium)
AddToCart 30d não-comprou   → retargeting cash (oferta direta)
InitiateCheckout 30d        → retarget com urgência
ViewContent 30d             → retarget educacional
Engagement 30d (FB/IG)      → warm (conteúdo)
Video 75% 30d               → warm (PASP stack)
```

### Algoritmo
1. Criar 6 custom audiences correspondentes.
2. Cada degrau vira seed para LAL (#12) do degrau anterior.
3. Pyramid invertida para retargeting: exclusões em cascata (retarget ATC exclui Purchaser, etc.).

### Exemplo
- Campaign retargeting ATC-30d (excl Purchaser): budget R$80/dia, oferta 10% off, ROAS 5.2.
- LAL de Purchaser 180d → broad scaling, ROAS 2.9.

### Anti-padrões
- ❌ Retargeting sem exclusão → mostra oferta para quem já comprou (ruído).
- ❌ 1 audiência genérica "all site visitors" → dilui sinal.

### Conecta com
- Haynes #18 (Pixel Hierarchy), Moncada #5 (Cross-Sell Sequencing)
- Agentes: @dash, @track

---

## 16. Retargeting Window

**Categoria:** Retargeting
**Quando usar:** Setup de todos os adsets de remarketing.

### Janelas por temperatura
| Tier | Janela | Oferta | Frequency cap |
|------|--------|--------|---------------|
| Hot | 7 dias | Direto / desconto | 3 imp/pessoa/dia |
| Warm | 30 dias | Mecanismo único / educação | 2/dia |
| Cold | 180 dias | Reativação / urgência | 1/dia |

### Algoritmo
1. Criar 3 adsets com mesmas custom audiences, janelas diferentes.
2. Exclusões: Warm exclui Hot, Cold exclui Warm+Hot.
3. Mensagem diferente por tier (hot = oferta; cold = problema+novidade).

### Exemplo
- Hot 7d (R$40/dia): "Última chance — 10% off". ROAS 6.1.
- Warm 30d (R$60/dia): "Por que 90% dos ads falham" (educacional). ROAS 3.8.
- Cold 180d (R$30/dia): "Voltamos com algo novo" (reengajamento). ROAS 2.2.

### Anti-padrões
- ❌ Janela 180d sem frequency cap → gasta budget re-impactando quem já desistiu há meses.
- ❌ Mesma mensagem em todos os tiers → performance uniforme mas fraca.

### Conecta com
- Haynes #15 (Custom Audience Pyramid)
- Agentes: @dash

---

## 17. Ad Account Structure

**Categoria:** Strategic / Organization
**Quando usar:** Onboarding de marca nova OU expansão geográfica.

### Regra
- 1 Business Manager por marca/LLC.
- 1 Ad Account por país (fiscal + pixel limpo).
- 1 Pixel por site (não compartilhar cross-brand).
- 1 Conta de backup por BM (em caso de ban).

### Algoritmo
1. Listar países de operação.
2. Criar ad account por país, moeda local, timezone local.
3. Instalar pixel específico em cada domínio/subdomínio.
4. Agendar revisão de conta backup mensal (Meta ocasionalmente bane).

### Exemplo
- Infoproduto operando BR + PT + US.
- BM: "Curso-XPTO".
- 3 ad accounts: BR (BRL, São Paulo tz), PT (EUR, Lisboa tz), US (USD, NY tz).
- 3 pixels: curso.com.br, curso.pt, curso.com.

### Anti-padrões
- ❌ 1 ad account global com múltiplas moedas → cálculo de nCAC vira pesadelo.
- ❌ Pixel compartilhado entre sites diferentes → contamina sinal.
- ❌ 1 BM para múltiplas marcas → se uma é banida, todas caem.

### Conecta com
- `tasks/diagnostic/tracking-audit.md`
- Agentes: @track, @midas

---

## 18. Pixel Hierarchy (Event Funnel)

**Categoria:** Tracking
**Quando usar:** Setup de pixel e CAPI + alimentação de LALs.

### Hierarquia
```
PageView (PV)          → topo, sinal fraco
ViewContent (VC)       → viu produto
AddToCart (ATC)        → intenção
InitiateCheckout (IC)  → alto intent
Purchase (PC)          → sinal máximo
```

### Regra
Cada evento **alimenta o LAL do próximo**. PC → LAL-Purchaser (usado em broad). IC → LAL-IC (retarget de cart abandonment). ATC → LAL-ATC (warm scaling).

### Algoritmo
1. Instalar 5 eventos via pixel + CAPI (duplicação).
2. Configurar dedup via event_id.
3. Criar 4 LALs correspondentes (PC, IC, ATC, VC).
4. Usar cada LAL no ad set apropriado (broad = LAL-PC; warm = LAL-IC/ATC).

### Exemplo
- Pixel instalado:
  - PV (auto Meta)
  - VC via dataLayer no pageview de /produto
  - ATC via evento de click em "comprar"
  - IC via pageview em /checkout
  - PC via pixel de thank-you + API do checkout (Hotmart/Shopify)

### Anti-padrões
- ❌ Só Purchase + PageView → 3 LALs que não rolam (faltam sinais intermediários).
- ❌ Events customizados com nomes aleatórios ("Compra_v2") → Meta não reconhece hierarquia.
- ❌ Faltar event_id → dedup quebra, double-count dispara EMQ errático.

### Conecta com
- `tasks/diagnostic/tracking-audit.md`
- Agentes: @track

---

## 19. Auto-Placements

**Categoria:** Strategic
**Quando usar:** Default em todo adset.

### Regra
Deixe **auto-placements ON** para Meta escolher (Feed, Reels, Stories, Audience Network, Messenger).

### Por quê
- Algoritmo melhorou 2023-2026 — pick manual geralmente reduz performance.
- Auto-placements cobre posicionamentos que você não testaria (ex: Reels desktop).
- Custa menos (CPM médio cai 15-20%).

### Quando desligar
1. Criativo 9:16 only → desligar Feed quadrado (evita crop feio).
2. Brand concerns em Audience Network → desligar apenas Audience Network.
3. B2B high-ticket → às vezes Messenger inflaciona volume de leads ruins.

### Exemplo
- Adset Reels-only 9:16 → auto-placements + criativo 9:16 nativo.
- Adset de webinar B2B → auto-placements MENOS Audience Network e Messenger.

### Anti-padrões
- ❌ Placement manual "só Feed" → deixa 40% do inventário barato fora.
- ❌ Fazer criativo 1:1 em adset com auto-placements → Reels crop horrível.

### Conecta com
- Nenhum — é default de estrutura.
- Agentes: @dash

---

## 20. Bid Cap Strategy

**Categoria:** Bidding
**Quando usar:** Scaling de adset estável.

### Regra
Bid Cap só faz sentido **após 50+ purchases** naquele adset (learning phase bem completa).

### Algoritmo
1. Confirmar 50+ PC events no adset, ROAS > 2.5 × 5 dias.
2. Calcular CPA real do adset (ex: R$68).
3. Setar Bid Cap = CPA real × 0.9 (ex: R$61).
4. Aumentar Bid Cap em +10% por semana, até estabilizar volume.

### Quando não usar
- < 50 purchases → algoritmo ainda aprendendo.
- Adset em fase de teste → limita delivery desnecessariamente.
- Audience pequena (< 500k) → bid cap bloqueia entregas.

### Exemplo
- Adset "LAL3-Purchaser" com 120 PC/14d, CPA R$54, ROAS 3.1.
- Bid Cap R$49. Semana 1: volume −15%, CPA R$46, ROAS 3.4.
- Semana 2: Bid Cap R$53 → volume restaura, ROAS 3.2.

### Anti-padrões
- ❌ Bid Cap em adset novo → nunca sai de learning.
- ❌ Bid Cap baixo demais (50% do CPA) → adset não entrega.

### Conecta com
- Haynes #21 (Cost Cap — alternativa), #22 (Manual Bidding)
- Agentes: @dash, @depesh-mandalia

---

## 21. Cost Cap

**Categoria:** Bidding
**Quando usar:** Scaling com CPA target rígido (ex: LTV é fixo, não aceita CPA > X).

### Regra
Cost Cap = CPA target máximo que o Meta pode pagar. Algoritmo tenta entregar volume máximo sob o cap.

### Algoritmo
1. Definir CPA target via Unit Economics (LTV/3 — Hormozi #1).
2. Setar Cost Cap = CPA target.
3. Se volume baixo → aumentar Cost Cap em +15%.
4. Repetir até atingir volume alvo OU CPA estabilizar.

### Cost Cap vs Bid Cap
| Dimensão | Cost Cap | Bid Cap |
|----------|----------|---------|
| Foco | CPA médio ≤ X | Bid por leilão ≤ X |
| Volatilidade | Menor | Maior |
| Volume | Médio-alto | Médio |
| Quando usar | CPA target é lei | Teste cirúrgico |

### Exemplo
- LTV R$800, margem 70% → CPA target R$186. Cost Cap R$180.
- Semana 1: 80 conversões, CPA R$172 ✅.
- Semana 2: +20% budget, Cost Cap mantido → 95 conversões, CPA R$178.

### Anti-padrões
- ❌ Cost Cap sem entender LTV → cap arbitrário → bloqueia delivery.
- ❌ Mudar Cost Cap todo dia → reseta learning.

### Conecta com
- Hormozi #1 (Unit Economics), Haynes #20 (Bid Cap)
- Agentes: @dash

---

## 22. Manual Bidding

**Categoria:** Bidding (avançado)
**Quando usar:** Scaling vertical agressivo (budgets > R$10k/dia, conta madura > R$500k spend histórico).

### Regra
Target Cost = define valor fixo. Algoritmo otimiza para estabilidade no valor alvo.

### Algoritmo
1. Só aplicar em adset com ≥ 200 conversões no histórico.
2. Target Cost = CPA dos últimos 14d.
3. Monitorar variância — Target Cost se desvia > 20% → voltar para Lowest Cost + budget maior.
4. Aumentar Target Cost em +10% se volume está abaixo do alvo.

### Quando NÃO usar
- Adset com < 200 conversões — não há histórico suficiente para o algoritmo otimizar estabilidade.
- Budgets pequenos (< R$3k/dia) — a margem de leilão é muito estreita.
- Durante mudança sazonal (Black Friday, fim de ano) — dados recentes são voláteis.

### Exemplo
- Adset de R$15k/dia, CPA histórico R$45, 800+ PC.
- Target Cost R$45 → CPA fica em R$44-48 (±10%), volume estável.
- Tentativa com Target Cost R$40 → CPA sobe R$52 (algoritmo "super-otimiza" e perde volume).

### Anti-padrões
- ❌ Manual Bidding em adset médio (< R$5k/dia) → volatilidade alta.
- ❌ Ajustar Target Cost toda semana → reset constante.

### Conecta com
- Haynes #20, #21
- Agentes: @dash, @ralph-burns

---

## 23. Spending Limit

**Categoria:** Safety / Budget
**Quando usar:** Setup de toda campanha — obrigatório.

### Regra
Spending Limit diário = 2× budget programado. Margem contra bug de algoritmo (Meta ocasionalmente estoura budget).

### Algoritmo
1. Configurar daily budget (ex: R$500).
2. Configurar spending limit no ad account = R$1.000 (2×).
3. Ou em nível de campaign: Campaign Spending Limit = 2× daily × 30 = R$30k/mês.

### Por que 2× e não 1.1×
- Meta algoritmo pode estourar até 75% em dias de alta demanda.
- Limite apertado = delivery é cortado meio-dia.
- 2× dá cushion para picos legítimos.

### Exemplo
- Campaign Daily R$500.
- Sem limit: um dia Meta gasta R$720 (otimização agressiva).
- Com limit R$1.000: Meta gasta R$720 mas não passa de R$1.000 (segurança).

### Anti-padrões
- ❌ Limit = 1× budget → Meta corta delivery ao meio-dia, perde pico de conversão.
- ❌ Sem limit nenhum → risco de overspend em bug (já aconteceu 2022-2024).

### Conecta com
- `tasks/optimization/budget-allocation.md`
- Agentes: @dash, @midas

---

## 24. Day Parting

**Categoria:** Optimization
**Quando usar:** Auditoria quinzenal — só aplicar se dados claros.

### Regra
Pausar horários em que ROAS é consistentemente < 50% da média diária.

### Algoritmo
1. Rodar relatório Meta por hora (últimos 14d).
2. Identificar horários com ROAS < 50% da média AND volume > 5% do total diário.
3. Aplicar pause schedule (ex: 02:00-06:00 BRT).
4. Revalidar após 7 dias — se volume total não caiu, manter.

### Horários típicos para pausar (BR)
- **2h-6h**: ROAS noturno costuma ser 30-50% do diurno.
- **Sexta noite / sábado manhã**: algumas niches (B2B) têm drop brutal.

### Exemplo
- E-com feminino BR: ROAS médio 2.8.
- 2h-6h: ROAS 1.1, 8% do volume.
- Pausar essa janela → volume total −4%, ROAS médio sobe para 3.0.

### Anti-padrões
- ❌ Day parting em adset novo (sem 14d de dados) → decisão em ruído.
- ❌ Pausar baseado em impressão ("acho que de noite é ruim") sem dado.
- ❌ Pausar janela de "low volume" que ainda tem ROAS > média → corta lucro.

### Conecta com
- `tasks/diagnostic/metric-diagnosis.md`
- Agentes: @dash

---

## 25. Geo Splitting

**Categoria:** Audience / Organization
**Quando usar:** LTV difere > 20% entre regiões.

### Regra
Separar campanhas por região (estado/país) se LTV/CAC varia > 20%.

### Algoritmo
1. Calcular LTV por geo (últimos 6 meses).
2. Se variance > 20% entre top e bottom → split.
3. Criar campanhas dedicadas por região, com budget proporcional a LTV.
4. Criar LAL específica por região (seed = Purchasers daquela região).

### Exemplo (e-com brasileiro)
- LTV SP R$680, RJ R$620, MG R$410, NE R$380.
- Variance SP vs NE = 79% → split obrigatório.
- Criar 3 campanhas: Sudeste (SP+RJ+MG), Nordeste, Sul.
- Budget proporcional: SE 60%, S 25%, NE 15%.
- LAL separada por seed regional.

### Quando NÃO splitar
- LTV similar entre regiões (variance < 20%) → complexidade não compensa.
- Volume absoluto de uma região < 50 PC/mês → não justifica campanha própria.

### Anti-padrões
- ❌ Splitar por estado sem dados de LTV → fragmentação sem ganho.
- ❌ Splitar mas usar mesma LAL global → perde o benefício.

### Conecta com
- Moncada #7 (Geo-LTV Mapping)
- Agentes: @dash, @pedro-sobral

---

## 26. Creative Rotation

**Categoria:** Testing
**Quando usar:** Teste A/B limpo entre dois criativos ativos no mesmo adset.

### Regra
Alternar ads em dias odd/even para obter amostra balanceada contra sazonalidade semanal.

### Algoritmo
1. 2 criativos concorrentes no mesmo adset.
2. Usar ad scheduling para rodar Ad-A em dias ímpares, Ad-B em dias pares (14 dias = 7 dias cada).
3. Medir performance ajustada por day-of-week.
4. Vencedor = ROAS superior E variância inferior.

### Quando usar
- Adset com tráfego estável e volume suficiente (100+ conv/semana).
- Teste "puro" entre 2 criativos que vão decidir escalada.

### Quando NÃO usar
- Testing pyramid normal (3-Ad Rule gerencia).
- Volume baixo (< 50 conv/semana) → rotação reduz ainda mais.

### Exemplo
- Ad-A (UGC) vs Ad-B (produção studio). 14 dias rotacionados.
- Ad-A (7d ímpares): ROAS 3.2 média, desvio 0.4.
- Ad-B (7d pares): ROAS 2.8 média, desvio 0.9.
- Vencedor A (maior ROAS + estável).

### Anti-padrões
- ❌ Rotação entre 5+ criativos → amostra por criativo fica minúscula.
- ❌ Rotação sem ad scheduling (manual) → inconsistência.

### Conecta com
- Carter #2 (Scientific Hook Testing Protocol), Jeremy #10 (3-Ad Rule)
- Agentes: @nova, @dash

---

## 27. UGC Priority

**Categoria:** Creative / Production
**Quando usar:** Decisão entre estúdio vs UGC.

### Regra
UGC (user-generated content) > produção de estúdio para a maioria das verticais.

### Dados (Haynes 2024-2026)
- UGC tem média 2.3× o ROAS de ads de estúdio em Meta.
- Custo por UGC: R$500-R$1.500. Estúdio: R$5.000-R$30.000.
- Hook Rate médio UGC: 30-35%. Studio: 18-25%.

### Algoritmo
1. Pipeline de UGC (via plataformas como Billo, Insense, UGCEscalator ou criadores diretos).
2. Brief padronizado (usar `tasks/generative/brief-creator.md`).
3. Mínimo 3 UGCs novos/semana (Carter #3).
4. Mix ideal: 70% UGC, 30% estúdio (estúdio ainda serve para "brand moments").

### Quando NÃO priorizar UGC
- Luxury / high-ticket (> R$20k) → estúdio passa premium.
- B2B enterprise → depoimentos em vídeo de executivos.
- Produto complexo com demo técnica.

### Exemplo
- E-com moda R$150 ticket: 10 UGCs/mês via Billo, 2 fotos de estúdio. UGC carrega 85% do spend.
- Curso de R$1.997: 5 UGCs/mês de alunos + 1 vídeo de estúdio do instrutor (autoridade).

### Anti-padrões
- ❌ UGC com atriz óbvia lendo script → destrói autenticidade.
- ❌ Estúdio com produção de R$50k para teste → queima cash antes de validar oferta.

### Conecta com
- `tasks/generative/brief-creator.md`
- Agentes: @nova, @ralph-burns

---

## 28. Iteration Velocity

**Categoria:** Production / Ops
**Quando usar:** Sempre — é o ritmo operacional do Creative Lab.

### Regra
Mínimo 5-10 criativos **novos** por semana (por ad account ativo).

### Algoritmo
1. Pipeline semanal:
   - Segunda: brief de 5 criativos.
   - Terça: produção/UGC em andamento.
   - Quinta: revisão + approval.
   - Sexta: launch.
   - Segunda seguinte: medir semana anterior.
2. Alocar 20% do budget total para testing (Testing Pyramid #11).
3. Criativos vivos por 5-14 dias antes de veredito.

### Por que essa velocidade
- Hook tem shelf-life de 7-14 dias (Carter #3).
- Creative fatigue é inevitável; sem pipeline = performance cai.
- Cada novo criativo = chance de achar um "unicórnio" (ROAS 5x+).

### Exemplo
- Conta de R$60k/mês: 32 criativos/mês (8/semana).
- Dos 32: 18 sem tração (ROAS < 1.5), 10 médios (1.5-2.5), 3 bons (> 2.5), 1 unicórnio (> 4.5).
- O unicórnio paga todo o pipeline.

### Anti-padrões
- ❌ 1-2 criativos novos/mês → creative scarcity → fatigue acelerada.
- ❌ 30 criativos/semana sem brief → qualidade média despenca.
- ❌ Não medir — lançar e esquecer → sem learning cumulativo.

### Conecta com
- Carter #3 (Hook Iteration Velocity), Ralph-Burns (Creative Lab methodology)
- Agentes: @nova, @ralph-burns

---

## Resumo Operacional

### Frameworks por agente

**@nova (Creative):** 1, 6, 7, 8, 9, 10, 27, 28
**@dash (Performance):** 2, 4, 5, 11, 12, 13, 14, 15, 16, 19, 20, 21, 22, 23, 24
**@track (Tracking):** 3, 17, 18
**@midas (Strategy):** 2, 5 (approval S2), 17
**@ralph-burns (Scaling):** 5, 9, 11, 22, 27, 28
**@pedro-sobral (BR):** 25 (Geo Splitting aplicado a regiões BR)
**@depesh-mandalia (Meta Ecom):** 14, 18, 20

### Cadências de uso
- **A cada 1h** (campaign-monitor): #4 (Kill Rules)
- **A cada 6h** (campaign-monitor): #5 (Scale Rules)
- **A cada 24h** (daily audit): #7, #8, #11
- **Semanal** (segunda): #9, #10, #28
- **Quinzenal**: #24
- **Mensal**: #17, #25

---

**Referência:** Use estes frameworks via `*kill-scale`, `*hooks`, `*campaign-structure`, `*budget`, `*scale-check`, `*fatigue`.
