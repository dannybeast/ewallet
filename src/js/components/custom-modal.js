  // js modal
  export function openCustomModal(currentWindow) {
    $('.modal').removeClass('active');
    $('div.modal[id="' + currentWindow + '"]').addClass('active');
    $('body').addClass('overflow');
  }

  export function closeCustomModal() {
    $('.modal').removeClass('active');
    $('body').removeClass('overflow');
  }
  $('.js-custom-modal').click(function (e) {
    e.preventDefault();
    let currentWindow = $(this).attr('data-modal-id');
    openCustomModal(currentWindow);
  });
  $('.js-hide-modal').click(function (e) {
    e.preventDefault();
    closeCustomModal();
  });