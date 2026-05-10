"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GrainOverlay } from "@/components/GrainOverlay";

export default function GaleriaPage() {
  const CORAL = "#ff6b4a";
  const BG = "#070d1a";

  const fotos = [
    { src: "/castelo.jpg", alt: "Castelo de Montalegre", legenda: "Castelo de D. Dinis (Séc. XIV)" },
    { src: "/natureza.jpg", alt: "Natureza em Montalegre", legenda: "Paisagens do Parque Nacional Peneda-Gerês" },
    { src: "/bruxas.jpg", alt: "Noite das Bruxas", legenda: "Sexta-feira 13 – O maior espetáculo de rua" },
    { src: "/fumeiro.jpg", alt: "Festa do Fumeiro", legenda: "Tradição gastronómica barrosã" },
    { src: "/chegas.jpg", alt: "Chegas de Bois", legenda: "Chegas de Bois – Identidade e Força" },
    { src: "/hero.jpg", alt: "Vista de Montalegre", legenda: "Montalegre, a 877 metros de altitude" },
  ];

  return (
    <div style={{ background: BG, color: "#f0f4ff", fontFamily: "'Helvetica Neue', Arial, sans-serif", minHeight: "100vh" }}>
      <GrainOverlay />
      <Navbar />
      
      <main style={{ maxWidth: 1100, margin: "0 auto", padding: "160px 24px 100px" }}>
        <p style={{
          fontSize: 10, letterSpacing: "0.6em", textTransform: "uppercase", color: CORAL,
          marginBottom: 16,
        }}>
          Norte de Portugal · Imagens que Contam Histórias
        </p>
        
        <h1 style={{
          fontFamily: "Georgia, serif",
          fontSize: "clamp(36px, 6vw, 72px)",
          lineHeight: 1.1, fontWeight: 400, letterSpacing: "-0.02em",
          marginBottom: 64,
        }}>
          Galeria de Fotos
        </h1>
        
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", 
          gap: "24px" 
        }}>
          {fotos.map((foto, index) => (
            <div key={index} style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: "12px",
              aspectRatio: "4/3",
              background: "rgba(240,244,255,0.05)",
              border: "1px solid rgba(240,244,255,0.05)",
              cursor: "pointer",
              transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1.02)"; (e.currentTarget as HTMLElement).style.borderColor = `${CORAL}44`; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(240,244,255,0.05)"; }}
            >
              <img
                src={foto.src}
                alt={foto.alt}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  opacity: 0.85,
                  transition: "opacity 0.5s ease",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = "0.85"; }}
              />
              <div style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "24px",
                background: "linear-gradient(to top, rgba(7,13,26,0.9) 0%, transparent 100%)",
                pointerEvents: "none",
              }}>
                <p style={{ 
                  fontSize: 14, 
                  fontFamily: "Georgia, serif", 
                  color: "#f0f4ff", 
                  margin: 0,
                  opacity: 0.9
                }}>
                  {foto.legenda}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div style={{ marginTop: 80, textAlign: "center", borderTop: "1px solid rgba(255,107,74,0.1)", paddingTop: 60 }}>
          <p style={{ color: "rgba(240,244,255,0.3)", fontSize: 13, letterSpacing: "0.05em" }}>
            As imagens apresentadas são representativas da beleza e cultura de Montalegre.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
