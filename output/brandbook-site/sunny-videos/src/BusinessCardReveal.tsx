import {
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  AbsoluteFill,
} from "remotion";

export const BusinessCardReveal: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Premium, slow rotating card reveal
  const rotationY = interpolate(spring({ fps, frame: frame - 10, config: { damping: 40, mass: 3, stiffness: 60 } }), [0, 1], [-90, 0]);
  const rotationX = interpolate(spring({ fps, frame, config: { damping: 30, mass: 2 } }), [0, 1], [15, 0]);
  const scale = spring({ fps, frame, config: { mass: 1.5, damping: 25, stiffness: 80 } });
  
  // Specular map effect moving across the card
  const lightPosition = interpolate(frame, [10, 80], [-100, 200], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });

  return (
    <AbsoluteFill style={{ background: "linear-gradient(135deg, #09090B 0%, #111 100%)", justifyContent: "center", alignItems: "center", perspective: 2500 }}>
      {/* Background minimal illumination */}
      <div style={{ position: "absolute", width: "100%", height: "100%", background: "radial-gradient(circle at 50% 50%, rgba(250,204,21,0.04) 0%, transparent 60%)" }} />

      <div style={{
          width: 850, height: 480, 
          // Luxury Amber Gradient mapped from Logo-brief
          background: "linear-gradient(135deg, #FACC15 0%, #E8740C 100%)", 
          borderRadius: 24,
          transform: `scale(${scale}) rotateX(${rotationX}deg) rotateY(${rotationY}deg)`, 
          display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: 60,
          boxShadow: `0 40px 100px rgba(0,0,0,0.9), -10px 0 30px rgba(232, 116, 12, 0.2)`,
          position: "relative",
          overflow: "hidden",
          transformStyle: "preserve-3d"
      }}>
          {/* Internal abstract pattern */}
          <div style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.03) 10px, rgba(255,255,255,0.03) 20px)" }}></div>

          {/* Specular continuous highlight simulating gloss matte */}
          <div style={{
              position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
              background: `linear-gradient(105deg, transparent ${lightPosition - 20}%, rgba(255,255,255,0.3) ${lightPosition}%, transparent ${lightPosition + 20}%)`,
              zIndex: 1
          }}></div>

          <div style={{ transform: "translateZ(30px)", zIndex: 2 }}>
              <h2 style={{ fontSize: 60, margin: 0, color: "#09090B", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, letterSpacing: "-0.02em" }}>Presidente Comercial</h2>
              <p style={{ fontSize: 30, margin: 0, color: "rgba(9, 9, 11, 0.6)", marginTop: 15, fontFamily: "'Inter', sans-serif", fontWeight: 500, letterSpacing: "0.05em" }}>INTEGRADORA NÍVEL 1</p>
          </div>
      </div>
    </AbsoluteFill>
  );
};
