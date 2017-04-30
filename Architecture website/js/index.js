$(document).ready(function() {
    // alert ("hello");

    $(".newconstructionlogo, .landsurveyinglogo").hover(function() {
        $(this).addClass("animated rotateIn");
    });

    $(".newconstructionlogo, .landsurveyinglogo").mouseleave(function() {
        $(this).removeClass("animated rotateIn");
    });

    $(".constructadminlogo, .renovationlogo").hover(function() {
        $(this).addClass("animated bounce");
    });

    $(".constructadminlogo, .renovationlogo").mouseleave(function() {
        $(this).removeClass("animated bounce");
    });

    $(".newconstruction").hover(function() {
        $(".newconstructiondesc").css("visibility", "visible");
    })

    $(".newconstruction").mouseleave(function() {
        $(".newconstructiondesc").css("visibility", "hidden");
    })


});