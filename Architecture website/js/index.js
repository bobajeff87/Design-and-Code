$(document).ready(function() {
    // alert ("hello");

    $(".newconstructionlogo, .newconstruction").hover(function() {
        $(".newconstructionlogo").addClass("animated rubberBand");
    });
    
    $(".newconstructionlogo, .newconstruction").mouseleave(function() {
        $(".newconstructionlogo").removeClass("animated rubberBand");
    });

    $(".landsurveyinglogo, .landsurveying").hover(function() {
        $(".landsurveyinglogo").addClass("animated rubberBand");
    });

    $(".landsurveyinglogo, .landsurveying").mouseleave(function() {
        $(".landsurveyinglogo").removeClass("animated rubberBand");
    });

    $(".constructadminlogo, .constructadmin").hover(function() {
        $(".constructadminlogo").addClass("animated rubberBand");
    });

    $(".constructadminlogo, .constructadmin").mouseleave(function() {
        $(".constructadminlogo").removeClass("animated rubberBand");
    });

    $(".renovationlogo, .renovation").hover(function() {
        $(".renovationlogo").addClass("animated rubberBand");
    });

    $(".renovationlogo, .renovation").mouseleave(function() {
        $(".renovationlogo").removeClass("animated rubberBand");
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