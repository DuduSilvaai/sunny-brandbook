# Brandon Carter — 3 Frameworks (6% do squad)

> **Owner agent:** @nova
> **Source:** Scientific Hook Testing + Constants vs Variables + Iteration Velocity
> **Aplicabilidade:** Toda criação e testing criativo (Meta, TikTok, YouTube).

---

## 1. Constants vs Variables Method

**Categoria:** Testing / Experimental Design
**Quando usar:** Em todo teste A/B criativo, audiência ou oferta.

### Princípio
Em qualquer experimento, separar:
- **CONSTANTES** (não mexer): audiência, posicionamento, oferta, página de destino, budget.
- **VARIÁVEIS** (testar 1 por vez): hook, ângulo, formato, CTA, prova, thumbnail.

**Regra de ouro:** Mudar 2+ variáveis simultaneamente = teste inválido. Não há como atribuir o resultado.

### Algoritmo
1. Antes de lançar teste: escrever a **1 variável** que está testando.
2. Congelar tudo o resto (copy mesmo, audiência mesma, budget igual).
3. Rodar até significância (Carter #2 — 1.000 imp ou 5 dias).
4. Decidir: promover vencedor, matar perdedor.
5. Fase 2: testar próxima variável com vencedor como novo constante.

### Exemplos de pares constante/variável
| Teste | Constante | Variável |
|-------|-----------|----------|
| Hook testing | Audiência, oferta, formato | 3-5 hooks diferentes |
| Audience testing | Criativo, oferta | 3 audiências (LAL, Int, Broad) |
| Offer testing | Criativo, audiência | 2 ofertas (R$17 vs R$27) |
| Thumbnail testing | Todo o vídeo | 3 thumbnails |
| CTA testing | Todo o ad | 2 CTAs |

### Anti-padrões (par falso)
- ❌ Testar hook novo + nova audiência juntos → qual ganhou? Não sabe.
- ❌ Mudar copy + thumbnail em "pequenos ajustes" simultâneos → se resultado mudou, qual elemento foi?
- ❌ Rebalancear budget entre adsets no meio do teste → quebra a "constante" budget.
- ❌ Trocar oferta no meio do mês → séries anteriores ficam inválidas para comparação.

### Exemplo numérico — erro típico vs correto
**Errado:**
- Semana 1: Ad-A (hook PROBLEMA, LAL1%, R$200/dia) — ROAS 2.1.
- Semana 2: Ad-B (hook CURIOSIDADE, LAL3%, R$300/dia) — ROAS 3.1.
- Conclusão: "B é melhor" — mas foi o hook? A audiência? O budget?

**Certo:**
- Fase 1: Ad-A e Ad-B no mesmo adset (hooks diferentes, LAL1% constante, R$100 cada). B vence.
- Fase 2: Hook B em LAL1% e LAL3% (constantes tudo). LAL3% vence.
- Fase 3: Combinação Hook-B + LAL3% com budget escalado.

### Conecta com
- Carter #2 (Scientific Hook Testing), Moncada #8 (Creative-Audience Matrix)
- Agentes: @nova (owner), @dash

---

## 2. Scientific Hook Testing Protocol

**Categoria:** Testing / Creative
**Quando usar:** Sempre que lança 5-10 hooks novos (cadence Carter #3 + iteração semanal).

### Setup
```
- 1 audiência (constante) — geralmente LAL-Purchaser ou Broad quente
- 1 oferta (constante) — landing page igual
- 5-10 HOOKS distintos (variável) — distribuídos nas 6 categorias (Haynes #6)
- Mesmo formato (todos vídeo OU todos imagem)
- Budget igual por hook (CBO com cap mínimo OU ABO com R$50-100/adset)
- Duração: 3-5 dias OU 1.000 impressões/hook (o que vier primeiro)
```

### Decisão por Hook Rate
| Hook Rate | Status | Ação |
|-----------|--------|------|
| > 35% | Unicórnio | Manter, escalar (S1), clonar estrutura |
| 25-35% | Vencedor | Manter em rotação principal |
| 15-25% | Fronteira | Iterar (mudar primeiros 3s apenas) |
| < 15% | Matar | K4 obrigatório |

### Output esperado
- 1-2 hooks vencedores entram em rotação principal.
- 2-3 hooks em fronteira voltam para a mesa de iteração (Carter #1 — mudar só os 3s).
- 5-6 hooks mortos → aprendizado (documentar o que NÃO funcionou).

### Exemplo numérico completo (7 dias, 10 hooks)
Adset 1 (CBO R$500/dia), 10 ads em rotação, audiência LAL1-Purchaser, oferta curso R$997.

| Ad # | Categoria | Impressões | 3-sec views | Hook Rate | CTR | ROAS | Decisão |
|------|-----------|-----------|-------------|-----------|-----|------|---------|
| 1 | PROBLEMA-A | 3.200 | 580 | 18% | 0.9% | 1.1 | Iterar (fronteira) |
| 2 | PROBLEMA-B | 2.800 | 220 | 8% | 0.4% | 0.3 | **MATAR (K4)** |
| 3 | RESULTADO-A | 3.500 | 1.050 | 30% | 2.1% | 3.2 | **Vencedor** |
| 4 | RESULTADO-B | 3.100 | 710 | 23% | 1.5% | 2.3 | Fronteira |
| 5 | CURIOSIDADE-A | 3.400 | 1.360 | 40% | 3.2% | 4.1 | **UNICÓRNIO** |
| 6 | CURIOSIDADE-B | 2.900 | 330 | 11% | 0.5% | 0.6 | Matar |
| 7 | CONTROVERSO-A | 3.000 | 780 | 26% | 1.8% | 2.8 | Vencedor |
| 8 | CONTROVERSO-B | 2.700 | 380 | 14% | 0.7% | 0.9 | Matar |
| 9 | PROVA-A | 3.100 | 560 | 18% | 1.1% | 1.4 | Fronteira |
| 10 | TUTORIAL-A | 2.800 | 400 | 14% | 0.7% | 0.8 | Matar |

**Resultados:**
- 1 unicórnio (CURIOSIDADE-A) + 2 vencedores (RESULTADO-A, CONTROVERSO-A).
- 3 fronteiras para iterar (mudar 3s).
- 4 mortos (aprendizado: PROBLEMA-B "cansado de falhar" genérico não performa; TUTORIAL-A formato texto estático cansa).

**Próxima semana:** escalar CURIOSIDADE-A (S3 — duplicar LAL), iterar fronteiras, produzir 5 novos hooks (Carter #3).

### Anti-padrões
- ❌ Decidir com < 500 impressões → ruído estatístico.
- ❌ Budget desigual entre hooks → vencedor artificial.
- ❌ Hooks todos da mesma categoria → testa "qual palavra", não "qual ângulo" (Haynes #6).
- ❌ Mudar audiência no meio do teste.

### Conecta com
- `tasks/generative/hook-generator.md`, Jeremy #6 (Hook Categories), Jeremy #7 (Hook Rate Optimization)
- Agentes: @nova (owner), @dash (métricas)

---

## 3. Hook Iteration Velocity

**Categoria:** Production / Ops
**Quando usar:** Sempre — cadência contínua de produção.

### Regra
**3 novos hooks por semana mínimo**, mesmo se há vencedor.

### Razão
Hooks têm shelf-life de 7-14 dias antes de fadiga acentuada. Sem pipeline contínuo:
- Dia 7: vencedor começa a fatigar (Hook Rate cai 15-20%).
- Dia 10: CTR despenca.
- Dia 14: ROAS colapsa sem backup pronto.

Com 3/semana, a cada 2 semanas há 6 novos candidatos a vencedor, garantindo substituição antes da queda.

### Calendário semanal (exemplo operacional)
| Dia | Ação | Output |
|-----|------|--------|
| Segunda | Brief de 3 hooks novos (distribuídos em categorias) | 3 briefs |
| Terça | Captura/produção (UGC ou estúdio) | 3 vídeos raw |
| Quarta | Edição + thumbnail | 3 ads prontos |
| Quinta | Upload + approval | 3 ads no Meta Ads Manager |
| Sexta | Launch (novo testing adset) | Teste ativo |
| Sábado-domingo | Observação passiva | Dados acumulando |
| Segunda seguinte | Análise + decisão (Carter #2) | Promove/itera/mata |

### Exemplo de pipeline de 4 semanas
| Semana | Novos hooks | Vencedores encontrados | Custo produção (UGC R$700/hook) |
|--------|-------------|-----------------------|--------------------------------|
| 1 | 3 | 1 | R$2.100 |
| 2 | 3 | 1 | R$2.100 |
| 3 | 3 | 0 (todos fracos) | R$2.100 |
| 4 | 3 | 2 | R$2.100 |
| **Total** | **12** | **4 vencedores** | **R$8.400** |

Se cada vencedor gera R$30k-60k de revenue/mês enquanto dura, R$8.400 de produção é trivial.

### Quando **aumentar** a velocidade
- Scale agressivo (Haynes S2) → subir para 5-7 hooks/semana.
- Audiência muito pequena (< 1M) → fatigue acelerada → 5/semana.
- Mercado sazonal (Black Friday) → dobrar pipeline nas 2 semanas antes.

### Anti-padrões
- ❌ 1 hook novo/mês → creative scarcity → fatiga acelerada → pipeline morre.
- ❌ 15 hooks/semana sem brief → qualidade média despenca → testing vira ruído.
- ❌ Pausar pipeline porque "tem vencedor bom" → quando vencedor morre, há 0 em produção.
- ❌ Produzir em massa sem observar resultado → mesmos erros repetidos.

### Conecta com
- Haynes #28 (Iteration Velocity — mesmo framework com ênfase diferente)
- Haynes #9 (Creative Refresh Cycle)
- Carter #1 (Constants vs Variables), Carter #2 (Scientific Hook Testing)
- Agentes: @nova (owner), @ralph-burns (Creative Lab methodology)

---

## Resumo Operacional

### Frameworks por agente
- **@nova**: 1, 2, 3 (owner em todos)
- **@dash**: 1 (para isolar variáveis em budget/scaling)
- **@ralph-burns**: 3 (Creative Lab = operacionaliza esse cadence)

### Cadência
- **Diária:** respeitar #1 em toda mudança de configuração.
- **Semanal:** rodar #2 nos testes; produzir 3 novos via #3.
- **Mensal:** revisar histórico de vencedores para padrões (quais categorias ganham?).

---

**Referência:** Use estes frameworks via `*hooks`, `*creative-fatigue-detector`, `*angles`, `*brief`.
