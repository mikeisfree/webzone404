import { initializeSlider } from "./bento.js";

export async function loadBento() {
  try {
    const response = await fetch("/src/modules/bento/bento.html");
    const html = await response.text();
    const bentoContainer = document.querySelector(".bento");

    if (!bentoContainer) {
      console.error("Bento container not found");
      return;
    }

    bentoContainer.innerHTML = html;
    bentoContainer.style.maxHeight = "150vh";

    // Wait for DOM to be updated
    await new Promise((resolve) => setTimeout(resolve, 100));

    // Initialize components after content is loaded
    initializeSlider();

    // Import and initialize typewriter
    const { default: initTypewriter } = await import("../../js/typewriter.js");
    await initTypewriter();

    // Make bento visible after everything is initialized
    bentoContainer.style.visibility = "visible";
    bentoContainer.style.opacity = "1";

    console.log("Andy elements loaded:", {
      chat: document.getElementById("andyChat"),
      input: document.getElementById("andyInput"),
      send: document.getElementById("andySend"),
      container: document.querySelector(".andy-input-container"),
    });
  } catch (error) {
    console.error("Error loading Bento module:", error);
  }
}

// import { initializeSlider } from "./bento.js";

// export async function loadBento() {
//   const response = await fetch("/src/modules/bento/bento.html");
//   const html = await response.text();
//   const bentoContainer = document.querySelector(".bento");
//   bentoContainer.innerHTML = html;

//   // Set container constraints
//   // bentoContainer.style.height = "100vh";
//   bentoContainer.style.maxHeight = "150vh";

//   // Ensure grid content is properly contained
//   const bentoGrid = bentoContainer.querySelector(".bento-grid");
//   if (bentoGrid) {
//     bentoGrid.style.maxHeight = "100%";
//   }

//   // Initialize the slider
//   initializeSlider();

//   // Initialize typewriter after bento content is loaded
//   initTypewriter();

//   // Manually trigger scroll handler initialization after content is loaded
//   if (window.initScrollerHandler) {
//     window.initScrollerHandler();
//   }
// }
