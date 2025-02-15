// // Get a reference to the <path>
// var path = document.querySelector(".st0");

// // Get length of path
// var pathLength = path.getTotalLength();

// // Make very long dashes (the length of the path itself)
// path.style.strokeDasharray = pathLength + " " + pathLength;

// // Offset the dashes so the it appears hidden entirely
// path.style.strokeDashoffset = pathLength;

// path.getBoundingClientRect();

// // When the page scrolls...
// window.addEventListener("scroll", function (e) {
//   // What % down is it?
//   var scrollPercentage =
//     (document.documentElement.scrollTop + document.body.scrollTop) /
//     (document.documentElement.scrollHeight -
//       document.documentElement.clientHeight);

//   // Length to offset the dashes
//   var drawLength = pathLength * scrollPercentage;

//   // Draw in reverse
//   path.style.strokeDashoffset = pathLength - drawLength;

//   // When complete, remove the dash array, otherwise shape isn't quite sharp
//   // Accounts for fuzzy math
//   if (scrollPercentage >= 0.99) {
//     path.style.strokeDasharray = "none";
//   } else {
//     path.style.strokeDasharray = pathLength + " " + pathLength;
//   }
// });

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
