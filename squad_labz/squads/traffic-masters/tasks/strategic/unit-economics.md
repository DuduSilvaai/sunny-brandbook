# Task: Unit Economics

> **Owner:** @dash (cálculo) + @midas (validação)
> **Framework:** Alex Hormozi — Unit Economics + LTV/CAC (#1, #5)
> **Inputs:** business-context.md (ticket, margem, retention) + dados de vendas históricos

## Quando Executar

ANTES de qualquer campanha nova. SEMPRE quando ticket muda > 20%. SEMPRE antes de scale.

## Inputs Necessários

```
- AOV (Average Order Value):           R$
- Margem bruta (%):                    {0-100}
- Frequência de compra (compras/ano):  {N}
- Retention (anos):                    {N}
- CAC atual (se já roda ads):          R$
- Spend mensal:                        R$
- Novos clientes/mês:                  {N}
```

## Cálculos

### 1. CAC (Customer Acquisition Cost)
```
CAC = Spend Mensal Total / Novos Clientes Mês

Variantes:
- nCAC (new CAC, só paid traffic)  = Spend Paid / Novos Clientes via Paid
- Blended CAC                      = Spend Total / Todos os Novos Clientes
```

### 2. LTV (Lifetime Value)
```
LTV = AOV × Frequência de Compra × Retention × Margem Bruta

Exemplo:
  AOV: R$497
  Frequência: 1.2 compras/ano
  Retention: 2 anos
  Margem: 70%

  LTV = 497 × 1.2 × 2 × 0.70 = R$835
```

### 3. LTV/CAC Ratio
```
LTV / CAC = ratio

INTERPRETAÇÃO:
  < 1.0   → SANGRANDO. Cada cliente novo destrói valor. PARAR ads.
  1.0-2.9 → MARGINAL. Negócio sobrevive mas não cresce. ALERTA.
  3.0-4.9 → SAUDÁVEL. Hormozi mínimo. Escalar com cuidado.
  5.0+    → EXCELENTE. Escalar agressivo.
  10+     → SUSPEITO. Validar dados (provavelmente subestimando CAC).
```

### 4. Payback Period
```
Payback = CAC / (Avg Monthly Revenue per Customer × Margem)

INTERPRETAÇÃO:
  < 3 meses   → EXCELENTE
  3-6 meses   → IDEAL
  6-12 meses  → ACEITÁVEL (precisa capital de giro)
  > 12 meses  → CRÍTICO (cash flow risk)
```

### 5. Break-Even ROAS
```
Break-Even ROAS = 1 / Margem Bruta

Exemplo:
  Margem 70% → Break-Even ROAS = 1 / 0.70 = 1.43

  ROAS < 1.43 = perdendo dinheiro
  ROAS 1.43 = empatando
  ROAS > 1.43 = lucrando
```

### 6. Target ROAS (mínimo para crescimento sustentável)
```
Target ROAS = Break-Even ROAS × Multiplier

Multiplier por modelo:
  D2C ecommerce:     2.0x  → Target ROAS = BE × 2
  Info high-margin:  1.5x  → Target ROAS = BE × 1.5
  SaaS:              0.5x* → ROAS pode ser < 1 no D0 se LTV > 12 meses
                    *Métrica primária = LTV/CAC, não ROAS
```

## Output Template

```
💰 UNIT ECONOMICS — {produto}
═══════════════════════════════════════════

INPUTS:
- AOV:                R${X}
- Margem bruta:       {Y}%
- Compras/ano:        {Z}
- Retention:          {N} anos
- CAC atual:          R${A}

CÁLCULOS:
- LTV:                R${calculado}
- LTV / CAC:          {ratio}
- Payback:            {N} meses
- Break-Even ROAS:    {valor}
- Target ROAS:        {valor}

INTERPRETAÇÃO:
{KILL | ALARM | HEALTHY | EXCELLENT} — {explicação}

RECOMENDAÇÕES:
{
  Se LTV/CAC < 3:
    1. Repensar oferta antes de escalar (Grand Slam Offer Hormozi #2)
    2. Aumentar AOV (order bump, upsell)
    3. Melhorar retention (email/SMS sequence pós-compra)
    4. Reduzir CAC (criativo, audiência, funil)

  Se LTV/CAC 3-5:
    1. Escalar com cuidado, monitorar diluição de ROAS
    2. Investir 20% em melhorar LTV (cross-sell, loyalty)

  Se LTV/CAC > 5:
    1. Escalar agressivo
    2. Abrir 2º canal (Hydra Strategy Hormozi #3)
    3. Aumentar AOV via order bump
}

RED FLAGS:
{
  - Payback > 12 meses → cash flow crítico
  - LTV calculado mas não validado por cohort retention real → alerta
  - CAC subindo > 20%/mês → audiência saturando
  - Ticket vs LTV ratio > 0.5 → muita dependência da primeira compra
}

NEXT STEPS:
1. Validar números com cliente (especialmente retention)
2. {Se LTV/CAC < 3} Workshop de oferta antes de continuar
3. {Se LTV/CAC ≥ 3} Definir Target ROAS para campanhas
4. Atualizar business-context.md com unit economics validados
```

## Constraints

- NUNCA aceite estimativa de retention sem dados de cohort real
- NUNCA calcule LTV ignorando margem (LTV bruto é vaidade)
- NUNCA aprove scale com LTV/CAC < 3 (Hormozi)
- SEMPRE separe nCAC (paid) de blended CAC nos relatórios
- SEMPRE valide se cliente sabe distinguir AOV de ticket inicial
