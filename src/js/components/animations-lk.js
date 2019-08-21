/* eslint-disable */
import {
  TimelineLite
} from 'gsap';

// animation loader
$(window).on('load', function () {
  var tl_loader = new TimelineLite();
  tl_loader
    .fromTo('.loader__inside', 0.3, {
      y: 0,
      opacity: 1
    }, {
      y: -10,
      opacity: 0
    })
    .fromTo('.loader', 0.6, {
      x: 0,
      opacity: 1
    }, {
      x: 0,
      opacity: 0,
      onComplete: function () {
        $('.loader').remove();

        // if ($('.header-intro').length) {
        //   posChecker('.header', tl_header_intro);
        // }

      }
    })
})
//-
