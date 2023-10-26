/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("const menu = __webpack_require__(/*! ./module/menu.js */ \"./src/js/module/menu.js\");\n\n//# sourceURL=webpack://y/./src/js/main.js?");

/***/ }),

/***/ "./src/js/module/menu.js":
/*!*******************************!*\
  !*** ./src/js/module/menu.js ***!
  \*******************************/
/***/ (function() {

eval("const burgerBtn = document.querySelector(\".nav-header-burger\");\nconst navHeader = document.querySelector(\".nav-header\");\nconst submenuLists = document.querySelectorAll(\".has-submenu\");\n\nfunction menu() {\n\n    burgerBtn.addEventListener('click', (el) => {\n        el.preventDefault();\n        burgerBtn.classList.toggle('active');\n        if (burgerBtn.classList.contains('active')) {\n            navHeader.classList.add('open');\n        } else {\n            navHeader.classList.remove('open');\n        }\n    }) \n    \n    for (let submenuList of submenuLists) {\n        submenuList.addEventListener('click', (e) => {\n            e.preventDefault();\n            for (let i = 0; i < submenuLists.length; i++) {\n                console.log(submenuLists[i]);\n                if (submenuLists[i].classList.contains('open')) {\n                    submenuLists[i].classList.remove('open');\n                }\n            }\n            submenuList.classList.add('open');\n        })\n    }\n}\nmenu();\n\n//# sourceURL=webpack://y/./src/js/module/menu.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;