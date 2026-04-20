# Task: Creative Fatigue Detector

> **Owner:** @nova (interpretação criativa) + @dash (dados)
> **Frameworks:** Brandon Carter Hook Iteration Velocity (#3) + Haynes Creative Refresh Cycle (#9) + Brian Moncada Saturation Detection (#3)
> **Inputs:** dados do criativo (últimos 14 dias mínimo)

## O Problema

Criativos têm shelf-life de 7-14 dias. Sem refresh, mesmo vencedores morrem. Detectar fadiga ANTES de ROAS colapsar = ROI preservado.

## Os 5 Sinais de Fadiga (3+ = confirmado)

```
1. Frequency > 3.5 em 7 dias                  → audiência viu repetidamente
2. Hook Rate caindo > 30% em 7 dias           → hook saturou
3. CTR caindo > 25% em 7 dias                 → criativo perdeu impacto
4. ROAS caindo > 25% em 7 dias                → impacto financeiro
5. Engagement (comments/reactions) caindo     → audiência cansou
```

## Algoritmo

```
PARA CADA criativo ativo > 7 dias:
  contador_fadiga = 0
  
  SE Frequency > 3.5:                       contador += 1
  SE Hook Rate ↓ > 30% (vs 7 dias antes):   contador += 1
  SE CTR ↓ > 25% (vs 7 dias antes):         contador += 1
  SE ROAS ↓ > 25% (vs 7 dias antes):        contador += 1
  SE Engagement ↓ > 30%:                    contador += 1

  SE contador >= 3:
    → STATUS: FADIGA CONFIRMADA
    → AÇÃO: refresh imediato (dispatch *refresh)

  SE contador == 2:
    → STATUS: WATCH
    → AÇÃO: monitor diário, preparar refresh (dispatch *hooks)

  SE contador <= 1:
    → STATUS: SAUDÁVEL
    → AÇÃO: continuar
```

## Output Template

```
🔥 FATIGUE CHECK — {nome do criativo}
═══════════════════════════════════════════

CRIATIVO: {nome ou ID}
ATIVO HÁ: {N} dias

SINAIS DE FADIGA:
  1. Frequency:           {valor}     [{✅ | ⚠️ | 🚨}]  ({delta})
  2. Hook Rate:           {valor}     [{✅ | ⚠️ | 🚨}]  ({delta})
  3. CTR:                 {valor}     [{✅ | ⚠️ | 🚨}]  ({delta})
  4. ROAS:                {valor}     [{✅ | ⚠️ | 🚨}]  ({delta})
  5. Engagement:          {valor}     [{✅ | ⚠️ | 🚨}]  ({delta})

CONTADOR DE FADIGA: {N}/5

STATUS: {SAUDÁVEL | WATCH | FADIGA CONFIRMADA}

DIAGNÓSTICO:
{interpretação criativa do que está acontecendo}

AÇÃO RECOMENDADA:
{
  Se SAUDÁVEL:
    - Continuar
    - Re-check em 7 dias

  Se WATCH:
    - Preparar 3 novos hooks (dispatch @nova *hooks)
    - Re-check em 3 dias
    - NÃO escalar

  Se FADIGA CONFIRMADA:
    - PAUSAR criativo
    - Dispatch @nova *refresh imediato
    - Plano: 3 hooks novos (categorias diferentes do atual vencedor)
    - Manter constantes (audiência, oferta — Brandon Carter #1)
    - Test schedule: odd/even days (Haynes #26)
}

PIPELINE STATUS (Brandon Carter #3):
  Criativos novos no pipeline: {N}/3 (mínimo semanal)
  Próximo refresh agendado: {data}

DISPATCH:
  → @nova *hooks (se WATCH ou FADIGA)
  → @nova *refresh (se FADIGA)
  → @dash para acompanhar métricas pós-refresh
```

## Refresh Strategy

Quando dispachar refresh:

```
1. NÃO mudar audiência (Constants vs Variables — Brandon Carter)
2. NÃO mudar oferta
3. Mudar APENAS criativo:
   - 3 novos hooks (categorias diferentes do vencedor)
   - Mesmo formato OU formato novo (testar)
   - Mesmo CTA OU CTA refinado
4. Subir paralelo ao vencedor (não substitui ainda)
5. Após 5 dias: comparar métricas, decidir cutover
```

## Constraints

- NUNCA aguarde ROAS colapsar para refresh (early signal = Hook Rate)
- NUNCA mude múltiplas variáveis no refresh (Constants vs Variables)
- SEMPRE mantenha pipeline de 3+ hooks novos por semana
- SEMPRE refresh = subir novo em paralelo, não substituir cego
- NUNCA refresh durante semana de evento crítico (Black Friday, etc.)
