// Sunny App — Sidebar Component
// Navigation sidebar for Sunny OS

const SidebarItems = [
  { id: 'dashboard', icon: '⊞', label: 'Torre de Comando' },
  { id: 'pipeline',  icon: '◫', label: 'Pipeline' },
  { id: 'agent',     icon: '◈', label: 'SDR Agent' },
  { id: 'leads',     icon: '◉', label: 'Leads' },
  { id: 'insights',  icon: '◬', label: 'Insights' },
];

function Sidebar({ active, onNav }) {
  return (
    <aside style={sidebarStyles.aside}>
      {/* Logo */}
      <div style={sidebarStyles.logoWrap}>
        <img src="../../assets/logo-vertical-colorido.png" alt="Sunny" style={{ height: 36 }} />
      </div>

      {/* Nav Items */}
      <nav style={sidebarStyles.nav}>
        {SidebarItems.map(item => (
          <button
            key={item.id}
            onClick={() => onNav(item.id)}
            style={{
              ...sidebarStyles.navItem,
              ...(active === item.id ? sidebarStyles.navItemActive : {}),
            }}
          >
            <span style={sidebarStyles.navIcon}>{item.icon}</span>
            <span style={sidebarStyles.navLabel}>{item.label}</span>
            {active === item.id && <div style={sidebarStyles.activeBar} />}
          </button>
        ))}
      </nav>

      {/* Bottom */}
      <div style={sidebarStyles.bottom}>
        <div style={sidebarStyles.agentStatus}>
          <div style={sidebarStyles.statusDot} />
          <div>
            <div style={sidebarStyles.statusLabel}>SDR Agent</div>
            <div style={sidebarStyles.statusValue}>Ativo · 247 leads</div>
          </div>
        </div>
        <div style={sidebarStyles.userRow}>
          <div style={sidebarStyles.avatar}>JC</div>
          <div>
            <div style={sidebarStyles.userName}>João Carlos</div>
            <div style={sidebarStyles.userRole}>Gestor Comercial</div>
          </div>
        </div>
      </div>
    </aside>
  );
}

const sidebarStyles = {
  aside: {
    width: 220,
    minWidth: 220,
    background: '#0A0A0F',
    borderRight: '1px solid rgba(63,63,70,0.5)',
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 100,
  },
  logoWrap: {
    padding: '24px 20px 20px',
    borderBottom: '1px solid rgba(63,63,70,0.3)',
    marginBottom: 8,
  },
  nav: {
    flex: 1,
    padding: '8px 12px',
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
  },
  navItem: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    padding: '9px 12px',
    borderRadius: 8,
    border: 'none',
    background: 'transparent',
    color: '#71717A',
    cursor: 'pointer',
    fontSize: 13,
    fontFamily: "'Inter', sans-serif",
    fontWeight: 500,
    textAlign: 'left',
    width: '100%',
    position: 'relative',
    transition: 'all 150ms ease-out',
  },
  navItemActive: {
    background: 'rgba(245,165,36,0.08)',
    color: '#F5A524',
  },
  navIcon: {
    fontSize: 16,
    width: 20,
    textAlign: 'center',
    flexShrink: 0,
  },
  navLabel: {
    flex: 1,
  },
  activeBar: {
    position: 'absolute',
    right: 0,
    top: '20%',
    bottom: '20%',
    width: 3,
    background: '#F5A524',
    borderRadius: '3px 0 0 3px',
  },
  bottom: {
    padding: '16px 16px 20px',
    borderTop: '1px solid rgba(63,63,70,0.3)',
    display: 'flex',
    flexDirection: 'column',
    gap: 14,
  },
  agentStatus: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    background: 'rgba(34,197,94,0.08)',
    border: '1px solid rgba(34,197,94,0.2)',
    borderRadius: 8,
    padding: '8px 10px',
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: '50%',
    background: '#22C55E',
    boxShadow: '0 0 6px rgba(34,197,94,0.5)',
    flexShrink: 0,
  },
  statusLabel: {
    fontSize: 11,
    fontWeight: 600,
    color: '#22C55E',
    fontFamily: "'Inter', sans-serif",
  },
  statusValue: {
    fontSize: 11,
    color: '#71717A',
    fontFamily: "'Inter', sans-serif",
  },
  userRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #F5A524, #E8740C)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "'Space Grotesk', sans-serif",
    fontWeight: 700,
    fontSize: 12,
    color: '#09090B',
    flexShrink: 0,
  },
  userName: {
    fontSize: 13,
    fontWeight: 600,
    color: '#FAFAFA',
    fontFamily: "'Inter', sans-serif",
  },
  userRole: {
    fontSize: 11,
    color: '#71717A',
    fontFamily: "'Inter', sans-serif",
  },
};

Object.assign(window, { Sidebar });
