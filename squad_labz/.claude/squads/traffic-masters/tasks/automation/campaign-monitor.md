# Task: Campaign Monitor (Loop Autônomo)

> **Owner:** @midas (orquestrador) executa, @dash (dados) + @nova (criativo) + @track (pixel) fornecem sinais
> **Frameworks:** Jeremy Haynes Kill/Scale Rules (#4, #5) + Brian Moncada Daily Ops (#10) + Haynes Scale Frequency Cap (#12)
> **Inputs:** campanhas ativas, janela de monitoramento, permissões de auto-execução

## O Problema

Decisões de tráfego exigem vigilância 24/7. Humanos dormem. Orçamento queima. Adsets ruins ficam rodando. **Campaign Monitor** = loop autônomo que executa diagnósticos periódicos, aplica regras determinísticas, e dispatcha ações ou escalations.

## Modelo de Execução

```
┌─────────────────────────────────────────────┐
│  CAMPAIGN MONITOR LOOP                      │
│  ┌────────────────────────────────────────┐ │
│  │  CADÊNCIA: a cada 1h, 6h, 24h         │ │
│  │  ┌──────────────────────────────────┐ │ │
│  │  │  1. FETCH dados (plataformas)    │ │ │
│  │  │  2. EVALUATE rules (kill/scale)  │ │ │
│  │  │  3. DETECT fatigue               │ │ │
│  │  │  4. VALIDATE tracking            │ │ │
│  │  │  5. ACT (pause/scale/alert)      │ │ │
│  │  │  6. LOG decisões                 │ │ │
│  │  │  7. DISPATCH downstream          │ │ │
│  │  └──────────────────────────────────┘ │ │
│  └────────────────────────────────────────┘ │
└─────────────────────────────────────────────┘
```

## Cadência por Tipo de Check

| Check | Frequência | Owner | Ação típica |
|-------|-----------|-------|------------|
| **Kill Rules (K1-K5)** | 1h | @dash | Pause imediato se ROAS < 0.5 ou CPA > 2x target |
| **Scale Rules (S1-S3)** | 24h | @dash | +20% budget se ROAS > 2.5 estável 3d |
| **Creative Fatigue** | 24h | @nova | Refresh se contador ≥ 3/5 |
| **Tracking Health** | 6h | @track | Alert se EMQ < 7 ou eventos quebrados |
| **Budget Pacing** | 6h | @dash | Realocar se canal underdelivering |
| **Attribution Drift** | 7d | @dash | Recalcular TRUE ROAS |
| **Business Context** | 30d | @midas | Re-validar targets (CAC/LTV) |

## Algoritmo do Loop

```
FUNÇÃO campaignMonitor(cadencia):

  1. FETCH:
     dados = pegar_metricas_das_plataformas(últimas_24h)
     campanhas = filtrar(dados, status == ATIVO)
     
  2. EVALUATE KILL RULES (se cadencia == 1h):
     PARA CADA adset em campanhas:
       SE K1 (ROAS < 0.5):        executar_pause(adset, "K1"); log; dispatch @dash
       SE K2 (CPA > 2x target):   executar_pause(adset, "K2"); log
       SE K3 (CTR < 0.5%):        executar_pause_ad(adset, "K3"); log
       SE K4 (Hook Rate < 15%):   executar_pause_ad(adset, "K4"); dispatch @nova *hooks
       SE K5 (Frequency > 4):     executar_pause(adset, "K5"); dispatch @dash *expand
  
  3. EVALUATE SCALE RULES (se cadencia == 24h):
     PARA CADA adset em campanhas:
       SE S1 (ROAS > 2.5 por 3d):  scale(+20%); log
       SE S2 (ROAS > 4.0 por 5d):  escalate_midas(+50%); log
       SE S3 (ROAS > 3.0 + Freq<2): duplicate_lal(adset); log
  
  4. DETECT FATIGUE (se cadencia == 24h):
     PARA CADA criativo ativo > 7 dias:
       resultado = creative_fatigue_detector(criativo)
       SE resultado.status == "FADIGA CONFIRMADA":
         dispatch @nova *refresh imediato
       SE resultado.status == "WATCH":
         dispatch @nova *hooks (preparar)
  
  5. VALIDATE TRACKING (se cadencia == 6h):
     health = tracking_audit()
     SE health.EMQ < 7:
       alert(@track, "EMQ caiu para {X} — revisar parâmetros")
     SE health.eventos_broken:
       alert(@track, "Eventos quebrados: {lista}")
     SE health.dedup > 5%:
       alert(@track, "Duplicação > 5% — revisar event_id")
  
  6. LOG:
     registrar_decisoes_com_timestamp()
     atualizar_dashboard()
  
  7. DISPATCH:
     PARA CADA ação pendente aprovação:
       notificar_midas_para_review()
     PARA CADA ação downstream:
       dispatch_agente_apropriado()

FIM
```

## Output Template (Relatório por Ciclo)

```
🤖 CAMPAIGN MONITOR — Ciclo {N}
═══════════════════════════════════════════
TIMESTAMP:   {ISO 8601}
CADÊNCIA:    {1h | 6h | 24h}
DURAÇÃO:     {segundos}

ESCOPO:
  Campanhas analisadas:  {N}
  Adsets analisados:     {N}
  Ads analisados:        {N}
  Plataformas:           {Meta, Google, YouTube...}

─────────────────────────────────────────────
KILL RULES (1h)
─────────────────────────────────────────────
  K1 (ROAS < 0.5):         {N} acionadas → paused
  K2 (CPA > 2x):           {N} acionadas → paused
  K3 (CTR < 0.5%):         {N} acionadas → paused
  K4 (Hook Rate < 15%):    {N} acionadas → paused + refresh
  K5 (Frequency > 4):      {N} acionadas → paused + expand
  
  PENDENTES (janela não atingida): {N}

─────────────────────────────────────────────
SCALE RULES (24h)
─────────────────────────────────────────────
  S1 (+20%):   {N} adsets escaladas
  S2 (+50%):   {N} adsets pending MIDAS approval
  S3 (duplicate LAL): {N} novos adsets criados

─────────────────────────────────────────────
CREATIVE FATIGUE (24h)
─────────────────────────────────────────────
  FADIGA CONFIRMADA: {N} criativos (refresh disparado)
  WATCH:             {N} criativos (hooks preparados)
  SAUDÁVEL:          {N} criativos

─────────────────────────────────────────────
TRACKING HEALTH (6h)
─────────────────────────────────────────────
  EMQ médio:          {valor} [{✅ ≥7 | 🚨 <7}]
  Eventos OK:         {N}/{total}
  Dedup rate:         {%}  [{✅ <5% | 🚨 ≥5%}]
  CAPI status:        {✅ operacional | 🚨 failing}

─────────────────────────────────────────────
AÇÕES EXECUTADAS (auto)
─────────────────────────────────────────────
  - PAUSE adset "{nome}" (K1: ROAS 0.3)
  - SCALE adset "{nome}" +20% (S1: ROAS 2.8 estável 3d)
  - REFRESH criativo "{nome}" (fatigue 4/5)
  - ... 

─────────────────────────────────────────────
AÇÕES PENDENTES (requer humano/MIDAS)
─────────────────────────────────────────────
  - SCALE +50% adset "{nome}" → aprovação MIDAS
  - Cross-channel rebalance → revisar
  - EMQ degradado → @track investigar

─────────────────────────────────────────────
DISPATCH DOWNSTREAM
─────────────────────────────────────────────
  → @nova *hooks: 3 criativos em WATCH
  → @nova *refresh: 2 criativos em FADIGA
  → @track: 1 alerta EMQ
  → @midas: 2 approvals pending

PRÓXIMA EXECUÇÃO: {timestamp + cadência}
```

## Anti-Padrões (NÃO FAÇA)

```
❌ Loop executar ação sem log rastreável
❌ Cadência 1h para scale rules (scale precisa de 24h+ de dados)
❌ Auto-scale > 50% sem aprovação MIDAS (viola Haynes S2)
❌ Aplicar regras durante Black Friday/eventos críticos (requer MIDAS override)
❌ Ignorar janela mínima (K3 exige 500 impressões; K2 exige 1.000)
❌ Monitor quebrar silenciosamente (sempre alertar se fetch falha)
❌ Pausar sem notificar (todo pause crítico → dispatch @midas)
```

## Kill Switch

```
EMERGENCY STOP:
  Se MIDAS detectar:
    - Claimed ROAS agregado < 1.0 (conta inteira sangrando)
    - Spend 4x budget planejado
    - Plataforma retornando dados inconsistentes
  
  AÇÃO:
    1. Pausar TODAS as campanhas ativas
    2. Alert user/owner (priority HIGH)
    3. Loop em modo observer (não executar ações até liberação)
    4. Log completo do estado
```

## Integração com Playbooks

```
TRIGGER EVENTS → PLAYBOOK AUTOMÁTICO:

Se 3+ K1 em 24h em mesma campanha → PLAYBOOK OPTIMIZATION
Se 3+ S1 em 3 dias seguidos     → PLAYBOOK SCALE
Se tracking EMQ < 5 por 48h     → PLAYBOOK TRACKING-RECOVERY
Se fatigue confirmada em 3+ ads → PLAYBOOK CREATIVE-REFRESH
```

## Constraints

- NUNCA executar ação sem log rastreável (timestamp + snapshot + razão + framework)
- NUNCA violar janelas mínimas (K3: 500 imp, K2: 1.000 imp, S1: 3d + 30 conversões)
- NUNCA auto-scale > 50% (SEMPRE escalate MIDAS para S2)
- NUNCA operar durante eventos críticos (Black Friday, lançamento) sem MIDAS override
- NUNCA pausar silenciosamente (todo pause → log + dispatch)
- SEMPRE validar tracking saudável ANTES de confiar em métricas (GIGO protection)
- SEMPRE emitir relatório por ciclo (transparência = auditabilidade)
- SEMPRE kill-switch disponível (MIDAS pode interromper loop a qualquer momento)
