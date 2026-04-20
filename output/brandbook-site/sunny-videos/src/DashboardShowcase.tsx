import {
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  Easing,
  AbsoluteFill,
  Sequence,
} from "remotion";

const ACCENT = "#FF6B00";
const GOLD = "#FACC15";

const MetricCounter: React.FC<{
  value: string;
  label: string;
  delay: number;
}> = ({ value, label, delay }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const start = delay * fps;
  const opacity = interpolate(frame, [start, start + 0.8 * fps], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });
  const y = interpolate(frame, [start, start + 0.8 * fps], [40, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  return (
    <div
      style={{
        textAlign: "center",
        opacity,
        transform: `translateY(${y}px)`,
      }}
    >
      <div
        style={{
          fontSize: 42,
          fontWeight: 700,
          color: ACCENT,
          fontFamily: "'Space Grotesk', sans-serif",
        }}
      >
        {value}
      </div>
      <div
        style={{
          fontSize: 12,
          fontWeight: 500,
          color: "rgba(255,255,255,0.5)",
          letterSpacing: 3,
          textTransform: "uppercase" as const,
          marginTop: 8,
          fontFamily: "'Inter', sans-serif",
        }}
      >
        {label}
      </div>
    </div>
  );
};

const NotificationPop: React.FC<{
  text: string;
  subtext: string;
  delay: number;
}> = ({ text, subtext, delay }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const start = delay * fps;
  const opacity = interpolate(frame, [start, start + 0.5 * fps, start + 3 * fps, start + 3.5 * fps], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const x = interpolate(frame, [start, start + 0.5 * fps], [300, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  return (
    <div
      style={{
        position: "absolute",
        top: 80,
        right: 40,
        backgroundColor: "#1a1a1a",
        border: `1px solid ${ACCENT}40`,
        borderRadius: 12,
        padding: "16px 24px",
        opacity,
        transform: `translateX(${x}px)`,
        maxWidth: 320,
      }}
    >
      <div
        style={{
          fontSize: 14,
          fontWeight: 600,
          color: "white",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        {text}
      </div>
      <div
        style={{
          fontSize: 12,
          color: "rgba(255,255,255,0.5)",
          marginTop: 4,
          fontFamily: "'Inter', sans-serif",
        }}
      >
        {subtext}
      </div>
    </div>
  );
};

const ProgressBar: React.FC<{ delay: number; label: string; percent: number }> = ({
  delay,
  label,
  percent,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const start = delay * fps;
  const width = interpolate(frame, [start, start + 1.5 * fps], [0, percent], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });
  const opacity = interpolate(frame, [start, start + 0.3 * fps], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div style={{ opacity, marginBottom: 16 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 6,
          fontFamily: "'Inter', sans-serif",
        }}
      >
        <span style={{ fontSize: 12, color: "rgba(255,255,255,0.6)" }}>{label}</span>
        <span style={{ fontSize: 12, color: ACCENT, fontWeight: 600 }}>
          {Math.round(width)}%
        </span>
      </div>
      <div
        style={{
          width: "100%",
          height: 4,
          backgroundColor: "#1a1a1a",
          borderRadius: 2,
        }}
      >
        <div
          style={{
            width: `${width}%`,
            height: "100%",
            background: `linear-gradient(90deg, ${ACCENT}, ${GOLD})`,
            borderRadius: 2,
          }}
        />
      </div>
    </div>
  );
};

export const DashboardShowcase: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Phase 1: Dashboard skeleton appears (0-1.5s)
  const dashOpacity = interpolate(frame, [0, 1 * fps], [0, 1], {
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  // Title animation
  const titleOpacity = interpolate(frame, [0.3 * fps, 1 * fps], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#050505",
        fontFamily: "'Space Grotesk', sans-serif",
        padding: 40,
      }}
    >
      {/* Top bar */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          opacity: dashOpacity,
          marginBottom: 20,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <svg viewBox="0 0 100 100" style={{ width: 44, height: 44 }}>
            <defs>
              <linearGradient id="dashGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={GOLD} />
                <stop offset="100%" stopColor={ACCENT} />
              </linearGradient>
            </defs>
            <circle cx="50" cy="50" r="45" fill="none" stroke="url(#dashGrad)" strokeWidth="2" strokeDasharray="6 6" />
            <path d="M 60 25 L 35 52 L 52 52 L 40 75 L 65 48 L 48 48 Z" fill="url(#dashGrad)" />
          </svg>
          <span style={{ fontSize: 28, fontWeight: 700, color: "white" }}>
            Torre de Comando
          </span>
        </div>
        <span
          style={{
            fontSize: 14,
            color: "rgba(255,255,255,0.4)",
            letterSpacing: 4,
            opacity: titleOpacity,
          }}
        >
          SUNNY DASHBOARD
        </span>
      </div>

      {/* Metrics row */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: 24,
          marginBottom: 28,
        }}
      >
        <MetricCounter value="47" label="Leads Ativos" delay={1} />
        <MetricCounter value="12" label="Qualificados Hoje" delay={1.3} />
        <MetricCounter value="< 8min" label="Tempo Médio Resposta" delay={1.6} />
        <MetricCounter value="89%" label="Taxa Follow-up" delay={1.9} />
      </div>

      {/* Pipeline bars */}
      <div
        style={{
          backgroundColor: "#0a0a0a",
          borderRadius: 12,
          border: "1px solid #1a1a1a",
          padding: 24,
          marginBottom: 16,
        }}
      >
        <div
          style={{
            fontSize: 11,
            color: "rgba(255,255,255,0.4)",
            letterSpacing: 3,
            textTransform: "uppercase" as const,
            marginBottom: 20,
          }}
        >
          Funil de Conversão
        </div>
        <ProgressBar delay={2.5} label="Leads Capturados" percent={100} />
        <ProgressBar delay={2.8} label="Respondidos pela IA" percent={95} />
        <ProgressBar delay={3.1} label="Qualificados" percent={62} />
        <ProgressBar delay={3.4} label="Reuniões Agendadas" percent={38} />
        <ProgressBar delay={3.7} label="Propostas Enviadas" percent={24} />
      </div>

      {/* Insolação meter */}
      <Sequence from={Math.round(5 * fps)}>
        <div
          style={{
            position: "absolute",
            bottom: 20,
            left: 40,
            right: 40,
            display: "flex",
            alignItems: "center",
            gap: 16,
            opacity: interpolate(
              useCurrentFrame(),
              [0, 0.5 * fps],
              [0, 1],
              { extrapolateRight: "clamp" }
            ),
          }}
        >
          <span
            style={{
              fontSize: 11,
              color: ACCENT,
              letterSpacing: 3,
              fontWeight: 600,
            }}
          >
            INSOLAÇÃO
          </span>
          <div
            style={{
              flex: 1,
              height: 6,
              backgroundColor: "#1a1a1a",
              borderRadius: 3,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${interpolate(
                  useCurrentFrame(),
                  [0, 2 * fps],
                  [0, 135],
                  {
                    extrapolateRight: "clamp",
                    easing: Easing.bezier(0.16, 1, 0.3, 1),
                  }
                )}%`,
                height: "100%",
                background: `linear-gradient(90deg, ${ACCENT}, ${GOLD})`,
                borderRadius: 3,
              }}
            />
          </div>
          <span
            style={{
              fontSize: 48,
              fontWeight: 700,
              color: GOLD,
            }}
          >
            {Math.round(
              interpolate(useCurrentFrame(), [0, 2 * fps], [0, 135], {
                extrapolateRight: "clamp",
                easing: Easing.bezier(0.16, 1, 0.3, 1),
              })
            )}
            %
          </span>
        </div>
      </Sequence>

      {/* Notification popups */}
      <NotificationPop
        text="Novo lead qualificado"
        subtext="João Silva — Integradora SunPower São Paulo"
        delay={4}
      />
      <NotificationPop
        text="Reunião agendada automaticamente"
        subtext="Amanhã 14h — Lead qualificado via SDR Agent"
        delay={7}
      />
    </AbsoluteFill>
  );
};
