// ============================================================
// Category definitions — maps UI categories to Google Place types
// ============================================================
import { Category } from "./types";

export const CATEGORIES: Category[] = [
  {
    key: "restaurants",
    label: "Restaurantes",
    icon: "🍽️",
    googleTypes: ["restaurant", "cafe", "bar", "food"],
    color: "bg-orange-500/10 border-orange-500/30 text-orange-700 dark:text-orange-400",
    accentColor: "#f97316",
  },
  {
    key: "attractions",
    label: "Atrações",
    icon: "🏛️",
    googleTypes: ["tourist_attraction", "museum", "art_gallery", "church"],
    color: "bg-blue-500/10 border-blue-500/30 text-blue-700 dark:text-blue-400",
    accentColor: "#3b82f6",
  },
  {
    key: "tourist_spots",
    label: "Pontos de Interesse",
    icon: "📍",
    googleTypes: ["point_of_interest", "park", "natural_feature", "campground"],
    color: "bg-green-500/10 border-green-500/30 text-green-700 dark:text-green-400",
    accentColor: "#22c55e",
  },
  {
    key: "services",
    label: "Serviços Públicos",
    icon: "🏥",
    googleTypes: ["hospital", "police", "city_hall", "post_office", "pharmacy", "bank"],
    color: "bg-red-500/10 border-red-500/30 text-red-700 dark:text-red-400",
    accentColor: "#ef4444",
  },
  {
    key: "accommodations",
    label: "Alojamentos",
    icon: "🏨",
    googleTypes: ["lodging", "hotel", "guest_house"],
    color: "bg-purple-500/10 border-purple-500/30 text-purple-700 dark:text-purple-400",
    accentColor: "#a855f7",
  },
];

export const getCategoryByKey = (key: string): Category | undefined =>
  CATEGORIES.find((c) => c.key === key);
