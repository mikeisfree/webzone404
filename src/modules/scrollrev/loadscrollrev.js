// import { initializeSlider } from "./scrollrevscript.js";

export async function loadScrollrev() {
  const response = await fetch("/src/modules/scrollrev/index.html");
  const html = await response.text();
  const scrollRevContainer = document.querySelector(".scrollrev");
  scrollRevContainer.innerHTML = html;

  // Set container constraints
  // scrollRevContainer.style.height = "100vh";
  // scrollRevContainer.style.maxHeight = "100vh";
}
