$(function () {

    $("#hide").click(function () {

        $(".box").hide(1000);
    })


    $("#show").click(function () {

        $(".box").show(1000);
    })


    $("#hide_show").click(function () {

        $(".box").toggle(1500);

    })

    $("#slideUp").click(function () {

        $(".box_one ").slideUp(2000);
    })

    $("#slideDown").click(function () {

        $(".box_one").slideDown(2000);
    })

    $("#slideUpDown").click(function () {

        $(".box_one").slideToggle(2000);
    })

    $("#fadeIn").click(function () {

        $(".box_two").fadeIn(2000);
    })

    $("#fadeOut").click(function () {

        $(".box_two").fadeOut(2000);
    })


    $("#fadeInOut").click(function () {

        $(".box_two").fadeToggle(2000);
    })


    $("#imageAso").click(function (){

    $(".box_two").addClass("Senary");
}) 

$("#imageJao").click(function (){

    $(".box_two").removeClass("Senary");
}) 


})