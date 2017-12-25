
// Toggle project information
$(document).ready(function(){
    $(".project-click").each(function(){
        $( this ).click(function(){
            console.log($(this).children()[1])
            $(this).children(".recent-projects-content").slideToggle("slow");
        })
    });
});

// Buttons
$("#projects").click(function() {
    $('html, body').animate({
        scrollTop: $(".recent-projects-area").offset().top
    }, 1000);
});

$("#contacts").click(function() {
    $('html, body').animate({
        scrollTop: $(".contacts").offset().top
    }, 1000);
});

// Bouncing arrow fade out
$(window).scroll(function() {
    if ($(this).scrollTop()>0)
    {
        $('.arrow-graphic').fadeOut();
    }
    else
    {
        $('.arrow-graphic').fadeIn();
    }
});
