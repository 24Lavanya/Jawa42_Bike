import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Scene, { state } from "./Components/Scene";
import Footer from "./Components/Footer";
import Road from "./Components/Road";
import FeatureSection from "./Components/FeatureSection";
import LandingSection from "./Components/LandingSection";
import Nav from "./Components/Nav";
import Loader from "./Components/Loader";

gsap.registerPlugin(ScrollTrigger);

const RIGHT = 0.03 + Math.PI;
const TURN = Math.PI * 2;

const POSE = {
  desktop: {
    start: { x: 0.06, y: -0.05, s: 1.5 },
    feat: { x: -0.25, y: -0.02, s: 1.15 },
    ride: { x: -0.18, y: -0.04, s: 1.2 },
    end: { x: 0, y: -0.05, s: 1.5 },
  },
  tablet: {
    start: { x: 0, y: -0.2, s: 2.1 },
    feat: { x: 0, y: 0.4, s: 1.9 },
    ride: { x: 0, y: 0.12, s: 1.9 },
    end: { x: 0, y: -0.1, s: 1.6 },
  },
  mobile: {
    start: { x: 0, y: -0.3, s: 2.5 },
    feat: { x: 0, y: 0.35, s: 2.5 },
    ride: { x: 0, y: 0, s: 1.9 },
    end: { x: 0, y: -0.1, s: 2 },
  },
};
export default function App() {
  const root = useRef();
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(
        {
          desktop: "(min-width: 1024px)",
          tablet: "(min-width: 768px) and (max-width: 1023px)",
          mobile: "(max-width: 767px)",
        },
        (ctx) => {
          const { desktop, tablet } = ctx.conditions;
          const v = desktop ? POSE.desktop : tablet ? POSE.tablet : POSE.mobile;
          Object.assign(state, { ...v.start, ry: 0.55, bob: 0 });

          const tl = gsap.timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
              trigger: root.current,
              start: "top top",
              end: "bottom bottom",
              scrub: 1,
            },
          });

          // Hero 
          tl.to(".hero-copy", { y: -120, opacity: 0, duration: 0.8 }, 0)
            .to(".hl1", { yPercent: 12, duration: 1 }, 0)
            .to(state, { ...v.feat, ry: RIGHT, duration: 1 }, 0);

          // Features 
          tl.fromTo(
            ".feature-progress",
            { scaleX: 0 },
            { scaleX: 1, duration: 4 },
            1,
          ).to(state, { ry: RIGHT + TURN, duration: 4 }, 1);
          gsap.utils.toArray(".feat").forEach((el, i) => {
            const t = 1 + i * 0.8;
            tl.fromTo(
              el,
              { opacity: 0, y: 40 },
              { opacity: 1, y: 0, duration: 0.25 },
              t + 0.05,
            ).to(el, { opacity: 0, y: -40, duration: 0.25 }, t + 0.7);
          });

          // Ride 
          tl.to(state, { ...v.ride, duration: 1 }, 5)
            .to(state, { bob: 1, duration: 0.5 }, 6)
            .to(".rl1", { x: "-60vw", duration: 3 }, 6)
            .to(".rl2", { x: "-120vw", duration: 3 }, 6)
            .to(".rl3", { x: "-200vw", duration: 3 }, 6)
            .to(".road", { backgroundPositionX: "-1600px", duration: 3 }, 6)
            .to(".gold", { opacity: 1, duration: 1.5 }, 6)
            .to(".dusk", { opacity: 1, duration: 1.5 }, 7.5)
            .fromTo(
              ".route",
              { strokeDashoffset: 1 },
              { strokeDashoffset: 0, duration: 3 },
              6,
            );
          const alt = { v: 0 };
          tl.to(
            alt,
            {
              v: 3200,
              duration: 3,
              onUpdate: () => {
                root.current.querySelector(".alt").textContent = Math.round(
                  alt.v,
                );
              },
            },
            6,
          );
          gsap.utils.toArray(".beat").forEach((el, i) => {
            const t = 6 + i;
            tl.fromTo(
              el,
              { opacity: 0, y: 30 },
              { opacity: 1, y: 0, duration: 0.25 },
              t + 0.05,
            ).to(el, { opacity: 0, y: -30, duration: 0.25 }, t + 0.7);
          });

          // Outro 
          tl.to(
            state,
            { ...v.end, ry: TURN / 3 + 0.2, bob: 0, duration: 1 },
            9,
          );
        },
      );
      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <div ref={root} className="relative text-neutral-900">
      <Loader />
      <Scene />
      <Nav />
      <LandingSection />
      <FeatureSection />
      <Road />
      <Footer />
    </div>
  );
}
