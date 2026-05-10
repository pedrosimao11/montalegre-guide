"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GrainOverlay } from "@/components/GrainOverlay";

export default function HistoriaPage() {
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
          Terra de Barroso · Memória Viva
        </p>
        
        <h1 style={{
          fontFamily: "Georgia, serif",
          fontSize: "clamp(36px, 6vw, 72px)",
          lineHeight: 1.1, fontWeight: 400, letterSpacing: "-0.02em",
          marginBottom: 64,
        }}>
          História & Cultura
        </h1>
        
        <div style={{ display: "flex", flexDirection: "column", gap: 80 }}>
          <Section 
            title="Origens Medievais"
            content="Montalegre remonta à Alta Idade Média, com os primeiros povoados a procurarem refúgio nestas terras agrestes entre montanhas. O nome — 'monte alegre' — evoca as encostas verdes e a paisagem que, apesar de austera, encantou gerações."
          />
          
          <Section 
            title="O Foral de D. Afonso III"
            content="Em 1273, D. Afonso III concedeu foral à vila, integrando-a no reino e dando-lhe direitos e deveres próprios. O castelo, construído por D. Dinis no século XIV, domina ainda hoje a paisagem com as suas quatro torres e a imponente torre de menagem."
          />
          
          <Section 
            title="Terra de Bruxas e Feiticeiras"
            content="Montalegre é conhecida pelas suas lendas de bruxas. As sextas-feiras 13 — dia tradicionalmente associado ao azar — são celebradas com um festival único: a Noite das Bruxas, com espetáculos de fogo, feitiçaria e a figura icónica do 'Padre Fontes', estudioso das tradições mágicas da região."
          />
          
          <Section 
            title="Chegas de Bois — Tradição Ancestral"
            content="As Chegas de Bois são uma tradição milenar do povo barrosão. Muito mais do que um combate entre animais, são um símbolo de identidade, resistência e comunhão com a terra. Um espetáculo de força bruta que ecoa pelas montanhas e atrai forasteiros de todo o país."
          />
          
          <Section 
            title="Cultura Barrosã"
            content="O burel, as capas de honra, os chocalhos artesanais e a gastronomia rica (cabrito assado, fumeiro, mel) formam uma cultura profundamente enraizada na terra. Montalegre é um dos últimos redutos de uma ruralidade autêntica em Portugal."
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}

function Section({ title, content }: { title: string; content: string }) {
  const CORAL = "#ff6b4a";
  return (
    <section>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
        <div style={{ width: 32, height: 1, background: CORAL }} />
        <h2 style={{
          fontFamily: "Georgia, serif",
          fontSize: 28,
          fontWeight: 400,
          color: "#f0f4ff",
        }}>
          {title}
        </h2>
      </div>
      <p style={{
        fontSize: 16,
        lineHeight: 1.8,
        color: "rgba(240,244,255,0.7)",
        marginLeft: 44,
      }}>
        {content}
      </p>
    </section>
  );
}
