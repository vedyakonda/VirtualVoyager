$(document).ready(function() {
  var overlayVisible = false; // Flag to track if overlay content is visible

  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var computerTop = $('.scroll-image').offset().top;
    var overlayContent = $('.scroll-overlay');
    var windowHeight = $(window).height();
    var computerHeight = $('.scroll-image').outerHeight();

    if (scroll > computerTop - windowHeight && scroll < computerTop + computerHeight) {
      // Check if overlay is not already visible
      if (!overlayVisible) {
        overlayContent.css({
          position: 'absolute',
          top: computerTop + computerHeight + 'px',
          visibility: 'visible' // Show overlay content
        });
        overlayVisible = true; // Set flag to true
      }
    } else {
      // Check if overlay is currently visible
      // if (overlayVisible) {
      //   overlayContent.css({
      //     position: 'sticky',
      //     top: 0,
      //     visibility: 'hidden' // Hide overlay content
      //   });
      //   overlayVisible = false; // Set flag to false
      // }
    }
  });

  // Trigger scroll event to initialize visibility
  $(window).trigger('scroll');
});
