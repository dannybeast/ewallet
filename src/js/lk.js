import 'datatables.net-dt/js/dataTables.dataTables.min';
import './lib/dataTables.responsive.min';
import './components/language-module';
import './components/code';
import './components/ieDetect';
import './components/supports';
// polyfills
import 'svgxuse';
import {
    closeCustomModal,
    openCustomModal
} from './components/custom-modal';
import {
    showSuccess,
    showError
} from './components/notice';

import './components/resizeSensor';

import StickySidebar from 'sticky-sidebar/dist/sticky-sidebar';


var sidebar = new StickySidebar('.js-sticky', {
    topSpacing: 0,
    responsiveWidth: true,
    resizeSensor: true,

});

var stickyInterval;
stickyInterval = setInterval(function () {
    if (sidebar) {
        sidebar.updateSticky();
    }
}, 500);




// main
$(document).ready(function () {
    var table = $('.js-data-tables').DataTable();
    table.on('draw', function () {
        sidebar.updateSticky();
    });
    // 2fa checker
    $('.js-2fa-checker').click(function () {
        if ($('.js-2fa-checker').is(':checked')) {
            openCustomModal('2fa');
        }
    });
});

$(window).on('load', function () {
    $('.loader').fadeOut();
})

// copy to clipboard
const copy = document.querySelectorAll('.js-copy');
copy.forEach(function (element) {
    const copyButton = element.querySelector('.js-copy-button');
    const copyInput = element.querySelector('.js-copy-input');
    copyButton.onclick = function (e) {
        e.preventDefault;
        copyInput.select();
        copyInput.setSelectionRange(0, 9999);
        document.execCommand('copy');
        showSuccess('Скопировано');
    }
});