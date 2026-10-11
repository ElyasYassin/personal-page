# Elyas Larfi — personal site

Next.js (App Router) · TypeScript · Tailwind CSS v4.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build
```

## Adding photographs

Every image slot shows a contour-map placeholder that prints the exact path
it expects. To fill it, drop a file at that path. The real photo replaces the
placeholder automatically after a restart or rebuild.

| Slot | Path | Edit in |
| --- | --- | --- |
| Hero | `public/images/hero.jpg` | `data/home.ts` |
| Section cards | `public/images/sections/{research,projects,writing,photography,about}.jpg` | `data/sections.ts` |
| Archive strip | `public/images/archive/01.jpg` … | `data/photos.ts` |

In `data/photos.ts`, set `aspect` to the photo's real ratio (`3/2`, `2/3`, `1`…)
and only fill in `date` / `location` / `elevation` / `camera` / `lens` with real
information. The hero photo is full-bleed behind the headline: a wide
landscape works best.

`public/textures/terrain.svg` is a generated contour map (ocean depth →
coastline → peaks) used as a mask throughout the site.

## Structure

```
app/            routes (/, /research, /projects, /writing, /photography, /about)
components/     Header, Hero, EditorialCard, PhotoStrip, FilmFrame, Photo, Marks…
data/           all copy and image paths — edit content here, not in components
lib/            shared types and helpers
public/images/  your photographs
```
