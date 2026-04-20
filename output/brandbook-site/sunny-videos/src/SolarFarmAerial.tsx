import {
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  AbsoluteFill,
} from "remotion";

export const SolarFarmAerial: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Majestic, slow drone cinematic movement
  const moveY = interpolate(frame, [0, fps * 10], [0, -300], { extrapolateRight: "clamp" });
  const scale = interpolate(frame, [0, fps * 10], [1.1, 1.3], { extrapolateRight: "clamp" });
  
  // Sunny brand-accurate Flare (Amber to Orange)
  const flareOpacity = interpolate(frame, [fps * 2, fps * 6], [0, 0.6], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ backgroundColor: "#09090B", overflow: "hidden" }}>
       
       <div style={{
           position: "absolute", inset: 0,
           backgroundImage: "url('https://images.unsplash.com/photo-1509391366360-1e50669afc0c?q=80&w=3000&auto=format&fit=crop')",
           backgroundSize: "cover", backgroundPosition: "center",
           opacity: 0.6,
           transform: `translateY(${moveY}px) scale(${scale})`,
           filter: "saturate(0.8) contrast(1.2)"
       }} />
       
       {/* Pseudo Lens Flare (Golden Hour to Terminal Flare) */}
       <div style={{
           position: "absolute", top: "-20%", left: "40%", width: 1200, height: 1200,
           background: "radial-gradient(circle, rgba(250, 204, 21, 0.5) 0%, rgba(232, 116, 12, 0.2) 40%, transparent 70%)",
           opacity: flareOpacity,
           filter: "blur(60px)",
           mixBlendMode: "screen"
       }}></div>

       {/* Vignette focused on bottom left context */}
       <div style={{ position: "absolute", inset: 0, background: "linear-gradient(45deg, rgba(9,9,11,0.9) 0%, rgba(9,9,11,0.2) 60%, transparent 100%)" }}></div>

       <div style={{
           position: "absolute", bottom: 120, left: 120,
           fontFamily: "'Space Grotesk', sans-serif"
       }}>
           <h1 style={{ 
               color: "#FAFAF9", fontSize: 130, margin: 0, letterSpacing: "-0.03em", fontWeight: 700,
               textShadow: "0 10px 40px rgba(0,0,0,0.8)", 
               transform: `translateY(${interpolate(frame, [0, fps], [40, 0], {extrapolateRight: "clamp"})}px)`, 
               opacity: interpolate(frame, [0, fps * 1.5], [0, 1]) 
            }}>
               ENERGIA EM ESCALA
           </h1>
           <p style={{ 
               fontSize: 45, margin: "20px 0 0 0", color: "rgba(250, 249, 246, 0.7)", 
               fontFamily: "'Inter', sans-serif", fontWeight: 400,
               textShadow: "0 5px 20px rgba(0,0,0,0.8)", 
               transform: `translateY(${interpolate(frame, [fps, fps*2.5], [20, 0], {extrapolateRight: "clamp"})}px)`, 
               opacity: interpolate(frame, [fps, fps*2.5], [0, 1]) 
            }}>
               Mega-usinas operadas por inteligência.
           </p>
       </div>
    </AbsoluteFill>
  );
};
