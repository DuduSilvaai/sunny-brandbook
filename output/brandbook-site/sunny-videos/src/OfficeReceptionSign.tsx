import {
  useCurrentFrame,
  useVideoConfig,
  AbsoluteFill,
  interpolate,
  spring
} from "remotion";

export const OfficeReceptionSign: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Fix: Removed 'loop' extrapolation. Built a mathematical pulsing sine wave for continuous neon glow.
  const sinGlow = (Math.sin(frame / 10) + 1) / 2; // oscillates between 0 and 1
  const glow = interpolate(sinGlow, [0, 1], [0.5, 1]); // Mapping between 50% and 100% of maximum intensity
  
  const entrance = spring({ fps, frame, config: { damping: 20, mass: 1.5, stiffness: 80 } });

  return (
    <AbsoluteFill style={{ backgroundColor: "#040404", justifyContent: "center", alignItems: "center" }}>
        {/* Wall Texture */}
        <div style={{
            position: "absolute", width: "120%", height: "120%",
            backgroundImage: "url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=3000&auto=format&fit=crop')",
            backgroundSize: "cover", opacity: 0.1, filter: "grayscale(100%) contrast(2)"
        }}></div>

        {/* Ambient environmental back-reflection of the golden/orange neon */}
        <div style={{
            position: "absolute", width: 800, height: 400,
            background: "radial-gradient(ellipse at center, rgba(232, 116, 12, 0.2) 0%, transparent 60%)",
            filter: "blur(70px)", opacity: glow
        }}></div>

        <div style={{
            padding: "50px 150px", 
            border: "1px solid rgba(250, 204, 21, 0.1)", borderRadius: 16,
            boxShadow: `0 0 ${glow * 100}px rgba(250, 204, 21, 0.15), inset 0 0 ${glow * 30}px rgba(232, 116, 12, 0.05)`,
            backdropFilter: "blur(10px)", background: "rgba(9, 9, 11, 0.8)",
            transform: `scale(${interpolate(entrance, [0, 1], [0.95, 1])})`,
            opacity: interpolate(entrance, [0, 1], [0, 1])
        }}>
            <h1 style={{ 
                color: "#FACC15", fontSize: 130, margin: 0, fontFamily: "'Space Grotesk', sans-serif", 
                letterSpacing: "-0.02em", fontWeight: 700,
                textShadow: `0 0 ${glow * 40}px rgba(232, 116, 12, 0.8), 0 0 ${glow * 80}px rgba(250, 204, 21, 0.4)` 
            }}>
                SUNNY
            </h1>
            <p style={{ color: "rgba(250, 249, 246, 0.6)", fontSize: 24, textAlign: "center", margin: "10px 0 0 0", fontFamily: "'Inter', sans-serif", letterSpacing: "0.4em", textTransform: "uppercase" }}>
                Headquarters
            </p>
        </div>
    </AbsoluteFill>
  );
};
