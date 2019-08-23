  $('.js-open-news').click(function () {
    $(this).find('.news-item__details').slideToggle();
    $(this).toggleClass('open');

    if ($(this).hasClass('open') != true) {
      $(this).addClass('news-item--reading');
    }

  });