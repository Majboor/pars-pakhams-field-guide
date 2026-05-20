# PARS / PAKHAMS — Field Guide

An immersive, scroll-driven site for the **Pakistan Amateur Radio Society (PARS / PAKHAMS)**:
becoming a Short Wave Listener, applying for a PTA amateur radio licence, the legal terms,
first antenna builds, the member network, and a store.

Built as one continuous WebGL experience — a Yagi antenna hosts a pinned scrollytelling
landing, with dark editorial guide, antenna-wiki, store, and product pages.

## Stack

- Vite + React 19
- Three.js / @react-three/fiber / drei (the Yagi `.glb` model)
- GSAP + ScrollTrigger (scroll choreography)
- Lucide icons

## Develop

```bash
npm install
npm run dev        # Vite dev server
```

## Build & serve

```bash
npm run build      # outputs to dist/
node server.mjs    # tiny static server with SPA fallback (default port 4321)
# PORT=4399 node server.mjs   # custom port
```

## Routes

- `/` — immersive landing experience
- `/guide` — full PARS/PTA licensing guide
- `/antennas` — antenna build wiki
- `/store` and `/store/:productId` — store + product detail
