# Task: Funnel Selector

> **Owner:** @russell-brunson
> **Frameworks:** DotCom Secrets — 7 tipos de funil
> **Inputs:** produto, ticket médio, modelo de negócio (info, SaaS, network marketing, serviço)

## Quando Executar

Sempre que iniciar um novo projeto de funil ou revisar uma estratégia existente. Execute antes de qualquer trabalho de copy ou tráfego — a escolha do funil define toda a estrutura downstream.

## Algoritmo

### Decision Tree por Ticket e Modelo

```
Ticket < R$50
  → Squeeze Page Funnel + Tripwire Offer
  → Objetivo: gerar volume de leads e qualificar com micro-compra
  → OTO recomendada: produto complementar R$47-97

Ticket R$50 – R$500
  → Sales Letter Funnel ou VSL (Video Sales Letter) Direto
  → Objetivo: converter tráfego frio com copy longa ou vídeo persuasivo
  → OTO recomendada: upsell de implementação ou versão premium

Ticket R$500 – R$2.000
  → Webinar Funnel (Perfect Webinar)
  → Objetivo: educar, quebrar crenças falsas e fechar com Stack Slide
  → OTO recomendada: grupo de acompanhamento ou sessão de implementação

Ticket R$2.000 – R$10.000
  → Application Funnel / High-Ticket Funnel
  → Objetivo: qualificar candidatos antes da conversa de vendas
  → OTO: não aplicável — processo de vendas consultivo

Ticket > R$10.000
  → Phone Funnel (agendamento de call)
  → Objetivo: filtrar leads prontos para conversa de alto valor
  → OTO: não aplicável — venda por relacionamento e consultoria

Modelo SaaS
  → Free Trial Funnel + Membership Funnel
  → Objetivo: ativação de usuário → conversão em plano pago
  → Upsell: plano anual ou tier superior

Modelo Network Marketing
  → Bridge Page Funnel
  → Objetivo: pré-frame o lead antes de enviar para página da empresa
  → Bridge constrói autoridade do líder + curiosidade pelo produto

Info-produto em nicho específico
  → Product Launch Funnel (4 vídeos sequenciais)
  → Objetivo: criar antecipação e ascender leads antes da abertura do carrinho
  → Sequência: Backstory → Teaching → Transformação → Oferta
```

### Critérios de Desempate

Quando o ticket está na fronteira entre dois tipos:
1. Se avatar tem alta resistência a compra impulsiva → escolher funil com mais educação (webinar)
2. Se produto tem tangibilidade alta (curso, livro) → Sales Letter pode converter direto
3. Se concorrência no nicho usa webinar → diferenciar com formato de challenge

## Output

- Tipo de funil selecionado (nome + justificativa de 2-3 linhas)
- Estrutura de páginas necessárias (lista)
- OTO recomendada e sequência de upsell/downsell
- Thresholds de monitoramento pós-lançamento

## Thresholds

| Métrica | Cold Traffic | Warm Traffic |
|---------|-------------|-------------|
| Opt-in rate (Squeeze) | ≥ 25% | ≥ 40% |
| Conversão (Sales Letter/VSL) | ≥ 1% | ≥ 3% |
| Show-up rate (Webinar) | ≥ 20% | ≥ 35% |
| Close rate (Webinar) | ≥ 5% | ≥ 10% |
| Application rate | ≥ 15% do tráfego | ≥ 30% |
| OTO uptake | ≥ 10% | ≥ 20% |

**Kill switch:** Se opt-in < 15% após 200 visitas → parar e revisar headline/bait antes de escalar.
