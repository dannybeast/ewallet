  // js modal
  $('.js-custom-modal').click(function (e) {
    e.preventDefault();
    let currentWindow = $(this).attr('data-modal-id');
    $('.modal').removeClass('active');
    $('div.modal[id="' + currentWindow + '"]').addClass('active');
    $('body').addClass('overflow-bg');
  });
  $('.js-hide-modal').click(function (e) {
    e.preventDefault();
    $('.modal').removeClass('active');
    $('body').removeClass('overflow-bg');
  });
  // $(document).mouseup(function(e) {
  //   var div = $('.modal__block');
  //   if (!div.is(e.target) &&
  //     div.has(e.target).length === 0) {
  //     $('.modal').removeClass('active');
  //     $('body').removeClass('overflow-bg');
  //   }
  // });
