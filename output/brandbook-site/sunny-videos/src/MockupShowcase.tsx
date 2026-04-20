import {
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  Easing,
  AbsoluteFill,
} from "remotion";

const ACCENT = "#FF6B00";
const GOLD = "#FACC15";

/* ─── Individual mockup item with 3D entrance ─── */
const MockupItem: React.FC<{
  label: string;
  icon: string;
  delay: number;
  fromDirection: "left" | "right" | "top";
  width: number;
  height: number;
}> = ({ label, icon, delay, fromDirection, width, height }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const start = delay * fps;

  const opacity = interpolate(frame, [start, start + 0.5 * fps], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const translateX =
    fromDirection === "left"
      ? interpolate(frame, [start, start + 0.8 * fps], [-300, 0], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: Easing.bezier(0.16, 1, 0.3, 1),
        })
      : fromDirection === "right"
      ? interpolate(frame, [start, start + 0.8 * fps], [300, 0], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: Easing.bezier(0.16, 1, 0.3, 1),
        })
      : 0;

  const translateY =
    fromDirection === "top"
      ? interpolate(frame, [start, start + 0.8 * fps], [-300, 0], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: Easing.bezier(0.16, 1, 0.3, 1),
        })
      : 0;

  const rotateY =
    fromDirection !== "top"
      ? interpolate(frame, [start, start + 0.9 * fps], [fromDirection === "left" ? -25 : 25, 0], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: Easing.bezier(0.16, 1, 0.3, 1),
        })
      : 0;

  const logoGlow = interpolate(frame, [start + 0.8 * fps, start + 1.5 * fps], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        opacity,
        transform: `translateX(${translateX}px) translateY(${translateY}px) perspective(800px) rotateY(${rotateY}deg)`,
        width,
        height,
        background: "#111",
        borderRadius: 16,
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
          background: `linear-gradient(145deg, ${ACCENT}08 0%, transparent 50%, ${GOLD}05 100%)`,
        }}
      />

      {/* Sunny logo on item */}
      <svg
        viewBox="0 0 100 100"
        style={{
          width: 60,
          height: 60,
          filter: `drop-shadow(0 0 ${logoGlow * 20}px ${ACCENT})`,
        }}
      >
        <circle cx="50" cy="50" r="45" fill="none" stroke={ACCENT} strokeWidth="2" strokeDasharray="6 6" />
        <path d="M 60 25 L 35 52 L 52 52 L 40 75 L 65 48 L 48 48 Z" fill={ACCENT} />
      </svg>

      {/* Item label */}
      <div
        style={{
          marginTop: 16,
          fontSize: 18,
          fontWeight: 600,
          color: "white",
          fontFamily: "'Space Grotesk', sans-serif",
          letterSpacing: 1,
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontSize: 11,
          color: "rgba(255,255,255,0.35)",
          marginTop: 6,
          letterSpacing: 3,
          textTransform: "uppercase",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        {icon}
      </div>
    </div>
  );
};

export const MockupShowcase: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Title
  const titleOpacity = interpolate(frame, [0, 0.6 * fps], [0, 1], {
    extrapolateRight: "clamp",
  });
  const titleY = interpolate(frame, [0, 0.6 * fps], [40, 0], {
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  // Collection label at end
  const collectionOpacity = interpolate(frame, [5 * fps, 5.8 * fps], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const collectionY = interpolate(frame, [5 * fps, 5.8 * fps], [30, 0], {
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
      {/* Background ambient */}
      <div
        style={{
          position: "absolute",
          width: 1000,
          height: 1000,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${ACCENT}08 0%, transparent 60%)`,
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
        <div style={{ fontSize: 14, color: GOLD, letterSpacing: 6, fontFamily: "'Inter', sans-serif" }}>
          PRINT & STATIONERY
        </div>
        <h1 style={{ fontSize: 56, fontWeight: 700, color: "white", margin: "12px 0 0", letterSpacing: -2 }}>
          Brand Applications
        </h1>
      </div>

      {/* Mockup grid - top row */}
      <div style={{ display: "flex", gap: 30, marginBottom: 30 }}>
        <MockupItem label="Business Card" icon="FRONT / VERSO" delay={0.8} fromDirection="left" width={320} height={200} />
        <MockupItem label="Letterhead A4" icon="CORPORATE PAPER" delay={1.2} fromDirection="top" width={260} height={340} />
        <MockupItem label="Envelope" icon="C5 · BRANDED" delay={1.6} fromDirection="right" width={320} height={200} />
      </div>

      {/* Bottom row */}
      <div style={{ display: "flex", gap: 30 }}>
        <MockupItem label="ID Badge" icon="EMPLOYEE CARD" delay={2.0} fromDirection="left" width={180} height={250} />
        <MockupItem label="Notebook" icon="BRANDED A5" delay={2.4} fromDirection="top" width={240} height={250} />
        <MockupItem label="USB Drive" icon="PRESENTATION KIT" delay={2.8} fromDirection="right" width={180} height={250} />
      </div>

      {/* Collection label */}
      <div
        style={{
          opacity: collectionOpacity,
          transform: `translateY(${collectionY}px)`,
          marginTop: 40,
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: 13, color: ACCENT, letterSpacing: 4, fontFamily: "'Inter', sans-serif" }}>
          SUNNY · CORPORATE KIT 2026
        </div>
      </div>
    </AbsoluteFill>
  );
};
