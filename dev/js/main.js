$(document).ready(function(){
    $("#owl-demo").owlCarousel({
        center: true,
        items: 2,
        loop: true,
        margin: 100,
        responsive:{
            600:{
                items: 4
            }
        }
    });
});