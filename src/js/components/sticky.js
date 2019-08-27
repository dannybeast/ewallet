import './resizeSensor';
import 'sticky-sidebar';

export let sidebar = new StickySidebar('.js-sticky', {
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

// navigation podmenu
$('.navigation-module ul li').each(function () {

  if ($(this).find('ul').length) {

    $(this).children('a').click(function (e) {
      if (!$(this).parent().hasClass('active')) {
        e.preventDefault();
        // удалить у всех active
        $('.navigation-module ul li ul').slideUp();
        $('.navigation-module ul li').removeClass('active');
        // добавить active
        $(this).parent().find('ul').slideDown();
        $(this).parent().toggleClass('active');
        sidebar.updateSticky();

      } else {
        e.preventDefault();
        $(this).parent().find('ul').slideUp();
        $(this).parent().toggleClass('active');
        sidebar.updateSticky();

      }
    });

  }

});