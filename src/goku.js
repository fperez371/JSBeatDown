import Sprite from "./sprite";

export default class Goku extends Sprite {
    constructor(props) {
        super(props);
        this.player = props.player;
        this.width = props.width;
        this.height = props.height;
        this.img = new Image();
        this.img.src = props.imgUrl;
        this.punchSound = new Audio("sounds/attack0.wav");
        this.kickSound = new Audio("sounds/attack1.wav");
        this.dmgSound = new Audio("sounds/hit1.wav");
        this.deadSound = new Audio("sounds/defeated.wav");
        this.winSound = new Audio("sounds/victory.wav");

        // this.canvas = document.getElementById("canvas");
        // this.ctx = this.canvas.getContext("2d");
        this.player ? (this.shift = [0, -1]) : (this.shift = [1151, 3]);
        this.totalFrames = 8;
        this.currentFrame = 1;
        this.pos = props.startPos;
        this.check = 0;
        this.player ? (this.dir = "idle") : (this.dir = "idleLeft");
        this.health = 550;
        this.GOKUDIRS = {
            idle: [1, 1],
            idleLeft: [1151, 3],
            right: [-1, 83],
            left: [1151, 83],
            punching: [-1, 476],
            kicking: [1, 959],
            dmg: [11, 1162],
            dead: [-204, -1266],
        };
        this.kickWidths = [58, 115, 172, 229, 286, 343, 400, 449, 498, 547];
        this.dmgWidths = [48, 50, 42, 51, 51, 51];
        this.dmgHeights = [32, 34, 35, 35, 33, 36, 37];
        this.WIDTHS = {
            idle: 33,
            running: 33,
            punching: 40.5,
            kicking: 56,
            dmg: 28,
            dead: 38,
        };

        this.HEIGHTS = {
            idle: 40,
            running: 48,
            punching: 40,
            kicking: 48,
            dmg: 32,
            dead: 19,
        };

        this.TOTALFRAMES = {
            idle: 8,
            running: 8,
            punching: 8,
            kicking: 11,
            dmg: 7,
            dead: 1,
        };
    }

    handleDir() {
        if (
            this.dir === "right" &&
            (this.shift[1] !== this.GOKUDIRS.right[1] || this.shift[0] > 230)
        ) {
            this.img.src = "images/goku.png";
            this.pos[1] = 444;
            this.shift = this.GOKUDIRS.right.slice();
            this.height = this.HEIGHTS.running;
            this.width = this.WIDTHS.running;
            this.currentFrame = 1;
            this.totalFrames = this.TOTALFRAMES.running;
        } else if (
            this.dir === "left" &&
            (this.shift[1] !== this.GOKUDIRS.left[1] || this.shift[0] < 500)
        ) {
            this.img.src = "images/goku_left.png";
            this.pos[1] = 444;
            this.shift = this.GOKUDIRS.left.slice();
            this.height = this.HEIGHTS.running;
            this.width = this.WIDTHS.running;
            this.currentFrame = 1;
            this.totalFrames = this.TOTALFRAMES.running;
        } else if (
            this.dir === "idle" &&
            this.shift[1] !== this.GOKUDIRS.idle[1] &&
            this.player
        ) {
            this.img.src = "images/goku.png";
            this.pos[1] = 450;
            this.shift = this.GOKUDIRS.idle.slice();
            this.height = this.HEIGHTS.idle;
            this.width = this.WIDTHS.idle;
            this.currentFrame = 1;
            this.totalFrames = this.TOTALFRAMES.idle;
        } else if (
            this.dir === "idleLeft" &&
            this.shift[1] !== this.GOKUDIRS.idleLeft[1] &&
            !this.player
        ) {
            this.img.src = "images/goku_left.png";
            this.pos[1] = 450;
            this.shift = this.GOKUDIRS.idleLeft.slice();
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
        } else if (this.dir === "dead") {
            this.img.src = "images/goku.png";
            this.pos[1] = 465;
            this.shift = this.GOKUDIRS.dead.slice();
            this.height = this.HEIGHTS.dead;
            this.width = this.WIDTHS.dead;
            this.currentFrame = 1;
            this.totalFrames = this.TOTALFRAMES.dead;
        }
    }
    // handlekeydown(e) {
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
}
