;(function ($) {

    "use strict";
        /* ---------------------------------------------
        Mobile Menu Active
        --------------------------------------------- */
        $('.mainmenu').slicknav({
            prependTo: '.mobile-menu',
            duration: 550,
        });
    
       /* ---------------------------------------------
        Sticky Header
        --------------------------------------------- */ 
        var mainmenuarea = $(window);
        var sticky = $('#header');

        mainmenuarea.on('scroll', function () {
            if (mainmenuarea.scrollTop() > 100) {
                sticky.addClass('sticky-header');
            } else {
                sticky.removeClass('sticky-header');
            }
        });
        /* ---------------------------------------------
         menu scrolling
         --------------------------------------------- */
        jQuery('.scroll-animite').on('click', function(e){
            var jump = $(this).attr('href');
            var new_position = $(jump).offset();
            $('html, body').stop().animate({ scrollTop: new_position.top }, 400);
            e.preventDefault();
        });
    
        /* ---------------------------------------------
         add/remove active class in nav
         --------------------------------------------- */
        $(function(){
            $('.mainmenu li').on('click', function(){
                $('.mainmenu li').removeClass('active');
                $(this).addClass('active');
            });
        });
    
        // WOW active
        new WOW().init();
        
          $('#toggle').click(function() {
           $(this).toggleClass('active');
           $('#overlay').toggleClass('open');
          });

        /* ---------------------------------------------
        Brand Carousel
        --------------------------------------------- */ 
        $(".ournet-testimonial-carousel").owlCarousel({
            nav: false,
            items:1,
            loop: true,
            dots: false,
            center:true,
            autoplay: false,
            autoplayTimeout: 4000,
            smartSpeed: 1200,
        });
        /* ---------------------------------------------
        window When Loading
        --------------------------------------------- */
        var $window = $(window);
        $window.on("load",function (){
            // Preloader
            $(".ournet-preloader").fadeOut(500);
        });
        

})(jQuery);