"use client";
// ============================================================
// app/page.tsx — Página Inicial V5
// Apenas cores, ícones sociais e ícones explorar atualizados
// ============================================================
import Link from "next/link";
import { useEffect, useState } from "react";

const PHOTOS = {
  hero: "/hero.jpg",
  castelo: "/castelo.jpg",
  bruxas: "/bruxas.jpg",
  fumeiro: "/fumeiro.jpg",
  natureza: "/natureza.jpg",
  chegas: "/chegas.jpg",
  cta: "/descubra.jpeg",
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

// ── Ícones SVG reais das redes sociais ──
const FacebookSVG = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramSVG = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const WebSVG = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 6.628 5.374 12 12 12 6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12zm-1 17.93c-3.395-.477-6-3.367-6-6.93 0-.62.083-1.22.235-1.79L9 13v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.18 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
  </svg>
);

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 150);
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navScrolled = scrollY > 80;

  // ── Cor principal: coral vibrante ──
  const CORAL = "#ff6b4a";
  const CORAL_LIGHT = "#ff8c6e";
  const BG = "#070d1a";
  const BG_MID = "#0d1829";

  return (
    <div style={{ background: BG, color: "#f0f4ff", fontFamily: "'Helvetica Neue', Arial, sans-serif", overflowX: "hidden" }}>

      {/* GRAIN OVERLAY */}
      <div style={{
        position: "fixed", inset: 0, zIndex: 200, pointerEvents: "none", opacity: 0.04,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
      }} />

      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "16px 48px",
        background: navScrolled ? `rgba(7,13,26,0.97)` : "transparent",
        backdropFilter: navScrolled ? "blur(24px)" : "none",
        borderBottom: navScrolled ? `1px solid ${CORAL}22` : "none",
        transition: "all 0.5s ease",
      }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <svg width="20" height="20" viewBox="0 0 22 22">
            <polygon points="11,2 20,20 2,20" fill="none" stroke={CORAL} strokeWidth="1.5" strokeLinejoin="round"/>
            <polygon points="11,7 16,17 6,17" fill={CORAL} opacity="0.25"/>
          </svg>
          <span style={{ fontSize: 11, letterSpacing: "0.4em", textTransform: "uppercase", color: CORAL, fontFamily: "Georgia, serif" }}>
            Montalegre
          </span>
        </Link>
        <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
          {[
            { label: "História", href: "/historia" },
            { label: "Eventos", href: "/eventos" },
            { label: "Galeria", href: "/galeria" },
            { label: "Como Chegar", href: "/como-chegar" },
          ].map(item => (
            <Link key={item.href} href={item.href} style={{
              fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase",
              color: "rgba(240,244,255,0.55)", textDecoration: "none", transition: "color 0.3s",
            }}
              onMouseEnter={e => (e.currentTarget.style.color = CORAL)}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(240,244,255,0.55)")}
            >{item.label}</Link>
          ))}
          <Link href="/guide" style={{
            fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase",
            background: CORAL, color: "#fff",
            padding: "10px 22px", textDecoration: "none", fontWeight: 600,
            borderRadius: 4, transition: "background 0.3s",
          }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = CORAL_LIGHT)}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = CORAL)}
          >Explorar →</Link>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ position: "relative", height: "100vh", minHeight: 700, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `url(${PHOTOS.hero})`,
          backgroundSize: "cover", backgroundPosition: "center 30%",
          transform: `scale(1.08) translateY(${scrollY * 0.2}px)`,
          transition: "transform 0.05s linear",
        }} />
        <div style={{
          position: "absolute", inset: 0,
          background: `linear-gradient(to bottom, rgba(7,13,26,0.2) 0%, rgba(7,13,26,0.55) 50%, rgba(7,13,26,0.92) 85%, ${BG} 100%)`,
        }} />

        <div style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "0 24px", maxWidth: 900 }}>
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
            lineHeight: 0.9, fontWeight: 400, letterSpacing: "-0.03em",
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
              <p style={{ fontFamily: "Georgia, serif", fontSize: "clamp(44px, 5.5vw, 76px)", color: CORAL, margin: 0, lineHeight: 1, fontWeight: 300 }}>
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

      {/* QUICK LINKS — Emojis grandes e coloridos */}
      <section style={{ padding: "120px 48px", background: BG_MID }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 56 }}>
            <div style={{ width: 48, height: 2, background: CORAL, borderRadius: 2 }} />
            <span style={{ fontSize: 10, letterSpacing: "0.5em", textTransform: "uppercase", color: CORAL }}>Explorar</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12 }}>
            {[
              { href: "/historia", label: "História & Cultura", desc: "Origens medievais, o castelo, as bruxas e as tradições de Barroso", icon: "🏛️", color: "#f59e0b", bg: "rgba(245,158,11,0.08)", border: "rgba(245,158,11,0.2)" },
              { href: "/eventos", label: "Eventos & Festivais", desc: "Sexta 13, Feira do Fumeiro, Carnaval e muito mais ao longo do ano", icon: "🎭", color: "#a855f7", bg: "rgba(168,85,247,0.08)", border: "rgba(168,85,247,0.2)" },
              { href: "/galeria", label: "Galeria de Fotos", desc: "Imagens deslumbrantes da paisagem, castelo e vida local", icon: "📸", color: "#06b6d4", bg: "rgba(6,182,212,0.08)", border: "rgba(6,182,212,0.2)" },
              { href: "/como-chegar", label: "Como Chegar", desc: "Rotas, transportes e tudo o que precisas para visitar Montalegre", icon: "🗺️", color: "#22c55e", bg: "rgba(34,197,94,0.08)", border: "rgba(34,197,94,0.2)" },
              { href: "/guide", label: "Guia Interativo", desc: "Restaurantes, alojamentos, atrações e serviços em tempo real com mapa", icon: "📍", color: CORAL, bg: `${CORAL}12`, border: `${CORAL}30` },
            ].map((item) => (
              <Link key={item.href} href={item.href} style={{
                display: "block", padding: "36px 32px",
                background: item.bg,
                border: `1px solid ${item.border}`,
                textDecoration: "none", color: "inherit",
                borderRadius: 12,
                transition: "all 0.35s ease",
                position: "relative", overflow: "hidden",
              }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-5px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 48px ${item.color}25`;
                  (e.currentTarget as HTMLElement).style.borderColor = `${item.color}50`;
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.transform = "none";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  (e.currentTarget as HTMLElement).style.borderColor = item.border;
                }}
              >
                <div style={{ fontSize: 48, marginBottom: 16, lineHeight: 1 }}>{item.icon}</div>
                <h3 style={{ fontFamily: "Georgia, serif", fontSize: 21, fontWeight: 400, color: "#f0f4ff", marginBottom: 10 }}>{item.label}</h3>
                <p style={{ fontSize: 13, color: "rgba(240,244,255,0.45)", lineHeight: 1.7 }}>{item.desc}</p>
                <div style={{ position: "absolute", bottom: 24, right: 24, fontSize: 16, color: item.color, opacity: 0.6 }}>→</div>
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

      {/* FOOTER */}
      <footer style={{ borderTop: `1px solid ${CORAL}15`, padding: "40px 48px", background: BG_MID }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          {/* Marca */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <svg width="14" height="14" viewBox="0 0 22 22">
              <polygon points="11,2 20,20 2,20" fill="none" stroke={CORAL} strokeWidth="1.5" strokeLinejoin="round" opacity="0.5"/>
            </svg>
            <span style={{ fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(240,244,255,0.25)" }}>Montalegre · Terra de Barroso</span>
          </div>

          {/* Links */}
          <div style={{ display: "flex", gap: 24 }}>
            {[
              { label: "História", href: "/historia" },
              { label: "Eventos", href: "/eventos" },
              { label: "Galeria", href: "/galeria" },
              { label: "Guia", href: "/guide" },
            ].map(item => (
              <Link key={item.href} href={item.href} style={{
                fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase",
                color: "rgba(240,244,255,0.25)", textDecoration: "none", transition: "color 0.3s"
              }}
                onMouseEnter={e => (e.currentTarget.style.color = CORAL)}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(240,244,255,0.25)")}
              >{item.label}</Link>
            ))}
          </div>

          {/* REDES SOCIAIS — SVGs reais */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ fontSize: 9, letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(240,244,255,0.2)" }}>Siga-nos</span>
            {[
              { href: "https://www.facebook.com/MunicipioMontalegre", icon: <FacebookSVG />, color: "#1877f2", label: "Facebook" },
              { href: "https://www.instagram.com/municipiomontalegre/", icon: <InstagramSVG />, color: "#e1306c", label: "Instagram" },
              { href: "https://www.cm-montalegre.pt", icon: <WebSVG />, color: "#3b82f6", label: "Website" },
            ].map(social => (
              <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer"
                title={social.label}
                style={{
                  width: 40, height: 40, borderRadius: 8,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  background: `${social.color}18`,
                  border: `1px solid ${social.color}35`,
                  color: social.color, textDecoration: "none",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = `${social.color}35`;
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = `${social.color}18`;
                  (e.currentTarget as HTMLElement).style.transform = "none";
                }}
              >{social.icon}</a>
            ))}
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes scrollPulse { 0%,100%{opacity:.5;transform:scaleY(1)} 50%{opacity:1;transform:scaleY(1.2)} }
        *{box-sizing:border-box;} html{scroll-behavior:smooth;} body{overflow-x:hidden;}
        @media(max-width:900px){ nav>div:last-child{display:none;} }
      `}</style>
    </div>
  );
}
