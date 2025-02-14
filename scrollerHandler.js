function initScrollerHandler() {
  // Get all scroller elements
  const scrollers = document.querySelectorAll(".scroller");

  // Get Lenis instance (assuming it's available globally)
  const lenis = window.lenis;

  scrollers.forEach((scroller) => {
    const scrollContent = scroller.querySelector("div");

    // Reset scroll position on load
    scrollContent.scrollTop = 0;

    // Disable main scroll when hovering scroller
    scroller.addEventListener("mouseenter", () => {
      if (lenis) lenis.stop();
    });

    // Re-enable main scroll when leaving scroller
    scroller.addEventListener("mouseleave", () => {
      if (lenis) lenis.start();
    });

    // Handle wheel events
    scroller.addEventListener(
      "wheel",
      (e) => {
        const isScrollable =
          scrollContent.scrollHeight > scrollContent.clientHeight;
        if (!isScrollable) return;

        const isAtTop = scrollContent.scrollTop === 0;
        const isAtBottom =
          scrollContent.scrollTop + scrollContent.clientHeight >=
          scrollContent.scrollHeight;

        // Determine scroll direction
        const scrollingUp = e.deltaY < 0;
        const scrollingDown = e.deltaY > 0;

        // Allow parent scroll only when at boundaries
        if ((isAtTop && scrollingUp) || (isAtBottom && scrollingDown)) {
          return; // Let the event bubble up to the parent
        }

        // Otherwise, handle the scroll within the scroller
        e.preventDefault();
        e.stopPropagation();

        const scrollAmount = e.deltaY;
        scrollContent.scrollTop += scrollAmount;
      },
      { passive: false }
    );
  });
}

// Initialize when DOM is loaded
window.addEventListener("load", initScrollerHandler);
document.addEventListener("DOMContentLoaded", initScrollerHandler);
