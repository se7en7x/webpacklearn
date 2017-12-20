webpackJsonp(["main"],{

/***/ "./src/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_css__ = __webpack_require__("./src/style.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__print__ = __webpack_require__("./src/print.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__print1__ = __webpack_require__("./src/print1.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__print2__ = __webpack_require__("./src/print2.js");





// import Print3 from './print3';





function component() {
  var element = document.createElement('div');
  // Lodash, now imported by this script
  element.innerHTML = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.join(['Hello', 'webpack'], ' ');
  element.onclick = __WEBPACK_IMPORTED_MODULE_2__print__["a" /* default */].bind(null, 'Hello webpack!');
    element.onclick = __WEBPACK_IMPORTED_MODULE_3__print1__["a" /* default */].bind(null, 'Hello webpack!');
    element.onclick = __WEBPACK_IMPORTED_MODULE_4__print2__["a" /* default */].bind(null, 'Hello webpack!');
    //     element.onclick = Print3.bind(null, 'Hello webpack!');


  element.classList.add('hello');

  console.log("asdasdssss");
  return element;
}

document.body.appendChild(component());

/***/ }),

/***/ "./src/print.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = print;
 function print(text) {
   console.log(text);
 };

/***/ }),

/***/ "./src/print1.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = print;
 function print(text) {
   console.log(text);
 };

/***/ }),

/***/ "./src/print2.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = print;
 function print(text) {
   console.log(text);
 };

/***/ }),

/***/ "./src/style.css":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},["./src/index.js"]);