  import './lib/tags3d';

  $(document).ready(function () {
    const entries = [{
        label: 'Фотограф',
        url: '#',
        target: '_top'
      },
      {
        label: 'Инвестор форекс',
        url: '#',
        target: '_top'
      },
      {
        label: 'Риск-менеджер',
        url: '#',
        target: '_top'
      },
      {
        label: 'Криптоинвестор',
        url: '#',
        target: '_top'
      },
      {
        label: 'Упаковщик бизнеса',
        url: '#',
        target: '_top'
      },
      {
        label: 'Верстальщик',
        url: '#',
        target: '_top'
      },
      {
        label: 'Бизнес с Китаем',
        url: '#',
        target: '_top'
      },
      {
        label: '1C-разработчик',
        url: '#',
        target: '_top'
      },
      {
        label: 'Контент-менеджер',
        url: '#',
        target: '_top'
      },
      {
        label: 'Видеоаниматор',
        url: '#',
        target: '_top'
      },
      {
        label: 'Blockchain-разработчик',
        url: '#',
        target: '_top'
      },
    ];
    const settings = {
      entries,
      width: 400,
      height: 400,
      radius: '65%',
      radiusMin: 75,
      bgDraw: true,
      bgColor: 'transparent',
      opacityOver: 1.00,
      opacityOut: 0.07,
      opacitySpeed: 6,
      fov: 1000,
      speed: 1,
      fontFamily: 'PTSans, Arial, sans-serif',
      fontSize: '18',
      fontColor: '#000',
      fontWeight: 'normal', // bold
      fontStyle: 'normal', // italic 
      fontStretch: 'normal', // wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
      fontToUpperCase: false
    };
    // var svg3DTagCloud = new SVG3DTagCloud( document.getElementById( 'holder'  ), settings );
    $('#tag-cloud').svg3DTagCloud(settings);
  });
