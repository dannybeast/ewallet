/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "js/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./app.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function($) {\n\n__webpack_require__(/*! lazyload/lazyload.min */ \"../../node_modules/lazyload/lazyload.min.js\");\n\n__webpack_require__(/*! ./lib/jquery-ui.min */ \"./lib/jquery-ui.min.js\");\n\n__webpack_require__(/*! svgxuse */ \"../../node_modules/svgxuse/svgxuse.js\");\n\n__webpack_require__(/*! ./components/ieDetect */ \"./components/ieDetect.js\");\n\n__webpack_require__(/*! ./components/animations */ \"./components/animations.js\");\n\n__webpack_require__(/*! ./components/navigation */ \"./components/navigation.js\");\n\n__webpack_require__(/*! ./components/supports */ \"./components/supports.js\");\n\n__webpack_require__(/*! ./components/modals */ \"./components/modals.js\");\n\nvar _notice = __webpack_require__(/*! ./components/notice */ \"./components/notice.js\");\n\n// main\n\n\n// components\n$(document).ready(function () {\n  $('img[data-src]').lazyload();\n\n  // accordion\n  $('.js-accordion').accordion({\n    header: '> div > h4',\n    collapsible: true,\n    active: false,\n    heightStyle: 'content'\n  });\n  //-\n\n\n  // toggle show password\n  $('.js-show-password').click(function (e) {\n    var input = $(this).parent().children('input');\n    e.preventDefault();\n    if (input.attr('type') === 'text') {\n      $(this).parent().children('input').attr('type', 'password');\n      $(this).removeClass('active');\n    } else {\n      $(this).parent().children('input').attr('type', 'text');\n      $(this).addClass('active');\n    }\n  });\n  //-\n\n});\n\n// polyfills\n// vendors\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"../../node_modules/jquery/dist/jquery.js\")))\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2pzL2FwcC5qcz8wMzU0Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIHZlbmRvcnNcclxuaW1wb3J0ICdsYXp5bG9hZC9sYXp5bG9hZC5taW4nO1xyXG5pbXBvcnQgJy4vbGliL2pxdWVyeS11aS5taW4nO1xyXG5cclxuLy8gcG9seWZpbGxzXHJcbmltcG9ydCAnc3ZneHVzZSc7XHJcblxyXG4vLyBjb21wb25lbnRzXHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2llRGV0ZWN0JztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvYW5pbWF0aW9ucyc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL25hdmlnYXRpb24nO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9zdXBwb3J0cyc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL21vZGFscyc7XHJcblxyXG5pbXBvcnQge1xyXG4gIHNob3dTdWNjZXNzLFxyXG4gIHNob3dFcnJvclxyXG59IGZyb20gJy4vY29tcG9uZW50cy9ub3RpY2UnO1xyXG5cclxuLy8gbWFpblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgJCgnaW1nW2RhdGEtc3JjXScpLmxhenlsb2FkKCk7XHJcblxyXG5cclxuICAvLyBhY2NvcmRpb25cclxuICAkKCcuanMtYWNjb3JkaW9uJykuYWNjb3JkaW9uKHtcclxuICAgIGhlYWRlcjogJz4gZGl2ID4gaDQnLFxyXG4gICAgY29sbGFwc2libGU6IHRydWUsXHJcbiAgICBhY3RpdmU6IGZhbHNlLFxyXG4gICAgaGVpZ2h0U3R5bGU6ICdjb250ZW50J1xyXG4gIH0pO1xyXG4gIC8vLVxyXG5cclxuXHJcbiAgLy8gdG9nZ2xlIHNob3cgcGFzc3dvcmRcclxuICAkKCcuanMtc2hvdy1wYXNzd29yZCcpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICBjb25zdCBpbnB1dCA9ICQodGhpcykucGFyZW50KCkuY2hpbGRyZW4oJ2lucHV0Jyk7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAoaW5wdXQuYXR0cigndHlwZScpID09PSAndGV4dCcpIHtcclxuICAgICAgJCh0aGlzKS5wYXJlbnQoKS5jaGlsZHJlbignaW5wdXQnKS5hdHRyKCd0eXBlJywgJ3Bhc3N3b3JkJyk7XHJcbiAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCh0aGlzKS5wYXJlbnQoKS5jaGlsZHJlbignaW5wdXQnKS5hdHRyKCd0eXBlJywgJ3RleHQnKTtcclxuICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgLy8tXHJcblxyXG5cclxuXHJcbn0pOyJdLCJtYXBwaW5ncyI6Ijs7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFkQTtBQWFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUEvQ0E7QUFKQTtBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./app.js\n");

/***/ }),

/***/ "./components/animations.js":
/*!**********************************!*\
  !*** ./components/animations.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function($) {\n\nvar _gsap = __webpack_require__(/*! gsap */ \"../../node_modules/gsap/index.js\");\n\nvar _posChecker = __webpack_require__(/*! ./posChecker */ \"./components/posChecker.js\");\n\n// animation\n/* eslint-disable */\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n    var tl_loader = new _gsap.TimelineLite();\n    tl_loader.fromTo('.loader__inside', 0.3, {\n        y: 0,\n        opacity: 1\n    }, {\n        y: -10,\n        opacity: 0\n    }).fromTo('.loader', 0.6, {\n        x: 0,\n        opacity: 1\n    }, {\n        x: 0,\n        opacity: 0,\n        onComplete: function onComplete() {\n            var loader = document.querySelector('.loader');\n            loader.remove();\n\n            if ($('.header').length) {\n                (0, _posChecker.posChecker)('.header', tl_header_intro);\n            }\n            if ($('.advantages').length) {\n                (0, _posChecker.posChecker)('.advantages', tl_advantages);\n            }\n            if ($('.header-intro').length) {\n                (0, _posChecker.posChecker)('.how-work', tl_howWork, 0);\n            }\n            if ($('.target').length) {\n                (0, _posChecker.posChecker)('.target', tl_target);\n            }\n            if ($('.problems').length) {\n                (0, _posChecker.posChecker)('.problems', tl_problems);\n            }\n            if ($('.percent-section').length) {\n                (0, _posChecker.posChecker)('.percent-section', tl_percentSection);\n            }\n            if ($('.reviews').length) {\n                (0, _posChecker.posChecker)('.reviews', tl_reviews);\n            }\n            if ($('.well-being').length) {\n                (0, _posChecker.posChecker)('.well-being', tl_wellBeing);\n            }\n            if ($('.auth').length) {\n                (0, _posChecker.posChecker)('.auth', tl_auth);\n            }\n        }\n    });\n});\n//-\n\n// animation header-intro\nvar tl_header_intro = new _gsap.TimelineLite({\n    paused: true\n});\ntl_header_intro.fromTo('.header-top', 0.2, {\n    opacity: 0\n}, {\n    opacity: 1\n}).fromTo('.header-intro__title', 0.5, {\n    x: -10,\n    opacity: 0\n}, {\n    x: 0,\n    opacity: 1\n}).fromTo('.header-intro__desc', 0.2, {\n    x: -10,\n    opacity: 0\n}, {\n    x: 0,\n    opacity: 1\n}).fromTo('.header-intro .buttons', 0.2, {\n    x: -10,\n    opacity: 0\n}, {\n    x: 0,\n    opacity: 1\n}).fromTo('.header-intro__pic', 0.1, {\n    x: 10,\n    opacity: 0\n}, {\n    x: 0,\n    opacity: 1\n});\n\n// animation advantages\nvar tl_advantages = new _gsap.TimelineLite({\n    paused: true\n});\ntl_advantages.staggerFromTo('.advantages__col', 0.5, {\n    y: -10,\n    opacity: 0\n}, {\n    y: 0,\n    opacity: 1\n}, 0.1).fromTo('.advantages .buttons', 1, {\n    opacity: 0\n}, {\n    opacity: 1\n});\n\n// animation\nvar tl_howWork = new _gsap.TimelineLite({\n    paused: true\n});\ntl_howWork.fromTo('.dark-list', 0.5, {\n    y: -10,\n    opacity: 0\n}, {\n    y: 0,\n    opacity: 1\n}).fromTo('.dark-video', 0.5, {\n    y: -10,\n    opacity: 0\n}, {\n    y: -0,\n    opacity: 1\n}).fromTo('.sign-module', 0.5, {\n    y: -10,\n    opacity: 0\n}, {\n    y: -0,\n    opacity: 1\n});\n\n// animation target\nvar tl_target = new _gsap.TimelineLite({\n    paused: true\n});\ntl_target.fromTo('.target__media img', 0.5, {\n    y: -10,\n    opacity: 0\n}, {\n    y: 0,\n    opacity: 1\n}).fromTo('.target__content', 0.5, {\n    y: 10,\n    opacity: 0\n}, {\n    y: 0,\n    opacity: 1\n});\n\n// animation problems\nvar tl_problems = new _gsap.TimelineLite({\n    paused: true\n});\ntl_problems.fromTo('.problems .title', 0.5, {\n    x: -10,\n    opacity: 0\n}, {\n    x: 0,\n    opacity: 1\n}).staggerFromTo('.problems__col', 0.5, {\n    y: -10,\n    opacity: 0\n}, {\n    y: 0,\n    opacity: 1\n}, 0.1);\n\n// animation percent-section\nvar tl_percentSection = new _gsap.TimelineLite({\n    paused: true\n});\ntl_percentSection.fromTo('.percent-section__count', 0.5, {\n    y: 10,\n    opacity: 0\n}, {\n    y: 0,\n    opacity: 1\n}).fromTo('.percent-section__text', 0.5, {\n    y: -10,\n    opacity: 0\n}, {\n    y: 0,\n    opacity: 1\n});\n\n// animation reviews\nvar tl_reviews = new _gsap.TimelineLite({\n    paused: true\n});\ntl_reviews.fromTo('.reviews .title', 0.5, {\n    opacity: 0\n}, {\n    opacity: 1\n}).staggerFromTo('.reviews__col', 0.5, {\n    y: 10,\n    opacity: 0\n}, {\n    y: 0,\n    opacity: 1\n}, 0.1).fromTo('.reviews__buttons', 0.5, {\n    opacity: 0\n}, {\n    opacity: 1\n});\n\n// animation reviews\nvar tl_wellBeing = new _gsap.TimelineLite({\n    paused: true\n});\ntl_wellBeing.fromTo('.circle-item__icon', 0.5, {\n    scale: 0.1,\n    opacity: 0\n}, {\n    scale: 1,\n    opacity: 1\n}).fromTo('.circle-item__icon img', 0.3, {\n    y: -10,\n    opacity: 0\n}, {\n    y: 0,\n    opacity: 1\n}).fromTo('.circle-item__desc', 0.3, {\n    y: -10,\n    opacity: 0\n}, {\n    y: 0,\n    opacity: 1\n});\n\n// animation auth\nvar tl_auth = new _gsap.TimelineLite({\n    paused: true\n});\ntl_auth.fromTo('.auth__col--right', 0.5, {\n    opacity: 0\n}, {\n    opacity: 1\n}).fromTo('.auth-module', 0.5, {\n    x: -10,\n    opacity: 0\n}, {\n    x: 0,\n    opacity: 1\n});\n\n/* eslint-enable */\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"../../node_modules/jquery/dist/jquery.js\")))\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2FuaW1hdGlvbnMuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2pzL2NvbXBvbmVudHMvYW5pbWF0aW9ucy5qcz9jODY3Il0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlICovXHJcbmltcG9ydCB7XHJcbiAgICBUaW1lbGluZUxpdGVcclxufSBmcm9tICdnc2FwJztcclxuaW1wb3J0IHtcclxuICAgIHBvc0NoZWNrZXJcclxufSBmcm9tICcuL3Bvc0NoZWNrZXInO1xyXG5cclxuLy8gYW5pbWF0aW9uXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcclxuICAgIHZhciB0bF9sb2FkZXIgPSBuZXcgVGltZWxpbmVMaXRlKCk7XHJcbiAgICB0bF9sb2FkZXJcclxuICAgICAgICAuZnJvbVRvKCcubG9hZGVyX19pbnNpZGUnLCAwLjMsIHtcclxuICAgICAgICAgICAgeTogMCxcclxuICAgICAgICAgICAgb3BhY2l0eTogMVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgeTogLTEwLFxyXG4gICAgICAgICAgICBvcGFjaXR5OiAwXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuZnJvbVRvKCcubG9hZGVyJywgMC42LCB7XHJcbiAgICAgICAgICAgIHg6IDAsXHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDFcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIHg6IDAsXHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgICAgICAgIG9uQ29tcGxldGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGxldCBsb2FkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9hZGVyJyk7XHJcbiAgICAgICAgICAgICAgICBsb2FkZXIucmVtb3ZlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCQoJy5oZWFkZXInKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NDaGVja2VyKCcuaGVhZGVyJywgdGxfaGVhZGVyX2ludHJvKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICgkKCcuYWR2YW50YWdlcycpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc0NoZWNrZXIoJy5hZHZhbnRhZ2VzJywgdGxfYWR2YW50YWdlcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoJCgnLmhlYWRlci1pbnRybycpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc0NoZWNrZXIoJy5ob3ctd29yaycsIHRsX2hvd1dvcmssIDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCQoJy50YXJnZXQnKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NDaGVja2VyKCcudGFyZ2V0JywgdGxfdGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICgkKCcucHJvYmxlbXMnKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NDaGVja2VyKCcucHJvYmxlbXMnLCB0bF9wcm9ibGVtcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoJCgnLnBlcmNlbnQtc2VjdGlvbicpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc0NoZWNrZXIoJy5wZXJjZW50LXNlY3Rpb24nLCB0bF9wZXJjZW50U2VjdGlvbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoJCgnLnJldmlld3MnKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NDaGVja2VyKCcucmV2aWV3cycsIHRsX3Jldmlld3MpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCQoJy53ZWxsLWJlaW5nJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zQ2hlY2tlcignLndlbGwtYmVpbmcnLCB0bF93ZWxsQmVpbmcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCQoJy5hdXRoJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zQ2hlY2tlcignLmF1dGgnLCB0bF9hdXRoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG59KTtcclxuLy8tXHJcblxyXG4vLyBhbmltYXRpb24gaGVhZGVyLWludHJvXHJcbnZhciB0bF9oZWFkZXJfaW50cm8gPSBuZXcgVGltZWxpbmVMaXRlKHtcclxuICAgIHBhdXNlZDogdHJ1ZVxyXG59KTtcclxudGxfaGVhZGVyX2ludHJvXHJcbiAgICAuZnJvbVRvKCcuaGVhZGVyLXRvcCcsIDAuMiwge1xyXG4gICAgICAgIG9wYWNpdHk6IDBcclxuICAgIH0sIHtcclxuICAgICAgICBvcGFjaXR5OiAxXHJcbiAgICB9KVxyXG4gICAgLmZyb21UbygnLmhlYWRlci1pbnRyb19fdGl0bGUnLCAwLjUsIHtcclxuICAgICAgICB4OiAtMTAsXHJcbiAgICAgICAgb3BhY2l0eTogMFxyXG4gICAgfSwge1xyXG4gICAgICAgIHg6IDAsXHJcbiAgICAgICAgb3BhY2l0eTogMVxyXG4gICAgfSlcclxuICAgIC5mcm9tVG8oJy5oZWFkZXItaW50cm9fX2Rlc2MnLCAwLjIsIHtcclxuICAgICAgICB4OiAtMTAsXHJcbiAgICAgICAgb3BhY2l0eTogMFxyXG4gICAgfSwge1xyXG4gICAgICAgIHg6IDAsXHJcbiAgICAgICAgb3BhY2l0eTogMVxyXG4gICAgfSlcclxuICAgIC5mcm9tVG8oJy5oZWFkZXItaW50cm8gLmJ1dHRvbnMnLCAwLjIsIHtcclxuICAgICAgICB4OiAtMTAsXHJcbiAgICAgICAgb3BhY2l0eTogMFxyXG4gICAgfSwge1xyXG4gICAgICAgIHg6IDAsXHJcbiAgICAgICAgb3BhY2l0eTogMVxyXG4gICAgfSlcclxuICAgIC5mcm9tVG8oJy5oZWFkZXItaW50cm9fX3BpYycsIDAuMSwge1xyXG4gICAgICAgIHg6IDEwLFxyXG4gICAgICAgIG9wYWNpdHk6IDBcclxuICAgIH0sIHtcclxuICAgICAgICB4OiAwLFxyXG4gICAgICAgIG9wYWNpdHk6IDFcclxuICAgIH0pXHJcblxyXG4vLyBhbmltYXRpb24gYWR2YW50YWdlc1xyXG52YXIgdGxfYWR2YW50YWdlcyA9IG5ldyBUaW1lbGluZUxpdGUoe1xyXG4gICAgcGF1c2VkOiB0cnVlXHJcbn0pO1xyXG50bF9hZHZhbnRhZ2VzXHJcbiAgICAuc3RhZ2dlckZyb21UbygnLmFkdmFudGFnZXNfX2NvbCcsIDAuNSwge1xyXG4gICAgICAgIHk6IC0xMCxcclxuICAgICAgICBvcGFjaXR5OiAwXHJcbiAgICB9LCB7XHJcbiAgICAgICAgeTogMCxcclxuICAgICAgICBvcGFjaXR5OiAxXHJcbiAgICB9LCAwLjEpXHJcbiAgICAuZnJvbVRvKCcuYWR2YW50YWdlcyAuYnV0dG9ucycsIDEsIHtcclxuICAgICAgICBvcGFjaXR5OiAwXHJcbiAgICB9LCB7XHJcbiAgICAgICAgb3BhY2l0eTogMVxyXG4gICAgfSlcclxuXHJcbi8vIGFuaW1hdGlvblxyXG52YXIgdGxfaG93V29yayA9IG5ldyBUaW1lbGluZUxpdGUoe1xyXG4gICAgcGF1c2VkOiB0cnVlXHJcbn0pO1xyXG50bF9ob3dXb3JrXHJcbiAgICAuZnJvbVRvKCcuZGFyay1saXN0JywgMC41LCB7XHJcbiAgICAgICAgeTogLTEwLFxyXG4gICAgICAgIG9wYWNpdHk6IDBcclxuICAgIH0sIHtcclxuICAgICAgICB5OiAwLFxyXG4gICAgICAgIG9wYWNpdHk6IDFcclxuICAgIH0pXHJcbiAgICAuZnJvbVRvKCcuZGFyay12aWRlbycsIDAuNSwge1xyXG4gICAgICAgIHk6IC0xMCxcclxuICAgICAgICBvcGFjaXR5OiAwXHJcbiAgICB9LCB7XHJcbiAgICAgICAgeTogLTAsXHJcbiAgICAgICAgb3BhY2l0eTogMVxyXG4gICAgfSlcclxuICAgIC5mcm9tVG8oJy5zaWduLW1vZHVsZScsIDAuNSwge1xyXG4gICAgICAgIHk6IC0xMCxcclxuICAgICAgICBvcGFjaXR5OiAwXHJcbiAgICB9LCB7XHJcbiAgICAgICAgeTogLTAsXHJcbiAgICAgICAgb3BhY2l0eTogMVxyXG4gICAgfSlcclxuXHJcbi8vIGFuaW1hdGlvbiB0YXJnZXRcclxudmFyIHRsX3RhcmdldCA9IG5ldyBUaW1lbGluZUxpdGUoe1xyXG4gICAgcGF1c2VkOiB0cnVlXHJcbn0pO1xyXG50bF90YXJnZXRcclxuICAgIC5mcm9tVG8oJy50YXJnZXRfX21lZGlhIGltZycsIDAuNSwge1xyXG4gICAgICAgIHk6IC0xMCxcclxuICAgICAgICBvcGFjaXR5OiAwXHJcbiAgICB9LCB7XHJcbiAgICAgICAgeTogMCxcclxuICAgICAgICBvcGFjaXR5OiAxXHJcbiAgICB9KVxyXG4gICAgLmZyb21UbygnLnRhcmdldF9fY29udGVudCcsIDAuNSwge1xyXG4gICAgICAgIHk6IDEwLFxyXG4gICAgICAgIG9wYWNpdHk6IDBcclxuICAgIH0sIHtcclxuICAgICAgICB5OiAwLFxyXG4gICAgICAgIG9wYWNpdHk6IDFcclxuICAgIH0pXHJcblxyXG4vLyBhbmltYXRpb24gcHJvYmxlbXNcclxudmFyIHRsX3Byb2JsZW1zID0gbmV3IFRpbWVsaW5lTGl0ZSh7XHJcbiAgICBwYXVzZWQ6IHRydWVcclxufSk7XHJcbnRsX3Byb2JsZW1zXHJcbiAgICAuZnJvbVRvKCcucHJvYmxlbXMgLnRpdGxlJywgMC41LCB7XHJcbiAgICAgICAgeDogLTEwLFxyXG4gICAgICAgIG9wYWNpdHk6IDBcclxuICAgIH0sIHtcclxuICAgICAgICB4OiAwLFxyXG4gICAgICAgIG9wYWNpdHk6IDFcclxuICAgIH0pXHJcbiAgICAuc3RhZ2dlckZyb21UbygnLnByb2JsZW1zX19jb2wnLCAwLjUsIHtcclxuICAgICAgICB5OiAtMTAsXHJcbiAgICAgICAgb3BhY2l0eTogMFxyXG4gICAgfSwge1xyXG4gICAgICAgIHk6IDAsXHJcbiAgICAgICAgb3BhY2l0eTogMVxyXG4gICAgfSwgMC4xKVxyXG5cclxuLy8gYW5pbWF0aW9uIHBlcmNlbnQtc2VjdGlvblxyXG52YXIgdGxfcGVyY2VudFNlY3Rpb24gPSBuZXcgVGltZWxpbmVMaXRlKHtcclxuICAgIHBhdXNlZDogdHJ1ZVxyXG59KTtcclxudGxfcGVyY2VudFNlY3Rpb25cclxuICAgIC5mcm9tVG8oJy5wZXJjZW50LXNlY3Rpb25fX2NvdW50JywgMC41LCB7XHJcbiAgICAgICAgeTogMTAsXHJcbiAgICAgICAgb3BhY2l0eTogMFxyXG4gICAgfSwge1xyXG4gICAgICAgIHk6IDAsXHJcbiAgICAgICAgb3BhY2l0eTogMVxyXG4gICAgfSlcclxuICAgIC5mcm9tVG8oJy5wZXJjZW50LXNlY3Rpb25fX3RleHQnLCAwLjUsIHtcclxuICAgICAgICB5OiAtMTAsXHJcbiAgICAgICAgb3BhY2l0eTogMFxyXG4gICAgfSwge1xyXG4gICAgICAgIHk6IDAsXHJcbiAgICAgICAgb3BhY2l0eTogMVxyXG4gICAgfSlcclxuXHJcbi8vIGFuaW1hdGlvbiByZXZpZXdzXHJcbnZhciB0bF9yZXZpZXdzID0gbmV3IFRpbWVsaW5lTGl0ZSh7XHJcbiAgICBwYXVzZWQ6IHRydWVcclxufSk7XHJcbnRsX3Jldmlld3NcclxuICAgIC5mcm9tVG8oJy5yZXZpZXdzIC50aXRsZScsIDAuNSwge1xyXG4gICAgICAgIG9wYWNpdHk6IDBcclxuICAgIH0sIHtcclxuICAgICAgICBvcGFjaXR5OiAxXHJcbiAgICB9KVxyXG4gICAgLnN0YWdnZXJGcm9tVG8oJy5yZXZpZXdzX19jb2wnLCAwLjUsIHtcclxuICAgICAgICB5OiAxMCxcclxuICAgICAgICBvcGFjaXR5OiAwXHJcbiAgICB9LCB7XHJcbiAgICAgICAgeTogMCxcclxuICAgICAgICBvcGFjaXR5OiAxXHJcbiAgICB9LCAwLjEpXHJcbiAgICAuZnJvbVRvKCcucmV2aWV3c19fYnV0dG9ucycsIDAuNSwge1xyXG4gICAgICAgIG9wYWNpdHk6IDBcclxuICAgIH0sIHtcclxuICAgICAgICBvcGFjaXR5OiAxXHJcbiAgICB9KVxyXG5cclxuLy8gYW5pbWF0aW9uIHJldmlld3NcclxudmFyIHRsX3dlbGxCZWluZyA9IG5ldyBUaW1lbGluZUxpdGUoe1xyXG4gICAgcGF1c2VkOiB0cnVlXHJcbn0pO1xyXG50bF93ZWxsQmVpbmdcclxuICAgIC5mcm9tVG8oJy5jaXJjbGUtaXRlbV9faWNvbicsIDAuNSwge1xyXG4gICAgICAgIHNjYWxlOiAwLjEsXHJcbiAgICAgICAgb3BhY2l0eTogMFxyXG4gICAgfSwge1xyXG4gICAgICAgIHNjYWxlOiAxLFxyXG4gICAgICAgIG9wYWNpdHk6IDFcclxuICAgIH0pXHJcbiAgICAuZnJvbVRvKCcuY2lyY2xlLWl0ZW1fX2ljb24gaW1nJywgMC4zLCB7XHJcbiAgICAgICAgeTogLTEwLFxyXG4gICAgICAgIG9wYWNpdHk6IDBcclxuICAgIH0sIHtcclxuICAgICAgICB5OiAwLFxyXG4gICAgICAgIG9wYWNpdHk6IDFcclxuICAgIH0pXHJcbiAgICAuZnJvbVRvKCcuY2lyY2xlLWl0ZW1fX2Rlc2MnLCAwLjMsIHtcclxuICAgICAgICB5OiAtMTAsXHJcbiAgICAgICAgb3BhY2l0eTogMFxyXG4gICAgfSwge1xyXG4gICAgICAgIHk6IDAsXHJcbiAgICAgICAgb3BhY2l0eTogMVxyXG4gICAgfSlcclxuXHJcbi8vIGFuaW1hdGlvbiBhdXRoXHJcbnZhciB0bF9hdXRoID0gbmV3IFRpbWVsaW5lTGl0ZSh7XHJcbiAgICBwYXVzZWQ6IHRydWVcclxufSk7XHJcbnRsX2F1dGhcclxuICAgIC5mcm9tVG8oJy5hdXRoX19jb2wtLXJpZ2h0JywgMC41LCB7XHJcbiAgICAgICAgb3BhY2l0eTogMFxyXG4gICAgfSwge1xyXG4gICAgICAgIG9wYWNpdHk6IDFcclxuICAgIH0pXHJcbiAgICAuZnJvbVRvKCcuYXV0aC1tb2R1bGUnLCAwLjUsIHtcclxuICAgICAgICB4OiAtMTAsXHJcbiAgICAgICAgb3BhY2l0eTogMFxyXG4gICAgfSwge1xyXG4gICAgICAgIHg6IDAsXHJcbiAgICAgICAgb3BhY2l0eTogMVxyXG4gICAgfSlcclxuXHJcbi8qIGVzbGludC1lbmFibGUgKi8iXSwibWFwcGluZ3MiOiI7O0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQVJBO0FBU0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFuQ0E7QUFxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUVBO0FBREE7QUFHQTtBQURBO0FBSUE7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBRUE7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUZBO0FBS0E7QUFEQTtBQUdBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFFQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFFQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFFQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFFQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFFQTtBQURBO0FBR0E7QUFEQTtBQUlBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFGQTtBQUtBO0FBREE7QUFHQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBRUE7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBRUE7QUFEQTtBQUdBO0FBREE7QUFJQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/animations.js\n");

/***/ }),

/***/ "./components/navigation.js":
/*!**********************************!*\
  !*** ./components/navigation.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function($) {\n\n$(document).ready(function () {\n\n  // show\n  $('.navigation__button').click(function () {\n    $('body').addClass('overflow');\n    $('.header').addClass('is-show-menu');\n    $('.navigation').addClass('is-show-menu');\n  });\n\n  // close\n  $('.navigation__close').click(function () {\n    $('body').removeClass('overflow');\n    $('.header').removeClass('is-show-menu');\n    $('.navigation').removeClass('is-show-menu');\n  });\n  //-\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"../../node_modules/jquery/dist/jquery.js\")))\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL25hdmlnYXRpb24uanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2pzL2NvbXBvbmVudHMvbmF2aWdhdGlvbi5qcz84MjQyIl0sInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgLy8gc2hvd1xyXG4gICQoJy5uYXZpZ2F0aW9uX19idXR0b24nKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ292ZXJmbG93Jyk7XHJcbiAgICAkKCcuaGVhZGVyJykuYWRkQ2xhc3MoJ2lzLXNob3ctbWVudScpO1xyXG4gICAgJCgnLm5hdmlnYXRpb24nKS5hZGRDbGFzcygnaXMtc2hvdy1tZW51Jyk7XHJcbiAgfSk7XHJcblxyXG4gIC8vIGNsb3NlXHJcbiAgJCgnLm5hdmlnYXRpb25fX2Nsb3NlJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdvdmVyZmxvdycpO1xyXG4gICAgJCgnLmhlYWRlcicpLnJlbW92ZUNsYXNzKCdpcy1zaG93LW1lbnUnKTtcclxuICAgICQoJy5uYXZpZ2F0aW9uJykucmVtb3ZlQ2xhc3MoJ2lzLXNob3ctbWVudScpO1xyXG4gIH0pO1xyXG4gIC8vLVxyXG5cclxufSk7XHJcbiJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/navigation.js\n");

/***/ }),

/***/ "./components/supports.js":
/*!********************************!*\
  !*** ./components/supports.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar SupportsCSS = function SupportsCSS(property, value) {\n  // Создаём элемент\n  var element = document.createElement('span');\n  // Проверяем, поддерживает ли браузер данное свойство\n  if (element.style[property] !== undefined) element.style.cssText = property + ':' + value; // Вносим новое свойство в style элемента\n  else return false; // Если браузер не поддерживает свойство, то возвращаем false\n\n  // Если браузер поддерживает данное значение для указанного свойства, то значения будут равны\n  return element.style[property] === value;\n};\n\nvar supGrad = SupportsCSS('-webkit-background-clip', 'text');\n\nif (supGrad === false) {\n  var body = document.querySelector('body');\n  body.classList.add('not-support-gradients');\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3N1cHBvcnRzLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy9jb21wb25lbnRzL3N1cHBvcnRzLmpzPzY2MTAiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgU3VwcG9ydHNDU1MgPSBmdW5jdGlvbiAocHJvcGVydHksIHZhbHVlKSB7XHJcbiAgLy8g0KHQvtC30LTQsNGR0Lwg0Y3Qu9C10LzQtdC90YJcclxuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gIC8vINCf0YDQvtCy0LXRgNGP0LXQvCwg0L/QvtC00LTQtdGA0LbQuNCy0LDQtdGCINC70Lgg0LHRgNCw0YPQt9C10YAg0LTQsNC90L3QvtC1INGB0LLQvtC50YHRgtCy0L5cclxuICBpZiAoZWxlbWVudC5zdHlsZVtwcm9wZXJ0eV0gIT09IHVuZGVmaW5lZClcclxuICAgIGVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IGAke3Byb3BlcnR5ICB9OiR7ICB2YWx1ZX1gOyAvLyDQktC90L7RgdC40Lwg0L3QvtCy0L7QtSDRgdCy0L7QudGB0YLQstC+INCyIHN0eWxlINGN0LvQtdC80LXQvdGC0LBcclxuICBlbHNlXHJcbiAgICByZXR1cm4gZmFsc2U7IC8vINCV0YHQu9C4INCx0YDQsNGD0LfQtdGAINC90LUg0L/QvtC00LTQtdGA0LbQuNCy0LDQtdGCINGB0LLQvtC50YHRgtCy0L4sINGC0L4g0LLQvtC30LLRgNCw0YnQsNC10LwgZmFsc2VcclxuXHJcbiAgLy8g0JXRgdC70Lgg0LHRgNCw0YPQt9C10YAg0L/QvtC00LTQtdGA0LbQuNCy0LDQtdGCINC00LDQvdC90L7QtSDQt9C90LDRh9C10L3QuNC1INC00LvRjyDRg9C60LDQt9Cw0L3QvdC+0LPQviDRgdCy0L7QudGB0YLQstCwLCDRgtC+INC30L3QsNGH0LXQvdC40Y8g0LHRg9C00YPRgiDRgNCw0LLQvdGLXHJcbiAgcmV0dXJuIGVsZW1lbnQuc3R5bGVbcHJvcGVydHldID09PSB2YWx1ZTtcclxufTtcclxuXHJcbmNvbnN0IHN1cEdyYWQgPSBTdXBwb3J0c0NTUygnLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXAnLCAndGV4dCcpO1xyXG5cclxuaWYoc3VwR3JhZCA9PT0gZmFsc2Upe1xyXG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XHJcbiAgYm9keS5jbGFzc0xpc3QuYWRkKCdub3Qtc3VwcG9ydC1ncmFkaWVudHMnKTtcclxufSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/supports.js\n");

/***/ })

/******/ });