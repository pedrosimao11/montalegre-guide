"use client";
// ============================================================
// PlaceCardSkeleton — loading placeholder
// ============================================================
export function PlaceCardSkeleton() {
  return (
    <div
      className="rounded-2xl overflow-hidden p-3"
      style={{
        backgroundColor: "var(--color-surface)",
        border: "1px solid var(--color-border)",
      }}
    >
      <div className="flex gap-3">
        {/* Thumbnail skeleton */}
        <div className="w-16 h-16 rounded-xl skeleton shrink-0" />

        {/* Text skeletons */}
        <div className="flex-1 space-y-2 pt-1">
          <div className="h-4 w-3/4 rounded skeleton" />
          <div className="h-3 w-1/2 rounded skeleton" />
          <div className="h-3 w-2/3 rounded skeleton" />
        </div>
      </div>
    </div>
  );
}
