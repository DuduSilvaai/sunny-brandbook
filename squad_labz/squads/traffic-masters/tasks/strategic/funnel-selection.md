# Task: Funnel Selection

> **Owner:** @midas
> **Frameworks:** Hormozi (Funil R$17), Haynes (VSL Direto), Nicholas Kusmich (Lead Gen 4-Step)
> **Inputs:** business-context.md (ticket, oferta, mercado, awareness)

## Quando Executar

Antes de criar campanha. Sempre que mudar de oferta. Sempre que ticket mudar > 30%.

## Algoritmo de Decisão

```
SE ticket < R$50:
  → Tráfego direto / Tripwire (Hormozi Funil R$17)

SE ticket R$50 - R$497:
  → VSL direto OU Funil de R$17 (depende de margem e LTV)

SE ticket R$497 - R$2.000:
  → VSL longo + email sequence + retargeting

SE ticket R$2.000 - R$5.000:
  → Lead Magnet → email/SMS sequence → low-touch close (página de venda)

SE ticket > R$5.000:
  → Lead Magnet → qualification → call (Nicholas Kusmich 4-Step)

EXCEÇÕES:
- Ecommerce físico → catalog/DPA (sempre, independente de ticket)
- B2B SaaS → Lead Gen + demo (mesmo se ticket baixo)
- Aula gratuita Zoom → funciona em qualquer ticket se há autoridade construída
```

## Tipos de Funil — Detalhe

### 1. Tráfego Direto (VSL ou Página de Venda)
```
AD → VSL/Página → Checkout → Order Bump → Upsell
```
**Quando:** ticket baixo-médio (R$50-R$500), oferta clara, audiência aquecida
**Vantagem:** velocidade, baixa fricção
**Risco:** alto CPA cold, depende muito do criativo

### 2. Funil R$17 (Tripwire / Self-Liquidating Offer — Hormozi)
```
AD → R$17 Tripwire → Order Bump → Upsell 1 → Upsell 2 → Email Sequence → Backend High-Ticket
```
**Quando:** quer cobrir CAC + criar lista de compradores
**Métrica:** AOV ≥ 1.5x CPA do tripwire
**Vantagem:** lista de COMPRADORES (LTV alto), CAC efetivo zero ou negativo
**Risco:** complexo de configurar, requer múltiplas ofertas

### 3. Aula Gratuita / Webinar Zoom
```
AD → Inscrição → Confirmação Email/WhatsApp → Aula Live (Zoom) → Pitch ao final → Close
```
**Quando:** ticket médio-alto (R$497-R$5k), produto educacional, autoridade construída
**Vantagem:** alta conversão (5-15%), constrói confiança
**Risco:** depende do show-up rate (BR média 30-40%)

### 4. Webinar Evergreen
```
AD → Inscrição → Webinar gravado (parece live) → Email sequence → Close window
```
**Quando:** Aula Zoom validou conversão e quer escalar sem time
**Vantagem:** roda 24/7, zero esforço operacional
**Risco:** conversão menor que live (3-7% típico), precisa parecer "ao vivo" sem mentir

### 5. Lead Magnet (Email-First)
```
AD → Lead Magnet (ebook/quiz/checklist) → Email Sequence → Sales Page → Close
```
**Quando:** alto custo de aquisição cold OU audiência muito fria
**Vantagem:** lista de leads para múltiplas ofertas no tempo
**Risco:** lead ≠ comprador, sequence precisa ser excelente

### 6. Quiz Funnel
```
AD → Quiz (5-10 perguntas) → Resultado personalizado → Email + Oferta segmentada
```
**Quando:** audiência precisa de segmentação, oferta varia por persona
**Vantagem:** dados ricos, segmentação automática, alto engagement
**Risco:** complexo de construir, depende do quiz ter boa estrutura

### 7. Lead Gen B2B / High-Ticket Coaching
```
AD → LP qualification → Calendly → Pre-call survey → Strategy Session → Pitch
```
**Quando:** ticket > R$5k, venda 1-on-1, ciclo > 7 dias
**Vantagem:** RPL altíssimo, qualificação prévia
**Risco:** lento, precisa time de vendas, não escala sem people

### 8. Ecommerce Catalog / DPA
```
AD (Catalog) → PDP → Cart → Checkout → Confirmation
+ Retargeting DPA para abandoners
```
**Quando:** ecommerce com SKUs > 10
**Vantagem:** algoritmo otimiza por produto + audiência
**Risco:** precisa catálogo limpo, feed integrado

## Output Template

```
🎯 FUNNEL SELECTION — {produto}
═══════════════════════════════════════════

INPUTS:
- Ticket: R${X}
- Tipo: {info | ecom | service | B2B}
- Mercado: {BR | LATAM | EUA | ...}
- Awareness: {fria | morna | quente}
- LTV estimado: R${Y}
- Capacidade operacional: {sozinho | time | sales team}

FUNIL RECOMENDADO: {nome}

ESTRUTURA:
  STEP 1: {ad → primeiro touchpoint}
  STEP 2: {captura/conversão inicial}
  STEP 3: {nutrição/sequência}
  STEP 4: {close}

MÉTRICAS-CHAVE:
  - {métrica 1}: target {valor}
  - {métrica 2}: target {valor}
  - {métrica 3}: target {valor}

PLATAFORMAS RECOMENDADAS:
  - Primária: {Meta | Google | YouTube}
  - Secundária: {se aplicável}

OBSTÁCULOS PREVISÍVEIS:
  - {risco 1 + mitigação}
  - {risco 2 + mitigação}

FRAMEWORK BASE: {Hormozi | Haynes | Kusmich | etc.}

NEXT STEPS:
1. Setup técnico do funil (LP, checkout, integrações)
2. @track validar tracking de cada etapa
3. @nova brief de criativo + copy
4. @midas *campaign-structure
```

## Constraints

- NUNCA escolha funil sem ticket definido
- NUNCA use webinar/Zoom se cliente não tem autoridade ou prova social mínima
- NUNCA Lead Magnet se cliente não tem capacidade de email sequence
- SEMPRE valide LTV vs custo do funil
- SEMPRE considere capacidade operacional (não recomende call funnel para solo)
