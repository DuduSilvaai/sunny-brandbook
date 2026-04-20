import {
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  Easing,
  AbsoluteFill,
} from "remotion";

const ACCENT = "#FF6B00";
const GOLD = "#FACC15";

const SunRays: React.FC<{ opacity: number; scale: number; rotation: number }> = ({
  opacity,
  scale,
  rotation,
}) => (
  <svg
    viewBox="0 0 200 200"
    style={{
      position: "absolute",
      width: 1500,
      height: 1500,
      opacity,
      transform: `scale(${scale}) rotate(${rotation}deg)`,
    }}
  >
    <defs>
      <linearGradient id="ray" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={ACCENT} stopOpacity="0.8" />
        <stop offset="100%" stopColor={GOLD} stopOpacity="0.8" />
      </linearGradient>
      <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="4" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>
    <circle cx="100" cy="100" r="85" fill="none" stroke="url(#ray)" strokeWidth="1" strokeDasharray="4 16" opacity="0.5" filter="url(#glow)" />
    <circle cx="100" cy="100" r="70" fill="none" stroke="url(#ray)" strokeWidth="0.5" strokeDasharray="1 8" opacity="0.3" transform={`rotate(-${rotation * 2} 100 100)`} />
    <circle cx="100" cy="100" r="95" fill="none" stroke="url(#ray)" strokeWidth="1.5" strokeDasharray="30 20 5 20" opacity="0.4" />
  </svg>
);

export const HeroBrandbook: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Phase 1: Black → solar flare emerges (0-2s)
  const flareOpacity = interpolate(frame, [0, 2 * fps], [0, 1], {
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });
  const flareScale = interpolate(frame, [0, 2 * fps], [0.3, 1], {
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  // Phase 2: Logo form from particles (1s-4s)
  const logoOpacity = interpolate(frame, [1 * fps, 3 * fps], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });
  const logoScale = interpolate(frame, [1 * fps, 3 * fps], [0.6, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  // Phase 3: Tagline (3s-5s)
  const tagOpacity = interpolate(frame, [3 * fps, 4.5 * fps], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });
  const tagY = interpolate(frame, [3 * fps, 4.5 * fps], [30, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  // Glow pulse (continuous after 4s)
  const glowPulse = interpolate(
    frame % Math.round(2 * fps),
    [0, fps, 2 * fps],
    [0.15, 0.35, 0.15],
    { extrapolateRight: "clamp" }
  );

  // Slow rotation for rays
  const rayRotation = interpolate(frame, [0, 10 * fps], [0, 360], {
    extrapolateRight: "extend",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#050505",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Space Grotesk', sans-serif",
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          width: 1400,
          height: 1400,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${ACCENT}${Math.round(glowPulse * 255)
            .toString(16)
            .padStart(2, "0")} 0%, transparent 70%)`,
          opacity: flareOpacity,
        }}
      />

      {/* Scan-line overlay */}
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,107,0,0.03) 3px, rgba(255,107,0,0.03) 4px)`,
          opacity: interpolate(frame, [0, 2 * fps], [0, 0.5], {
            extrapolateRight: "clamp",
          }),
          transform: `translateY(${interpolate(frame, [0, 10 * fps], [0, -200], { extrapolateRight: "extend" })}px)`,
        }}
      />

      {/* Golden particle burst at climax */}
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i / 12) * Math.PI * 2;
        const burstProgress = interpolate(frame, [2.5 * fps, 4 * fps], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: Easing.bezier(0.16, 1, 0.3, 1),
        });
        const radius = burstProgress * 400;
        const particleOpacity = interpolate(frame, [2.5 * fps, 3.5 * fps, 5 * fps], [0, 0.8, 0], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        });
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: i % 2 === 0 ? GOLD : ACCENT,
              opacity: particleOpacity,
              transform: `translate(${Math.cos(angle) * radius}px, ${Math.sin(angle) * radius}px)`,
              boxShadow: `0 0 12px ${i % 2 === 0 ? GOLD : ACCENT}`,
            }}
          />
        );
      })}

      {/* Sun rays */}
      <div
        style={{
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <SunRays opacity={flareOpacity * 0.6} scale={flareScale} rotation={rayRotation} />
      </div>

      {/* Logo */}
      <svg
        viewBox="0 0 100 100"
        style={{
          width: 400,
          height: 400,
          opacity: logoOpacity,
          transform: `scale(${logoScale})`,
        }}
      >
        <defs>
          <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={GOLD} />
            <stop offset="100%" stopColor={ACCENT} />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="45" fill="none" stroke="url(#logoGrad)" strokeWidth="1.5" opacity="0.6" />
        <circle cx="50" cy="50" r="48" fill="none" stroke="url(#logoGrad)" strokeWidth="0.5" opacity="0.3" />
        <path d="M 60 25 L 35 52 L 52 52 L 40 75 L 65 48 L 48 48 Z" fill="url(#logoGrad)" />
      </svg>

      {/* Brand name */}
      <div
        style={{
          marginTop: 48,
          opacity: logoOpacity,
          transform: `scale(${logoScale})`,
        }}
      >
        <span
          style={{
            fontSize: 150,
            fontWeight: 700,
            color: "white",
            letterSpacing: -4,
          }}
        >
          Sunny
        </span>
      </div>

      {/* Tagline */}
      <div
        style={{
          marginTop: 32,
          opacity: tagOpacity,
          transform: `translateY(${tagY}px)`,
        }}
      >
        <span
          style={{
            fontSize: 48,
            fontWeight: 400,
            color: "rgba(255,255,255,0.6)",
            letterSpacing: 8,
            textTransform: "uppercase",
          }}
        >
          Nenhum lead morre ao sol.
        </span>
      </div>

      {/* Version badge */}
      <div
        style={{
          position: "absolute",
          bottom: 100,
          opacity: tagOpacity,
          transform: `translateY(${tagY}px)`,
        }}
      >
        <span
          style={{
            fontSize: 24,
            fontWeight: 500,
            color: ACCENT,
            letterSpacing: 8,
            textTransform: "uppercase",
            borderTop: `2px solid ${ACCENT}80`,
            paddingTop: 24,
          }}
        >
          BRANDBOOK V2.0 — SOLAR SALES INTELLIGENCE
        </span>
      </div>
    </AbsoluteFill>
  );
};
