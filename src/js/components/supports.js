const SupportsCSS = function (property, value) {
  // Создаём элемент
  const element = document.createElement('span');
  // Проверяем, поддерживает ли браузер данное свойство
  if (element.style[property] !== undefined)
    element.style.cssText = `${property  }:${  value}`; // Вносим новое свойство в style элемента
  else
    return false; // Если браузер не поддерживает свойство, то возвращаем false

  // Если браузер поддерживает данное значение для указанного свойства, то значения будут равны
  return element.style[property] === value;
};

const supGrad = SupportsCSS('-webkit-background-clip', 'text');

if(supGrad === false){
  $('body').addClass('not-support-gradients');
}