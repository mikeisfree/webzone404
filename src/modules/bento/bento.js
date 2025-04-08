export function initializeSlider() {
  let currentSlide = 0;
  const slider = document.getElementById("slider");
  const dots = document.querySelectorAll(".slider-dot");

  function updateSlider() {
    if (!slider) return;
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    dots.forEach((dot, index) => {
      dot.classList.toggle("bg-white", index === currentSlide);
      dot.classList.toggle("bg-white/50", index !== currentSlide);
    });
  }

  function moveSlide(direction) {
    currentSlide = (currentSlide + direction + 3) % 3;
    updateSlider();
  }

  // Add click handlers to dots
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentSlide = index;
      updateSlider();
    });
  });

  // Add click handlers to navigation buttons
  const prevButton = document.querySelector(".slider-prev");
  const nextButton = document.querySelector(".slider-next");

  if (prevButton) {
    prevButton.addEventListener("click", () => moveSlide(-1));
  }

  if (nextButton) {
    nextButton.addEventListener("click", () => moveSlide(1));
  }

  // Start auto-slide
  setInterval(() => moveSlide(1), 5000);

  // Initial update
  updateSlider();
}

document.addEventListener("mousemove", (e) => {
  const eyesContainer = document.querySelector(".eyes");
  const eyes = document.querySelectorAll(".eyes > div");

  if (!eyesContainer || eyes.length !== 2) return;

  const containerRect = eyesContainer.getBoundingClientRect();
  const containerCenterX = containerRect.left + containerRect.width / 2;
  const containerCenterY = containerRect.top + containerRect.height / 2;

  const angle = Math.atan2(
    e.clientY - containerCenterY,
    e.clientX - containerCenterX
  );
  const distance = Math.min(
    eyes[0].offsetWidth / 4,
    Math.sqrt(
      Math.pow(e.clientX - containerCenterX, 2) +
        Math.pow(e.clientY - containerCenterY, 2)
    )
  );

  const moveX = Math.cos(angle) * distance;
  const moveY = Math.sin(angle) * distance;

  eyes.forEach((eye) => {
    const eyeBall = eye.querySelector("i");
    eyeBall.style.transform = `translate(${moveX}px, ${moveY}px)`;
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const wordList = document.querySelector("[data-looping-words-list]");
  const words = Array.from(wordList.children);
  const totalWords = words.length;
  const wordHeight = 100 / totalWords; // Offset as a percentage
  const edgeElement = document.querySelector("[data-looping-words-selector]");
  let currentIndex = 0;
  function updateEdgeWidth() {
    const centerIndex = (currentIndex + 1) % totalWords;
    const centerWord = words[centerIndex];
    const centerWordWidth = centerWord.getBoundingClientRect().width;
    const listWidth = wordList.getBoundingClientRect().width;
    const percentageWidth = (centerWordWidth / listWidth) * 100;
    gsap.to(edgeElement, {
      width: `${percentageWidth}%`,
      duration: 0.5,
      ease: "Expo.easeOut",
    });
  }
  function moveWords() {
    currentIndex++;
    gsap.to(wordList, {
      yPercent: -wordHeight * currentIndex,
      duration: 1.2,
      ease: "elastic.out(1, 0.85)",
      onStart: updateEdgeWidth,
      onComplete: function () {
        if (currentIndex >= totalWords - 3) {
          wordList.appendChild(wordList.children[0]);
          currentIndex--;
          gsap.set(wordList, { yPercent: -wordHeight * currentIndex });
          words.push(words.shift());
        }
      },
    });
  }
  updateEdgeWidth();
  gsap
    .timeline({ repeat: -1, delay: 1 })
    .call(moveWords)
    .to({}, { duration: 2 })
    .repeat(-1);
});
