$(document).ready(function() {
    // alert ("hello");

    $(".newconstructionlogo, .landsurveyinglogo").hover(function() {
        $(this).addClass("animated rotateIn");
    });

    $(".newconstructionlogo, .newconstruction, .landsurveyinglogo").mouseleave(function() {
        $(this).removeClass("animated rotateIn");
    });

    $(".constructadminlogo, .renovationlogo").hover(function() {
        $(this).addClass("animated tada");
    });

    $(".constructadminlogo, .renovationlogo").mouseleave(function() {
        $(this).removeClass("animated bounce");
    });

    $(".newconstruction, .newconstructionlogo").hover(function() {
        $(".newconstructiondesc").css("visibility", "visible");
    })

    $(".newconstruction, .newconstructionlogo").mouseleave(function() {
        $(".newconstructiondesc").css("visibility", "hidden");
    })

    $(".landsurveying, .landsurveyinglogo").hover(function() {
        $(".landsurveyingdesc").css("visibility", "visible");
    })

    $(".landsurveying, .landsurveyinglogo").mouseleave(function() {
        $(".landsurveyingdesc").css("visibility", "hidden");
    })

    $(".constructadmin, .constructadminlogo").hover(function() {
        $(".constructadmindesc").css("visibility", "visible");
    })

    $(".constructadmin, .constructadminlogo").mouseleave(function() {
        $(".constructadmindesc").css("visibility", "hidden");
    })

    $(".renovation, .renovationlogo").hover(function() {
        $(".renovationdesc").css("visibility", "visible");
    })

    $(".renovation, .renovationlogo").mouseleave(function() {
        $(".renovationdesc").css("visibility", "hidden");
    })


});