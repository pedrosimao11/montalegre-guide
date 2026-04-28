"use client";
// ============================================================
// Header — branding, dark mode toggle, panel toggle
// ============================================================
import { useTheme } from "./ThemeProvider";
import { Moon, Sun, PanelRight, PanelRightClose, MapPin } from "lucide-react";

interface HeaderProps {
  onTogglePanel: () => void;
  panelOpen: boolean;
}

export function Header({ onTogglePanel, panelOpen }: HeaderProps) {
  const { theme, toggle } = useTheme();

  return (
    <header
      className="h-16 flex items-center justify-between px-4 md:px-6 border-b shrink-0 z-30"
      style={{
        backgroundColor: "var(--color-surface)",
        borderColor: "var(--color-border)",
        boxShadow: "var(--shadow-sm)",
      }}
    >
      {/* ── Brand ── */}
      <div className="flex items-center gap-2.5">
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center"
          style={{ backgroundColor: "var(--color-accent)" }}
        >
          <MapPin className="w-4 h-4 text-white" strokeWidth={2.5} />
        </div>
        <div>
          <h1
            className="font-display text-lg leading-none tracking-tight"
            style={{ color: "var(--color-text-primary)" }}
          >
            Montalegre
          </h1>
          <p
            className="text-xs leading-none mt-0.5"
            style={{ color: "var(--color-text-muted)" }}
          >
            Guia Local · Portugal
          </p>
        </div>
      </div>

      {/* ── Actions ── */}
      <div className="flex items-center gap-2">
        {/* Dark mode toggle */}
        <button
          onClick={toggle}
          aria-label="Toggle dark mode"
          className="w-9 h-9 rounded-lg flex items-center justify-center transition-smooth"
          style={{
            backgroundColor: "var(--color-bg-secondary)",
            color: "var(--color-text-secondary)",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor =
              "var(--color-border)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor =
              "var(--color-bg-secondary)";
          }}
        >
          {theme === "dark" ? (
            <Sun className="w-4 h-4" />
          ) : (
            <Moon className="w-4 h-4" />
          )}
        </button>

        {/* Panel toggle (hidden on small screens where panel is always at bottom) */}
        <button
          onClick={onTogglePanel}
          aria-label="Toggle places panel"
          className="hidden lg:flex w-9 h-9 rounded-lg items-center justify-center transition-smooth"
          style={{
            backgroundColor: "var(--color-bg-secondary)",
            color: "var(--color-text-secondary)",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor =
              "var(--color-border)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor =
              "var(--color-bg-secondary)";
          }}
        >
          {panelOpen ? (
            <PanelRightClose className="w-4 h-4" />
          ) : (
            <PanelRight className="w-4 h-4" />
          )}
        </button>
      </div>
    </header>
  );
}
