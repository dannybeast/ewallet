import './components/ieDetect';
import 'svgxuse';
import { TimelineMax } from 'gsap';


let tl = new TimelineMax();

tl
    .fromTo('.loader__inside', 1, { scale: 0, opacity: 0 }, {
        scale: 1,
        opacity: 1,
        onComplete: function() {
            $('.loader').remove();
        }
    })

.fromTo('.header-top', 0.2, { opacity: 0 }, { opacity: 1 })
    .fromTo('.header-intro__title', 0.3, { x: -50, opacity: 0 }, { x: 0, opacity: 1 })
    .fromTo('.header-intro__desc', 0.3, { x: -50, opacity: 0 }, { x: 0, opacity: 1 })
    .fromTo('.header-intro .buttons', 0.3, { opacity: 0 }, { opacity: 1 })
    .fromTo('.header-intro__pic', 1, { opacity: 0 }, { opacity: 1 })