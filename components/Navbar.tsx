"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const CORAL = "#ff6b4a";
const CORAL_LIGHT = "#ff8c6e";

export function Navbar() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navScrolled = scrollY > 80;

  return (
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
      
      {/* Container for links with a class that we can target with global CSS if needed, or just use hidden on mobile via tailwind if available */}
      <div className="nav-links-container" style={{ display: "flex", gap: 28, alignItems: "center" }}>
        {[
          { label: "Início", href: "/" },
          { label: "História", href: "/historia" },
          { label: "Eventos", href: "/eventos" },
          { label: "Galeria", href: "/galeria" },
          { label: "Como Chegar", href: "/como-chegar" },
        ].map(item => (
          <Link key={item.href} href={item.href} style={{
            fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase",
            color: "rgba(240,244,255,0.55)", textDecoration: "none", transition: "color 0.3s",
          }}
            className="nav-link-item"
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

      <style>{`
        @media(max-width:900px){ .nav-links-container{display:none !important;} }
      `}</style>
    </nav>
  );
}
