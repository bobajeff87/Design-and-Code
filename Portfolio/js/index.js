$(document).ready(function () {

  // header animations

  $(".designer").addClass("animated fadeInRight");
  $(".developer").addClass("animated fadeInLeft");
  $(".creator").addClass("animated fadeInRight");

$(".app").addClass("animated bounceInUp").css("transition-duration", "2s");
  $(".explore").addClass("animated bounceInDown");

  $(".jqicon").hover(function() {
    $(this).addClass("animated tada");
  });

  $(".jsicon").hover(function() {
    $(this).addClass("animated tada");
  });

  $(".cssicon").hover(function() {
    $(this).addClass("animated tada");
  });

  $(".app").hover(function() {
    $(this).addClass("animated flipInY");
  });

  // var appTest = document.getElementsByClassName('app');

  // appTest.onmouseover().addClass("animated fadeInLeft");

//  $('.second').on('inview', function(event, isInView) {
//  if (isInView) {
//  } else {
    // element has gone out of viewport
//  }
//});

});
