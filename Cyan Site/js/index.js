$(document).ready(function() {
    $('.main-menu').hover(function() {
        $('.main-drop-menu').css("visibility", "visible");
    })
    $('.main-menu').mouseleave(function() {
        $('.main-drop-menu').css("visibility", "hidden");
    })
    $('.work-about').hover(function() {
        $('.work-about-drop').css("visibility", "visible");
    })
    $('.work-about').mouseleave(function() {
        $('.work-about-drop').css("visibility", "hidden");
    })
});