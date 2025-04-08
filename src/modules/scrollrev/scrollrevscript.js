document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  // Add state management variables
  let isAnimating = false;
  const duration = 1; // Animation duration in seconds

  // ScrollTrigger for managing section visibility
  ScrollTrigger.create({
    trigger: ".scrollrev-container",
    start: "top center",
    end: "bottom center",
    onEnter: () => {
      if (!isAnimating) {
        isAnimating = true;
        gsap.to(".logosr", {
          y: "-50%",
          scale: 0.35,
          ease: "none",
          scrollTrigger: {
            trigger: ".dashboard",
            start: "top top",
            end: "100vh top",
            scrub: 1,
            onComplete: () => (isAnimating = false),
          },
        });
      }
    },
  });

  gsap.to(".dashboard", {
    y: "-25%",
    ease: "none",
    scrollTrigger: {
      trigger: ".scrollrev-container",
      start: "top top",
      end: "200vh top",
      scrub: 1,
    },
  });

  gsap.to(".dashboard .main-dashboard", {
    filter: "blur(10px)",
    ease: "none",
    scrollTrigger: {
      trigger: ".scrollrev-conteiner",
      start: "600vh top",
      end: "vh top",
      scrub: 0.5,
    },
  });

  gsap.to("#window img", {
    opacity: 0,
    ease: "none",
    scrollTrigger: {
      trigger: ".dashboard",
      start: "600vh top",
      end: "800vh top",
      scrub: 0.5,
    },
  });

  gsap.to(".dashboard", {
    transformOrigin: "center 85.6%",
    scale: 75,
    ease: "none",
    scrollTrigger: {
      trigger: ".dashboard",
      start: "600vh top",
      end: "800vh top",
      scrub: 1,
    },
  });

  gsap.to(".dashboard", {
    opacity: 0,
    display: "none",
    ease: "none",
    scrollTrigger: {
      trigger: ".dashboard",
      start: "600vh top",
      end: "800vh top",
      scrub: true,
    },
  });
});

// Export isAnimating for other modules
export const getAnimationState = () => isAnimating;
