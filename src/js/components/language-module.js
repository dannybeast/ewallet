  // open languages
  $('.language-module').click(function () {
      $(this).toggleClass('open');
  });
  $(document).mouseup(function (e) {
      var div = $('.language-module');
      if (!div.is(e.target) && div.has(e.target).length === 0) {
          $('.language-module').removeClass('open');
      }
  });
  //-