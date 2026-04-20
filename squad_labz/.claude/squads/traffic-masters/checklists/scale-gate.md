# Checklist: Scale Gate

**Owner:** @dash (validação) + @midas (approval)
**Quando usar:** Antes de executar scale significativo (>2x budget ou cross-channel)
**Gate:** 5 critérios críticos — **TODOS** devem passar (5/5)

---

## Critério 1: ROAS Estável

- [ ] ROAS > 2.5 nos últimos 7 dias consecutivos
- [ ] Desvio padrão do ROAS < 0.5 (estabilidade)
- [ ] Nenhum dia isolado com ROAS < 1.5 nos últimos 7d
- [ ] TRUE ROAS (após attribution analysis) confirma claimed ROAS (drift < 10%)

**Se ❌:** volte para Playbook OPTIMIZATION antes de escalar.

## Critério 2: Volume de Conversões Suficiente

- [ ] Mínimo 30 conversões nos últimos 7 dias (validation da S1)
- [ ] Mínimo 50 conversões nos últimos 7 dias (se intenção é S2 +50%)
- [ ] Algoritmo saiu do learning phase (Meta: 50 conversões/7d)
- [ ] Dados estatisticamente significativos (não é noise)

**Se ❌:** acumule volume antes de escalar.

## Critério 3: Frequency Baixa (Audience Runway)

- [ ] Frequency média < 2.5 no adset vencedor
- [ ] CPM estável (sem crescimento > 20% nos últimos 7d)
- [ ] Audiência restante > 200k pessoas (ou 1% do total)
- [ ] CTR não mostra queda abrupta (sem sinal de saturação)

**Se ❌:** expandir audiência (playbook audience-expansion) ANTES de aumentar budget.

## Critério 4: Tracking Saudável

- [ ] EMQ ≥ 7 sustentado nos últimos 7 dias
- [ ] CAPI operacional (sem falhas nos últimos 48h)
- [ ] Dedup rate < 5%
- [ ] Todos os 5 eventos funcionando (PageView → Purchase)
- [ ] Attribution coerente entre plataforma e analytics próprio
- [ ] Nenhum alert de tracking ativo

**Se ❌:** @track *audit → *capi antes de escalar. Escalar com tracking quebrado = GIGO.

## Critério 5: Unit Economics Mantida

- [ ] CAC real ≤ CAC máximo sustentável (Hormozi)
- [ ] Payback Period dentro da meta (≤ 90 dias típico)
- [ ] Margem bruta mantida (sem degradação de oferta)
- [ ] LTV/CAC ratio ≥ 3:1 ainda válido
- [ ] Dados financeiros atualizados (não dependendo de hipóteses antigas)

**Se ❌:** revisar unit economics (`@dash *unit-economics`) antes de escalar.

---

## Creative Pipeline (Pré-Scale)

**Antes de apertar o botão de scale, validar:**

- [ ] 5+ criativos novos prontos no pipeline (Brandon Carter #3)
- [ ] Ângulos rotating (mínimo 3 ângulos diferentes do vencedor)
- [ ] UGC variants disponíveis (3+)
- [ ] Creative calendar para próximas 4 semanas definido
- [ ] Fatigue detector rodando diariamente

**Princípio:** Scale sem pipeline = acelerar fadiga do vencedor. NUNCA escale sem reforço criativo pronto.

---

## Validações de Execução (Durante Scale)

Toda operação de scale deve respeitar:

- [ ] Aumento ≤ 20%/dia (Haynes S1 Cap) OU aprovação MIDAS para S2 (+50%)
- [ ] Daily Floor mantido (≥ R$50/dia por adset ativo)
- [ ] Hydra respeitado (≤ 60% em 1 canal)
- [ ] Spending Limit atualizado (= 2x novo daily budget)
- [ ] Attribution drift monitorado diariamente (< 10%)
- [ ] Campaign Monitor ativo 24/7
- [ ] Kill-switch acessível (MIDAS pode interromper)

---

## Black Listing (NÃO escale se...)

- [ ] ❌ Learning phase ainda ativo
- [ ] ❌ Evento crítico em andamento (Black Friday, lançamento) sem plano específico
- [ ] ❌ Plataforma com política instável (mudança recente de algoritmo)
- [ ] ❌ Dados financeiros do cliente desatualizados
- [ ] ❌ Equipe criativa saturada (sem pipeline)
- [ ] ❌ Tracking com alert ativo nos últimos 7d

---

## Sign-Off

**Data:** ___________________
**Validação DASH (5 critérios):** ___________________
**Approval MIDAS (se > +20%/dia):** ___________________

**Resultado:**
- [ ] ✅ **GO SCALE** — 5/5 critérios, pipeline pronto, monitoring ativo
- [ ] ⚠️ **GO PARCIAL** — escalar só vertical S1 (+20%/dia), sem horizontal ainda
- [ ] ❌ **NO-GO** — retornar para OPTIMIZATION até critérios atingidos

**Estratégia escolhida:**
- [ ] Vertical apenas
- [ ] Horizontal apenas (Andromeda)
- [ ] Combo 50/50 (recomendado para >2x scale)

**Magnitude:**
- [ ] +20%/dia (S1 — automático)
- [ ] +50% pontual (S2 — requer MIDAS)
- [ ] Horizontal LAL ladder (2→3→5)
- [ ] Cross-channel (dispatch Tier 2)

**Observações:**
_____________________________________________
