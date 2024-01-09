var currentDir = $("body").css("direction");


$(".slider").slick({
  infinite: true,
  arrows: false,
  dots: false,
  autoplay: false,
  fade: false,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1
});

//ticking machine
var percentTime;
var tick;
var time = 0.1;
var progressBarIndex = 0;

$(".progressBarContainer .progressBar").each(function (index) {
  var progress = "<div class='inProgress inProgress" + index + "'></div>";
  $(this).html(progress);
});

function startProgressbar() {
  resetProgressbar();
  percentTime = 0;
  tick = setInterval(interval, 10);
}

function interval() {
  if (
    $(
      '.slider .slick-track div[data-slick-index="' + progressBarIndex + '"]'
    ).attr("aria-hidden") === "true"
  ) {
    progressBarIndex = $('.slider .slick-track div[aria-hidden="false"]').data(
      "slickIndex"
    );
    startProgressbar();
  } else {
    percentTime += 1 / (time + 5);
    $(".inProgress" + progressBarIndex).css({
      width: percentTime + "%"
    });
    if (percentTime >= 100) {
      $(".single-item").slick("slickNext");
      progressBarIndex++;
      if (progressBarIndex > 2) {
        progressBarIndex = 0;
      }
      startProgressbar();
    }
  }
}

function resetProgressbar() {
  $(".inProgress").css({
    width: 0 + "%"
  });
  clearInterval(tick);
}
startProgressbar();
// End ticking machine

$(".item").click(function () {
  clearInterval(tick);
  var goToThisIndex = $(this).find("span").data("slickIndex");
  $(".single-item").slick("slickGoTo", goToThisIndex, false);
  startProgressbar();
});


// set event listener to execute on timeupdate. This gets invoked every ~250ms or so
// $('video#full-vid').on('timeupdate',function() {
//   // use parseInt to round to whole seconds
//   var ct = parseInt(this.currentTime);
//   // only eval once per second inc, since timeupdate pops ~4 times per second
//   if (this.lastTime!=ct) {
//     // if current time is divisible by 10 then an inc of 10s has passed
//     if (ct%10===0) {
//       console.log(ct,'seconds have passed');    
//     }
//   }
//   this.lastTime=ct;
// });

$(".headers_logo .item").on('click', function(){
  const headervideo = $(this).closest(".home_header_slider_container").find("video");
  const videoTime = $(this).attr("data-curreenttime");
  $(headervideo)[0].currentTime = videoTime;
  console.log(headervideo);
  
})