// vendors
import 'lazyload/lazyload.min';
import '@fancyapps/fancybox';
import './lib/jquery-ui.min';

// polyfills
import 'svgxuse';

// components
import './components/animations-lk';
import './components/ieDetect';
import './components/sticky';
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
  const copyButton = element.getElementsByClassName('js-copy-button')[0];
  const copyInput = element.getElementsByClassName('js-copy-input')[0];
  copyButton.onclick = function (e) {
    e.preventDefault;
    copyInput.select();
    document.execCommand('copy');
    showSuccess('Скопировано')
  }
});
