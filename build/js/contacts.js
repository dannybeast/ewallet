/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./contacts.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/google-map.js":
/*!**********************************!*\
  !*** ./components/google-map.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar GM = {\n  init: function init() {\n    this.initCache();\n    this.initMap();\n  },\n  initCache: function initCache() {\n    this.$body = document.querySelector('body');\n  },\n  initMap: function initMap() {\n    var coordinates = {\n      lat: 45.03638489999999,\n      lng: 38.99646469999993\n    };\n\n    var centerMap = {\n      lat: 45.03638489999999,\n      lng: 38.99646469999993\n    };\n\n    var markerImage = new google.maps.MarkerImage('img/map-marker.svg', null, null, null, new google.maps.Size(35, 35));\n    var zoom = 15;\n\n    var map = new google.maps.Map(document.getElementById('map'), {\n      center: centerMap,\n      zoom: zoom,\n\n      disableDefaultUI: true,\n      zoomControl: true,\n      scrollwheel: false\n    });\n\n    var marker = new google.maps.Marker({\n      position: coordinates,\n      map: map,\n      icon: markerImage\n    });\n\n    map.setOptions({\n      styles: dataStyles\n    });\n  }\n};\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var map = document.querySelector('#map');\n  if (map) {\n    GM.init();\n  }\n});\n\nvar dataStyles = [{\n  \"elementType\": \"geometry\",\n  \"stylers\": [{\n    \"color\": \"#f5f5f5\"\n  }]\n}, {\n  \"elementType\": \"labels.icon\",\n  \"stylers\": [{\n    \"visibility\": \"off\"\n  }]\n}, {\n  \"elementType\": \"labels.text.fill\",\n  \"stylers\": [{\n    \"color\": \"#616161\"\n  }]\n}, {\n  \"elementType\": \"labels.text.stroke\",\n  \"stylers\": [{\n    \"color\": \"#f5f5f5\"\n  }]\n}, {\n  \"featureType\": \"administrative.land_parcel\",\n  \"elementType\": \"labels.text.fill\",\n  \"stylers\": [{\n    \"color\": \"#bdbdbd\"\n  }]\n}, {\n  \"featureType\": \"poi\",\n  \"elementType\": \"geometry\",\n  \"stylers\": [{\n    \"color\": \"#eeeeee\"\n  }]\n}, {\n  \"featureType\": \"poi\",\n  \"elementType\": \"labels.text.fill\",\n  \"stylers\": [{\n    \"color\": \"#757575\"\n  }]\n}, {\n  \"featureType\": \"poi.park\",\n  \"elementType\": \"geometry\",\n  \"stylers\": [{\n    \"color\": \"#e5e5e5\"\n  }]\n}, {\n  \"featureType\": \"poi.park\",\n  \"elementType\": \"labels.text.fill\",\n  \"stylers\": [{\n    \"color\": \"#9e9e9e\"\n  }]\n}, {\n  \"featureType\": \"road\",\n  \"elementType\": \"geometry\",\n  \"stylers\": [{\n    \"color\": \"#ffffff\"\n  }]\n}, {\n  \"featureType\": \"road.arterial\",\n  \"elementType\": \"labels.text.fill\",\n  \"stylers\": [{\n    \"color\": \"#757575\"\n  }]\n}, {\n  \"featureType\": \"road.highway\",\n  \"elementType\": \"geometry\",\n  \"stylers\": [{\n    \"color\": \"#dadada\"\n  }]\n}, {\n  \"featureType\": \"road.highway\",\n  \"elementType\": \"labels.text.fill\",\n  \"stylers\": [{\n    \"color\": \"#616161\"\n  }]\n}, {\n  \"featureType\": \"road.local\",\n  \"elementType\": \"labels.text.fill\",\n  \"stylers\": [{\n    \"color\": \"#9e9e9e\"\n  }]\n}, {\n  \"featureType\": \"transit.line\",\n  \"elementType\": \"geometry\",\n  \"stylers\": [{\n    \"color\": \"#e5e5e5\"\n  }]\n}, {\n  \"featureType\": \"transit.station\",\n  \"elementType\": \"geometry\",\n  \"stylers\": [{\n    \"color\": \"#eeeeee\"\n  }]\n}, {\n  \"featureType\": \"water\",\n  \"elementType\": \"geometry\",\n  \"stylers\": [{\n    \"color\": \"#c9c9c9\"\n  }]\n}, {\n  \"featureType\": \"water\",\n  \"elementType\": \"labels.text.fill\",\n  \"stylers\": [{\n    \"color\": \"#9e9e9e\"\n  }]\n}];\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dvb2dsZS1tYXAuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2pzL2NvbXBvbmVudHMvZ29vZ2xlLW1hcC5qcz80ZjFhIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEdNID0ge1xyXG5cclxuICBpbml0KCkge1xyXG4gICAgdGhpcy5pbml0Q2FjaGUoKTtcclxuICAgIHRoaXMuaW5pdE1hcCgpO1xyXG4gIH0sXHJcblxyXG4gIGluaXRDYWNoZSgpIHtcclxuICAgIHRoaXMuJGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XHJcbiAgfSxcclxuXHJcbiAgaW5pdE1hcCgpIHtcclxuICAgIGNvbnN0IGNvb3JkaW5hdGVzID0ge1xyXG4gICAgICBsYXQ6IDQ1LjAzNjM4NDg5OTk5OTk5LFxyXG4gICAgICBsbmc6IDM4Ljk5NjQ2NDY5OTk5OTkzXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGNlbnRlck1hcCA9IHtcclxuICAgICAgbGF0OiA0NS4wMzYzODQ4OTk5OTk5OSxcclxuICAgICAgbG5nOiAzOC45OTY0NjQ2OTk5OTk5M1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG1hcmtlckltYWdlID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlckltYWdlKCdpbWcvbWFwLW1hcmtlci5zdmcnLCBudWxsLCBudWxsLCBudWxsLCBuZXcgZ29vZ2xlLm1hcHMuU2l6ZSgzNSwgMzUpKTtcclxuICAgICAgY29uc3Qgem9vbSA9IDE1O1xyXG5cclxuICAgICAgY29uc3QgbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwJyksIHtcclxuICAgICAgICBjZW50ZXI6IGNlbnRlck1hcCxcclxuICAgICAgICB6b29tLFxyXG5cclxuICAgICAgICBkaXNhYmxlRGVmYXVsdFVJOiB0cnVlLFxyXG4gICAgICAgIHpvb21Db250cm9sOiB0cnVlLFxyXG4gICAgICAgIHNjcm9sbHdoZWVsOiBmYWxzZVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xyXG4gICAgICAgIHBvc2l0aW9uOiBjb29yZGluYXRlcyxcclxuICAgICAgICBtYXAsXHJcbiAgICAgICAgaWNvbjogbWFya2VySW1hZ2VcclxuICAgICAgfSk7XHJcblxyXG5cclxuICAgIG1hcC5zZXRPcHRpb25zKHtcclxuICAgICAgc3R5bGVzOiBkYXRhU3R5bGVzXHJcbiAgICB9KTtcclxuXHJcblxyXG4gIH1cclxufTtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpe1xyXG4gIGNvbnN0IG1hcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYXAnKTtcclxuICBpZiAobWFwKSB7XHJcbiAgICBHTS5pbml0KCk7XHJcbiAgfVxyXG59KVxyXG5cclxuXHJcbnZhciBkYXRhU3R5bGVzID0gW3tcclxuICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeVwiLFxyXG4gICAgXCJzdHlsZXJzXCI6IFt7XHJcbiAgICAgIFwiY29sb3JcIjogXCIjZjVmNWY1XCJcclxuICAgIH1dXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLmljb25cIixcclxuICAgIFwic3R5bGVyc1wiOiBbe1xyXG4gICAgICBcInZpc2liaWxpdHlcIjogXCJvZmZcIlxyXG4gICAgfV1cclxuICB9LFxyXG4gIHtcclxuICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMudGV4dC5maWxsXCIsXHJcbiAgICBcInN0eWxlcnNcIjogW3tcclxuICAgICAgXCJjb2xvclwiOiBcIiM2MTYxNjFcIlxyXG4gICAgfV1cclxuICB9LFxyXG4gIHtcclxuICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMudGV4dC5zdHJva2VcIixcclxuICAgIFwic3R5bGVyc1wiOiBbe1xyXG4gICAgICBcImNvbG9yXCI6IFwiI2Y1ZjVmNVwiXHJcbiAgICB9XVxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcImFkbWluaXN0cmF0aXZlLmxhbmRfcGFyY2VsXCIsXHJcbiAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLnRleHQuZmlsbFwiLFxyXG4gICAgXCJzdHlsZXJzXCI6IFt7XHJcbiAgICAgIFwiY29sb3JcIjogXCIjYmRiZGJkXCJcclxuICAgIH1dXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImZlYXR1cmVUeXBlXCI6IFwicG9pXCIsXHJcbiAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnlcIixcclxuICAgIFwic3R5bGVyc1wiOiBbe1xyXG4gICAgICBcImNvbG9yXCI6IFwiI2VlZWVlZVwiXHJcbiAgICB9XVxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcInBvaVwiLFxyXG4gICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVscy50ZXh0LmZpbGxcIixcclxuICAgIFwic3R5bGVyc1wiOiBbe1xyXG4gICAgICBcImNvbG9yXCI6IFwiIzc1NzU3NVwiXHJcbiAgICB9XVxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcInBvaS5wYXJrXCIsXHJcbiAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnlcIixcclxuICAgIFwic3R5bGVyc1wiOiBbe1xyXG4gICAgICBcImNvbG9yXCI6IFwiI2U1ZTVlNVwiXHJcbiAgICB9XVxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcInBvaS5wYXJrXCIsXHJcbiAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLnRleHQuZmlsbFwiLFxyXG4gICAgXCJzdHlsZXJzXCI6IFt7XHJcbiAgICAgIFwiY29sb3JcIjogXCIjOWU5ZTllXCJcclxuICAgIH1dXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZFwiLFxyXG4gICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5XCIsXHJcbiAgICBcInN0eWxlcnNcIjogW3tcclxuICAgICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIlxyXG4gICAgfV1cclxuICB9LFxyXG4gIHtcclxuICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkLmFydGVyaWFsXCIsXHJcbiAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLnRleHQuZmlsbFwiLFxyXG4gICAgXCJzdHlsZXJzXCI6IFt7XHJcbiAgICAgIFwiY29sb3JcIjogXCIjNzU3NTc1XCJcclxuICAgIH1dXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZC5oaWdod2F5XCIsXHJcbiAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnlcIixcclxuICAgIFwic3R5bGVyc1wiOiBbe1xyXG4gICAgICBcImNvbG9yXCI6IFwiI2RhZGFkYVwiXHJcbiAgICB9XVxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWQuaGlnaHdheVwiLFxyXG4gICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVscy50ZXh0LmZpbGxcIixcclxuICAgIFwic3R5bGVyc1wiOiBbe1xyXG4gICAgICBcImNvbG9yXCI6IFwiIzYxNjE2MVwiXHJcbiAgICB9XVxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWQubG9jYWxcIixcclxuICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMudGV4dC5maWxsXCIsXHJcbiAgICBcInN0eWxlcnNcIjogW3tcclxuICAgICAgXCJjb2xvclwiOiBcIiM5ZTllOWVcIlxyXG4gICAgfV1cclxuICB9LFxyXG4gIHtcclxuICAgIFwiZmVhdHVyZVR5cGVcIjogXCJ0cmFuc2l0LmxpbmVcIixcclxuICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeVwiLFxyXG4gICAgXCJzdHlsZXJzXCI6IFt7XHJcbiAgICAgIFwiY29sb3JcIjogXCIjZTVlNWU1XCJcclxuICAgIH1dXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImZlYXR1cmVUeXBlXCI6IFwidHJhbnNpdC5zdGF0aW9uXCIsXHJcbiAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnlcIixcclxuICAgIFwic3R5bGVyc1wiOiBbe1xyXG4gICAgICBcImNvbG9yXCI6IFwiI2VlZWVlZVwiXHJcbiAgICB9XVxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcIndhdGVyXCIsXHJcbiAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnlcIixcclxuICAgIFwic3R5bGVyc1wiOiBbe1xyXG4gICAgICBcImNvbG9yXCI6IFwiI2M5YzljOVwiXHJcbiAgICB9XVxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcIndhdGVyXCIsXHJcbiAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLnRleHQuZmlsbFwiLFxyXG4gICAgXCJzdHlsZXJzXCI6IFt7XHJcbiAgICAgIFwiY29sb3JcIjogXCIjOWU5ZTllXCJcclxuICAgIH1dXHJcbiAgfVxyXG5dXHJcbiJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQU1BO0FBQ0E7QUFEQTtBQUtBO0FBOUNBO0FBQ0E7QUFnREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFPQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBT0E7QUFDQTtBQUNBO0FBREE7QUFGQTtBQU9BO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSEEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/google-map.js\n");

/***/ }),

/***/ "./contacts.js":
/*!*********************!*\
  !*** ./contacts.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./components/google-map */ \"./components/google-map.js\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250YWN0cy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvY29udGFjdHMuanM/YWU5YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vY29tcG9uZW50cy9nb29nbGUtbWFwJztcclxuIl0sIm1hcHBpbmdzIjoiOztBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./contacts.js\n");

/***/ })

/******/ });