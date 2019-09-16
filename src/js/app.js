// vendors
import 'lazyload/lazyload.min';
import './lib/jquery-ui.min';
import './lib/scrollbar/jquery.scrollbar.min';
import 'slick-slider';
// polyfills
import 'svgxuse';

// components
import './components/ieDetect';
import './components/animations';
import './components/navigation';
import './components/supports';
import './components/modals';
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

  // mobile menu
  $('.menu-button').click(function () {
    $('body').toggleClass('overflow-bg');
    $(this).toggleClass('open');
    $('.mobile-menu').toggleClass('open');
  });
  //-


  $('.js-scrollbar').scrollbar();

  // intro slider
  $('.slider-left').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    vertical: true,
    infinite: false,
    asNavFor: '.slider-right',
    prevArrow: $('.intro-slide__prev'),
    nextArrow: $('.intro-slide__next')
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