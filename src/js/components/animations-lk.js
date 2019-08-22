/* eslint-disable */
import {
  TimelineLite
} from 'gsap';
import {posChecker} from './posChecker';
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

        if ($('.lk-section').length) {
       
          tl_lk_section.play();
        }

      }
    })
})
//-

// animation header-intro
if ($('.lk-section').length){
  var tl_lk_section = new TimelineLite({paused:true}); 
  tl_lk_section
      .staggerFromTo('.lk-section', 0.5, { y:-10, opacity: 0 }, { y:0, opacity: 1 }, 0.1)
  }
  //-