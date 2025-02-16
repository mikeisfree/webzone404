document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(MotionPathPlugin);

  const bubble = document.querySelector("#moving-bubble");
  const pipePath = document.querySelector("#st0");

  if (!bubble || !pipePath) {
    console.error("Required elements not found. Check your HTML selectors.");
    return;
  }

  const pathLength = pipePath.getTotalLength();
  pipePath.style.strokeDasharray = pathLength;
  pipePath.style.strokeDashoffset = pathLength;

  gsap.set(bubble, {
    motionPath: {
      path: "#st0",
      align: "#st0",
      autoRotate: true,
      alignOrigin: [0.5, 0.5],
      start: 0,
    },
    scale: 1.2,
    transformOrigin: "50% 50%",
  });

  gsap.timeline({
    scrollTrigger: {
      trigger: "#GJ_logo",
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;

        // Move bubble
        gsap.set(bubble, {
          motionPath: {
            path: "#st0",
            align: "#st0",
            autoRotate: true,
            alignOrigin: [0.5, 0.5],
            start: 0,
            end: progress,
          },
        });

        // Illuminate path
        const drawLength = pathLength * progress;
        pipePath.style.strokeDashoffset = pathLength - drawLength;
      },
    },
  });

  // Subtle rotation effect
  gsap.to("#GJ_logo", {
    scrollTrigger: {
      trigger: "#GJ_logo",
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
      onUpdate: (self) => {
        const rotation = Math.sin(self.progress * Math.PI) * 15;
        gsap.set("#GJ_logo", {
          perspective: 1000,
          rotationY: rotation,
        });
      },
    },
  });
});

const noise = () => {
  let canvas, ctx;

  let wWidth, wHeight;

  let noiseData = [];
  let frame = 0;

  let loopTimeout;

  // Create Noise
  const createNoise = () => {
    const idata = ctx.createImageData(wWidth, wHeight);
    const buffer32 = new Uint32Array(idata.data.buffer);
    const len = buffer32.length;

    for (let i = 0; i < len; i++) {
      if (Math.random() < 0.5) {
        buffer32[i] = 0xff000000;
      }
    }

    noiseData.push(idata);
  };

  // Play Noise
  const paintNoise = () => {
    if (frame === 9) {
      frame = 0;
    } else {
      frame++;
    }

    ctx.putImageData(noiseData[frame], 0, 0);
  };

  // Loop
  const loop = () => {
    paintNoise(frame);

    loopTimeout = window.setTimeout(() => {
      window.requestAnimationFrame(loop);
    }, 1000 / 25);
  };

  // Setup
  const setup = () => {
    wWidth = window.innerWidth;
    wHeight = window.innerHeight;

    canvas.width = wWidth;
    canvas.height = wHeight;

    for (let i = 0; i < 10; i++) {
      createNoise();
    }

    loop();
  };

  // Reset
  let resizeThrottle;
  const reset = () => {
    window.addEventListener(
      "resize",
      () => {
        window.clearTimeout(resizeThrottle);

        resizeThrottle = window.setTimeout(() => {
          window.clearTimeout(loopTimeout);
          setup();
        }, 200);
      },
      false
    );
  };

  // Init
  const init = (() => {
    canvas = document.getElementById("noise");
    ctx = canvas.getContext("2d");

    setup();
  })();
};

noise();

var line = document.createElement("div");
line.className = "line";
document.querySelector(".content").appendChild(line);

var tl = new TimelineMax({ repeat: -1 });

for (var i = 50; i--; ) {
  tl.to(".content", R(0.03, 0.17), { opacity: R(0, 1), y: R(-1.5, 1.5) });
}

tl.to(
  line,
  tl.duration() / 2,
  {
    opacity: R(0.1, 1),
    x: R(0, 300),
    ease: RoughEase.ease.config({
      strength: 0.5,
      points: 10,
      randomize: true,
      taper: "none",
    }),
    repeat: 1,
    yoyo: true,
  },
  0
);

function R(max, min) {
  return Math.random() * (max - min) + min;
}

// ------- Osmo [https://osmo.supply/] ------- //

gsap.registerPlugin(CustomEase, Flip);
CustomEase.create("osmo-ease", "0.625, 0.05, 0, 1");

gsap.defaults({
  ease: "osmo-ease",
  duration: 0.725,
});

document.addEventListener("DOMContentLoaded", () => {
  const listItems = document.querySelectorAll(".main-title__item");
  const imageItems = document.querySelectorAll(".main-img__item");
  const overlayItems = document.querySelectorAll(".overlay-item");
  const overlayNav = document.querySelector(".overlay-nav");
  const navItems = document.querySelectorAll("[data-overlay='nav-item']");
  const closeButton = document.querySelector("[data-overlay='close']");
  const headings = document.querySelectorAll(".main-title");

  let activeListItem = null;

  function openOverlay(index) {
    // Set active class to the clicked list item
    listItems.forEach((item) => item.classList.remove("active"));
    activeListItem = listItems[index];
    activeListItem.classList.add("active");

    // Record the state of the title
    const title = activeListItem.querySelector(".main-title");
    const titleState = Flip.getState(title, { props: "fontSize" });

    // Record the state of the image
    const image = imageItems[index].querySelector(".image");
    const imageState = Flip.getState(image);

    // Show the overlay and get elements for animation
    const overlayItem = overlayItems[index];
    const content = overlayItem.querySelector(".overlay-row");

    gsap.set(overlayItem, { display: "block", autoAlpha: 110 });
    gsap.fromTo(content, { autoAlpha: 0 }, { autoAlpha: 1, delay: 0.5 });

    const textTarget = overlayItem.querySelector(
      "[data-overlay='text-target']"
    );
    const imgTarget = overlayItem.querySelector("[data-overlay='img-target']");

    // Append the elements to overlay targets
    textTarget.appendChild(title);
    imgTarget.appendChild(image);

    // Animate with GSAP Flip
    Flip.from(titleState);
    Flip.from(imageState);

    gsap.set(overlayNav, { display: "flex" });
    gsap.fromTo(
      navItems,
      {
        yPercent: 110,
      },
      {
        yPercent: 0,
        stagger: 0.1,
      }
    );

    gsap.set(imageItems, { autoAlpha: 0 });

    listItems.forEach((listItem, i) => {
      if (i !== index) {
        const otherTitle = listItem.querySelector(".main-title");
        gsap.to(otherTitle, {
          yPercent: 100,
          autoAlpha: 0,
          duration: 0.45,
          delay: 0.2 - i * 0.05,
        });
      }
    });
  }

  // Function to close overlay
  function closeOverlay() {
    if (!activeListItem) return;

    // Find active overlay
    const index = Array.from(listItems).indexOf(activeListItem);
    const overlayItem = overlayItems[index];
    const title = overlayItem.querySelector(
      "[data-overlay='text-target'] .main-title"
    );
    const image = overlayItem.querySelector(
      "[data-overlay='img-target'] .image"
    );
    const overlayContent = overlayItem.querySelector(".overlay-row");

    // Record the state of title and image in overlay
    const titleState = Flip.getState(title, { props: "fontSize" });
    const imageState = Flip.getState(image);

    // Reset overlay display and move elements back to their original containers
    gsap.to(navItems, {
      yPercent: 110,
      onComplete: () => {
        overlayNav.style.display = "none";
      },
    });
    gsap.to(overlayContent, {
      autoAlpha: 0,
      onComplete: () => {
        overlayItem.style.display = "none";
      },
    });

    activeListItem.querySelector(".button").appendChild(title);
    imageItems[index].appendChild(image);
    gsap.set(imageItems[index], { autoAlpha: 1 });

    // Animate elements back with GSAP Flip
    Flip.from(titleState);
    Flip.from(imageState);

    // Remove active class
    activeListItem.classList.remove("active");
    activeListItem = null;

    gsap.to(headings, { yPercent: 0, autoAlpha: 1, delay: 0.3, stagger: 0.05 });
  }

  // Add click event listeners to list items
  listItems.forEach((listItem, index) => {
    listItem.addEventListener("click", () => openOverlay(index));
  });

  // Close overlay on ESC key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeOverlay();
  });

  // Close overlay on close button click
  closeButton.addEventListener("click", closeOverlay);

  // Show corresponding image on hover of a list item, based on index
  listItems.forEach((listItem, i) => {
    listItem.addEventListener("mouseenter", () => {
      gsap.set(imageItems, { autoAlpha: 0 }); // hide all
      gsap.set(imageItems[i], { autoAlpha: 1 }); // show image with matching index
    });
  });
});
