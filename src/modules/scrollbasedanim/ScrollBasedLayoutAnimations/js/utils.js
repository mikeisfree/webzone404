const preloadImages = (selector = "img") => {
  const images = document.querySelectorAll(selector);
  if (!images.length) return;

  images.forEach((img) => {
    if (!img.complete) {
      img.src = img.src;
    }
  });
};

export { preloadImages };
