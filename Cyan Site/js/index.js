$(document).ready(function() {
    $('.menu').click(function() {
        $('.main-ul').css("visibility", "visible");
    })
    $('.menu').focusout(function() {
        $('.main-ul').css("visibility", "hidden");
    })
});