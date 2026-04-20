import {
  useCurrentFrame,
  useVideoConfig,
  spring,
  AbsoluteFill,
  interpolate
} from "remotion";

export const LeadMortoVivo: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Slower, refined split easing
  const split = spring({ fps, frame, config: { damping: 25, mass: 2 } });

  return (
    <AbsoluteFill style={{ flexDirection: "row", overflow: "hidden", backgroundColor: "#09090B" }}>
        
        {/* Left Side: Lead Morto (Dark, flat, boring) */}
        <div style={{ flex: 1, backgroundColor: "#151515", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", transform: `translateX(${(1 - split) * -100}%)`, position: "relative" }}>
             
             <div style={{ zIndex: 1, opacity: interpolate(split, [0.5, 1], [0, 1]) }}>
               <h2 style={{ color: "rgba(250,249,246,0.3)", fontSize: 80, fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, margin: 0, letterSpacing: "-0.03em" }}>Lead Morto</h2>
               <p style={{ color: "rgba(250,249,246,0.2)", fontSize: 30, fontFamily: "'Inter', sans-serif", marginTop: 20 }}>Ignora emails. Custo afundando.</p>
             </div>
        </div>
        
        {/* Sleek Line Divider */}
        <div style={{ width: 4, background: "rgba(250,249,246,0.1)", zIndex: 10 }}></div>
        
        {/* Right Side: Lead Vivo (Amber Gradient) */}
        <div style={{ flex: 1, background: "linear-gradient(135deg, #FACC15 0%, #E8740C 100%)", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", transform: `translateX(${(1 - split) * 100}%)`, position: "relative" }}>
             
             {/* Subdued internal glow */}
             <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "radial-gradient(circle at center, rgba(255,255,255,0.2) 0%, transparent 80%)" }}></div>
             
             <div style={{ zIndex: 1, opacity: interpolate(split, [0.5, 1], [0, 1]) }}>
               <h2 style={{ color: "#09090B", fontSize: 80, fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, margin: 0, letterSpacing: "-0.03em" }}>Lead Vivo</h2>
               <p style={{ color: "rgba(9,9,11,0.7)", fontSize: 30, fontFamily: "'Inter', sans-serif", fontWeight: 500, marginTop: 20 }}>Ativo. Agendado. Lucro na mesa.</p>
             </div>
        </div>

    </AbsoluteFill>
  );
};
