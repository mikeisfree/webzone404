export async function loadTools() {
  try {
    const response = await fetch(
      "/src/modules/scrollbasedanim/ScrollBasedLayoutAnimations/index.html"
    );
    const html = await response.text();
    const toolsContainer = document.querySelector(".tools");
    if (!toolsContainer) {
      throw new Error("Tools container not found");
    }
    toolsContainer.innerHTML = html;
    return true;
  } catch (error) {
    console.error("Error loading tools content:", error);
    return false;
  }
}
