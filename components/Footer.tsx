"use client";

import Link from "next/link";

const CORAL = "#ff6b4a";
const BG_MID = "#0d1829";

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

export function Footer() {
  return (
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
  );
}
