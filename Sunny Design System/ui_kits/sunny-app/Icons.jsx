// Sunny App — Icon System
// Geometric SVG icons, 16×16 or 20×20 grid, 1.5px stroke, rounded caps

function Icon({ name, size = 16, color = 'currentColor', style = {} }) {
  const icons = {
    // Sun / Conversão — radial rays, no emoji
    sun: (
      <svg width={size} height={size} viewBox="0 0 16 16" fill="none" style={style}>
        <circle cx="8" cy="8" r="2.5" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="8" y1="1" x2="8" y2="3" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="8" y1="13" x2="8" y2="15" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="1" y1="8" x2="3" y2="8" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="13" y1="8" x2="15" y2="8" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="2.93" y1="2.93" x2="4.34" y2="4.34" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="11.66" y1="11.66" x2="13.07" y2="13.07" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="2.93" y1="13.07" x2="4.34" y2="11.66" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="11.66" y1="4.34" x2="13.07" y2="2.93" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    // AI agent node
    agent: (
      <svg width={size} height={size} viewBox="0 0 16 16" fill="none" style={style}>
        <circle cx="8" cy="8" r="2" fill={color}/>
        <circle cx="8" cy="8" r="5.5" stroke={color} strokeWidth="1.2" strokeDasharray="2 1.5"/>
        <circle cx="8" cy="2.5" r="1" fill={color}/>
        <circle cx="8" cy="13.5" r="1" fill={color}/>
        <circle cx="2.5" cy="8" r="1" fill={color}/>
        <circle cx="13.5" cy="8" r="1" fill={color}/>
      </svg>
    ),
    // Warning / Eclipse — triangle
    warning: (
      <svg width={size} height={size} viewBox="0 0 16 16" fill="none" style={style}>
        <path d="M8 2.5L14.5 13.5H1.5L8 2.5Z" stroke={color} strokeWidth="1.5" strokeLinejoin="round"/>
        <line x1="8" y1="7" x2="8" y2="10" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="8" cy="12" r="0.75" fill={color}/>
      </svg>
    ),
    // Trophy / Overdrive — upward burst
    trophy: (
      <svg width={size} height={size} viewBox="0 0 16 16" fill="none" style={style}>
        <path d="M5 2H11V8C11 9.657 9.657 11 8 11C6.343 11 5 9.657 5 8V2Z" stroke={color} strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M5 4H3C3 4 2 4 2 6C2 7.5 3.5 8 5 8" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M11 4H13C13 4 14 4 14 6C14 7.5 12.5 8 11 8" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="8" y1="11" x2="8" y2="13" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="5.5" y1="14" x2="10.5" y2="14" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    // Check — confirmation
    check: (
      <svg width={size} height={size} viewBox="0 0 16 16" fill="none" style={style}>
        <circle cx="8" cy="8" r="6" stroke={color} strokeWidth="1.5"/>
        <path d="M5 8.5L7 10.5L11 6" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    // Calendar — scheduled
    calendar: (
      <svg width={size} height={size} viewBox="0 0 16 16" fill="none" style={style}>
        <rect x="2" y="3" width="12" height="11" rx="2" stroke={color} strokeWidth="1.5"/>
        <line x1="2" y1="7" x2="14" y2="7" stroke={color} strokeWidth="1.5"/>
        <line x1="5" y1="1.5" x2="5" y2="4.5" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="11" y1="1.5" x2="11" y2="4.5" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="8" cy="10.5" r="1" fill={color}/>
      </svg>
    ),
    // Arrow up — delta positive
    arrowUp: (
      <svg width={size} height={size} viewBox="0 0 16 16" fill="none" style={style}>
        <path d="M8 13V3M8 3L4 7M8 3L12 7" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    // Bolt / speed
    bolt: (
      <svg width={size} height={size} viewBox="0 0 16 16" fill="none" style={style}>
        <path d="M9.5 2L4 9H8L6.5 14L13 7H9L9.5 2Z" stroke={color} strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
    // Plus
    plus: (
      <svg width={size} height={size} viewBox="0 0 16 16" fill="none" style={style}>
        <line x1="8" y1="3" x2="8" y2="13" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="3" y1="8" x2="13" y2="8" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    // Search
    search: (
      <svg width={size} height={size} viewBox="0 0 16 16" fill="none" style={style}>
        <circle cx="7" cy="7" r="4.5" stroke={color} strokeWidth="1.5"/>
        <line x1="10.5" y1="10.5" x2="14" y2="14" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  };
  return icons[name] || null;
}

Object.assign(window, { Icon });
