"use client";
// ============================================================
// app/page.tsx — Página Inicial V3
// Verde floresta + dourado | Fotos reais | Scroll cinematográfico
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

const SCROLL_SECTIONS = [
  {
    id: "castelo",
    label: "Séc. XIV · Monumento Nacional",
    title: "O Castelo\nde Montalegre",
    text: "Erguido por D. Dinis no século XIV, o Castelo de Montalegre domina a vila do alto de uma colina rochosa a 980 metros de altitude. As suas quatro torres e a imponente torre de menagem foram testemunhas silenciosas de séculos de história, guerras e conquistas.",
    photo: PHOTOS.castelo,
    color: "#b4933c",
  },
  {
    id: "bruxas",
    label: "Maior espetáculo de rua de Portugal",
    title: "Sexta 13\nNoite das Bruxas",
    text: "Levada à rua pela primeira vez em 2002, a 'Sexta 13 – Noite das Bruxas' transformou uma superstição numa festa mágica única no mundo. Cada sexta-feira 13, 50.000 pessoas invadem Montalegre numa atmosfera de fogo, mistério e tradição barrosã.",
    photo: PHOTOS.centro,
    color: "#7c3aed",
  },
  {
    id: "fumeiro",
    label: "Rainha das Feiras de Portugal",
    title: "Feira do\nFumeiro",
    text: "A Feira do Fumeiro de Montalegre é considerada a 'Rainha das Feiras de Portugal'. Durante quatro dias em janeiro, produtores de toda a região expõem o melhor do fumeiro barrosão — presuntos, salpicões, chouriças — numa celebração da gastronomia transmontana.",
    photo: PHOTOS.paisagem,
    color: "#c2410c",
  },
  {
    id: "natureza",
    label: "Peneda-Gerês · Único Parque Nacional",
    title: "Natureza\nSelvagem",
    text: "Montalegre é a porta de entrada para o Parque Nacional da Peneda-Gerês, o único parque nacional de Portugal. Cascatas escondidas, lagoas glaciares, lobos ibéricos e paisagens que cortam a respiração esperam-te a poucos minutos da vila.",
    photo: PHOTOS.albufeira,
    color: "#15803d",
  },
  {
    id: "tradicao",
    label: "Património Agrícola Mundial · FAO 2018",
    title: "Vezeiras\nTradição Viva",
    text: "As Vezeiras — sistema ancestral de pastoreio comunitário onde o gado é guardado à vez pelos pastores da comunidade — foram reconhecidas pela FAO como Património Agrícola Mundial em 2018. Uma tradição milenar que ainda pulsa no coração de Barroso.",
    photo: PHOTOS.vila,
    color: "#b4933c",
  },
];

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 150);
    const onScroll = () => {
      setScrollY(window.scrollY);
      if (sectionsRef.current[0] && window.scrollY < 100) setActiveSection(0);
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
    <div style={{ background: "#050d07", color: "#f0ede6", fontFamily: "'Helvetica Neue', Arial, sans-serif", overflowX: "hidden" }}>

      {/* GRAIN */}
      <div style={{
        position: "fixed", inset: 0, zIndex: 200, pointerEvents: "none", opacity: 0.04,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
      }} />

      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "16px 48px",
        background: navScrolled ? "rgba(5,13,7,0.97)" : "transparent",
        backdropFilter: navScrolled ? "blur(24px)" : "none",
        borderBottom: navScrolled ? "1px solid rgba(180,147,60,0.15)" : "none",
        transition: "all 0.5s ease",
      }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <svg width="20" height="20" viewBox="0 0 22 22">
            <polygon points="11,2 20,20 2,20" fill="none" stroke="#b4933c" strokeWidth="1.5" strokeLinejoin="round"/>
            <polygon points="11,7 16,17 6,17" fill="#b4933c" opacity="0.25"/>
          </svg>
          <span style={{ fontSize: 11, letterSpacing: "0.4em", textTransform: "uppercase", color: "#b4933c", fontFamily: "Georgia, serif" }}>
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
              color: "rgba(240,237,230,0.55)", textDecoration: "none", transition: "color 0.3s",
            }}
              onMouseEnter={e => (e.currentTarget.style.color = "#b4933c")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(240,237,230,0.55)")}
            >{item.label}</Link>
          ))}
          <Link href="/guide" style={{
            fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase",
            background: "#b4933c", color: "#050d07",
            padding: "10px 22px", textDecoration: "none", fontWeight: 600,
            transition: "background 0.3s",
          }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = "#d4b06a")}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = "#b4933c")}
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
          background: "linear-gradient(to bottom, rgba(5,13,7,0.2) 0%, rgba(5,13,7,0.55) 50%, rgba(5,13,7,0.92) 85%, #050d07 100%)",
        }} />
        <div style={{
          position: "absolute", bottom: "15%", left: "50%", transform: "translateX(-50%)",
          width: 800, height: 300, borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(21,128,61,0.18) 0%, transparent 70%)",
          filter: "blur(60px)",
        }} />

        <div style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "0 24px", maxWidth: 900 }}>
          <p style={{
            fontSize: 10, letterSpacing: "0.6em", textTransform: "uppercase", color: "#b4933c",
            marginBottom: 32,
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
              background: "linear-gradient(160deg, #ffffff 0%, #d4c9b0 40%, #f0ede6 70%, #c8bfa8 100%)",
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
            <div style={{ width: 40, height: 1, background: "linear-gradient(to right, transparent, #b4933c)" }} />
            <p style={{ fontSize: 13, letterSpacing: "0.12em", color: "rgba(240,237,230,0.55)", fontStyle: "italic", fontFamily: "Georgia, serif" }}>
              Uma ideia da Natureza
            </p>
            <div style={{ width: 40, height: 1, background: "linear-gradient(to left, transparent, #b4933c)" }} />
          </div>

          <div style={{
            display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap",
            opacity: loaded ? 1 : 0, transition: "all 0.8s ease 1s",
          }}>
            <Link href="/guide" style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              background: "#b4933c", color: "#050d07",
              padding: "16px 36px", textDecoration: "none",
              fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", fontWeight: 700,
              transition: "all 0.3s ease",
            }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = "#d4b06a")}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = "#b4933c")}
            >Explorar o Guia →</Link>
            <Link href="/historia" style={{
              display: "inline-flex", alignItems: "center",
              border: "1px solid rgba(180,147,60,0.45)", color: "#b4933c",
              padding: "16px 36px", textDecoration: "none",
              fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase",
              transition: "all 0.3s ease",
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(180,147,60,0.1)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
            >Descobrir a História</Link>
          </div>
        </div>

        <div style={{
          position: "absolute", bottom: 36, left: "50%", transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: 10,
          opacity: loaded ? 0.5 : 0, transition: "opacity 1s ease 1.5s",
        }}>
          <span style={{ fontSize: 9, letterSpacing: "0.5em", textTransform: "uppercase", color: "#b4933c" }}>Scroll</span>
          <div style={{ width: 1, height: 52, background: "linear-gradient(to bottom, #b4933c, transparent)", animation: "scrollPulse 2s ease-in-out infinite" }} />
        </div>
      </section>

      {/* NÚMEROS */}
      <section style={{
        padding: "70px 48px",
        borderTop: "1px solid rgba(180,147,60,0.1)",
        borderBottom: "1px solid rgba(180,147,60,0.1)",
        background: "linear-gradient(135deg, #060e08 0%, #0a1a0c 50%, #060e08 100%)",
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
          {[
            { num: "877", unit: "m", label: "Altitude" },
            { num: "1273", unit: "", label: "Ano do Foral" },
            { num: "50K", unit: "+", label: "Visitantes Sexta 13" },
            { num: "560", unit: "km²", label: "Município" },
          ].map((item, i) => (
            <div key={item.label} style={{
              textAlign: "center", padding: "36px 20px",
              borderRight: i < 3 ? "1px solid rgba(180,147,60,0.1)" : "none",
            }}>
              <p style={{ fontFamily: "Georgia, serif", fontSize: "clamp(44px, 5.5vw, 76px)", color: "#b4933c", margin: 0, lineHeight: 1, fontWeight: 300 }}>
                {item.num}<span style={{ fontSize: "0.4em", opacity: 0.7 }}>{item.unit}</span>
              </p>
              <p style={{ fontSize: 9, letterSpacing: "0.4em", textTransform: "uppercase", color: "rgba(240,237,230,0.3)", marginTop: 10 }}>
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>
      {/* SCROLL STORYTELLING */}
<div style={{ position: "relative" }}>
  {SCROLL_SECTIONS.map((section, i) => (
    <div
      key={section.id}
      style={{
        display: "flex",
        flexDirection: i % 2 === 0 ? "row" : "row-reverse",
        minHeight: "100vh",
        alignItems: "center",
        padding: "60px 48px",
        gap: 60,
        borderBottom: "1px solid rgba(180,147,60,0.08)",
      }}
    >
      {/* Texto */}
      <div style={{ flex: 1, maxWidth: 500 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
          <div style={{ width: 36, height: 1, background: section.color }} />
          <span style={{ fontSize: 9, letterSpacing: "0.5em", textTransform: "uppercase", color: section.color }}>
            {String(i + 1).padStart(2, "0")} — {section.label}
          </span>
        </div>
        <h2 style={{
          fontFamily: "Georgia, serif",
          fontSize: "clamp(36px, 4vw, 60px)",
          fontWeight: 300,
          lineHeight: 1.1,
          letterSpacing: "-0.02em",
          color: "#f0ede6",
          marginBottom: 24,
          whiteSpace: "pre-line",
        }}>
          {section.title}
        </h2>
        <p style={{
          fontSize: 15,
          lineHeight: 1.9,
          color: "rgba(240,237,230,0.55)",
          maxWidth: 440,
        }}>
          {section.text}
        </p>
      </div>

      {/* Foto */}
      <div style={{
        flex: 1,
        height: "70vh",
        borderRadius: 2,
        overflow: "hidden",
        boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
      }}>
        <div style={{
          width: "100%",
          height: "100%",
          backgroundImage: `url(${section.photo})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }} />
      </div>
    </div>
  ))}
</div>
 {/* QUICK LINKS */}
      <section style={{ padding: "120px 48px", background: "#060e08" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 56 }}>
            <div style={{ width: 48, height: 1, background: "#b4933c" }} />
            <span style={{ fontSize: 10, letterSpacing: "0.5em", textTransform: "uppercase", color: "#b4933c" }}>Explorar</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 2 }}>
            {[
              { href: "/historia", label: "História & Cultura", desc: "Origens medievais, o castelo, as bruxas e as tradições de Barroso", icon: "📖", color: "#b4933c" },
              { href: "/eventos", label: "Eventos & Festivais", desc: "Sexta 13, Feira do Fumeiro, Carnaval e muito mais ao longo do ano", icon: "🎭", color: "#7c3aed" },
              { href: "/galeria", label: "Galeria de Fotos", desc: "Imagens deslumbrantes da paisagem, castelo e vida local", icon: "📸", color: "#0891b2" },
              { href: "/como-chegar", label: "Como Chegar", desc: "Rotas, transportes e tudo o que precisas para visitar Montalegre", icon: "🗺️", color: "#15803d" },
              { href: "/guide", label: "Guia Interativo", desc: "Restaurantes, alojamentos, atrações e serviços em tempo real com mapa", icon: "📍", color: "#c2410c" },
            ].map((item) => (
              <Link key={item.href} href={item.href} style={{
                display: "block", padding: "44px 36px",
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(180,147,60,0.08)",
                textDecoration: "none", color: "inherit",
                transition: "all 0.35s ease",
                position: "relative", overflow: "hidden",
              }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(180,147,60,0.05)";
                  (e.currentTarget as HTMLElement).style.borderColor = `${item.color}35`;
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.02)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(180,147,60,0.08)";
                  (e.currentTarget as HTMLElement).style.transform = "none";
                }}
              >
                <div style={{ fontSize: 32, marginBottom: 14 }}>{item.icon}</div>
                <h3 style={{ fontFamily: "Georgia, serif", fontSize: 21, fontWeight: 400, color: "#f0ede6", marginBottom: 10 }}>{item.label}</h3>
                <p style={{ fontSize: 13, color: "rgba(240,237,230,0.4)", lineHeight: 1.7 }}>{item.desc}</p>
                <div style={{ position: "absolute", bottom: 24, right: 24, fontSize: 18, color: item.color, opacity: 0.5 }}>→</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section style={{ position: "relative", padding: "140px 48px", textAlign: "center", overflow: "hidden", borderTop: "1px solid rgba(180,147,60,0.1)" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${PHOTOS.vila})`, backgroundSize: "cover", backgroundPosition: "center", opacity: 0.1 }} />
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, rgba(21,128,61,0.12) 0%, transparent 70%)" }} />
        <div style={{ position: "relative" }}>
          <p style={{ fontSize: 10, letterSpacing: "0.5em", textTransform: "uppercase", color: "#b4933c", marginBottom: 24 }}>Pronto para explorar?</p>
          <h2 style={{
            fontFamily: "Georgia, serif", fontSize: "clamp(44px, 8vw, 96px)", fontWeight: 300,
            lineHeight: 1, letterSpacing: "-0.02em", marginBottom: 28,
            background: "linear-gradient(135deg, #f0ede6 0%, #b4933c 50%, #f0ede6 100%)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
          }}>
            Descubra o melhor<br />de Montalegre
          </h2>
          <p style={{ color: "rgba(240,237,230,0.35)", marginBottom: 48, fontSize: 15 }}>Restaurantes, atrações, alojamentos — tudo num guia interativo em tempo real</p>
          <Link href="/guide" style={{
            display: "inline-flex", alignItems: "center", gap: 12,
            background: "#b4933c", color: "#050d07",
            padding: "20px 52px", textDecoration: "none",
            fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", fontWeight: 700,
            transition: "all 0.3s ease",
          }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = "#d4b06a")}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = "#b4933c")}
          >Abrir o Guia Interativo →</Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: "1px solid rgba(180,147,60,0.08)", padding: "28px 48px", display: "flex", alignItems: "center", justifyContent: "space-between", background: "#040a05" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <svg width="14" height="14" viewBox="0 0 22 22">
            <polygon points="11,2 20,20 2,20" fill="none" stroke="#b4933c" strokeWidth="1.5" strokeLinejoin="round" opacity="0.4"/>
          </svg>
          <span style={{ fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(240,237,230,0.2)" }}>Montalegre · Terra de Barroso · Norte de Portugal</span>
        </div>
        <div style={{ display: "flex", gap: 24 }}>
          {[{ label: "História", href: "/historia" }, { label: "Eventos", href: "/eventos" }, { label: "Galeria", href: "/galeria" }, { label: "Guia", href: "/guide" }].map(item => (
            <Link key={item.href} href={item.href} style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(240,237,230,0.2)", textDecoration: "none", transition: "color 0.3s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#b4933c")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(240,237,230,0.2)")}
            >{item.label}</Link>
          ))}
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
