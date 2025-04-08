import { createResizeObserver } from "./resizeObserver.js";
document.addEventListener("DOMContentLoaded", function () {
  const tooltipTriggers = document.querySelectorAll(".tooltip-trigger");

  tooltipTriggers.forEach((trigger) => {
    const tooltipContent = trigger.dataset.tooltip;

    // Create the ::after element dynamically
    const afterElement = document.createElement("span");
    afterElement.classList.add("tooltip-after");
    afterElement.style.pointerEvents = "all";
    afterElement.style.content = '"' + tooltipContent + '"'; // Set content using CSS content property
    trigger.appendChild(afterElement);

    // Add event listeners to the ::after element
    afterElement.addEventListener("mouseenter", () => {
      trigger.classList.add("after-hover");
    });

    afterElement.addEventListener("mouseleave", () => {
      trigger.classList.remove("after-hover");
    });
  });
});

gsap.registerPlugin(ScrollTrigger);

function init() {
  const scrollerElements = document.querySelectorAll(".scroller");

  scrollerElements.forEach((scroller) => {
    createResizeObserver(scroller, () => {
      ScrollTrigger.refresh();
    });
  });
  const bentoContainer = document.querySelector(".bento");
  console.log(bentoContainer.offsetWidth, bentoContainer.offsetHeight);

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
  ),
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

    duration: 0.25,
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
    // yPercent: -15,
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
        markers: false,
      },
    })
    .to([propertycard, ".popular-articles"], {
      // y: -200,
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
    );
  // Section 4 appear

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

const movingBubble = document.getElementById("moving-bubble");

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".bento-container",
      start: "top top",
      end: window.innerHeight * 2.5,
      // end: "bottom -100%",
      toggleActions: "play none none reverse",
      pin: true, // Makes the element sticky
      pinSpacing: false,
      scrub: 1,
      markers: true,
    },
  })
  .to(".bento", {
    visibility: "visible",
    // yPercent: 5,
    opacity: 1,
    duration: 0.1,
    ease: "power2.inOut",
    overwrite: "auto",
  })
  // Add position to center if needed
  .to(".bento", {
    position: "fixed",
  })
  .to(".bento", {
    delay: 0.2,
    scale: 20,
    transformOrigin: "62% 40%",
    opacity: 0,
    duration: 0.1,
    ease: "power2.in",
    pointerEvents: "none",
    overwrite: "auto",
  });

// gsap.timeline({
//   scrollTrigger: {
//     trigger: ".bento",
//     start: "top bottom",
//     toggleActions: "play none none reverse",
//   },
// });

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".sticky",
      start: "center bottom",
      toggleActions: "play none none reverse",
    },
  })
  .to(movingBubble, {
    transform: "scale(.2)",
    ease: "power2.inOut",
    mixBlendMode: "normal",
  });

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".outro",
      start: "top bottom",
      toggleActions: "play none none reverse",
    },
  })
  .to(".bento", {
    position: "relative",
    scale: 0,
  })
  .to(movingBubble, {
    transform: "translateZ(0) scale(1)",
    ease: "power2.inOut",
    mixBlendMode: "normal",
  })
  .to(
    "#glow feGaussianBlur",
    {
      attr: { stdDeviation: 1 },
      ease: "power2.inOut",
    },
    "<"
  );
