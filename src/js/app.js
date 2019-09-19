// vendors
import 'lazyload/lazyload.min';
import './lib/jquery-ui.min';
//import './lib/scrollbar/jquery.scrollbar.min';
import 'slick-slider';
//import 'jquery.inputmask/dist/jquery.inputmask.bundle';

// polyfills
import 'svgxuse';

// components
import './components/ieDetect';
import './components/animations';
import './components/supports';
import './components/modals';
import './components/custom-modal';
import './components/scrollTo';
import {
  showSuccess,
  showError
} from './components/notice';


// Маски
// $('.js-mask-code').inputmask('mask', {
//   'mask': '999999',
//   'placeholder': '______'
// });

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


});