/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/index.scss":
/*!*****************************!*\
  !*** ./src/scss/index.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://turtle-js-training/./src/scss/index.scss?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./field */ \"./src/field.js\");\n/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./class */ \"./src/class.js\");\n/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scss/index.scss */ \"./src/scss/index.scss\");\n\r\n\r\n\r\n\r\n//_____Turtle which is displayed in the browser\r\nconst VTurtle = new _class__WEBPACK_IMPORTED_MODULE_1__.Turtle('VTurtle')\r\n\r\n//___put the turtle on the starting element\r\n_field__WEBPACK_IMPORTED_MODULE_0__[\"default\"][VTurtle.position.y][VTurtle.position.x].classList.add('p6TurtleStyle')\r\n\r\n//_____browser button listeners\r\nconst buttonUp = document.querySelector('.p6BtnUp')\r\nconst buttonDown = document.querySelector('.p6BtnDown')\r\nconst buttonLeft = document.querySelector('.p6BtnLeft')\r\nconst buttonRight = document.querySelector('.p6BtnRight')\r\nconst moveUp = buttonUp.addEventListener('click', () => VTurtle.move('up'))\r\nconst moveDown = buttonDown.addEventListener('click', () => VTurtle.move('down'))\r\nconst moveLeft = buttonLeft.addEventListener('click', () => VTurtle.move('left'))\r\nconst moveRight = buttonRight.addEventListener('click', () => VTurtle.move('right'))\r\n\r\n//_____keyboard listeners\r\n\r\n//___keyboard listener Down\r\nconst KeyboardListnerDown = document.addEventListener('keydown', (event)=> {\r\n  if(event.code == 'ArrowUp') {\r\n    document.querySelector('.p6BtnUp').classList.add('p6BtnPush')\r\n    VTurtle.move('up')\r\n  }\r\n  if(event.code == 'ArrowDown') {\r\n    document.querySelector('.p6BtnDown').classList.add('p6BtnPush')\r\n    VTurtle.move('down')\r\n  }\r\n  if(event.code == 'ArrowLeft') {\r\n    document.querySelector('.p6BtnLeft').classList.add('p6BtnPush')\r\n    VTurtle.move('left')\r\n  }\r\n  if(event.code == 'ArrowRight') {\r\n    document.querySelector('.p6BtnRight').classList.add('p6BtnPush')\r\n    VTurtle.move('right')\r\n  }\r\n})\r\n\r\n//___keyboard listener Up\r\nconst KeyboardListnerUp = document.addEventListener('keyup', (event)=> {\r\n  if(event.code == 'ArrowUp') {\r\n    document.querySelector('.p6BtnUp').classList.remove('p6BtnPush')\r\n  }\r\n  if(event.code == 'ArrowDown') {\r\n    document.querySelector('.p6BtnDown').classList.remove('p6BtnPush')\r\n  }\r\n  if(event.code == 'ArrowLeft') {\r\n    document.querySelector('.p6BtnLeft').classList.remove('p6BtnPush')\r\n  }\r\n  if(event.code == 'ArrowRight') {\r\n    document.querySelector('.p6BtnRight').classList.remove('p6BtnPush')\r\n  }\r\n})\n\n//# sourceURL=webpack://turtle-js-training/./src/app.js?");

/***/ }),

/***/ "./src/class.js":
/*!**********************!*\
  !*** ./src/class.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Turtle\": () => (/* binding */ Turtle)\n/* harmony export */ });\n/* harmony import */ var _field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./field */ \"./src/field.js\");\n\r\n\r\n//_____Turtle\r\nclass Turtle {\r\n  constructor(name, x = 0, y = 0) {\r\n    this.name = name\r\n    this.position = { x, y }\r\n  }\r\n  //_method: movement Turtle\r\n  move(...placements) {\r\n    for (let placement of placements) {\r\n      for (let onePlacement of placement.split(' ')) {\r\n        //_clear the style of the turtle's previous position\r\n        _field__WEBPACK_IMPORTED_MODULE_0__[\"default\"][this.position.y][this.position.x].classList.remove('p6TurtleStyle')\r\n        //_\r\n        if (onePlacement == 'right') {\r\n          if (this.position.x < 4) {\r\n            this.position.x++\r\n          }\r\n        }\r\n        if (onePlacement == 'left') {\r\n          if (this.position.x > 0) {\r\n            this.position.x--\r\n          }\r\n        }\r\n        if (onePlacement == 'up') {\r\n          if (this.position.y > 0) {\r\n            this.position.y--\r\n          }\r\n        }\r\n        if (onePlacement == 'down') {\r\n          if (this.position.y < 4) {\r\n            this.position.y++\r\n          }\r\n        }\r\n        //_assign style and show message on console\r\n        _field__WEBPACK_IMPORTED_MODULE_0__[\"default\"][this.position.y][this.position.x].classList.add('p6TurtleStyle')\r\n        console.log(`// Turtle ${this.name} moved ${onePlacement} (${this.position.x}, ${this.position.y})`)\r\n      }\r\n    }\r\n    return this\r\n  }\r\n\r\n  //_method: display the current position of the turtle\r\n  showPosition() {\r\n    console.log(`(${this.position.x}, ${this.position.y})`)\r\n    return this\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://turtle-js-training/./src/class.js?");

/***/ }),

/***/ "./src/field.js":
/*!**********************!*\
  !*** ./src/field.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n//_____create a Field\r\n\r\nfunction createField(arr) {\r\n  const field = []\r\n  for (let i = 0; i < 5; i++) {\r\n    field.push([...arr[i].querySelectorAll('.p6FieldElement')])\r\n  }\r\n  return field\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createField([...document.querySelectorAll('.p6FieldRow')]));\n\n//# sourceURL=webpack://turtle-js-training/./src/field.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;