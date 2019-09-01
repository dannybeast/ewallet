// vendors
import 'lazyload/lazyload.min';
import './lib/jquery-ui.min';

// polyfills
import 'svgxuse';
 
// components
import './components/animations-lk';
import './components/ieDetect';
import './components/sticky';
import './components/charts';
import './components/modals';
import './components/custom-modal';
import './components/news';
import './components/datatables';
import './components/lk-team';
import {
  showSuccess,
  showError
} from './components/notice';

// status graph
const graph = document.querySelectorAll('.status-graph');

graph.forEach(function (element) {
  const bar = element.getElementsByClassName('status-graph__bar')[0];
  const percent = bar.getAttribute('data-status');
  // add span
  const span = document.createElement('span');
  span.style.width = `${percent}%`;
  // add tooltip
  const tooltip = document.createElement('span')
  tooltip.classList.add('graph-tooltip');
  tooltip.innerHTML = `${percent}%`;
  tooltip.style.left = `${percent}%`;
  tooltip.style.marginLeft = `${-30}px`;
  // append
  bar.appendChild(span);
  bar.appendChild(tooltip);
});
// -


// copy to clipboard
const copy = document.querySelectorAll('.js-copy');
copy.forEach(function (element) {
  const copyButton = element.querySelector('.js-copy-button');
  const copyInput = element.querySelector('.js-copy-input');
  copyButton.onclick = function (e) {
    e.preventDefault;
    copyInput.select();
    document.execCommand('copy');
    showSuccess('Скопировано')
  }
});


// lk mobile navigation
const lk_nav_button = document.querySelector('.lk__mobile-nav-button');
lk_nav_button.onclick = function () {
  const menu = document.querySelector('.lk__col-left');
  const body = document.querySelector('body');
  const icon = this.getElementsByClassName('menu-button')[0];
  menu.classList.toggle('open');
  body.classList.toggle('overflow');
  icon.classList.toggle('open');
}

// клонируем ссылки в шапке и вставляем в мобильное меню на мобильных
let added = false;

function clonedToMobileMenu() {
  const menu = document.querySelector('.lk__col-left');
  const header_lk_links = document.querySelector('.lk__links');
  const nav_module = document.querySelector('.navigation-module');
  const cloned_lk_links = header_lk_links.cloneNode(true);

  if (window.innerWidth <= 992 && !added) {
    nav_module.before(cloned_lk_links);
    added = true
  } else if (window.innerWidth > 992 && added) {
    const links = menu.getElementsByClassName('lk__links')[0];
    links.remove();
    added = false
  }
}
window.onload = function () {
  clonedToMobileMenu();
}
window.onresize = function () {
  clonedToMobileMenu();
}

//-

// refferal bar
const bar = document.querySelectorAll('.lk-refferal__bar');
bar.forEach(function (element) {
  const percent = element.getAttribute('data-percent');
  const span = document.createElement('span')
  span.style.width = `${percent}%`;
  element.appendChild(span)
})

// filename
$(".file-button input").on('change', function () {
  var file = this.files[0];
  var preview = document.querySelector('.avatar-module img');
  let reader = new FileReader();

  // loader
  reader.onprogress = function () {
    preview.src = 'img/loader.svg'
  }

  // load complete
  reader.onloadend = function () {
    preview.src = reader.result;
  }

  if (file) {
    reader.readAsDataURL(file);
  } else {
    preview.src = "";
  }

});



//-