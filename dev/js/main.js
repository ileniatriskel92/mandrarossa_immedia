$(document).ready(function(){
    $('#news-slider').slick({
        centerMode: true,
        variableWidth: true,
        infinite: true,
        slidesToShow: 3
      });

      $('#choice-slider').slick({
        infinite: false,
        slidesToShow: 2.3,
        responsive: [{
          breakpoint: 768,
          settings: {
            infinite: false,
            slidesToShow: 1.3,
          }
        }]
      });

    /* $( window ).resize(function()  {
        var windowWidth = $( window ).width();
        if (windowWidth <= 376) {
        }
    }); */

    $('.js-menuToggleClass').click(function() {
      $('.js-menu').toggleClass('open');
      $('.js-header').toggleClass('menu-open');
    });

    $(window).scroll(function() {    
      var scroll = $(window).scrollTop();
      if (scroll >= 500) {
          $('.js-header').addClass('darkHeader');
          $('.js-backHeader').addClass('active');
      } else {
        $('.js-header').removeClass('darkHeader');
        $('.js-backHeader').removeClass('active');
      }
    });
});