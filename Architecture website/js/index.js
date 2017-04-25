$(document).ready(function() {
alert ("hello");

$(".newconstructionlogo").hover(function(){
    $(this).addClass("animated rotateIn");
  });

  $(".newconstructionlogo").mouseleave(function(){
    $(this).removeClass("animated rotateIn");
  });

  $(".landsurveyinglogo").hover(function(){
    $(this).addClass("animated rotateIn");
  });

  $(".landsurveyinglogo").mouseleave(function(){
    $(this).removeClass("animated rotateIn");
  });

  $(".constructadminlogo").hover(function(){
    $(this).addClass("animated bounce");
  });

  $(".constructadminlogo").mouseleave(function(){
    $(this).removeClass("animated bounce");
  });

  $(".renovationlogo").hover(function(){
    $(this).addClass("animated bounce");
  });

  $(".renovationlogo").mouseleave(function(){
    $(this).removeClass("animated bounce");
  });

});