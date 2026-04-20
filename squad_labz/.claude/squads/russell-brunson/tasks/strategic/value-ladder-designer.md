# Task: Value Ladder Designer

> **Owner:** @russell-brunson
> **Frameworks:** DotCom Secrets — Value Ladder (4 níveis)
> **Inputs:** produto atual, ticket atual, público-alvo, capacidade de entrega do negócio

## Quando Executar

No início de qualquer projeto de funil ou quando o negócio não tem uma estratégia de ascensão clara. Executar após `*dream-customer-avatar` e antes de `*funnel-selector`, pois a Value Ladder determina o ecossistema completo de ofertas.

## Algoritmo

### Passo 1: Mapear Produto Atual

Identificar em qual nível o produto atual está:

| Nível | Nome | Faixa de Preço | Formato típico |
|-------|------|---------------|----------------|
| 1 | Lead Magnet / Bait | R$0 – R$47 | e-book, checklist, mini-curso, trial |
| 2 | Core Offer | R$197 – R$997 | curso completo, consultoria básica, software |
| 3 | Continuidade | R$47 – R$197/mês | membership, grupo, retainer, SaaS |
| 4 | High-Ticket | R$3.000 – R$30.000+ | mentoria, mastermind, serviço done-for-you |

### Passo 2: Identificar Lacunas

Para cada nível ainda sem oferta:
1. Definir qual problema específico do avatar aquele nível resolve
2. Garantir que cada nível superior entrega transformação mais profunda — não apenas mais volume
3. Verificar que nenhum nível "compete" com o vizinho (cada um tem proposta única)

### Passo 3: Definir Faixas de Preço

Regras de precificação por nível:

- **Nível 1 (Lead Magnet):** Valor percebido ≥ R$97, preço R$0-47. Objetivo é cobrir custo de aquisição (CPL), não lucrar.
- **Nível 2 (Core):** Regra dos 10x — valor percebido deve ser ≥ 10x o preço cobrado.
- **Nível 3 (Continuidade):** Deve fazer sentido como "manutenção" do resultado do Nível 2. Preço mensal < 20% do preço do Core.
- **Nível 4 (High-Ticket):** Venda consultiva. Preço baseado no resultado gerado, não no tempo/esforço.

### Passo 4: Definir Critérios de Ascensão

Para cada transição entre níveis, definir:
1. O gatilho de ascensão (quando o cliente está pronto para subir?)
2. A oferta de transição (o que oferece para induzir a ascensão?)
3. O momento no funil onde a ascensão acontece (OTO, email, upsell página de obrigado)

Exemplo de sequência:
```
Lead Magnet → [cliente consome e tem resultado parcial] → Core Offer (OTO na página de obrigado)
Core Offer → [cliente completa o curso] → Continuidade (email Day 30)
Continuidade → [membro ativo há 3+ meses] → High-Ticket (convite pessoal)
```

### Passo 5: Mapear Sequência de Upsell/Downsell

Para cada ponto de compra:
- OTO 1: oferta complementar ao que acabou de comprar (não repetição)
- OTO 2 / Downsell: versão reduzida se recusou OTO 1, ou oferta de maior valor se aceitou
- Regra: nunca mais de 2 OTOs em sequência sem página de obrigado real

## Output

- Value Ladder completa desenhada (4 níveis com nome, preço, formato)
- Lacunas identificadas com sugestão de oferta para cada uma
- Mapa de ascensão (gatilho + oferta + momento)
- Sequência de OTOs por ponto de compra
- Prioridade de criação (qual nível criar primeiro se não existe)

## Thresholds

| Indicador | Meta |
|-----------|------|
| Ticket médio inicial (Nível 1 → 2) | ≥ R$97 |
| LTV projetado (12 meses) | ≥ 5x CAC |
| Taxa de ascensão Nível 2 → 3 | ≥ 15% dos compradores do Core |
| Taxa de ascensão Nível 3 → 4 | ≥ 5% dos membros ativos |
| OTO uptake (Nível 1 → 2 imediato) | ≥ 10% |
