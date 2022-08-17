import "../pages/index.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";

gsap.registerPlugin(ScrollTrigger);
let sections = gsap.utils.toArray(".panel");

gsap.to(sections, {
  xPercent: -145* (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".pinck-scroll",
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    // base vertical scrolling on how wide the container is so it feels more natural.
    end: "+=2000",
  }
});