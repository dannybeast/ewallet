import 'datatables.net-dt/js/dataTables.dataTables.min';
import './lib/dataTables.responsive.min';
import './components/language-module';
import './components/code';
import './components/ieDetect';
import './components/supports';
// polyfills
import 'svgxuse';
import 'nodelist-foreach-polyfill';

import {
    closeCustomModal,
    openCustomModal
} from './components/custom-modal';
import {
    showSuccess,
    showError
} from './components/notice';

import './components/resizeSensor';
import './components/lk-chart';


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

    // loader
    $('.loader').fadeOut();

    // datatables
    let sort_col_number = $('.js-data-tables').attr('sort-col-number');
    var table = $('.js-data-tables').DataTable({
        "order": [
            [sort_col_number, "desc"]
        ]
    });
    table.on('draw', function () {

        sidebar.updateSticky();
    });

    // 2fa checker
    $('.js-2fa-checker').click(function () {
        if ($('.js-2fa-checker').is(':checked')) {
            openCustomModal('2fa');
        }
    });

    // menu button desktop
    $('.js-toogle-menu').click(function () {
        $(this).toggleClass('open');
        $('.lk-content-and-aside__sidebar').toggleClass('active');
        $('.lk-content-and-aside__content').toggleClass('full');

    });

    // mobile menu
    let lk_nav = $('.lk-navigation ul').clone();
    let welcome = $('.header-lk__welcome').clone();
    let language_module = $('.header-lk .language-module').clone();
    let mob_menu = "<div class='mobile-menu'></div>"


    $('body').append(mob_menu);
    $('.mobile-menu').append(welcome);
    $('.mobile-menu').append(lk_nav);
    $('.mobile-menu .header-lk__welcome').append(language_module);

    $('.menu-button').click(function () {
        $('body').toggleClass('overflow-bg');
        $(this).toggleClass('open');
        $('.mobile-menu').toggleClass('open');
    });
    //-


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