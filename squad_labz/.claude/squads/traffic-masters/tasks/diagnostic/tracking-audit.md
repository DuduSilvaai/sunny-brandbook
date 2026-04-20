# Task: Tracking Audit

> **Owner:** @track
> **Frameworks:** Meta CAPI Spec + Jeremy Haynes Pixel Hierarchy (#18) + iOS14+ AEM
> **Inputs:** acesso a Meta Events Manager, GA4 (se aplicável), site URL

## Quando Executar

ANTES de qualquer go-live (quality gate). Trimestralmente em manutenção. Sempre que ROAS Meta vs backend diverge > 20%. Sempre que cliente reporta "conversões não aparecem".

## Audit em 7 Etapas

### Etapa 1: Pixel Installation
```
[ ] Pixel ID criado no Meta BM
[ ] Código instalado em todas as páginas (head)
[ ] Meta Pixel Helper extension confirma fire
[ ] Sem duplicação (mesmo pixel 2x na página)
```

### Etapa 2: Standard Events
```
[ ] PageView                  fire em todas páginas
[ ] ViewContent               fire em PDP/sales pages
[ ] AddToCart                 fire em add to cart action
[ ] InitiateCheckout          fire em checkout step 1
[ ] Purchase                  fire em order confirmation
[ ] Lead (se aplicável)       fire em form submit
```

### Etapa 3: CAPI (Conversions API)
```
[ ] Server endpoint configurado
[ ] Pelo menos Purchase enviado server-side
[ ] event_id matching client + server (deduplication)
[ ] Test events visíveis no Events Manager
[ ] Latência < 60s (eventos chegam quase real-time)
```

### Etapa 4: Deduplication
```
[ ] event_id presente em ambos (client + server)
[ ] event_id é UUID único por evento
[ ] Janela de dedup respeitada (Meta dedup auto via event_id + event_name + event_time ±5min)
[ ] Test: 1 purchase real → aparece 1x no Events Manager (não 2x)
```

### Etapa 5: EMQ (Event Match Quality)
```
Score por evento (Events Manager → Diagnostics):
  Purchase:           {N}/10  → target ≥ 7
  AddToCart:          {N}/10
  ViewContent:        {N}/10
  Lead:               {N}/10

Parâmetros enviados:
  [ ] external_id ou fbp/fbc      (obrigatório)
  [ ] client_ip_address           (obrigatório)
  [ ] client_user_agent           (obrigatório)
  [ ] em (email SHA-256)          (alta prioridade — eleva 2-3 pontos)
  [ ] ph (phone SHA-256)          (alta prioridade)
  [ ] fn / ln (nome SHA-256)      (média)
  [ ] ct / st / zp / country      (média)
```

### Etapa 6: Cross-Domain (se aplicável)
```
[ ] Pixel + CAPI no domínio principal
[ ] Pixel + CAPI no domínio de checkout (se diferente)
[ ] Cookies cross-domain (fbp passado entre domínios)
[ ] Test: jornada completa rastreada em Events Manager
```

### Etapa 7: Atribuition Window + AEM (iOS14+)
```
[ ] Default: 7-day click + 1-day view (Meta atual)
[ ] Aggregated Event Measurement: 8 eventos prioritários configurados
[ ] Domain verified em Meta BM
[ ] Eventos prioritários ordenados por valor de negócio
```

## Output (use template TRACK *audit)

Sempre incluir:
- Status emoji por etapa (✅ / 🟠 / ❌)
- EMQ score por evento
- Hierarchy gaps (qual evento no caminho mas não dispara)
- Veredito: GO-LIVE READY | NEEDS FIXES | CRITICAL — BLOQUEIA CAMPANHA
- Top 3 fixes priorizados

## Fixes Comuns

| Problema | Fix |
|----------|-----|
| Pixel não fire | Verificar se code está antes do `</head>` |
| Purchase não fire | Trigger no order_complete page (não no submit) |
| EMQ < 5 | Adicionar email + phone hashado |
| Dedup falhando | Verificar event_id matching exato |
| Server events sem chegar | Verificar access token + permissão CAPI |
| iOS14+ underreporting | Configurar AEM + verificar domain |

## Constraints

- NUNCA aprove campanha live com EMQ < 7
- NUNCA aceite "tracking parcial" como OK para Purchase
- SEMPRE valide com test events ANTES de go-live
- SEMPRE documente o que está rastreado (e o que não)
- NUNCA exponha PII unhashed em logs
