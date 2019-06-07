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
    _this.dontMove = false;
    _this.currentFrame = 0;
    _this.totalFrames = 8;
    _this.pos = props.startPos;
    _this.check = 0;
    _this.player ? _this.dir = "idle" : _this.dir = "idleLeft";
    _this.health = 10;
    _this.TOTALFRAMES = {
      idle: 8,
      idleLeft: 8,
      runRight: 8,
      runLeft: 8,
      punching: 12,
      punchLeft: 15,
      kicking: 11,
      dmg: 7,
      winPose: 7,
      dead: 1
    };
    _this.dead = [[204, 1266, 38, 19]];
    _this.idle = [[6, 3, 27, 37], [39, 3, 27, 37], [72, 3, 27, 36], [104, 3, 28, 36], [137, 3, 28, 37], [170, 3, 28, 37], [203, 3, 28, 38], [237, 3, 27, 38]];
    _this.runRight = [[2, 90, 27, 40], [36, 92, 27, 38], [69, 89, 28, 38], [104, 88, 27, 37], [134, 90, 28, 40], [168, 92, 27, 38], [201, 89, 28, 37], [236, 88, 27, 37]]; // longer animation will have to play around with it

    _this.punching = [[4, 479, 27, 36], [46, 479, 34, 36], [86, 479, 33, 36], [128, 479, 34, 36], [168, 479, 33, 36], [209, 479, 29, 36], [389, 480, 42, 35], [438, 478, 38, 37], [490, 479, 35, 36], [539, 479, 35, 36], [588, 478, 27, 37], [634, 479, 30, 36]];
    _this.kicking = [[4, 967, 30, 39], [64, 964, 45, 42], [121, 965, 38, 41], [180, 967, 27, 39], [238, 964, 31, 41], [298, 963, 41, 42], [355, 964, 32, 41], [402, 965, 27, 40], [451, 966, 26, 39], [501, 965, 24, 41], [551, 969, 26, 37]];
    _this.dmg = [[11, 1162, 28, 32], [59, 1160, 32, 34], [109, 1159, 30, 35], [151, 1159, 32, 35], [202, 1161, 30, 33], [253, 1158, 30, 36], [304, 1157, 29, 37]];
    _this.winPose = [[6, 1874, 25, 40], [45, 1875, 33, 39], [84, 1876, 33, 38], [126, 1875, 32, 39], [167, 1875, 32, 39], [208, 1875, 32, 39], [248, 1875, 33, 39]]; // otherKu specific animations

    _this.idleLeft = [[1151, 3, 27, 37], [1118, 3, 27, 37], [1085, 3, 27, 36], [1052, 3, 28, 36], [1019, 3, 28, 37], [986, 3, 28, 37], [953, 3, 28, 38], [920, 3, 27, 38]];
    _this.punchLeft = [[1153, 479, 27, 36], [1104, 479, 34, 36], [1065, 479, 33, 36], [1022, 479, 34, 36], [983, 479, 33, 36], [946, 479, 29, 36], [753, 480, 42, 35], [708, 478, 38, 37], [659, 479, 35, 36], [610, 479, 35, 36], [569, 478, 27, 37], [520, 479, 30, 36]];
    _this.runLeft = [[1155, 90, 27, 40], [1121, 92, 27, 38], [1087, 89, 28, 38], [1053, 88, 27, 37], [1022, 90, 28, 40], [989, 92, 27, 38], [955, 89, 28, 37], [921, 88, 27, 37]];
    return _this;
  }

  _createClass(Goku, [{
    key: "aiBehavior",
    value: function aiBehavior() {
      var _this2 = this;

      return;

      if (!this.game.paused) {
        if (!this.player && this.health > 0 && this.dir !== "dmg" && this.goku.health > 0) {
          if (this.goku.pos[0] + 33 < this.pos[0]) {
            var oldDir = this.dir;
            setTimeout(function () {
              _this2.dir = "runLeft";

              _this2.handleDir(oldDir);
            }, 200);
          } else if (this.dir !== "punchLeft") {
            var _oldDir = this.dir;
            this.dir = "punchLeft";
            this.handleDir(_oldDir);
          }
        }

        if (!this.player && this.goku.health <= 0 && this.health > 0) {
          var _oldDir2 = this.dir;
          this.dir = "idleLeft";
          this.handleDir(_oldDir2);
        }
      }
    }
  }, {
    key: "handleDir",
    value: function handleDir(oldDir) {
      if (!this.game.paused) {
        if (oldDir === this.dir) return;

        if (this.dir === "runRight") {
          this.img.src = "images/goku.png";
          this.pos[1] = 444;
          this.currentFrame = 0;
        } else if (this.dir === "runLeft" && !this.dontMove) {
          this.img.src = "images/goku_left.png";
          this.pos[1] = 444;
          this.currentFrame = 0;
        } else if (this.dir === "idle" && this.health > 0 && !this.dontMove) {
          this.img.src = "images/goku.png";
          this.pos[1] = 450;
          this.currentFrame = 0;
        } else if (this.dir === "idleLeft" && !this.player) {
          this.img.src = "images/goku_left.png";
          this.pos[1] = 450;
          this.currentFrame = 0;
        } else if (this.dir === "punching" && !this.dontMove) {
          this.img.src = "images/goku.png";
          this.currentFrame = 0;
        } else if (this.dir === "punchLeft" && !this.dontMove) {
          this.img.src = "images/goku_left.png";
          this.currentFrame = 0;
        } else if (this.dir === "kicking" && !this.dontMove) {
          this.img.src = "images/goku.png";
          this.pos[1] = 444;
          this.currentFrame = 0;
        } else if (this.dir === "dmg" && !this.dontMove) {
          this.img.src = "images/goku.png";
          this.pos[1] = 455;
          this.currentFrame = 0;
        } else if (this.dir === "dead") {
          // this.dontMove = true;
          this.img.src = "images/goku.png";
          this.pos[1] = 465;
          this.currentFrame = 0;
        } else if (this.dir === "winPose") {
          this.img.src = "images/goku.png";
          this.pos[1] = 450;
          this.currentFrame = 0;
        }
      }
    }
  }, {
    key: "move",
    value: function move(dir, char) {
      switch (dir) {
        case "runRight":
          if (this.game.inBounds(char) && !char.dontMove) {
            char.pos[0] += 2;
          }

          break;

        case "runLeft":
          if (this.game.inBounds(char) && !char.dontMove) {
            char.pos[0] -= 2;
          }

          break;

        case "dmg":
          if (char.pos[0] < 458.5 && !char.player && !char.dontMove) {
            char.pos[0] += 0.6;
          } else if (char.pos[0] > 38 && !char.dontMove) {
            char.pos[0] -= 0.6;
          }

          break;

        default:
          return;
      }
    }
  }, {
    key: "draw",
    value: function draw(ctx, dir) {
      if (dir === "punching" || dir === "kicking" || dir === "punchLeft") {
        this.game.hitCollision(this);
      }

      ctx.drawImage(this.img, this[dir][this.currentFrame][0], this[dir][this.currentFrame][1], this[dir][this.currentFrame][2], this[dir][this.currentFrame][3], this.pos[0], this.pos[1], this[dir][this.currentFrame][2], this[dir][this.currentFrame][3]);
    }
  }, {
    key: "animate",
    value: function animate(ctx) {
      var oldDir = this.dir;

      if (!this.game.paused) {
        if (this.check < 6) {
          if (this.player && this.health > 0 && this.game.goku === this) {
            ctx.clearRect(75, 100, 512, 512);
            ctx.clearRect(75, 75, 50, 50);
            ctx.fillStyle = "#000000";
            ctx.fillText("Goku", 75, 75);
            ctx.fillStyle = "#FF0000";
            ctx.fillRect(75, 100, this.health / 100 * 140, 25);
          } else if (!this.player && this.health > 0 && this.game.computer === this) {
            ctx.fillStyle = "#000000";
            ctx.fillText("Enemy", 300, 75);
            ctx.fillStyle = "#FF0000";
            ctx.fillRect(300, 100, this.health / 100 * 140, 25);
          }

          ctx.clearRect(this.pos[0], this.pos[1], 512, 512);

          if (this.currentFrame === this.TOTALFRAMES[this.dir]) {
            if (this.dir === "dmg" && this.player && !this.dontMove) {
              // this.currentFrame = 0;
              this.dir = "idle";
              this.handleDir(oldDir);
            } else if (this.dir === "dmg" && !this.player) {
              // this.currentFrame = 0;
              this.dir = "idleLeft";
              this.handleDir(oldDir);
            } else if (this.dir === "dead") {
              // this.currentFrame = 0;
              this.handleDir(oldDir);
            } else {
              this.currentFrame = 0;
              this.handleDir(oldDir);
            }
          }

          this.draw(ctx, this.dir);
          this.aiBehavior();
          this.move(this.dir, this);
        } else {
          if (this.player && this.health > 0 && this.game.goku === this) {
            ctx.fillStyle = "#000000";
            ctx.fillText("Goku", 75, 75);
            ctx.fillStyle = "#FF0000";
            ctx.fillRect(75, 100, this.health / 100 * 140, 25);
          }

          if (!this.player && this.health > 0 && this.game.computer === this) {
            ctx.fillStyle = "#000000";
            ctx.fillText("Enemy", 300, 75);
            ctx.fillStyle = "#FF0000";
            ctx.fillRect(300, 100, this.health / 100 * 140, 25);
          }

          ctx.clearRect(this.pos[0], this.pos[1], 512, 512);
          this.draw(ctx, this.dir);
          this.currentFrame++;
          this.move(this.dir, this);
          this.check = 0;
        }

        this.check++;
        this.id = requestAnimationFrame(this.animate.bind(this, ctx));
      }

      if (this.game.gameOver) {
        cancelAnimationFrame(this.id);
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
    key: "draw",
    value: function draw(ctx, dir) {
      var adjX = 0;
      var adjY = 0;

      switch (this.dir) {
        case "shlice":
          if (this.currentFrame === this.totalFrames[this.dir] - 4) {
            this.game.hitCollision(this);
          }

          adjX = 0;
          adjY = 0;
          break;

        case "flashy":
          if (this.currentFrame === this.totalFrames[this.dir] - 4) {
            this.game.hitCollision(this);
          }

          adjX = 0;
          adjY = 0;
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

          break;

        case "dmg":
          if (this.currentFrame > 1 && this.currentFrame < 6) {
            adjY = -20;
          } else {
            adjY = 0;
          }

          break;

        default:
          adjX = 0;
          adjY = 0;
      }

      ctx.drawImage(this.img, this[dir][this.currentFrame][0], this[dir][this.currentFrame][1], this[dir][this.currentFrame][2], this[dir][this.currentFrame][3], this.pos[0] - adjX, this.pos[1] - adjY, this[dir][this.currentFrame][2], this[dir][this.currentFrame][3]);
    }
  }, {
    key: "animate",
    value: function animate(ctx) {
      if (!this.game.paused && this.health > 0) {
        if (this.check < 8) {
          if (this.health > 0 && this.poweredUp && this.game.computer === this) {
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

          this.draw(ctx, this.dir);
          this.aiBehavior();
          this.move(this.dir, this);
        } else {
          if (this.health > 0 && this.poweredUp && this.game.computer === this) {
            ctx.fillStyle = "#000000";
            ctx.fillText("Enemy", 300, 75);
            ctx.fillStyle = "#FF0000";
            ctx.fillRect(300, 100, this.health / 200 * 140, 25);
          }

          this.draw(ctx, this.dir);
          this.currentFrame++;
          this.move(this.dir, this);
          this.check = 0;
        }

        this.check++;
        this.id = requestAnimationFrame(this.animate.bind(this, ctx));
      }

      if (this.game.gameOver) {
        cancelAnimationFrame(this.id);
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
    document.removeEventListener("keydown", handler, false);
    setTimeout(function () {
      ctx.clearRect(0, 0, 512, 512);
      new Game(ctx).start();
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
    this.started = true;
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
          _this.computer = _this.ichigo;
          _this.ichigo.dir = "powerUp";
          _this.ichigo.dontMove = true;
          _this.ichigo.pos = [350, 450];

          _this.ichigo.handleDir();

          _this.gameLoop();
        }, 2000);
        var that = this;
        setTimeout(function () {
          return _this.otherKu.pos = [700, 700];
        }, 2000);
        that.audio.src = "sounds/bleach.mp3";
        this.audio.play();

        if (this.goku.pos[0] > 100) {
          this.goku.pos = [100, 450];
        }
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
          var oldDir = this.computer.dir;
          this.computer.dir = "dmg";
          this.computer.handleDir(oldDir);

          if (!this.once) {
            this.computer.dmgSound.play();
          }

          this.computer.health -= 2;

          if (this.computer.health <= 0) {
            var _oldDir = this.computer.dir;
            this.computer.dir = "dead";
            this.computer.currentFrame = 0;
            this.computer.handleDir(_oldDir);

            if (!this.once) {
              this.computer.deadSound.play();
            }

            this.endFight();
          }

          this.computer.handleDir(oldDir);
        }
      } else if (char.dir === "punching") {
        if (char.pos[0] + 33 >= this.computer.pos[0] && char.pos[0] + 33 <= this.computer.pos[0] + 33) {
          var _oldDir2 = this.computer.dir;
          this.computer.dir = "dmg";

          if (!this.once) {
            this.computer.dmgSound.play();
          }

          this.computer.health -= 2;

          if (this.computer.health <= 0) {
            var _oldDir3 = this.computer.dir;
            this.computer.dir = "dead";
            this.computer.handleDir(_oldDir3);
            this.computer.currentFrame = 0;

            if (!this.once) {
              this.computer.deadSound.play();
            }

            this.endFight();
          }

          this.computer.handleDir();
        }
      } else if (char.dir === "punchLeft") {
        if (char.pos[0] - 33 <= this.goku.pos[0] + 33) {
          var _oldDir4 = this.goku.dir;
          this.goku.dir = "dmg";
          this.goku.handleDir(_oldDir4);
          this.goku.dmgSound.play();
          this.goku.health -= 2;

          if (this.goku.health <= 0) {
            this.goku.dir = "dead";
            this.ctx.clearRect(this.goku.pos[0], this.goku.pos[1], 512, 512);
            this.goku.dontMove = true;
            this.goku.deadSound.play();
            this.ctx.clearRect(this.goku.pos[0], this.goku.pos[1], 512, 512);
            this.gameOver = true;
            this.gameLoop();
          }

          this.goku.handleDir();
        }
      } else if (char.dir === "shlice") {
        if (char.pos[0] - 35 <= this.goku.pos[0] + 33) {
          var _oldDir5 = this.goku.dir;
          this.goku.dir = "dmg";
          this.goku.handleDir(_oldDir5);
          this.goku.dmgSound.play();
          this.goku.health -= 5;

          if (this.goku.health <= 0) {
            this.goku.dir = "dead";
            this.ctx.clearRect(this.goku.pos[0], this.goku.pos[1], 512, 512); // this.goku.dontMove = true;

            this.goku.deadSound.play();
            this.ichigo.winSound.play();
            this.gameOver = true;
            this.gameLoop();
          }

          this.goku.handleDir();
        }
      } else if (char.dir === "flashy") {
        if (char.pos[0] - 35 <= this.goku.pos[0] + 33) {
          var _oldDir6 = this.goku.dir;
          this.goku.dir = "dmg";
          this.goku.handleDir(_oldDir6);
          this.goku.dmgSound.play();
          this.goku.health -= 5;

          if (this.goku.health <= 0) {
            this.goku.dir = "dead";
            this.goku.currentFrame = 0; // this.goku.dontMove = true;

            this.goku.deadSound.play();
            this.ichigo.winSound.play();
            var _oldDir7 = this.goku.dir;
            this.goku.handleDir(_oldDir7);
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
      if (char.pos[0] > 480 && char.dir === "runRight") {
        return false;
      } else if (char.pos[0] < 0 && char.dir === "runLeft") {
        return false;
      } else if (char.pos[0] > this.computer.pos[0] - 33 && char.dir === "runRight") {
        return false;
      } else if (char.pos[0] > this.computer.pos[0] + 33 && char.dir === "runLeft") {
        return false;
      } else if (this.computer.pos[0] < this.goku.pos[0] + 33 && this.computer.dir === "runLeft") {
        return false;
      }

      return true;
    }
  }, {
    key: "gameLoop",
    value: function gameLoop() {
      var _this3 = this;

      debugger; // if (!this.gameOver && this.computer === this.otherKu) {
      //     this.goku.animate(this.ctx);
      //     this.goku.move(this.goku.dir, this.goku);
      //     this.computer.animate(this.ctx);
      //     this.computer.move(this.computer.dir, this.computer);
      //     this.ichigo.animate(this.ctx);
      //     this.ichigo.handleDir();
      //     this.ichigo.move(this.ichigo.dir, this.ichigo);
      // } else if (!this.gameOver && this.computer === this.ichigo) {
      //     return;
      // }

      while (!this.gameOver && !this.once) {
        debugger;
        this.allChars.forEach(function (char) {
          return char.animate(_this3.ctx);
        });
        requestAnimationFrame(this.gameLoop);
      }

      if (this.gameOver && this.ichigo.health <= 0 && !this.once) {
        this.goku.winSound.play();
        this.goku.dir = "winPose";
        this.goku.handleDir();
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
      this.ctx.clearRect(0, 0, 512, 512);
      delete this.goku;
      delete this.otherKu;
      delete this.ichigo;
      this.started = false;
      var game = new Game(this.ctx);
      game.start();
    }
  }, {
    key: "handlekeydown",
    value: function handlekeydown(e) {
      e.preventDefault();
      var oldDir = this.goku.dir;

      if (this.paused || this.started === false) {
        return;
      }

      if (e.code === "KeyA") {
        this.goku.dir = "runLeft";
        this.ctx.clearRect(this.goku.pos[0], this.goku.pos[1], 512, 512);
        this.goku.handleDir(oldDir);
      }

      if (e.code === "KeyD") {
        this.goku.dir = "runRight";
        this.ctx.clearRect(this.goku.pos[0], this.goku.pos[1], 512, 512);
        this.goku.handleDir(oldDir);
      }

      if (e.code === "KeyJ") {
        this.goku.dir = "punching";
        this.ctx.clearRect(this.goku.pos[0], this.goku.pos[1], 512, 512);
        this.goku.handleDir(oldDir);
      }

      if (e.code === "KeyK") {
        this.goku.dir = "kicking";
        this.ctx.clearRect(this.goku.pos[0], this.goku.pos[1], 512, 512);
        this.goku.handleDir(oldDir);
      }
    }
  }, {
    key: "handlekeyup",
    value: function handlekeyup() {
      if (this.started) {
        this.goku.dir = "idle";
        this.goku.handleDir();
      }
    }
  }, {
    key: "start",
    value: function start() {
      var _this4 = this;

      document.addEventListener("keydown", function (key) {
        return _this4.handlekeydown(key);
      }, false);
      document.addEventListener("keyup", function () {
        return _this4.handlekeyup();
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