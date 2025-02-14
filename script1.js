document.addEventListener("DOMContentLoaded", () => {
  // Initialize a new Lenis instance for smooth scrolling
  const lenis = new Lenis();

  // Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
  lenis.on("scroll", ScrollTrigger.update);

  // Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
  // This ensures Lenis's smooth scroll animation updates on each GSAP tick
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000); // Convert time from seconds to milliseconds
  });

  // Disable lag smoothing in GSAP to prevent any delay in scroll animations
  gsap.ticker.lagSmoothing(0);

  const cardPositions = [
    { top: "30%", left: "55%" },
    { top: "20%", left: "25%" },
    { top: "50%", left: "10%" },
    { top: "60%", left: "40%" },
    { top: "30%", left: "30%" },
    { top: "60%", left: "60%" },
    { top: "20%", left: "50%" },
    { top: "60%", left: "10%" },
    { top: "20%", left: "40%" },
    { top: "45%", left: "55%" },
    { top: "80%", left: "75%" },
    { top: "60%", left: "55%" },
    { top: "90%", left: "30%" },
    { top: "20%", left: "80%" },
    { top: "60%", left: "20%" },
    { top: "20%", left: "90%" },
    { top: "60%", left: "20%" },
    { top: "60%", left: "50%" },
    { top: "50%", left: "80%" },
    { top: "75%", left: "25%" },
  ];

  const titlesContainer = document.querySelector(".titles");
  const moveDistance = window.innerWidth * 3;

  const imagesContainer = document.querySelector(".images");
  for (let i = 1; i <= 20; i++) {
    const card = document.createElement("div");
    card.className = `card card-${i}`;

    const img = document.createElement("img");
    img.src = `./images/img${i}.jpg`;
    img.alt = `Image ${i}`;
    card.appendChild(img);

    const position = cardPositions[i - 1];
    card.style.top = position.top;
    card.style.left = position.left;

    imagesContainer.appendChild(card);
  }

  const cards = document.querySelectorAll(".card");
  cards.forEach((card, index) => {
    gsap.set(card, {
      z: -500,
      scale: 0.3,
    });
  });

  ScrollTrigger.create({
    trigger: ".sticky",
    start: "top top",
    end: `+=${window.innerHeight * 5}px`,
    pin: true,
    scrub: 1,
    onUpdate: (self) => {
      const xPosition = -moveDistance * self.progress;
      gsap.set(titlesContainer, {
        x: xPosition,
      });

      const velocity = self.velocity || 0;
      const normalizedVelocity = Math.abs(velocity);
      const maxOffset = 100;
      const currentSpeed = Math.min(Math.abs(velocity / 500), maxOffset);
      const isAtEdge = self.progress <= 0 || self.progress >= 1;

      document.querySelectorAll(".title").forEach((titleContainer) => {
        // Calculate element's center position relative to viewport
        const rect = titleContainer.getBoundingClientRect();
        const elementCenterX = rect.left + rect.width / 2;
        const viewportWidth = window.innerWidth;
        const viewportCenter = viewportWidth / 2;

        // Calculate distance from center as a percentage (0 to 1)
        const distanceFromCenter =
          Math.abs(elementCenterX - viewportCenter) / viewportWidth;

        // Calculate opacity
        // Fully visible (1) within 40% of center
        // Fades out to 0 between 40% and 50% distance
        const opacity = Math.max(
          0,
          1 - Math.max(0, distanceFromCenter - 0.1) / 0.4
        );

        const title1 = titleContainer.querySelector(".title-1");
        const title2 = titleContainer.querySelector(".title-2");
        const title3 = titleContainer.querySelector(".title-3");

        // Apply opacity to all title elements
        gsap.to([title1, title2, title3], {
          opacity: opacity,
          duration: 0.2,
          overwrite: "auto",
          opacity: 0,
        });

        if (isAtEdge) {
          gsap.to([title1, title2], {
            xPercent: -50,
            x: 0,
            duration: 1,
            ease: "power2.out",
            overwrite: true,
          });
        } else {
          const baseOffset = normalizedVelocity * currentSpeed;

          gsap.to([title1], {
            xPercent: -50,
            x: `${baseOffset * 4}px`,
            duration: 0.7,
            ease: "power1.out",
            overwrite: "auto",
          });

          gsap.to(title2, {
            xPercent: -50,
            x: `${baseOffset * 2}px`,
            duration: 0.7,
            ease: "power1.out",
            overwrite: "auto",
          });
        }

        gsap.set(title3, {
          xPercent: -50,
          x: 0,
        });
      });

      cards.forEach((card, index) => {
        const staggerOffset = index * 0.035;
        const scaledProgress = (self.progress - staggerOffset) * 3;
        const individualProgress = Math.max(0, Math.min(1, scaledProgress));
        const targetZ = index === cards.length - 1 ? 1500 : 2000;
        const newZ = -50000 + (targetZ + 50000) * individualProgress;
        const scaleProgress = Math.min(1, individualProgress * 10);
        const scale = Math.max(0, Math.min(1, scaleProgress));

        gsap.set(card, {
          z: newZ,
          scale: scale,
        });
      });
    },
    id: "mainScroll",
  });

  // Simplified snap configuration
  ScrollTrigger.create({
    trigger: ".sticky",
    start: "bottom bottom",
    end: `+=${window.innerHeight * 5}px`,
    snap: {
      snapTo: [0, 0.33, 0.67, 1],
      duration: 2,
      // ease: "power1.inOut",
      inertia: false,
    },
  });
});

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".last-title",
    start: "bottom bottom",
    pin: true,
    scrub: 1,
    end: "top top",
    markers: false,
  },
});

tl.from(".outro", {
  yPercent: -100,
  ease: "none",
});

gsap.delayedCall(0.1, () => {
  document.documentElement.style.overflowY = "hidden"; // Ensure no unwanted scroll
  document.documentElement.style.height = "100vh"; // Ensure full viewport
  document.body.style.height = "100vh";

  // Optional: If you want to allow scrolling inside specific elements
  gsap.set(".scrollable", { overflowY: "auto", height: "100vh" });
});
