// vendors
import 'lazyload/lazyload.min';
import '@fancyapps/fancybox';
import './lib/jquery-ui.min';

// polyfills
import 'svgxuse';

// components
import './components/ieDetect';
import './components/animations';
import './components/navigation';
import './components/supports';

// main
$(document).ready(function () {
  $('img[data-src]').lazyload();

  // modal window
  $('.js-modal').fancybox();
  //-

  // accordion
  $('.js-accordion').accordion({
    header: '> div > h4',
    collapsible: true,
    active: false,
    heightStyle: 'content'
  });
  //-
});
