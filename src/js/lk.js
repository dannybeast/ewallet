import 'datatables.net-dt';
import './lib/dataTables.responsive.min';
import './components/language-module';
import './components/sticky';
import './components/code';
import {
    closeCustomModal,
    openCustomModal
} from './components/custom-modal';
import {
    showSuccess,
    showError
} from './components/notice';

// main
$(document).ready(function () {
    $('.loader').fadeOut();

    // data tables
    $('.js-data-tables').DataTable({
        responsive: true
    });

});

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

// 2fa checker
$('.js-2fa-checker').click(function () {
    if ($('.js-2fa-checker').is(':checked')) {
        openCustomModal('2fa');
    }
});