// Sunny App — SDR Agent View (Sunny Agent)

const conversations = [
  {
    id: 1, name: 'Ana Ferreira', company: 'Residencial SP', status: 'live', time: '4 min atrás',
    kwp: '5,2 kWp', value: 'R$ 28K', stage: 'Qualificando',
    messages: [
      { role: 'agent', text: 'Olá Ana! Vi que você demonstrou interesse em energia solar. Posso te ajudar?', time: '14:32' },
      { role: 'user',  text: 'Oi sim, quero saber o valor pra minha casa', time: '14:33' },
      { role: 'agent', text: 'Ótimo! Para calcular o melhor sistema pra você, qual é sua conta de luz média por mês?', time: '14:33' },
      { role: 'user',  text: 'Umas 800 reais por mês', time: '14:35' },
      { role: 'agent', text: 'Perfeito! Com esse consumo, você precisaria de um sistema de ~5,2 kWp. Posso agendar uma visita técnica gratuita. Qual seria o melhor horário?', time: '14:35' },
      { role: 'user',  text: 'Quinta-feira de manhã funciona?', time: '14:37' },
      { role: 'agent', text: 'Agendado. Quinta-feira às 09h — consultor Carlos confirmado. Confirmação enviada ao WhatsApp.', time: '14:38', final: true },
    ]
  },
  {
    id: 2, name: 'Roberto Alves', company: 'Condomínio RJ', status: 'scheduled', time: '2h atrás',
    kwp: '18 kWp', value: 'R$ 95K', stage: 'Reunião Agendada',
    messages: [
      { role: 'agent', text: 'Olá Roberto! Tudo bem? Vi seu interesse em energia solar para o condomínio.', time: '12:10' },
      { role: 'user',  text: 'Sim, somos 80 unidades e a conta está absurda', time: '12:15' },
      { role: 'agent', text: 'Entendo! Para condomínios de 80 unidades, um sistema compartilhado pode reduzir até 95% da conta das áreas comuns. Qual é o consumo médio mensal?', time: '12:15' },
      { role: 'user',  text: 'Área comum umas 3.000 kWh mês', time: '12:20' },
      { role: 'agent', text: 'Sistema de ~18 kWp seria ideal. Investimento estimado R$ 95K com payback em 4 anos. Posso agendar apresentação técnica?', time: '12:21' },
      { role: 'user',  text: 'Pode ser! Prefiro semana que vem', time: '12:25' },
      { role: 'agent', text: 'Segunda-feira 23/04 às 15h — confirmado. Convite enviado ao seu email.', time: '12:25', final: true },
    ]
  },
  {
    id: 3, name: 'Patricia Duarte', company: 'Fazenda Solar MS', status: 'waiting', time: '28 min atrás',
    kwp: '32 kWp', value: 'R$ 180K', stage: 'Aguardando resposta',
    messages: [
      { role: 'agent', text: 'Olá Patricia! Boa tarde. Você tem interesse em energia solar para a propriedade rural?', time: '14:05' },
      { role: 'user',  text: 'Sim, é uma fazenda de 500 hectares', time: '14:08' },
      { role: 'agent', text: 'Excelente! Propriedades rurais têm ótimo potencial solar. Qual é o consumo mensal de energia?', time: '14:08' },
    ]
  },
];

function AgentView() {
  const [selected, setSelected] = React.useState(conversations[0]);

  return (
    <div style={agentStyles.root}>
      {/* Left: conversation list */}
      <div style={agentStyles.list}>
        <div style={agentStyles.listHeader}>
          <div style={agentStyles.listTitle}>SDR Agent</div>
          <div style={agentStyles.liveIndicator}>
            <div style={agentStyles.liveDot} />
            Ativo
          </div>
        </div>
        <div style={agentStyles.searchWrap}>
          <input style={agentStyles.search} placeholder="Buscar leads..." />
        </div>
        {conversations.map(conv => (
          <div
            key={conv.id}
            onClick={() => setSelected(conv)}
            style={{
              ...agentStyles.convItem,
              ...(selected.id === conv.id ? agentStyles.convItemActive : {}),
            }}
          >
            <div style={{ ...agentStyles.convAvatar, background: conv.status === 'live' ? 'linear-gradient(135deg,#F5A524,#E8740C)' : '#27272A' }}>
              {conv.name.split(' ').map(n => n[0]).join('').slice(0,2)}
            </div>
            <div style={agentStyles.convInfo}>
              <div style={agentStyles.convName}>{conv.name}</div>
              <div style={agentStyles.convCompany}>{conv.company}</div>
              <div style={{ display: 'flex', gap: 6, marginTop: 4 }}>
                <span style={{ ...agentStyles.stageBadge, background: conv.status === 'live' ? 'rgba(245,165,36,0.12)' : conv.status === 'scheduled' ? 'rgba(34,197,94,0.12)' : 'rgba(113,113,122,0.12)', color: conv.status === 'live' ? '#F5A524' : conv.status === 'scheduled' ? '#22C55E' : '#71717A', borderColor: conv.status === 'live' ? 'rgba(245,165,36,0.25)' : conv.status === 'scheduled' ? 'rgba(34,197,94,0.25)' : 'rgba(113,113,122,0.25)' }}>
                  {conv.stage}
                </span>
              </div>
            </div>
            <div style={agentStyles.convMeta}>
              <div style={agentStyles.convTime}>{conv.time}</div>
              <div style={{ ...agentStyles.convValue, color: '#F5A524' }}>{conv.value}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Right: chat */}
      <div style={agentStyles.chat}>
        <div style={agentStyles.chatHeader}>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <div style={{ ...agentStyles.convAvatar, width: 42, height: 42, fontSize: 15, background: 'linear-gradient(135deg,#F5A524,#E8740C)', flexShrink: 0 }}>
              {selected.name.split(' ').map(n => n[0]).join('').slice(0,2)}
            </div>
            <div>
              <div style={agentStyles.chatName}>{selected.name}</div>
              <div style={agentStyles.chatSub}>{selected.company} · {selected.kwp} · {selected.value}</div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button style={agentStyles.chatBtn}>Assumir conversa</button>
            <button style={agentStyles.chatBtnPrimary}>Ver Lead</button>
          </div>
        </div>

        <div style={agentStyles.messages}>
          {selected.messages.map((msg, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: msg.role === 'agent' ? 'flex-start' : 'flex-end', marginBottom: 12 }}>
              {msg.role === 'agent' && (
                <div style={agentStyles.agentAvatar}>◈</div>
              )}
              <div style={{
                ...agentStyles.bubble,
                ...(msg.role === 'agent' ? agentStyles.bubbleAgent : agentStyles.bubbleUser),
                ...(msg.final ? { border: '1px solid rgba(34,197,94,0.3)', background: 'rgba(34,197,94,0.08)' } : {}),
              }}>
                {msg.text}
                <div style={agentStyles.bubbleTime}>{msg.time}</div>
              </div>
            </div>
          ))}
          {selected.status === 'waiting' && (
            <div style={agentStyles.typingWrap}>
              <div style={agentStyles.agentAvatar}>◈</div>
              <div style={{ ...agentStyles.bubble, ...agentStyles.bubbleAgent }}>
                <div style={agentStyles.typing}>
                  <span /><span /><span />
                </div>
              </div>
            </div>
          )}
        </div>

        <div style={agentStyles.chatFooter}>
          <div style={agentStyles.aiLabel}>◈ Sunny Agent está conduzindo esta conversa automaticamente</div>
        </div>
      </div>
    </div>
  );
}

const agentStyles = {
  root: { display: 'flex', height: '100%', overflow: 'hidden' },
  list: { width: 320, borderRight: '1px solid rgba(63,63,70,0.5)', display: 'flex', flexDirection: 'column', overflowY: 'auto' },
  listHeader: { padding: '24px 20px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(63,63,70,0.3)' },
  listTitle: { fontFamily: "'Space Grotesk', sans-serif", fontSize: 18, fontWeight: 700, color: '#FAFAFA', letterSpacing: '-0.01em' },
  liveIndicator: { display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, fontWeight: 600, color: '#22C55E', fontFamily: "'Inter', sans-serif", background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 9999, padding: '4px 10px' },
  liveDot: { width: 7, height: 7, borderRadius: '50%', background: '#22C55E', boxShadow: '0 0 6px rgba(34,197,94,0.6)' },
  searchWrap: { padding: '12px 16px', borderBottom: '1px solid rgba(63,63,70,0.3)' },
  search: { width: '100%', background: '#18181B', border: '1px solid #3F3F46', borderRadius: 8, color: '#FAFAFA', fontFamily: "'Inter', sans-serif", fontSize: 13, padding: '8px 12px', outline: 'none', boxSizing: 'border-box' },
  convItem: { display: 'flex', gap: 12, padding: '14px 16px', borderBottom: '1px solid rgba(63,63,70,0.2)', cursor: 'pointer', transition: 'background 150ms ease-out' },
  convItemActive: { background: 'rgba(245,165,36,0.06)', borderLeft: '3px solid #F5A524', paddingLeft: 13 },
  convAvatar: { width: 36, height: 36, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 13, color: '#09090B', flexShrink: 0 },
  convInfo: { flex: 1, minWidth: 0 },
  convName: { fontSize: 13, fontWeight: 600, color: '#FAFAFA', fontFamily: "'Inter', sans-serif" },
  convCompany: { fontSize: 12, color: '#71717A', fontFamily: "'Inter', sans-serif" },
  stageBadge: { fontSize: 10, fontWeight: 600, borderRadius: 9999, padding: '2px 7px', border: '1px solid', fontFamily: "'Inter', sans-serif" },
  convMeta: { display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4, flexShrink: 0 },
  convTime: { fontSize: 11, color: '#71717A', fontFamily: "'Inter', sans-serif" },
  convValue: { fontSize: 12, fontWeight: 700, fontFamily: "'Space Grotesk', sans-serif" },
  chat: { flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' },
  chatHeader: { padding: '20px 28px', borderBottom: '1px solid rgba(63,63,70,0.3)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  chatName: { fontFamily: "'Space Grotesk', sans-serif", fontSize: 17, fontWeight: 700, color: '#FAFAFA', letterSpacing: '-0.01em' },
  chatSub: { fontSize: 12, color: '#71717A', fontFamily: "'Inter', sans-serif", marginTop: 2 },
  chatBtn: { background: '#18181B', color: '#FAFAFA', border: '1px solid #3F3F46', borderRadius: 8, padding: '7px 14px', fontSize: 12, fontFamily: "'Inter', sans-serif", fontWeight: 500, cursor: 'pointer' },
  chatBtnPrimary: { background: 'linear-gradient(135deg,#F5A524,#E8740C)', color: '#09090B', border: 'none', borderRadius: 8, padding: '7px 14px', fontSize: 12, fontFamily: "'Inter', sans-serif", fontWeight: 700, cursor: 'pointer' },
  messages: { flex: 1, padding: '24px 28px', overflowY: 'auto', display: 'flex', flexDirection: 'column' },
  agentAvatar: { width: 28, height: 28, borderRadius: '50%', background: 'rgba(245,165,36,0.12)', border: '1px solid rgba(245,165,36,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, color: '#F5A524', flexShrink: 0, marginRight: 8, alignSelf: 'flex-start', marginTop: 2 },
  bubble: { maxWidth: '70%', padding: '10px 14px', borderRadius: 12, fontSize: 13, lineHeight: 1.5, fontFamily: "'Inter', sans-serif" },
  bubbleAgent: { background: '#18181B', border: '1px solid rgba(63,63,70,0.4)', color: '#FAFAFA', borderRadius: '4px 12px 12px 12px' },
  bubbleUser: { background: 'rgba(245,165,36,0.1)', border: '1px solid rgba(245,165,36,0.2)', color: '#FAFAFA', borderRadius: '12px 4px 12px 12px' },
  bubbleTime: { fontSize: 10, color: '#71717A', marginTop: 4, textAlign: 'right' },
  typingWrap: { display: 'flex', alignItems: 'flex-start', marginBottom: 12 },
  typing: { display: 'flex', gap: 4, padding: '4px 2px', alignItems: 'center' },
  chatFooter: { padding: '14px 28px', borderTop: '1px solid rgba(63,63,70,0.3)', background: '#0A0A0F' },
  aiLabel: { fontSize: 12, color: '#71717A', fontFamily: "'Inter', sans-serif", textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 },
};

Object.assign(window, { AgentView });
