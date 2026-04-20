import {
  useCurrentFrame,
  useVideoConfig,
  spring,
  AbsoluteFill,
  interpolate
} from "remotion";

const MetricCard: React.FC<{ frame: number; delay: number; title: string; value: string; isPrimary: boolean }> = ({ frame, delay, title, value, isPrimary }) => {
    const { fps } = useVideoConfig();
    const appear = spring({ fps, frame: frame - delay, config: { damping: 24, mass: 1.8, stiffness: 100 } });
    
    // Primary metrics get the brand amber gradient, secondary gets Dawn White
    const valueColor = isPrimary ? "transparent" : "#FAFAF9";
    const bgGradient = isPrimary 
        ? "linear-gradient(90deg, #FACC15 0%, #E8740C 100%)" 
        : "none";
    
    return (
        <div style={{
            background: "linear-gradient(135deg, rgba(20,20,20,0.8) 0%, rgba(9,9,11,0.9) 100%)", borderRadius: 24, padding: 50,
            border: "1px solid rgba(250, 249, 246, 0.05)",
            backdropFilter: "blur(20px)",
            transform: `scale(${interpolate(appear, [0, 1], [0.95, 1])}) translateY(${(1 - appear) * 20}px)`,
            opacity: interpolate(appear, [0, 0.5, 1], [0, 1, 1]),
            boxShadow: "0 40px 100px rgba(0,0,0,0.8)",
            position: "relative", overflow: "hidden"
        }}>
           <h3 style={{ color: "rgba(250, 249, 246, 0.5)", fontSize: 28, margin: 0, fontFamily: "'Inter', sans-serif", fontWeight: 500, letterSpacing: "0.05em" }}>{title}</h3>
           
           <h1 style={{ 
               color: valueColor, 
               background: bgGradient, WebkitBackgroundClip: isPrimary ? "text" : "border-box", WebkitTextFillColor: isPrimary ? "transparent" : "inherit",
               fontSize: 100, margin: "20px 0", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, letterSpacing: "-0.03em" 
            }}>
               {value}
           </h1>
           
           {/* Subtle decorative bottom glow line */}
           <div style={{ position: "absolute", bottom: 0, left: 0, height: 4, width: "100%", background: isPrimary ? "linear-gradient(90deg, #FACC15, #E8740C)" : "rgba(250, 249, 246, 0.1)" }}></div>
        </div>
    );
};

export const DataWarRoom: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ backgroundColor: "#09090B", padding: 120, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
        {/* Ambient background blur maintaining strictly brand colors */}
        <div style={{ position: "absolute", top: "10%", left: "5%", width: "50%", height: "50%", background: "rgba(250, 204, 21, 0.04)", filter: "blur(150px)", zIndex: 0 }}></div>
        <div style={{ position: "absolute", bottom: "10%", right: "10%", width: "40%", height: "40%", background: "rgba(232, 116, 12, 0.04)", filter: "blur(150px)", zIndex: 0 }}></div>

        <MetricCard frame={frame} delay={10} title="CUSTO DE AQUISIÇÃO" value="-45%" isPrimary={true} />
        <MetricCard frame={frame} delay={20} title="LTV PROJETADO" value="+120%" isPrimary={false} />
    </AbsoluteFill>
  );
};
