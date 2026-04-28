"use client";
// ============================================================
// MapView — Google Maps JS SDK integration
// Loads the map, renders markers, handles selection
// ============================================================
import { useEffect, useRef, useCallback } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import { PlaceResult, CategoryKey, MONTALEGRE_CENTER, MONTALEGRE_ZOOM } from "@/lib/types";
import { getCategoryByKey } from "@/lib/categories";
import { LoadingOverlay } from "./LoadingOverlay";

// Singleton loader — avoids re-loading the SDK on re-renders
let loaderPromise: Promise<typeof google> | null = null;

function getLoader() {
  if (!loaderPromise) {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
      version: "weekly",
      libraries: ["places", "geometry"],
    });
    loaderPromise = loader.load();
  }
  return loaderPromise;
}

interface MapViewProps {
  places: PlaceResult[];
  activeCategory: CategoryKey;
  selectedPlace: PlaceResult | null;
  hoveredPlaceId: string | null;
  onSelectPlace: (place: PlaceResult | null) => void;
  loading: boolean;
}

export function MapView({
  places,
  activeCategory,
  selectedPlace,
  hoveredPlaceId,
  onSelectPlace,
  loading,
}: MapViewProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<google.maps.Map | null>(null);
  const markersRef = useRef<Map<string, google.maps.Marker>>(new Map());
  const infoWindowRef = useRef<google.maps.InfoWindow | null>(null);
  const initializedRef = useRef(false);

  // ── Initialize map ──────────────────────────────────────────
  useEffect(() => {
    if (initializedRef.current || !mapRef.current) return;
    initializedRef.current = true;

    getLoader().then(() => {
      if (!mapRef.current) return;

      const isDark = document.documentElement.classList.contains("dark");

      mapInstanceRef.current = new google.maps.Map(mapRef.current, {
        center: MONTALEGRE_CENTER,
        zoom: MONTALEGRE_ZOOM,
        disableDefaultUI: true,
        zoomControl: true,
        zoomControlOptions: {
          position: google.maps.ControlPosition.RIGHT_CENTER,
        },
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
        styles: isDark ? DARK_MAP_STYLES : LIGHT_MAP_STYLES,
        backgroundColor: isDark ? "#12100e" : "#faf9f7",
      });

      infoWindowRef.current = new google.maps.InfoWindow();

      // Close info window when clicking the map background
      mapInstanceRef.current.addListener("click", () => {
        infoWindowRef.current?.close();
        onSelectPlace(null);
      });
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ── Update markers when places change ──────────────────────
  useEffect(() => {
    if (!mapInstanceRef.current) return;

    const category = getCategoryByKey(activeCategory);
    const color = category?.accentColor ?? "#b45309";

    // Clear existing markers
    markersRef.current.forEach((m) => m.setMap(null));
    markersRef.current.clear();

    // Create new markers
    places.forEach((place) => {
      const marker = new google.maps.Marker({
        position: { lat: place.lat, lng: place.lng },
        map: mapInstanceRef.current!,
        title: place.name,
        icon: buildMarkerIcon(color, false),
        animation: google.maps.Animation.DROP,
      });

      marker.addListener("click", () => {
        onSelectPlace(place);
        // Pan map to marker
        mapInstanceRef.current?.panTo({ lat: place.lat, lng: place.lng });
      });

      markersRef.current.set(place.placeId, marker);
    });

    // Fit bounds if places exist
    if (places.length > 0) {
      const bounds = new google.maps.LatLngBounds();
      places.forEach((p) => bounds.extend({ lat: p.lat, lng: p.lng }));
      mapInstanceRef.current.fitBounds(bounds, { top: 80, bottom: 20, left: 20, right: 20 });

      // Don't zoom in too close
      const listener = mapInstanceRef.current.addListener("idle", () => {
        const zoom = mapInstanceRef.current!.getZoom() ?? 14;
        if (zoom > 15) mapInstanceRef.current!.setZoom(15);
        google.maps.event.removeListener(listener);
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [places, activeCategory]);

  // ── Highlight selected marker ───────────────────────────────
  useEffect(() => {
    const category = getCategoryByKey(activeCategory);
    const color = category?.accentColor ?? "#b45309";

    markersRef.current.forEach((marker, placeId) => {
      const isSelected = selectedPlace?.placeId === placeId;
      marker.setIcon(buildMarkerIcon(color, isSelected));
      if (isSelected) marker.setZIndex(999);
    });
  }, [selectedPlace, activeCategory]);

  // ── Highlight hovered marker ────────────────────────────────
  useEffect(() => {
    const category = getCategoryByKey(activeCategory);
    const color = category?.accentColor ?? "#b45309";

    markersRef.current.forEach((marker, placeId) => {
      const isHovered = hoveredPlaceId === placeId;
      const isSelected = selectedPlace?.placeId === placeId;
      if (!isSelected) {
        marker.setIcon(buildMarkerIcon(color, isHovered));
      }
    });
  }, [hoveredPlaceId, selectedPlace, activeCategory]);

  return (
    <div className="relative w-full h-full">
      <div ref={mapRef} id="google-map" className="w-full h-full" />
      {loading && <LoadingOverlay />}
    </div>
  );
}

// ── Marker icon builder ─────────────────────────────────────
function buildMarkerIcon(color: string, isActive: boolean) {
  const size = isActive ? 14 : 10;
  const strokeWidth = isActive ? 3 : 2;
  const outerR = isActive ? 20 : 16;
  const svgW = outerR * 2;
  const svgH = outerR * 2 + (isActive ? 8 : 6);

  // Pin-drop SVG
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${svgW}" height="${svgH}" viewBox="0 0 ${svgW} ${svgH}">
      <circle cx="${outerR}" cy="${outerR}" r="${outerR - 1}"
        fill="${color}" fill-opacity="${isActive ? 1 : 0.85}"
        stroke="white" stroke-width="${strokeWidth}"
        filter="drop-shadow(0 2px 4px rgba(0,0,0,0.4))" />
      <circle cx="${outerR}" cy="${outerR}" r="${size / 2}" fill="white" />
      <line x1="${outerR}" y1="${outerR * 2 - 1}" x2="${outerR}" y2="${svgH}"
        stroke="${color}" stroke-width="2.5" stroke-linecap="round" />
    </svg>
  `.trim();

  return {
    url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`,
    scaledSize: new google.maps.Size(svgW, svgH),
    anchor: new google.maps.Point(outerR, svgH),
  };
}

// ── Map style definitions ───────────────────────────────────
const LIGHT_MAP_STYLES: google.maps.MapTypeStyle[] = [
  { elementType: "geometry", stylers: [{ color: "#f5f0e8" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#f5f0e8" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#5c5248" }] },
  { featureType: "water", elementType: "geometry", stylers: [{ color: "#c9e2f0" }] },
  { featureType: "road", elementType: "geometry", stylers: [{ color: "#ffffff" }] },
  { featureType: "road", elementType: "geometry.stroke", stylers: [{ color: "#e2ddd6" }] },
  { featureType: "road.highway", elementType: "geometry", stylers: [{ color: "#f8d89e" }] },
  { featureType: "road.highway", elementType: "geometry.stroke", stylers: [{ color: "#e8bb6a" }] },
  { featureType: "landscape.natural", elementType: "geometry", stylers: [{ color: "#dde8d0" }] },
  { featureType: "landscape.man_made", elementType: "geometry", stylers: [{ color: "#ede8df" }] },
  { featureType: "poi.park", elementType: "geometry", stylers: [{ color: "#c4dab0" }] },
  { featureType: "transit", stylers: [{ visibility: "simplified" }] },
  { featureType: "administrative", elementType: "geometry.stroke", stylers: [{ color: "#c8c0b4" }] },
  { featureType: "administrative.land_parcel", stylers: [{ visibility: "off" }] },
];

const DARK_MAP_STYLES: google.maps.MapTypeStyle[] = [
  { elementType: "geometry", stylers: [{ color: "#1a1714" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#1a1714" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#b8ad9e" }] },
  { featureType: "water", elementType: "geometry", stylers: [{ color: "#0d2133" }] },
  { featureType: "road", elementType: "geometry", stylers: [{ color: "#2a2520" }] },
  { featureType: "road", elementType: "geometry.stroke", stylers: [{ color: "#332e28" }] },
  { featureType: "road.highway", elementType: "geometry", stylers: [{ color: "#3d2e10" }] },
  { featureType: "road.highway", elementType: "geometry.stroke", stylers: [{ color: "#5a4218" }] },
  { featureType: "landscape.natural", elementType: "geometry", stylers: [{ color: "#16201a" }] },
  { featureType: "landscape.man_made", elementType: "geometry", stylers: [{ color: "#1a1714" }] },
  { featureType: "poi.park", elementType: "geometry", stylers: [{ color: "#162016" }] },
  { featureType: "transit", stylers: [{ visibility: "simplified" }] },
  { featureType: "administrative", elementType: "geometry.stroke", stylers: [{ color: "#4a4238" }] },
  { featureType: "administrative.land_parcel", stylers: [{ visibility: "off" }] },
];
