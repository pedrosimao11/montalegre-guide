"use client";
// ============================================================
// Sidebar — desktop category navigation
// ============================================================
import { CategoryKey } from "@/lib/types";
import { CATEGORIES } from "@/lib/categories";

interface SidebarProps {
  activeCategory: CategoryKey;
  onCategoryChange: (key: CategoryKey) => void;
}

export function Sidebar({ activeCategory, onCategoryChange }: SidebarProps) {
  return (
    <aside
      className="hidden lg:flex flex-col w-[72px] xl:w-[220px] shrink-0 border-r py-4 gap-1 overflow-y-auto"
      style={{
        backgroundColor: "var(--color-surface)",
        borderColor: "var(--color-border)",
      }}
    >
      <p
        className="hidden xl:block text-xs font-medium uppercase tracking-widest px-4 mb-2"
        style={{ color: "var(--color-text-muted)" }}
      >
        Categorias
      </p>

      {CATEGORIES.map((cat) => {
        const isActive = activeCategory === cat.key;
        return (
          <button
            key={cat.key}
            onClick={() => onCategoryChange(cat.key)}
            className="group relative flex items-center gap-3 mx-2 px-3 py-3 rounded-xl text-sm font-medium transition-smooth text-left"
            style={{
              backgroundColor: isActive
                ? `${cat.accentColor}18`
                : "transparent",
              color: isActive
                ? cat.accentColor
                : "var(--color-text-secondary)",
            }}
            title={cat.label}
          >
            {/* Active indicator bar */}
            {isActive && (
              <span
                className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 rounded-full"
                style={{ backgroundColor: cat.accentColor }}
              />
            )}

            <span className="text-xl leading-none shrink-0">{cat.icon}</span>
            <span className="hidden xl:block truncate">{cat.label}</span>
          </button>
        );
      })}
    </aside>
  );
}
