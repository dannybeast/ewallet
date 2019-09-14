// vendors
import 'lazyload/lazyload.min';
import './lib/jquery-ui.min';

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


});