$(document).ready(function() {
    $(".nieuwsbrief").click(function(){
        $(".formwrapper").toggleClass("verborgen");
        $(this).hide();
    });
    $(".closebutton").click(function(){
        $(".nieuwsbrief").show();
        $(".formwrapper").toggleClass("verborgen");
        });
});