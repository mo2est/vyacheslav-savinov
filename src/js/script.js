$(document).ready(function(){
  $('.promo-slider').slick({
    dots: true,
    infinite: true,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    cssEase: 'linear',
    appendDots: $('.slick-slider-dots'),
    prevArrow: '<button type="button" class="slick-prev"><img src="icons/slider-arrow-left.svg"></img></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="icons/slider-arrow-right.svg"></img></button>',
  });
  
  new WOW().init();

});