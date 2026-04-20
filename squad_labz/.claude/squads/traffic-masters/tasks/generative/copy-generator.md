# Task: Copy Generator

> **Owner:** @nova
> **Frameworks:** PASP Stack (Jordan Stupar #1) + DSL (Haynes #1) + Hormozi Grand Slam (#2)
> **Inputs:** hook, business-context, tipo de copy

## Tipos de Copy

| Tipo | Caracteres | Onde aparece | Framework |
|------|-----------|--------------|-----------|
| **primary** | Meta: 125 (truncate) / 600 max | Texto acima do criativo Meta | DSL + Hook + CTA |
| **headline** | 27 (Meta) / 30 (Google) | Headline abaixo/sobre criativo | Hook + benefit |
| **description** | 27 (Meta) / 90 (Google) | Texto secundário | Reinforce + CTA |
| **body** | 600+ (Meta) / 200 char (Google) | Texto longo Meta / Google ad | PASP completo |
| **subject** (email) | 30-50 char | Email subject line | Hook + curiosity |

## Templates por Tipo

### PRIMARY (Meta — texto principal)

```
[HOOK]                                          ← linha 1 (3-5 palavras, primeira coisa visível)

[Validação do problema/oportunidade]            ← 1-2 linhas

[Mecanismo único / como funciona]               ← 1-2 linhas

[Prova social / case]                           ← 1-2 linhas

[CTA específico + URL/swipe up]                 ← linha final
```

**Exemplo:**
```
🚨 Você gasta R$10k/mês em ads e não sabe o que dá ROAS?

A maioria dos infoprodutores brasileiros queima budget porque trata cada
campanha como tentativa solta — sem método.

Eu desenvolvi um sistema com 47 frameworks dos maiores experts mundiais
(Jeremy Haynes, Hormozi, Brian Moncada) que dá previsibilidade.

+200 alunos já aplicam isso. Médio: ROAS 3.2x em 30 dias.

Clica aqui pra ver o método em 4 minutos: [URL]
```

### HEADLINE (Google/Meta)

```
Templates curtos:
  - "[Result] em [Time]"           ex: "ROAS 3x em 30 dias"
  - "[How to verb] [Outcome]"      ex: "Como escalar ads sem queimar"
  - "[Number] [Benefit]"           ex: "47 frameworks de tráfego pago"
  - "[Question]"                   ex: "Sua campanha está sangrando?"
```

### DESCRIPTION (Google)

```
Reforça benefit + adiciona prova ou urgência + CTA
"Sistema usado por +200 infoprodutores. Vagas limitadas. Garantir agora."
```

### BODY (long-form — PASP Stack Jordan Stupar)

```
PAIN
"Você já gastou R$X em ads e o resultado foi [resultado ruim]?"

AUTHORITY
"Eu já gerenciei R$Y milhões em campanhas e descobri uma coisa que ninguém fala..."

SOLUTION
"...que [insight contraintuitivo] resolve isso porque [mecanismo único]."

PROOF
"Foi assim que [case 1] fez R$Z em [tempo]. E [case 2] conseguiu [resultado]."

CTA
"Clica e [resultado específico] em [prazo]."
```

### SUBJECT (email)

```
- Hook tipo curiosity: "O erro que matou meus ads no D7"
- Hook tipo result: "[Nome], R$50k em 14 dias (case)"
- Hook tipo problem: "Por que você está gastando 3x mais que precisa"
- Hook tipo question: "Posso te perguntar uma coisa?"
```

## Output Template

```
✍️ COPY — {tipo} — {produto}
═══════════════════════════════════════

CONTEXTO:
  - Hook base: "{hook}"
  - Awareness: {Schwartz level}
  - Tom: {tom de voz}
  - Avatar: {persona}

VARIAÇÃO 1 (primary recommendation):
  {copy completo respeitando char limit}

VARIAÇÃO 2 (test):
  {copy com angle diferente}

VARIAÇÃO 3 (backup):
  {copy com tom diferente}

CTAs SUGERIDOS:
  - {CTA 1}
  - {CTA 2}
  - {CTA 3}

CARACTER COUNT:
  v1: {N}/{limit}
  v2: {N}/{limit}
  v3: {N}/{limit}

COMPLIANCE CHECK:
  [ ] Sem promessas absolutas ("garantido", "ganhe X")
  [ ] Sem before/after de saúde sem disclaimer
  [ ] Sem termos proibidos Meta ({"você"}, {"clique aqui"} — restrições atuais)
  [ ] Disclaimer se aplicável (consultoria, investimento)
```

## Constraints

- NUNCA escreva copy sem ler hook + business-context
- SEMPRE respeite character limits (Meta trunca em 125 mobile)
- SEMPRE 3 variações (Brandon Carter — testar)
- NUNCA use clichês banidos pelo algoritmo Meta
- SEMPRE inclua CTA específico (não "saiba mais")
- SEMPRE valide compliance (saúde, financeiro, antes/depois)
