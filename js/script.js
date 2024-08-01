$(document).ready(function() {
    $('.header__burger').click(function(event) {
       $('.header__burger,.header__menu').toggleClass('active');
       $('body').toggleClass('lock');
 
    });
 });
 $(".hero__carousel").owlCarousel({
   items: 1,
   // margin: 10,
   autoHeight: true,
   dots: false,
   nav: true,
   navText: false,
   autoplaySpeed: 1000,
   autoplay: true,
   slideSpeed: 2000,
 });