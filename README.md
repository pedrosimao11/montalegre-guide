# 🏔️ Montalegre — Guia Local

A production-ready local guide web application for Montalegre, Portugal.
Built with **Next.js 15 (App Router)**, **Google Maps & Places API**, **Tailwind CSS**, and **TypeScript**.

---

## ✨ Features

- 🗺️ **Google Maps** with custom dark/light styles
- 📍 **Real Places data** from Google Places API (restaurants, attractions, accommodations, etc.)
- 🔒 **Secure API key handling** — key never exposed to client
- 🌗 **Dark / Light mode** with system preference detection
- 🔍 **Search & filter** by keyword and minimum rating
- 📱 **Responsive** — mobile-first design with bottom sheet modals
- ⚡ **Server-side caching** (5 min TTL) to reduce API quota usage
- 🖼️ **Place photos** fetched securely through the server
- 🧭 **Directions** links to Google Maps

---

## 📁 Project Structure

```
montalegre-guide/
├── app/
│   ├── api/
│   │   └── places/
│   │       └── route.ts         # Secure Places API proxy
│   ├── globals.css              # Design tokens, base styles
│   ├── layout.tsx               # Root layout (fonts, metadata)
│   └── page.tsx                 # Home page
├── components/
│   ├── GuideApp.tsx             # Root orchestrator (state, layout)
│   ├── Header.tsx               # Top bar (brand, dark mode toggle)
│   ├── Sidebar.tsx              # Category nav (desktop)
│   ├── MapView.tsx              # Google Maps integration
│   ├── PlacesPanel.tsx          # Right-side places list
│   ├── PlaceCard.tsx            # Individual place card
│   ├── PlaceCardSkeleton.tsx    # Loading skeleton
│   ├── PlaceDetailModal.tsx     # Detail bottom sheet / modal
│   ├── SearchBar.tsx            # Search input + rating filter
│   ├── LoadingOverlay.tsx       # Map loading indicator
│   └── ThemeProvider.tsx        # Dark/light mode context
├── hooks/
│   └── usePlaces.ts             # Data-fetching hook with cache
├── lib/
│   ├── categories.ts            # Category definitions
│   ├── places.ts                # Server-side Places API helper
│   └── types.ts                 # Shared TypeScript types
├── .env.example                 # Environment variable template
├── next.config.js
├── tailwind.config.ts
└── tsconfig.json
```

---

## 🚀 Getting Started

### 1. Prerequisites

- Node.js 18.17+
- A Google Cloud account

### 2. Clone & install

```bash
git clone <your-repo-url>
cd montalegre-guide
npm install
```

### 3. Enable Google APIs

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project (e.g. `montalegre-guide`)
3. Navigate to **APIs & Services → Library** and enable:
   - ✅ **Maps JavaScript API**
   - ✅ **Places API**
   - ✅ **Directions API** *(optional, for richer direction links)*
4. Go to **APIs & Services → Credentials → Create Credentials → API Key**
5. **Restrict your key**:
   - **Application restrictions**: HTTP referrers
     - Development: `http://localhost:3000/*`
     - Production: `https://yourdomain.com/*`
   - **API restrictions**: Select the three APIs above

### 4. Configure environment variables

```bash
cp .env.example .env.local
```

Edit `.env.local`:

```env
# Used in Next.js API Routes (server-side only, never sent to browser)
GOOGLE_MAPS_API_KEY=AIzaSy...your_key_here

# Used to load Maps JS SDK in the browser (can be the same key)
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=AIzaSy...your_key_here
```

> ⚠️ **Security note**: The `GOOGLE_MAPS_API_KEY` (without `NEXT_PUBLIC_`) is only
> accessible on the server. All Places search calls go through `/api/places`
> which means your API key is never bundled into client-side JavaScript.

### 5. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) 🎉

---

## 🏗️ How It Works

### Data Flow

```
Browser                    Next.js Server           Google APIs
  │                              │                       │
  │  GET /api/places             │                       │
  │  ?category=restaurants  ───► │                       │
  │                              │  Places Nearby Search │
  │                              │  (with server API key)│
  │                              │ ────────────────────► │
  │                              │ ◄──────────────────── │
  │  { places: [...] }      ◄─── │                       │
  │                              │                       │
```

1. `usePlaces` hook fires a `GET /api/places?category=X` request
2. `app/api/places/route.ts` calls `lib/places.ts` server-side helper
3. `lib/places.ts` makes a signed request to Google Places Nearby Search
4. Results (including photo URLs) are returned to the client
5. The client renders markers on the map and cards in the panel
6. Results are cached in-memory for 5 minutes (server + client)

### Categories → Google Place Types

| UI Category          | Google Place Types                              |
|----------------------|-------------------------------------------------|
| Restaurantes         | restaurant, cafe, bar, food                     |
| Atrações             | tourist_attraction, museum, art_gallery, church |
| Pontos de Interesse  | point_of_interest, park, natural_feature        |
| Serviços Públicos    | hospital, police, city_hall, pharmacy, bank     |
| Alojamentos          | lodging, hotel, guest_house                     |

---

## 🌍 Deployment (Vercel)

```bash
npm install -g vercel
vercel
```

Or connect your GitHub repo at [vercel.com](https://vercel.com) and set environment variables in the **Vercel project settings**:

- `GOOGLE_MAPS_API_KEY` → your server key
- `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` → your browser key

Remember to update your API key's HTTP referrer restrictions to include your Vercel domain (`https://*.vercel.app/*`).

---

## 🔧 Customization

### Change the city

In `lib/types.ts`, update:

```ts
export const MONTALEGRE_CENTER = {
  lat: 41.8237,
  lng: -7.7975,
};
```

### Add a category

In `lib/categories.ts`, add to the `CATEGORIES` array:

```ts
{
  key: "nightlife",
  label: "Vida Noturna",
  icon: "🎵",
  googleTypes: ["night_club", "bar"],
  color: "bg-pink-500/10 ...",
  accentColor: "#ec4899",
}
```

Don't forget to add `"nightlife"` to the `CategoryKey` union in `lib/types.ts`.

### Adjust search radius

In `lib/places.ts`:

```ts
const SEARCH_RADIUS = 5000; // metres — increase for a larger area
```

---

## 📊 API Quota Considerations

The Places API charges per request. To stay within free tier:

- **Nearby Search**: ~$32 per 1,000 requests
- **Current caching**: 5 min server-side TTL reduces duplicate calls
- **Client cache**: `sessionCache` in `usePlaces.ts` avoids re-fetching within a session

For production, consider upgrading to Redis (e.g. Upstash) for persistent cross-request caching.

---

## 📜 License

MIT — feel free to adapt for any city or use case.
