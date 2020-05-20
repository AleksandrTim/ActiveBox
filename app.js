$(function(){

    let header = $('#header');
    let intro = $('#intro');
    
    // Высота
    let introH;

    //Позиция скролла
    let scrollPos = $(window).scrollTop();

    $(window).on('scroll load resize', function() {

        // Высота
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        console.log(introH);

        if(scrollPos > introH) {
            header.addClass('fixed');
        }
        else
        {
            header.removeClass('fixed');
        }

        // console.log(scrollPos);

    }); 



}); 