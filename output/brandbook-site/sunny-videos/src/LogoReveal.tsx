import {
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  Easing,
  AbsoluteFill,
} from "remotion";

const ACCENT = "#FF6B00";
const GOLD = "#FACC15";

export const LogoReveal: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Phase 1: Golden ray traces S-curve (0-2s)
  const pathProgress = interpolate(frame, [0, 2 * fps], [0, 1], {
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.65, 0, 0.35, 1),
  });

  // Phase 2: Corona forms (1.5s-3s)
  const coronaOpacity = interpolate(frame, [1.5 * fps, 3 * fps], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });
  const coronaScale = interpolate(frame, [1.5 * fps, 3 * fps], [0.8, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  // Phase 3: Flash (2.5s-3s)
  const flashOpacity = interpolate(
    frame,
    [2.5 * fps, 2.7 * fps, 3 * fps],
    [0, 0.8, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  // Phase 4: Full logo solidifies (3s-4s)
  const finalOpacity = interpolate(frame, [3 * fps, 4 * fps], [0.5, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  // Subtle rotation for the corona
  const coronaRotation = interpolate(frame, [0, 4 * fps], [0, 360], {
    extrapolateRight: "extend",
  });

  // Bolt path length
  const boltDashOffset = interpolate(frame, [0, 2 * fps], [200, 0], {
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.65, 0, 0.35, 1),
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#050505",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Space Grotesk', sans-serif",
      }}
    >
      {/* Flash effect */}
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundColor: ACCENT,
          opacity: flashOpacity,
        }}
      />

      {/* Electric spark particles along bolt path */}
      {Array.from({ length: 8 }).map((_, i) => {
        const sparkDelay = (i / 8) * 1.5;
        const sparkFrame = frame - sparkDelay * fps;
        const sparkOpacity = interpolate(sparkFrame, [0, 0.2 * fps, 0.5 * fps], [0, 1, 0], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        });
        const boltPoints = [[60,25],[35,52],[52,52],[40,75],[65,48],[48,48]];
        const idx = Math.min(Math.floor((sparkDelay / 1.5) * (boltPoints.length - 1)), boltPoints.length - 1);
        const pt = boltPoints[idx];
        const jitterX = Math.sin(i * 7 + frame * 0.3) * 8;
        const jitterY = Math.cos(i * 5 + frame * 0.4) * 8;
        return (
          <div
            key={`spark-${i}`}
            style={{
              position: "absolute",
              width: 4,
              height: 4,
              borderRadius: "50%",
              background: i % 2 === 0 ? GOLD : ACCENT,
              boxShadow: `0 0 10px ${i % 2 === 0 ? GOLD : ACCENT}`,
              opacity: sparkOpacity * pathProgress,
              left: `calc(50% + ${(pt[0] - 50) * 6 + jitterX}px)`,
              top: `calc(50% + ${(pt[1] - 50) * 6 + jitterY}px)`,
            }}
          />
        );
      })}

      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          width: 1400,
          height: 1400,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${ACCENT}30 0%, transparent 70%)`,
          opacity: coronaOpacity,
          transform: `scale(${coronaScale})`,
        }}
      />

      {/* Main logo SVG */}
      <svg
        viewBox="0 0 100 100"
        style={{
          width: 600,
          height: 600,
          opacity: finalOpacity,
        }}
      >
        <defs>
          <linearGradient id="revealGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={GOLD} />
            <stop offset="100%" stopColor={ACCENT} />
          </linearGradient>
        </defs>

        {/* Corona — dashed circle */}
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="url(#revealGrad)"
          strokeWidth="3"
          strokeDasharray="6 8"
          opacity={coronaOpacity}
          transform={`rotate(${coronaRotation} 50 50)`}
        />

        {/* Lightning bolt — drawn progressively */}
        <path
          d="M 60 25 L 35 52 L 52 52 L 40 75 L 65 48 L 48 48 Z"
          fill="none"
          stroke="url(#revealGrad)"
          strokeWidth="4"
          strokeLinejoin="round"
          strokeDasharray="200"
          strokeDashoffset={boltDashOffset}
        />

        {/* Solid fill after flash */}
        <path
          d="M 60 25 L 35 52 L 52 52 L 40 75 L 65 48 L 48 48 Z"
          fill="url(#revealGrad)"
          opacity={interpolate(frame, [2.8 * fps, 3.5 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          })}
        />
      </svg>

      {/* Brand name */}
      <div
        style={{
          position: "absolute",
          bottom: 240,
          opacity: interpolate(frame, [3.5 * fps, 4.5 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          transform: `translateY(${interpolate(
            frame,
            [3.5 * fps, 4.5 * fps],
            [20, 0],
            {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }
          )}px)`,
        }}
      >
        <span
          style={{
            fontSize: 160,
            fontWeight: 700,
            color: "white",
            letterSpacing: -1,
          }}
        >
          Sunny
        </span>
      </div>

      {/* Subtitle */}
      <div
        style={{
          position: "absolute",
          bottom: 160,
          opacity: interpolate(frame, [4 * fps, 5 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        <span
          style={{
            fontSize: 32,
            fontWeight: 400,
            color: ACCENT,
            letterSpacing: 8,
            textTransform: "uppercase" as const,
          }}
        >
          Solar Sales Intelligence
        </span>
      </div>
    </AbsoluteFill>
  );
};
