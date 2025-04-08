document.addEventListener("DOMContentLoaded", () => {
  const lenis = new Lenis();
  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);

  const cardPositions = [
    { top: "45%", left: "60%" },
    { top: "20%", left: "25%" },
    { top: "45%", left: "60%" },
    { top: "20%", left: "25%" },
    { top: "45%", left: "60%" },
    { top: "20%", left: "25%" },
    { top: "45%", left: "60%" },
    { top: "20%", left: "25%" },
    { top: "45%", left: "60%" },
    { top: "20%", left: "25%" },
  ];

  const titlesContainer = document.querySelector(".titles");
  const moveDistance = window.innerWidth * 4;

  const imagesContainer = document.querySelector(".images");
  function createCard(i) {
    const card = document.createElement("div");
    card.className = `card card-${i}`;

    // Store original position
    let originalPosition = null;
    // let originalTransform = null;

    // Create inner structure for flip functionality
    const cardInner = document.createElement("div");
    cardInner.classList.add("card__inner");

    // Create front face
    const cardFaceFront = document.createElement("div");
    cardFaceFront.classList.add("card__face", "card__face--front");

    // Add original image to front face
    const img = document.createElement("img");
    img.src = `./images/img${i}.jpg`;
    img.alt = `Image ${i}`;
    img.style.width = "100%";
    img.style.height = "100%";
    img.style.objectFit = "cover";

    cardFaceFront.appendChild(img);

    // Create back face
    const cardFaceBack = document.createElement("div");
    cardFaceBack.classList.add("card__face", "card__face--back");

    // Create back content
    const cardContent = document.createElement("div");
    cardContent.classList.add("card__content");

    // Create header
    const cardHeader = document.createElement("div");
    cardHeader.classList.add("card__header");

    const profilePic = document.createElement("img");
    profilePic.classList.add("pp");
    profilePic.src = "./images/pp.jpg";
    profilePic.alt = "";

    const headerTitle = document.createElement("h2");
    headerTitle.textContent = `Project ${i}`;

    cardHeader.appendChild(profilePic);
    cardHeader.appendChild(headerTitle);

    // Create body
    const cardBody = document.createElement("div");
    cardBody.classList.add("card__body");

    const bodyTitle = document.createElement("h3");
    bodyTitle.textContent = "Project Description";

    const bodyText = document.createElement("p");
    bodyText.innerHTML =
      "Lorem ipsum <strong>dolor</strong> sit amet, consectetur <strong>adipiscing</strong> elit. Sed id erat a magna lobortis dictum.";

    cardBody.appendChild(bodyTitle);
    cardBody.appendChild(bodyText);

    // Assemble card structure
    cardContent.appendChild(cardHeader);
    cardContent.appendChild(cardBody);
    cardFaceBack.appendChild(cardContent);
    cardInner.appendChild(cardFaceFront);
    cardInner.appendChild(cardFaceBack);
    card.appendChild(cardInner);

    // Position the card
    const position = cardPositions[i - 1];
    card.style.top = position.top;
    card.style.left = position.left;

    // Add click handler with the new logic
    card.addEventListener("click", (e) => {
      e.stopPropagation(); // Prevent event from bubbling to document

      if (!card.classList.contains("is-selected")) {
        // First click - center and store position
        if (!originalPosition) {
          originalPosition = {
            top: card.style.top,
            left: card.style.left,
            transform: card.style.transform,
            transition: card.style.transition,
          };
        }
        card.classList.add("is-selected");
      } else if (!cardInner.classList.contains("is-flipped")) {
        // Second click - flip the card
        cardInner.classList.add("is-flipped");
      } else {
        // Third click - just unflip the card
        cardInner.classList.remove("is-flipped");
      }
    });

    // Add document click handler to close card when clicking outside
    document.addEventListener("click", (e) => {
      if (
        !card.contains(e.target) &&
        (card.classList.contains("is-selected") ||
          cardInner.classList.contains("is-flipped"))
      ) {
        // Remove both classes
        card.classList.remove("is-selected");
        cardInner.classList.remove("is-flipped");

        // Restore original position
        if (originalPosition) {
          gsap.to(card, {
            duration: 0.5,
            top: originalPosition.top,
            left: originalPosition.left,
            transform: originalPosition.transform,
            ease: "power2.inOut",
            onComplete: () => {
              card.style.position = "absolute";
            },
          });
        }
      }
    });

    return card;
  }

  // Create cards
  for (let i = 1; i <= 10; i++) {
    const card = createCard(i);
    imagesContainer.appendChild(card);
  }

  const cards = document.querySelectorAll(".card");
  cards.forEach((card, index) => {
    gsap.set(card, {
      z: -50000,
      scale: 0,
    });
  });

  function splitText(element) {
    const text = element.textContent;
    element.textContent = "";
    return [...text].map((char) => {
      const span = document.createElement("span");
      span.className = "char";
      span.textContent = char;
      element.appendChild(span);
      return span;
    });
  }

  ScrollTrigger.create({
    trigger: ".sticky",
    start: "top top",
    end: `+=${window.innerHeight * 5}px`,
    pin: true,
    scrub: 1,
    onUpdate: (self) => {
      const xPosition = -moveDistance * self.progress;
      gsap.set(titlesContainer, {
        x: xPosition,
      });

      const velocity = self.velocity || 0;
      const normalizedVelocity = Math.abs(velocity);
      const maxOffset = 100;
      const currentSpeed = Math.min(Math.abs(velocity / 20), maxOffset);
      const isAtEdge = self.progress <= 0 || self.progress >= 1;

      document.querySelectorAll(".title").forEach((titleContainer) => {
        const rect = titleContainer.getBoundingClientRect();
        const elementCenterX = rect.left + rect.width / 2;
        const viewportWidth = window.innerWidth;
        const viewportCenter = viewportWidth / 2;
        const distanceFromCenter =
          Math.abs(elementCenterX - viewportCenter) / viewportWidth;
        const opacity = Math.max(
          0,
          1 - Math.max(0, distanceFromCenter - 0.6) / 0.2
        );

        const title1 = titleContainer.querySelector(".title-1");
        const title2 = titleContainer.querySelector(".title-2");

        gsap.to([title1, title2], {
          opacity: opacity,
          duration: 0.2,
          overwrite: "auto",
        });

        if (isAtEdge) {
          gsap.to([title1, title2], {
            xPercent: -50,
            x: 0,
            duration: 1,
            ease: "power2.out",
            overwrite: true,
          });
        } else {
          const baseOffset = normalizedVelocity * currentSpeed;

          gsap.to([title1], {
            xPercent: -50,
            x: `${baseOffset * 4}px`,
            duration: 0.7,
            ease: "power1.out",
            overwrite: "auto",
          });

          gsap.to(title2, {
            xPercent: -50,
            x: `${baseOffset * 2}px`,
            duration: 0.7,
            ease: "power1.out",
            overwrite: "auto",
          });
        }
      });

      cards.forEach((card, index) => {
        // Only apply these animations if card is not being hovered
        if (!card.classList.contains("is-centered")) {
          const staggerOffset = index * 0.035;
          const scaledProgress = (self.progress - staggerOffset) * 1;
          const individualProgress = Math.max(0, Math.min(1, scaledProgress));
          const targetZ = index === cards.length - 1 ? 1500 : 2000;
          // const newZ = -50000 + (targetZ + 50000) * individualProgress;
          const newZ = -4000 + (targetZ + 10000) * individualProgress;
          const scaleProgress = Math.min(1, individualProgress * 10);
          const scale = Math.max(0, Math.min(1, scaleProgress));

          gsap.set(card, {
            z: newZ,
            scale: scale,
          });
        }
      });
    },
  });
});
