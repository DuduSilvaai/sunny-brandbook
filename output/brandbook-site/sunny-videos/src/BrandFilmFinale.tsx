import {
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  AbsoluteFill,
  spring,
  Sequence
} from "remotion";

export const BrandFilmFinale: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Premium, slow cinematic fade and scale for enterprise tone
  const fadeText = spring({ fps, frame, config: { damping: 50, mass: 3 } });
  const cinematicScale = interpolate(frame, [0, fps * 8], [0.95, 1.03], { extrapolateRight: "clamp" });
  
  const fadeSubtitle = spring({ fps, frame: frame - fps * 1.5, config: { damping: 40, mass: 2 } });

  return (
    <AbsoluteFill style={{ backgroundColor: "#09090B", justifyContent: "center", alignItems: "center", overflow: "hidden" }}>
        
        <div style={{ transform: `scale(${cinematicScale})`, display: "flex", flexDirection: "column", alignItems: "center" }}>
            <h1 style={{
                color: "#FAFAF9", fontSize: 160, margin: 0, fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, letterSpacing: "-0.04em",
                opacity: fadeText,
                filter: `blur(${(1 - fadeText) * 15}px)`
            }}>
                AMANHECEU, VENDEU.
            </h1>
            <p style={{ 
                color: "rgba(250, 249, 246, 0.4)", fontSize: 36, fontFamily: "'Inter', sans-serif", marginTop: 40, 
                opacity: fadeSubtitle,
                letterSpacing: "0.1em",
                fontWeight: 500,
                textTransform: "uppercase"
            }}>
                Inteligência Comercial Solar
            </p>
        </div>

        <Sequence from={fps * 4}>
            <div style={{ position: "absolute", bottom: 100, opacity: spring({ fps, frame: frame - (fps * 4), config: { damping: 40, mass: 1.5 } }) }}>
                <h2 style={{ background: "linear-gradient(90deg, #FACC15 0%, #E8740C 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontSize: 50, fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, letterSpacing: "0.05em", margin: 0 }}>
                    SUNNY.
                </h2>
            </div>
        </Sequence>
    </AbsoluteFill>
  );
};
