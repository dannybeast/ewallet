function reviewsSlider() {
    // l1
    $('.refferal__scheme > ul > li > ul').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,

        // arrows: false,
        responsive: [{
                breakpoint: 1300,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    // l2
    $('.refferal__scheme > ul > li > ul  ul').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
        // arrows: false,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 321,
            settings: {
                slidesToShow: 3
            }
        }]
    });
}

function beforeWidth() {
    $('.refferal__scheme ul ul ul').each(function () {
        let items = $(this).find('.slick-slide');
        let itemWidth = items[0].clientWidth;

        let beforeWidth = $(this).find('.slick-track').width() - itemWidth;
        let beforeWidthFour = itemWidth * 3;

        if (items.length <= 4) {
            $(this).append('<span class="line" style="width:' + beforeWidth + 'px"></span>')
        } else {
            $(this).append('<span class="line" style="width:' + beforeWidthFour + 'px"></span>')
        }
    })
}
$(document).ready(function () {
    beforeWidth();
})
$(window).resize(function () {
    beforeWidth();
})



function listHeight() {
    if ($(window).width() > 992) {
        var listHeight = $('.level-list').height();
        var firstItemHeight = 146;
        var scheme = $('.refferal__scheme');

        if (listHeight >= firstItemHeight) {
            scheme.attr('style', 'margin-top: -130px');
        }
    } else {
        $('.refferal__scheme').removeAttr('style');
    }

}

$(window).on('load', function () {
    listHeight();
});
$(window).resize(function () {
    listHeight();
});

reviewsSlider();