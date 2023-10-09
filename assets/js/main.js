$(document).ready(function () {
  var currentDir = $("a").css("direction");
  console.log(currentDir);

  if ($(".nice_select").length) {
    $(".nice_select").niceSelect();
  }

  if ($(".locations_wrapper_slider").length) {
    $(".locations_wrapper_slider").slick({
      slidesToShow: 4.2,
      slidesToScroll: 1,
      arrows: true,
      dots: true,
      speed: 300,
      infinite: true,
      autoplaySpeed: 5000,
      autoplay: true,
      centerMode: true,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  }
});

// $(window).on("load", function () {
//   $("html").removeClass("splash-active");
//   $(".splashscreen").addClass("splashscreen_none");
// });
