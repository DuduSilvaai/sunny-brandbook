import {
  useCurrentFrame,
  useVideoConfig,
  AbsoluteFill,
  interpolate,
  spring
} from "remotion";

export const TradeShowBooth: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Smooth, subtle luxury pan
  const pan = interpolate(frame, [0, fps * 10], [0, -200], { extrapolateRight: "clamp" });
  const scale = interpolate(frame, [0, fps * 10], [1.05, 1.15], { extrapolateRight: "clamp" });
  
  const boxReveal = spring({ fps, frame: frame - 15, config: { damping: 25, mass: 2 } });

  return (
    <AbsoluteFill style={{ backgroundColor: "#09090B", overflow: "hidden" }}>
        <div style={{
            position: "absolute", left: pan, top: 0, width: "120%", height: "100%",
            backgroundImage: "url('https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?q=80&w=3000&auto=format&fit=crop')",
            backgroundSize: "cover", opacity: 0.4,
            transform: `scale(${scale})`, transformOrigin: "center left",
            filter: "grayscale(50%)"
        }}></div>

        {/* Foreground vignette focusing left side */}
        <div style={{ position: "absolute", left: 0, top: 0, width: "100%", height: "100%", background: "linear-gradient(90deg, rgba(9,9,11,1) 0%, transparent 100%)", zIndex: 1 }}></div>

        <div style={{ 
            position: "absolute", left: 150, top: "35%", 
            background: "rgba(9, 9, 11, 0.4)", 
            padding: "60px 80px", borderRadius: 20, 
            boxShadow: "0 40px 100px rgba(0,0,0,0.9), inset 0 1px 0 rgba(250,249,246,0.1)",
            backdropFilter: "blur(20px)",
            transform: `translateX(${(1 - boxReveal) * -50}px)`,
            opacity: interpolate(boxReveal, [0, 1], [0, 1]),
            zIndex: 2,
            borderLeft: "4px solid #E8740C"
        }}>
            <h1 style={{ color: "#FAFAF9", fontSize: 75, margin: 0, fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, letterSpacing: "-0.02em" }}>VISITE A SUNNY.</h1>
            <p style={{ color: "#FACC15", fontSize: 30, margin: 0, fontFamily: "'Inter', sans-serif", marginTop: 15, fontWeight: 500, letterSpacing: "0.1em" }}>ESTANDE A45 • INTERSOLAR LATAM</p>
        </div>
    </AbsoluteFill>
  );
};
