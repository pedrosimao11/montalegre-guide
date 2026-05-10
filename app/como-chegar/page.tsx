"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GrainOverlay } from "@/components/GrainOverlay";
import { Car, Bus, Plane, Train, MapPin, Compass, Navigation } from "lucide-react";
import React from "react";

export default function ComoChegarPage() {
  const CORAL = "#ff6b4a";
  const BG = "#070d1a";
  const BG_MID = "#0d1829";

  return (
    <div style={{ background: BG, color: "#f0f4ff", fontFamily: "'Helvetica Neue', Arial, sans-serif", minHeight: "100vh", overflowX: "hidden" }}>
      <GrainOverlay />
      <Navbar />

      <main style={{ maxWidth: 1000, margin: "0 auto", padding: "160px 24px 100px" }}>
        <div style={{ textAlign: "center", marginBottom: 80 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 24 }}>
            <div style={{ width: 32, height: 2, background: CORAL, borderRadius: 2 }} />
            <span style={{ fontSize: 10, letterSpacing: "0.5em", textTransform: "uppercase", color: CORAL }}>
              Planeie a sua viagem
            </span>
            <div style={{ width: 32, height: 2, background: CORAL, borderRadius: 2 }} />
          </div>

          <h1 style={{
            fontFamily: "Georgia, serif",
            fontSize: "clamp(40px, 8vw, 84px)",
            lineHeight: 1.1, fontWeight: 300, letterSpacing: "-0.02em",
            margin: 0,
            background: `linear-gradient(135deg, #ffffff 0%, #ffd4c8 50%, #ffffff 100%)`,
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
          }}>
            Como Chegar
          </h1>
          <p style={{ marginTop: 24, fontSize: 16, color: "rgba(240,244,255,0.6)", maxWidth: 500, margin: "24px auto 0" }}>
            Situada no planalto Barrosão, Montalegre oferece percursos cénicos deslumbrantes. Descubra a melhor forma de chegar até nós.
          </p>
        </div>

        <div className="routes-grid">
          <RotaCard
            icone={<Car strokeWidth={1.5} />}
            titulo="De Carro"
            descricao="Pela A24 (via Vila Real), depois N103 até Montalegre. Cerca de 1h30 desde o Porto. Uma viagem cénica e inesquecível entre montanhas."
            color="#22c55e"
            tags={["Mais Rápido", "Recomendado"]}
          />
          <RotaCard
            icone={<Bus strokeWidth={1.5} />}
            titulo="Autocarro"
            descricao="Ligações regulares desde Braga, Vila Real e Chaves. Consulte os horários atualizados da Rede Expressos ou Rodonorte."
            color="#f59e0b"
            tags={["Económico"]}
          />
          <RotaCard
            icone={<Plane strokeWidth={1.5} />}
            titulo="Avião"
            descricao="Aeroporto Francisco Sá Carneiro (Porto) a 140 km. A partir daí, a melhor opção é alugar um carro para explorar a região ao seu ritmo."
            color="#06b6d4"
            tags={["Internacional"]}
          />
          <RotaCard
            icone={<Train strokeWidth={1.5} />}
            titulo="Comboio"
            descricao="Estação mais próxima: Régua (Linha do Douro). Requer ligação subsequente de autocarro ou táxi (viagem adicional de aprox. 1h)."
            color="#a855f7"
            tags={["Cénico"]}
          />
        </div>

        <div className="location-card" style={{ '--accent-color': CORAL } as React.CSSProperties}>
          <div className="location-bg-glow" />

          <div style={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div className="location-icon-wrapper">
              <Compass className="location-icon" strokeWidth={1.5} />
            </div>

            <h2 style={{ fontFamily: "Georgia, serif", fontSize: 32, fontWeight: 300, marginBottom: 8, color: "#fff" }}>
              Localização Exata
            </h2>
            <p style={{ color: "rgba(240,244,255,0.6)", fontSize: 15, marginBottom: 32, textAlign: "center", maxWidth: 400 }}>
              Montalegre situa-se em pleno Planalto Barrosão, a uma altitude média de 877 metros.
            </p>

            <div className="coordinates-box">
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <MapPin size={16} color={CORAL} />
                <span style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(240,244,255,0.5)" }}>Coordenadas GPS</span>
              </div>
              <div style={{ fontFamily: "monospace", fontSize: 24, color: CORAL, letterSpacing: "0.05em" }}>
                41.8237° N, 7.7975° W
              </div>

              <a href="https://maps.google.com/?q=41.823070,-7.792145" target="_blank" rel="noreferrer" className="maps-button">
                <Navigation size={14} />
                <span>Abrir no Google Maps</span>
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      <style>{`
        /* CSS CLASSES FOR COMO CHEGAR PAGE */
        .routes-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
          margin-bottom: 64px;
        }
        @media (min-width: 768px) {
          .routes-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        .rota-card {
          display: flex;
          flex-direction: column;
          padding: 36px 32px;
          border-radius: 24px;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.05);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          position: relative;
          overflow: hidden;
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 1;
        }
        
        .rota-card:hover {
          transform: translateY(-4px) scale(1.005);
          background: rgba(255,255,255,0.04);
          border-color: rgba(255,255,255,0.1);
          box-shadow: 0 24px 48px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1);
        }
        
        .rota-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), var(--accent-color) 0%, transparent 60%);
          opacity: 0;
          mix-blend-mode: screen;
          transition: opacity 0.5s ease;
          pointer-events: none;
          z-index: -1;
          filter: blur(40px);
        }
        
        .rota-card:hover .rota-glow {
          opacity: 0.12;
        }
        
        .rota-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 32px;
        }
        
        .rota-icon {
          width: 56px;
          height: 56px;
          border-radius: 16px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.06);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-color);
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .rota-icon > svg {
          width: 28px;
          height: 28px;
        }
        
        .rota-card:hover .rota-icon {
          transform: scale(1.1) rotate(-5deg);
          background: rgba(255,255,255,0.08);
          color: var(--accent-color);
        }
        
        .rota-tags {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }
        
        .rota-tag {
          font-size: 10px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 6px 12px;
          border-radius: 20px;
          background: rgba(255,255,255,0.05);
          color: rgba(255,255,255,0.7);
          border: 1px solid rgba(255,255,255,0.08);
          backdrop-filter: blur(4px);
        }
        
        .rota-title {
          font-family: Georgia, serif;
          font-size: 24px;
          font-weight: 300;
          color: #f0f4ff;
          margin: 0 0 12px 0;
          letter-spacing: -0.01em;
          transition: color 0.3s ease;
        }
        
        .rota-card:hover .rota-title {
          color: var(--accent-color);
        }
        
        .rota-desc {
          font-size: 15px;
          line-height: 1.6;
          color: rgba(240,244,255,0.55);
          margin: 0;
          transition: color 0.3s ease;
        }
        
        .rota-card:hover .rota-desc {
          color: rgba(240,244,255,0.7);
        }
        
        .location-card {
          position: relative;
          padding: 64px 40px;
          border-radius: 24px;
          background: linear-gradient(135deg, rgba(255,107,74,0.08) 0%, rgba(13,24,41,0.5) 100%);
          border: 1px solid rgba(255,107,74,0.2);
          overflow: hidden;
          text-align: center;
        }
        
        .location-bg-glow {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle at center, rgba(255,107,74,0.1) 0%, transparent 50%);
          animation: rotate 20s linear infinite;
          z-index: 1;
        }
        
        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .location-icon-wrapper {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: rgba(255,107,74,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
          border: 1px solid rgba(255,107,74,0.25);
          color: var(--accent-color);
          box-shadow: 0 0 40px rgba(255,107,74,0.2);
        }
        
        .location-icon {
          width: 36px;
          height: 36px;
        }
        
        .coordinates-box {
          background: rgba(7,13,26,0.5);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 16px;
          padding: 32px 48px;
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }
        
        .maps-button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 24px;
          padding: 12px 24px;
          background: rgba(255,107,74,0.15);
          color: var(--accent-color);
          border-radius: 30px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          text-decoration: none;
          transition: all 0.3s ease;
          border: 1px solid rgba(255,107,74,0.3);
        }
        
        .maps-button:hover {
          background: var(--accent-color);
          color: #fff;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(255,107,74,0.3);
        }
      `}</style>
    </div>
  );
}

function RotaCard({ icone, titulo, descricao, color, tags }: { icone: React.ReactNode; titulo: string; descricao: string; color: string; tags: string[] }) {
  return (
    <div
      className="rota-card"
      style={{ '--accent-color': color } as React.CSSProperties}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
        e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
      }}
    >
      <div className="rota-header">
        <div className="rota-icon">{icone}</div>
        <div className="rota-tags">
          {tags.map(tag => (
            <span key={tag} className="rota-tag">{tag}</span>
          ))}
        </div>
      </div>
      <h3 className="rota-title">{titulo}</h3>
      <p className="rota-desc">{descricao}</p>
      <div className="rota-glow" />
    </div>
  );
}
