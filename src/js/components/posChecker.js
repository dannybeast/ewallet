// eslint-disable-next-line import/prefer-default-export
export function posChecker(sectionClass, timelineName, beforeTop) {
    const windowHeight = $(window).outerHeight();
    // eslint-disable-next-line no-var
    var beforeTop = beforeTop === undefined ? windowHeight / 1.5 : beforeTop;

    function check(that, sectionClass, timelineName) {
        const scrlPos = that.scrollTop();
        const sectPos = $(sectionClass).offset().top - beforeTop;
        const sectHeight = $(sectionClass).outerHeight();
        const sectBottomPos = sectPos + sectHeight + beforeTop;

        if (scrlPos >= sectPos && scrlPos < sectBottomPos) {
            timelineName.play();
        }
    }


    check($(window), sectionClass, timelineName);

    $(window).scroll(function () {
        check($(this), sectionClass, timelineName);
    });
}