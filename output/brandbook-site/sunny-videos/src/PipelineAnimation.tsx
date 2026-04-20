import {
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  AbsoluteFill,
  Sequence
} from "remotion";

export const PipelineAnimation: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Heavy mass spring for luxury UI fluidity
  const entrance = spring({ fps, frame, config: { damping: 25, mass: 2 } });
  const funnelWidth = interpolate(spring({ fps, frame: frame - 15, config: { damping: 30, mass: 2 } }), [0, 1], [0, 900]);

  return (
    <AbsoluteFill style={{ background: "linear-gradient(135deg, #09090B 0%, #151515 100%)", justifyContent: "center", alignItems: "center" }}>
        
        <div style={{ transform: `scale(${interpolate(entrance, [0, 1], [0.95, 1])})`, opacity: entrance, width: 900, marginBottom: 40 }}>
            <h1 style={{ color: "#FAFAF9", fontSize: 50, fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.02em", margin: "0 0 30px 0", fontWeight: 700 }}>Inteligência Comercial</h1>
        </div>

        {/* Premium Data Bar */}
        <div style={{ width: 900, height: 100, display: "flex", alignItems: "center", background: "rgba(250, 249, 246, 0.03)", borderRadius: 50, padding: 8, border: "1px solid rgba(250, 249, 246, 0.05)", boxShadow: "inset 0 10px 40px rgba(0,0,0,0.8)" }}>
            <div style={{ 
                width: funnelWidth, height: "100%", 
                background: "linear-gradient(90deg, #FACC15 0%, #E8740C 100%)", 
                borderRadius: 40, 
                transition: "width 0.5s",
                boxShadow: "0 10px 30px rgba(232, 116, 12, 0.2)"
            }}>
                {/* Flow energy */}
                <div style={{ height: "100%", width: "100%", background: "linear-gradient(90deg, transparent 0%, rgba(250, 249, 246, 0.2) 50%, transparent 100%)", transform: `translateX(${interpolate(frame, [15, 75], [-900, 900])}px)`, opacity: 0.8 }}></div>
            </div>
        </div>

        <Sequence from={45}>
            <div style={{ marginTop: 60, transform: `translateY(${(1 - spring({ fps, frame: frame - 45, config: { mass: 1.5 } })) * 20}px)`, opacity: spring({ fps, frame: frame - 45 }) }}>
                <p style={{ color: "#FAFAF9", fontSize: 40, fontFamily: "'Inter', sans-serif", fontWeight: 400, letterSpacing: "-0.01em", margin: 0 }}>
                    Taxa de Conversão: <span style={{ color: "#FACC15", fontWeight: 700 }}>420%</span>
                </p>
            </div>
        </Sequence>
    </AbsoluteFill>
  );
};
