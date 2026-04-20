# Task: Image Generator (Brief)

> **Owner:** @nova
> **Frameworks:** Visual hierarchy + Meta image best practices
> **Inputs:** hook, conceito, business-context

## Tipos de Imagem para Ads

| Tipo | Quando usar | Conversão típica |
|------|-------------|------------------|
| **Product shot** | E-commerce, produto físico | Bom para BOFU |
| **Lifestyle** | Aspirational, "vida com" | Bom para TOFU/MOFU |
| **UGC-style** | "Real person", autenticidade | ROAS médio 2.3x studio (Haynes #27) |
| **Text-heavy** | Anúncio com headline grande | Bom para impact, ruim para Meta (>20% texto) |
| **Comparison** | Antes/depois, vs concorrente | Bom para conversão, cuidado compliance |
| **Carousel** | Múltiplos produtos OU storytelling | Engajamento alto |
| **Quote/Testimonial** | Prova social pura | Bom para retargeting |

## Brief para Designer / IA Generativa

```
🎨 IMAGE BRIEF — {nome}
═══════════════════════════════════════

CONCEITO (1 linha):
{descrição visual}

ESTILO:
[ ] Lifestyle photography  [ ] Product shot studio  [ ] UGC raw
[ ] Illustration           [ ] 3D render            [ ] Mixed media
[ ] Screenshot/UI mockup   [ ] Quote card           [ ] Comparison

PALETA:
- Primária: #
- Secundária: #
- Acento: #
(Match com brand identity)

COMPOSIÇÃO:
- Foco visual: {centro / regra dos terços / ?}
- Movimento dos olhos: {top-left → bottom-right típico}
- Espaço negativo: {%}

ELEMENTOS OBRIGATÓRIOS:
[ ] Logo (canto, tamanho discreto)
[ ] Texto on-image (se < 20% — limite Meta histórico)
[ ] CTA visual (botão, seta, badge)
[ ] {outro elemento brand}

TEXTO ON-IMAGE:
  Headline: "{texto}"
  Subhead: "{texto}"
  CTA visual: "{texto}"
  
  Tipografia:
  - Headline font: {nome ou stack}
  - Tamanho relativo: {grande/médio/pequeno vs imagem}

ASPECT RATIOS:
[ ] 1:1 (Feed Meta)
[ ] 4:5 (Feed Meta — mais espaço vertical)
[ ] 9:16 (Stories, Reels)
[ ] 1.91:1 (Link preview)

PROMPT IA (se gerado por DALL-E/Midjourney/etc.):
"{prompt completo otimizado para o modelo}"

REFERÊNCIAS VISUAIS:
- {URL/descrição 1}
- {URL/descrição 2}
- {URL/descrição 3}

EVITAR:
- {elementos brand-unsafe}
- Stock photo genérica (kill performance)
- Texto > 20% da imagem
- Faces que não são da marca/cliente real
- Cores que conflitam com brand

TÉCNICOS:
- Resolution mínima: 1080×1080 (1:1) / 1080×1350 (4:5) / 1080×1920 (9:16)
- Format: PNG (transparência) ou JPG (foto)
- Color space: sRGB
- Max file: 30MB (Meta)

VARIATIONS REQUEST:
[ ] 3 versões do mesmo conceito (testar — Brandon Carter)
[ ] Variação de cor de fundo
[ ] Variação de CTA placement
[ ] Variação com/sem texto

DEADLINE: {data}
```

## UGC Brief (Tipo Especial — Haynes #27)

Quando solicitar UGC para creator:

```
📱 UGC BRIEF — {creator name / generic}
═══════════════════════════════════════

GANHO MÉDIO: 2.3x ROAS vs studio (Haynes 2024)

PRODUTO/OFERTA: {nome}

DEMOGRAPHIC TARGET DO CREATOR:
- Idade: {range}
- Gênero: {se relevante}
- Estética: {casual, profissional, etc.}
- Voz: {adjetivos}

ESTRUTURA DO VÍDEO (DSL):
  0-3s   "{hook falado direto pra câmera}"
  3-15s  "{problema + descobri + solução}"
  15s+   "{prova/uso real + CTA}"

INSTRUÇÕES:
- Filmar vertical (9:16)
- Iluminação natural (janela)
- Som direto do celular OK
- NÃO ler script — improvisar com bullet points
- NÃO usar music sobreposta (Meta marca como ad — UGC deve parecer orgânico)
- Mostrar produto/uso real

TALKING POINTS (não script literal):
1. {ponto 1}
2. {ponto 2}
3. {ponto 3}

CTA:
"{frase exata para fechar}"

ENTREGAS:
- 3 takes do mesmo vídeo (variations)
- 1 versão "raw" (sem cortes)
- 1 versão "edit-friendly" (com pausas)

PRAZO: {data}
PAGAMENTO: {valor + condições}
DIREITOS DE USO: {exclusividade, prazo, plataformas}
```

## Constraints

- NUNCA texto on-image > 20% (Meta penaliza histórico)
- SEMPRE 3 aspect ratios mínimo (1:1, 4:5, 9:16)
- SEMPRE incluir variations request (Brandon Carter)
- NUNCA stock photo genérica para BOFU
- SEMPRE valide compliance visual (faces, claims, antes/depois)
- PREFIRA UGC sobre studio sempre que possível (2.3x ROAS médio)
