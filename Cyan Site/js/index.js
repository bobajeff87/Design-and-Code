$(document).ready(function() {
    $('.main-menu').hover(function() {
        $('.drop-menu').css("visibility", "visible");
    })
    $('.main-menu').mouseleave(function() {
        $('.drop-menu').css("visibility", "hidden");
    })
});