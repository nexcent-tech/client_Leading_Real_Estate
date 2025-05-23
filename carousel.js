  

  const images = [
    "./assets/images/background/assure-living-room-interior-design-xl.jpg",
    "./assets/images/background/assure-group-commercial-building-xl.jpg",
  ];

  let current = 0;
  const slide1 = document.getElementById("slide1");
  const slide2 = document.getElementById("slide2");
  const carousel = document.getElementById("carouselSection");

  let showingFirst = true;
  let isTransitioning = false;

  function slideTo(index) {
    if (isTransitioning) return;
    isTransitioning = true;

    const incoming = showingFirst ? slide2 : slide1;
    const outgoing = showingFirst ? slide1 : slide2;

    incoming.style.backgroundImage = `url('${images[index]}')`;
    incoming.classList.remove("translate-x-0", "opacity-100", "-translate-x-full");
    incoming.classList.add("translate-x-full", "opacity-0");

    void incoming.offsetWidth; // reflow

    incoming.classList.remove("translate-x-full", "opacity-0");
    incoming.classList.add("translate-x-0", "opacity-100");

    outgoing.classList.remove("translate-x-0", "opacity-100");
    outgoing.classList.add("-translate-x-full", "opacity-0");

    setTimeout(() => {
      outgoing.classList.remove("-translate-x-full", "opacity-0");
      outgoing.classList.add("translate-x-full", "opacity-0");
      showingFirst = !showingFirst;
      isTransitioning = false;
    }, 700);

    current = index;
  }

  // Button Navigation
  document.getElementById("nextBtn").addEventListener("click", () => {
    const nextIndex = (current + 1) % images.length;
    slideTo(nextIndex);
  });

  document.getElementById("prevBtn").addEventListener("click", () => {
    const nextIndex = (current - 1 + images.length) % images.length;
    console.log(nextIndex);
    slideTo(nextIndex);
  });

  // Auto-play every 5 seconds
  setInterval(() => {
    const nextIndex = (current + 1) % images.length;
    slideTo(nextIndex);
  }, 5000);

  // Mouse Drag Support
  let isMouseDown = false;
  let startX = 0;

  carousel.addEventListener("mousedown", (e) => {
    isMouseDown = true;
    startX = e.clientX;
  });

  carousel.addEventListener("mousemove", (e) => {
    if (!isMouseDown) return;
    
  });

  carousel.addEventListener("mouseup", (e) => {
    if (!isMouseDown) return;
    isMouseDown = false;
    const diffX = startX - e.clientX;
    if (Math.abs(diffX) > 50) {
      if (diffX > 0) {
        const nextIndex = (current + 1) % images.length;
        slideTo(nextIndex);
      }
    }
  });

  carousel.addEventListener("mouseleave", () => {
    isMouseDown = false;
  });