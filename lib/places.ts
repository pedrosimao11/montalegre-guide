// ============================================================
// Server-side Google Places API helper
// Runs in Next.js API Routes — API key is never exposed to client
// ============================================================
import { CategoryKey, PlaceResult, MONTALEGRE_CENTER } from "./types";
import { getCategoryByKey } from "./categories";

const PLACES_BASE_URL = "https://maps.googleapis.com/maps/api/place";
const API_KEY = process.env.GOOGLE_MAPS_API_KEY!;
const SEARCH_RADIUS = 5000; // 5 km around Montalegre

// In-memory cache to avoid hammering the API during dev
const cache = new Map<string, { data: PlaceResult[]; ts: number }>();
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

/**
 * Fetch places for a given category from Google Places Nearby Search.
 */
export async function fetchPlacesByCategory(
  categoryKey: CategoryKey,
  keyword?: string
): Promise<PlaceResult[]> {
  const cacheKey = `${categoryKey}:${keyword ?? ""}`;
  const cached = cache.get(cacheKey);
  if (cached && Date.now() - cached.ts < CACHE_TTL) {
    return cached.data;
  }

  const category = getCategoryByKey(categoryKey);
  if (!category) throw new Error(`Unknown category: ${categoryKey}`);

  // Use the first type as the primary type for the nearby search
  const primaryType = category.googleTypes[0];

  const params = new URLSearchParams({
    location: `${MONTALEGRE_CENTER.lat},${MONTALEGRE_CENTER.lng}`,
    radius: String(SEARCH_RADIUS),
    type: primaryType,
    key: API_KEY,
    language: "pt-PT",
    ...(keyword ? { keyword } : {}),
  });

  const url = `${PLACES_BASE_URL}/nearbysearch/json?${params}`;
  const response = await fetch(url, { next: { revalidate: 300 } }); // ISR-style revalidation

  if (!response.ok) {
    throw new Error(`Places API error: ${response.statusText}`);
  }

  const data = await response.json();

  if (data.status !== "OK" && data.status !== "ZERO_RESULTS") {
    throw new Error(`Places API returned status: ${data.status}`);
  }

  const places: PlaceResult[] = (data.results || []).map(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (r: any): PlaceResult => ({
      placeId: r.place_id,
      name: r.name,
      address: r.vicinity || r.formatted_address || "",
      lat: r.geometry.location.lat,
      lng: r.geometry.location.lng,
      rating: r.rating,
      totalRatings: r.user_ratings_total,
      types: r.types || [],
      photos: (r.photos || []).slice(0, 3).map(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (p: any) => ({
          photoReference: p.photo_reference,
          width: p.width,
          height: p.height,
          url: buildPhotoUrl(p.photo_reference, 600),
        })
      ),
      openNow: r.opening_hours?.open_now,
      priceLevel: r.price_level,
      categoryKey,
    })
  );

  cache.set(cacheKey, { data: places, ts: Date.now() });
  return places;
}

/**
 * Build a signed Google Places Photo URL.
 * Resolved server-side so the API key is never in client JS.
 */
export function buildPhotoUrl(photoReference: string, maxWidth = 400): string {
  const params = new URLSearchParams({
    maxwidth: String(maxWidth),
    photo_reference: photoReference,
    key: API_KEY,
  });
  return `${PLACES_BASE_URL}/photo?${params}`;
}
