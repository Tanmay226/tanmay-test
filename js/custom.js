$(document).ready(function () {
  $("#home-slider-one").owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    autoplayTimeout: 5000,
    nav: false,
    dots: false,
    autoplaySpeed: 500,
    navText: [
      "<i class='fa fa-chevron-left'></i>",
      "<i class='fa fa-chevron-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      640: {
        items: 1,
      },
      991: {
        items: 1,
      },
      1200: {
        items: 1,
      },
    },
  });

  $("#home-slider-two").owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    autoplayTimeout: 5000,
    nav: true,
    dots: false,
    autoplaySpeed: 500,
    navText: [
      "<i class='fa-solid fa-arrow-left'></i>",
      "<i class='fa-solid fa-arrow-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      640: {
        items: 2,
      },
      991: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  });

  $("#headingTwo").click(function(){
    $(this).toggleClass("main");
  });
  $("#headingOne").click(function(){
    $(this).toggleClass("main");
  });
  $("#headingThree").click(function(){
    $(this).toggleClass("main");
  });
  $("#headingFour").click(function(){
    $(this).toggleClass("main");
  });





});
