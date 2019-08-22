const hideTime = 1500;
const notice = document.createElement('div');
notice.classList.add('notice');
document.body.appendChild(notice);

// close notice
export function closeNotice() {
  notice.classList = "";
  notice.innerHTML = "";
}
// open success
export function showSuccess(text) {
  notice.innerHTML = text;
  notice.classList.add('notice--green', 'notice--open');
  setTimeout(closeNotice, hideTime);
}

// open error
export function showError(text) {
  notice.innerHTML = text;
  notice.classList.add('notice--red', 'notice--open');
  setTimeout(closeNotice, hideTime);
}
