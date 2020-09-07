
/*
  
NAVIGATION
// ================================================*/
$(function () {

    $(window).scroll(function () {

        if ($(this).scrollTop() < 50) {
            // hide nav
            
            $("nav").removeClass("mag-top-nav");
            

        } else {
            // show nav
            $("nav").addClass("mag-top-nav");
            
        }
    });
});
$(function () {

    $("a.smooth-scroll").click(function (event) {

        event.preventDefault();

    //    return id pe pohchna
        var section = $(this).attr("href");

        $('html, body').animate({
            scrollTop: $(section).offset().top - 64
        }, 1250, "easeInOutExpo");
    });
});
$(function(){
    
    $(".navbar-collapse ul li a").on("click touch", function(){
       
        $(".navbar-toggle").click();
    });
});





















