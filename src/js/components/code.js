// code
$(".code__group input").keyup(function () {
  this.value = this.value.replace(/[^\d]/g, "");
  let inputs_length = $(".code__group input.active").length;

  if (this.value.length) {
    this.classList.add('active');
  } else {
    this.classList.remove('active');
  }
  if (this.value.length == this.maxLength) {
    var $next = $(this).next();
    if ($next.length) {
      $(this).next().focus();
    } else {
      //$(this).blur();
    }
  } else if (this.value.length === 0) {
    var $next = $(this).prev();
    if ($next.length) {
      $(this).prev().focus();
    } else {
      //$(this).blur();
    }
  }

  let val = '';
  for (let i = 0; i <= inputs_length; i++) {
    if ($(".code__group").find('input.active').eq(i).val() != undefined) {
      val = val + $(".code__group").find('input.active').eq(i).val();
    }
  }
  $(".code__group").attr('value', val);
});
//-