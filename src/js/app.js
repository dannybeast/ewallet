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


  // show password
  $('.js-show-password').click(function (e) {
    const input = $(this).parent().children('input');
    e.preventDefault();
    if (input.attr('type') === 'text') {
      $(this).parent().children('input').attr('type', 'password');
      $(this).removeClass('active');
    } else {
      $(this).parent().children('input').attr('type', 'text');
      $(this).addClass('active');
    }
  });
  //-

});
