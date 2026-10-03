# JAWA42: Scroll Experience

A single-page, scroll-driven website where a 3D motorcycle travels through the page: from a mountain landing section, through a feature showcase, to a ride into the mountains.

## Built with

- **React** + **Vite**: UI and dev tooling
- **Tailwind CSS v4**: styling and responsive layout
- **GSAP** + **ScrollTrigger** (`@gsap/react`): scroll-scrubbed timeline for all motion
- **Three.js** via **react-three-fiber** and **drei**: renders the 3D bike (`.glb` model)

## What's in it

| Section | What happens |
|---|---|
| **Loader** | Dark screen with a 0–100% counter that tracks the model and page assets, then lifts up to reveal the landing |
| **Landing** | Mountain photo with the headline; the bike moves to its feature position as you scroll |
| **Features** | The bike makes a full 360° turn while the features appear one at a time as text, with a progress bar |
| **Ride** | The bike stays in place while three mountain layers and the road move past, the sky shifts from morning to dusk, a route line draws itself and an altitude counter climbs |
| **Footer** | The bike returns to the centre with the call to action |

## How it works

- One GSAP timeline is scrubbed by scroll, with 1 unit = 100vh of scrolling.
- GSAP animates a plain `state` object (position, scale, rotation, bounce). The 3D bike reads it every frame in `Scene.jsx`.
- `gsap.matchMedia()` applies a separate bike pose for mobile, tablet and desktop.

## Project structure

```
public/bike.glb        3D model
src/
  App.jsx              master scroll timeline
  Scene.jsx            3D canvas, lights and bike
  components/          Loader, Nav, LandingSection, FeatureSection, Road, Footer
  utils/               data (features, beats) and helpers (mountain layers)
  assets/              images
```

## Run it

```bash
npm install
npm run dev      # start the dev server
npm run build    # production build
```
