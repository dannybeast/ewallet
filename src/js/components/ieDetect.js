 // IE 10 only CSS properties
 const ie10Styles = [
   'msTouchAction',
   'msWrapFlow',
   'msWrapMargin',
   'msWrapThrough',
   'msOverflowStyle',
   'msScrollChaining',
   'msScrollLimit',
   'msScrollLimitXMin',
   'msScrollLimitYMin',
   'msScrollLimitXMax',
   'msScrollLimitYMax',
   'msScrollRails',
   'msScrollSnapPointsX',
   'msScrollSnapPointsY',
   'msScrollSnapType',
   'msScrollSnapX',
   'msScrollSnapY',
   'msScrollTranslation',
   'msFlexbox',
   'msFlex',
   'msFlexOrder'
 ];

 const ie11Styles = [
   'msTextCombineHorizontal'
 ];

 /*
  * Test all IE only CSS properties
  */
 const d = document;
 const b = d.body;
 const s = b.style;
 let ieVersion = null;
 let property;

 // Test IE10 properties
 for (var i = 0; i < ie10Styles.length; i++) {
   property = ie10Styles[i];

   if (s[property] != undefined) {
     ieVersion = "ie10";
   }
 }

 // Test IE11 properties
 for (var i = 0; i < ie11Styles.length; i++) {
   property = ie11Styles[i];

   if (s[property] != undefined) {
     ieVersion = "ie11";
   }
 }

 if (ieVersion) {
   b.className = ieVersion;
 }
