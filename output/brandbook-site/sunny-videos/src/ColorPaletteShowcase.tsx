import {
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  Easing,
  AbsoluteFill,
} from "remotion";

const ACCENT = "#FF6B00";
const GOLD = "#FACC15";

const PALETTE = [
  { name: "Eclipse Black", hex: "#0A0A0A", rgb: "10, 10, 10" },
  { name: "Solar Flare", hex: "#FF6B00", rgb: "255, 107, 0" },
  { name: "Golden Hour", hex: "#FACC15", rgb: "250, 204, 21" },
  { name: "Midnight", hex: "#1A1A2E", rgb: "26, 26, 46" },
  { name: "Dawn White", hex: "#F5F5F5", rgb: "245, 245, 245" },
  { name: "Eclipse Red", hex: "#DC2626", rgb: "220, 38, 38" },
];

const SwatchCard: React.FC<{
  color: typeof PALETTE[0];
  index: number;
  fromRight?: boolean;
}> = ({ color, index, fromRight }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const delay = 0.8 + index * 0.3;
  const start = delay * fps;

  const opacity = interpolate(frame, [start, start + 0.6 * fps], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const x = interpolate(frame, [start, start + 0.8 * fps], [fromRight ? 200 : -200, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const scale = interpolate(frame, [start, start + 0.6 * fps, start + 1.2 * fps], [0.8, 1.05, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const glowOpacity = interpolate(
    frame,
    [start + 0.4 * fps, start + 0.8 * fps, start + 1.5 * fps],
    [0, 0.6, 0.15],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  return (
    <div
      style={{
        opacity,
        transform: `translateX(${x}px) scale(${scale})`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 12,
      }}
    >
      <div
        style={{
          width: 200,
          height: 200,
          borderRadius: 20,
          background: color.hex,
          border: color.hex === "#0A0A0A" ? "1px solid #333" : "none",
          boxShadow: `0 0 ${40 * glowOpacity}px ${color.hex === "#0A0A0A" ? ACCENT : color.hex}`,
        }}
      />
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            fontSize: 18,
            fontWeight: 600,
            color: "white",
            fontFamily: "'Space Grotesk', sans-serif",
          }}
        >
          {color.name}
        </div>
        <div
          style={{
            fontSize: 13,
            color: "rgba(255,255,255,0.4)",
            fontFamily: "'Inter', sans-serif",
            marginTop: 4,
          }}
        >
          {color.hex}
        </div>
      </div>
    </div>
  );
};

export const ColorPaletteShowcase: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Title animation
  const titleOpacity = interpolate(frame, [0, 0.8 * fps], [0, 1], {
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });
  const titleY = interpolate(frame, [0, 0.8 * fps], [60, 0], {
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  // Accent line draw
  const lineWidth = interpolate(frame, [0.5 * fps, 1.5 * fps], [0, 300], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  // Background gradient shift
  const gradAngle = interpolate(frame, [0, 7 * fps], [135, 225], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(${gradAngle}deg, #050505 0%, #0d0d0d 50%, #080808 100%)`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Space Grotesk', sans-serif",
      }}
    >
      {/* Ambient glow */}
      <div
        style={{
          position: "absolute",
          width: 800,
          height: 800,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${ACCENT}15 0%, transparent 70%)`,
          opacity: interpolate(frame, [0, 2 * fps], [0, 1], { extrapolateRight: "clamp" }),
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
        <div
          style={{
            fontSize: 14,
            color: ACCENT,
            letterSpacing: 6,
            textTransform: "uppercase",
            fontFamily: "'Inter', sans-serif",
            fontWeight: 500,
          }}
        >
          BRAND IDENTITY
        </div>
        <h1
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "white",
            margin: "16px 0 0",
            letterSpacing: -2,
          }}
        >
          Color System
        </h1>
        {/* Accent line */}
        <div
          style={{
            width: lineWidth,
            height: 3,
            background: `linear-gradient(90deg, ${ACCENT}, ${GOLD})`,
            margin: "20px auto 0",
            borderRadius: 2,
          }}
        />
      </div>

      {/* Swatch grid */}
      <div
        style={{
          display: "flex",
          gap: 40,
          flexWrap: "wrap",
          justifyContent: "center",
          maxWidth: 1600,
        }}
      >
        {PALETTE.map((color, i) => (
          <SwatchCard key={color.hex} color={color} index={i} fromRight={i % 2 === 1} />
        ))}
      </div>
    </AbsoluteFill>
  );
};
