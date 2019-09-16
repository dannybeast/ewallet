/* eslint-disable */
import {
    TimelineLite
} from 'gsap';
import {
    posChecker
} from './posChecker';

// animation
document.addEventListener("DOMContentLoaded", () => {
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
                let loader = document.querySelector('.loader');
                loader.remove();

                if ($('.header').length) {
                    posChecker('.header', tl_header);
                }
                if ($('.intro').length) {
                    posChecker('.intro', tl_intro);
                }
                if ($('.advantages').length) {
                    posChecker('.advantages', tl_advantages);
                }
                if ($('.watch').length) {
                    posChecker('.watch', tl_watch);
                }
                if ($('.about').length) {
                    posChecker('.about', tl_about);
                }
                if ($('.top100').length) {
                    posChecker('.top100', tl_top100);
                }
                if ($('.coming').length) {
                    posChecker('.coming', tl_coming);
                }
                if ($('.apps').length) {
                    posChecker('.apps', tl_apps);
                }
                if ($('.page-intro').length) {
                    posChecker('.page-intro', tl_pIntro);
                }
                if ($('.form').length) {
                    posChecker('.form', tl_form);
                }
                if ($('section.typography').length) {
                    posChecker('.section.typography', tl_sTypography);
                }
                if ($('.contact-items').length) {
                    posChecker('.contact-items', tl_cItems);
                }
            }
        })
});
//-

// animation header
var tl_header = new TimelineLite({
    paused: true
});
tl_header
    .fromTo('.header__row', 0.15, {
        opacity: 0,
        y: -5,
    }, {
        opacity: 1,
        y: 0
    })
// animation intro
var tl_intro = new TimelineLite({
    paused: true,
});
tl_intro
    .fromTo('.intro-slide', 0.7, {
        opacity: 0,
    }, {
        opacity: 1,
        ease: Power2.easeInOut
    })
    .fromTo('.intro__subtitle', 0.3, {
        opacity: 0,
        y: -5
    }, {
        y: 0,
        opacity: 1
    })
    .fromTo('.intro__title', 0.3, {
        opacity: 0,
        y: -5
    }, {
        y: 0,
        opacity: 1
    })
    .fromTo('.intro__buttons, .intro__mouse', 0.3, {
        opacity: 0,
        y: -5
    }, {
        y: 0,
        opacity: 1
    })

// animation advantages
var tl_advantages = new TimelineLite({
    paused: true
});
tl_advantages
    .fromTo('.advantages .section-title', 0.5, {
        opacity: 0
    }, {
        opacity: 1
    })
    .staggerFromTo('.advantages__col', 1, {
        y: -5,
        opacity: 0
    }, {
        y: 0,
        opacity: 1
    }, 0.15)

// animation watch
var tl_watch = new TimelineLite({
    paused: true
});
tl_watch
    .fromTo('.watch__title', 0.5, {
        opacity: 0
    }, {
        opacity: 1
    })
    .fromTo('.watch__buttons', 0.5, {
        y: -5,
        opacity: 0
    }, {
        y: 0,
        opacity: 1
    })
// animation about
var tl_about = new TimelineLite({
    paused: true
});
tl_about
    .fromTo('.about .section-title', 0.5, {
        opacity: 0
    }, {
        opacity: 1
    })
    .staggerFromTo('.about__col', 1, {
        y: -5,
        opacity: 0
    }, {
        y: 0,
        opacity: 1
    }, 0.15)
// animation top100
var tl_top100 = new TimelineLite({
    paused: true
});
tl_top100
    .fromTo('.top100 .section-title', 0.5, {
        opacity: 0
    }, {
        opacity: 1
    })
    .fromTo('.top100__imac', 0.8, {
        y: -5,
        opacity: 0
    }, {
        y: 0,
        opacity: 1
    })
// animation coming
var tl_coming = new TimelineLite({
    paused: true
});
tl_coming
    .fromTo('.coming__title', 0.5, {
        opacity: 0
    }, {
        opacity: 1
    })
    .fromTo('.coming__image', 0.5, {
        y: -5,
        opacity: 0
    }, {
        y: 0,
        opacity: 1
    })
    .fromTo('.coming__text', 0.5, {
        y: -5,
        opacity: 0
    }, {
        y: 0,
        opacity: 1
    })
// animation apps
var tl_apps = new TimelineLite({
    paused: true
});
tl_apps
    .fromTo('.apps__phone', 0.5, {
        opacity: 0,
        y: 10
    }, {
        opacity: 1,
        y: 0
    })

    .fromTo('.apps .section-title', 0.3, {
        y: -5,
        opacity: 0
    }, {
        y: 0,
        opacity: 1
    })
    .fromTo('.apps__list', 0.3, {
        y: -5,
        opacity: 0
    }, {
        y: 0,
        opacity: 1
    })
    .fromTo('.apps__subtitle', 0.3, {
        y: -5,
        opacity: 0
    }, {
        y: 0,
        opacity: 1
    })
// animation page-intro
var tl_pIntro = new TimelineLite({
    paused: true
});
tl_pIntro
    .staggerFromTo('.page-intro__col', 0.8, {
        y: -5,
        opacity: 0
    }, {
        y: 0,
        opacity: 1
    }, 0.15)
// animation typography section
var tl_sTypography = new TimelineLite({
    paused: true
});
tl_sTypography
    .fromTo('section.typography', 0.5, {
        opacity: 0
    }, {
        opacity: 1
    })
// animation form
var tl_form = new TimelineLite({
    paused: true
});
tl_form
    .fromTo('.form', 0.5, {
        opacity: 0,
        y: -5
    }, {
        opacity: 1,
        y: 0
    })
// animation contact-items
var tl_cItems = new TimelineLite({
    paused: true
});
tl_cItems
    .staggerFromTo('.contact-items__col', 0.8, {
        y: -5,
        opacity: 0
    }, {
        y: 0,
        opacity: 1
    }, 0.15)
/* eslint-enable */