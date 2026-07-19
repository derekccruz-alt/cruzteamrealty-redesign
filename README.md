# Cruz Team Realty — Redesign

Modern, direct real estate landing page for Derek & Gina Cruz, serving Southwest Riverside County.

## Tech Stack

- **Framework:** Next.js 15 (React 19, Server Components)
- **Styling:** Tailwind v4 + CSS
- **Animation:** Motion (formerly Framer Motion)
- **Fonts:** Geist + Recoleta (Google Fonts)
- **Icons:** Phosphor Icons
- **Deployment:** Cloudflare Pages

## Project Structure

```
app/
├── layout.tsx           # Root layout, font setup
├── page.tsx            # Main landing page
├── globals.css         # Global Tailwind + component styles
└── components/
    ├── Hero.tsx        # Asymmetric split hero
    ├── Services.tsx    # 2-col offset service cards
    ├── Coverage.tsx    # 17-city coverage pills
    ├── Testimonials.tsx # Featured quote + review grid
    ├── ValuationCTA.tsx # Seller valuation CTA
    └── Footer.tsx      # Navigation footer
```

## Design Specifications

- **Palette:** Cream bg, Sage accent, warm Charcoal text (light theme only)
- **Typography:** Recoleta serif (headlines) + Geist sans (body)
- **Motion:** `MOTION_INTENSITY: 5` — scroll-reveal, hover transitions, no GSAP
- **Layout Variance:** `DESIGN_VARIANCE: 7` — asymmetric, structured but bold
- **Density:** `VISUAL_DENSITY: 4` — breathing room for trust

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deployment to Cloudflare Pages

1. Push to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial Cruz Team Realty redesign"
   git remote add origin <your-repo>
   git push -u origin main
   ```

2. Connect to Cloudflare Pages:
   - Log in to Cloudflare Dashboard
   - Pages → Create → Connect Git
   - Select repository
   - Framework: Next.js
   - Deploy

The site will auto-deploy on every push to `main`.

## Content Changes

Update content in component files:
- **Hero copy:** `app/components/Hero.tsx`
- **Services:** `app/components/Services.tsx`
- **Testimonials:** `app/components/Testimonials.tsx`
- **Footer links:** `app/components/Footer.tsx`

Image sources use `picsum.photos` placeholders with seed-based URLs. Replace with real property photos in production.

## Performance Notes

- LCP: Hero image is `priority` — loads immediately
- No GSAP/heavy JS — Motion only, optimized for CLS
- ISR: Page revalidates every hour for SEO freshness
- Dark mode: Disabled per brand direction (light theme only)

## License

Private project. Copyright © 2024 Cruz Team Realty.
