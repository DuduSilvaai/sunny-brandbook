# Playbook: Lead Machine

> **Agente:** @alex-hormozi
> **Duração estimada:** 30-90 dias para primeira fonte estável
> **Comando:** `*playbook lead-machine`
> **Frameworks:** $100M Leads — 4 Core Sources, More.Better.Different., CAC Optimization

## Objetivo

Construir um sistema de aquisição de leads previsível e escalável, usando as 4 fontes de leads de Hormozi na sequência correta. O objetivo não é mais leads — é leads qualificados com CAC ≤ LTV/3.

**Critérios de conclusão:**
- Mínimo 1 fonte de lead operando no threshold OK (≥ 20 leads qualificados/mês)
- CAC ≤ LTV/3
- Pipeline previsível com variação < 30% mês a mês
- Sistema documentado — não dependente do fundador para executar

**Pré-requisitos obrigatórios:**
- Oferta validada (score Offer Gate ≥ 80% OU mínimo 3 vendas confirmadas)
- Churn < 5% (balde sem furo antes de encher)

---

## Fases

### Phase 0: Business Discovery + Lead Audit (Dia 1-2)

**Comando:** `*business-discovery`

**O que coletar:**
- Fontes de lead atuais e volume por fonte (leads/mês por canal)
- CAC atual por fonte (se rastreado)
- Taxa de conversão lead → cliente por fonte
- Ticket médio e LTV (para calcular CAC target)
- Meta de leads/mês nos próximos 90 dias

**Gate de saída:**
- [ ] CAC target calculado: LTV/3 = R$ [X] (CAC máximo aceitável)
- [ ] Meta de leads/mês definida: [Y] leads qualificados
- [ ] Fontes atuais mapeadas com performance real
- [ ] Maior gargalo identificado: volume, qualidade ou conversão?

---

### Phase 1: Warm Outreach — Maximizar a Rede Existente (Dia 3-14)

**Comando:** `*lead-machine`
**Task:** `tasks/generative/lead-machine.md` (Fonte 1)

**Por que começar aqui:**
O CAC mais baixo possível. A conversão mais alta. Feedback imediato. Todo negócio tem uma rede inexplorada.

**O que fazer:**
1. Listar todos os contatos que te conhecem pessoalmente (WhatsApp, Instagram, LinkedIn, email pessoal)
2. Segmentar: prospect direto / pode indicar um prospect / nem prospect nem indicação
3. Criar mensagem personalizada (não broadcast, não copy genérico — referência ao contato específico)
4. Enviar 5-10 mensagens por dia, 5 dias por semana
5. Registrar: contatos feitos / conversas abertas / reuniões agendadas / vendas

**Meta:**
- 50+ contatos nos primeiros 7 dias
- ≥ 5 conversas abertas
- ≥ 1 venda confirmada

**Gate de saída:**
- [ ] 100+ contatos feitos
- [ ] Taxa de conversão: ≥ 5% (1 venda a cada 20 conversas)
- [ ] Script de mensagem testado em ≥ 3 variações
- [ ] CAC via warm outreach calculado e documentado

**Regra:** Warm outreach continua SEMPRE — mesmo após adicionar outras fontes. É o canal de CAC mais baixo.

---

### Phase 2: Content Strategy — Construir Ativo de Inbound (Dia 15-45)

**Comandos:** `*lead-machine` (Fonte 2)

**Por que segundo:**
Conteúdo cria ativo de longo prazo. Leads inbound chegam com intenção e já te conhecem — conversão maior, ciclo de vendas menor. Mas exige consistência de 90+ dias antes de ver volume significativo.

**O que definir:**

**Etapa 2a — Escolher 1 plataforma** (onde o avatar se concentra):
- B2B / profissionais → LinkedIn
- Empreendedores visuais → Instagram / YouTube
- Negócios locais → Instagram / TikTok
- SaaS / tech → Twitter / LinkedIn

NUNCA diversificar plataformas no início. Dominar 1 antes de expandir.

**Etapa 2b — Definir cadência mínima:**
- Frequência: 5 posts/semana mínimo (consistência > qualidade no início)
- Mix: 80% educação (como o avatar resolve X) / 20% oferta / prova social
- Formato prioritário: formato nativo da plataforma escolhida

**Etapa 2c — Estrutura de cada post:**
1. Hook (por que parar de rolar?)
2. Valor (o que o avatar aprende?)
3. CTA (próxima ação — DM, link, seguir)

**Etapa 2d — Sistema de captura:**
- Definir como o lead do conteúdo entra no pipeline (DM? Link para formulário? WhatsApp?)
- Configurar resposta automática inicial
- Responsável por responder DMs: quem e em qual prazo máximo (< 2h recomendado)

**Meta:**
- 90 dias consecutivos de publicação sem parar
- ≥ 3 leads inbound/semana ao fim de 90 dias
- ≥ 1 venda originada de conteúdo

**Gate de saída:**
- [ ] 90 dias de publicação concluídos sem gaps > 3 dias
- [ ] ≥ 10 leads inbound/mês ao fim do período
- [ ] CAC via content calculado (incluindo tempo do fundador como custo)

---

### Phase 3: Cold Outreach — Prospecção Ativa Escalável (Dia 30-60)

**Comandos:** `*lead-machine` (Fonte 3)

**Por que terceiro:**
Cold outreach escala mas exige mensagem afiada e oferta validada. Sem conversão no warm, cold terá resultado pior ainda.

**O que fazer:**

**Etapa 3a — Construir lista qualificada:**
- Mínimo 500 contatos que atendem ao avatar exato
- Fontes: LinkedIn Sales Navigator, base de associações, listas públicas, concorrentes de conteúdo
- Critério de qualificação: 3 indicadores de fit (cargo, tamanho, setor, dor)

**Etapa 3b — Construir sequência de outreach:**
- Touch 1 (Dia 1): mensagem personalizada curta — referência específica ao prospect
- Touch 2 (Dia 3): follow-up com valor (case, insight, pergunta)
- Touch 3 (Dia 7): last attempt — pergunta direta
- Touch 4 (Dia 14): breakup message (fecha o loop)
- Regra: nunca mais de 4 touches — persistência além disso é spam

**Etapa 3c — Métricas de corte:**
- Taxa de abertura (email): < 30% → problema no subject line
- Taxa de resposta: < 5% → problema no corpo da mensagem
- Taxa de reunião: < 1% → problema na qualificação da lista

**Meta:**
- 50 contatos/dia por 20 dias úteis = 1.000 contatos no mês
- ≥ 10 reuniões agendadas
- ≥ 2 vendas fechadas

**Gate de saída:**
- [ ] 1.000+ contatos feitos
- [ ] Taxa de reunião ≥ 1%
- [ ] CAC via cold calculado
- [ ] Sequência de 4 touches documentada e replicável

---

### Phase 4: Paid Ads — Escalar o Que Funciona (Dia 60-90)

**Comandos:** `*lead-machine` (Fonte 4)

**Por que quarto:**
Paid ads amplificam o que funciona — se content ou warm não converte, paid vai converter menos ainda e queimar capital.

**Pré-requisito:** Mínimo 1 fonte orgânica (warm ou content) no threshold OK antes de ativar paid.

**O que fazer:**

**Etapa 4a — Identificar o ângulo vencedor:**
- Qual post de conteúdo teve mais engajamento e comentários?
- Qual mensagem de warm outreach mais gerou resposta?
- Esse é o ângulo do primeiro anúncio (mesmo gancho, mesmo mecanismo)

**Etapa 4b — Budget inicial de teste:**
- Budget mínimo diário: 10% do ticket médio
- Duração do teste: 7 dias por ângulo, sem otimizar antes
- Testar: 1 variação de hook / 1 variação de CTA / 1 variação de oferta

**Etapa 4c — Critérios de corte por plataforma:**

| Plataforma | Kill | OK | Scale |
|-----------|------|----|-------|
| Meta Ads | ROAS < 2:1 | 2:1–4:1 | > 4:1 |
| Google Ads | CPC > LTV/20 | OK | CPC < LTV/40 |
| LinkedIn Ads | CPL > LTV/5 | OK | CPL < LTV/10 |

**Etapa 4d — Escalar apenas o que está em OK ou Scale:**
- Não aumentar budget de campanha em Kill
- Escalar 20% por semana (não dobrar de uma vez)
- Testar novo ângulo em paralelo enquanto escala o vencedor

**Gate de saída:**
- [ ] ROAS ≥ 2:1 em ao menos 1 ângulo
- [ ] CAC via paid ≤ LTV/3
- [ ] Sistema de rastreamento por fonte configurado (UTM + CRM)

---

### Phase 5: Otimização por CAC por Fonte (Dia 90+)

**Objetivo:** Maximizar ROI por fonte e construir sistema previsível

**O que monitorar mensalmente:**

| Fonte | Meta de Volume | CAC Target | Ação se Kill |
|-------|---------------|-----------|-------------|
| Warm Outreach | [X]/mês | LTV/5 | Aumentar volume (More) |
| Content | [X]/mês | LTV/4 | Otimizar cadência (Better) |
| Cold Outreach | [X]/mês | LTV/3 | Melhorar qualificação da lista |
| Paid Ads | [X]/mês | LTV/3 | Pausar e recriar ângulo |

**Regra de alocação:**
- Fonte com melhor CAC recebe 60% da atenção/budget
- Segunda melhor recebe 30%
- Teste de nova fonte recebe 10%

---

## Critérios de Sucesso

| Métrica | Kill | OK | Scale |
|---------|------|----|-------|
| Leads qualificados/mês | < 10 | 10–50 | > 50 |
| CAC médio geral | > LTV/2 | LTV/3 a LTV/2 | < LTV/3 |
| Previsibilidade (variação mês a mês) | > 50% | 20%–50% | < 20% |
| Dependência do fundador | 100% | 50%–100% | < 50% |

---

## Sequência Recomendada por Estágio

| Faturamento | Foco Principal | Segunda Fonte |
|-------------|---------------|--------------|
| 0 a R$30k/mês | Warm Outreach (100%) | — |
| R$30k a R$100k/mês | Warm (50%) + Content (50%) | — |
| R$100k a R$300k/mês | Content (40%) + Cold (40%) | Warm (20%) |
| R$300k/mês+ | Paid Ads (50%) + Cold (30%) | Content (20%) |

---

## Anti-patterns Monitorados

- Ativar paid ads antes de warm ou content no threshold OK
- Diversificar plataformas de conteúdo antes de dominar 1
- Aumentar volume de cold sem otimizar a mensagem primeiro
- Escalar budget 2x+ de uma vez (causa instabilidade de ROAS)
- Abandonar warm outreach ao escalar — é o canal de CAC mais baixo sempre

---

*Playbook Lead Machine — @alex-hormozi | Synkra AIOS*
*Baseado em: $100M Leads — Alex Hormozi*
