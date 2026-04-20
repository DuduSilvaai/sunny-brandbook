# Playbook: Webinar Funnel

> **Agente:** @russell-brunson
> **Duração estimada:** 3-5 semanas
> **Comando:** `*playbook webinar-funnel`
> **Quando usar:** Estruturar e lançar um webinar funnel do zero ou reformular um webinar que não converte

---

## Visão Geral

O Webinar Funnel é indicado para tickets entre R$500 e R$2.000. Ele usa o Perfect Webinar (17 steps) como mecanismo central de vendas, combinando educação e quebra de crenças com um Stack Slide para fechar. Este playbook garante que cada componente seja construído na sequência correta e que o webinar seja lançado apenas quando todos os gates estiverem aprovados.

---

## Fases

### Phase 0: Business Discovery (Dia 1-2)

**Objetivo:** Capturar contexto completo e confirmar que webinar é o formato correto.

**Executar:**
- `*business-discovery` — coleta de produto, ticket, avatar e meta
- `*funnel-selector` — confirmar que webinar é a escolha correta para o ticket e modelo de negócio

**Confirmações obrigatórias:**
- Ticket entre R$500 e R$2.000 (ou justificativa documentada para ticket fora da faixa)
- Expert com autoridade no tema (origem de conteúdo definida)
- Capacidade de entregar o webinar ao vivo (agenda confirmada)
- Plataforma de webinar definida (Zoom, WebinarJam, StreamYard, etc.)

**Gate Phase 0:**
- [ ] Ticket confirmado + funil webinar validado
- [ ] Produto e transformação central definidos em 1 frase
- [ ] Expert e formato de entrega confirmados
- [ ] Plataforma de webinar escolhida

---

### Phase 1: Big Domino (Dia 3-4)

**Objetivo:** Identificar a 1 crença central que, se instalada, torna a compra inevitável.

**O Big Domino é a fundação de todo o webinar.** Sem identificá-lo corretamente, o Perfect Webinar perde coerência.

**Executar:**
- `*belief-audit` — mapear as 3 crenças falsas do avatar
- Derivar o Big Domino: a crença sobre o Vehicle que derruba todas as outras

**Como formular o Big Domino:**
"Se o avatar acreditar que [método X] é o único / melhor caminho para [resultado Y], então [comprar] se torna a decisão óbvia e inevitável."

**Gate Phase 1:**
- [ ] Big Domino formulado em 1 frase
- [ ] As 3 crenças falsas (Vehicle / Internal / External) mapeadas
- [ ] Sequência de quebra de crenças definida (qual secret endereça qual crença)

---

### Phase 2: Script Perfect Webinar — 17 Steps (Dia 5-9)

**Objetivo:** Gerar o script completo do webinar com todos os 17 steps preenchidos.

**Executar:**
- `*epiphany-bridge-story` — construir a Epiphany Bridge para o Step 5
- `*perfect-webinar-builder` — gerar os 17 steps completos com conteúdo real

**Regras do script:**
- Origin Story deve usar os 6 beats completos
- Cada Secret deve ter uma história ou framework proprietário
- Duração alvo: 75-90 minutos (não mais, não menos)
- Step 17 (CTA) deve ter apenas 1 ação possível

**Gate Phase 2:**
- [ ] 17 steps preenchidos com conteúdo real (não template)
- [ ] Big Domino aparece no Step 3 e é reforçado no fechamento
- [ ] As 3 crenças são endereçadas nos Steps 6-11
- [ ] Duração estimada: 75-90 min
- [ ] CTA único no Step 17

---

### Phase 3: Stack Slide — Construir Valor (Dia 10-11)

**Objetivo:** Construir o Stack Slide que será revelado no Step 12 do webinar.

**Executar:**
- `*offer-stack-builder` — montar Stack com ≥ 5 itens + valores percebidos

**Validação do Stack:**
- Valor percebido total ≥ 10x o ticket
- Cada bônus quebra uma objeção específica identificada no Belief Audit
- Sequência de revelação: do mais caro para o mais barato
- Garantia real configurada (mínimo 30 dias)
- Urgência legítima definida (vagas, prazo ou bônus com data)

**Gate Phase 3:**
- [ ] Stack com ≥ 5 itens + valores percebidos documentados
- [ ] Total ≥ 10x o preço cobrado
- [ ] Cada objeção crítica coberta por algum item do Stack
- [ ] Garantia e urgência definidas
- [ ] Offer Gate checklist aprovado (ver `checklists/offer-gate.md`)

---

### Phase 4: Belief Audit — Verificação de Cobertura (Dia 12)

**Objetivo:** Confirmar que as 3 crenças falsas são endereçadas pelo webinar e pelo Stack.

**Executar:**
- Revisão do output do `*belief-audit` contra o script do webinar
- Verificar que cada Secret quebra a crença correspondente
- Verificar que cada bônus do Stack cobre pelo menos uma crença ou objeção

**Gate Phase 4:**
- [ ] Vehicle Belief: endereçada no Secret #1 + Step 7
- [ ] Internal Belief: endereçada no Secret #2 + Step 9
- [ ] External Belief: endereçada no Secret #3 + Step 11
- [ ] Objeções mais comuns cobertas por bônus do Stack

---

### Phase 5: Sequência de Email (Dia 13-15)

**Objetivo:** Criar a sequência de email para registro, lembretes e replay do webinar.

**Sequência mínima:**
1. Email de confirmação de registro (imediato pós opt-in)
2. Lembrete 24h antes do webinar
3. Lembrete 1h antes do webinar
4. Email de replay (Day 1 pós webinar, para quem não apareceu)
5. Replay + urgência (Day 2, último dia)
6. Fechamento de carrinho (Day 3, últimas horas)

**Cada email deve ter:**
- Assunto com curiosidade ou urgência real
- 1 CTA único (link para a página de registro ou compra)
- Referência ao conteúdo do webinar (não email genérico)

**Gate Phase 5:**
- [ ] 6+ emails da sequência criados e revisados
- [ ] Email de confirmação testado (recebido na caixa de entrada, não spam)
- [ ] Links de replay e compra funcionando nos emails
- [ ] SPF/DKIM configurados no domínio de envio

---

### Phase 6: Tráfego Frio para Webinar (Dia 16-18)

**Objetivo:** Definir e configurar as fontes de tráfego para a página de registro do webinar.

**Executar:**
- `*dream-100` — identificar onde o avatar está online
- `*traffic-temp` — definir anúncio por temperatura (cold / warm)

**Particularidades do tráfego para webinar:**
- Anúncio cold deve prometer o conteúdo do webinar, não a oferta
- Headline da página de registro: "Como [resultado] sem [obstáculo] em [prazo]"
- Budget mínimo recomendado para teste: R$1.500 (para atingir ≥ 200 registros)
- Meta de registro: ≥ 200 leads antes do primeiro webinar ao vivo

**Gate Phase 6:**
- [ ] ≥ 2 canais de tráfego configurados
- [ ] Anúncios aprovados nas plataformas
- [ ] Página de registro testada (opt-in funcionando)
- [ ] Meta de 200 registros com budget planejado

---

### Phase 7: Pre-Launch Gate (Dia 19)

**Objetivo:** Aprovação final de todos os componentes antes de abrir o registro publicamente.

**Executar:**
- Checklist completo: `checklists/pre-launch-gate.md`
- Simulação do webinar (dry run): apresentar os 17 steps para audiência interna

**Regra:** 100% dos itens aprovados = GO. Qualquer item reprovado = HOLD.

**Gate Phase 7:**
- [ ] Pre-launch Gate checklist 100% aprovado
- [ ] Dry run do webinar realizado
- [ ] Integração registro → email funcionando
- [ ] Página de vendas pós-webinar configurada
- [ ] OTO configurada e testada

---

## Critérios de Sucesso do Playbook

| Métrica | Cold Traffic | Warm Traffic |
|---------|-------------|-------------|
| Registro (opt-in para webinar) | ≥ 25% | ≥ 40% |
| Show-up rate | ≥ 20% | ≥ 35% |
| Close rate (ao vivo) | ≥ 5% | ≥ 10% |
| Close rate (replay) | ≥ 2% | ≥ 5% |
| ROI em 30 dias | ≥ 1.5x | ≥ 4x |

---

## Arquivos Produzidos por este Playbook

- `business-context.md` — contexto do negócio
- `big-domino.md` — crença central + mapa de beliefs
- `webinar-script.md` — 17 steps completos
- `offer-stack.md` — Stack Slide com valores
- `email-sequence.md` — 6+ emails da sequência
- `traffic-plan.md` — canais e budget
