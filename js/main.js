$(document).ready(function() {
    $(".button").click(function(){
        $(".collapse").toggleClass("verborgen");
        $(this).hide();
    });
    $(".closebutton").click(function(){
        $(".nieuwsbrief").show();
        $(".collapse").toggleClass("verborgen");
        });
});