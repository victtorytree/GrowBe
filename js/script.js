$( ".menu-button" ).click(function() {
    $('.navigation__list').toggleClass( "menu_active" );
  });

$(document).ready(function(){
  $(".s-clients__row").owlCarousel( {
    loop: true,
    smartSpeed: 700,
    dots: true,
    dotsEach: true,
    startPosition: 1,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2,
        },
        1000:{
            items:3.2
        }
    },
    autoHeight: true
  });
  $(".s-news__row").owlCarousel( {
    loop: true,
    smartSpeed: 700,
    dots: true,
    dotsEach: true,
    startPosition: 1,
    responsive:{
        0:{
            items:1
        },
        900:{
            items:2
        },
        1200:{
            items:2.4
        }
    },
  });

});