"use client";
// ============================================================
// PlacesPanel — scrollable list of place cards on the right
// ============================================================
import { PlaceResult, CategoryKey } from "@/lib/types";
import { PlaceCard } from "./PlaceCard";
import { PlaceCardSkeleton } from "./PlaceCardSkeleton";
import { getCategoryByKey } from "@/lib/categories";
import { AlertCircle, MapPin } from "lucide-react";

interface PlacesPanelProps {
  open: boolean;
  places: PlaceResult[];
  loading: boolean;
  error: string | null;
  activeCategory: CategoryKey;
  selectedPlace: PlaceResult | null;
  onSelectPlace: (place: PlaceResult | null) => void;
  onHoverPlace: (id: string | null) => void;
}

export function PlacesPanel({
  open,
  places,
  loading,
  error,
  activeCategory,
  selectedPlace,
  onSelectPlace,
  onHoverPlace,
}: PlacesPanelProps) {
  const category = getCategoryByKey(activeCategory);

  return (
    <aside
      className={`
        hidden lg:flex flex-col shrink-0 border-l overflow-hidden
        transition-all duration-300 ease-in-out
        ${open ? "w-[360px] xl:w-[400px]" : "w-0 border-l-0"}
      `}
      style={{
        backgroundColor: "var(--color-surface)",
        borderColor: "var(--color-border)",
      }}
    >
      {open && (
        <>
          {/* Panel header */}
          <div
            className="px-4 py-3.5 border-b shrink-0"
            style={{ borderColor: "var(--color-border)" }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xl">{category?.icon}</span>
                <div>
                  <h2
                    className="font-display text-base leading-tight"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    {category?.label}
                  </h2>
                  <p
                    className="text-xs"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {loading
                      ? "A carregar..."
                      : `${places.length} resultado${places.length !== 1 ? "s" : ""}`}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Scrollable list */}
          <div className="flex-1 overflow-y-auto px-3 py-3 space-y-2">
            {/* Error state */}
            {error && !loading && (
              <div
                className="flex items-start gap-3 p-4 rounded-xl text-sm"
                style={{
                  backgroundColor: "rgba(239,68,68,0.08)",
                  border: "1px solid rgba(239,68,68,0.2)",
                  color: "#ef4444",
                }}
              >
                <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium">Erro ao carregar</p>
                  <p className="text-xs mt-0.5 opacity-80">{error}</p>
                </div>
              </div>
            )}

            {/* Loading skeletons */}
            {loading &&
              Array.from({ length: 5 }).map((_, i) => (
                <PlaceCardSkeleton key={i} />
              ))}

            {/* Empty state */}
            {!loading && !error && places.length === 0 && (
              <div className="flex flex-col items-center justify-center py-16 gap-3">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "var(--color-bg-secondary)" }}
                >
                  <MapPin
                    className="w-5 h-5"
                    style={{ color: "var(--color-text-muted)" }}
                  />
                </div>
                <p
                  className="text-sm text-center"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  Nenhum local encontrado
                  <br />
                  para esta categoria.
                </p>
              </div>
            )}

            {/* Place cards */}
            {!loading &&
              !error &&
              places.map((place, i) => (
                <PlaceCard
                  key={place.placeId}
                  place={place}
                  isSelected={selectedPlace?.placeId === place.placeId}
                  onSelect={onSelectPlace}
                  onHover={onHoverPlace}
                  index={i}
                />
              ))}
          </div>
        </>
      )}
    </aside>
  );
}
