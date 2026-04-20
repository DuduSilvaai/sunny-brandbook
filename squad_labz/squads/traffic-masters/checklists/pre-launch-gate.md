# Checklist: Pre-Launch Gate

**Owner:** @midas
**Quando usar:** Antes de subir uma nova campanha (final Fase 5 do playbook new-campaign-launch)
**Gate:** 100% dos itens devem estar ✅ para liberar launch

---

## 1. Business Context (Fase 0)

- [ ] `business-context.md` preenchido com ≥ 80% dos campos
- [ ] Persona primária definida (demografia + dor + linguagem)
- [ ] Ticket médio documentado
- [ ] CAC alvo documentado
- [ ] ROAS alvo documentado
- [ ] Budget mensal confirmado
- [ ] Plataformas escolhidas (e justificativa)
- [ ] Sign-off pelo stakeholder

## 2. Unit Economics (Fase 1)

- [ ] LTV/CAC ratio calculado e ≥ 3:1 (Hormozi)
- [ ] Payback Period calculado e ≤ 90 dias
- [ ] Break-Even ROAS calculado
- [ ] CAC máximo sustentável definido
- [ ] Margem bruta documentada (para cálculo correto)
- [ ] Funil escolhido (R$17, tráfego direto, Zoom, tripwire, etc.)
- [ ] Conversion rates esperadas por etapa documentadas

## 3. Campaign Structure (Fase 2)

- [ ] CBO vs ABO decidido com justificativa (Haynes)
- [ ] Número de adsets planejado
- [ ] Número de criativos por adset (min 3, recomendado 5)
- [ ] Naming convention aplicada (formato consistente)
- [ ] Budget per adset ≥ R$50/dia (Daily Floor — Moncada #10)
- [ ] Budget total NÃO excede 60% em 1 canal (Hydra — Hormozi #3)
- [ ] Spending Limit configurado = 2x daily budget
- [ ] Audiências definidas (LAL%, Interest stacks, ou Broad)
- [ ] Exclusions configuradas (compradores, funcionários, etc.)

## 4. Creative Assets (Fase 3)

- [ ] Mínimo 3 ângulos únicos (Schwartz awareness match)
- [ ] Mínimo 10 hooks gerados (6 categorias Jeremy Haynes DSL)
- [ ] Primary text dentro de 125 chars (Meta)
- [ ] Headline dentro de 40 chars (Meta)
- [ ] Description dentro de 30 chars (Meta)
- [ ] 3 aspect ratios produzidos (1:1, 4:5, 9:16)
- [ ] Texto on-image < 20% (Meta histórico)
- [ ] Pelo menos 1 UGC variant (2.3x ROAS — Haynes #27)
- [ ] Compliance visual validado (faces, claims, antes/depois)
- [ ] DSL framework aplicado (0-3s hook, 3-15s solve, 15s+ lead)
- [ ] Constants vs Variables respeitado (1 variável por teste — Brandon Carter)

## 5. Tracking Infrastructure (Fase 4)

- [ ] Pixel instalado em todas as páginas do funil
- [ ] 5 eventos configurados (PageView, ViewContent, ATC, IC, Purchase)
- [ ] CAPI funcionando (server-side)
- [ ] Event IDs únicos implementados (dedup)
- [ ] Dedup rate < 5%
- [ ] EMQ (Event Match Quality) ≥ 7
- [ ] Aggregated Event Measurement configurado (iOS14+)
- [ ] Domain verification (Meta Business Manager)
- [ ] Cross-domain tracking configurado (se aplicável)
- [ ] GDPR/LGPD consent implementado
- [ ] Eventos testados em Test Event Manager
- [ ] UTM parameters padronizados

## 6. Approval & Compliance

- [ ] Meta Ads Policy check (produto/claims)
- [ ] Google Ads Policy check (se Google)
- [ ] LGPD compliance (Brasil)
- [ ] Landing page compliance (privacy, terms)
- [ ] Creative compliance (sem promessas absolutas, sem prova falsa)
- [ ] Payment methods ativos na conta
- [ ] Spending Limit disponível no Business Manager
- [ ] Billing OK (sem pagamentos pendentes)

## 7. Monitoring & Alerts (Fase 6 setup)

- [ ] Campaign Monitor configurado (modo observer primeiros 3 dias)
- [ ] Alertas de kill rules habilitados (após day 3)
- [ ] Alertas de tracking health habilitados (6h)
- [ ] Dashboard de métricas configurado
- [ ] Responsável de plantão definido
- [ ] Kill-switch documentado e acessível

---

## Sign-Off

**Data:** ___________________
**Responsável MIDAS:** ___________________
**Aprovação stakeholder:** ___________________

**Resultado:**
- [ ] ✅ **LIBERADO PARA LAUNCH** — todos os itens ✅
- [ ] ❌ **BLOQUEADO** — retornar para fase com item faltante

**Observações:**
_____________________________________________

---

**Violações críticas que BLOQUEIAM launch automaticamente:**
- EMQ < 7
- CAPI não operacional
- LTV/CAC < 3:1
- Payback > 90 dias
- Daily Floor violado (algum adset < R$50/dia)
- Hydra violado (>60% em 1 canal)
- Creative compliance failed
