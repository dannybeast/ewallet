// якорь
function scrollTo(element, scrollBlock) {
  if (element) {
    var elementClick = element.attr('data-scrollTo');
    var destination = $(elementClick).offset().top;
  } else {
    var destination = $(scrollBlock).offset().top;
  }
  if ($(window).width() > 768) {
    $('html').animate({
        scrollTop: destination - 70
      },
      700
    );
  } else {
    $('html').animate({
        scrollTop: destination - 70
      },
      0
    );
  }
  return false;
}
$('.js-scrollTo').click(function () {
  scrollTo($(this));
  // scrollTo(null, '.order-main-steps');
});