$(document).ready(function () {
  var currentDir = $("a").css("direction");
  console.log(currentDir);

  if($(".awards_logo_slider").length){
    $(".awards_logo_slider").slick({
      slidesToShow: 7,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      speed: 300,
      infinite: true,
      autoplaySpeed: 5000,
      autoplay: true,
      centerMode: true,
      responsive: [
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 6.5,
          },
        },
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2.2,
            centerMode: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            centerMode: false,
          },
        },
      ],
    })
  }

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
          breakpoint: 1025,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2.2,
            centerMode: false,
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

  if ($(".what_you_get_slider").length) {
    var $slider = $(".what_you_get_slider");
    var $progressBar = $(".what_you_get_slider_progressbar");
    var $progressBarLabel = $(
      ".what_you_get_slider_progressbar .slider__label"
    );

    $slider.on(
      "beforeChange",
      function (event, slick, currentSlide, nextSlide) {
        var calc = (nextSlide / (slick.slideCount - 1)) * 100;

        $progressBar
          .css("background-size", calc + "% 100%")
          .attr("aria-valuenow", calc);

        $progressBarLabel.text(calc + "% completed");
      }
    );

    $(".what_you_get_slider").slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      speed: 300,
      infinite: true,
      autoplaySpeed: 5000,
      autoplay: true,
      centerMode: true,
      prevArrow: $(".custom_arrow_next"),
      nextArrow: $(".custom_arrow_prev"),
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 3,
          },
        },
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

  if ($(".blogs_cards_slider").length) {
    var $slider = $(".blogs_cards_slider");
    var $progressBar = $(".blogs_cards_slider_progressbar");
    var $progressBarLabel = $(".blogs_cards_slider_progressbar .slider__label");

    $slider.on(
      "beforeChange",
      function (event, slick, currentSlide, nextSlide) {
        var calc = (nextSlide / (slick.slideCount - 1)) * 100;

        $progressBar
          .css("background-size", calc + "% 100%")
          .attr("aria-valuenow", calc);

        $progressBarLabel.text(calc + "% completed");
      }
    );

    $(".blogs_cards_slider").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      dots: true,
      speed: 300,
      infinite: true,
      autoplaySpeed: 5000,
      autoplay: true,
      centerMode: true,
      prevArrow: $(".custom_arrow_next"),
      nextArrow: $(".custom_arrow_prev"),
      responsive: [
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 2.3,
            centerMode: false,
          },
        },
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 2,
            centerMode: false,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow:1.5,
            centerMode: false,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            centerMode: false,
          },
        },
      ],
    });
  }

  if ($(".help_cards_slider").length) {
    var $slider = $(".help_cards_slider");
    var $progressBar = $(".help_cards_slider_progressbar");
    var $progressBarLabel = $(
      ".help_cards_slider_progressbar .slider__label"
    );

    $slider.on(
      "beforeChange",
      function (event, slick, currentSlide, nextSlide) {
        var calc = (nextSlide / (slick.slideCount - 1)) * 100;

        $progressBar
          .css("background-size", calc + "% 100%")
          .attr("aria-valuenow", calc);

        $progressBarLabel.text(calc + "% completed");
      }
    );

    $(".help_cards_slider").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      speed: 300,
      infinite: true,
      autoplaySpeed: 5000,
      autoplay: true,
      centerMode: false,
      prevArrow: $(".help_cards_slider_custom_arrow_next"),
      nextArrow: $(".help_cards_slider_custom_arrow_prev"),
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
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
  

  if ($(".our_produc_design_success_slider").length) {
    var $slider = $(".our_produc_design_success_slider");
    var $progressBar = $(".our_produc_design_success_slider_progressbar");
    var $progressBarLabel = $(
      ".our_produc_design_success_slider_progressbar .slider__label"
    );

    $slider.on(
      "beforeChange",
      function (event, slick, currentSlide, nextSlide) {
        var calc = (nextSlide / (slick.slideCount - 1)) * 100;

        $progressBar
          .css("background-size", calc + "% 100%")
          .attr("aria-valuenow", calc);

        $progressBarLabel.text(calc + "% completed");
      }
    );

    $(".our_produc_design_success_slider").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      speed: 300,
      infinite: true,
      autoplaySpeed: 5000,
      autoplay: true,
      centerMode: false,
      prevArrow: $(".our_product_design_successـcustom_arrow_next"),
      nextArrow: $(".our_product_design_successـcustom_arrow_prev"),
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 3,
          },
        },
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


  if ($(".custom_our_blog_slider").length) {
    var $slider = $(".custom_our_blog_slider");
    var $progressBar = $(".custom_our_blog_slider_progressbar");
    var $progressBarLabel = $(
      ".custom_our_blog_slider_progressbar .slider__label"
    );

    $slider.on(
      "beforeChange",
      function (event, slick, currentSlide, nextSlide) {
        var calc = (nextSlide / (slick.slideCount - 1)) * 100;

        $progressBar
          .css("background-size", calc + "% 100%")
          .attr("aria-valuenow", calc);

        $progressBarLabel.text(calc + "% completed");
      }
    );

    $(".custom_our_blog_slider").slick({
      slidesToShow: 5.1,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      speed: 300,
      infinite: true,
      autoplaySpeed: 5000,
      autoplay: true,
      centerMode: false,
      prevArrow: $(".custom_our_blog_custom_arrow_next"),
      nextArrow: $(".custom_our_blog_custom_arrow_prev"),
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 4.1,
          },
        },
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

  if($(".what_you_get_with_slider").length){
    $(".what_you_get_with_slider").slick({
      slidesToShow: 6.1,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      speed: 300,
      infinite: true,
      autoplaySpeed: 5000,
      autoplay: true,
      centerMode: false,
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 5.1,
          },
        },
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
    })
  }


  if($(".what_our_clients_say_slider").length){
    $(".what_our_clients_say_slider").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      speed: 300,
      infinite: true,
      autoplaySpeed: 5000,
      autoplay: true,
      centerMode: true,
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    })
  }

  if($(".sunstan_our_partners_slider").length){
    $(".sunstan_our_partners_slider").slick({
      slidesToShow: 4.2,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      speed: 300,
      infinite: true,
      autoplaySpeed: 5000,
      autoplay: true,
      centerMode: true,
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    })
  }


  // sunstan_our_partners_erp_slider
  if($(".sunstan_our_partners_erp_slider").length){
    $(".sunstan_our_partners_erp_slider").slick({
      slidesToShow: 7,
      slidesToScroll: 1,
      arrows: false,
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
    })
  }


  if($(".contact_us_section").length){
    $(".contact_us_section #imageInput").on('change', function(e){
      var fname = e.target.files[0].name;
      $(this).parent().find('.file_name').text(fname);
    })
  }

});

// $(window).on("load", function () {
//   $("html").removeClass("splash-active");
//   $(".splashscreen").addClass("splashscreen_none");
// });
