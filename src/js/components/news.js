  $('.js-open-news').click(function () {
    $(this).find('.news-item__details').slideToggle(100);
    $(this).toggleClass('open');

    if ($(this).hasClass('open') != true) {
      $(this).addClass('news-item--reading');
    }

  });