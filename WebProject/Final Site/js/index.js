$(document).ready(function() {

    $(".design").hover(function() {
        $(".designpopup").css("visibility", "visible");
    });

    $(".design").mouseleave(function() {
        $(".designpopup").css("visibility", "hidden");
    });

    $(".photography").hover(function() {
        $(".photopopup").css("visibility", "visible");
    });

    $(".photography").mouseleave(function() {
        $(".photopopup").css("visibility", "hidden");
    });

    $(".branding").hover(function() {
        $(".brandingpopup").css("visibility", "visible");
    });

    $(".branding").mouseleave(function() {
        $(".brandingpopup").css("visibility", "hidden");
    });
});