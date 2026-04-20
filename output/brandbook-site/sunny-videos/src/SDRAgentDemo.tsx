import {
  useCurrentFrame,
  useVideoConfig,
  spring,
  AbsoluteFill,
  interpolate,
  Sequence
} from "remotion";

export const SDRAgentDemo: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Heavier, luxurious spring animation
  const entrance = spring({ fps, frame, config: { damping: 24, mass: 2.5, stiffness: 100 } });
  const opacity = interpolate(entrance, [0, 1], [0, 1]);

  return (
    <AbsoluteFill style={{ background: "linear-gradient(135deg, #09090B 0%, #151515 100%)", display: "flex", justifyContent: "center", alignItems: "center" }}>
      {/* Background radial glow based on the true amber/orange brand color */}
      <div style={{ position: "absolute", width: "150%", height: "150%", background: "radial-gradient(circle at 50% 50%, rgba(250, 204, 21, 0.03) 0%, transparent 60%)" }} />

      <div style={{
          transform: `scale(${interpolate(entrance, [0, 1], [0.95, 1])}) translateY(${(1 - entrance) * 30}px)`,
          opacity,
          textAlign: "center"
      }}>
        <h1 style={{ color: "#FACC15", fontSize: 110, margin: 0, fontWeight: 700, fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.02em", background: "linear-gradient(90deg, #FACC15 0%, #E8740C 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>SDR Agent</h1>
        <p style={{ color: "rgba(250, 249, 246, 0.6)", fontSize: 40, marginTop: "20px", fontFamily: "'Inter', sans-serif", fontWeight: 400 }}>Automação Preditiva</p>
      </div>

      <Sequence from={25}>
        <div style={{
            position: "absolute",
            bottom: 120,
            opacity: spring({ fps, frame: frame - 25, config: { damping: 20, mass: 1.5 } }),
            transform: `translateY(${interpolate(spring({ fps, frame: frame - 25, config: { damping: 20, mass: 1.5 } }), [0, 1], [40, 0])}px)`,
        }}>
            <div style={{
                background: "rgba(20, 20, 20, 0.6)", backdropFilter: "blur(24px)",
                padding: "25px 45px", borderRadius: "100px", border: "1px solid rgba(250, 249, 246, 0.08)",
                display: "flex", gap: "25px", color: "#FAFAF9", fontSize: "32px", alignItems: "center",
                boxShadow: "0 40px 80px rgba(0,0,0,0.8)"
            }}>
                <div style={{ width: 20, height: 20, background: "linear-gradient(90deg, #FACC15 0%, #E8740C 100%)", borderRadius: "50%", boxShadow: "0 0 20px rgba(232, 116, 12, 0.6)" }}></div>
                <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, letterSpacing: "-0.01em" }}>Otimizando conversão em 12s...</span>
            </div>
        </div>
      </Sequence>
    </AbsoluteFill>
  );
};
