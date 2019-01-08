'use strict';

$(function () {
    $.scrollUp({
        scrollText: '',
    });
});

$('input[type=tel]').mask("+7 (000) 000 00 00");

// Плавный скол с навигации
function scroll(element) {
  element.click(function () {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
    return false;
  });
}

scroll($(".page-header__list-link"))
// scroll($(".scroll-down"))
// scroll($(".page-header__list-link"))

// Плавный скол с навигации


$('.sertificats__list').owlCarousel({
  loop: false,
  margin: 10,
  dots: false,
  nav: false,
  responsive:{
    0:{
      items: 1
    },
    400:{
      items: 2
    },
    768: {
      items: 3
    },
    1200:{
      items: 5
    }
  }
})

// $(".page-header__btn").on("click", function() {
//   $(".page-header__btn").toggleClass("page-header__btn--active");
// })

$(".page-header__btn").on("click", function() {
  $("body").css("overflow", "hidden");
  $(".menu").fadeIn();
})

$(".menu__close").on("click", function() {
  $(".menu").fadeOut();
  $("body").css("overflow", "auto");
})
