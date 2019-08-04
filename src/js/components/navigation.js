$(document).ready(function () {

  // show
  $('.navigation__button').click(function () {
    $('body').addClass('overflow');
    $('.header').addClass('is-show-menu');
    $('.navigation').addClass('is-show-menu');
  });

  // close
  $('.navigation__close').click(function () {
    $('body').removeClass('overflow');
    $('.header').removeClass('is-show-menu');
    $('.navigation').removeClass('is-show-menu');
  });
  //-

});
