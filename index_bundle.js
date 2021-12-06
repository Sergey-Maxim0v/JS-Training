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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./field */ \"./src/field.js\");\n/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./class */ \"./src/class.js\");\n/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scss/index.scss */ \"./src/scss/index.scss\");\n\n\n\n\n//_____Turtle which is displayed in the browser\nconst VTurtle = new _class__WEBPACK_IMPORTED_MODULE_1__.Turtle('VTurtle')\n\n//___put the turtle on the starting element\n_field__WEBPACK_IMPORTED_MODULE_0__[\"default\"][VTurtle.position.y][VTurtle.position.x].classList.add('p6TurtleStyle')\n\n//_____browser button listeners\nconst buttonUp = document.querySelector('.p6BtnUp')\nconst buttonDown = document.querySelector('.p6BtnDown')\nconst buttonLeft = document.querySelector('.p6BtnLeft')\nconst buttonRight = document.querySelector('.p6BtnRight')\nconst moveUp = buttonUp.addEventListener('click', () => VTurtle.move('up'))\nconst moveDown = buttonDown.addEventListener('click', () => VTurtle.move('down'))\nconst moveLeft = buttonLeft.addEventListener('click', () => VTurtle.move('left'))\nconst moveRight = buttonRight.addEventListener('click', () => VTurtle.move('right'))\n\n//_____keyboard listeners\n\n//___keyboard listener Down\nconst KeyboardListnerDown = document.addEventListener('keydown', (event)=> {\n  if(event.code == 'ArrowUp') {\n    document.querySelector('.p6BtnUp').classList.add('p6BtnPush')\n    VTurtle.move('up')\n  }\n  if(event.code == 'ArrowDown') {\n    document.querySelector('.p6BtnDown').classList.add('p6BtnPush')\n    VTurtle.move('down')\n  }\n  if(event.code == 'ArrowLeft') {\n    document.querySelector('.p6BtnLeft').classList.add('p6BtnPush')\n    VTurtle.move('left')\n  }\n  if(event.code == 'ArrowRight') {\n    document.querySelector('.p6BtnRight').classList.add('p6BtnPush')\n    VTurtle.move('right')\n  }\n})\n\n//___keyboard listener Up\nconst KeyboardListnerUp = document.addEventListener('keyup', (event)=> {\n  if(event.code == 'ArrowUp') {\n    document.querySelector('.p6BtnUp').classList.remove('p6BtnPush')\n  }\n  if(event.code == 'ArrowDown') {\n    document.querySelector('.p6BtnDown').classList.remove('p6BtnPush')\n  }\n  if(event.code == 'ArrowLeft') {\n    document.querySelector('.p6BtnLeft').classList.remove('p6BtnPush')\n  }\n  if(event.code == 'ArrowRight') {\n    document.querySelector('.p6BtnRight').classList.remove('p6BtnPush')\n  }\n})\n\n//# sourceURL=webpack://turtle-js-training/./src/app.js?");

/***/ }),

/***/ "./src/class.js":
/*!**********************!*\
  !*** ./src/class.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Turtle\": () => (/* binding */ Turtle)\n/* harmony export */ });\n/* harmony import */ var _field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./field */ \"./src/field.js\");\n\n\n//_____Turtle\nclass Turtle {\n  constructor(name, x = 0, y = 0) {\n    this.name = name\n    this.position = { x, y }\n  }\n  //_method: movement Turtle\n  move(...placements) {\n    for (let placement of placements) {\n      for (let onePlacement of placement.split(' ')) {\n        //_clear the style of the turtle's previous position\n        _field__WEBPACK_IMPORTED_MODULE_0__[\"default\"][this.position.y][this.position.x].classList.remove('p6TurtleStyle')\n        //_\n        if (onePlacement == 'right') {\n          if (this.position.x < 4) {\n            this.position.x++\n          }\n        }\n        if (onePlacement == 'left') {\n          if (this.position.x > 0) {\n            this.position.x--\n          }\n        }\n        if (onePlacement == 'up') {\n          if (this.position.y > 0) {\n            this.position.y--\n          }\n        }\n        if (onePlacement == 'down') {\n          if (this.position.y < 4) {\n            this.position.y++\n          }\n        }\n        //_assign style and show message on console\n        _field__WEBPACK_IMPORTED_MODULE_0__[\"default\"][this.position.y][this.position.x].classList.add('p6TurtleStyle')\n        console.log(`// Turtle ${this.name} moved ${onePlacement} (${this.position.x}, ${this.position.y})`)\n      }\n    }\n    return this\n  }\n\n  //_method: display the current position of the turtle\n  showPosition() {\n    console.log(`(${this.position.x}, ${this.position.y})`)\n    return this\n  }\n}\n\n\n//# sourceURL=webpack://turtle-js-training/./src/class.js?");

/***/ }),

/***/ "./src/field.js":
/*!**********************!*\
  !*** ./src/field.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n//_____create a Field\n\nfunction createField(arr) {\n  const field = []\n  for (let i = 0; i < 5; i++) {\n    field.push([...arr[i].querySelectorAll('.p6FieldElement')])\n  }\n  return field\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createField([...document.querySelectorAll('.p6FieldRow')]));\n\n//# sourceURL=webpack://turtle-js-training/./src/field.js?");

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