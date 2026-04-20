import {
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  Easing,
  AbsoluteFill,
} from "remotion";

const ACCENT = "#FF6B00";
const GOLD = "#FACC15";

const TOKENS = [
  { name: "--space-4", value: "16px", category: "Spacing", numValue: 16, color: ACCENT },
  { name: "--space-8", value: "32px", category: "Spacing", numValue: 32, color: ACCENT },
  { name: "--space-16", value: "64px", category: "Spacing", numValue: 64, color: ACCENT },
  { name: "--radius-sm", value: "8px", category: "Radius", numValue: 8, color: GOLD },
  { name: "--radius-lg", value: "16px", category: "Radius", numValue: 16, color: GOLD },
  { name: "--radius-xl", value: "24px", category: "Radius", numValue: 24, color: GOLD },
  { name: "--shadow-sm", value: "0 2px 8px", category: "Shadow", numValue: 2, color: "#DC2626" },
  { name: "--shadow-lg", value: "0 8px 32px", category: "Shadow", numValue: 8, color: "#DC2626" },
];

const TokenCard: React.FC<{
  token: typeof TOKENS[0];
  index: number;
  col: number;
  row: number;
}> = ({ token, index, col, row }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const delay = 1 + index * 0.18;
  const start = delay * fps;

  // Morph from dot to card
  const scale = interpolate(frame, [start, start + 0.5 * fps, start + 0.8 * fps], [0, 1.1, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const opacity = interpolate(frame, [start, start + 0.3 * fps], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Count up value
  const countEnd = start + 1.2 * fps;
  const countProgress = interpolate(frame, [start + 0.3 * fps, countEnd], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });
  const displayValue = Math.round(token.numValue * countProgress);

  return (
    <div
      style={{
        opacity,
        transform: `scale(${scale})`,
        background: "#111",
        border: `1px solid ${token.color}33`,
        borderRadius: 16,
        padding: "24px 20px",
        width: 200,
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glow pulse */}
      <div
        style={{
          position: "absolute",
          top: -20,
          left: "50%",
          transform: "translateX(-50%)",
          width: 80,
          height: 80,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${token.color}30 0%, transparent 70%)`,
          opacity: interpolate(frame, [start + 0.5 * fps, start + 1 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      />

      {/* Count value */}
      <div
        style={{
          fontSize: 42,
          fontWeight: 700,
          color: token.color,
          fontFamily: "'Space Grotesk', sans-serif",
          lineHeight: 1,
        }}
      >
        {displayValue}
        <span style={{ fontSize: 16, opacity: 0.6 }}>px</span>
      </div>

      {/* Token name */}
      <div
        style={{
          fontSize: 13,
          color: "white",
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 500,
          marginTop: 12,
        }}
      >
        {token.name}
      </div>

      {/* Category label */}
      <div
        style={{
          fontSize: 10,
          color: "rgba(255,255,255,0.35)",
          letterSpacing: 2,
          textTransform: "uppercase",
          marginTop: 6,
          fontFamily: "'Inter', sans-serif",
        }}
      >
        {token.category}
      </div>
    </div>
  );
};

export const TokenSystemShowcase: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Title
  const titleOpacity = interpolate(frame, [0, 0.8 * fps], [0, 1], {
    extrapolateRight: "clamp",
  });
  const titleY = interpolate(frame, [0, 0.8 * fps], [50, 0], {
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  // Connection lines
  const lineProgress = interpolate(frame, [3 * fps, 5 * fps], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  return (
    <AbsoluteFill
      style={{
        background: "#050505",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Space Grotesk', sans-serif",
      }}
    >
      {/* Grid pattern background */}
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundImage: `
            linear-gradient(rgba(255,107,0,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,107,0,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          opacity: interpolate(frame, [0, 1.5 * fps], [0, 1], { extrapolateRight: "clamp" }),
        }}
      />

      {/* Title */}
      <div
        style={{
          opacity: titleOpacity,
          transform: `translateY(${titleY}px)`,
          textAlign: "center",
          marginBottom: 60,
        }}
      >
        <div style={{ fontSize: 14, color: ACCENT, letterSpacing: 6, fontFamily: "'Inter', sans-serif" }}>
          DESIGN TOKENS
        </div>
        <h1 style={{ fontSize: 64, fontWeight: 700, color: "white", margin: "12px 0 0", letterSpacing: -2 }}>
          Token System
        </h1>
      </div>

      {/* Token grid */}
      <div style={{ display: "flex", gap: 28, flexWrap: "wrap", justifyContent: "center", maxWidth: 1400, position: "relative" }}>
        {/* Connection lines SVG */}
        <svg
          style={{ position: "absolute", width: "100%", height: "100%", pointerEvents: "none" }}
          viewBox="0 0 1400 300"
        >
          {/* Horizontal connections between spacing tokens */}
          <line
            x1="200" y1="80" x2="450" y2="80"
            stroke={ACCENT}
            strokeWidth="1"
            strokeDasharray="4 4"
            opacity={lineProgress * 0.3}
          />
          <line
            x1="460" y1="80" x2="710" y2="80"
            stroke={ACCENT}
            strokeWidth="1"
            strokeDasharray="4 4"
            opacity={lineProgress * 0.3}
          />
          {/* Between radius tokens */}
          <line
            x1="750" y1="80" x2="1000" y2="80"
            stroke={GOLD}
            strokeWidth="1"
            strokeDasharray="4 4"
            opacity={lineProgress * 0.3}
          />
        </svg>

        {TOKENS.map((token, i) => (
          <TokenCard
            key={token.name}
            token={token}
            index={i}
            col={i % 4}
            row={Math.floor(i / 4)}
          />
        ))}
      </div>
    </AbsoluteFill>
  );
};
