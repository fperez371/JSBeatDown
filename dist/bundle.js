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
/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sprite */ "./src/sprite.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Goku =
/*#__PURE__*/
function (_Sprite) {
  _inherits(Goku, _Sprite);

  function Goku(props) {
    var _this;

    _classCallCheck(this, Goku);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Goku).call(this, props));
    _this.width = props.width;
    _this.height = props.height;
    _this.img = new Image();
    _this.img.src = props.imgUrl; // this.canvas = document.getElementById("canvas");
    // this.ctx = this.canvas.getContext("2d");

    _this.shift = [0, -1];
    _this.totalFrames = 8;
    _this.currentFrame = 1;
    _this.player = props.player;
    _this.pos = props.startPos;
    _this.check = 0;
    _this.dir = "idle";
    _this.idleDir = "right";
    _this.health = 1000;
    _this.GOKUDIRS = {
      idle: [1, 1],
      right: [-1, 83],
      left: [1151, 83],
      punching: [-1, 476],
      kicking: [1, 959],
      dmg: [11, 1162]
    };
    _this.kickWidths = [58, 115, 172, 229, 286, 343, 400, 449, 498, 547];
    _this.dmgWidths = [48, 50, 42, 51, 51, 51];
    _this.dmgHeights = [32, 34, 35, 35, 33, 36, 37];
    _this.WIDTHS = {
      idle: 33,
      running: 33,
      punching: 40.5,
      kicking: 56,
      dmg: 28
    };
    _this.HEIGHTS = {
      idle: 40,
      running: 48,
      punching: 40,
      kicking: 48,
      dmg: 32
    };
    _this.TOTALFRAMES = {
      idle: 8,
      running: 8,
      punching: 8,
      kicking: 11,
      dmg: 7
    };
    return _this;
  }

  _createClass(Goku, [{
    key: "handleDir",
    value: function handleDir() {
      if (this.dir === "right" && (this.shift[1] !== this.GOKUDIRS.right[1] || this.shift[0] > 230)) {
        this.img.src = "images/goku.png";
        this.pos[1] = 444;
        this.shift = this.GOKUDIRS.right.slice();
        this.height = this.HEIGHTS.running;
        this.width = this.WIDTHS.running;
        this.currentFrame = 1;
        this.totalFrames = this.TOTALFRAMES.running;
      } else if (this.dir === "left" && (this.shift[1] !== this.GOKUDIRS.left[1] || this.shift[0] < 500)) {
        this.img.src = "images/goku_left.png";
        this.pos[1] = 444;
        this.shift = this.GOKUDIRS.left.slice();
        this.height = this.HEIGHTS.running;
        this.width = this.WIDTHS.running;
        this.currentFrame = 1;
        this.totalFrames = this.TOTALFRAMES.running;
      } else if (this.dir === "idle" && this.shift[1] !== this.GOKUDIRS.idle[1]) {
        this.img.src = "images/goku.png";
        this.pos[1] = 450;
        this.shift = this.GOKUDIRS.idle.slice();
        this.height = this.HEIGHTS.idle;
        this.width = this.WIDTHS.idle;
        this.currentFrame = 1;
        this.totalFrames = this.TOTALFRAMES.idle;
      } else if (this.dir === "punching") {
        this.img.src = "images/goku.png";
        this.shift = this.GOKUDIRS.punching.slice();
        this.width = this.WIDTHS.punching;
        this.height = this.HEIGHTS.punching;
        this.currentFrame = 1;
        this.totalFrames = this.TOTALFRAMES.punching;
      } else if (this.dir === "kicking") {
        this.img.src = "images/goku.png";
        this.pos[1] = 444;
        this.shift = this.GOKUDIRS.kicking.slice();
        this.height = this.HEIGHTS.kicking;
        this.width = this.WIDTHS.kicking;
        this.currentFrame = 1;
        this.totalFrames = this.TOTALFRAMES.kicking;
      } else if (this.dir === "dmg") {
        this.img.src = "images/goku.png";
        this.pos[1] = 455;
        this.shift = this.GOKUDIRS.dmg.slice();
        this.height = this.HEIGHTS.dmg;
        this.width = this.WIDTHS.dmg;
        this.currentFrame = 1;
        this.totalFrames = this.TOTALFRAMES.dmg;
      }
    } // handlekeydown(e) {
    //     e.preventDefault();
    //     if (e.key === "a") {
    //         this.dir = "left";
    //         this.ctx.clearRect(this.pos[0], this.pos[1], 512, 512);
    //         this.handleDir();
    //     }
    //     if (e.key === "d") {
    //         this.dir = "right";
    //         this.ctx.clearRect(this.pos[0], this.pos[1], 512, 512);
    //         this.handleDir();
    //     }
    //     if (e.key === "j") {
    //         this.dir = "punching";
    //         this.ctx.clearRect(this.pos[0], this.pos[1], 512, 512);
    //         this.handleDir();
    //     }
    //     if (e.key === "k") {
    //         this.dir = "kicking";
    //         this.ctx.clearRect(this.pos[0], this.pos[1], 512, 512);
    //         this.handleDir();
    //     }
    // }
    // handlekeyup() {
    //     if (this.player) {
    //         this.dir = "idle";
    //         this.handleDir();
    //     }
    // }
    // start() {
    //     if (this.player) {
    //         document.addEventListener("keydown", key =>
    //             this.handlekeydown(key)
    //         );
    //         document.addEventListener("keyup", () => this.handlekeyup());
    //     }
    //     // this.animate();
    // }
    // punch(){
    // }
    // kick() {
    // }
    // inBounds() {
    //     if (this.pos[0] > 480 && this.dir === "right") {
    //         return false;
    //     } else if (this.pos[0] < 0 && this.dir === "left") {
    //         return false;
    //     }
    //     return true;
    // }
    // move(dir) {
    //     switch (dir) {
    //         case "right":
    //             if (this.inBounds()) {
    //                 this.pos[0] += 1;
    //             }
    //             break;
    //         case "left":
    //             if (this.inBounds()) {
    //                 this.pos[0] -= 1;
    //             }
    //             break;
    //         case "up":
    //             if (this.inBounds()) {
    //                 this.pos[1] -= 1;
    //             }
    //             break;
    //         case "down":
    //             if (this.inBounds()) {
    //                 this.pos[1] += 1;
    //             }
    //             break;
    //         default:
    //             return;
    //     }
    // }
    // animate() {
    //     let i = 0;
    //     if (this.check < 7) {
    //         this.ctx.clearRect(this.pos[0], this.pos[1], 512, 512);
    //         this.ctx.drawImage(
    //             this.img,
    //             this.shift[0],
    //             this.shift[1],
    //             this.width,
    //             this.height,
    //             this.pos[0],
    //             this.pos[1],
    //             this.width,
    //             this.height
    //         );
    //         if (this.currentFrame === this.totalFrames) {
    //             this.shift = this.GOKUDIRS[this.dir].slice();
    //             this.currentFrame = 1;
    //         }
    //     } else {
    //         this.ctx.clearRect(this.pos[0], this.pos[1], 512, 512);
    //         if (this.dir === "left") {
    //             this.shift[0] -= this.width;
    //         } else if (this.dir === "right") {
    //             this.shift[0] += this.width;
    //         } else if (this.dir === "punching") {
    //             this.shift[0] += this.width;
    //         } else if (this.dir === "kicking") {
    //             this.shift[0] += this.kickWidths[i];
    //             i++;
    //         } else {
    //             this.shift[0] += this.width;
    //         }
    //         this.ctx.drawImage(
    //             this.img,
    //             this.shift[0],
    //             this.shift[1],
    //             this.width,
    //             this.height,
    //             this.pos[0],
    //             this.pos[1],
    //             this.width,
    //             this.height
    //         );
    //         this.currentFrame++;
    //         this.check = 0;
    //     }
    //     this.move(this.dir);
    //     this.check++;
    //     requestAnimationFrame(this.animate);
    // }

  }]);

  return Goku;
}(_sprite__WEBPACK_IMPORTED_MODULE_0__["default"]);



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
  console.log("webpack is running...");
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  ctx.font = "30px Arial";
  ctx.fillText("Press space to start", 125, 200);
  document.addEventListener("keydown", function (key) {
    if (key.keyCode === 32) {
      ctx.clearRect(0, 0, 512, 512);
      start();
    }
  }); // var background = new Image();
  // background.src = "../images/arena.png";
  // background.addEventListener("load", loadImage, false);
  // ctx.clearRect(0, 0, canvas.width, canvas.height);

  var goku = new _goku__WEBPACK_IMPORTED_MODULE_0__["default"]({
    width: 33,
    height: 40,
    imgUrl: "images/goku.png",
    startPos: [200, 450],
    player: true
  });
  var otherKu = new _goku__WEBPACK_IMPORTED_MODULE_0__["default"]({
    width: 33,
    height: 40,
    imgUrl: "images/goku.png",
    startPos: [300, 450],
    player: false
  });

  function hitCollision(char) {
    if (char.dir === "kicking") {
      if (char.pos[0] + 33 >= otherKu.pos[0] && char.pos[0] + 33 <= otherKu.pos[0] + 33) {
        otherKu.dir = "dmg";
        otherKu.health -= 50;
        otherKu.handleDir();
      }
    } else if (char.dir === "punching") {
      if (char.pos[0] + 33 >= otherKu.pos[0] && char.pos[0] + 33 <= otherKu.pos[0] + 33) {
        otherKu.dir = "dmg";
        otherKu.health -= 50;
        otherKu.handleDir();
      }
    }
  }

  function inBounds(char) {
    if (char.pos[0] > 480 && char.dir === "right") {
      return false;
    } else if (char.pos[0] < 0 && char.dir === "left") {
      return false;
    } else if (char.pos[0] > otherKu.pos[0] - 33 && char.dir === "right") {
      return false;
    } else if (char.pos[0] > otherKu.pos[0] + 33 && char.dir === "left") {
      return false;
    }

    return true;
  }

  function move(dir, char) {
    switch (dir) {
      case "right":
        if (inBounds(char)) {
          char.pos[0] += 1;
        }

        break;

      case "left":
        if (inBounds(char)) {
          char.pos[0] -= 1;
        }

        break;

      case "dmg":
        if (char.pos[0] < 458.5) {
          char.pos[0] += 0.5;
        }

        break;

      default:
        return;
    }
  }

  function animate() {
    var otherKuKickIdx = 0;
    var kickIdx = 0;
    var dmgHeightIdx = 0;
    var dmgWidthIdx = 0;
    var otherDmgHeightIdx = 0;
    var otherDmgWidthIdx = 0;

    if (goku.check < 7) {
      ctx.clearRect(goku.pos[0], goku.pos[1], 512, 512);
      ctx.drawImage(goku.img, goku.shift[0], goku.shift[1], goku.width, goku.height, goku.pos[0], goku.pos[1], goku.width, goku.height);

      if (goku.currentFrame === goku.totalFrames) {
        if (goku.dir === "dmg") {
          goku.dir = "idle";
          goku.shift = goku.GOKUDIRS.idle;
          goku.handleDir();
        } else {
          goku.shift = goku.GOKUDIRS[goku.dir].slice();
          goku.currentFrame = 1;
        }
      }
    } else {
      ctx.clearRect(goku.pos[0], goku.pos[1], 512, 512);

      if (goku.dir === "left") {
        goku.shift[0] -= goku.width;
      } else if (goku.dir === "right") {
        goku.shift[0] += goku.width;
      } else if (goku.dir === "punching") {
        goku.shift[0] += goku.width;
        hitCollision(goku);
      } else if (goku.dir === "kicking") {
        goku.shift[0] += goku.kickWidths[kickIdx];
        hitCollision(goku);
        kickIdx++;
      } else if (goku.dir === "dmg") {
        goku.shift[0] += goku.dmgWidths[dmgWidthIdx];
        goku.height = goku.dmgHeights[dmgHeightIdx];
        dmgWidthIdx++;
        dmgHeightIdx++;
      } else {
        goku.shift[0] += goku.width;
      }

      ctx.drawImage(goku.img, goku.shift[0], goku.shift[1], goku.width, goku.height, goku.pos[0], goku.pos[1], goku.width, goku.height);
      goku.currentFrame++;
      goku.check = 0;
    }

    move(goku.dir, goku);
    goku.check++;
    move(otherKu.dir, otherKu);
    otherKu.check++;
    requestAnimationFrame(animate);

    if (otherKu.check < 7) {
      ctx.clearRect(otherKu.pos[0], otherKu.pos[1], 512, 512);
      ctx.drawImage(otherKu.img, otherKu.shift[0], otherKu.shift[1], otherKu.width, otherKu.height, otherKu.pos[0], otherKu.pos[1], otherKu.width, otherKu.height);

      if (otherKu.currentFrame === otherKu.totalFrames) {
        if (otherKu.dir === "dmg") {
          otherKu.dir = "idle";
          otherKu.handleDir();
        } else {
          otherKu.shift = otherKu.GOKUDIRS[otherKu.dir].slice();
          otherKu.currentFrame = 1;
        }
      }
    } else {
      ctx.clearRect(otherKu.pos[0], otherKu.pos[1], 512, 512);

      if (otherKu.dir === "left") {
        otherKu.shift[0] -= otherKu.width;
      } else if (otherKu.dir === "right") {
        otherKu.shift[0] += otherKu.width;
      } else if (otherKu.dir === "punching") {
        otherKu.shift[0] += otherKu.width;
      } else if (otherKu.dir === "kicking") {
        otherKu.shift[0] += otherKu.kickWidths[otherKuKickIdx];
        otherKuKickIdx++;
      } else if (otherKu.dir === "dmg") {
        otherKu.shift[0] += otherKu.dmgWidths[otherDmgWidthIdx];
        otherKu.height = otherKu.dmgHeights[otherDmgHeightIdx];
        otherDmgWidthIdx++;
        otherDmgHeightIdx++;
      } else {
        otherKu.shift[0] += otherKu.width;
      }

      ctx.drawImage(otherKu.img, otherKu.shift[0], otherKu.shift[1], otherKu.width, otherKu.height, otherKu.pos[0], otherKu.pos[1], otherKu.width, otherKu.height);
      otherKu.currentFrame++;
      otherKu.check = 0;
    }
  }

  function handlekeydown(e) {
    e.preventDefault();

    if (e.key === "a") {
      goku.dir = "left";
      goku.ctx.clearRect(goku.pos[0], goku.pos[1], 512, 512);
      goku.handleDir();
    }

    if (e.key === "d") {
      goku.dir = "right";
      goku.ctx.clearRect(goku.pos[0], goku.pos[1], 512, 512);
      goku.handleDir();
    }

    if (e.key === "j") {
      goku.dir = "punching";
      goku.ctx.clearRect(goku.pos[0], goku.pos[1], 512, 512);
      goku.handleDir();
    }

    if (e.key === "k") {
      goku.dir = "kicking";
      goku.ctx.clearRect(goku.pos[0], goku.pos[1], 512, 512);
      goku.handleDir();
    }
  }

  function handlekeyup() {
    goku.dir = "idle";
    goku.handleDir();
  }

  function start() {
    document.addEventListener("keydown", function (key) {
      return handlekeydown(key);
    });
    document.addEventListener("keyup", function () {
      return handlekeyup();
    });
    animate();
  } // start();
  // goku.img.onload = () => goku.animate();

});

/***/ }),

/***/ "./src/sprite.js":
/*!***********************!*\
  !*** ./src/sprite.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sprite; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Sprite =
/*#__PURE__*/
function () {
  function Sprite(width, height, imgUrl, startPos) {
    _classCallCheck(this, Sprite);

    this.width = width;
    this.height = height;
    this.img = new Image();
    this.img.src = imgUrl;
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.pos = startPos;
    this.check = 0;
    this.dir = "idle";
  }

  _createClass(Sprite, [{
    key: "getPos",
    value: function getPos() {
      return this.pos;
    }
  }, {
    key: "inBounds",
    value: function inBounds() {
      if (this.pos[0] > 480 && this.dir === "right") {
        return false;
      } else if (this.pos[0] < 0 && this.dir === "left") {
        return false;
      }

      return true;
    }
  }]);

  return Sprite;
}();



/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map