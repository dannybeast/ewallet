import 'datatables.net-dt';
import {
  sidebar
} from './sticky';

// data tables
$('.js-data-tables').DataTable({
  responsive: true,
  "language": {
    "search": "Поиск",
    "lengthMenu": "Выводить по _MENU_ ",
    "zeroRecords": "Не найдено - sorry",
    "info": "Страница _PAGE_ из _PAGES_",
    "infoEmpty": "Нет доступных записей",
    "infoFiltered": "(Отфильтровано _MAX_ из records)",
    "paginate": {
      "previous": "Назад",
      "next": "Далее"
    }
  }
});

$.extend($.fn.dataTable.defaults, {
  searching: false,
  ordering: false
});

$('.js-data-tables').on('draw.dt', function () {
  sidebar.updateSticky();
});

//-