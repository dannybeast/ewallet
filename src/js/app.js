// vendors
import 'lazyload/lazyload.min';
import './lib/jquery-ui.min';
import './lib/scrollbar/jquery.scrollbar.min';
import 'slick-slider';
import 'jquery.inputmask/dist/jquery.inputmask.bundle';

// polyfills
import 'svgxuse';


// Маски
$('.js-mask-code').inputmask('mask', {
  'mask': '999999',
  'placeholder': '______'
});

// components
import './components/ieDetect';
import './components/animations';
import './components/navigation';
import './components/supports';
import './components/modals';
import './components/language-module';
import './components/custom-modal';
import './components/code';
import './components/scrollTo';
import {
  showSuccess,
  showError
} from './components/notice';

// main
$(document).ready(function () {
  $('img[data-src]').lazyload();

  // accordion
  $('.js-accordion').accordion({
    header: '> div > h4',
    collapsible: true,
    active: false,
    heightStyle: 'content'
  });
  //-

  //
  $(".js-coming-app").each(function () {
    let text = '<span class="coming-text">COMING SOON</span>';
    $(this).append(text);
  });
  $(".js-coming-app").click(function (e) {
    e.preventDefault();
    let text = $(this).children('.coming-text');
    text.addClass('show');
  });
  //-

  // js-about-carousel
  $('.js-about-carousel').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    prevArrow: $('.about .arrow-prev'),
    nextArrow: $('.about .arrow-next'),
    responsive: [{
      breakpoint: 992,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 767,
      settings: {
        slidesToShow: 1
      }
    }]
  });
  //-

  //
  $('.notebook__slider').slick({
    fade: true,
    autoplay: true,
    pauseOnHover: false,
    speed: 800,
    arrows: false
  });
  //-

  // mobile menu
  $('.menu-button').click(function () {
    $('body').toggleClass('overflow-bg');
    $(this).toggleClass('open');
    $('.mobile-menu').toggleClass('open');
  });
  //-

  // scrollbar
  $('.js-scrollbar').scrollbar();
  //-


  // intro slider
  $('.slider-left').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    vertical: true,
    infinite: false,
    asNavFor: '.slider-right',
    prevArrow: $('.intro-slide .arrow-prev'),
    nextArrow: $('.intro-slide .arrow-next')
  });
  $('.slider-right').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    arrows: false,
    asNavFor: '.slider-left'
  });
  //-

});