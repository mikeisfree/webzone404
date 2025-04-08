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

// const noise = () => {
//   let canvas, ctx;

//   let wWidth, wHeight;

//   let noiseData = [];
//   let frame = 0;

//   let loopTimeout;

//   // Create Noise
//   const createNoise = () => {
//     const idata = ctx.createImageData(wWidth, wHeight);
//     const buffer32 = new Uint32Array(idata.data.buffer);
//     const len = buffer32.length;

//     for (let i = 0; i < len; i++) {
//       if (Math.random() < 0.5) {
//         buffer32[i] = 0xff000000;
//       }
//     }

//     noiseData.push(idata);
//   };

//   // Play Noise
//   const paintNoise = () => {
//     if (frame === 9) {
//       frame = 0;
//     } else {
//       frame++;
//     }

//     ctx.putImageData(noiseData[frame], 0, 0);
//   };

//   // Loop
//   const loop = () => {
//     paintNoise(frame);

//     loopTimeout = window.setTimeout(() => {
//       window.requestAnimationFrame(loop);
//     }, 1000 / 25);
//   };

//   // Setup
//   const setup = () => {
//     wWidth = window.innerWidth;
//     wHeight = window.innerHeight;

//     canvas.width = wWidth;
//     canvas.height = wHeight;

//     for (let i = 0; i < 10; i++) {
//       createNoise();
//     }

//     loop();
//   };

//   // Reset
//   let resizeThrottle;
//   const reset = () => {
//     window.addEventListener(
//       "resize",
//       () => {
//         window.clearTimeout(resizeThrottle);

//         resizeThrottle = window.setTimeout(() => {
//           window.clearTimeout(loopTimeout);
//           setup();
//         }, 200);
//       },
//       false
//     );
//   };

//   // Init
//   const init = (() => {
//     canvas = document.getElementById("noise");
//     ctx = canvas.getContext("2d");

//     setup();
//   })();
// };

// noise();

// var line = document.createElement("div");
// line.className = "line";
// document.querySelector(".content").appendChild(line);

// var tl = new TimelineMax({ repeat: -1 });

// for (var i = 50; i--; ) {
//   tl.to(".content", R(0.03, 0.17), { opacity: R(0, 1), y: R(-1.5, 1.5) });
// }

// tl.to(
//   line,
//   tl.duration() / 2,
//   {
//     opacity: R(0.1, 1),
//     x: R(0, 300),
//     ease: RoughEase.ease.config({
//       strength: 0.5,
//       points: 10,
//       randomize: true,
//       taper: "none",
//     }),
//     repeat: 1,
//     yoyo: true,
//   },
//   0
// );

// function R(max, min) {
//   return Math.random() * (max - min) + min;
// }
