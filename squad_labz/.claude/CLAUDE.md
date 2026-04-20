# CLAUDE.md - AIOS Agents Hub

Hub centralizado de todos os agentes e squads AIOS.

---

## Agentes Nativos (Claude Code)

Os agentes abaixo estão disponíveis diretamente via `@nome-do-agente`:

### AIOS Core — 12 Agentes de Desenvolvimento
| Agente | Persona | Função |
|--------|---------|--------|
| `@aios-dev` | Dex | Implementação de código |
| `@aios-qa` | Quinn | Testes e qualidade |
| `@aios-architect` | Aria | Arquitetura de sistema |
| `@aios-pm` | Morgan | Product Management |
| `@aios-po` | Pax | Product Owner, stories |
| `@aios-sm` | River | Scrum Master |
| `@aios-analyst` | Alex | Pesquisa e análise |
| `@aios-data-engineer` | Dara | Database e migrations |
| `@aios-ux` | Uma | UX/UI design |
| `@aios-devops` | Gage | CI/CD e git |

### Chiefs — Orquestradores Especializados
| Agente | Função |
|--------|--------|
| `@copy-chief` | Orquestra 24 copywriters lendários |
| `@cyber-chief` | Orquestra squad de cybersecurity |
| `@data-chief` | Orquestra especialistas em Data Intelligence |
| `@design-chief` | Orquestra 9 especialistas de design |
| `@legal-chief` | Orquestra especialistas jurídicos |
| `@story-chief` | Orquestra 12 storytellers lendários |
| `@tools-orchestrator` | Coordena criação e revisão de frameworks |
| `@db-sage` | Database design standalone |

### Traffic Masters Squad
| Agente | Função |
|--------|--------|
| `@midas` | Commander — orquestra o squad |
| `@dash` | Performance analyst |
| `@nova` | Creative analyst |
| `@track` | Pixel & tracking specialist |

### Design System Squad
| Agente | Função |
|--------|--------|
| `@design-architect` | Orquestrador do design system |
| `@brad-frost` | Atomic Design |
| `@jina-anne` | Design Tokens |
| `@una-kravets` | CSS Platform |
| `@sarah-drasner` | Motion Design |
| `@heydon-pickering` | Acessibilidade |
| `@nathan-curtis` | Governança |
| `@dan-mall` | ROI e Business Value |
| `@dave-malouf` | DesignOps |
| `@alla-kholmatova` | Propósito e Linguagem |
| `@nano-banana-generator` | APIs Generativas |

### Experts — Mind Clones
| Agente | Função |
|--------|--------|
| `@russell-brunson` | Funis, Value Ladder, Perfect Webinar |
| `@alex-hormozi` | Grand Slam Offer, Value Equation, $100M Leads |

### MMOS Squad — Mind Clone Factory
| Agente | Função |
|--------|--------|
| `@mind-mapper` | Transforma gênios em clones de IA |
| `@cognitive-analyst` | Extração de camadas cognitivas |
| `@system-prompt-architect` | Compila system prompts |
| `@research-specialist` | Coleta knowledge base |

---

## Estrutura do Repositório

```
aios-agents-hub/
├── .aios-core/              # Framework AIOS completo
│   ├── development/
│   │   ├── agents/          # 12 agentes core
│   │   ├── tasks/           # 198 tasks executáveis
│   │   ├── scripts/         # Scripts de automação
│   │   ├── templates/       # Templates de docs
│   │   └── checklists/      # Gates de qualidade
│   ├── core/                # Módulos do framework
│   └── constitution.md      # Regras inegociáveis
│
├── squads/                  # Squads especializados
│   ├── alex-hormozi/        # Expert: $100M Offers/Leads
│   ├── russell-brunson/     # Expert: Secrets Trilogy
│   ├── traffic-masters/     # Tráfego pago (11 agentes)
│   ├── design-system-squad/ # Design System (11 agentes)
│   ├── squad-creator/       # Criador de squads
│   └── mmos-squad/          # Mind Clone Factory (10 agentes)
│
└── .claude/
    ├── agents/              # Definições nativas Claude Code
    ├── commands/            # Command files (@agente *comando)
    ├── skills/              # Skills especializadas
    ├── hooks/               # Automações
    └── rules/               # Regras de comportamento
```

---

## Como Usar

### Ativar um agente
```
@alex-hormozi         → Expert em ofertas e crescimento
@russell-brunson      → Expert em funis e copywriting
@midas               → Commander de tráfego pago
@design-architect    → Orquestrador de design system
@copy-chief          → Orquestrador de copy
```

### Executar comandos
```
@alex-hormozi *grand-slam-offer
@russell-brunson *perfect-webinar-script
@midas *new-campaign-launch
@copy-chief *diagnose
```

### Criar novos agentes/squads
```
@squad-creator       → Para criar novos squads
@oalanicolas         → Para clonar minds de experts
```

---

## Language

```json
{ "language": "portuguese" }
```
