function initScrollerHandler() {
  const scrollableElements = document.querySelectorAll(
    ".scroller, .overscroll"
  );
  const lenis = window.lenis;

  scrollableElements.forEach((element) => {
    const scrollContent = element.querySelector("div");
    if (!scrollContent) return;

    let isHovering = false;
    let isTouchActive = false;

    // Mouse enter/leave handlers remain the same
    element.addEventListener("mouseenter", () => {
      isHovering = true;
      if (lenis) {
        lenis.stop();
        lenis.scrollTo(window.scrollY, { immediate: true });
      }
    });

    element.addEventListener("mouseleave", () => {
      isHovering = false;
      if (lenis && !isTouchActive) lenis.start();
    });

    // Modified wheel event handler with smooth scrolling
    element.addEventListener(
      "wheel",
      (e) => {
        if (!isHovering) return;

        const isScrollable =
          scrollContent.scrollHeight > scrollContent.clientHeight;
        if (!isScrollable) return;

        const isAtTop = scrollContent.scrollTop <= 0;
        const isAtBottom =
          Math.ceil(scrollContent.scrollTop + scrollContent.clientHeight) >=
          scrollContent.scrollHeight;

        const scrollingUp = e.deltaY < 0;
        const scrollingDown = e.deltaY > 0;

        if ((isAtTop && scrollingUp) || (isAtBottom && scrollingDown)) {
          return; // Allow parent scroll at boundaries
        }

        // Handle local scroll with normalized delta
        e.preventDefault();
        e.stopPropagation();

        // Normalize scroll speed
        let scrollAmount;
        if (element.classList.contains("overscroll")) {
          // Smoother scroll for overscroll elements
          scrollAmount = e.deltaY * 0.5; // Reduce scroll speed by half

          // Ensure minimum scroll amount for smooth reading
          if (Math.abs(scrollAmount) < 10) {
            scrollAmount = Math.sign(scrollAmount) * 10;
          }

          // Limit maximum scroll amount
          const maxScroll = 100;
          if (Math.abs(scrollAmount) > maxScroll) {
            scrollAmount = Math.sign(scrollAmount) * maxScroll;
          }
        } else {
          // Normal scroll for other elements
          scrollAmount = e.deltaY;
        }

        // Apply smooth scroll
        scrollContent.scrollBy({
          top: scrollAmount,
          behavior: "smooth",
        });
      },
      { passive: false }
    );

    // Touch event handlers remain the same
    element.addEventListener(
      "touchstart",
      () => {
        isTouchActive = true;
        if (lenis) lenis.stop();
      },
      { passive: true }
    );

    element.addEventListener(
      "touchend",
      () => {
        isTouchActive = false;
        if (lenis && !isHovering) lenis.start();
      },
      { passive: true }
    );

    element.addEventListener(
      "touchmove",
      (e) => {
        if (!isTouchActive) return;
        e.stopPropagation();
      },
      { passive: false }
    );
  });
}

// ... rest of the code remains the same ...

// Initialize on both events
document.addEventListener("DOMContentLoaded", initScrollerHandler);
window.addEventListener("load", initScrollerHandler);

// MutationObserver for dynamic content
const observer = new MutationObserver((mutations) => {
  let shouldInit = false;
  mutations.forEach((mutation) => {
    mutation.addedNodes.forEach((node) => {
      if (
        node.classList?.contains("overscroll") ||
        node.querySelector?.(".overscroll")
      ) {
        shouldInit = true;
      }
    });
  });
  if (shouldInit) {
    initScrollerHandler();
  }
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
});
