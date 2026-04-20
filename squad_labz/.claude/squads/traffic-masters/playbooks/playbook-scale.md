# Playbook: Campaign Scale

Para campanhas **vencedoras estáveis** que precisam escalar — 2x, 5x, 10x budget.

**Fases:** 1 → 2 → 3 → 4 → 5

## Fase 1: Scale Readiness Check
**Agent:** @dash
**Duração:** 0.5 dia
**Output:** GO / NO-GO decision

Validar **5 critérios críticos** (5/5 devem passar):

1. **ROAS estável**: > 2.5 por 7+ dias consecutivos
2. **Volume de conversões**: 30+ nos últimos 7 dias
3. **Frequency baixa**: < 2.5 (ainda tem audience runway)
4. **Tracking saudável**: EMQ ≥ 7, CAPI operacional
5. **Unit economics OK**: CAC atual < CAC máximo, Payback < meta

**Tasks:**
- `@dash *scale-check` → scale-readiness-check (5 critérios)
- `@track *audit` → confirmar tracking
- `@dash *unit-economics` → revalidar CAC/LTV

**Gate:** **5/5 critérios** aprovados → prossegue. **< 5/5** → volta para Playbook OPTIMIZATION.

---

## Fase 2: Scale Strategy Selection
**Agent:** @midas + @dash
**Duração:** 0.5 dia
**Output:** Plano de escala (vertical vs horizontal)

**Decisão: Vertical ou Horizontal?**

```
VERTICAL (aumentar budget do adset vencedor):
  - Quando: audience ainda tem runway (Frequency < 2.5)
  - Método: +20%/dia (Haynes S1) ou +50% com MIDAS (S2)
  - Rápido, baixo risco

HORIZONTAL (expandir audiências):
  - Quando: adset saturando (Frequency > 3) OU quer diversificar
  - Método: Andromeda — LAL ladder → Interest → Broad
  - Sustentável, maior complexidade

COMBO (recomendado para scale grande):
  - Vertical 50% + Horizontal 50%
  - Preserva vencedor + constrói fundação
```

**Tasks:**
- `@midas *scale-strategy` → decide vertical/horizontal/combo
- `@dash *audience-expansion` → se horizontal

**Gate:** Estratégia respeita Hydra (≤ 60% em 1 canal).

---

## Fase 3: Creative Pipeline Reinforcement
**Agent:** @nova
**Duração:** 2-3 dias (antes de escalar)
**Output:** 5+ criativos novos no pipeline

**Princípio (Brandon Carter #3):** escalar sem criativos novos = acelerar fadiga. Reforçar pipeline ANTES.

- Gerar 5-10 hooks novos (categorias diferentes do vencedor atual)
- Criar 2-3 novos ângulos (rotate off awareness)
- Produzir 3+ UGC variants (2.3x ROAS histórico — Haynes #27)
- Preparar creative calendar para próximas 4 semanas

**Tasks:**
- `@nova *hooks` → 10+ hooks novos
- `@nova *angles` → 3 novos ângulos
- `@nova *brief` → briefs para produção
- `@nova *pipeline` → roadmap 4 semanas

**Gate:** 5+ criativos novos prontos ANTES de apertar botão do scale.

---

## Fase 4: Controlled Scale Execution
**Agent:** @dash + @midas (approvals)
**Duração:** 7-14 dias
**Output:** Budget escalado gradualmente + monitoramento intensivo

**Regras de execução:**

```
DIA 1-3: +20%/dia nos vencedores (Haynes S1 Cap)
  Monitor: ROAS, CPA, Frequency, CPM

DIA 4-7: Se estável, +20%/dia adicional
  Monitor: CPM subindo? Frequency > 3?

DIA 8-14: Abrir audiências horizontais (LAL ladder)
  LAL 2% → testar → LAL 3% → testar → LAL 5%

SEMANA 2+: Se ROAS > 4.0 por 5d:
  → S2 scale +50% (REQUER MIDAS)
```

**Validações a cada dia:**
- Daily Floor mantido (≥ R$50/dia por adset ativo)
- Hydra respeitado (≤ 60% em 1 canal)
- Spending Limit = 2x daily budget
- Attribution drift < 10% (TRUE ROAS vs claimed)

**Tasks:**
- `@dash *budget` → execução diária com logs
- `@dash *kill-scale` → aplicar regras determinísticas
- `@midas *approve` → approvals para S2 (+50%)

**Gate:** Campaign monitor em modo ativo 24/7. Kill-switch disponível.

---

## Fase 5: Platform Depth (se necessário)
**Agent:** Tier 2 specialists
**Duração:** Variable
**Output:** Expansão cross-platform

Se scale atingir teto na plataforma principal:

```
Meta saturando:
  → @ralph-burns (scaling specialist) — Creative Lab + DPI²
  → @depesh-mandalia (Meta ecommerce BPM Method)

Adicionar Google:
  → @kasim-aslam (Google Golden Ratio)

Adicionar YouTube:
  → @tom-breeze (YouTube ADUCATE)

Brasil market:
  → @pedro-sobral (Metodologia ABC)

Lead gen:
  → @nicholas-kusmich (Meta Lead Gen 4-Step)

Customer journey:
  → @molly-pittman (Traffic Engine 9-step)
```

**Task:** `@midas *dispatch-tier2` → roteamento para specialist apropriado

---

## Anti-Padrões (NÃO faça ao escalar)

```
❌ Escalar sem pipeline criativo reforçado (fadiga acelera)
❌ Escalar > 20%/dia sem aprovação MIDAS (Haynes Scale Cap)
❌ Ignorar Frequency subindo (saturação iminente)
❌ Mexer em múltiplas variáveis ao mesmo tempo (Constants vs Variables)
❌ Escalar durante learning phase (destrói aprendizado)
❌ Escalar sem TRUE ROAS validado (attribution drift esconde problemas)
❌ Violar Daily Floor ao distribuir (adset < R$50/dia trava learning)
❌ Apostar tudo em 1 canal > 60% (Hydra — risco existencial)
```

---

## Success Criteria

Scale bem-sucedido quando:
- Budget 2-5x inicial mantido por 30+ dias
- ROAS dentro de 20% do inicial (degradação aceitável)
- Frequency média ≤ 3.0
- Fatigue rate < 25%
- Tracking EMQ ≥ 7 sustentado
- CAC real ≤ CAC máximo sustentável

---

**Duração Total:** 14-30 dias para scale 2-5x seguro
**Agentes envolvidos:** @midas, @dash, @nova, @track + Tier 2 conforme plataforma
**Cadência:** Daily reviews durante scale, weekly após estabilização
