"use client";
// ============================================================
// GuideApp — Root client component, orchestrates all state
// ============================================================
import { useState, useCallback } from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { MapView } from "./MapView";
import { PlacesPanel } from "./PlacesPanel";
import { PlaceDetailModal } from "./PlaceDetailModal";
import { usePlaces } from "@/hooks/usePlaces";
import { CategoryKey, PlaceResult } from "@/lib/types";
import { CATEGORIES } from "@/lib/categories";
import { SearchBar } from "./SearchBar";

export function GuideApp() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>(
    CATEGORIES[0].key
  );
  const [selectedPlace, setSelectedPlace] = useState<PlaceResult | null>(null);
  const [hoveredPlaceId, setHoveredPlaceId] = useState<string | null>(null);
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const [minRating, setMinRating] = useState<number>(0);
  const [panelOpen, setPanelOpen] = useState(true);

  // Fetch places whenever category or keyword changes
  const { places, loading, error } = usePlaces(activeCategory, searchKeyword);

  // Filter by rating
  const filteredPlaces = places.filter((p) =>
    minRating === 0 ? true : (p.rating ?? 0) >= minRating
  );

  const handleSelectPlace = useCallback((place: PlaceResult | null) => {
    setSelectedPlace(place);
  }, []);

  const handleCategoryChange = useCallback((key: CategoryKey) => {
    setActiveCategory(key);
    setSelectedPlace(null);
    setSearchKeyword("");
    setMinRating(0);
  }, []);

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-bg">
      {/* ── Top header ── */}
      <Header
        onTogglePanel={() => setPanelOpen((v) => !v)}
        panelOpen={panelOpen}
      />

      {/* ── Main layout ── */}
      <div className="flex flex-1 overflow-hidden relative">
        {/* ── Category sidebar (desktop) ── */}
        <Sidebar
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
        />

        {/* ── Map area ── */}
        <div className="flex-1 relative overflow-hidden">
          {/* Search + filter bar overlaid on map */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 w-full max-w-md px-4">
            <SearchBar
              value={searchKeyword}
              onChange={setSearchKeyword}
              minRating={minRating}
              onRatingChange={setMinRating}
            />
          </div>

          <MapView
            places={filteredPlaces}
            activeCategory={activeCategory}
            selectedPlace={selectedPlace}
            hoveredPlaceId={hoveredPlaceId}
            onSelectPlace={handleSelectPlace}
            loading={loading}
          />
        </div>

        {/* ── Places panel (right side) ── */}
        <PlacesPanel
          open={panelOpen}
          places={filteredPlaces}
          loading={loading}
          error={error}
          activeCategory={activeCategory}
          selectedPlace={selectedPlace}
          onSelectPlace={handleSelectPlace}
          onHoverPlace={setHoveredPlaceId}
        />
      </div>

      {/* ── Mobile category bar ── */}
      <div className="lg:hidden flex overflow-x-auto gap-2 p-3 bg-surface border-t border-base shrink-0">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.key}
            onClick={() => handleCategoryChange(cat.key)}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-smooth border ${
              activeCategory === cat.key
                ? "text-white border-transparent"
                : "bg-bg-secondary border-base text-secondary"
            }`}
            style={
              activeCategory === cat.key
                ? { backgroundColor: cat.accentColor, borderColor: cat.accentColor }
                : {}
            }
          >
            <span>{cat.icon}</span>
            <span>{cat.label}</span>
          </button>
        ))}
      </div>

      {/* ── Place detail modal (mobile) ── */}
      {selectedPlace && (
        <PlaceDetailModal
          place={selectedPlace}
          onClose={() => setSelectedPlace(null)}
        />
      )}
    </div>
  );
}
