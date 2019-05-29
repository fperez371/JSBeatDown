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

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }



var Goku =
/*#__PURE__*/
function (_Sprite) {
  _inherits(Goku, _Sprite);

  function Goku(props) {
    var _this;

    _classCallCheck(this, Goku);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Goku).call(this, props));
    _this.player = props.player;
    _this.width = props.width;
    _this.height = props.height;
    _this.game = props.game;
    props.goku ? _this.goku = props.goku : _this.goku = null;
    _this.img = new Image();
    _this.img.src = props.imgUrl;
    _this.punchSound = new Audio("sounds/attack0.wav");
    _this.kickSound = new Audio("sounds/attack1.wav");
    _this.dmgSound = new Audio("sounds/hit1.wav");
    _this.deadSound = new Audio("sounds/defeated.wav");
    _this.winSound = new Audio("sounds/victory.wav");
    _this.animate = _this.animate.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.dontMove = false; // this.canvas = document.getElementById("canvas");
    // this.ctx = this.canvas.getContext("2d");

    _this.player ? _this.shift = [0, -1] : _this.shift = [1151, 3];
    _this.totalFrames = 8;
    _this.currentFrame = 1;
    _this.pos = props.startPos;
    _this.check = 0;
    _this.player ? _this.dir = "idle" : _this.dir = "idleLeft";
    _this.health = 100;
    _this.GOKUDIRS = {
      idle: [1, 1],
      idleLeft: [1151, 3],
      right: [-1, 83],
      left: [1151, 83],
      punching: [-1, 476],
      leftPunch: [1153, 479],
      kicking: [1, 959],
      dmg: [11, 1162],
      dead: [-204, -1266]
    };
    _this.kickWidths = [58, 115, 172, 229, 286, 343, 400, 449, 498, 547];
    _this.dmgWidths = [48, 50, 42, 51, 51, 51];
    _this.dmgHeights = [32, 34, 35, 35, 33, 36, 37];
    _this.WIDTHS = {
      idle: 33,
      running: 33,
      punching: 40.5,
      kicking: 56,
      dmg: 28,
      dead: 38
    };
    _this.HEIGHTS = {
      idle: 40,
      running: 48,
      punching: 40,
      kicking: 48,
      dmg: 32,
      dead: 19
    };
    _this.TOTALFRAMES = {
      idle: 8,
      running: 8,
      punching: 8,
      kicking: 11,
      dmg: 7,
      dead: 1
    };
    return _this;
  }

  _createClass(Goku, [{
    key: "aiBehavior",
    value: function aiBehavior() {
      if (!this.game.paused) {
        if (!this.player && this.health > 0 && this.dir !== "dmg" && this.goku.health > 0) {
          if (this.goku.pos[0] + 33 < this.pos[0]) {
            this.dir = "left";
            this.handleDir();
          } else if (this.dir !== "leftPunch") {
            var that = this;
            setTimeout(function () {
              that.dir = "leftPunch";
              that.handleDir();
            }, 2000);
          }
        }

        if (!this.player && this.goku.health <= 0 && this.health > 0) {
          this.dir = "idleLeft";
          this.handleDir();
        }
      }
    }
  }, {
    key: "handleDir",
    value: function handleDir() {
      if (!this.game.paused) {
        if (this.dir === "right" && (this.shift[1] !== this.GOKUDIRS.right[1] || this.shift[0] > 230) && !this.dontMove) {
          this.img.src = "images/goku.png";
          this.pos[1] = 444;
          this.shift = this.GOKUDIRS.right.slice();
          this.height = this.HEIGHTS.running;
          this.width = this.WIDTHS.running;
          this.currentFrame = 1;
          this.totalFrames = this.TOTALFRAMES.running;
        } else if (this.dir === "left" && (this.shift[1] !== this.GOKUDIRS.left[1] || this.shift[0] < 500) && !this.dontMove) {
          this.img.src = "images/goku_left.png";
          this.pos[1] = 444;
          this.shift = this.GOKUDIRS.left.slice();
          this.height = this.HEIGHTS.running;
          this.width = this.WIDTHS.running;
          this.currentFrame = 1;
          this.totalFrames = this.TOTALFRAMES.running;
        } else if (this.dir === "idle" && this.shift[1] !== this.GOKUDIRS.idle[1] && this.health > 0 && !this.dontMove) {
          this.img.src = "images/goku.png";
          this.pos[1] = 450;
          this.shift = this.GOKUDIRS.idle.slice();
          this.height = this.HEIGHTS.idle;
          this.width = this.WIDTHS.idle;
          this.currentFrame = 1;
          this.totalFrames = this.TOTALFRAMES.idle;
        } else if (this.dir === "idleLeft" && !this.player) {
          this.img.src = "images/goku_left.png";
          this.pos[1] = 450;
          this.shift = this.GOKUDIRS.idleLeft.slice();
          this.height = this.HEIGHTS.idle;
          this.width = this.WIDTHS.idle;
          this.currentFrame = 1;
          this.totalFrames = this.TOTALFRAMES.idle;
        } else if (this.dir === "punching" && !this.dontMove) {
          this.img.src = "images/goku.png";
          this.shift = this.GOKUDIRS.punching.slice();
          this.width = this.WIDTHS.punching;
          this.height = this.HEIGHTS.punching;
          this.currentFrame = 1;
          this.totalFrames = this.TOTALFRAMES.punching;
        } else if (this.dir === "leftPunch" && !this.dontMove) {
          this.img.src = "images/goku_left.png";
          this.shift = this.GOKUDIRS.leftPunch.slice();
          this.width = this.WIDTHS.punching;
          this.height = this.HEIGHTS.punching;
          this.currentFrame = 1;
          this.totalFrames = this.TOTALFRAMES.punching;
        } else if (this.dir === "kicking" && !this.dontMove) {
          this.img.src = "images/goku.png";
          this.pos[1] = 444;
          this.shift = this.GOKUDIRS.kicking.slice();
          this.height = this.HEIGHTS.kicking;
          this.width = this.WIDTHS.kicking;
          this.currentFrame = 1;
          this.totalFrames = this.TOTALFRAMES.kicking;
        } else if (this.dir === "dmg" && !this.dontMove) {
          this.img.src = "images/goku.png";
          this.pos[1] = 455;
          this.shift = this.GOKUDIRS.dmg.slice();
          this.height = this.HEIGHTS.dmg;
          this.width = this.WIDTHS.dmg;
          this.currentFrame = 1;
          this.totalFrames = this.TOTALFRAMES.dmg;
        } else if (this.dir === "dead") {
          this.dontMove = true;
          this.img.src = "images/goku.png";
          this.pos[1] = 465;
          this.shift = this.GOKUDIRS.dead.slice();
          this.height = this.HEIGHTS.dead;
          this.width = this.WIDTHS.dead;
          this.currentFrame = 1;
          this.totalFrames = this.TOTALFRAMES.dead;
        }
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

  }, {
    key: "move",
    value: function move(dir, char) {
      switch (dir) {
        case "right":
          if (this.game.inBounds(char) && !char.dontMove) {
            char.pos[0] += 1;
          }

          break;

        case "left":
          if (this.game.inBounds(char) && !char.dontMove) {
            char.pos[0] -= 1;
          }

          break;

        case "dmg":
          if (char.pos[0] < 458.5 && !char.player && !char.dontMove) {
            char.pos[0] += 0.7;
          } else if (char.pos[0] > 38 && !char.dontMove) {
            char.pos[0] -= 0.7;
          }

          break;

        default:
          return;
      }
    } // move(dir) {
    //     debugger;
    //     switch (dir) {
    //         case "right":
    //             if (this.game.inBounds()) {
    //                 this.pos[0] += 1;
    //             }
    //             break;
    //         case "left":
    //             if (this.game.inBounds()) {
    //                 this.pos[0] -= 1;
    //             }
    //             break;
    //         case "up":
    //             if (this.game.inBounds()) {
    //                 this.pos[1] -= 1;
    //             }
    //             break;
    //         case "down":
    //             if (this.game.inBounds()) {
    //                 this.pos[1] += 1;
    //             }
    //             break;
    //         default:
    //             return;
    //     }
    // }

  }, {
    key: "animate",
    value: function animate(ctx) {
      var kickIdx = 0;
      var dmgHeightIdx = 0;
      var dmgWidthIdx = 0;

      if (!this.game.paused) {
        if (this.check < 9) {
          if (this.player && this.health > 0) {
            ctx.clearRect(75, 100, 512, 512);
            ctx.clearRect(75, 75, 50, 50);
            ctx.fillStyle = "#000000";
            ctx.fillText("Goku", 75, 75);
            ctx.fillStyle = "#FF0000";
            ctx.fillRect(75, 100, this.health / 100 * 140, 25);
          } else if (!this.player && this.health > 0) {
            ctx.fillStyle = "#000000";
            ctx.fillText("Enemy", 300, 75);
            ctx.fillStyle = "#FF0000";
            ctx.fillRect(300, 100, this.health / 100 * 140, 25);
          }

          ctx.clearRect(this.pos[0], this.pos[1], 512, 512);
          ctx.drawImage(this.img, this.shift[0], this.shift[1], this.width, this.height, this.pos[0], this.pos[1], this.width, this.height);

          if (this.currentFrame === this.totalFrames) {
            if (this.dir === "dmg" && this.player && !this.dontMove) {
              this.dir = "idle";
              this.shift = this.GOKUDIRS.idle.slice();
              this.handleDir();
            } else if (this.dir === "dmg" && !this.player) {
              this.dir = "idleLeft";
              this.shift = this.GOKUDIRS.idleLeft.slice();
              this.handleDir();
            } else if (this.dir === "dead") {
              ctx.clearRect(this.pos[0], this.pos[1], 512, 512);
              this.handleDir();
            } else {
              this.shift = this.GOKUDIRS[this.dir].slice();
              this.currentFrame = 1;
            }
          }

          this.aiBehavior();
          this.move(this.dir, this);
        } else {
          if (this.player && this.health > 0) {
            ctx.fillStyle = "#000000";
            ctx.fillText("Goku", 75, 75);
            ctx.fillStyle = "#FF0000";
            ctx.fillRect(75, 100, this.health / 100 * 140, 25);
          }

          if (!this.player && this.health > 0) {
            ctx.fillStyle = "#000000";
            ctx.fillText("Enemy", 300, 75);
            ctx.fillStyle = "#FF0000";
            ctx.fillRect(300, 100, this.health / 100 * 140, 25);
          }

          ctx.clearRect(this.pos[0], this.pos[1], 512, 512);

          if (this.dir === "dead") {
            ctx.clearRect(this.pos[0], this.pos[1], 512, 512);
            this.shift = [204, 1266];
            this.dontMove = true;
          } else if (this.dir === "left") {
            this.shift[0] -= this.width;
          } else if (this.dir === "right") {
            this.shift[0] += this.width;
          } else if (this.dir === "punching") {
            this.shift[0] += this.width;
            this.game.hitCollision(this);
          } else if (this.dir === "kicking") {
            this.shift[0] += this.kickWidths[kickIdx];
            kickIdx++;
            this.game.hitCollision(this);
          } else if (this.dir === "dmg") {
            this.shift[0] += this.dmgWidths[dmgWidthIdx];
            this.height = this.dmgHeights[dmgHeightIdx];
            dmgWidthIdx++;
            dmgHeightIdx++;
          } else if (this.dir === "leftPunch") {
            this.shift[0] -= this.width;
            this.game.hitCollision(this);
          } else if (this.dir === "idle") {
            this.shift[0] += this.width;
          } else if (this.dir === "idleLeft") {
            this.shift[0] -= this.width;
          }

          ctx.drawImage(this.img, this.shift[0], this.shift[1], this.width, this.height, this.pos[0], this.pos[1], this.width, this.height);
          this.currentFrame++;
          this.move(this.dir, this);
          this.check = 0;
        }

        this.check++;
        requestAnimationFrame(this.animate.bind(this, ctx));
      }
    }
  }]);

  return Goku;
}(_sprite__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/ichigo.js":
/*!***********************!*\
  !*** ./src/ichigo.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Ichigo; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Ichigo =
/*#__PURE__*/
function () {
  function Ichigo(props) {
    _classCallCheck(this, Ichigo);

    this.game = props.game;
    this.goku = props.goku;
    this.img = new Image();
    this.img.src = props.imgUrl;
    this.dontMove = false;
    this.bankaiSound = new Audio("sounds/bankai.mp3");
    this.powerUpSound = new Audio("sounds/powerup.mp3");
    this.atk1Sound = new Audio("sounds/ichigoAtk1.wav");
    this.atk2Sound = new Audio("sounds/ichigoAtk2.wav");
    this.dmgSound = new Audio("sounds/ichigoDmg.wav");
    this.deadSound = new Audio("sounds/ichigoDefeat.wav");
    this.winSound = new Audio("sounds/ichigoVictory.wav");
    this.pos = props.startPos;
    this.check = 0;
    this.currentFrame = 0;
    this.dir = "idle";
    this.player = false;
    this.poweredUp = false; // this.canvas = document.getElementById("canvas");
    // this.ctx = this.canvas.getContext("2d");

    this.health = 200;
    this.powerUp = [[427, 29, 54, 37], [375, 26, 47, 40], [345, 16, 24, 50], [310, 16, 24, 50], [274, 17, 24, 48], [354, 73, 125, 181], [210, 115, 110, 140], [64, 87, 120, 168], [418, 260, 68, 48], [369, 261, 38, 45]];
    this.idle = [[369, 261, 38, 45]];
    this.dmg = [[447, 1061, 38, 37], [399, 1071, 45, 30], [332, 1081, 57, 14], [271, 1079, 57, 16], [206, 1078, 57, 16], [163, 1063, 36, 33], [124, 1064, 38, 34], [87, 1063, 31, 35], [43, 1049, 35, 49], [2, 1048, 36, 49]];
    this.shlice = [[448, 459, 36, 40], [403, 462, 39, 40], [319, 464, 71, 38], [275, 470, 42, 34], [231, 468, 31, 37], [160, 469, 66, 33], [98, 466, 56, 37]]; // have him move forward on frames 4, 5, and 6
    // last frame is taken from a diff attack might want to change it

    this.flashy = [[449, 1127, 36, 49], [411, 1127, 36, 49], [371, 1127, 37, 49], [287, 1131, 39, 45], [245, 1131, 38, 45], [189, 1132, 45, 45], [385, 867, 66, 36]];
    this.left = [[445, 397, 41, 35], [395, 398, 43, 36], [342, 399, 44, 35]];
    this.dead = [[332, 1081, 57, 14]];
    this.totalFrames = {
      idle: 1,
      powerUp: 10,
      dmg: 10,
      shlice: 7,
      flashy: 7,
      left: 3
    };
  }

  _createClass(Ichigo, [{
    key: "aiBehavior",
    value: function aiBehavior() {
      var randomVal;

      if (this.poweredUp && !this.game.paused) {
        if (this.health > 0 && this.dir !== "dmg" && this.goku.health > 0) {
          if (this.goku.pos[0] + 45 < this.pos[0]) {
            this.dir = "left";
            this.handleDir();
          } else if (this.dir !== "shlice" && this.dir !== "flashy") {
            // this.dir = "idleLeft";
            // this.handleDir();
            Math.random() < 0.5 ? randomVal = "shlice" : randomVal = "flashy";
            this.dir = randomVal;
            this.handleDir();
          }
        }

        if (this.goku.health <= 0 && this.health > 0) {
          this.dir = "idle";
          this.handleDir();
        }
      }
    }
  }, {
    key: "handleDir",
    value: function handleDir() {
      if (!this.game.paused) {
        switch (this.dir) {
          case "idle":
            this.currentFrame = 0;
            this.pos[1] = 450;
            break;

          case "powerUp":
            this.currentFrame = 0;
            this.pos[1] = 450;
            this.bankaiSound.play();
            break;

          case "left":
            this.currentFrame = 0;
            break;

          case "dmg":
            this.currentFrame = 0;
            break;

          case "shlice":
            this.currentFrame = 0;
            this.atk1Sound.play();
            break;

          case "flashy":
            this.currentFrame = 0;
            this.atk2Sound.play();
            break;

          case "dead":
            this.dontMove = true;
            this.currentFrame = 0;
            this.pos[1] = 470;
            break;

          default:
            break;
        }
      }
    }
  }, {
    key: "move",
    value: function move(dir, char) {
      switch (dir) {
        case "right":
          if (this.game.inBounds(char) && !char.dontMove) {
            char.pos[0] += 1;
          }

          break;

        case "left":
          if (this.game.inBounds(char) && !char.dontMove) {
            char.pos[0] -= 3;
          }

          break;

        case "dmg":
          if (char.pos[0] < 458.5 && !char.player && !char.dontMove) {
            char.pos[0] += 0.5;
          } else if (char.pos[0] > 38 && !char.dontMove) {
            char.pos[0] -= 0.5;
          }

          break;

        default:
          return;
      }
    }
  }, {
    key: "animate",
    value: function animate(ctx) {
      var adjY = 0;
      var adjX = 0;

      if (!this.game.paused) {
        if (this.check < 8) {
          if (this.health > 0 && this.poweredUp) {
            ctx.fillStyle = "#000000";
            ctx.fillText("Enemy", 300, 75);
            ctx.fillStyle = "#FF0000";
            ctx.fillRect(300, 100, this.health / 200 * 140, 25);
          }

          ctx.clearRect(this.pos[0], this.pos[1], 512, 512);

          if (this.currentFrame === this.totalFrames[this.dir] && this.dir !== "powerUp" && this.dir !== "dmg") {
            this.currentFrame = 0;
          }

          if (this.dir === "powerUp" && this.currentFrame !== this.totalFrames[this.dir]) {
            ctx.fillText("ROUND 2: Face a rival!", 115, 200);
          }

          if (this.dir === "powerUp" && this.currentFrame === this.totalFrames[this.dir]) {
            this.currentFrame = 0;
            this.dontMove = false;
            this.poweredUp = true;
            this.dir = "idle";
            this.handleDir();
          }

          if (this.dir === "dmg" && this.currentFrame === this.totalFrames[this.dir]) {
            this.currentFrame = 0;
            this.dir = "idle";
            this.handleDir();
          }

          switch (this.dir) {
            case "idle":
              ctx.drawImage(this.img, 369, 261, 38, 45, this.pos[0], this.pos[1], 38, 45);
              break;

            case "shlice":
              ctx.drawImage(this.img, this.shlice[this.currentFrame][0], this.shlice[this.currentFrame][1], this.shlice[this.currentFrame][2], this.shlice[this.currentFrame][3], this.pos[0], this.pos[1], this.shlice[this.currentFrame][2], this.shlice[this.currentFrame][3]);

              if (this.currentFrame === this.totalFrames[this.dir] - 4) {
                this.game.hitCollision(this);
              }

              break;

            case "flashy":
              ctx.drawImage(this.img, this.flashy[this.currentFrame][0], this.flashy[this.currentFrame][1], this.flashy[this.currentFrame][2], this.flashy[this.currentFrame][3], this.pos[0], this.pos[1], this.flashy[this.currentFrame][2], this.flashy[this.currentFrame][3]);

              if (this.currentFrame === this.totalFrames[this.dir] - 4) {
                this.game.hitCollision(this);
              }

              break;

            case "left":
              ctx.drawImage(this.img, this.left[this.currentFrame][0], this.left[this.currentFrame][1], this.left[this.currentFrame][2], this.left[this.currentFrame][3], this.pos[0], this.pos[1], this.left[this.currentFrame][2], this.left[this.currentFrame][3]);
              break;

            case "powerUp":
              if (this.currentFrame === 5) {
                adjY = 120;
                adjX = 30;
              } else if (this.currentFrame === 6) {
                adjY = 110;
                adjX = 25;
              } else if (this.currentFrame === 7) {
                adjY = 120;
                adjX = 35;
              } else {
                adjY = 0;
                adjX = 0;
              }

              ctx.drawImage(this.img, this.powerUp[this.currentFrame][0], this.powerUp[this.currentFrame][1], this.powerUp[this.currentFrame][2], this.powerUp[this.currentFrame][3], this.pos[0] - adjX, this.pos[1] - adjY, this.powerUp[this.currentFrame][2], this.powerUp[this.currentFrame][3]);
              break;

            case "dmg":
              if (this.currentFrame >= 1 && this.currentFrame < 6) {
                adjY = 20;
              } else {
                adjY = 0;
              }

              ctx.drawImage(this.img, this.dmg[this.currentFrame][0], this.dmg[this.currentFrame][1], this.dmg[this.currentFrame][2], this.dmg[this.currentFrame][3], this.pos[0], this.pos[1] + adjY, this.dmg[this.currentFrame][2], this.dmg[this.currentFrame][3]);
              break;

            case "dead":
              ctx.drawImage(this.img, 332, 1081, 57, 14, this.pos[0], this.pos[1], 57, 14);
              break;

            default:
              break;
          }

          this.aiBehavior();
          this.move(this.dir, this);
        } else {
          if (this.health > 0 && this.poweredUp) {
            ctx.fillStyle = "#000000";
            ctx.fillText("Enemy", 300, 75);
            ctx.fillStyle = "#FF0000";
            ctx.fillRect(300, 100, this.health / 200 * 140, 25);
          }

          switch (this.dir) {
            case "idle":
              ctx.drawImage(this.img, 369, 261, 38, 45, this.pos[0], this.pos[1], 38, 45);
              break;

            case "shlice":
              ctx.drawImage(this.img, this.shlice[this.currentFrame][0], this.shlice[this.currentFrame][1], this.shlice[this.currentFrame][2], this.shlice[this.currentFrame][3], this.pos[0], this.pos[1], this.shlice[this.currentFrame][2], this.shlice[this.currentFrame][3]);

              if (this.currentFrame === this.totalFrames[this.dir] - 4) {
                this.game.hitCollision(this);
              }

              break;

            case "flashy":
              ctx.drawImage(this.img, this.flashy[this.currentFrame][0], this.flashy[this.currentFrame][1], this.flashy[this.currentFrame][2], this.flashy[this.currentFrame][3], this.pos[0], this.pos[1], this.flashy[this.currentFrame][2], this.flashy[this.currentFrame][3]);

              if (this.currentFrame === this.totalFrames[this.dir] - 4) {
                this.game.hitCollision(this);
              }

              break;

            case "left":
              ctx.drawImage(this.img, this.left[this.currentFrame][0], this.left[this.currentFrame][1], this.left[this.currentFrame][2], this.left[this.currentFrame][3], this.pos[0], this.pos[1], this.left[this.currentFrame][2], this.left[this.currentFrame][3]);
              break;

            case "powerUp":
              if (this.currentFrame >= 5 && this.currentFrame < 8) {
                adjY = 100;
                adjX = 30;
              } else {
                adjY = 0;
                adjX = 0;
              }

              ctx.drawImage(this.img, this.powerUp[this.currentFrame][0], this.powerUp[this.currentFrame][1], this.powerUp[this.currentFrame][2], this.powerUp[this.currentFrame][3], this.pos[0] - adjX, this.pos[1] - adjY, this.powerUp[this.currentFrame][2], this.powerUp[this.currentFrame][3]);
              break;

            case "dmg":
              if (this.currentFrame >= 1 && this.currentFrame < 6) {
                adjY = 20;
              } else {
                adjY = 0;
              }

              ctx.drawImage(this.img, this.dmg[this.currentFrame][0], this.dmg[this.currentFrame][1], this.dmg[this.currentFrame][2], this.dmg[this.currentFrame][3], this.pos[0], this.pos[1] - adjY, this.dmg[this.currentFrame][2], this.dmg[this.currentFrame][3]);
              break;

            case "dead":
              ctx.drawImage(this.img, 332, 1081, 57, 14, this.pos[0], this.pos[1], 57, 14);
              break;

            default:
              break;
          }

          this.currentFrame++;
          this.move(this.dir, this);
          this.check = 0;
        }

        this.check++;
        requestAnimationFrame(this.animate.bind(this, ctx));
      }
    }
  }]);

  return Ichigo;
}();



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Game; });
/* harmony import */ var _goku__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./goku */ "./src/goku.js");
/* harmony import */ var _ichigo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ichigo */ "./src/ichigo.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




function handler(key) {
  if (key.keyCode === 32) {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, 512, 512);
    ctx.fillText("ROUND 1: Face yourself!", 115, 200);
    setTimeout(function () {
      ctx.clearRect(0, 0, 512, 512);
      new Game(ctx).start();
      document.removeEventListener("keydown", handler, false);
    }, 2000);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  ctx.font = "30px dbz";
  ctx.fillText("Press space to start", 150, 200);
  document.addEventListener("keydown", handler, false);
});

var Game =
/*#__PURE__*/
function () {
  function Game(ctx) {
    _classCallCheck(this, Game);

    this.audio = document.getElementById("audio");
    this.audio.volume = 0.4;
    this.audio.addEventListener("ended", function () {
      this.currentTime = 0;
      this.play();
    }, false);
    this.ctx = ctx;
    this.goku = new _goku__WEBPACK_IMPORTED_MODULE_0__["default"]({
      width: 33,
      height: 40,
      imgUrl: "images/goku.png",
      startPos: [200, 450],
      player: true,
      game: this
    });
    this.otherKu = new _goku__WEBPACK_IMPORTED_MODULE_0__["default"]({
      width: 33,
      height: 40,
      imgUrl: "images/goku_left.png",
      startPos: [300, 450],
      player: false,
      game: this,
      goku: this.goku
    });
    this.ichigo = new _ichigo__WEBPACK_IMPORTED_MODULE_1__["default"]({
      imgUrl: "images/ichigo_left.png",
      startPos: [7000, 450],
      game: this,
      goku: this.goku
    });
    this.allChars = [this.goku, this.otherKu, this.ichigo];
    this.gameOver = false;
    this.computer = this.otherKu;
    this.once = false;
    this.newGame = this.newGame.bind(this);
    this.started = false;
    this.paused = false;
  }

  _createClass(Game, [{
    key: "endFight",
    value: function endFight() {
      var _this = this;

      if (this.computer === this.otherKu) {
        this.otherKu.deadSound.play();
        this.goku.winSound.play();
        this.goku.health = 100;
        setTimeout(function () {
          return _this.otherKu.pos = [700, 700];
        }, 1000);
        this.audio.src = "sounds/bleach.mp3";
        this.audio.play();

        if (this.goku.pos[0] > 100) {
          this.goku.pos = [100, 450];
        }

        setTimeout(function () {
          _this.computer = _this.ichigo;
          _this.ichigo.dir = "powerUp";
          _this.ichigo.dontMove = true;
          _this.ichigo.pos = [350, 450];

          _this.ichigo.handleDir();

          _this.gameLoop();
        }, 4000);
      } else {
        this.gameOver = true;
        this.gameLoop();
      }
    }
  }, {
    key: "pause",
    value: function pause() {
      var _this2 = this;

      var pauseEl = document.getElementById("pause");
      this.paused = !this.paused;

      if (this.paused) {
        pauseEl.style.visibility = "visible";
      } else {
        pauseEl.style.visibility = "hidden";
        this.allChars.forEach(function (char) {
          return char.animate(_this2.ctx);
        });
      }
    }
  }, {
    key: "hitCollision",
    value: function hitCollision(char) {
      var range;
      this.computer === this.ichigo ? range = 48 : range = 40;

      if (char.dir === "kicking") {
        if (char.pos[0] + range >= this.computer.pos[0] && char.pos[0] + range <= this.computer.pos[0] + 33) {
          this.computer.dir = "dmg";

          if (!this.once) {
            this.computer.dmgSound.play();
          }

          this.computer.health -= 10;

          if (this.computer.health <= 0) {
            this.computer.dir = "dead";
            this.computer.currentFrame = 0;

            if (!this.once) {
              this.computer.deadSound.play();
            }

            this.endFight();
          }

          this.computer.handleDir();
        }
      } else if (char.dir === "punching") {
        if (char.pos[0] + 33 >= this.computer.pos[0] && char.pos[0] + 33 <= this.computer.pos[0] + 33) {
          this.computer.dir = "dmg";

          if (!this.once) {
            this.computer.dmgSound.play();
          }

          this.computer.health -= 10;

          if (this.computer.health <= 0) {
            this.computer.dir = "dead";
            this.computer.currentFrame = 0;

            if (!this.once) {
              this.computer.deadSound.play();
            }

            this.endFight();
          }

          this.computer.handleDir();
        }
      } else if (char.dir === "leftPunch") {
        if (char.pos[0] - 33 <= this.goku.pos[0] + 33) {
          this.goku.dir = "dmg";
          this.goku.dmgSound.play();
          this.goku.health -= 10;

          if (this.goku.health <= 0) {
            this.goku.dir = "dead";
            this.ctx.clearRect(this.goku.pos[0], this.goku.pos[1], 512, 512);
            this.goku.deadSound.play();
            this.goku.handleDir(); // this.goku.dontMove = true;

            this.gameOver = true;
            this.gameLoop();
          }

          this.goku.handleDir();
        }
      } else if (char.dir === "shlice") {
        if (char.pos[0] - 35 <= this.goku.pos[0] + 33) {
          this.goku.dir = "dmg";
          this.goku.move("dmg", this.goku);
          this.goku.dmgSound.play();
          this.goku.health -= 5;

          if (this.goku.health <= 0) {
            this.goku.dir = "dead";
            this.ctx.clearRect(this.goku.pos[0], this.goku.pos[1], 512, 512); // this.goku.dontMove = true;

            this.goku.deadSound.play();
            this.ctx.clearRect(this.goku.pos[0], this.goku.pos[1], 512, 512);
            this.ichigo.winSound.play();
            this.gameOver = true;
            this.gameLoop();
          }

          this.goku.handleDir();
        }
      } else if (char.dir === "flashy") {
        if (char.pos[0] - 35 <= this.goku.pos[0] + 33) {
          this.goku.dir = "dmg";
          this.goku.move("dmg", this.goku);
          this.goku.dmgSound.play();
          this.goku.health -= 5;

          if (this.goku.health <= 0) {
            this.goku.dir = "dead";
            this.goku.currentFrame = 0; // this.goku.dontMove = true;

            this.goku.deadSound.play();
            this.ichigo.winSound.play();
            this.goku.handleDir();
            this.gameOver = true;
            this.gameLoop();
          }

          this.goku.handleDir();
        }
      }
    }
  }, {
    key: "inBounds",
    value: function inBounds(char) {
      if (char.pos[0] > 480 && char.dir === "right") {
        return false;
      } else if (char.pos[0] < 0 && char.dir === "left") {
        return false;
      } else if (char.pos[0] > this.computer.pos[0] - 33 && char.dir === "right") {
        return false;
      } else if (char.pos[0] > this.computer.pos[0] + 33 && char.dir === "left") {
        return false;
      } else if (this.computer.pos[0] < this.goku.pos[0] + 33 && this.computer.dir === "left") {
        return false;
      }

      return true;
    }
  }, {
    key: "gameLoop",
    value: function gameLoop() {
      if (!this.gameOver && this.computer === this.otherKu) {
        this.goku.animate(this.ctx);
        this.goku.move(this.goku.dir, this.goku);
        this.computer.animate(this.ctx);
        this.computer.move(this.computer.dir, this.computer);
        this.ichigo.animate(this.ctx);
        this.ichigo.handleDir();
        this.ichigo.move(this.ichigo.dir, this.ichigo);
      } else if (!this.gameOver && this.computer === this.ichigo) {
        this.goku.move(this.goku.dir, this.goku); // this.ichigo.animate(this.ctx);
        // this.ichigo.animate(this.ctx);
      } else if (this.gameOver && this.ichigo.health <= 0 && !this.once) {
        this.goku.winSound.play(); // document.removeEventListener(
        //     "keydown",
        //     this.handlekeydown.bind(this),
        //     false
        // );

        this.audio.pause();
        this.audio.currentTime = 0;
        this.btn = document.createElement("BUTTON");
        var text = document.createTextNode("You Won! Play again?");
        this.restart = document.getElementById("gameover");
        this.btn.appendChild(text);
        this.btn.onclick = this.newGame;
        this.restart.appendChild(this.btn);
        this.restart.style.visibility = "visible";
        this.restart.style.opacity = 1;
        this.once = true;
      } else if (!this.once) {
        // document.removeEventListener("keydown", this.handlekeydown, false);
        this.ctx.clearRect(this.goku.pos[0], this.goku.pos[1], 512, 512);
        this.audio.pause();
        this.audio.currentTime = 0;
        this.btn = document.createElement("BUTTON");

        var _text = document.createTextNode("restart");

        this.restart = document.getElementById("gameover");
        this.btn.appendChild(_text);
        this.btn.onclick = this.newGame;
        this.restart.appendChild(this.btn);
        this.restart.style.visibility = "visible";
        this.restart.style.opacity = 1;
      }
    }
  }, {
    key: "newGame",
    value: function newGame() {
      this.restart.removeChild(this.btn);
      this.restart.style.visibility = "hidden";
      this.restart.style.opacity = 0;
      this.goku.pos = [1000, 1000];
      this.computer.pos = [1220, 1220];
      this.computer.dontMove = true;
      var game = new Game(this.ctx);
      game.start();
    }
  }, {
    key: "handlekeydown",
    value: function handlekeydown(e) {
      e.preventDefault();

      if (this.paused || this.goku.dontMove) {
        return;
      }

      if (e.code === "KeyA") {
        this.goku.dir = "left";
        this.ctx.clearRect(this.goku.pos[0], this.goku.pos[1], 512, 512);
        this.goku.handleDir();
      }

      if (e.code === "KeyD") {
        this.goku.dir = "right";
        this.ctx.clearRect(this.goku.pos[0], this.goku.pos[1], 512, 512);
        this.goku.handleDir();
      }

      if (e.code === "KeyJ") {
        this.goku.dir = "punching";
        this.ctx.clearRect(this.goku.pos[0], this.goku.pos[1], 512, 512);
        this.goku.punchSound.play();
        this.goku.handleDir();
      }

      if (e.code === "KeyK") {
        this.goku.dir = "kicking";
        this.ctx.clearRect(this.goku.pos[0], this.goku.pos[1], 512, 512);
        this.goku.kickSound.play();
        this.goku.handleDir();
      }
    }
  }, {
    key: "handlekeyup",
    value: function handlekeyup() {
      if (!this.goku.dontMove) {
        this.goku.dir = "idle";
        this.goku.handleDir();
      }
    }
  }, {
    key: "start",
    value: function start() {
      var _this3 = this;

      document.addEventListener("keydown", function (key) {
        return _this3.handlekeydown(key);
      }, false);
      document.addEventListener("keyup", function () {
        return _this3.handlekeyup();
      });
      var that = this;
      document.addEventListener("keydown", function (key) {
        if (key.code === "KeyM") {
          that.audio.muted = !that.audio.muted;
        }

        if (key.code === "KeyP") {
          that.pause();
        }
      });
      this.gameLoop();
      this.audio.play();
    }
  }]);

  return Game;
}();



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

var Sprite = function Sprite(props) {
  _classCallCheck(this, Sprite);

  this.width = props.width;
  this.height = props.height;
  this.img = new Image();
  this.img.src = props.imgUrl;
  this.pos = props.startPos;
  this.check = 0;
  this.dir = "idle";
};



/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map