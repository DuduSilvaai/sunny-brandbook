# Checklist: Tracking Gate

**Owner:** @track
**Quando usar:** Antes de launch (pre-launch-gate) E auditorias regulares (semanal/quinzenal)
**Gate:** EMQ ≥ 7 + CAPI operacional + dedup < 5% — **OBRIGATÓRIO** para qualquer decisão baseada em dados

---

## 1. Pixel Installation

- [ ] Pixel base instalado em TODAS as páginas do domínio
- [ ] Pixel ID correto (conferir no Business Manager)
- [ ] Pixel carregando sem erros (Chrome DevTools Network)
- [ ] Pixel Helper Chrome extension valida as páginas principais
- [ ] Nenhum pixel duplicado (double-firing)
- [ ] GTM (se usado) configurado corretamente
- [ ] CSP (Content Security Policy) permite scripts da Meta

## 2. Hierarquia de Eventos (5 eventos mínimos)

Configuração correta do funil:

| # | Evento | Disparo | Parâmetros Obrigatórios |
|---|--------|---------|------------------------|
| 1 | **PageView** | toda página | — |
| 2 | **ViewContent** | página de produto / LP | content_ids, content_type, value, currency |
| 3 | **AddToCart** (ATC) | adicionar ao carrinho | content_ids, value, currency |
| 4 | **InitiateCheckout** (IC) | iniciar checkout | content_ids, value, currency, num_items |
| 5 | **Purchase** | conversão completa | content_ids, value, currency, order_id |

- [ ] Todos os 5 eventos disparando
- [ ] Parâmetros obrigatórios preenchidos para cada
- [ ] Valores monetários em moeda correta (BRL, USD, etc.)
- [ ] Order ID único no Purchase (dedup upstream)
- [ ] Content IDs consistentes entre ViewContent / ATC / IC / Purchase

## 3. Conversion API (CAPI) — Server-Side

- [ ] CAPI implementado (server-side events)
- [ ] Access Token válido e não expirado
- [ ] Todos os 5 eventos também no CAPI (espelhando browser)
- [ ] Event ID único por evento (UUID)
- [ ] Mesmo Event ID no browser e server (para dedup)
- [ ] User data rico: email (hashed), phone (hashed), external_id, client_ip, user_agent, fbp, fbc
- [ ] Event time dentro de 7 dias (Meta limite)
- [ ] Data processing options configurado (LGPD/CCPA)
- [ ] Test Event Code testado antes de produção
- [ ] CAPI Gateway OU integração direta funcionando

## 4. Deduplication

- [ ] Event ID idêntico no pixel (browser) e CAPI (server)
- [ ] Dedup rate < 5% (Meta Events Manager)
- [ ] Não mais que 5% de eventos "não correspondidos"
- [ ] Deduplicação testada com Test Event

## 5. Event Match Quality (EMQ)

- [ ] EMQ score ≥ 7 para todos os eventos principais
- [ ] Purchase event EMQ ≥ 8 (ideal)
- [ ] Principais fontes de EMQ enviadas:
  - [ ] email (hash SHA-256)
  - [ ] phone (hash SHA-256)
  - [ ] client_ip_address
  - [ ] client_user_agent
  - [ ] fbp (Facebook Browser ID)
  - [ ] fbc (Facebook Click ID)
  - [ ] external_id
- [ ] First name + last name hashed (quando disponível)
- [ ] Geographic data (city, state, country, zip) enviada

## 6. iOS 14+ Aggregated Event Measurement (AEM)

- [ ] Domain verification completo (DNS TXT record OU meta tag)
- [ ] Até 8 eventos configurados no Events Manager (priorizados)
- [ ] Purchase como evento #1 (prioridade máxima)
- [ ] Ordem de prioridade reflete funil (Purchase > IC > ATC > ViewContent)
- [ ] Value optimization configurado (se aplicável)
- [ ] Conversion window respeitada

## 7. Cross-Domain & UTM

- [ ] UTM parameters padronizados (utm_source, utm_medium, utm_campaign, utm_content, utm_term)
- [ ] UTM capturados no event data (custom parameters)
- [ ] Cross-domain tracking configurado se funil tem múltiplos domínios
- [ ] fbclid preservado durante navegação
- [ ] Link tags (fbc, gclid) corretos

## 8. GDPR / LGPD Compliance

- [ ] Cookie consent banner implementado
- [ ] Pixel bloqueado até consent (Brasil, Europa)
- [ ] Data Processing Options configurado (LDU, DPO)
- [ ] Privacy Policy menciona Meta/Facebook
- [ ] Opt-out mechanism disponível
- [ ] Minors protection (idade verificada se aplicável)

## 9. Monitoring & Alerts

- [ ] Test Events Manager ativo e sem erros nos últimos 24h
- [ ] Events Manager dashboard monitorado diariamente
- [ ] Alerts configurados para:
  - [ ] Queda abrupta de eventos (> 20%)
  - [ ] EMQ caindo abaixo de 7
  - [ ] CAPI retornando erros > 1%
  - [ ] Dedup rate > 5%
- [ ] Responsável de plantão (@track) definido

## 10. Platform-Specific (se aplicável)

### Meta
- [ ] Business Manager verificado
- [ ] Access à conta correta
- [ ] Catalogs conectados (e-commerce)
- [ ] Dynamic Product Ads funcionando

### Google Ads
- [ ] Conversion tracking instalado
- [ ] Google Tag Manager correto
- [ ] Enhanced Conversions habilitado
- [ ] GA4 + Google Ads linkados

### TikTok
- [ ] Events API configurado
- [ ] Advanced Matching ativo

---

## Pontuação Final (Health Score)

| Componente | Peso | Status |
|------------|------|--------|
| Pixel base | 10% | [ ] ✅ / ❌ |
| 5 eventos hierarquia | 20% | [ ] ✅ / ❌ |
| CAPI server-side | 25% | [ ] ✅ / ❌ |
| Deduplication | 15% | [ ] ✅ / ❌ |
| EMQ ≥ 7 | 20% | [ ] ✅ / ❌ |
| AEM configurado | 5% | [ ] ✅ / ❌ |
| Compliance | 5% | [ ] ✅ / ❌ |

**Score mínimo aceitável:** 90%

---

## Sign-Off

**Data auditoria:** ___________________
**Próxima auditoria:** ___________________
**Responsável TRACK:** ___________________

**Resultado:**
- [ ] ✅ **APROVADO** — score ≥ 90%, EMQ ≥ 7, CAPI operacional
- [ ] ⚠️ **CONCERNS** — score 70-89%, itens menores para corrigir
- [ ] ❌ **FAIL** — score < 70%, bloqueio para decisões baseadas em dados

**Bugs encontrados:**
_____________________________________________

**Ações corretivas (com deadline):**
_____________________________________________

---

**REGRA CRÍTICA:**
Se este checklist falhar (FAIL), **NENHUMA decisão de scale/budget/optimization** pode ser tomada até a correção. Dados ruins = Garbage In, Garbage Out. Preserve o rigor.
