$(function(){


    // Fixed header
    let header = $('#header');
    let intro = $('#intro');
    // Высота
    let introH = intro.innerHeight();
    //Позиция скролла
    let scrollPos = $(window).scrollTop();

    //Navigations
    let nav = $('#nav');
    let navToggle = $('#navToggle');

    checkScroll(scrollPos, introH);

    $(window).on('scroll resize', function() {
        // Высота
        introH = intro.innerHeight();
        //Позиция скролла
        scrollPos = $(this).scrollTop();

        checkScroll(scrollPos, introH);

        // console.log(introH);
        // console.log(scrollPos);
    }); 

    function checkScroll(scrollPos, introH) {
        if(scrollPos > introH) {
            header.addClass('fixed');
        }
        else {
            header.removeClass('fixed');
        }
    }


    // Smooth scroll
    $('[data-scroll]').on('click', function(event) {
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

        nav.removeClass('show');
        
        // console.log(elementOffset);

        $(' html, body').animate({
            scrollTop: elementOffset - 50
        }, 500);
    });
    
    
    // Nav Toggle
    $('#navToggle').on('click', function(event) {
        event.preventDefault();

        nav.toggleClass('show');
    });

    // Testimonials https://kenwheeler.github.io/slick/
    let slider = $('#testimonialsSlider');

    slider.slick({
        infinite: true, 
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
    });


}); 