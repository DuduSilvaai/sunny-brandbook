// Sunny App — Dashboard (Torre de Comando)

const metrics = [
  { label: 'Leads Vivos', value: '247', delta: '+18%', deltaUp: true, sub: 'vs semana passada', color: '#F5A524', glow: true },
  { label: 'Reuniões Agendadas', value: '38', delta: '+24%', deltaUp: true, sub: 'este mês', color: '#FAFAFA' },
  { label: 'Tempo Médio Resposta', value: '8min', delta: '↓91%', deltaUp: true, sub: 'vs sem IA', color: '#38BDF8' },
  { label: 'Taxa de Conversão', value: '34%', delta: '↑3pp', deltaUp: true, sub: 'mês anterior', color: '#22C55E' },
];

const activities = [
  { type: 'conversao', iconName: 'check',   text: 'Marco Ribeiro · Reunião agendada · 8,4 kWp', time: '2 min atrás', color: '#22C55E' },
  { type: 'agent',    iconName: 'agent',   text: 'SDR qualificou Ana Souza · R$ 45K estimado', time: '8 min atrás', color: '#F5A524' },
  { type: 'alerta',  iconName: 'warning', text: 'Alerta: 12 leads sem resposta há 48h',       time: '1h atrás',   color: '#EF4444' },
  { type: 'conversao', iconName: 'check',   text: 'Felipe Costa · Proposta aceita · R$ 82K',     time: '2h atrás',   color: '#22C55E' },
  { type: 'agent',    iconName: 'agent',   text: 'Lead novo qualificado · Escola Solar PE',      time: '3h atrás',   color: '#F5A524' },
  { type: 'overdrive',iconName: 'trophy',  text: 'Overdrive — time bateu meta: 140%',            time: '4h atrás',   color: '#8B5CF6' },
];

const pipelineStages = [
  { label: 'Novos',       count: 54, value: 'R$ 1,2M', color: '#38BDF8' },
  { label: 'Qualificados',count: 38, value: 'R$ 980K',  color: '#F5A524' },
  { label: 'Proposta',    count: 21, value: 'R$ 1,7M',  color: '#8B5CF6' },
  { label: 'Negociação',  count: 12, value: 'R$ 890K',  color: '#E8740C' },
  { label: 'Fechados',    count: 8,  value: 'R$ 640K',  color: '#22C55E' },
];

function MetricCard({ label, value, delta, deltaUp, sub, color, glow }) {
  return (
    <div style={{
      ...dashStyles.metricCard,
      ...(glow ? { boxShadow: '0 0 20px rgba(245,165,36,0.15)', borderColor: 'rgba(245,165,36,0.2)' } : {}),
    }}>
      <div style={dashStyles.metricLabel}>{label}</div>
      <div style={{ ...dashStyles.metricValue, color }}>{value}</div>
      <div style={dashStyles.metricDelta}>
        <span style={{ color: deltaUp ? '#22C55E' : '#EF4444' }}>{delta}</span>
        <span style={dashStyles.metricSub}>{sub}</span>
      </div>
    </div>
  );
}

function Dashboard() {
  return (
    <div style={dashStyles.root}>
      {/* Header */}
      <div style={dashStyles.header}>
        <div>
          <div style={dashStyles.greeting}>
            Bom dia, João
            <span style={dashStyles.greetingAccent}>
              <Icon name="sun" size={22} color="#F5A524" style={{ display: 'block' }} />
            </span>
          </div>
          <div style={dashStyles.subGreeting}>Torre de Comando · Quarta-feira, 23 de Abril</div>
        </div>
        <div style={dashStyles.headerActions}>
          <span style={dashStyles.overdrive}>
            <Icon name="trophy" size={13} color="#8B5CF6" />
            Overdrive: 140% da meta
          </span>
          <button style={dashStyles.ctaBtn}>
            <Icon name="plus" size={14} color="#09090B" />
            Novo Lead
          </button>
        </div>
      </div>

      {/* Metrics */}
      <div style={dashStyles.metricsRow}>
        {metrics.map((m, i) => <MetricCard key={i} {...m} />)}
      </div>

      {/* Pipeline + Activity */}
      <div style={dashStyles.lowerRow}>
        {/* Pipeline Overview */}
        <div style={dashStyles.pipelineCard}>
          <div style={dashStyles.cardHeader}>
            <span style={dashStyles.cardTitle}>Pipeline Solar</span>
            <span style={dashStyles.cardAction}>Ver completo →</span>
          </div>
          <div style={dashStyles.pipelineBars}>
            {pipelineStages.map((s, i) => {
              const maxCount = Math.max(...pipelineStages.map(x => x.count));
              return (
                <div key={i} style={dashStyles.pipelineStage}>
                  <div style={dashStyles.stageBarWrap}>
                    <div style={{
                      ...dashStyles.stageBar,
                      height: `${(s.count / maxCount) * 80}px`,
                      background: s.color,
                      opacity: 0.85,
                    }} />
                  </div>
                  <div style={dashStyles.stageCount}>{s.count}</div>
                  <div style={dashStyles.stageLabel}>{s.label}</div>
                  <div style={{ ...dashStyles.stageValue, color: s.color }}>{s.value}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Activity Feed */}
        <div style={dashStyles.activityCard}>
          <div style={dashStyles.cardHeader}>
            <span style={dashStyles.cardTitle}>Atividade Recente</span>
            <span style={dashStyles.cardAction}>Ver tudo →</span>
          </div>
          <div style={dashStyles.activityList}>
            {activities.map((a, i) => (
              <div key={i} style={dashStyles.activityItem}>
                <div style={{ ...dashStyles.activityIcon, background: `${a.color}18`, color: a.color }}>
                  <Icon name={a.iconName} size={15} color={a.color} />
                </div>
                <div style={dashStyles.activityBody}>
                  <div style={dashStyles.activityText}>{a.text}</div>
                  <div style={dashStyles.activityTime}>{a.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const dashStyles = {
  root: { padding: '28px 32px', overflowY: 'auto', height: '100%' },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 28 },
  greeting: { fontFamily: "'Space Grotesk', sans-serif", fontSize: 28, fontWeight: 700, color: '#FAFAFA', letterSpacing: '-0.02em', display: 'flex', alignItems: 'center', gap: 10 },
  greetingAccent: { display: 'flex', alignItems: 'center' },
  subGreeting: { fontSize: 13, color: '#71717A', marginTop: 4, fontFamily: "'Inter', sans-serif" },
  headerActions: { display: 'flex', alignItems: 'center', gap: 12 },
  overdrive: { fontSize: 12, fontWeight: 600, color: '#8B5CF6', background: 'rgba(139,92,246,0.12)', border: '1px solid rgba(139,92,246,0.25)', borderRadius: 9999, padding: '6px 14px', fontFamily: "'Inter', sans-serif", display: 'flex', alignItems: 'center', gap: 6 },
  ctaBtn: { background: 'linear-gradient(135deg, #F5A524, #E8740C)', color: '#09090B', border: 'none', borderRadius: 8, padding: '9px 18px', fontWeight: 700, fontSize: 13, fontFamily: "'Inter', sans-serif", cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 },
  metricsRow: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14, marginBottom: 20 },
  metricCard: { background: '#18181B', border: '1px solid rgba(63,63,70,0.5)', borderRadius: 12, padding: '20px 22px' },
  metricLabel: { fontSize: 12, color: '#71717A', fontFamily: "'Inter', sans-serif", marginBottom: 8, fontWeight: 500 },
  metricValue: { fontFamily: "'Space Grotesk', sans-serif", fontSize: 36, fontWeight: 700, lineHeight: 1, letterSpacing: '-0.02em' },
  metricDelta: { display: 'flex', alignItems: 'center', gap: 6, marginTop: 8, fontSize: 12, fontFamily: "'Inter', sans-serif" },
  metricSub: { color: '#71717A' },
  lowerRow: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 },
  pipelineCard: { background: '#18181B', border: '1px solid rgba(63,63,70,0.5)', borderRadius: 12, padding: '20px 22px' },
  activityCard: { background: '#18181B', border: '1px solid rgba(63,63,70,0.5)', borderRadius: 12, padding: '20px 22px' },
  cardHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  cardTitle: { fontFamily: "'Space Grotesk', sans-serif", fontSize: 15, fontWeight: 700, color: '#FAFAFA', letterSpacing: '-0.01em' },
  cardAction: { fontSize: 12, color: '#F5A524', cursor: 'pointer', fontFamily: "'Inter', sans-serif" },
  pipelineBars: { display: 'flex', gap: 16, alignItems: 'flex-end', height: 140 },
  pipelineStage: { flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 },
  stageBarWrap: { flex: 1, display: 'flex', alignItems: 'flex-end', width: '100%', justifyContent: 'center' },
  stageBar: { width: '60%', borderRadius: '4px 4px 0 0', transition: 'height 400ms ease' },
  stageCount: { fontSize: 14, fontWeight: 700, color: '#FAFAFA', fontFamily: "'Inter', sans-serif" },
  stageLabel: { fontSize: 11, color: '#71717A', fontFamily: "'Inter', sans-serif", textAlign: 'center' },
  stageValue: { fontSize: 11, fontWeight: 600, fontFamily: "'Inter', sans-serif" },
  activityList: { display: 'flex', flexDirection: 'column', gap: 2 },
  activityItem: { display: 'flex', gap: 12, alignItems: 'center', padding: '9px 0', borderBottom: '1px solid rgba(63,63,70,0.2)' },
  activityIcon: { width: 32, height: 32, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 },
  activityBody: { flex: 1 },
  activityText: { fontSize: 13, color: '#FAFAFA', fontFamily: "'Inter', sans-serif", fontWeight: 500 },
  activityTime: { fontSize: 11, color: '#71717A', marginTop: 2, fontFamily: "'Inter', sans-serif" },
};

Object.assign(window, { Dashboard });
