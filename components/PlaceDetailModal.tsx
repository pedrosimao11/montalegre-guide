"use client";
// ============================================================
// PlaceDetailModal — full detail view (bottom sheet on mobile)
// ============================================================
import Image from "next/image";
import { useEffect, useState } from "react";
import { X, Star, MapPin, Clock, Phone, Globe, Navigation } from "lucide-react";
import { PlaceResult } from "@/lib/types";
import { getCategoryByKey } from "@/lib/categories";

interface PlaceDetailModalProps {
  place: PlaceResult;
  onClose: () => void;
}

export function PlaceDetailModal({ place, onClose }: PlaceDetailModalProps) {
  const [activePhoto, setActivePhoto] = useState(0);
  const category = getCategoryByKey(place.categoryKey);

  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${place.lat},${place.lng}&destination_place_id=${place.placeId}`;

  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 animate-fade-in"
        style={{ backgroundColor: "rgba(0,0,0,0.5)", backdropFilter: "blur(4px)" }}
      />

      {/* Modal */}
      <div
        className="relative w-full sm:max-w-md rounded-t-3xl sm:rounded-3xl overflow-hidden animate-slide-up"
        style={{
          backgroundColor: "var(--color-surface)",
          boxShadow: "var(--shadow-xl)",
          maxHeight: "85vh",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Photos */}
        {place.photos.length > 0 ? (
          <div className="relative h-52 sm:h-60 overflow-hidden bg-stone-200 dark:bg-stone-800">
            <Image
              src={place.photos[activePhoto].url ?? ""}
              alt={place.name}
              fill
              className="object-cover"
              unoptimized
            />
            {/* Photo dots */}
            {place.photos.length > 1 && (
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                {place.photos.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActivePhoto(i)}
                    className="w-2 h-2 rounded-full transition-smooth"
                    style={{
                      backgroundColor:
                        i === activePhoto ? "#fff" : "rgba(255,255,255,0.5)",
                    }}
                  />
                ))}
              </div>
            )}
            {/* Category badge */}
            <div
              className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium backdrop-blur-sm"
              style={{
                backgroundColor: `${category?.accentColor}cc`,
                color: "#fff",
              }}
            >
              <span>{category?.icon}</span>
              <span>{category?.label}</span>
            </div>
          </div>
        ) : (
          <div
            className="h-24 flex items-center justify-center text-5xl"
            style={{ backgroundColor: `${category?.accentColor}15` }}
          >
            {category?.icon}
          </div>
        )}

        {/* Content */}
        <div className="p-5 overflow-y-auto" style={{ maxHeight: "50vh" }}>
          <div className="flex items-start justify-between gap-3 mb-3">
            <h2
              className="font-display text-xl leading-snug"
              style={{ color: "var(--color-text-primary)" }}
            >
              {place.name}
            </h2>
            <button
              onClick={onClose}
              className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-smooth"
              style={{
                backgroundColor: "var(--color-bg-secondary)",
                color: "var(--color-text-muted)",
              }}
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Rating */}
          {place.rating && (
            <div className="flex items-center gap-2 mb-3">
              <div className="flex items-center gap-1 px-2.5 py-1 rounded-full"
                style={{ backgroundColor: "rgba(245,158,11,0.12)" }}>
                <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                <span className="text-sm font-semibold" style={{ color: "#d97706" }}>
                  {place.rating.toFixed(1)}
                </span>
              </div>
              {place.totalRatings && (
                <span className="text-sm" style={{ color: "var(--color-text-muted)" }}>
                  {place.totalRatings.toLocaleString("pt-PT")} avaliações
                </span>
              )}
              {typeof place.openNow === "boolean" && (
                <span
                  className="text-sm font-medium flex items-center gap-1 ml-auto"
                  style={{ color: place.openNow ? "#22c55e" : "#ef4444" }}
                >
                  <Clock className="w-3.5 h-3.5" />
                  {place.openNow ? "Aberto agora" : "Fechado"}
                </span>
              )}
            </div>
          )}

          {/* Details list */}
          <div className="space-y-2.5">
            {place.address && (
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "var(--color-text-muted)" }} />
                <p className="text-sm" style={{ color: "var(--color-text-secondary)" }}>
                  {place.address}
                </p>
              </div>
            )}
            {place.phoneNumber && (
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 shrink-0" style={{ color: "var(--color-text-muted)" }} />
                <a
                  href={`tel:${place.phoneNumber}`}
                  className="text-sm"
                  style={{ color: "var(--color-accent)" }}
                >
                  {place.phoneNumber}
                </a>
              </div>
            )}
            {place.website && (
              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 shrink-0" style={{ color: "var(--color-text-muted)" }} />
                <a
                  href={place.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm truncate"
                  style={{ color: "var(--color-accent)" }}
                >
                  {place.website.replace(/^https?:\/\//, "")}
                </a>
              </div>
            )}
          </div>

          {/* Directions CTA */}
          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold text-white transition-smooth"
            style={{ backgroundColor: "var(--color-accent)" }}
          >
            <Navigation className="w-4 h-4" />
            Ver Direções no Google Maps
          </a>
        </div>
      </div>
    </div>
  );
}
