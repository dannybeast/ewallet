import 'datatables.net-dt/js/dataTables.dataTables.min';
import './lib/dataTables.responsive.min';

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




var table = $('.js-data-tables').DataTable();
table.on('draw', function () {
  sidebar.updateSticky();
});