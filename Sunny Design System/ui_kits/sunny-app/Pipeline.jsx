// Sunny App — Pipeline (Kanban CRM)

const stages = [
  { id: 'new',       label: 'Novos',        color: '#38BDF8', count: 4 },
  { id: 'qualified', label: 'Qualificados', color: '#F5A524', count: 3 },
  { id: 'proposal',  label: 'Proposta',     color: '#8B5CF6', count: 3 },
  { id: 'negotiation',label:'Negociação',   color: '#E8740C', count: 2 },
  { id: 'closed',    label: 'Fechados',     color: '#22C55E', count: 2 },
];

const leads = {
  new: [
    { id: 1, name: 'Ana Ferreira', company: 'Residencial SP', value: 'R$ 28K', kwp: '5,2 kWp', time: '4 min', hot: true },
    { id: 2, name: 'Carlos Mota', company: 'Comércio Local BH', value: 'R$ 62K', kwp: '11 kWp', time: '12 min', hot: true },
    { id: 3, name: 'Patricia Duarte', company: 'Fazenda Solar MS', value: 'R$ 180K', kwp: '32 kWp', time: '28 min' },
    { id: 4, name: 'Eduardo Lima', company: 'Industria PE', value: 'R$ 340K', kwp: '58 kWp', time: '1h' },
  ],
  qualified: [
    { id: 5, name: 'Roberto Alves', company: 'Condomínio RJ', value: 'R$ 95K', kwp: '18 kWp', time: '2h', scheduled: true },
    { id: 6, name: 'Lucia Santos', company: 'Escola CE', value: 'R$ 45K', kwp: '8 kWp', time: '3h', scheduled: true },
    { id: 7, name: 'Fernando Costa', company: 'Hospital MG', value: 'R$ 520K', kwp: '92 kWp', time: '4h' },
  ],
  proposal: [
    { id: 8, name: 'Marcos Oliveira', company: 'Shopping BA', value: 'R$ 890K', kwp: '158 kWp', time: '1d' },
    { id: 9, name: 'Silvia Rocha', company: 'Hotel RS', value: 'R$ 210K', kwp: '38 kWp', time: '2d' },
    { id: 10, name: 'André Pinto', company: 'Escola PR', value: 'R$ 78K', kwp: '14 kWp', time: '3d' },
  ],
  negotiation: [
    { id: 11, name: 'Beatriz Neves', company: 'Galpão Logístico SP', value: 'R$ 1,2M', kwp: '210 kWp', time: '4d' },
    { id: 12, name: 'Thiago Mendes', company: 'Supermercado GO', value: 'R$ 340K', kwp: '62 kWp', time: '5d' },
  ],
  closed: [
    { id: 13, name: 'Juliana Ramos', company: 'Posto de Combustível RJ', value: 'R$ 165K', kwp: '28 kWp', closed: true },
    { id: 14, name: 'Paulo Souza', company: 'Escola Solar PE', value: 'R$ 82K', kwp: '14 kWp', closed: true },
  ],
};

function LeadCard({ lead, stageColor }) {
  return (
    <div style={{
      background: '#18181B',
      border: `1px solid ${lead.hot ? 'rgba(245,165,36,0.3)' : lead.closed ? 'rgba(34,197,94,0.2)' : 'rgba(63,63,70,0.5)'}`,
      borderRadius: 10,
      padding: '12px 14px',
      cursor: 'pointer',
      transition: 'all 150ms ease-out',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
        <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: 13, color: '#FAFAFA' }}>{lead.name}</div>
        {lead.hot && <span style={{ fontSize: 10, fontWeight: 700, color: '#F5A524', background: 'rgba(245,165,36,0.1)', border: '1px solid rgba(245,165,36,0.2)', borderRadius: 9999, padding: '2px 8px', fontFamily: "'Inter', sans-serif" }}>&#x26; Quente</span>}
        {lead.scheduled && <span style={{ fontSize: 10, fontWeight: 700, color: '#22C55E', background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 9999, padding: '2px 8px', fontFamily: "'Inter', sans-serif" }}>+ Agendado</span>}
        {lead.closed && <span style={{ fontSize: 10, fontWeight: 700, color: '#22C55E', background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 9999, padding: '2px 8px', fontFamily: "'Inter', sans-serif" }}>Fechado</span>}
      </div>
      <div style={{ fontSize: 12, color: '#71717A', marginBottom: 10, fontFamily: "'Inter', sans-serif" }}>{lead.company}</div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 15, color: stageColor }}>{lead.value}</div>
        <div style={{ display: 'flex', gap: 8 }}>
          <span style={{ fontSize: 11, color: '#A1A1AA', background: 'rgba(63,63,70,0.3)', borderRadius: 4, padding: '2px 6px', fontFamily: "'JetBrains Mono', monospace" }}>{lead.kwp}</span>
          {lead.time && <span style={{ fontSize: 11, color: '#71717A', fontFamily: "'Inter', sans-serif" }}>{lead.time}</span>}
        </div>
      </div>
    </div>
  );
}

function Pipeline() {
  return (
    <div style={pipelineStyles.root}>
      <div style={pipelineStyles.header}>
        <div>
          <div style={pipelineStyles.title}>Pipeline Solar</div>
          <div style={pipelineStyles.sub}>14 leads ativos · R$ 3,9M em aberto</div>
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <button style={pipelineStyles.filterBtn}>Filtrar</button>
          <button style={pipelineStyles.ctaBtn}>+ Novo Lead</button>
        </div>
      </div>

      <div style={pipelineStyles.board}>
        {stages.map(stage => (
          <div key={stage.id} style={pipelineStyles.column}>
            <div style={pipelineStyles.colHeader}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: stage.color }} />
                <span style={{ ...pipelineStyles.colLabel, color: stage.color }}>{stage.label}</span>
              </div>
              <span style={pipelineStyles.colCount}>{stage.count}</span>
            </div>
            <div style={pipelineStyles.cardList}>
              {(leads[stage.id] || []).map(lead => (
                <LeadCard key={lead.id} lead={lead} stageColor={stage.color} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const pipelineStyles = {
  root: { padding: '28px 32px', height: '100%', display: 'flex', flexDirection: 'column' },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 24 },
  title: { fontFamily: "'Space Grotesk', sans-serif", fontSize: 26, fontWeight: 700, color: '#FAFAFA', letterSpacing: '-0.02em' },
  sub: { fontSize: 13, color: '#71717A', marginTop: 4, fontFamily: "'Inter', sans-serif" },
  filterBtn: { background: '#18181B', color: '#FAFAFA', border: '1px solid #3F3F46', borderRadius: 8, padding: '8px 16px', fontSize: 13, fontFamily: "'Inter', sans-serif", fontWeight: 500, cursor: 'pointer' },
  ctaBtn: { background: 'linear-gradient(135deg, #F5A524, #E8740C)', color: '#09090B', border: 'none', borderRadius: 8, padding: '9px 18px', fontWeight: 700, fontSize: 13, fontFamily: "'Inter', sans-serif", cursor: 'pointer' },
  board: { display: 'flex', gap: 14, flex: 1, overflowX: 'auto', overflowY: 'hidden', paddingBottom: 16 },
  column: { minWidth: 220, flex: 1, display: 'flex', flexDirection: 'column', gap: 10 },
  colHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 14px', background: '#18181B', border: '1px solid rgba(63,63,70,0.5)', borderRadius: 10 },
  colLabel: { fontSize: 13, fontWeight: 700, fontFamily: "'Inter', sans-serif" },
  colCount: { fontSize: 12, fontWeight: 600, color: '#71717A', background: 'rgba(63,63,70,0.3)', borderRadius: 9999, padding: '2px 8px', fontFamily: "'Inter', sans-serif" },
  cardList: { display: 'flex', flexDirection: 'column', gap: 8, overflowY: 'auto', flex: 1 },
};

Object.assign(window, { Pipeline, LeadCard });
