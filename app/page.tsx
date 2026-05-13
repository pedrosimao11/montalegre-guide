"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { MapPin, Castle, Calendar, Route, Image as ImageIcon, ArrowRight } from "lucide-react";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GrainOverlay } from "@/components/GrainOverlay";

const PHOTOS = {
  hero: "/hero.jpg",
  castelo: "/castelo.jpg",
  bruxas: "/bruxas.jpg",
  fumeiro: "/fumeiro.jpg",
  natureza: "/natureza.jpg",
  chegas: "/chegas.jpg",
  cta: "/descubra.jpg",
};

const SCROLL_SECTIONS = [
  {
    id: "castelo",
    label: "Séc. XIV · Monumento Nacional",
    title: "O Castelo\nde Montalegre",
    text: "Erguido por D. Dinis no século XIV, domina a vila do alto de uma colina rochosa. Quatro torres e uma imponente torre de menagem testemunham séculos de história.",
    photo: PHOTOS.castelo,
  },
  {
    id: "bruxas",
    label: "Maior espetáculo de rua de Portugal",
    title: "Sexta 13\nNoite das Bruxas",
    text: "Desde 2002, cada sexta-feira 13 transforma Montalegre num palco de fogo, mistério e tradição. 50.000 pessoas invadem a vila para uma festa única no mundo.",
    photo: PHOTOS.bruxas,
  },
  {
    id: "fumeiro",
    label: "Rainha das Feiras de Portugal",
    title: "Feira do\nFumeiro",
    text: "Durante quatro dias em janeiro, a Feira do Fumeiro mostra o melhor dos enchidos barrosãos. Presuntos, salpicões e chouriças que contam histórias de gerações.",
    photo: PHOTOS.fumeiro,
  },
  {
    id: "natureza",
    label: "Peneda-Gerês · Único Parque Nacional",
    title: "Natureza\nSelvagem",
    text: "Porta de entrada para o Parque Nacional da Peneda-Gerês. Cascatas, lagoas glaciares e paisagens que cortam a respiração a poucos minutos da vila.",
    photo: PHOTOS.natureza,
  },
  {
    id: "chegas",
    label: "Tradição Equestre · Coração de Barroso",
    title: "Chegas de Bois\nPaixão Barrosã",
    text: "As Chegas de Bois são a mais genuína tradição de Barroso. Um combate de força entre touros que atrai milhares de pessoas, num espetáculo único onde a terra treme e a paixão fala mais alto.",
    photo: PHOTOS.chegas,
  },
];

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const CORAL = "#ff6b4a";
  const CORAL_LIGHT = "#ff8c6e";
  const BG = "#070d1a";
  const BG_MID = "#0d1829";

  return (
    <div style={{ background: BG, color: "#f0f4ff", fontFamily: "'Helvetica Neue', Arial, sans-serif", overflowX: "hidden" }}>

      <GrainOverlay />
      <Navbar />

      {/* HERO */}
      <section style={{ position: "relative", height: "100vh", minHeight: 700, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `url(${PHOTOS.hero})`,
          backgroundSize: "cover", backgroundPosition: "center 30%",
          transform: `translateY(${scrollY * 0.2}px) scale(1.08)`,
          backgroundColor: BG,
          willChange: "transform",
          backfaceVisibility: "hidden",
        }} />
        <div style={{
          position: "absolute", inset: 0,
          background: `linear-gradient(to bottom, rgba(7,13,26,0.2) 0%, rgba(7,13,26,0.55) 50%, rgba(7,13,26,0.92) 85%, ${BG} 100%)`,
        }} />

        <div style={{ position: "relative", zIndex: 10, textAlign: "center", padding: "0 24px", maxWidth: 900 }}>
          <p style={{
            fontSize: 10, letterSpacing: "0.6em", textTransform: "uppercase", color: CORAL,
            marginBottom: 32,
            opacity: loaded ? 1 : 0, transform: loaded ? "none" : "translateY(16px)",
            transition: "all 0.8s ease 0.2s",
          }}>
            Norte de Portugal &nbsp;·&nbsp; 877 m altitude &nbsp;·&nbsp; Terra de Barroso
          </p>

          <h1 style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: "clamp(48px, 10vw, 100px)",
            lineHeight: 1.1, fontWeight: 400, letterSpacing: "-0.03em",
            opacity: loaded ? 1 : 0, transform: loaded ? "none" : "translateY(50px)",
            transition: "all 1.1s cubic-bezier(0.16,1,0.3,1) 0.35s",
            marginBottom: 24,
          }}>
            <span style={{
              display: "block",
              background: `linear-gradient(160deg, #ffffff 0%, #ffd4c8 40%, #ffffff 70%, ${CORAL}88 100%)`,
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>
              Montalegre
            </span>
          </h1>

          <div style={{
            display: "flex", alignItems: "center", justifyContent: "center", gap: 16,
            margin: "28px 0 44px",
            opacity: loaded ? 1 : 0, transition: "all 0.8s ease 0.8s",
          }}>
            <div style={{ width: 40, height: 1, background: `linear-gradient(to right, transparent, ${CORAL})` }} />
            <p style={{ fontSize: 13, letterSpacing: "0.12em", color: "rgba(240,244,255,0.55)", fontStyle: "italic", fontFamily: "Georgia, serif" }}>
              Uma ideia da Natureza
            </p>
            <div style={{ width: 40, height: 1, background: `linear-gradient(to left, transparent, ${CORAL})` }} />
          </div>

          <div style={{
            display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap",
            opacity: loaded ? 1 : 0, transition: "all 0.8s ease 1s",
          }}>
            <Link href="/guide" style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              background: CORAL, color: "#fff",
              padding: "16px 36px", textDecoration: "none",
              fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", fontWeight: 700,
              borderRadius: 4, transition: "all 0.3s ease",
              boxShadow: `0 8px 32px ${CORAL}44`,
            }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = CORAL_LIGHT)}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = CORAL)}
            >Explorar o Guia →</Link>
            <Link href="/historia" style={{
              display: "inline-flex", alignItems: "center",
              border: `1px solid ${CORAL}55`, color: CORAL,
              padding: "16px 36px", textDecoration: "none",
              fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase",
              borderRadius: 4, transition: "all 0.3s ease",
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = `${CORAL}15`; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
            >Descobrir a História</Link>
          </div>
        </div>

        <div style={{
          position: "absolute", bottom: 36, left: "50%", transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: 10,
          opacity: loaded ? 0.5 : 0, transition: "opacity 1s ease 1.5s",
          zIndex: 10,
        }}>
          <span style={{ fontSize: 9, letterSpacing: "0.5em", textTransform: "uppercase", color: CORAL }}>Scroll</span>
          <div style={{ width: 1, height: 52, background: `linear-gradient(to bottom, ${CORAL}, transparent)`, animation: "scrollPulse 2s ease-in-out infinite" }} />
        </div>
      </section>

      {/* NÚMEROS */}
      <section style={{
        padding: "70px 48px",
        borderTop: `1px solid ${CORAL}18`,
        borderBottom: `1px solid ${CORAL}18`,
        background: `linear-gradient(135deg, ${BG_MID} 0%, #111f35 50%, ${BG_MID} 100%)`,
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
          {[
            { num: "877", unit: "m", label: "Altitude" },
            { num: "1273", unit: "", label: "Ano do Foral" },
            { num: "XIV", unit: "", label: "Século do Castelo" },
            { num: "2000", unit: "anos+", label: "Tradição Ancestral" },
          ].map((item, i) => (
            <div key={item.label} style={{
              textAlign: "center", padding: "36px 20px",
              borderRight: i < 3 ? `1px solid ${CORAL}18` : "none",
            }}>
              <p style={{ fontFamily: "Georgia, serif", fontSize: "clamp(44px, 5.5vw, 76px)", color: CORAL, margin: 0, lineHeight: 1.1, fontWeight: 300 }}>
                {item.num}<span style={{ fontSize: "0.4em", opacity: 0.7 }}>{item.unit}</span>
              </p>
              <p style={{ fontSize: 9, letterSpacing: "0.4em", textTransform: "uppercase", color: "rgba(240,244,255,0.3)", marginTop: 10 }}>
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SCROLL STORYTELLING — FULL SCREEN COM BACKGROUND */}
      {SCROLL_SECTIONS.map((section, i) => (
        <section
          key={section.id}
          style={{
            position: "relative",
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: i % 2 === 0 ? "flex-start" : "flex-end",
            padding: "80px 8%",
            backgroundImage: `url(${section.photo})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <div style={{ position: "absolute", inset: 0, background: "rgba(7,13,26,0.75)", zIndex: 1 }} />
          {i > 0 && (
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "30vh", background: `linear-gradient(to bottom, ${BG}, transparent)`, zIndex: 2 }} />
          )}
          {i < SCROLL_SECTIONS.length - 1 && (
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "30vh", background: `linear-gradient(to top, ${BG}, transparent)`, zIndex: 2 }} />
          )}

          <div style={{ position: "relative", zIndex: 3, maxWidth: 550 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
              <div style={{ width: 36, height: 2, background: CORAL, borderRadius: 2 }} />
              <span style={{ fontSize: 9, letterSpacing: "0.5em", textTransform: "uppercase", color: CORAL }}>
                {String(i + 1).padStart(2, "0")} — {section.label}
              </span>
            </div>
            <h2 style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(36px, 4vw, 64px)",
              fontWeight: 300, lineHeight: 1.1, letterSpacing: "-0.02em",
              color: "#f0f4ff", marginBottom: 24, whiteSpace: "pre-line",
            }}>
              {section.title}
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.9, color: "rgba(240,244,255,0.7)", maxWidth: 440 }}>
              {section.text}
            </p>
          </div>
        </section>
      ))}

      {/* QUICK LINKS — UI/UX Designer Refinement */}
      <section style={{ padding: "120px 48px", background: BG_MID }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 56 }}>
            <div style={{ width: 48, height: 2, background: CORAL, borderRadius: 2 }} />
            <span style={{ fontSize: 10, letterSpacing: "0.5em", textTransform: "uppercase", color: CORAL }}>Explorar</span>
          </div>
          <div className="bento-grid">
            {[
              { href: "/guide", label: "Guia Interativo", desc: "Mapa interativo com restaurantes, alojamentos, atrações e todos os serviços de Montalegre em tempo real. A sua viagem começa aqui.", icon: <MapPin strokeWidth={1.5} />, color: CORAL, isFeatured: true, bgImage: PHOTOS.natureza, tags: ["Principal", "Ao Vivo"] },
              { href: "/historia", label: "História & Cultura", desc: "Origens medievais, o castelo, as bruxas e as tradições de Barroso", icon: <Castle strokeWidth={1.5} />, color: "#f59e0b", tags: ["Património"] },
              { href: "/eventos", label: "Eventos & Festivais", desc: "Sexta 13, Feira do Fumeiro, Carnaval e muito mais ao longo do ano", icon: <Calendar strokeWidth={1.5} />, color: "#a855f7", tags: ["Cultura"] },
              { href: "/como-chegar", label: "Como Chegar", desc: "Rotas detalhadas, transportes e tudo o que precisas para visitar a capital de Barroso", icon: <Route strokeWidth={1.5} />, color: "#22c55e", tags: ["Informação"] },
              { href: "/galeria", label: "Galeria Visual", desc: "Imagens deslumbrantes da paisagem e vida local", icon: <ImageIcon strokeWidth={1.5} />, color: "#06b6d4", tags: ["Multimédia"] },
            ].map((item, i) => (
              <Link 
                key={item.href} 
                href={item.href} 
                className={`bento-card bento-item-${i} ${item.isFeatured ? 'featured' : ''}`}
                style={{ '--accent-color': item.color } as React.CSSProperties}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
                  e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
                }}
              >
                {item.bgImage && (
                  <>
                    <div className="bento-bg-image" style={{ backgroundImage: `url(${item.bgImage})` }} />
                    <div className="bento-bg-overlay" />
                  </>
                )}
                <div className="bento-header">
                  <div className="bento-icon">{item.icon}</div>
                  <div className="bento-tags">
                    {item.tags.map(tag => (
                      <span key={tag} className="bento-tag">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="bento-content">
                  <h3 className="bento-title">{item.label}</h3>
                  <p className="bento-desc">{item.desc}</p>
                </div>
                <div className="bento-arrow">
                  <ArrowRight strokeWidth={1.5} />
                </div>
                <div className="bento-glow" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section style={{ position: "relative", padding: "140px 48px", textAlign: "center", overflow: "hidden", borderTop: `1px solid ${CORAL}18` }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${PHOTOS.cta})`, backgroundSize: "cover", backgroundPosition: "center", opacity: 0.1 }} />
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at center, ${CORAL}15 0%, transparent 70%)` }} />
        <div style={{ position: "relative" }}>
          <p style={{ fontSize: 10, letterSpacing: "0.5em", textTransform: "uppercase", color: CORAL, marginBottom: 24 }}>Pronto para explorar?</p>
          <h2 style={{
            fontFamily: "Georgia, serif", fontSize: "clamp(44px, 8vw, 96px)", fontWeight: 300,
            lineHeight: 1, letterSpacing: "-0.02em", marginBottom: 28,
            background: `linear-gradient(135deg, #f0f4ff 0%, ${CORAL} 50%, #f0f4ff 100%)`,
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
          }}>
            Descubra o melhor<br />de Montalegre
          </h2>
          <p style={{ color: "rgba(240,244,255,0.35)", marginBottom: 48, fontSize: 15 }}>Restaurantes, atrações, alojamentos — tudo num guia interativo em tempo real</p>
          <Link href="/guide" style={{
            display: "inline-flex", alignItems: "center", gap: 12,
            background: CORAL, color: "#fff",
            padding: "20px 52px", textDecoration: "none",
            fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", fontWeight: 700,
            borderRadius: 6, transition: "all 0.3s ease",
            boxShadow: `0 12px 40px ${CORAL}44`,
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = CORAL_LIGHT; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = CORAL; (e.currentTarget as HTMLElement).style.transform = "none"; }}
          >Abrir o Guia Interativo →</Link>
        </div>
      </section>

      <Footer />

      <style>{`
        @keyframes scrollPulse { 0%,100%{opacity:.5;transform:scaleY(1)} 50%{opacity:1;transform:scaleY(1.2)} }
        *{box-sizing:border-box;} html{scroll-behavior:smooth;} body{overflow-x:hidden;}

        /* BENTO GRID CSS */
        .bento-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }
        @media (min-width: 768px) {
          .bento-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 1024px) {
          .bento-grid {
            grid-template-columns: repeat(3, 1fr);
            grid-auto-rows: 280px;
          }
          .bento-item-0 { grid-column: span 2; grid-row: span 2; }
          .bento-item-1 { grid-column: span 1; grid-row: span 1; }
          .bento-item-2 { grid-column: span 1; grid-row: span 1; }
          .bento-item-3 { grid-column: span 2; grid-row: span 1; }
          .bento-item-4 { grid-column: span 1; grid-row: span 1; }
        }
        
        .bento-card {
          display: flex;
          flex-direction: column;
          padding: 32px;
          border-radius: 24px;
          text-decoration: none;
          color: inherit;
          position: relative;
          overflow: hidden;
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.05);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          z-index: 1;
        }
        
        .bento-card:hover {
          transform: translateY(-4px) scale(1.005);
          background: rgba(255,255,255,0.04);
          border-color: rgba(255,255,255,0.1);
          box-shadow: 0 24px 48px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1);
        }
        
        .bento-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), var(--accent-color) 0%, transparent 50%);
          opacity: 0;
          mix-blend-mode: screen;
          transition: opacity 0.5s ease;
          pointer-events: none;
          z-index: -1;
          filter: blur(40px);
        }
        .bento-card:hover .bento-glow {
          opacity: 0.12;
        }

        .bento-card.featured {
          background: linear-gradient(135deg, rgba(255,107,74,0.08) 0%, rgba(13,24,41,0.6) 100%);
          border: 1px solid rgba(255,107,74,0.2);
          justify-content: flex-end;
          padding: 48px;
        }
        .bento-card.featured:hover {
          background: linear-gradient(135deg, rgba(255,107,74,0.12) 0%, rgba(13,24,41,0.7) 100%);
          border-color: rgba(255,107,74,0.35);
          box-shadow: 0 32px 64px rgba(255,107,74,0.12), inset 0 1px 0 rgba(255,255,255,0.1);
        }
        
        .bento-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          width: 100%;
          margin-bottom: auto;
          position: relative;
          z-index: 2;
        }
        
        .bento-icon {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          background: rgba(255,255,255,0.04);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-color, #fff);
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          border: 1px solid rgba(255,255,255,0.05);
        }
        .bento-icon > svg {
          width: 24px;
          height: 24px;
        }
        .featured .bento-icon {
          width: 64px;
          height: 64px;
          border-radius: 18px;
          background: rgba(255,107,74,0.1);
          border-color: rgba(255,107,74,0.2);
          margin-bottom: 32px;
        }
        .featured .bento-icon > svg {
          width: 32px;
          height: 32px;
        }
        .bento-card:hover .bento-icon {
          transform: scale(1.1) rotate(-5deg);
          background: rgba(255,255,255,0.08);
        }
        .featured:hover .bento-icon {
          background: rgba(255,107,74,0.15);
        }
        
        .bento-tags {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          justify-content: flex-end;
        }
        
        .bento-tag {
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
        .featured .bento-tag {
          background: rgba(255,107,74,0.1);
          color: rgba(255,107,74,0.9);
          border-color: rgba(255,107,74,0.2);
        }
        
        .bento-content {
          position: relative;
          z-index: 2;
          margin-top: 24px;
        }
        
        .bento-title {
          font-family: Georgia, serif;
          font-size: 26px;
          font-weight: 300;
          color: #f0f4ff;
          margin: 0 0 12px 0;
          transition: color 0.3s ease;
          letter-spacing: -0.01em;
        }
        .featured .bento-title {
          font-size: 44px;
          margin-bottom: 16px;
          line-height: 1.1;
        }
        .bento-card:hover .bento-title {
          color: var(--accent-color, #fff);
        }
        
        .bento-desc {
          font-size: 15px;
          color: rgba(240,244,255,0.55);
          line-height: 1.6;
          margin: 0;
          transition: color 0.3s ease;
        }
        .featured .bento-desc {
          font-size: 17px;
          max-width: 80%;
          color: rgba(240,244,255,0.7);
        }
        .bento-card:hover .bento-desc {
          color: rgba(240,244,255,0.65);
        }
        
        .bento-arrow {
          position: absolute;
          bottom: 32px;
          right: 32px;
          color: var(--accent-color);
          opacity: 0;
          transform: translateX(-15px) scale(0.8);
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(255,255,255,0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255,255,255,0.05);
          z-index: 2;
        }
        .featured .bento-arrow {
          bottom: 48px;
          right: 48px;
          width: 48px;
          height: 48px;
          background: rgba(255,107,74,0.1);
          border-color: rgba(255,107,74,0.2);
        }
        .bento-card:hover .bento-arrow {
          opacity: 1;
          transform: translateX(0) scale(1);
          background: rgba(255,255,255,0.1);
        }
        .featured:hover .bento-arrow {
          background: rgba(255,107,74,0.2);
        }
        
        .bento-bg-image {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          opacity: 0.15;
          transition: transform 1.2s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s ease;
          z-index: 0;
        }
        .bento-bg-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(7,13,26,0.95) 0%, rgba(7,13,26,0.4) 100%);
          z-index: 0;
        }
        .bento-card:hover .bento-bg-image {
          transform: scale(1.06);
          opacity: 0.25;
        }
      `}</style>
    </div>
  );
}
