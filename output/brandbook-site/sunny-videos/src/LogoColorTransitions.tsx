import {
  useCurrentFrame,
  useVideoConfig,
  interpolateColors,
  AbsoluteFill,
  spring
} from "remotion";

export const LogoColorTransitions: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Snappy, authoritative color shifts according to actual brand palette
  // 0 - 1.5s: Negro Comando bg / Ambar fg
  // 1.5 - 3s: Ambar bg / Negro Comando fg
  // 3s+: Branco bg / Negro Comando fg
  const bg = interpolateColors(frame, [0, fps * 1.5, fps * 1.51, fps * 3, fps * 3.01], ["#09090B", "#09090B", "#FACC15", "#FACC15", "#FAFAF9"]);
  const fg = interpolateColors(frame, [0, fps * 1.5, fps * 1.51, fps * 3, fps * 3.01], ["#FACC15", "#FACC15", "#09090B", "#09090B", "#09090B"]);

  // Heavier tracking expansion
  const tracking = spring({ fps, frame, config: { damping: 40, mass: 2 } });

  return (
    <AbsoluteFill style={{ backgroundColor: bg, justifyContent: "center", alignItems: "center", transition: "none" }}>
        
        {/* Subtle noise for texture, heavily opaque */}
        <div style={{ position: "absolute", inset: 0, opacity: 0.05, backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')", mixBlendMode: "difference" }}></div>

        <h1 style={{ 
            color: fg, fontSize: 280, fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, 
            margin: 0, 
            letterSpacing: `${-0.05 + (tracking * 0.01)}em`,
            mixBlendMode: frame > fps * 3.01 ? "multiply" : "normal"
        }}>
            SUNNY.
        </h1>
        <p style={{ 
            color: fg, fontSize: 40, fontFamily: "'Inter', sans-serif", marginTop: 20,
            textTransform: "uppercase", letterSpacing: "0.15em", fontWeight: 500,
            opacity: spring({ fps, frame: frame - 15, config: { mass: 2 } })
        }}>
            Brand Identity
        </p>
    </AbsoluteFill>
  );
};
