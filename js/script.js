// $(document).ready(function () {
//   $(".header__burger").click(function (event) {
//     $(".header__burger,.header__menu").toggleClass("active");
//     $("body").toggleClass("lock");
//   });
// });

$(".hero__carousel").owlCarousel({
   items: 1, // Показать один элемент за раз
   nav: false, // Отключить встроенную навигацию
   dots: false, // Отключить встроенные точки
});

$(document).ready(function() {
   var owl = $('.owl-carousel').owlCarousel({
       items: 1, // Показать один элемент за раз
       nav: false, // Отключить встроенную навигацию
       dots: false, // Отключить встроенные точки
       onInitialized: updateIndicator, // Обновить индикатор при инициализации
       onTranslated: updateIndicator // Обновить индикатор при смене слайда
   });

   // Кастомная навигация
   $('.custom-prev').click(function() {
       owl.trigger('prev.owl.carousel');
   });

   $('.custom-next').click(function() {
       owl.trigger('next.owl.carousel');
   });

   function updateIndicator(event) {
       var totalItems = event.item.count; // Общее количество элементов
       var currentItem = event.item.index + 1; // Текущий индекс элемента + 1 (т.к. индексы начинаются с 0)
       $('.slide-indicator').text(currentItem + '/' + totalItems);
   }
});
