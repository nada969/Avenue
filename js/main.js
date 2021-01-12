$(document).ready(function(){
    
/*button to top*/
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
            $('#return-to-top').fadeIn(200);    // Fade in the arrow
        } else {
            $('#return-to-top').fadeOut(200);   // Else fade out the arrow
        }
    });
    $('#return-to-top').click(function() {      // When arrow is clicked
        $('body,html').animate({
            scrollTop : 0                       // Scroll to top of body
        }, 500);
    });

/*location*/
    $("button.london-btn").click(function(){
        $("#london").toggle(1000);
        $("#Paris").hide();
        $("#New-York").hide();
    });
    $("button.New-York-btn").click(function(){
        $("#New-York").toggle(2000);
        $("#london").hide();
        $("#Paris").hide();
    });
    $("button.Paris-btn").click(function(){
        $("#Paris").toggle(2000);
        $("#london").hide();
        $("#New-York").hide();
    });

/*wow scroll*/
    new WOW(
        {}   
    ).init();

/*owl-carousel*/
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        loop:true,
        nav:true,
        margin:10,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },            
            960:{
                items:3
            }
        }
    });
    owl.on('mousewheel', '.owl-stage', function (e) {
        if (e.deltaY>0) {
            owl.trigger('next.owl');
        } else {
            owl.trigger('prev.owl');
        }
        e.preventDefault();
    });

/*loading page*/
    $(window).on("load",function(){
        $(".loading-page")
        .fadeOut(2000 , function(){
            $("body").css("overflow" , "auto");
            $("this").fadeOut(1500 , function(){
                $(this).remove();
            })
        })
    })

/*nav2*/
    var nav2 = document.getElementById('nav2');

    $(window).on("scroll", function() {
        if($(window).scrollTop()) {
            nav2.style.position="fixed";
            nav2.style.top="0";
            nav2.style.zIndex="99999";
            nav2.style.borderBottom="1px solid #777474";
        }
        else {
            nav2.style.position="relative";
            nav2.style.zIndex="0";
        }
    })
});