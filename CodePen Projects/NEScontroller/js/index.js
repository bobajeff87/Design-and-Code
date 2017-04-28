$(document).ready(function() {

    var alert = $("h2").addClass("animated flash");

    alert;

    $(".a-button").mouseenter(function() {
        $(this).addClass("animated bounceIn");
    })

    $(".b-button").hover(function() {
        $(this).addClass("animated bounceIn");
    })

    $(".startbutton").click(function() {
        $(".MBbackground").css("visibility", "visible");
    })

    $(".MBbackground").click(function() {
        $(".smbintro").css("visibility", "visible");
    })

    $(".smbintro").click(function() {
        $(".smbintro, .MBbackground").css("visibility", "hidden");
    })

});

alert++;