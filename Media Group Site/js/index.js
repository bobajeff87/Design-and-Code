$(document).ready(function() {

    $(".design").hover(function() {
        $(".popupp").css("visibility", "visible");
    });

    $(".design").mouseleave(function() {
        $(".popupp").css("visibility", "hidden");
    });
});