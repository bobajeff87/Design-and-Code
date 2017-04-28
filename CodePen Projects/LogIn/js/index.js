$(document).ready(function() {

  
  $(".username").click(function() {
    $(".glyphicon-user-on").toggle(".glyphicon-user-off");
    $(".glyphicon-user-on").css("color", "blue");
  });
  
  $(".password").click(function() {
    $(".glyphicon-info-sign").css("color", "blue");
  });
  
});