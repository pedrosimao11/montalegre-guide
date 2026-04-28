"use client";
// ============================================================
// usePlaces — fetches places from our secure /api/places route
// Memoizes by category + keyword to avoid redundant requests
// ============================================================
import { useState, useEffect, useRef } from "react";
import { CategoryKey, PlaceResult, PlacesApiResponse } from "@/lib/types";

interface UsePlacesResult {
  places: PlaceResult[];
  loading: boolean;
  error: string | null;
}

// Module-level cache (lives for the duration of the page session)
const sessionCache = new Map<string, PlaceResult[]>();

export function usePlaces(
  category: CategoryKey,
  keyword: string = ""
): UsePlacesResult {
  const [places, setPlaces] = useState<PlaceResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Debounce keyword to avoid firing on every keystroke
  const [debouncedKeyword, setDebouncedKeyword] = useState(keyword);
  useEffect(() => {
    const t = setTimeout(() => setDebouncedKeyword(keyword), 400);
    return () => clearTimeout(t);
  }, [keyword]);

  // Track in-flight request to avoid race conditions
  const controllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    const cacheKey = `${category}:${debouncedKeyword}`;
    const cached = sessionCache.get(cacheKey);

    if (cached) {
      setPlaces(cached);
      setError(null);
      return;
    }

    // Cancel previous in-flight request
    controllerRef.current?.abort();
    const controller = new AbortController();
    controllerRef.current = controller;

    setLoading(true);
    setError(null);

    const params = new URLSearchParams({ category });
    if (debouncedKeyword) params.set("keyword", debouncedKeyword);

    fetch(`/api/places?${params}`, { signal: controller.signal })
      .then<PlacesApiResponse>((r) => r.json())
      .then((data) => {
        if (data.error) throw new Error(data.error);
        sessionCache.set(cacheKey, data.places);
        setPlaces(data.places);
      })
      .catch((err) => {
        if (err.name === "AbortError") return; // Ignore cancelled requests
        setError(err.message || "Erro desconhecido");
        setPlaces([]);
      })
      .finally(() => {
        setLoading(false);
      });

    return () => controller.abort();
  }, [category, debouncedKeyword]);

  return { places, loading, error };
}
