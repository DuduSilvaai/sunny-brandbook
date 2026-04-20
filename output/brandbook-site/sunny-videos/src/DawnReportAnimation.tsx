import {
  useCurrentFrame,
  useVideoConfig,
  spring,
  AbsoluteFill,
  interpolate
} from "remotion";

export const DawnReportAnimation: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Stripe-tier physical 3D presentation
  const moveUp = spring({ fps, frame, config: { damping: 25, mass: 2.5, stiffness: 90 } });
  const rotateX = interpolate(moveUp, [0, 1], [30, 0]);
  const opacity = interpolate(moveUp, [0, 0.6, 1], [0, 1, 1]);

  return (
    <AbsoluteFill style={{ background: "linear-gradient(135deg, #FACC15 0%, #E8740C 100%)", justifyContent: "center", alignItems: "center", perspective: 1500 }}>
        
        {/* Monochromatic noise texture for authentic depth */}
        <div style={{ position: "absolute", inset: 0, opacity: 0.1, backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.7%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/%3E%3C/svg%3E')" }}></div>

        <div style={{
            background: "#09090B", padding: "70px 100px", borderRadius: 30,
            transform: `translateY(${(1 - moveUp) * 100}px) rotateX(${rotateX}deg) scale(${interpolate(moveUp, [0, 1], [0.9, 1])})`,
            opacity,
            boxShadow: "0 60px 150px rgba(0,0,0,0.8), inset 0 1px 0 rgba(250,249,246,0.1)",
            transformStyle: "preserve-3d",
            textAlign: "center"
        }}>
           <h2 style={{ color: "#FAFAF9", fontSize: 75, margin: 0, fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.02em", fontWeight: 700 }}>Dawn Report</h2>
           <p style={{ color: "rgba(250,249,246,0.4)", fontSize: 30, fontFamily: "'Inter', sans-serif", marginTop: 15, fontWeight: 500, letterSpacing: "0.1em" }}>06:00 AM • INTELIGÊNCIA</p>
           
           <h1 style={{ background: "linear-gradient(90deg, #FACC15 0%, #E8740C 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontSize: 130, margin: "40px 0 0 0", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, letterSpacing: "-0.03em",
               transform: `translateZ(40px) translateY(${(1 - spring({ fps, frame: frame - 15, config: { damping: 20, mass: 2 } })) * 20}px)`,
               opacity: spring({ fps, frame: frame - 15 })
            }}>
               14 Meetings
           </h1>
        </div>
    </AbsoluteFill>
  );
};
