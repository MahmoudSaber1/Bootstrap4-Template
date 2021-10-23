$(function () {
    'use strick';
    //! Adjast Height header
    let winH    = $(window).height(),
        navH    = $(".navigation").innerHeight();


    $(".slider, .carousel-item").height(winH - navH);

    //! featuerd shuffel
    $(".featured ul li").on("click", function () {
        $(this).addClass("active").siblings().removeClass("active");

        if ($(this).data("class") === "all") {
            $(".shuffel-imgs .col-md").css("opacity",1)
        }else {
            $(".shuffel-imgs .col-md").css("opacity",".08");
            $($(this).data("class")).parent().css("opacity",1);
        }
    });

});

$(document).ready(function(){
    $(".loader").fadeOut("slow");

    $(window).scroll(function() {
        if($(this).scrollTop() > 40) {
            $("#topBtn").fadeIn("slow");
        } else {
            $("#topBtn").fadeOut("slow");
        }
    });

    $("#topBtn").click(function(){
        $("html, body").animate({scrollTop : 0}, 500);
    });
});