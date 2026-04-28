// ============================================================
// API Route: /api/places
// Securely proxies Google Places requests server-side
// ============================================================
import { NextRequest, NextResponse } from "next/server";
import { fetchPlacesByCategory } from "@/lib/places";
import { CategoryKey } from "@/lib/types";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category") as CategoryKey | null;
  const keyword = searchParams.get("keyword") || undefined;

  if (!category) {
    return NextResponse.json(
      { error: "Missing required parameter: category" },
      { status: 400 }
    );
  }

  try {
    const places = await fetchPlacesByCategory(category, keyword);
    return NextResponse.json(
      { places },
      {
        headers: {
          // Cache at edge for 5 minutes
          "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
        },
      }
    );
  } catch (error) {
    console.error("[/api/places] Error:", error);
    return NextResponse.json(
      {
        error: "Failed to fetch places. Check your API key and quota.",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}
