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


  if($(".what_you_get_slider").length){

    var $slider = $('.what_you_get_slider');
    var $progressBar = $('.what_you_get_slider_progressbar');
    var $progressBarLabel = $( '.what_you_get_slider_progressbar .slider__label' );
    
    $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
      var calc = ( (nextSlide) / (slick.slideCount-1) ) * 100;
      
      $progressBar
        .css('background-size', calc + '% 100%')
        .attr('aria-valuenow', calc );
      
      $progressBarLabel.text( calc + '% completed' );
    });


       


    $(".what_you_get_slider").slick(
      {
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        speed: 300,
        infinite: true,
        autoplaySpeed: 5000,
        autoplay: true,
        centerMode: true,
        prevArrow: $('.custom_arrow_next'),
        nextArrow: $('.custom_arrow_prev'),
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
      }
    )
  }


});

// $(window).on("load", function () {
//   $("html").removeClass("splash-active");
//   $(".splashscreen").addClass("splashscreen_none");
// });
