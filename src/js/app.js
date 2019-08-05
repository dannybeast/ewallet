// vendors
import 'lazyload/lazyload.min';
import '@fancyapps/fancybox';

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

});
