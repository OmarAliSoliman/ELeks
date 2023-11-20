$(document).ready(function () {
  var currentDir = $("body").css("direction");
  console.log(currentDir);

  if ($(".awards_logo_slider").length) {
    $(".awards_logo_slider").slick({
      slidesToShow: 7,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      speed: 300,
      rtl: currentDir === "rtl" ? true : false,
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
    });
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
      // rtl: currentDir === "rtl" ? true : false,
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
    var $slider1 = $(".what_you_get_slider");
    var $progressBar1 = $(".what_you_get_slider_progressbar");
    var $progressBarLabel1 = $(
      ".what_you_get_slider_progressbar .slider__label"
    );

    $slider1.on(
      "beforeChange",
      function (event, slick, currentSlide, nextSlide) {
        var calc = (nextSlide / (slick.slideCount - 1)) * 100;

        $progressBar1
          .css("background-size", calc + "% 100%")
          .attr("aria-valuenow", calc);

        $progressBarLabel1.text(calc + "% completed");
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
      rtl: currentDir === "rtl" ? true : false,
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
    var $slider2 = $(".blogs_cards_slider");
    var $progressBar2 = $(".blogs_cards_slider_progressbar");
    var $progressBarLabel2 = $(
      ".blogs_cards_slider_progressbar .slider__label"
    );

    $slider2.on(
      "beforeChange",
      function (event, slick, currentSlide, nextSlide) {
        var calc = (nextSlide / (slick.slideCount - 1)) * 100;

        $progressBar2
          .css("background-size", calc + "% 100%")
          .attr("aria-valuenow", calc);

        $progressBarLabel2.text(calc + "% completed");
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
      // rtl: currentDir === "rtl" ? true : false,
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
            slidesToShow: 1.5,
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
    var $slider3 = $(".help_cards_slider");
    var $progressBar3 = $(".help_cards_slider_progressbar");
    var $progressBarLabel3 = $(".help_cards_slider_progressbar .slider__label");

    $slider3.on(
      "beforeChange",
      function (event, slick, currentSlide, nextSlide) {
        var calc = (nextSlide / (slick.slideCount - 1)) * 100;

        $progressBar3
          .css("background-size", calc + "% 100%")
          .attr("aria-valuenow", calc);

        $progressBarLabel3.text(calc + "% completed");
      }
    );

    $(".help_cards_slider").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      speed: 300,
      infinite: true,
      rtl: currentDir === "rtl" ? true : false,
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
    var $slider4 = $(".our_produc_design_success_slider");
    var $progressBar4 = $(".our_produc_design_success_slider_progressbar");
    var $progressBarLabel4 = $(
      ".our_produc_design_success_slider_progressbar .slider__label"
    );

    $slider4.on(
      "beforeChange",
      function (event, slick, currentSlide, nextSlide) {
        var calc = (nextSlide / (slick.slideCount - 1)) * 100;

        $progressBar4
          .css("background-size", calc + "% 100%")
          .attr("aria-valuenow", calc);

        $progressBarLabel4.text(calc + "% completed");
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
      rtl: currentDir === "rtl" ? true : false,
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
    var $slider5 = $(".custom_our_blog_slider");
    var $progressBar5 = $(".custom_our_blog_slider_progressbar");
    var $progressBarLabel5 = $(
      ".custom_our_blog_slider_progressbar .slider__label"
    );

    $slider5.on(
      "beforeChange",
      function (event, slick, currentSlide, nextSlide) {
        var calc = (nextSlide / (slick.slideCount - 1)) * 100;

        $progressBar5
          .css("background-size", calc + "% 100%")
          .attr("aria-valuenow", calc);

        $progressBarLabel5.text(calc + "% completed");
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
      rtl: currentDir === "rtl" ? true : false,
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

  if ($(".what_you_get_with_slider").length) {
    $(".what_you_get_with_slider").slick({
      slidesToShow: 6.1,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      speed: 300,
      infinite: true,
      rtl: currentDir === "rtl" ? true : false,
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
    });
  }

  if ($(".what_our_clients_say_slider").length) {
    $(".what_our_clients_say_slider").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      speed: 300,
      infinite: true,
      autoplaySpeed: 5000,
      // rtl: currentDir === "rtl" ? true : false,
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
    });
  }

  if ($(".sunstan_our_partners_slider").length) {
    $(".sunstan_our_partners_slider").slick({
      slidesToShow: 4.2,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      speed: 300,
      infinite: true,
      rtl: currentDir === "rtl" ? true : false,
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
    });
  }

  // sunstan_our_partners_erp_slider
  if ($(".sunstan_our_partners_erp_slider").length) {
    $(".sunstan_our_partners_erp_slider").slick({
      slidesToShow: 7,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      speed: 300,
      infinite: true,
      autoplaySpeed: 5000,
      rtl: currentDir === "rtl" ? true : false,
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

  if ($(".contact_us_section").length) {
    $(".contact_us_section #imageInput").on("change", function (e) {
      var fname = e.target.files[0].name;
      $(this).parent().find(".file_name").text(fname);
    });
  }

  if ($(".case_study_the_solution_slider").length) {
    $(".case_study_the_solution_slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows: false,
      speed: 300,
      rtl: currentDir === "rtl" ? true : false,
      infinite: true,
      autoplaySpeed: 5000,
      autoplay: true,
    });
  }

  if ($(".office_slider_wrapper_slider").length) {
    var $slider6 = $(".office_slider_wrapper_slider");
    var $progressBar6 = $(".our_ofices_section_slider_progressbar");
    var $progressBarLabel6 = $(
      ".our_ofices_section_slider_progressbar .slider__label"
    );

    $slider6.on(
      "beforeChange",
      function (event, slick, currentSlide, nextSlide) {
        var calc = (nextSlide / (slick.slideCount - 1)) * 100;

        $progressBar6
          .css("background-size", calc + "% 100%")
          .attr("aria-valuenow", calc);

        $progressBarLabel6.text(calc + "% completed");
      }
    );
    $(".office_slider_wrapper_slider").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      speed: 300,
      rtl: currentDir === "rtl" ? true : false,
      infinite: true,
      prevArrow: $(".our_ofices_sectionـcustom_arrow_next"),
      nextArrow: $(".our_ofices_sectionـcustom_arrow_prev"),
      autoplaySpeed: 5000,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 2.2,
            centerMode: true,
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
            centerMode: false,
          },
        },
      ],
    });
  }

  if ($(".testemonial_slider").length) {
    $(".testemonial_slider").slick({
      dots: true,
    });
  }

  if ($(".expand_card").length) {
    $(".expand_card").on("click", function (e) {
      $(this)
        .parent()
        .addClass("active_expand_card")
        .siblings()
        .removeClass("active_expand_card");
    });
  }

  if ($(".devops_process").length) {
    const scrollContainer = document.querySelector(".scroll-container");
    const scrollContent = document.querySelector(".nav");
    const scrollLeftButton = document.querySelector(".scroll-left");
    const scrollRightButton = document.querySelector(".scroll-right");

    let scrollAmount = 200; // Adjust the scroll distance as needed

    scrollLeftButton.addEventListener("click", () => {
      scrollContent.scrollTo({
        left: scrollContent.scrollLeft - scrollAmount,
        behavior: "smooth", // You can change to 'auto' for instant scrolling
      });
    });

    scrollRightButton.addEventListener("click", () => {
      scrollContent.scrollTo({
        left: scrollContent.scrollLeft + scrollAmount,
        behavior: "smooth", // You can change to 'auto' for instant scrolling
      });
    });
  }

  AOS.init();
});

// document.addEventListener("DOMContentLoaded", () => {

// });
var overlay = document.querySelector(".splashoverlay"),
  loader = document.querySelector(".overlay-loader"),
  overlayTL = new TimelineMax(),
  loaderTL = new TimelineMax();

var animateOut = function () {
  overlayTL.to(overlay, 0.6, {
    bottom: "100%",
    ease: Power4.easeInOut,
    height: 0,
    delay: 0.25,
  });
  loaderTL.to(loader, 0.5, { y: "-40", opacity: 0 });
  gsap.to(counter, 0.5, { y: "-40", opacity: 0 });
};

// counter loading page
var Cont = { val: 0 },
  NewVal = 100;

TweenLite.to(Cont, 15, {
  val: NewVal,
  roundProps: "val",
  onUpdate: function () {
    document.getElementById("counter").innerHTML = Cont.val;
  },
});

$(window).on("load", function () {
  var currentDir = $("body").css("direction");
  setTimeout(() => {
    animateOut();
  }, 2000);
  new Mmenu("#menu", {
    offCanvas: {
      slidingSubmenus: false,
      position: currentDir == "rtl" ? "left-front" : "right-front"
    },
    theme: "light",
    counters: {
      add: true,
    },
  });
});

$(window).on("load", function () {
  // $("html").removeClass("splash-active");
  // $(".splashscreen").addClass("splashscreen_none");


});
