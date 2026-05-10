"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GrainOverlay } from "@/components/GrainOverlay";

export default function EventosPage() {
  const CORAL = "#ff6b4a";
  const BG = "#070d1a";

  return (
    <div style={{ background: BG, color: "#f0f4ff", fontFamily: "'Helvetica Neue', Arial, sans-serif", minHeight: "100vh" }}>
      <GrainOverlay />
      <Navbar />
      
      <main style={{ maxWidth: 900, margin: "0 auto", padding: "160px 24px 100px" }}>
        <p style={{
          fontSize: 10, letterSpacing: "0.6em", textTransform: "uppercase", color: CORAL,
          marginBottom: 16,
        }}>
          Norte de Portugal · Tradição Viva
        </p>
        
        <h1 style={{
          fontFamily: "Georgia, serif",
          fontSize: "clamp(36px, 6vw, 72px)",
          lineHeight: 1.1, fontWeight: 400, letterSpacing: "-0.02em",
          marginBottom: 64,
        }}>
          Eventos & Festivais
        </h1>
        
        <div style={{ display: "flex", flexDirection: "column", gap: 60 }}>
          <EventoCard
            mes="Janeiro"
            titulo="Festa do Fumeiro"
            descricao="Prova de enchidos tradicionais, presuntos e salpicões. Os produtores locais mostram o melhor do fumeiro de Barroso. Considerada a 'Rainha das Feiras' em Portugal."
          />
          <EventoCard
            mes="Fevereiro"
            titulo="Carnaval de Montalegre"
            descricao="Um dos carnavais mais autênticos de Portugal, com máscaras tradicionais, caretos e muita sátira social que percorre as ruas da vila."
          />
          <EventoCard
            mes="Maio"
            titulo="Feira da Terra"
            descricao="Mostra de produtos locais, artesanato, gastronomia e espetáculos musicais. Celebra a vitalidade da cultura e economia barrosã."
          />
          <EventoCard
            mes="Agosto"
            titulo="Sextas Feiras 13 – Noite das Bruxas"
            descricao="Evento único no mundo, celebrado em todas as sextas-feiras 13 do ano. Um espetáculo de fogo, feitiçaria, esconjuros e animação de rua que atrai dezenas de milhares de visitantes."
          />
          <EventoCard
            mes="Setembro"
            titulo="Feira de Artesanato"
            descricao="Artesãos locais mostram o trabalho em madeira, linho, burel e cestaria. Uma viagem às artes tradicionais que definem a identidade da região."
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}

function EventoCard({ mes, titulo, descricao }: { mes: string; titulo: string; descricao: string }) {
  const CORAL = "#ff6b4a";
  return (
    <div style={{
      padding: "32px",
      background: "rgba(255,107,74,0.03)",
      borderLeft: `2px solid ${CORAL}`,
      borderRadius: "0 8px 8px 0",
      transition: "all 0.3s ease",
    }}
      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,107,74,0.06)"; (e.currentTarget as HTMLElement).style.transform = "translateX(4px)"; }}
      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,107,74,0.03)"; (e.currentTarget as HTMLElement).style.transform = "none"; }}
    >
      <span style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: CORAL, fontWeight: 600 }}>{mes}</span>
      <h3 style={{
        fontFamily: "Georgia, serif",
        fontSize: 24,
        fontWeight: 400,
        margin: "8px 0 16px",
        color: "#f0f4ff",
      }}>{titulo}</h3>
      <p style={{
        fontSize: 15,
        lineHeight: 1.7,
        color: "rgba(240,244,255,0.6)",
      }}>{descricao}</p>
    </div>
  );
}
