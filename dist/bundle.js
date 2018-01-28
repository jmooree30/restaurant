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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tabs__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__header__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__build__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__footer__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__content__ = __webpack_require__(5);






const content = document.querySelector("#content");
content.setAttribute("style", "text-align:center; margin:0 auto;")
Object(__WEBPACK_IMPORTED_MODULE_2__build__["a" /* default */])([Object(__WEBPACK_IMPORTED_MODULE_1__header__["a" /* default */])(),Object(__WEBPACK_IMPORTED_MODULE_0__tabs__["a" /* default */])("About us"),Object(__WEBPACK_IMPORTED_MODULE_0__tabs__["a" /* default */])("Menu"),Object(__WEBPACK_IMPORTED_MODULE_0__tabs__["a" /* default */])("Contact"), Object(__WEBPACK_IMPORTED_MODULE_4__content__["a" /* about */])(), Object(__WEBPACK_IMPORTED_MODULE_3__footer__["a" /* default */])()], content)

const buttons = document.querySelectorAll("button")
buttons.forEach(function(button){
  button.addEventListener("click", function(){
   const p = document.querySelector("p")
   p.remove()
   if (button.innerHTML == "About us"){
    document.body.appendChild(Object(__WEBPACK_IMPORTED_MODULE_4__content__["a" /* about */])())
  }
   if (button.innerHTML == "Menu"){
    document.body.appendChild(Object(__WEBPACK_IMPORTED_MODULE_4__content__["c" /* menu */])())
  }
   if (button.innerHTML == "Contact"){
    document.body.appendChild(Object(__WEBPACK_IMPORTED_MODULE_4__content__["b" /* contact */])())
  }
})
})

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const Tab = (name) => {
  const tab = document.createElement("button")
  tab.innerHTML = name
  tab.setAttribute("style","margin:0 5px; border-radius:0; background:gray; color:white; border:none;")
  return tab
};

/* harmony default export */ __webpack_exports__["a"] = (Tab);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function header(){
  header = document.createElement("h1");
  header.innerHTML = "JS Restaurant Page";
  header.setAttribute("style", "text-align:center");
  return header
};

/* harmony default export */ __webpack_exports__["a"] = (header);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function build(elements,container){
  elements.forEach(function(elements){
    container.appendChild(elements);
  })
}

/* harmony default export */ __webpack_exports__["a"] = (build);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function footer(){
  footer = document.createElement("footer")
  footer.setAttribute("style", "text-align:center; position:fixed; bottom:0; width:100%; height:50px; border:1px solid black;")
  footer.innerHTML = "This is the boring page footer."
  return footer;
}

/* harmony default export */ __webpack_exports__["a"] = (footer);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return about; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return menu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return contact; });
function about(){
  const content = document.createElement("p")
  content.setAttribute("style", "text-align:center;height:200px; width:75%; border:1px solid gray; display:block; margin: 0 auto;")
  content.innerHTML = " This whole page was created with vanilla javacript."
  return content;
}

function menu(){
  const content = document.createElement("p")
  content.setAttribute("style", "text-align:center; height:200px; width:75%; border:1px solid gray; display:block; margin: 0 auto;")
  content.innerHTML = "nom nom nom"
  return content;
}

function contact(){
  const content = document.createElement("p")
  content.setAttribute("style", "text-align:center; height:200px; width:75%; border:1px solid gray; display:block; margin: 0 auto;")
  content.innerHTML = `<a href="https://github.com/jmooree30">Github</a>`
  return content;
}



/***/ })
/******/ ]);