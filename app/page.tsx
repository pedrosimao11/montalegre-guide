"use client";
// ============================================================
// Página Inicial — Montalegre
// Estilo cinematográfico inspirado em bandido.tv
// Coloca em: app/page.tsx (substitui o conteúdo atual)
// ============================================================
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main style={{ fontFamily: "'Georgia', serif", background: "#080705", color: "#f0ebe2", overflowX: "hidden" }}>

      {/* ── Grain overlay ── */}
      <div style={{
        position: "fixed", inset: 0, zIndex: 100, pointerEvents: "none", opacity: 0.035,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat", backgroundSize: "128px",
      }} />

      {/* ── Nav ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "24px 40px",
        background: scrollY > 50 ? "rgba(8,7,5,0.92)" : "transparent",
        backdropFilter: scrollY > 50 ? "blur(12px)" : "none",
        borderBottom: scrollY > 50 ? "1px solid rgba(201,169,110,0.1)" : "none",
        transition: "all 0.4s ease",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{
            width: 6, height: 6, borderRadius: "50%",
            background: "#c9a96e",
            boxShadow: "0 0 12px #c9a96e",
          }} />
          <span style={{ fontSize: 11, letterSpacing: "0.35em", textTransform: "uppercase", color: "#c9a96e" }}>
            Montalegre
          </span>
        </div>
        <Link href="/guide" style={{
          fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase",
          color: "#f0ebe2", textDecoration: "none",
          padding: "10px 24px",
          border: "1px solid rgba(240,235,226,0.25)",
          transition: "all 0.3s ease",
        }}>
          Explorar →
        </Link>
      </nav>

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section ref={heroRef} style={{
        position: "relative", height: "100vh", minHeight: 700,
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(135deg, #0e0a06 0%, #1a1208 40%, #0a0e0c 100%)",
          transform: `translateY(${scrollY * 0.3}px)`,
        }} />

        {/* Mountain silhouette */}
        <svg style={{
          position: "absolute", bottom: 0, left: 0, right: 0, width: "100%",
          transform: `translateY(${scrollY * 0.15}px)`,
          opacity: 0.18,
        }} viewBox="0 0 1440 400" preserveAspectRatio="none">
          <path d="M0,400 L0,280 L120,180 L200,220 L320,100 L440,160 L520,80 L600,130 L680,60 L760,100 L840,40 L920,90 L1000,30 L1080,80 L1160,50 L1240,110 L1320,70 L1440,140 L1440,400 Z" fill="#c9a96e" />
          <path d="M0,400 L0,320 L180,240 L280,270 L380,190 L480,230 L580,160 L660,200 L740,140 L820,180 L900,120 L980,160 L1060,100 L1140,150 L1220,110 L1320,170 L1440,200 L1440,400 Z" fill="#1a1208" />
        </svg>

        {/* Glow */}
        <div style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: 800, height: 800, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(201,169,110,0.06) 0%, transparent 65%)",
          pointerEvents: "none",
        }} />

        {/* Content */}
        <div style={{ position: "relative", textAlign: "center", padding: "0 24px", zIndex: 2 }}>
          <p style={{
            fontSize: 10, letterSpacing: "0.5em", textTransform: "uppercase",
            color: "#c9a96e", marginBottom: 32,
            opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.8s ease 0.2s",
          }}>
            Norte de Portugal &nbsp;·&nbsp; 877m &nbsp;·&nbsp; Terra de Barroso
          </p>

          <h1 style={{
            fontSize: "clamp(64px, 14vw, 180px)",
            lineHeight: 0.9, fontWeight: 400, letterSpacing: "-0.02em",
            opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(40px)",
            transition: "all 1s ease 0.4s",
          }}>
            <span style={{ display: "block", color: "#f0ebe2" }}>Montal</span>
            <span style={{ display: "block", color: "#c9a96e", fontStyle: "italic" }}>egre</span>
          </h1>

          <p style={{
            fontSize: "clamp(13px, 1.5vw, 16px)", letterSpacing: "0.1em",
            color: "rgba(240,235,226,0.45)",
            maxWidth: 480, margin: "32px auto 48px",
            opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.8s ease 0.7s",
          }}>
            Uma vila medieval entre montanhas onde o tempo ainda respira devagar
          </p>

          <div style={{
            opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.8s ease 0.9s",
          }}>
            <Link href="/guide" style={{
              display: "inline-flex", alignItems: "center", gap: 12,
              background: "#c9a96e", color: "#080705",
              padding: "16px 40px", textDecoration: "none",
              fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", fontWeight: 700,
            }}>
              Descobrir o Guia
              <svg width="16" height="8" viewBox="0 0 16 8" fill="none">
                <path d="M0 4H14M11 1L14 4L11 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: "absolute", bottom: 40, left: "50%", transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
          opacity: loaded ? 0.4 : 0, transition: "opacity 1s ease 1.2s",
        }}>
          <span style={{ fontSize: 9, letterSpacing: "0.4em", textTransform: "uppercase", color: "#c9a96e" }}>Scroll</span>
          <div style={{ width: 1, height: 48, background: "linear-gradient(to bottom, #c9a96e, transparent)" }} />
        </div>
      </section>

      {/* ── Números ── */}
      <section style={{
        padding: "80px 40px",
        borderTop: "1px solid rgba(201,169,110,0.1)",
        borderBottom: "1px solid rgba(201,169,110,0.1)",
        background: "linear-gradient(to right, #080705, #0e0c08, #080705)",
      }}>
        <div style={{
          maxWidth: 1100, margin: "0 auto",
          display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
          gap: 40, textAlign: "center",
        }}>
          {[
            { num: "877", unit: "m", label: "Altitude" },
            { num: "1273", unit: "", label: "Ano do Foral" },
            { num: "XIV", unit: "", label: "Século do Castelo" },
            { num: "560", unit: "km²", label: "Município" },
          ].map((item) => (
            <div key={item.label}>
              <p style={{ fontSize: "clamp(36px, 5vw, 64px)", color: "#c9a96e", margin: 0, lineHeight: 1 }}>
                {item.num}<span style={{ fontSize: "0.4em", opacity: 0.7 }}>{item.unit}</span>
              </p>
              <p style={{ fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(240,235,226,0.3)", marginTop: 10 }}>
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── História ── */}
      <section style={{ padding: "120px 40px", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 80, alignItems: "start" }}>
          <div style={{ paddingTop: 8 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
              <div style={{ width: 32, height: 1, background: "#c9a96e" }} />
              <span style={{ fontSize: 10, letterSpacing: "0.4em", textTransform: "uppercase", color: "#c9a96e" }}>História</span>
            </div>
            <p style={{ fontSize: 11, letterSpacing: "0.15em", color: "rgba(240,235,226,0.25)", lineHeight: 1.8, textTransform: "uppercase" }}>
              Uma vila com<br />mil anos<br />de memória
            </p>
          </div>
          <div>
            <h2 style={{ fontSize: "clamp(32px, 5vw, 64px)", fontWeight: 400, lineHeight: 1.1, marginBottom: 40, letterSpacing: "-0.02em" }}>
              Onde as montanhas<br />
              <em style={{ color: "#c9a96e", fontStyle: "italic" }}>guardam memória</em>
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}>
              <p style={{ color: "rgba(240,235,226,0.55)", lineHeight: 1.9, fontSize: 15 }}>
                Montalegre ergue-se no coração de Barroso, a mais de 800 metros de altitude. A sua origem remonta à Alta Idade Média, quando os primeiros habitantes procuraram refúgio nestas terras agrestes entre a Serra do Larouco e o Parque Nacional da Peneda-Gerês.
              </p>
              <p style={{ color: "rgba(240,235,226,0.55)", lineHeight: 1.9, fontSize: 15 }}>
                O nome significa literalmente <em style={{ color: "#c9a96e" }}>"monte alegre"</em> — uma referência às encostas verdes que rodeiam a vila, onde o granito cinzento das construções seculares contrasta com o verde profundo dos pinheiros e carvalhos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Cards ── */}
      <section style={{ padding: "0 40px 120px", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2 }}>
          {[
            { icon: "🏰", title: "Castelo Medieval", sub: "Séc. XIV", text: "Construído por D. Dinis, domina a vila do alto de uma colina rochosa. Quatro torres e uma imponente torre de menagem." },
            { icon: "🌿", title: "Parque Nacional", sub: "Peneda-Gerês", text: "Cascatas, lagoas glaciares e fauna selvagem a poucos minutos. O único parque nacional de Portugal." },
            { icon: "🧙", title: "Terra de Bruxas", sub: "Lendas & Mitos", text: "Famosa pelas suas lendas de bruxas e feiticeiras. Uma identidade cultural única no norte de Portugal." },
            { icon: "🍖", title: "Gastronomia", sub: "Sabores de Barroso", text: "Cabrito assado, fumeiro transmontano e mel de Barroso. Uma mesa rica que conta histórias de gerações." },
            { icon: "💧", title: "Albufeira", sub: "Alto Rabagão", text: "A maior albufeira do norte de Portugal, com 22 km de extensão. Desportos náuticos e paisagens únicas." },
            { icon: "🌾", title: "Vezeiras", sub: "Património Mundial", text: "Sistema ancestral de pastoreio comunitário reconhecido pela FAO como Património Agrícola Mundial em 2018." },
          ].map((card, i) => (
            <div key={i} style={{
              padding: "48px 36px",
              background: i % 2 === 0 ? "rgba(201,169,110,0.04)" : "rgba(240,235,226,0.02)",
              border: "1px solid rgba(201,169,110,0.08)",
              transition: "all 0.3s ease",
            }}>
              <div style={{ fontSize: 32, marginBottom: 20 }}>{card.icon}</div>
              <p style={{ fontSize: 9, letterSpacing: "0.4em", textTransform: "uppercase", color: "#c9a96e", marginBottom: 8 }}>{card.sub}</p>
              <h3 style={{ fontSize: 20, fontWeight: 400, marginBottom: 16, color: "#f0ebe2" }}>{card.title}</h3>
              <p style={{ fontSize: 14, color: "rgba(240,235,226,0.45)", lineHeight: 1.8 }}>{card.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA Final ── */}
      <section style={{
        padding: "160px 40px", textAlign: "center",
        position: "relative", overflow: "hidden",
        borderTop: "1px solid rgba(201,169,110,0.1)",
      }}>
        <div style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: 600, height: 600,
          background: "radial-gradient(circle, rgba(201,169,110,0.07) 0%, transparent 65%)",
          pointerEvents: "none",
        }} />
        <p style={{ fontSize: 10, letterSpacing: "0.5em", textTransform: "uppercase", color: "#c9a96e", marginBottom: 32 }}>
          Pronto para explorar?
        </p>
        <h2 style={{ fontSize: "clamp(40px, 8vw, 100px)", fontWeight: 400, lineHeight: 1, letterSpacing: "-0.02em", marginBottom: 24 }}>
          Descubra o melhor<br />
          <em style={{ color: "#c9a96e" }}>de Montalegre</em>
        </h2>
        <p style={{ color: "rgba(240,235,226,0.35)", marginBottom: 56, fontSize: 16 }}>
          Restaurantes, atrações, alojamentos e muito mais
        </p>
        <Link href="/guide" style={{
          display: "inline-flex", alignItems: "center", gap: 14,
          background: "#c9a96e", color: "#080705",
          padding: "20px 56px", textDecoration: "none",
          fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", fontWeight: 700,
        }}>
          Abrir o Guia Interativo
          <svg width="18" height="8" viewBox="0 0 18 8" fill="none">
            <path d="M0 4H16M13 1L16 4L13 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </Link>

        {/* ══════════ NOVOS BOTÕES (AQUI FORA, NO SÍTIO CERTO) ══════════ */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '16px',
          marginTop: '48px',
          maxWidth: '600px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          <Link href="/eventos" style={{
            backgroundColor: 'rgba(201,169,110,0.08)',
            border: '1px solid rgba(201,169,110,0.2)',
            borderRadius: '4px',
            padding: '14px 20px',
            textAlign: 'center',
            color: '#f0ebe2',
            textDecoration: 'none',
            fontSize: '13px',
            letterSpacing: '0.05em',
            transition: 'all 0.3s ease'
          }}>
            🎭 Eventos & Festivais
          </Link>
          <Link href="/galeria" style={{
            backgroundColor: 'rgba(201,169,110,0.08)',
            border: '1px solid rgba(201,169,110,0.2)',
            borderRadius: '4px',
            padding: '14px 20px',
            textAlign: 'center',
            color: '#f0ebe2',
            textDecoration: 'none',
            fontSize: '13px',
            letterSpacing: '0.05em',
            transition: 'all 0.3s ease'
          }}>
            📸 Galeria de Fotos
          </Link>
          <Link href="/como-chegar" style={{
            backgroundColor: 'rgba(201,169,110,0.08)',
            border: '1px solid rgba(201,169,110,0.2)',
            borderRadius: '4px',
            padding: '14px 20px',
            textAlign: 'center',
            color: '#f0ebe2',
            textDecoration: 'none',
            fontSize: '13px',
            letterSpacing: '0.05em',
            transition: 'all 0.3s ease'
          }}>
            🗺️ Como Chegar
          </Link>
          <Link href="/historia" style={{
            backgroundColor: 'rgba(201,169,110,0.08)',
            border: '1px solid rgba(201,169,110,0.2)',
            borderRadius: '4px',
            padding: '14px 20px',
            textAlign: 'center',
            color: '#f0ebe2',
            textDecoration: 'none',
            fontSize: '13px',
            letterSpacing: '0.05em',
            transition: 'all 0.3s ease'
          }}>
            📖 História & Cultura
          </Link>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{
        borderTop: "1px solid rgba(201,169,110,0.08)",
        padding: "32px 40px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <span style={{ fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(240,235,226,0.2)" }}>
          Montalegre · Terra de Barroso
        </span>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 4, height: 4, borderRadius: "50%", background: "#c9a96e", opacity: 0.5 }} />
          <span style={{ fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(240,235,226,0.2)" }}>
            Norte de Portugal
          </span>
        </div>
      </footer>
      <style>{`
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body { overflow-x: hidden; }
  @media (max-width: 768px) {
    nav { padding: 16px 20px !important; }
    section { padding-left: 20px !important; padding-right: 20px !important; }
    h1 { font-size: clamp(48px, 12vw, 80px) !important; }
    h2 { font-size: clamp(28px, 6vw, 48px) !important; }
    div[style*="grid-template-columns"] {
      grid-template-columns: 1fr !important;
    }
    div[style*="grid-template-columns: repeat(4"] {
      grid-template-columns: repeat(2, 1fr) !important;
    }
    div[style*="grid-template-columns: 1fr 2fr"] {
      grid-template-columns: 1fr !important;
      gap: 40px !important;
    }
  }`}
</style>

      

    </main>
  )
}
