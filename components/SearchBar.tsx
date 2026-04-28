"use client";
// ============================================================
// SearchBar — keyword search + rating filter overlay on map
// ============================================================
import { useState } from "react";
import { Search, SlidersHorizontal, Star, X } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (v: string) => void;
  minRating: number;
  onRatingChange: (v: number) => void;
}

const RATING_OPTIONS = [0, 3, 3.5, 4, 4.5];

export function SearchBar({
  value,
  onChange,
  minRating,
  onRatingChange,
}: SearchBarProps) {
  const [filtersOpen, setFiltersOpen] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      {/* Search input */}
      <div
        className="flex items-center gap-2 rounded-2xl px-4 py-3 shadow-lg backdrop-blur-sm"
        style={{
          backgroundColor: "var(--color-map-overlay)",
          border: "1px solid var(--color-border)",
          boxShadow: "var(--shadow-lg)",
        }}
      >
        <Search
          className="w-4 h-4 shrink-0"
          style={{ color: "var(--color-text-muted)" }}
        />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Pesquisar locais..."
          className="flex-1 text-sm outline-none bg-transparent min-w-0"
          style={{ color: "var(--color-text-primary)" }}
        />
        {value && (
          <button onClick={() => onChange("")}>
            <X className="w-4 h-4" style={{ color: "var(--color-text-muted)" }} />
          </button>
        )}
        <button
          onClick={() => setFiltersOpen((v) => !v)}
          className="flex items-center gap-1 text-xs font-medium pl-2 border-l"
          style={{
            borderColor: "var(--color-border)",
            color: filtersOpen ? "var(--color-accent)" : "var(--color-text-muted)",
          }}
        >
          <SlidersHorizontal className="w-3.5 h-3.5" />
          <span className="hidden sm:block">Filtros</span>
        </button>
      </div>

      {/* Filters panel */}
      {filtersOpen && (
        <div
          className="rounded-2xl p-4 shadow-lg backdrop-blur-sm animate-slide-up"
          style={{
            backgroundColor: "var(--color-map-overlay)",
            border: "1px solid var(--color-border)",
            boxShadow: "var(--shadow-lg)",
          }}
        >
          <p
            className="text-xs font-medium mb-2.5"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Avaliação mínima
          </p>
          <div className="flex gap-2 flex-wrap">
            {RATING_OPTIONS.map((r) => (
              <button
                key={r}
                onClick={() => onRatingChange(r)}
                className="flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium border transition-smooth"
                style={{
                  backgroundColor:
                    minRating === r
                      ? "var(--color-accent)"
                      : "var(--color-bg-secondary)",
                  borderColor:
                    minRating === r
                      ? "var(--color-accent)"
                      : "var(--color-border)",
                  color: minRating === r ? "#fff" : "var(--color-text-secondary)",
                }}
              >
                {r === 0 ? (
                  "Todas"
                ) : (
                  <>
                    <Star className="w-3 h-3" />
                    {r}+
                  </>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
