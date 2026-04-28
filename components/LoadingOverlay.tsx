"use client";
// ============================================================
// LoadingOverlay — semi-transparent overlay on the map while loading
// ============================================================
export function LoadingOverlay() {
  return (
    <div
      className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none animate-fade-in"
      style={{ backgroundColor: "rgba(var(--color-bg), 0.4)", backdropFilter: "blur(2px)" }}
    >
      <div
        className="flex items-center gap-3 px-5 py-3 rounded-2xl shadow-lg"
        style={{
          backgroundColor: "var(--color-surface)",
          border: "1px solid var(--color-border)",
          boxShadow: "var(--shadow-lg)",
        }}
      >
        <div className="flex gap-1">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="w-2 h-2 rounded-full"
              style={{
                backgroundColor: "var(--color-accent)",
                animation: `bounce 0.8s ${i * 0.15}s infinite`,
              }}
            />
          ))}
        </div>
        <p className="text-sm font-medium" style={{ color: "var(--color-text-secondary)" }}>
          A carregar locais...
        </p>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 80%, 100% { transform: scale(0.6); opacity: 0.5; }
          40% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
