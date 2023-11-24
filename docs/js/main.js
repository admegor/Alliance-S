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
eval("\nconst portfolioSlider = __webpack_require__(/*! ./module/portfolio.js */ \"./src/js/module/portfolio.js\");\nconst companySlider = __webpack_require__(/*! ./module/company.js */ \"./src/js/module/company.js\");\nconst categoryNavSlider = __webpack_require__(/*! ./module/category-nav.js */ \"./src/js/module/category-nav.js\");\nconst certificatesSlider = __webpack_require__(/*! ./module/certificates.js */ \"./src/js/module/certificates.js\");\nconst menu = __webpack_require__(/*! ./module/menu.js */ \"./src/js/module/menu.js\");\nconst popup = __webpack_require__(/*! ./module/popup.js */ \"./src/js/module/popup.js\");\nconst sliderРero = __webpack_require__(/*! ./module/slider-hero.js */ \"./src/js/module/slider-hero.js\");\n\n//# sourceURL=webpack://y/./src/js/main.js?");

/***/ }),

/***/ "./src/js/module/category-nav.js":
/*!***************************************!*\
  !*** ./src/js/module/category-nav.js ***!
  \***************************************/
/***/ (function() {

eval("let $sliderCategoryNav = $('.category-nav');\r\n\r\n$(window).on('load resize', function() {\r\n    if ($(window).width() < 768) {\r\n        $sliderCategoryNav.not('.slick-initialized').slick({\r\n            dots: false,\r\n            infinite: false,\r\n            speed: 100,\r\n            slidesToShow: 1,\r\n            slidesToScroll: 1,\r\n            arrows: false,\r\n            variableWidth: true\r\n        });\r\n    } else {\r\n        $sliderCategoryNav.filter('.slick-initialized').slick('unslick');\r\n    }\r\n});\n\n//# sourceURL=webpack://y/./src/js/module/category-nav.js?");

/***/ }),

/***/ "./src/js/module/certificates.js":
/*!***************************************!*\
  !*** ./src/js/module/certificates.js ***!
  \***************************************/
/***/ (function() {

eval("let $sliderFeedback = $('.certificates-page__slider');\r\n\r\n\r\n\r\n$sliderFeedback.slick({\r\n    dots: false,\r\n    infinite: false,\r\n    speed: 300,\r\n    slidesToShow: 4,\r\n    slidesToScroll: 1,\r\n    arrows: true,\r\n    responsive: [\r\n        {\r\n          breakpoint: 1024,\r\n          settings: {\r\n            slidesToShow: 3,\r\n          }\r\n        },\r\n        {\r\n          breakpoint: 768,\r\n          settings: {\r\n            slidesToShow: 1,\r\n            variableWidth: true\r\n          }\r\n        }\r\n      ]\r\n});\n\n//# sourceURL=webpack://y/./src/js/module/certificates.js?");

/***/ }),

/***/ "./src/js/module/company.js":
/*!**********************************!*\
  !*** ./src/js/module/company.js ***!
  \**********************************/
/***/ (function() {

eval("let $sliderFeedback = $('.reviews-main-list');\n\n\n\n$sliderFeedback.slick({\n    dots: false,\n    infinite: false,\n    speed: 300,\n    slidesToShow: 4,\n    slidesToScroll: 1,\n    arrows: true,\n    responsive: [\n        {\n          breakpoint: 1024,\n          settings: {\n            slidesToShow: 3,\n          }\n        },\n        {\n          breakpoint: 768,\n          settings: {\n            slidesToShow: 1,\n            variableWidth: true\n          }\n        }\n      ]\n});\n\n//# sourceURL=webpack://y/./src/js/module/company.js?");

/***/ }),

/***/ "./src/js/module/menu.js":
/*!*******************************!*\
  !*** ./src/js/module/menu.js ***!
  \*******************************/
/***/ (function() {

eval("const burgerBtn = document.querySelector(\".nav-header-burger\");\nconst navHeader = document.querySelector(\".header__menu\");\nconst submenuLists = document.querySelectorAll(\".has-submenu\");\nconst menuCatalogTrigger = document.querySelector('.menu-catalog-item');\nconst menuCatalog = document.querySelector('.header-catalog');\nconst headerEl = document.querySelector('.header');\n\n// window.addEventListener('scroll', function () {\n//     if (window.scrollY > 10) {\n//         headerEl.classList.add(\"scroll\");\n//         } else {\n//             headerEl.classList.remove(\"scroll\");\n//         }\n//     });\n\n    $(window).on('load resize', function() {\n        if ($(window).width() > 1300) {\n            window.addEventListener('scroll', function () {\n                if (window.scrollY > 10) {\n                    headerEl.classList.add(\"scroll\");\n                } else {\n                    headerEl.classList.remove(\"scroll\");\n                }\n            });\n        } else {\n            headerEl.classList.remove(\"scroll\");\n        }\n    });\n\nfunction menu() {\n\n    burgerBtn.addEventListener('click', (el) => {\n        el.preventDefault();\n        console.log(\"ckick!\");\n        burgerBtn.classList.toggle('active');\n        if (burgerBtn.classList.contains('active')) {\n            navHeader.classList.add('open');\n        } else {\n            navHeader.classList.remove('open');\n        }\n    }) \n    \n    for (let submenuList of submenuLists) {\n        submenuList.addEventListener('click', (e) => {\n            e.preventDefault();\n            for (let i = 0; i < submenuLists.length; i++) {\n                console.log(submenuLists[i]);\n                if (submenuLists[i].classList.contains('open')) {\n                    submenuLists[i].classList.remove('open');\n                }\n            }\n            submenuList.classList.add('open');\n        })\n    }\n\n    menuCatalogTrigger.addEventListener(\"mouseenter\", () => {\n        menuCatalog.classList.add('show');\n        console.log(\"show\");\n    })\n    menuCatalogTrigger.addEventListener(\"mouseout\", () => {\n        menuCatalog.classList.remove('show');\n        console.log(\"hidden\");\n    })\n    menuCatalog.addEventListener(\"mouseenter\", () => {\n        menuCatalog.classList.add('show');\n        console.log(\"show\");\n    })\n    menuCatalog.addEventListener(\"mouseout\", () => {\n        menuCatalog.classList.remove('show');\n        console.log(\"hidden\");\n    })\n}\n\n\n\nmenu();\n\n//# sourceURL=webpack://y/./src/js/module/menu.js?");

/***/ }),

/***/ "./src/js/module/popup.js":
/*!********************************!*\
  !*** ./src/js/module/popup.js ***!
  \********************************/
/***/ (function() {

eval("const popupLinks = document.querySelectorAll('.popup-link');\r\nconst body = document.querySelector('body');\r\nconst lockPadding = document.querySelectorAll('.lock-padding')\r\n\r\nlet unlock = true;\r\n\r\nconst timeout = 800;\r\n\r\nfor (let i = 0; i < popupLinks.length; i++) {\r\n    const popupLink = popupLinks[i];\r\n    popupLink.addEventListener('click', function(e) {\r\n        const popupName = popupLink.getAttribute('href').replace('#', '');\r\n        const currentPopup = document.getElementById(popupName);\r\n        popupOpen(currentPopup);\r\n        e.preventDefault();\r\n    })\r\n}\r\n\r\nconst popupCloseIcon = document.querySelectorAll('.close-popup');\r\n\r\nif (popupCloseIcon.length > 0) {\r\n    for (let i = 0; i < popupCloseIcon.length; i++) {\r\n        const el = popupCloseIcon[i];\r\n        el.addEventListener('click', function(e) {\r\n            popupClose(el.closest('.popup'));\r\n            e.preventDefault();\r\n        })\r\n    }\r\n}\r\n\r\nfunction popupOpen(currentPopup) {\r\n    if (currentPopup && unlock) {\r\n        const popupActive = document.querySelector('.popup.open');\r\n        if (popupActive) {\r\n            popupClose(popupActive, false)\r\n        }\r\n\r\n        currentPopup.classList.add('open');\r\n        \r\n        console.log('openpopup');\r\n        currentPopup.addEventListener('click', function(e) {\r\n            if (!e.target.closest('.popup__content')) {\r\n                popupClose(e.target.closest('.popup'));\r\n            }\r\n        })\r\n    }\r\n}\r\n\r\nfunction popupClose(popupActive, doUnlock = true) {\r\n    if (unlock) {\r\n        popupActive.classList.remove('open');\r\n    }\r\n}\r\n\r\ndocument.addEventListener('keydown', function(e) {\r\n    if (e.which === 27) {\r\n        const popupActive = document.querySelector('.popup.open');\r\n        popupClose(popupActive);\r\n        \r\n        console.log('close-esc-popup');\r\n    }\r\n})\n\n//# sourceURL=webpack://y/./src/js/module/popup.js?");

/***/ }),

/***/ "./src/js/module/portfolio.js":
/*!************************************!*\
  !*** ./src/js/module/portfolio.js ***!
  \************************************/
/***/ (function() {

eval("let $sliderPortfolio = $('.portfolio-main-list');\n\n$(window).on('load resize', function() {\n    if ($(window).width() < 768) {\n        $sliderPortfolio.not('.slick-initialized').slick({\n            dots: false,\n            infinite: false,\n            speed: 100,\n            slidesToShow: 1,\n            slidesToScroll: 1,\n            arrows: false,\n            variableWidth: true\n        });\n    } else {\n        $sliderPortfolio.filter('.slick-initialized').slick('unslick');\n    }\n});\n\n//# sourceURL=webpack://y/./src/js/module/portfolio.js?");

/***/ }),

/***/ "./src/js/module/slider-hero.js":
/*!**************************************!*\
  !*** ./src/js/module/slider-hero.js ***!
  \**************************************/
/***/ (function() {

eval("let $sliderFeedback = $('.slider-hero');\r\n\r\n\r\n\r\n$sliderFeedback.slick({\r\n    dots: true,\r\n    infinite: false,\r\n    speed: 500,\r\n    slidesToShow: 1,\r\n    slidesToScroll: 1,\r\n    arrows: false,\r\n    fade: true,\r\n    autoplay: true,\r\n    cssEase: 'linear'\r\n});\n\n//# sourceURL=webpack://y/./src/js/module/slider-hero.js?");

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