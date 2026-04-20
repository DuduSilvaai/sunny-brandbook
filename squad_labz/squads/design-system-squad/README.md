# Design System Squad

Expert team of 12 AI agents for building, scaling, and evolving design systems.

**Activation:** `@design-architect` or `/ds:agents:design-architect`

---

## Quick Start

```bash
# 1. Activate the orchestrator
@design-architect

# 2. Run mandatory Phase 0 (business discovery)
*business-discovery

# 3. Select playbook based on your scenario
*playbook from-scratch      # New system from zero
*playbook from-chaos        # Audit + consolidate existing UI
*playbook enterprise        # Mature system modernization
```

---

## Squad Structure

### Orchestrator
- **@design-architect** — Directs all 11 specialists

### Tier 0 — Foundation & Purpose (2 agents)
Essential before any building:
- **@alla-kholmatova** — Purpose & Shared Language
- **@brad-frost** — Atomic Design & Components

### Tier 1 — Strategic Masters (3 agents)
Define business value, scale, and accessibility:
- **@dan-mall** — Business Value & ROI
- **@dave-malouf** — DesignOps & Enterprise Scale
- **@heydon-pickering** — Inclusive Design & Accessibility

### Tier 2 — Domain Specialists (4 agents)
Build tokens, governance, and developer experience:
- **@jina-anne** — Design Tokens
- **@nathan-curtis** — Governance & Versioning
- **@sarah-drasner** — Motion Design & DX
- **@una-kravets** — CSS Platform & Standards

### Tier 3 — Automation (1 agent)
Generate assets and automate workflows:
- **@nano-banana-generator** — Generative APIs & Motion

### External Integration (1 agent)
User research and validation:
- **@ux-design-expert** — UX Research & Validation

---

## Workflow by Scenario

### Scenario 1: New Design System (from-scratch)

```
Phase 0: Business Discovery (@design-architect)
   ↓
Phase 1: Foundation (@alla-kholmatova + @brad-frost)
   ↓
Phase 2: Strategy (@dan-mall + @dave-malouf + @heydon-pickering)
   ↓
Phase 3: Building (@brad-frost + @jina-anne + @sarah-drasner)
   ↓
Phase 4: Governance (@nathan-curtis)
   ↓
Phase 5: Validation (@heydon-pickering + @ux-design-expert)
   ↓
Phase 6: Launch (@design-architect orchestrates all)
```

### Scenario 2: Existing UI Audit & Consolidation (from-chaos)

```
Phase 0: Business Discovery (@design-architect)
   ↓
Phase 1: Audit (@brad-frost)
   ↓
Phase 2: Consolidation Strategy (@dan-mall)
   ↓
Phase 3: Token Extraction (@jina-anne)
   ↓
Phase 4: Governance (@nathan-curtis)
   ↓
Phase 5: Accessibility (@heydon-pickering)
   ↓
Phase 6: Rollout (@dave-malouf)
```

### Scenario 3: Enterprise Modernization

```
Phase 0: Business Discovery (@design-architect)
   ↓
Phase 1: Org Design (@dave-malouf)
   ↓
Phase 2: Token Architecture (@jina-anne)
   ↓
Phase 3: CSS Modernization (@una-kravets)
   ↓
Phase 4: Motion System (@sarah-drasner)
   ↓
Phase 5: Governance (@nathan-curtis)
   ↓
Phase 6: Rollout (@dave-malouf)
```

---

## Key Commands

### Orchestrator Level
```
@design-architect
*help                       # Show all available commands
*business-discovery         # Mandatory Phase 0
*playbook <name>           # Choose playbook
*build-ds                  # Full pipeline
*validate                  # Run quality gates
```

### Specialist Commands

**@brad-frost (Atomic Design)**
```
*audit-patterns             # Find redundancy
*consolidate <count>        # Reduce patterns
*build-atomic <comp>        # Design architecture
```

**@jina-anne (Tokens)**
```
*extract-tokens             # Build token system
*design-token-system        # Architecture
*export-dtcg                # W3C export
```

**@heydon-pickering (Accessibility)**
```
*audit-accessibility        # WCAG 2.2 check
*contrast-check             # Color validation
*keyboard-test              # Navigation audit
```

**@dave-malouf (Enterprise)**
```
*design-ops <scale>         # DesignOps arch
*governance-model           # Process design
*adoption-strategy          # Rollout plan
```

**@dan-mall (Business)**
```
*business-case              # ROI calculation
*calculate-savings          # Value metrics
*stakeholder-alignment      # Executive buy-in
```

---

## Quality Gates (Mandatory)

All work gates on three checks:

1. **Business Context Clarity ≥ 0.8**
   - Why does this design system exist?
   - What business problems does it solve?
   - Who are the users and use cases?

2. **Accessibility Compliance = 1.0**
   - ✓ WCAG 2.2 AA minimum (AAA recommended)
   - ✓ Keyboard navigation
   - ✓ Screen reader compatible
   - ✓ Color contrast validation
   - ✓ No motion surprises

3. **Component Health ≥ 0.85**
   - ✓ Atomic architecture
   - ✓ 95%+ token adoption
   - ✓ Clear governance
   - ✓ Documentation complete

If any gate fails, escalate to @design-architect + @qa before proceeding.

---

## Success Metrics

Track these KPIs:

- **Pattern Consolidation** — Reduce redundant components by 70%+ (Brad Frost)
- **Token Adoption** — Achieve 95%+ token usage in codebase (Jina Anne)
- **Accessibility** — WCAG 2.2 AAA compliance on 100% of components (Heydon)
- **Build Performance** — CSS bundle < 50KB, build time < 30s (Una)
- **Designer Satisfaction** — NPS > 8.5 for design system UX (Uma)
- **Adoption Timeline** — First team adopting within 30 days (Dave)
- **ROI Realization** — Break-even on investment within 6 months (Dan)

---

## Memory & Context

### Append-Only Model
All squad work appends to `business-context.md`:
- Never deletes previous decisions
- Traces evolution of system
- Maintains accountability

### Cross-Pollination
Agents learn from each other:
- Brad's patterns inform Jina's tokens
- Jina's tokens guide Una's CSS
- Sarah's motion complements Brad's atoms
- All route back through Dan's ROI

### Business Alignment
All decisions traced to business goals defined in Phase 0.

---

## Operational Rules (AIOS Constitution)

✓ **CLI First** — All commands via @agent or */command notation
✓ **Story-Driven** — All work tracked in design system story
✓ **Quality First** — Quality gates before any output
✓ **No Invention** — Reuse existing patterns and specialisms
✓ **DevOps-Only** — @devops exclusively handles git push

---

## When to Use This Squad

✓ Building a new design system
✓ Consolidating existing UI chaos
✓ Scaling design system enterprise-wide
✓ Modernizing legacy design system
✓ Validating design system ROI
✓ Establishing design governance
✓ Extracting design tokens
✓ Accessibility audit needed
✓ Motion design system needed

---

## Playbooks

Three pre-built playbooks route to appropriate tier paths:

1. **from-scratch** — Start design system from zero
2. **from-chaos** — Audit and consolidate existing UI
3. **enterprise** — Scale to enterprise with DesignOps

Select with: `*playbook <name>`

---

## Support & Escalation

**Stuck?**
```
@design-architect
*help
```

**Need different specialist?**
```
@[specialist-name]
```

**Quality gate failure?**
```
@design-architect
*validate
```

**Business misalignment?**
```
@dan-mall
*business-case
```

---

## Version Info

- **Squad Version:** 1.0.0
- **AIOS Min:** 2.1.0
- **Created:** 2026-04-09
- **Agents:** 12 (1 orchestrator + 11 specialists)
- **Tier System:** 4 tiers + external integrations

---

**Activation:** `@design-architect`
**Quick help:** `@design-architect *help`
