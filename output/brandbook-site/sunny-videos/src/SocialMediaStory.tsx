import {
  useCurrentFrame,
  useVideoConfig,
  spring,
  AbsoluteFill,
  interpolate
} from "remotion";

export const SocialMediaStory: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const textEntry = spring({ fps, frame, config: { damping: 22, mass: 2, stiffness: 90 } });
  
  // Continuous smooth button pulse
  const sinPulse = (Math.sin(frame / 15) + 1) / 2;
  const pulseCTA = interpolate(sinPulse, [0, 1], [1, 1.03]);

  return (
    <AbsoluteFill style={{ backgroundColor: "#111", justifyContent: "center", alignItems: "center" }}>
        
        <div style={{ 
            width: 1080, height: 1920, background: "linear-gradient(135deg, #09090B 0%, #171717 100%)", 
            overflow: "hidden", position: "relative", 
        }}>
            {/* Elegant luxury brand flare */}
            <div style={{ position: "absolute", top: "-10%", left: "-20%", width: "120%", height: "100%", background: "radial-gradient(circle, rgba(232, 116, 12, 0.1) 0%, transparent 60%)" }}></div>

            <AbsoluteFill style={{ justifyContent: "center", alignItems: "center", padding: 80, textAlign: "center", zIndex: 10 }}>
                <h1 style={{ 
                    fontSize: 140, color: "#FAFAF9", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, 
                    transform: `translateY(${(1 - textEntry) * 60}px)`, 
                    opacity: interpolate(textEntry, [0, 1], [0, 1]), 
                    lineHeight: 0.95, letterSpacing: "-0.03em"
                }}>
                    SEU LEAD MERECE MAIS.
                </h1>
                <p style={{ 
                    fontSize: 45, color: "rgba(250,249,246,0.6)", fontFamily: "'Inter', sans-serif", marginTop: 50, fontWeight: 400,
                    transform: `translateY(${(1 - spring({ fps, frame: frame - 20, config: {mass: 2} })) * 40}px)`, 
                    opacity: spring({ fps, frame: frame - 20 }) 
                }}>
                    Vença a inação comercial.
                </p>
                
                <div style={{ 
                    position: "absolute", bottom: 200, 
                    background: "linear-gradient(90deg, #FACC15 0%, #E8740C 100%)", color: "#09090B", 
                    padding: "35px 80px", borderRadius: 100, 
                    fontSize: 45, fontFamily: "'Inter', sans-serif", fontWeight: 600,
                    transform: `scale(${spring({ fps, frame: frame - 40 }) * pulseCTA})`,
                    boxShadow: "0 20px 50px rgba(232, 116, 12, 0.3)"
                }}>
                    Aumente sua taxa
                </div>
            </AbsoluteFill>
        </div>
    </AbsoluteFill>
  );
};
