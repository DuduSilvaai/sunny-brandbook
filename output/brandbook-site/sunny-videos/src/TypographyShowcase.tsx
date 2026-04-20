import {
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  Easing,
  AbsoluteFill,
} from "remotion";

const ACCENT = "#FF6B00";
const GOLD = "#FACC15";

const WEIGHTS = [
  { weight: 300, label: "Light" },
  { weight: 400, label: "Regular" },
  { weight: 500, label: "Medium" },
  { weight: 600, label: "Semi Bold" },
  { weight: 700, label: "Bold" },
];

export const TypographyShowcase: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // "Aa" scale-up
  const aaScale = interpolate(frame, [0.3 * fps, 1.5 * fps], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });
  const aaOpacity = interpolate(frame, [0.3 * fps, 1 * fps], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Font family labels
  const spaceGroteskOpacity = interpolate(frame, [1.2 * fps, 1.8 * fps], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const spaceGroteskX = interpolate(frame, [1.2 * fps, 2 * fps], [-100, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const interOpacity = interpolate(frame, [1.5 * fps, 2.1 * fps], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const interX = interpolate(frame, [1.5 * fps, 2.3 * fps], [100, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  // Tagline word-by-word
  const tagline = "NENHUM LEAD MORRE AO SOL.".split(" ");
  const taglineDelay = 2.8;

  // Golden underline
  const underlineWidth = interpolate(frame, [4.2 * fps, 5.5 * fps], [0, 100], {
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
      {/* Ambient glow */}
      <div
        style={{
          position: "absolute",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${GOLD}12 0%, transparent 70%)`,
          opacity: interpolate(frame, [0, 1.5 * fps], [0, 1], { extrapolateRight: "clamp" }),
        }}
      />

      {/* Large "Aa" */}
      <div
        style={{
          fontSize: 280,
          fontWeight: 700,
          color: "white",
          opacity: aaOpacity,
          transform: `scale(${aaScale})`,
          lineHeight: 1,
          marginBottom: 40,
          background: `linear-gradient(135deg, white 60%, ${GOLD} 100%)`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Aa
      </div>

      {/* Font family labels side by side */}
      <div
        style={{
          display: "flex",
          gap: 60,
          marginBottom: 50,
        }}
      >
        <div
          style={{
            opacity: spaceGroteskOpacity,
            transform: `translateX(${spaceGroteskX}px)`,
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: 32, fontWeight: 700, color: "white" }}>Space Grotesk</div>
          <div style={{ fontSize: 14, color: ACCENT, letterSpacing: 3, marginTop: 8 }}>PRIMARY · HEADERS</div>
        </div>
        <div
          style={{
            width: 1,
            height: 60,
            background: `linear-gradient(to bottom, transparent, ${ACCENT}, transparent)`,
            opacity: Math.min(spaceGroteskOpacity, interOpacity),
          }}
        />
        <div
          style={{
            opacity: interOpacity,
            transform: `translateX(${interX}px)`,
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: 32, fontWeight: 400, color: "white", fontFamily: "'Inter', sans-serif" }}>Inter</div>
          <div style={{ fontSize: 14, color: GOLD, letterSpacing: 3, marginTop: 8 }}>SECONDARY · BODY</div>
        </div>
      </div>

      {/* Weight cascade */}
      <div style={{ display: "flex", gap: 24, marginBottom: 50 }}>
        {WEIGHTS.map((w, i) => {
          const wDelay = 2 + i * 0.15;
          const wOpacity = interpolate(frame, [wDelay * fps, (wDelay + 0.4) * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });
          const wY = interpolate(frame, [wDelay * fps, (wDelay + 0.5) * fps], [30, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          });
          return (
            <div
              key={w.weight}
              style={{
                opacity: wOpacity,
                transform: `translateY(${wY}px)`,
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: 36, fontWeight: w.weight, color: "white" }}>Ag</div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", marginTop: 6 }}>
                {w.weight} · {w.label}
              </div>
            </div>
          );
        })}
      </div>

      {/* Tagline word-by-word */}
      <div style={{ display: "flex", gap: 16, marginBottom: 24 }}>
        {tagline.map((word, i) => {
          const wordDelay = taglineDelay + i * 0.2;
          const wordOpacity = interpolate(frame, [wordDelay * fps, (wordDelay + 0.3) * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });
          const wordY = interpolate(frame, [wordDelay * fps, (wordDelay + 0.4) * fps], [20, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          });
          return (
            <span
              key={i}
              style={{
                fontSize: 28,
                fontWeight: 600,
                color: i === tagline.length - 1 ? GOLD : "white",
                opacity: wordOpacity,
                transform: `translateY(${wordY}px)`,
                display: "inline-block",
                letterSpacing: 2,
              }}
            >
              {word}
            </span>
          );
        })}
      </div>

      {/* Golden underline */}
      <div
        style={{
          width: `${underlineWidth}%`,
          maxWidth: 600,
          height: 3,
          background: `linear-gradient(90deg, ${ACCENT}, ${GOLD})`,
          borderRadius: 2,
        }}
      />
    </AbsoluteFill>
  );
};
