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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/goku.js":
/*!*********************!*\
  !*** ./src/goku.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Goku; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// export default class Goku {
//   constructor() {
//     this.width = 33;
//     this.height = 40;
//     this.img = new Image();
//     this.img.src = '/Users/fp/Desktop/JSBeatDown/images/goku.png';
//     // img.addEventListener("load", loadImage, false);
//     this.animate = this.animate.bind(this);
//     this.canvas = document.getElementById('canvas');
//     this.ctx = this.canvas.getContext('2d');
//     this.shift = 0;
//     this.totalFrames = 8;
//     this.currentFrame = 1;
//     this.pos = [470, 430];
//   }
//   animate() {
//     this.ctx.clearRect(32, 40, 512, 512);
//     this.ctx.drawImage(this.img, this.shift, 0, this.width, this.height,
//                       this.pos[0], this.pos[1], this.width, this.height);
//     this.shift += this.width;
//     debugger
//     if (this.currentFrame == this.totalFrames) {
//       this.shift = 0;
//       this.currentFrame = 0;
//     }
//     this.currentFrame++;
//     requestAnimationFrame(this.animate);
//   }
// }
var Goku =
/*#__PURE__*/
function () {
  function Goku() {
    _classCallCheck(this, Goku);

    this.width = 33;
    this.height = 40;
    this.img = new Image();
    this.img.src = '/Users/fp/Desktop/JSBeatDown/images/goku.png'; // img.addEventListener("load", loadImage, false);

    this.animate = this.animate.bind(this);
    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.shift = 0;
    this.totalFrames = 8;
    this.currentFrame = 1;
    this.pos = [470, 430];
    this.check = 0;
    this.dir = 'right';
  }

  _createClass(Goku, [{
    key: "handlekeydown",
    value: function handlekeydown(e) {
      e.preventdefault();

      switch (e.key) {
        case e.key === 'w':
          this.dir = 'up';

        case e.key === 'a':
          this.dir = 'left';

        case e.key === 's':
          this.dir = 'down';

        case e.key === 'd':
          this.dir = 'right';

        default:
          break;
      }
    }
  }, {
    key: "animate",
    value: function animate() {
      if (this.check < 4) {
        this.ctx.clearRect(32, 40, 512, 512);
        this.ctx.drawImage(this.img, this.shift, 0, this.width, this.height, this.pos[0], this.pos[1], this.width, this.height);

        if (this.currentFrame == this.totalFrames) {
          this.shift = 0;
          this.currentFrame = 1;
        }
      } else {
        this.ctx.clearRect(30, 40, 512, 512);
        this.ctx.drawImage(this.img, this.shift, 0, this.width, this.height, this.pos[0], this.pos[1], this.width, this.height);
        this.shift += this.width;
        this.currentFrame++;
        this.check = 0;
      }

      this.check++;
      requestAnimationFrame(this.animate);
    }
  }]);

  return Goku;
}();



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _goku__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./goku */ "./src/goku.js");

document.addEventListener("DOMContentLoaded", function () {
  console.log("webpack is running..."); // var canvas = document.getElementById('canvas');
  // var ctx = canvas.getContext('2d'); 
  // var background = new Image();
  // background.src = "../images/arena.png";
  // background.addEventListener("load", loadImage, false);
  // ctx.clearRect(0, 0, canvas.width, canvas.height);

  var goku = new _goku__WEBPACK_IMPORTED_MODULE_0__["default"]();
  goku.animate(); // goku.img.onload = () => goku.animate();
});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map