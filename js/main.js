$(function() {
    $(window).on("scroll", function() {
      if($(window).scrollTop() > 100) {
        $("nav").addClass("nav-scroll");
      } else {
        $("nav").removeClass("nav-scroll");
      }
    });
  });