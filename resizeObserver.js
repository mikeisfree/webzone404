let frameId;

const debounce = (fn, delay) => {
  let timeoutId;
  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

export const createResizeObserver = (element, callback) => {
  const debouncedCallback = debounce(callback, 100); // Increased debounce time

  const observer = new ResizeObserver((entries) => {
    if (frameId) {
      cancelAnimationFrame(frameId);
    }

    frameId = requestAnimationFrame(() => {
      if (!Array.isArray(entries) || !entries.length) {
        return;
      }
      debouncedCallback(entries[0]);
    });
  });

  observer.observe(element);
  return () => observer.disconnect();
};
