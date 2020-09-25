$(document).ready(function(){
    $('#world-slider').slick({
        centerMode: true,
        variableWidth: true,
        infinite: true,
        slidesToShow: 2
      });

      $('#choice-slider').slick({
        infinite: false,
        slidesToShow: 2.8
      });

    $( window ).resize(function()  {
        var windowWidth = $( window ).width();
        if (windowWidth <= 376) {
            console.log('mobileBreak')
        }
    });

    $('.js-menuToggleClass').click(function() {
      $('.js-menu').toggleClass('open');
      $('.js-header').toggleClass('menu-open');
    });
});