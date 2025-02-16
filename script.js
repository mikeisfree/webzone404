import { createResizeObserver } from "./resizeObserver.js";

gsap.registerPlugin(ScrollTrigger);

function init() {
  const scrollerElements = document.querySelectorAll(".scroller");

  scrollerElements.forEach((scroller) => {
    createResizeObserver(scroller, () => {
      ScrollTrigger.refresh();
    });
  });

  const videoMask = document.querySelector(".video-mask");
  const successText = document.querySelector(".success-text");
  const pipeSymbol = document.querySelector(".pipe-symbol");
  const bottomText = document.querySelector(".bottom-text");
  const heroImage = document.querySelector(".hero-image");
  const videoOverlay = document.querySelector(".video-overlay");
  const body = document.body;
  // const gradientBcg = document.querySelector(".gradient-overlay");
  const cta = document.querySelector(".cta");
  const propertycard = document.querySelector(".scroller");

  // Lenis initialization
  const lenis = new Lenis();
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#video-container",
      start: "top top",
      end: "80% 80%",
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        const rectWidth = gsap.utils.interpolate(100, 15, progress);
        const rectHeight = gsap.utils.interpolate(100, 8, progress);
        const roundness = gsap.utils.interpolate(3, 2, progress); // Controls border radius effect

        videoMask.style.clipPath = `inset(${50 - rectHeight / 2}% ${
          50 - rectWidth / 2
        }% ${50 - rectHeight / 2}% ${
          50 - rectWidth / 2
        }% round ${roundness}rem)`;
      },
    },
  });

  // Pipe symbol animation
  gsap.fromTo(
    pipeSymbol,
    {
      xPercent: 0,
      opacity: 0,
    },
    {
      scrollTrigger: {
        trigger: "#video-container",
        start: "0 top",
        end: "50% top",
        scrub: 1,
      },
      xPercent: 50,
      opacity: 1,
    }
  );

  // Success text animation
  gsap.fromTo(
    successText,
    {
      yPercent: 0,
      opacity: 0,
    },
    {
      scrollTrigger: {
        trigger: "#video-container",
        start: "0 top",
        end: "50% top",
        scrub: 1,
      },
      yPercent: -155,
      opacity: 1,
    }
  );

  // Bottom text animation
  // gsap.from(bottomText, {
  //   scrollTrigger: {
  //     trigger: ".bottom-section",
  //     start: "top center",
  //     toggleActions: "play none none reverse",
  //   },
  //   opacity: 0,
  //   y: -20,
  //   duration: 0.8,
  // });

  // Overlay text dissapear
  gsap.to(videoOverlay, {
    scrollTrigger: {
      trigger: ".sticky-container",
      start: "top top",
      toggleActions: "play none none reverse",
    },
    opacity: 0,
    y: 20,
  });
  // Overlay text dissapear
  gsap.to(cta, {
    scrollTrigger: {
      trigger: ".sticky-container",
      start: "top top",
      toggleActions: "play none none reverse",
    },
    opacity: 0,
    y: 20,
  });

  // Avatar Dissapear
  gsap.to(heroImage, {
    scrollTrigger: {
      trigger: ".sticky-container",
      start: "bottom 40%",
      toggleActions: "play none none reverse",
    },
    opacity: 0,
    y: -200,
    duration: 0.35,
    ease: "power3.inOut",
  }),
    gsap.to(successText, {
      scrollTrigger: {
        trigger: ".sticky-container",
        start: "bottom 40%",
        toggleActions: "play none none reverse",
      },
      scale: 0,
    }),
    gsap.to(pipeSymbol, {
      scrollTrigger: {
        trigger: ".sticky-container",
        start: "bottom 40%",
        toggleActions: "play none none reverse",
      },
      scale: 0,
    });

  // Hero Woman Image Animation
  gsap.to(heroImage, {
    scrollTrigger: {
      trigger: "#video-container",
      start: "center center",
      end: "bottom bottom",
      toggleActions: "play none none reverse",
      markers: false,
    },
    // scrub: 1,
    scale: 0.7,
    ease: "power3.inOut",
  });

  gsap.to(propertycard, {
    scrollTrigger: {
      trigger: ".sticky-container",
      start: "bottom 50%",
      toggleActions: "play none none reverse",
      scrub: 1,
    },
    opacity: 1,
    zIndex: 0,
    yPercent: -15,
    stagger: 0.2,
    overwrite: "auto",
  });

  // Section 3 Dissapear
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".sticky-container",
        start: "bottom 0",
        toggleActions: "play none none reverse",
        markers: true,
      },
    })
    .to([propertycard, ".popular-articles"], {
      y: -200,
      duration: 1,
      stagger: 0.2,
      ease: "power2.inOut", // Added smooth easing
    })
    .to(
      [propertycard, ".popular-articles"],
      {
        opacity: 0,
        duration: 0.8, // Increased duration
        stagger: 0.2,
        ease: "power2.out", // Added smooth easing
      },
      "-=0.5" // Start opacity animation before the y-translation finishes
    ),
    // Section 4 appear

    // gsap.to(".cloneable", {
    //   scrollTrigger: {
    //     trigger: ".sticky-container",
    //     start: "bottom -50%",
    //     toggleActions: "play none none reverse",
    //     scrub: 1,
    //     duration: 1,
    //   },
    //   visibility: "visible",
    //   opacity: 1,
    //   ease: "power3.inOut",
    //   overwrite: "auto",
    // });

    // Outro animations
    gsap.from(".outro-text h2", {
      scrollTrigger: {
        trigger: ".outro-content",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      y: 50,
      opacity: 0,
      duration: 1,
    });

  gsap.from(".outro-text p", {
    scrollTrigger: {
      trigger: ".outro-content",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
    y: 30,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
  });

  gsap.from(".social-links a", {
    scrollTrigger: {
      trigger: ".outro-content",
      start: "top 90%",
      toggleActions: "play none none reverse",
    },
    y: 20,
    duration: 0.6,
    stagger: 0.1,
  });
}

// Run initialization when DOM is ready
document.addEventListener("DOMContentLoaded", init);

// Move this from the bottom of script1.js to your main animation timeline in script.js
const rotationTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".sticky",
    start: "top top",
    end: `+=${window.innerHeight * 5}px`, // Match the main scroll duration
    scrub: 1,
    onUpdate: (self) => {
      const rotation = self.progress * 360;
      gsap.set(".sticky", {
        "--angle": `${rotation}deg`,
      });
    },
  },
});

const width = window.innerWidth;
const height = window.innerHeight - 10;

// Create SVG and set viewbox so that
// we zoom into the point 0,0
const canvas = SVG().addTo(".sticky").size(width, height);

function perspective(i, p) {
  return width / (0.8 * (i - p));
}

const aspect = width / height;
const cx = width / 2;
const cy = height / 2;

canvas.ellipse({ x: cx, y: cy, rx: 2, ry: 2 });

const n = 50;
for (let i = 0; i < n; i++) {
  // Go through the rects
  const width = perspective(i, 0);
  const height = width / aspect;

  // Work out the
  const lastWidth = perspective(i, 1);
  const lastHeight = lastWidth / aspect;

  // Go through the
  const rect = canvas
    .rect({ x: cx - width / 2, y: cy - height / 2, width, height })
    .stroke("#c4471d")
    .fill("none")
    .opacity(0.4 * Math.cos((i / n) * Math.PI));

  rect
    .animate()
    .ease((t) => t)
    .loop()
    .x(cx - lastWidth / 2)
    .y(cy - lastHeight / 2)
    .width(lastWidth)
    .height(lastHeight);

  rect
    .animate(3000, 50 * i, "now")
    .ease((t) => t)
    .loop()
    .rotate(180);
}

const movingBubble = document.getElementById("moving-bubble");

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".outro",
      start: "top bottom",
      toggleActions: "play none none reverse",
    },
  })
  .to(movingBubble, {
    scale: 10,
    ease: "power2.inOut", // Added smooth easing
  });
