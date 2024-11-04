//  Sticky Header
$(window).scroll(function () {
  var scrolling = $(this).scrollTop();

  if (scrolling > 600) {
    $(".navbar").addClass("sticky_header");
  } else {
    $(".navbar").removeClass("sticky_header");
  }
});

// for mixit up
var containerEl = document.querySelector(".all_projects");

var mixer = mixitup(containerEl);

// Counter up
jQuery(document).ready(function($) {
    $('.counter').counterUp({
        delay: 10,
        time: 3000
    });
});

// Venobox plugins
new VenoBox({
    selector: '.my-video-links',
});

new VenoBox({
    selector: '.my-image-links',
    numeration: true,
    infinigall: true,
    share: true,
    spinner: 'rotating-plane'
});