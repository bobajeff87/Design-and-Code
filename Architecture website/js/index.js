$(document).ready(function() {
    // alert ("hello");

    $(".newconstructionlogo, .landsurveyinglogo").hover(function() {
        $(this).addClass("animated rotateIn");
    });

    $(".newconstructionlogo, .newconstruction, .landsurveyinglogo").mouseleave(function() {
        $(this).removeClass("animated rotateIn");
    });

    $(".constructadminlogo, .constructadmin").hover(function() {
        $(".constructadminlogo").addClass("animated tada");
    });

    $(".constructadminlogo, .constructadmin").mouseleave(function() {
        $(".constructadminlogo").removeClass("animated tada");
    });

    $(".renovationlogo, .renovation").hover(function() {
        $(".renovationlogo").addClass("animated tada");
    });

    $(".renovationlogo, .renovation").mouseleave(function() {
        $(".renovationlogo").removeClass("animated tada");
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