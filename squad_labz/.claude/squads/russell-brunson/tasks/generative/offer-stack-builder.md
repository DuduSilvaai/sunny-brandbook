# Task: Offer Stack Builder

> **Owner:** @russell-brunson
> **Frameworks:** Expert Secrets — Stack Slide, DotCom Secrets — Offer Architecture
> **Inputs:** produto core, ticket de venda, objeções mapeadas do avatar, preço atual ou desejado

## Quando Executar

Após `*belief-audit` e `*dream-customer-avatar`. O Stack Slide é construído para ser usado no fechamento de webinars e VSLs (Steps 12-14 do Perfect Webinar). Deve estar completo antes de gravar qualquer vídeo de vendas ou apresentação de webinar.

## Algoritmo

### Passo 1: Definir o Produto Core

Registrar o produto principal com:
- Nome comercial do produto
- Formato de entrega (curso, software, consultoria, template, etc.)
- Transformação central prometida (1 frase)
- Valor de mercado estimado (o que custaria contratar alguém para fazer o mesmo resultado)

Exemplo: "Mentoria em grupo — 12 semanas de implementação ao vivo — valor de mercado: R$9.700"

### Passo 2: Mapear 3-5 Bônus que Quebram Objeções Específicas

Para cada objeção identificada no `*belief-audit` e `*dream-customer-avatar`, criar um bônus que remove essa objeção especificamente.

Regras dos bônus:
1. Cada bônus endereça uma objeção específica (não adicionar bônus genéricos)
2. Bônus deve ter nome proprietário (não "Bônus 1")
3. Bônus deve ter utilidade autônoma (vale mesmo sem o produto core)
4. Máximo 5 bônus — mais do que isso dilui o valor percebido

Mapeamento objeção → bônus:
```
Objeção: "Não tenho tempo"
→ Bônus: "Sistema de [resultado] em 20 minutos por dia" (checklist/template)

Objeção: "Não sei usar tecnologia"
→ Bônus: "Setup Técnico Completo: vídeo passo-a-passo de instalação em 30 min"

Objeção: "Meu nicho é diferente"
→ Bônus: "Biblioteca de 47 exemplos em 12 nichos diferentes"

Objeção: "Já tentei e não funcionou"
→ Bônus: "Diagnóstico de Por Que Não Funcionou Antes + Plano de Correção"
```

### Passo 3: Atribuir Valor Percebido a Cada Item

Regra de precificação percebida:
- Valor total do stack deve ser ≥ 10x o preço cobrado
- Usar benchmark de mercado para justificar cada valor (quanto custaria contratar / comprar separado)
- Nunca inventar valores sem justificativa — o avatar deve poder verificar mentalmente

Tabela de valores a preencher:

| Item | Tipo | Valor Percebido |
|------|------|----------------|
| [Produto Core] | Core | R$X.XXX |
| [Bônus 1] | Bônus | R$XXX |
| [Bônus 2] | Bônus | R$XXX |
| [Bônus 3] | Bônus | R$XXX |
| [Bônus 4] | Bônus | R$XXX |
| [Bônus 5] | Bônus | R$XXX |
| **Total** | | **R$XX.XXX** |
| **Preço real** | | **R$X.XXX** |

Verificação: Total / Preço real ≥ 10. Se não atingir, adicionar bônus ou revisar valores percebidos.

### Passo 4: Definir Sequência de Revelação

Revelar do mais caro para o mais barato, mantendo o produto core como âncora inicial:

1. Produto Core (valor mais alto — estabelece âncora)
2. Bônus #1 (segundo maior valor percebido)
3. Bônus #2
4. Bônus #3
5. Bônus #4 (menor valor percebido — mas resolve objeção crítica)
6. Total acumulado → pausa dramática → revelar preço real

### Passo 5: Montar o Script "E se você tivesse que pagar separado..."

Template de revelação por item:
"[Nome do item]. Se você fosse buscar [resultado deste item] por conta própria, precisaria [alternativa cara]. Isso custaria facilmente R$[valor]. Mas eu inclui no pacote."

Repetir para cada item. Acumular o valor verbalmente antes de revelar o total.

Encerramento: "Se você somar tudo o que acabei de mostrar, o valor total é R$[total]. Mas hoje, [razão real de urgência], o investimento é apenas R$[preço]."

### Passo 6: Definir Preço Real + Justificativa

A justificativa do preço menor deve ser legítima. Opções válidas:
- Desconto de beta (primeiras turmas para coletar depoimentos)
- Preço promocional com data de encerramento real
- Vagas limitadas por capacidade de entrega
- Preço de amortização de custo fixo já pago

Nunca usar "porque quero ajudar" como única justificativa — não cria urgência real.

## Output

- Stack Slide completo (lista de itens, valores percebidos, total)
- Script de revelação do Stack para webinar/VSL
- Verificação da regra 10x (total / preço)
- Checklist de objeções endereçadas (1 bônus por objeção crítica)

## Thresholds

| Critério | Meta |
|---------|------|
| Itens no stack | ≥ 5 (core + ≥ 4 bônus) |
| Relação valor percebido / preço | ≥ 10x |
| Objeções endereçadas por bônus | ≥ 3 objeções críticas cobertas |
| Bônus com nome proprietário | 100% |
| Urgência / justificativa do preço | Legítima e verificável |
