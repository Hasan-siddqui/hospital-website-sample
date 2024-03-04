// $carousell start
var options = {
  accessibility: true,
  prevNextButtons: true,
  pageDots: true,
  setGallerySize: false,
  arrowShape: {
    x0: 10,
    x1: 60,
    y1: 50,
    x2: 60,
    y2: 45,
    x3: 15
  }
};

var $carousel = $('[data-carousel]').flickity(options);
var $slideContent = $('.slide-content');
var flkty = $carousel.data('flickity');
var selectedSlide = flkty.selectedElement;

flkty.on('settle', function (index) {
  selectedSlide = flkty.selectedElement;
});

flkty.on('change', function (index) {
  $slideContent.eq(index).removeClass('mask');

  setTimeout(function () {
    $slideContent.addClass('mask');
  }, 500);
});

flkty.on('dragStart', function (event) {
  var index = 0;
  selectedSlide = flkty.selectedElement;

  if (event.layerX > 0) { // direction right
    index = $(selectedSlide).index() + 1;
  } else { // direction left
    index = $(selectedSlide).index() - 1;
  }

  $slideContent.eq(index).removeClass('mask');
});

setTimeout(function () {
  $slideContent.addClass('mask');
}, 500);
// crausel end
// second nav start
const container = document.querySelector(".container");
const primaryNav = document.querySelector(".nav__list");
const toggleButton = document.querySelector(".nav-toggle");

toggleButton.addEventListener("click", () => {
  const isExpanded = primaryNav.getAttribute("aria-expanded");
  primaryNav.setAttribute(
    "aria-expanded",
    isExpanded === "false" ? "true" : "false"
  );
});

container.addEventListener("click", (e) => {
  if (!primaryNav.contains(e.target) && !toggleButton.contains(e.target)) {
    primaryNav.setAttribute("aria-expanded", "false");
  }
});
// second nav start