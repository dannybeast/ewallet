const hideTime = 1500;
const notice = document.createElement('div');
notice.classList.add('notice');
document.body.appendChild(notice);

// close notice
export function closeNotice() {
  $('.notice')
    .removeClass('notice--open notice--green notice--red')
    .children('p')
    .text('');
}
// open success
export function showSuccess(text) {
  $('.notice')
    .addClass('notice--green notice--open')
    .text(text);
  setTimeout(closeNotice, hideTime);
}

// open error
export function showError(text) {
  $('.notice')
    .addClass('notice--red notice--open')
    .text(text);
  setTimeout(closeNotice, hideTime);
}
