import {
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  Easing,
  AbsoluteFill,
} from "remotion";

const ACCENT = "#FF6B00";
const GOLD = "#FACC15";

/* ─── Merch Item with gradient fill ─── */
const MerchItem: React.FC<{
  label: string;
  sublabel: string;
  delay: number;
  shape: "tshirt" | "cap" | "mug" | "hoodie";
}> = ({ label, sublabel, delay, shape }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const start = delay * fps;

  const opacity = interpolate(frame, [start, start + 0.5 * fps], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const scale = interpolate(frame, [start, start + 0.6 * fps, start + 0.9 * fps], [0.5, 1.08, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  // Gradient fill wipe
  const fillPercent = interpolate(frame, [start + 0.3 * fps, start + 1.2 * fps], [0, 100], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  // Steam for mug
  const steamOpacity =
    shape === "mug"
      ? interpolate(frame, [start + 1 * fps, start + 1.5 * fps], [0, 0.5], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        })
      : 0;

  const steamY =
    shape === "mug"
      ? interpolate(frame, [start + 1 * fps, start + 3 * fps], [0, -20], {
          extrapolateLeft: "clamp",
          extrapolateRight: "extend",
        })
      : 0;

  // Wordmark typing
  const wordmark = "SUNNY";
  const charsToShow = Math.floor(
    interpolate(frame, [start + 0.8 * fps, start + 1.5 * fps], [0, wordmark.length], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    })
  );

  return (
    <div
      style={{
        opacity,
        transform: `scale(${scale})`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 16,
      }}
    >
      <div
        style={{
          width: 240,
          height: 280,
          borderRadius: 20,
          background: `linear-gradient(to top, #111 ${100 - fillPercent}%, #1a1a1a ${100 - fillPercent}%)`,
          border: "1px solid #222",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Gradient overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `linear-gradient(to top, ${ACCENT}15 0%, transparent ${fillPercent}%)`,
          }}
        />

        {/* Shape icon */}
        <svg viewBox="0 0 80 80" style={{ width: 80, height: 80, marginBottom: 8 }}>
          {shape === "tshirt" && (
            <path
              d="M25 15 L15 25 L20 30 L25 25 L25 65 L55 65 L55 25 L60 30 L65 25 L55 15 L45 20 L35 20 Z"
              fill="none"
              stroke={ACCENT}
              strokeWidth="2"
            />
          )}
          {shape === "cap" && (
            <>
              <ellipse cx="40" cy="50" rx="30" ry="12" fill="none" stroke={ACCENT} strokeWidth="2" />
              <path d="M10 50 Q10 25 40 20 Q70 25 70 50" fill="none" stroke={ACCENT} strokeWidth="2" />
              <line x1="40" y1="20" x2="40" y2="12" stroke={GOLD} strokeWidth="2" />
            </>
          )}
          {shape === "mug" && (
            <>
              <rect x="15" y="20" width="35" height="45" rx="4" fill="none" stroke={ACCENT} strokeWidth="2" />
              <path d="M50 30 Q65 30 65 42 Q65 55 50 55" fill="none" stroke={ACCENT} strokeWidth="2" />
            </>
          )}
          {shape === "hoodie" && (
            <path
              d="M20 20 L10 35 L18 38 L18 65 L62 65 L62 38 L70 35 L60 20 L48 28 Q40 32 32 28 Z"
              fill="none"
              stroke={ACCENT}
              strokeWidth="2"
            />
          )}
        </svg>

        {/* Wordmark typing */}
        <div
          style={{
            fontSize: 24,
            fontWeight: 700,
            color: GOLD,
            fontFamily: "'Space Grotesk', sans-serif",
            letterSpacing: 6,
          }}
        >
          {wordmark.slice(0, charsToShow)}
          <span style={{ opacity: Math.sin(frame * 0.3) > 0 ? 1 : 0, color: ACCENT }}>|</span>
        </div>

        {/* Steam for mug */}
        {shape === "mug" && (
          <div style={{ position: "absolute", top: 10, left: "35%", opacity: steamOpacity, transform: `translateY(${steamY}px)` }}>
            {[0, 1, 2].map((s) => (
              <div
                key={s}
                style={{
                  width: 3,
                  height: 20,
                  background: `rgba(255,255,255,0.15)`,
                  borderRadius: 2,
                  display: "inline-block",
                  marginLeft: 8,
                  transform: `translateY(${Math.sin(frame * 0.15 + s * 2) * 5}px)`,
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Labels */}
      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: 18, fontWeight: 600, color: "white", fontFamily: "'Space Grotesk', sans-serif" }}>
          {label}
        </div>
        <div style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", marginTop: 4, letterSpacing: 2, fontFamily: "'Inter', sans-serif" }}>
          {sublabel}
        </div>
      </div>
    </div>
  );
};

export const ActivationShowcase: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleOpacity = interpolate(frame, [0, 0.6 * fps], [0, 1], { extrapolateRight: "clamp" });
  const titleY = interpolate(frame, [0, 0.6 * fps], [40, 0], {
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  // Price tag slide
  const tagOpacity = interpolate(frame, [4.5 * fps, 5.2 * fps], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const tagX = interpolate(frame, [4.5 * fps, 5.5 * fps], [100, 0], {
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
      {/* Background gradient */}
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          background: `radial-gradient(ellipse at 50% 80%, ${ACCENT}08 0%, transparent 60%)`,
        }}
      />

      {/* Title */}
      <div
        style={{
          opacity: titleOpacity,
          transform: `translateY(${titleY}px)`,
          textAlign: "center",
          marginBottom: 50,
        }}
      >
        <div style={{ fontSize: 14, color: ACCENT, letterSpacing: 6, fontFamily: "'Inter', sans-serif" }}>
          APPAREL & MERCH
        </div>
        <h1 style={{ fontSize: 56, fontWeight: 700, color: "white", margin: "12px 0 0", letterSpacing: -2 }}>
          Activation Collection
        </h1>
      </div>

      {/* Merch grid */}
      <div style={{ display: "flex", gap: 36, marginBottom: 30 }}>
        <MerchItem label="Camiseta" sublabel="PREMIUM COTTON" delay={0.8} shape="tshirt" />
        <MerchItem label="Boné" sublabel="SNAPBACK FIT" delay={1.3} shape="cap" />
        <MerchItem label="Caneca" sublabel="CERAMIC 350ML" delay={1.8} shape="mug" />
        <MerchItem label="Hoodie" sublabel="HEAVYWEIGHT" delay={2.3} shape="hoodie" />
      </div>

      {/* Collection tag */}
      <div
        style={{
          opacity: tagOpacity,
          transform: `translateX(${tagX}px)`,
          background: "#111",
          border: `1px solid ${ACCENT}33`,
          borderRadius: 100,
          padding: "12px 32px",
          display: "flex",
          alignItems: "center",
          gap: 12,
        }}
      >
        <div style={{ width: 8, height: 8, borderRadius: "50%", background: GOLD }} />
        <span style={{ fontSize: 14, color: "white", letterSpacing: 3, fontWeight: 500 }}>
          SOLAR COLLECTION 2026
        </span>
      </div>
    </AbsoluteFill>
  );
};
