// export default class Goku {
//   constructor() {
//     this.width = 33;
//     this.height = 40;
//     this.img = new Image();
//     this.img.src = './images/goku.png';
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
//     if (this.currentFrame == this.totalFrames) {
//       this.shift = 0;
//       this.currentFrame = 0;
//     }

//     this.currentFrame++;
//     requestAnimationFrame(this.animate);
//   }
// }
export default class Goku {
  constructor(startPos = [200, 450]) {
    this.width = 33;
    this.height = 40;
    this.img = new Image();
    this.startPos = startPos;
    this.img.src = "./images/goku.png";
    // img.addEventListener("load", loadImage, false);
    this.animate = this.animate.bind(this);
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.shift = [0, -1];
    this.totalFrames = 8;
    this.currentFrame = 1;
    this.check = 0;
    this.dir = "idle";
    this.handlekeydown = this.handlekeydown.bind(this);

    this.GOKUDIRS = {
      idle: [1, 1],
      right: [-1, 83],
      left: [1151, 83],
      punching: [-1, 476],
    };

    this.HEIGHTS = {
      idle: 40,
      running: 48,
      punching: 40,
    };

    this.WIDTHS = {
      idle: 33,
      running: 33,
      punching: 40.5,
    };

    this.TOTALFRAMES = {
      idle: 8,
      running: 8,
      punching: 7,
    };

    // this.kick = this.kick.bind(this);
    // this.punch = this.punch.bind(this);
  }

  handleDir() {
    if (
      this.dir === "right" &&
      (this.shift[1] !== this.GOKUDIRS.right[1] || this.shift[0] > 230)
    ) {
      this.img.src = "./images/goku.png";
      this.startPos[1] = 444;
      this.shift = this.GOKUDIRS.right.slice();
      this.height = this.HEIGHTS.running;
      this.width = this.WIDTHS.running;
      this.currentFrame = 1;
      this.totalFrames = this.TOTALFRAMES.running;
    } else if (
      this.dir === "left" &&
      (this.shift[1] !== this.GOKUDIRS.left[1] || this.shift[0] < 500)
    ) {
      this.img.src = "./images/goku_left.png";
      this.startPos[1] = 444;
      this.shift = this.GOKUDIRS.left.slice();
      this.height = this.HEIGHTS.running;
      this.width = this.WIDTHS.running;
      this.currentFrame = 1;
      this.totalFrames = this.TOTALFRAMES.running;
    } else if (this.dir === "idle" && this.shift[1] !== this.GOKUDIRS.idle[1]) {
      this.img.src = "./images/goku.png";
      this.startPos[1] = 450;
      this.shift = this.GOKUDIRS.idle.slice();
      this.height = this.HEIGHTS.idle;
      this.width = this.WIDTHS.idle;
      this.currentFrame = 1;
      this.totalFrames = this.TOTALFRAMES.idle;
    } else if (this.dir === "punching") {
      this.shift = this.GOKUDIRS.punching.slice();
      this.width = this.WIDTHS.punching;
      this.heigth = this.HEIGHTS.punching;
      this.currentFrame = 1;
      this.totalFrames = this.TOTALFRAMES.punching;
    }
  }

  handlekeydown(e) {
    e.preventDefault();

    if (e.key === "a") {
      this.dir = "left";
      this.ctx.clearRect(this.startPos[0], this.startPos[1], 512, 512);
      this.handleDir();
    }
    if (e.key === "d") {
      this.dir = "right";
      this.ctx.clearRect(this.startPos[0], this.startPos[1], 512, 512);
      this.handleDir();
    }
    if (e.key === "j") {
      this.dir = "punching";
      this.ctx.clearRect(this.startPos[0], this.startPos[1], 512, 512);
      this.handleDir();
    }
  }

  handlekeyup() {
    this.dir = "idle";
    this.handleDir();
  }

  runRight() {}

  start() {
    document.addEventListener("keydown", key => this.handlekeydown(key));
    document.addEventListener("keyup", () => this.handlekeyup());
    this.animate();
  }

  // punch(){

  // }

  // kick() {

  // }
  inBounds() {
    if (this.startPos[0] > 480 && this.dir === "right") {
      return false;
    } else if (this.startPos[0] < 0 && this.dir === "left") {
      return false;
    }
    return true;
  }

  move(dir) {
    switch (dir) {
      case "right":
        if (this.inBounds()) {
          this.startPos[0] += 1;
        }
        break;
      case "left":
        if (this.inBounds()) {
          this.startPos[0] -= 1;
        }
        break;
      case "up":
        if (this.inBounds()) {
          this.startPos[1] -= 1;
        }
        break;
      case "down":
        if (this.inBounds()) {
          this.startPos[1] += 1;
        }
        break;
      default:
        return;
    }
  }

  animate() {
    if (this.check < 7) {
      this.ctx.clearRect(this.startPos[0], this.startPos[1], 512, 512);
      this.ctx.drawImage(
        this.img,
        this.shift[0],
        this.shift[1],
        this.width,
        this.height,
        this.startPos[0],
        this.startPos[1],
        this.width,
        this.height
      );

      if (this.currentFrame === this.totalFrames) {
        this.shift = this.GOKUDIRS[this.dir].slice();
        this.currentFrame = 1;
      }
    } else {
      this.ctx.clearRect(this.startPos[0], this.startPos[1], 512, 512);
      if (this.dir === "left") {
        this.shift[0] -= this.width;
      } else if (this.dir === "right") {
        this.shift[0] += this.width;
      } else if (this.dir === "punching") {
        this.shift[0] += this.width;
      } else {
        this.shift[0] += this.width;
      }

      this.ctx.drawImage(
        this.img,
        this.shift[0],
        this.shift[1],
        this.width,
        this.height,
        this.startPos[0],
        this.startPos[1],
        this.width,
        this.height
      );

      this.currentFrame++;
      this.check = 0;
    }
    this.move(this.dir);
    this.check++;
    requestAnimationFrame(this.animate);
  }
}
