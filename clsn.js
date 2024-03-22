const carousel = document.getElementById("demo");

carousel.addEventListener("mouseover", () => {
  const carouselData = new Bootstrap.Carousel(carousel);
  carouselData.next();
});