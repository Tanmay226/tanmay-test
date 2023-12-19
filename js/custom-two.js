
$(document).ready(function () {


$("#card-slider").owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    autoplayTimeout: 5000,
    dots: false,
    nav: true,
    autoplaySpeed: 500,
    navText: [
      "<i class='fa-solid fa-arrow-left'></i>",
      "<i class='fa-solid fa-arrow-right'></i>",
    ],
    responsive: {
      0: {
        items: 2,
        nav: false,
      },
      768: {
        items: 4,
      },
      991: {
        items: 5,
      },
      1280: {
        items: 7,
      },
    },
  });



});