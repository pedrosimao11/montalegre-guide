"use client";
// ============================================================
// app/page.tsx — Página Inicial V4
// Azul profundo + Coral | Ícones reais | Emojis coloridos
// ============================================================
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

const PHOTOS = {
  hero: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Castelo_de_Montalegre_-_Portugal_%2812946278003%29.jpg/1280px-Castelo_de_Montalegre_-_Portugal_%2812946278003%29.jpg",
  castelo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Castelo_de_Montalegre_2020_01.jpg/1280px-Castelo_de_Montalegre_2020_01.jpg",
  paisagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Arredores_de_Montalegre_-_Portugal_%283958417877%29.jpg/1280px-Arredores_de_Montalegre_-_Portugal_%283958417877%29.jpg",
  albufeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Albufeira_de_Salas_-_Portugal_%285614490292%29.jpg/1280px-Albufeira_de_Salas_-_Portugal_%285614490292%29.jpg",
  centro: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Centro_Hist%C3%B3rico_de_Montalegre.JPG/1280px-Centro_Hist%C3%B3rico_de_Montalegre.JPG",
  vila: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Montalegre_%2825376042593%29.jpg/1280px-Montalegre_%2825376042593%29.jpg",
};

// Paleta: Azul profundo + Coral
const C = {
  bg: "#070d1a",
  bgMid: "#0d1829",
  bgLight: "#111f35",
  coral: "#ff6b4a",
  coralLight: "#ff8c6e",
  coralPale: "#ffe8e2",
  blue: "#1e40af",
  blueLight: "#3b82f6",
  bluePale: "#dbeafe",
  text: "#f0f4ff",
  textDim: "rgba(240,244,255,0.55)",
  textMuted: "rgba(240,244,255,0.3)",
  border: "rgba(255,107,74,0.12)",
  borderBlue: "rgba(59,130,246,0.15)",
};

const SCROLL_SECTIONS = [
  {
    label: "Séc. XIV · Monumento Nacional",
    title: "O Castelo\nde Montalegre",
    text: "Erguido por D. Dinis no século XIV, o Castelo de Montalegre domina a vila do alto de uma colina rochosa a 980 metros de altitude. As suas quatro torres e a imponente torre de menagem foram testemunhas silenciosas de séculos de história.",
    photo: PHOTOS.castelo,
    emoji: "🏰",
    color: C.coral,
  },
  {
    label: "Maior espetáculo de rua de Portugal",
    title: "Sexta 13\nNoite das Bruxas",
    text: "Levada à rua pela primeira vez em 2002, cada sexta-feira 13 transforma Montalegre num palco de fogo e mistério. 50.000 pessoas invadem a vila numa atmosfera única no mundo.",
    photo: PHOTOS.centro,
    emoji: "🧙",
    color: "#a855f7",
  },
  {
    label: "Rainha das Feiras de Portugal",
    title: "Feira do\nFumeiro",
    text: "Durante quatro dias em janeiro, produtores de toda a região expõem o melhor do fumeiro barrosão. Uma celebração da gastronomia transmontana reconhecida em todo o país.",
    photo: PHOTOS.paisagem,
    emoji: "🍖",
    color: C.coralLight,
  },
  {
    label: "Peneda-Gerês · Único Parque Nacional",
    title: "Natureza\nSelvagem",
    text: "Montalegre é a porta de entrada para o Parque Nacional da Peneda-Gerês. Cascatas escondidas, lagoas glaciares e paisagens que cortam a respiração esperam a poucos minutos.",
    photo: PHOTOS.albufeira,
    emoji: "🌿",
    color: "#22c55e",
  },
  {
    label: "Património Agrícola Mundial · FAO 2018",
    title: "Vezeiras\nTradição Viva",
    text: "As Vezeiras — sistema ancestral de pastoreio comunitário — foram reconhecidas pela FAO como Património Agrícola Mundial em 2018. Uma tradição milenar que ainda pulsa em Barroso.",
    photo: PHOTOS.vila,
    emoji: "🐄",
    color: C.blueLight,
  },
];

// Ícones SVG reais das redes sociais
const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const WebIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 6.628 5.374 12 12 12 6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12zm-1 17.93c-3.395-.477-6-3.367-6-6.93 0-.62.083-1.22.235-1.79L9 13v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.18 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
  </svg>
);

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 150);
    const onScroll = () => {
      setScrollY(window.scrollY);
      sectionsRef.current.forEach((el, i) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.5 && rect.bottom >= window.innerHeight * 0.5) {
          setActiveSection(i);
        }
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navScrolled = scrollY > 80;

  return (
    <div style={{ background: C.bg, color: C.text, fontFamily: "'Helvetica Neue', Arial, sans-serif", overflowX: "hidden" }}>

      {/* GRAIN */}
      <div style={{
        position: "fixed", inset: 0, zIndex: 200, pointerEvents: "none", opacity: 0.03,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
      }} />

      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "14px 48px",
        background: navScrolled ? "rgba(7,13,26,0.97)" : "transparent",
        backdropFilter: navScrolled ? "blur(24px)" : "none",
        borderBottom: navScrolled ? `1px solid ${C.border}` : "none",
        transition: "all 0.5s ease",
      }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <span style={{ fontSize: 24 }}>🏔️</span>
          <span style={{ fontSize: 12, letterSpacing: "0.3em", textTransform: "uppercase", color: C.coral, fontWeight: 600 }}>
            Montalegre
          </span>
        </Link>
        <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
          {[
            { label: "História", href: "/historia" },
            { label: "Eventos", href: "/eventos" },
            { label: "Galeria", href: "/galeria" },
            { label: "Como Chegar", href: "/como-chegar" },
          ].map(item => (
            <Link key={item.href} href={item.href} style={{
              fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase",
              color: C.textDim, textDecoration: "none", transition: "color 0.3s",
            }}
              onMouseEnter={e => (e.currentTarget.style.color = C.coral)}
              onMouseLeave={e => (e.currentTarget.style.color = C.textDim)}
            >{item.label}</Link>
          ))}
          <Link href="/guide" style={{
            fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase",
            background: C.coral, color: "#fff",
            padding: "10px 22px", textDecoration: "none", fontWeight: 600,
            borderRadius: 4, transition: "background 0.3s",
          }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = C.coralLight)}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = C.coral)}
          >Explorar →</Link>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ position: "relative", height: "100vh", minHeight: 700, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `url(${PHOTOS.hero})`,
          backgroundSize: "cover", backgroundPosition: "center 30%",
          transform: `scale(1.08) translateY(${scrollY * 0.18}px)`,
          transition: "transform 0.05s linear",
        }} />
        <div style={{
          position: "absolute", inset: 0,
          background: `linear-gradient(to bottom, rgba(7,13,26,0.25) 0%, rgba(7,13,26,0.6) 50%, rgba(7,13,26,0.95) 85%, ${C.bg} 100%)`,
        }} />
        {/* Coral glow */}
        <div style={{
          position: "absolute", bottom: "10%", left: "50%", transform: "translateX(-50%)",
          width: 700, height: 250,
          background: `radial-gradient(ellipse, ${C.coral}22 0%, transparent 70%)`,
          filter: "blur(50px)",
        }} />

        <div style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "0 24px", maxWidth: 920 }}>
          <p style={{
            fontSize: 11, letterSpacing: "0.6em", textTransform: "uppercase",
            color: C.coral, marginBottom: 28,
            opacity: loaded ? 1 : 0, transform: loaded ? "none" : "translateY(16px)",
            transition: "all 0.8s ease 0.2s",
          }}>
            Norte de Portugal &nbsp;·&nbsp; 877 m altitude &nbsp;·&nbsp; Terra de Barroso
          </p>

          <h1 style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: "clamp(80px, 17vw, 210px)",
            lineHeight: 0.85, fontWeight: 400, letterSpacing: "-0.03em",
            opacity: loaded ? 1 : 0, transform: loaded ? "none" : "translateY(50px)",
            transition: "all 1.1s cubic-bezier(0.16,1,0.3,1) 0.35s",
          }}>
            <span style={{
              display: "block",
              background: `linear-gradient(160deg, #ffffff 0%, ${C.coralPale} 40%, #ffffff 70%, ${C.coralLight}88 100%)`,
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
            <div style={{ width: 40, height: 1, background: `linear-gradient(to right, transparent, ${C.coral})` }} />
            <p style={{ fontSize: 13, letterSpacing: "0.12em", color: C.textDim, fontStyle: "italic", fontFamily: "Georgia, serif" }}>
              Uma ideia da Natureza
            </p>
            <div style={{ width: 40, height: 1, background: `linear-gradient(to left, transparent, ${C.coral})` }} />
          </div>

          <div style={{
            display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap",
            opacity: loaded ? 1 : 0, transition: "all 0.8s ease 1s",
          }}>
            <Link href="/guide" style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              background: C.coral, color: "#fff",
              padding: "16px 36px", textDecoration: "none",
              fontSize: 12, letterSpacing: "0.25em", textTransform: "uppercase", fontWeight: 700,
              borderRadius: 4, transition: "all 0.3s ease",
              boxShadow: `0 8px 32px ${C.coral}44`,
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = C.coralLight; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = C.coral; (e.currentTarget as HTMLElement).style.transform = "none"; }}
            >🗺️ Explorar o Guia</Link>
            <Link href="/historia" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              border: `1px solid ${C.coral}55`, color: C.coral,
              padding: "16px 36px", textDecoration: "none",
              fontSize: 12, letterSpacing: "0.25em", textTransform: "uppercase",
              borderRadius: 4, transition: "all 0.3s ease",
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = `${C.coral}15`; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
            >📖 Descobrir a História</Link>
          </div>
        </div>

        <div style={{
          position: "absolute", bottom: 36, left: "50%", transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: 10,
          opacity: loaded ? 0.5 : 0, transition: "opacity 1s ease 1.5s",
        }}>
          <span style={{ fontSize: 9, letterSpacing: "0.5em", textTransform: "uppercase", color: C.coral }}>Scroll</span>
          <div style={{ width: 1, height: 52, background: `linear-gradient(to bottom, ${C.coral}, transparent)`, animation: "scrollPulse 2s ease-in-out infinite" }} />
        </div>
      </section>

      {/* NÚMEROS */}
      <section style={{
        padding: "64px 48px",
        borderTop: `1px solid ${C.border}`,
        borderBottom: `1px solid ${C.border}`,
        background: `linear-gradient(135deg, ${C.bgMid} 0%, ${C.bgLight} 50%, ${C.bgMid} 100%)`,
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
          {[
            { num: "877", unit: "m", label: "Altitude", emoji: "⛰️" },
            { num: "1273", unit: "", label: "Ano do Foral", emoji: "📜" },
            { num: "50K", unit: "+", label: "Visitantes Sexta 13", emoji: "🧙" },
            { num: "560", unit: "km²", label: "Município", emoji: "🗺️" },
          ].map((item, i) => (
            <div key={item.label} style={{
              textAlign: "center", padding: "32px 20px",
              borderRight: i < 3 ? `1px solid ${C.borderBlue}` : "none",
            }}>
              <div style={{ fontSize: 28, marginBottom: 8 }}>{item.emoji}</div>
              <p style={{
                fontFamily: "Georgia, serif",
                fontSize: "clamp(36px, 4.5vw, 64px)", color: C.coral,
                margin: 0, lineHeight: 1, fontWeight: 300,
              }}>
                {item.num}<span style={{ fontSize: "0.4em", opacity: 0.7 }}>{item.unit}</span>
              </p>
              <p style={{ fontSize: 10, letterSpacing: "0.35em", textTransform: "uppercase", color: C.textMuted, marginTop: 10 }}>
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SCROLL STORYTELLING */}
      <div style={{ position: "relative" }}>
        <div style={{
          position: "sticky", top: 0, height: "100vh",
          display: "flex", alignItems: "center", justifyContent: "flex-end",
          pointerEvents: "none", zIndex: 1,
          marginBottom: `-${SCROLL_SECTIONS.length * 100}vh`,
        }}>
          <div style={{ position: "relative", width: "48%", height: "70vh", overflow: "hidden", borderRadius: "8px 0 0 8px" }}>
            {SCROLL_SECTIONS.map((s, i) => (
              <div key={i} style={{
                position: "absolute", inset: 0,
                backgroundImage: `url(${s.photo})`,
                backgroundSize: "cover", backgroundPosition: "center",
                opacity: activeSection === i ? 1 : 0,
                transition: "opacity 0.9s cubic-bezier(0.4,0,0.2,1)",
              }}>
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(7,13,26,0.8) 0%, rgba(7,13,26,0.1) 60%)" }} />
                <div style={{
                  position: "absolute", bottom: 24, left: 24,
                  display: "flex", alignItems: "center", gap: 10,
                  padding: "10px 18px",
                  background: `${s.color}22`,
                  border: `1px solid ${s.color}44`,
                  backdropFilter: "blur(8px)",
                  borderRadius: 6,
                }}>
                  <span style={{ fontSize: 20 }}>{s.emoji}</span>
                  <span style={{ fontSize: 9, letterSpacing: "0.35em", textTransform: "uppercase", color: s.color }}>
                    {s.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ position: "relative", zIndex: 2 }}>
          {SCROLL_SECTIONS.map((section, i) => (
            <div
              key={i}
              ref={el => { sectionsRef.current[i] = el; }}
              style={{
                minHeight: "100vh",
                display: "flex", alignItems: "center",
                padding: "80px 8%",
                maxWidth: "52%",
              }}
            >
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
                  <span style={{ fontSize: 40 }}>{section.emoji}</span>
                  <div style={{ width: 32, height: 2, background: section.color, borderRadius: 2 }} />
                  <span style={{ fontSize: 9, letterSpacing: "0.5em", textTransform: "uppercase", color: section.color }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h2 style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "clamp(38px, 4.5vw, 66px)",
                  fontWeight: 300, lineHeight: 1.05, letterSpacing: "-0.02em",
                  color: C.text, marginBottom: 28, whiteSpace: "pre-line",
                }}>
                  {section.title}
                </h2>
                <p style={{ fontSize: 15, lineHeight: 1.9, color: C.textDim, maxWidth: 440 }}>
                  {section.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* EXPLORAR — Emojis grandes e coloridos */}
      <section style={{ padding: "120px 48px", background: C.bgMid }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <p style={{ fontSize: 11, letterSpacing: "0.5em", textTransform: "uppercase", color: C.coral, marginBottom: 16 }}>Descubra tudo</p>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 300, color: C.text }}>
              O que há para <em style={{ color: C.coral }}>explorar</em>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {[
              {
                href: "/historia",
                emoji: "🏛️",
                label: "História & Cultura",
                desc: "Origens medievais, o castelo do séc. XIV, as bruxas e as tradições ancestrais de Barroso",
                color: "#f59e0b",
                bg: "rgba(245,158,11,0.08)",
                border: "rgba(245,158,11,0.2)",
              },
              {
                href: "/eventos",
                emoji: "🎭",
                label: "Eventos & Festivais",
                desc: "Sexta 13 Noite das Bruxas, Feira do Fumeiro, Chegas de Bois e muito mais ao longo do ano",
                color: "#a855f7",
                bg: "rgba(168,85,247,0.08)",
                border: "rgba(168,85,247,0.2)",
              },
              {
                href: "/galeria",
                emoji: "📸",
                label: "Galeria de Fotos",
                desc: "Imagens deslumbrantes da paisagem selvagem, do castelo medieval e da vida local",
                color: "#06b6d4",
                bg: "rgba(6,182,212,0.08)",
                border: "rgba(6,182,212,0.2)",
              },
              {
                href: "/como-chegar",
                emoji: "🗺️",
                label: "Como Chegar",
                desc: "Rotas de carro, autocarro e avião. Tudo o que precisas para chegar a Montalegre",
                color: "#22c55e",
                bg: "rgba(34,197,94,0.08)",
                border: "rgba(34,197,94,0.2)",
              },
              {
                href: "/guide",
                emoji: "🍽️",
                label: "Restaurantes",
                desc: "Os melhores restaurantes de Montalegre com avaliações reais, fotos e direções",
                color: C.coral,
                bg: `${C.coral}14`,
                border: `${C.coral}33`,
              },
              {
                href: "/guide",
                emoji: "🏨",
                label: "Alojamentos",
                desc: "Hotéis, casas rurais e alojamentos locais para uma estadia inesquecível em Barroso",
                color: C.blueLight,
                bg: "rgba(59,130,246,0.08)",
                border: "rgba(59,130,246,0.2)",
              },
            ].map((item) => (
              <Link key={`${item.href}-${item.label}`} href={item.href} style={{
                display: "block", padding: "36px 32px",
                background: item.bg,
                border: `1px solid ${item.border}`,
                textDecoration: "none", color: "inherit",
                borderRadius: 12,
                transition: "all 0.35s ease",
                position: "relative", overflow: "hidden",
              }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 48px ${item.color}22`;
                  (e.currentTarget as HTMLElement).style.borderColor = `${item.color}55`;
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.transform = "none";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  (e.currentTarget as HTMLElement).style.borderColor = item.border;
                }}
              >
                <div style={{ fontSize: 52, marginBottom: 18, lineHeight: 1 }}>{item.emoji}</div>
                <h3 style={{ fontFamily: "Georgia, serif", fontSize: 20, fontWeight: 400, color: C.text, marginBottom: 10 }}>{item.label}</h3>
                <p style={{ fontSize: 13, color: C.textDim, lineHeight: 1.7 }}>{item.desc}</p>
                <div style={{
                  position: "absolute", top: 20, right: 20,
                  fontSize: 11, color: item.color, letterSpacing: "0.2em",
                  opacity: 0.6,
                }}>→</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section style={{
        position: "relative", padding: "140px 48px", textAlign: "center", overflow: "hidden",
        borderTop: `1px solid ${C.border}`,
      }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${PHOTOS.vila})`, backgroundSize: "cover", backgroundPosition: "center", opacity: 0.08 }} />
        <div style={{
          position: "absolute", inset: 0,
          background: `radial-gradient(ellipse at center, ${C.coral}18 0%, transparent 65%)`,
        }} />
        <div style={{ position: "relative" }}>
          <div style={{ fontSize: 56, marginBottom: 24 }}>🏔️</div>
          <p style={{ fontSize: 11, letterSpacing: "0.5em", textTransform: "uppercase", color: C.coral, marginBottom: 20 }}>Pronto para explorar?</p>
          <h2 style={{
            fontFamily: "Georgia, serif", fontSize: "clamp(40px, 7vw, 88px)", fontWeight: 300,
            lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: 24,
            background: `linear-gradient(135deg, ${C.text} 0%, ${C.coral} 50%, ${C.text} 100%)`,
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
          }}>
            Descubra o melhor<br />de Montalegre
          </h2>
          <p style={{ color: C.textMuted, marginBottom: 48, fontSize: 15 }}>
            Restaurantes, atrações, alojamentos — tudo num guia interativo com mapa em tempo real
          </p>
          <Link href="/guide" style={{
            display: "inline-flex", alignItems: "center", gap: 12,
            background: C.coral, color: "#fff",
            padding: "20px 52px", textDecoration: "none",
            fontSize: 12, letterSpacing: "0.25em", textTransform: "uppercase", fontWeight: 700,
            borderRadius: 6, transition: "all 0.3s ease",
            boxShadow: `0 12px 40px ${C.coral}44`,
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = C.coralLight; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = C.coral; (e.currentTarget as HTMLElement).style.transform = "none"; }}
          >🗺️ Abrir o Guia Interativo</Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        borderTop: `1px solid ${C.border}`,
        padding: "40px 48px",
        background: C.bgMid,
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 32 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ fontSize: 24 }}>🏔️</span>
              <div>
                <p style={{ fontSize: 13, fontWeight: 600, color: C.coral, letterSpacing: "0.2em", textTransform: "uppercase" }}>Montalegre</p>
                <p style={{ fontSize: 11, color: C.textMuted }}>Terra de Barroso · Norte de Portugal</p>
              </div>
            </div>

            {/* Ícones reais das redes sociais */}
            <div style={{ display: "flex", gap: 12 }}>
              {[
                { href: "https://www.facebook.com/MunicipioMontalegre", icon: <FacebookIcon />, color: "#1877f2", label: "Facebook" },
                { href: "https://www.instagram.com/municipiomontalegre/", icon: <InstagramIcon />, color: "#e1306c", label: "Instagram" },
                { href: "https://www.youtube.com/@municipiodemontalegre", icon: <YoutubeIcon />, color: "#ff0000", label: "YouTube" },
                { href: "https://www.cm-montalegre.pt", icon: <WebIcon />, color: C.blueLight, label: "Website" },
              ].map(social => (
                <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer"
                  title={social.label}
                  style={{
                    width: 44, height: 44, borderRadius: 10,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    background: `${social.color}18`,
                    border: `1px solid ${social.color}30`,
                    color: social.color,
                    transition: "all 0.3s ease",
                    textDecoration: "none",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.background = `${social.color}30`;
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.background = `${social.color}18`;
                    (e.currentTarget as HTMLElement).style.transform = "none";
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 24, borderTop: `1px solid ${C.border}` }}>
            <p style={{ fontSize: 11, color: C.textMuted }}>© 2025 Montalegre — Guia Local</p>
            <div style={{ display: "flex", gap: 24 }}>
              {[{ label: "História", href: "/historia" }, { label: "Eventos", href: "/eventos" }, { label: "Galeria", href: "/galeria" }, { label: "Como Chegar", href: "/como-chegar" }, { label: "Guia", href: "/guide" }].map(item => (
                <Link key={item.href} href={item.href} style={{ fontSize: 11, color: C.textMuted, textDecoration: "none", transition: "color 0.3s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = C.coral)}
                  onMouseLeave={e => (e.currentTarget.style.color = C.textMuted)}
                >{item.label}</Link>
              ))}
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes scrollPulse { 0%,100%{opacity:.5} 50%{opacity:1} }
        *{box-sizing:border-box;} html{scroll-behavior:smooth;} body{overflow-x:hidden;}
        @media(max-width:900px){ nav>div:last-child{display:none;} }
      `}</style>
    </div>
  );
}
