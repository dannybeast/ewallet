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
                    posChecker('.header', tl_header_intro);
                }
                if ($('.advantages').length) {
                    posChecker('.advantages', tl_advantages);
                }
                if ($('.header-intro').length) {
                    posChecker('.how-work', tl_howWork, 0);
                }
                if ($('.target').length) {
                    posChecker('.target', tl_target);
                }
                if ($('.problems').length) {
                    posChecker('.problems', tl_problems);
                }
                if ($('.percent-section').length) {
                    posChecker('.percent-section', tl_percentSection);
                }
                if ($('.reviews').length) {
                    posChecker('.reviews', tl_reviews);
                }
                if ($('.well-being').length) {
                    posChecker('.well-being', tl_wellBeing);
                }
                if ($('.auth').length) {
                    posChecker('.auth', tl_auth);
                }

            }
        })
});
//-

// animation header-intro
var tl_header_intro = new TimelineLite({
    paused: true
});
tl_header_intro
    .fromTo('.header-top', 0.2, {
        opacity: 0
    }, {
        opacity: 1
    })
    .fromTo('.header-intro__title', 0.5, {
        x: -10,
        opacity: 0
    }, {
        x: 0,
        opacity: 1
    })
    .fromTo('.header-intro__desc', 0.2, {
        x: -10,
        opacity: 0
    }, {
        x: 0,
        opacity: 1
    })
    .fromTo('.header-intro .buttons', 0.2, {
        x: -10,
        opacity: 0
    }, {
        x: 0,
        opacity: 1
    })
    .fromTo('.header-intro__pic', 0.1, {
        x: 10,
        opacity: 0
    }, {
        x: 0,
        opacity: 1
    })

// animation advantages
var tl_advantages = new TimelineLite({
    paused: true
});
tl_advantages
    .staggerFromTo('.advantages__col', 0.5, {
        y: -10,
        opacity: 0
    }, {
        y: 0,
        opacity: 1
    }, 0.1)
    .fromTo('.advantages .buttons', 1, {
        opacity: 0
    }, {
        opacity: 1
    })

// animation
var tl_howWork = new TimelineLite({
    paused: true
});
tl_howWork
    .fromTo('.dark-list', 0.5, {
        y: -10,
        opacity: 0
    }, {
        y: 0,
        opacity: 1
    })
    .fromTo('.dark-video', 0.5, {
        y: -10,
        opacity: 0
    }, {
        y: -0,
        opacity: 1
    })
    .fromTo('.sign-module', 0.5, {
        y: -10,
        opacity: 0
    }, {
        y: -0,
        opacity: 1
    })

// animation target
var tl_target = new TimelineLite({
    paused: true
});
tl_target
    .fromTo('.target__media img', 0.5, {
        y: -10,
        opacity: 0
    }, {
        y: 0,
        opacity: 1
    })
    .fromTo('.target__content', 0.5, {
        y: 10,
        opacity: 0
    }, {
        y: 0,
        opacity: 1
    })

// animation problems
var tl_problems = new TimelineLite({
    paused: true
});
tl_problems
    .fromTo('.problems .title', 0.5, {
        x: -10,
        opacity: 0
    }, {
        x: 0,
        opacity: 1
    })
    .staggerFromTo('.problems__col', 0.5, {
        y: -10,
        opacity: 0
    }, {
        y: 0,
        opacity: 1
    }, 0.1)

// animation percent-section
var tl_percentSection = new TimelineLite({
    paused: true
});
tl_percentSection
    .fromTo('.percent-section__count', 0.5, {
        y: 10,
        opacity: 0
    }, {
        y: 0,
        opacity: 1
    })
    .fromTo('.percent-section__text', 0.5, {
        y: -10,
        opacity: 0
    }, {
        y: 0,
        opacity: 1
    })

// animation reviews
var tl_reviews = new TimelineLite({
    paused: true
});
tl_reviews
    .fromTo('.reviews .title', 0.5, {
        opacity: 0
    }, {
        opacity: 1
    })
    .staggerFromTo('.reviews__col', 0.5, {
        y: 10,
        opacity: 0
    }, {
        y: 0,
        opacity: 1
    }, 0.1)
    .fromTo('.reviews__buttons', 0.5, {
        opacity: 0
    }, {
        opacity: 1
    })

// animation reviews
var tl_wellBeing = new TimelineLite({
    paused: true
});
tl_wellBeing
    .fromTo('.circle-item__icon', 0.5, {
        scale: 0.1,
        opacity: 0
    }, {
        scale: 1,
        opacity: 1
    })
    .fromTo('.circle-item__icon img', 0.3, {
        y: -10,
        opacity: 0
    }, {
        y: 0,
        opacity: 1
    })
    .fromTo('.circle-item__desc', 0.3, {
        y: -10,
        opacity: 0
    }, {
        y: 0,
        opacity: 1
    })

// animation auth
var tl_auth = new TimelineLite({
    paused: true
});
tl_auth
    .fromTo('.auth__col--right', 0.5, {
        opacity: 0
    }, {
        opacity: 1
    })
    .fromTo('.auth-module', 0.5, {
        x: -10,
        opacity: 0
    }, {
        x: 0,
        opacity: 1
    })

/* eslint-enable */