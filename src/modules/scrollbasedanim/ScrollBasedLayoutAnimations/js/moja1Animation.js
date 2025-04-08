import { preloadImages } from "./utils.js";

export function initMoja1Animation() {
  // Debug GSAP availability first
  if (!window.gsap) {
    console.error("GSAP not loaded");
    return;
  }

  // Register GSAP plugins
  gsap.registerPlugin(ScrollTrigger, Flip);

  let lenis;

  const initSmoothScrolling = () => {
    lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
    });

    lenis.on("scroll", () => ScrollTrigger.update());

    const scrollFn = (time) => {
      lenis.raf(time);
      requestAnimationFrame(scrollFn);
    };
    requestAnimationFrame(scrollFn);
  };

  const triggerFlipOnScroll = (galleryEl) => {
    const settings = {
      flip: {
        absoluteOnLeave: false,
        absolute: false,
        scale: true,
        simple: true,
      },
      scrollTrigger: {
        start: "center center",
        end: "+=50%",
      },
      stagger: 0,
    };

    const galleryCaption = galleryEl.querySelector(".caption");
    const galleryItems = galleryEl.querySelectorAll(".gallery__item");

    // Get initial state
    galleryEl.classList.add("gallery--switch");
    const flipstate = Flip.getState([galleryItems, galleryCaption], {
      props: "filter, opacity",
    });
    galleryEl.classList.remove("gallery--switch");

    // Create animation
    Flip.to(flipstate, {
      ease: "none",
      absoluteOnLeave: settings.flip.absoluteOnLeave,
      absolute: settings.flip.absolute,
      scale: settings.flip.scale,
      simple: settings.flip.simple,
      scrollTrigger: {
        trigger: galleryEl,
        start: settings.scrollTrigger.start,
        end: settings.scrollTrigger.end,
        pin: galleryEl.parentNode,
        scrub: true,
      },
      stagger: settings.stagger,
    });
  };

  // Initialize MOJA1 gallery
  const initMoja1Gallery = () => {
    const moja1Gallery = document.querySelector("#gallery-4");
    const moja1Container = document.querySelector(".MOJA1");

    if (!moja1Container) {
      console.error("MOJA1 container not found");
      return;
    }

    if (moja1Gallery) {
      triggerFlipOnScroll(moja1Gallery);
    } else {
      console.error("MOJA1 gallery not found");
    }
  };

  // Initialize immediately without waiting
  initSmoothScrolling();
  initMoja1Gallery();
  document.body.classList.remove("loading");
}
