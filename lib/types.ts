// ============================================================
// Shared TypeScript Types for Montalegre Guide
// ============================================================

export type CategoryKey =
  | "restaurants"
  | "attractions"
  | "tourist_spots"
  | "services"
  | "accommodations";

export interface Category {
  key: CategoryKey;
  label: string;
  icon: string;
  googleTypes: string[];
  color: string;
  accentColor: string;
}

export interface PlacePhoto {
  photoReference: string;
  width: number;
  height: number;
  // Resolved URL (computed server-side)
  url?: string;
}

export interface PlaceResult {
  placeId: string;
  name: string;
  address: string;
  lat: number;
  lng: number;
  rating?: number;
  totalRatings?: number;
  types: string[];
  photos: PlacePhoto[];
  openNow?: boolean;
  priceLevel?: number;
  website?: string;
  phoneNumber?: string;
  categoryKey: CategoryKey;
}

export interface PlacesApiResponse {
  places: PlaceResult[];
  error?: string;
}

export interface MapBounds {
  north: number;
  south: number;
  east: number;
  west: number;
}

// Montalegre center coordinates
export const MONTALEGRE_CENTER = {
  lat: 41.8237,
  lng: -7.7975,
};

export const MONTALEGRE_ZOOM = 14;
