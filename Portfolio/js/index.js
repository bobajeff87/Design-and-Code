$(document).ready(function () {
  $(".designer").addClass("animated fadeInRight");
  $(".developer").addClass("animated fadeInLeft");
  $(".creator").addClass("animated fadeInRight");

  $(".app").addClass("animated bounceInUp").css("transition-duration", "2s");
  $(".explore").addClass("animated zoomIn");

  $(".app").hover(function(){
    $(this).addClass("animated bounce");
  });

  $(".explore").hover(function(){
    $(this).addClass("animated bounce");
  });

});
