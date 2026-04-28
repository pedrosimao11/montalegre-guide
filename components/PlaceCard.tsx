"use client";
// ============================================================
// PlaceCard — compact card for the places panel
// ============================================================
import Image from "next/image";
import { Star, MapPin, Clock, ExternalLink } from "lucide-react";
import { PlaceResult } from "@/lib/types";
import { getCategoryByKey } from "@/lib/categories";

interface PlaceCardProps {
  place: PlaceResult;
  isSelected: boolean;
  onSelect: (place: PlaceResult) => void;
  onHover: (id: string | null) => void;
  index: number;
}

export function PlaceCard({
  place,
  isSelected,
  onSelect,
  onHover,
  index,
}: PlaceCardProps) {
  const category = getCategoryByKey(place.categoryKey);
  const photo = place.photos[0];

  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${place.lat},${place.lng}&destination_place_id=${place.placeId}`;

  return (
    <div
      className="group rounded-2xl overflow-hidden cursor-pointer transition-smooth"
      style={{
        backgroundColor: isSelected
          ? "var(--color-bg-secondary)"
          : "var(--color-surface)",
        border: `1px solid ${
          isSelected ? category?.accentColor + "40" : "var(--color-border)"
        }`,
        boxShadow: isSelected ? `0 0 0 2px ${category?.accentColor}20` : "none",
        animationDelay: `${index * 40}ms`,
      }}
      onClick={() => onSelect(place)}
      onMouseEnter={() => onHover(place.placeId)}
      onMouseLeave={() => onHover(null)}
    >
      <div className="flex gap-3 p-3">
        {/* Thumbnail */}
        <div
          className="w-16 h-16 rounded-xl overflow-hidden shrink-0 flex items-center justify-center text-2xl"
          style={{ backgroundColor: `${category?.accentColor}15` }}
        >
          {photo?.url ? (
            <div className="relative w-full h-full">
              <Image
                src={photo.url}
                alt={place.name}
                fill
                className="object-cover"
                sizes="64px"
                unoptimized // Photos API redirects — skip Next.js optimization
              />
            </div>
          ) : (
            <span>{category?.icon}</span>
          )}
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <h3
            className="font-medium text-sm leading-snug truncate"
            style={{ color: "var(--color-text-primary)" }}
          >
            {place.name}
          </h3>

          {/* Rating */}
          {place.rating && (
            <div className="flex items-center gap-1 mt-1">
              <div className="flex">
                {renderStars(place.rating)}
              </div>
              <span
                className="text-xs font-medium"
                style={{ color: "var(--color-text-primary)" }}
              >
                {place.rating.toFixed(1)}
              </span>
              {place.totalRatings && (
                <span
                  className="text-xs"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  ({place.totalRatings.toLocaleString("pt-PT")})
                </span>
              )}
            </div>
          )}

          {/* Address */}
          <div className="flex items-start gap-1 mt-1">
            <MapPin
              className="w-3 h-3 mt-0.5 shrink-0"
              style={{ color: "var(--color-text-muted)" }}
            />
            <p
              className="text-xs line-clamp-1"
              style={{ color: "var(--color-text-muted)" }}
            >
              {place.address}
            </p>
          </div>

          {/* Open now badge */}
          {typeof place.openNow === "boolean" && (
            <div className="flex items-center gap-1 mt-1">
              <Clock className="w-3 h-3" style={{ color: place.openNow ? "#22c55e" : "#ef4444" }} />
              <span
                className="text-xs font-medium"
                style={{ color: place.openNow ? "#22c55e" : "#ef4444" }}
              >
                {place.openNow ? "Aberto" : "Fechado"}
              </span>
            </div>
          )}
        </div>

        {/* Directions button */}
        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="self-start opacity-0 group-hover:opacity-100 transition-smooth p-1.5 rounded-lg"
          style={{
            backgroundColor: "var(--color-bg-secondary)",
            color: "var(--color-text-muted)",
          }}
          title="Ver direções"
        >
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}

function renderStars(rating: number) {
  return Array.from({ length: 5 }).map((_, i) => {
    const filled = i < Math.floor(rating);
    const partial = !filled && i < rating;
    return (
      <svg
        key={i}
        className="w-3 h-3"
        viewBox="0 0 20 20"
        fill={filled ? "#f59e0b" : partial ? "url(#half)" : "none"}
        stroke={filled || partial ? "#f59e0b" : "#d6d3d1"}
        strokeWidth="1.5"
      >
        <defs>
          <linearGradient id="half" x1="0" x2="1" y1="0" y2="0">
            <stop offset="50%" stopColor="#f59e0b" />
            <stop offset="50%" stopColor="transparent" />
          </linearGradient>
        </defs>
        <polygon points="10,2 12.4,7.3 18,7.6 14,11.5 15.3,17 10,14 4.7,17 6,11.5 2,7.6 7.6,7.3" />
      </svg>
    );
  });
}
