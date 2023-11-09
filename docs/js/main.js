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

"use strict";
eval("\nconst portfolioSlider = __webpack_require__(/*! ./module/portfolio.js */ \"./src/js/module/portfolio.js\");\nconst companySlider = __webpack_require__(/*! ./module/company.js */ \"./src/js/module/company.js\");\nconst categoryNavSlider = __webpack_require__(/*! ./module/category-nav.js */ \"./src/js/module/category-nav.js\");\n\n//# sourceURL=webpack://y/./src/js/main.js?");

/***/ }),

/***/ "./src/js/module/category-nav.js":
/*!***************************************!*\
  !*** ./src/js/module/category-nav.js ***!
  \***************************************/
/***/ (function() {

eval("let $sliderCategoryNav = $('.category-nav');\r\n\r\n$(window).on('load resize', function() {\r\n    if ($(window).width() < 768) {\r\n        $sliderCategoryNav.not('.slick-initialized').slick({\r\n            dots: false,\r\n            infinite: false,\r\n            speed: 100,\r\n            slidesToShow: 1,\r\n            slidesToScroll: 1,\r\n            arrows: false,\r\n            variableWidth: true\r\n        });\r\n    } else {\r\n        $sliderCategoryNav.filter('.slick-initialized').slick('unslick');\r\n    }\r\n});\n\n//# sourceURL=webpack://y/./src/js/module/category-nav.js?");

/***/ }),

/***/ "./src/js/module/company.js":
/*!**********************************!*\
  !*** ./src/js/module/company.js ***!
  \**********************************/
/***/ (function() {

eval("let $sliderFeedback = $('.reviews-main-list');\n\n\n\n$sliderFeedback.slick({\n    dots: false,\n    infinite: false,\n    speed: 300,\n    slidesToShow: 4,\n    slidesToScroll: 1,\n    arrows: true,\n    responsive: [\n        {\n          breakpoint: 1024,\n          settings: {\n            slidesToShow: 3,\n          }\n        },\n        {\n          breakpoint: 768,\n          settings: {\n            slidesToShow: 1,\n            variableWidth: true\n          }\n        }\n      ]\n});\n\n//# sourceURL=webpack://y/./src/js/module/company.js?");

/***/ }),

/***/ "./src/js/module/portfolio.js":
/*!************************************!*\
  !*** ./src/js/module/portfolio.js ***!
  \************************************/
/***/ (function() {

eval("let $sliderPortfolio = $('.portfolio-main-list');\n\n$(window).on('load resize', function() {\n    if ($(window).width() < 768) {\n        $sliderPortfolio.not('.slick-initialized').slick({\n            dots: false,\n            infinite: false,\n            speed: 100,\n            slidesToShow: 1,\n            slidesToScroll: 1,\n            arrows: false,\n            variableWidth: true\n        });\n    } else {\n        $sliderPortfolio.filter('.slick-initialized').slick('unslick');\n    }\n});\n\n//# sourceURL=webpack://y/./src/js/module/portfolio.js?");

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