import Sprite from "./sprite";

export default class Goku extends Sprite {
    constructor(props) {
        super(props);
        this.player = props.player;
        this.width = props.width;
        this.height = props.height;
        this.game = props.game;
        props.goku ? (this.goku = props.goku) : (this.goku = null);
        this.img = new Image();
        this.img.src = props.imgUrl;

        this.punchSound = new Audio("sounds/attack0.wav");
        this.kickSound = new Audio("sounds/attack1.wav");
        this.dmgSound = new Audio("sounds/hit1.wav");
        this.deadSound = new Audio("sounds/defeated.wav");
        this.winSound = new Audio("sounds/victory.wav");

        this.animate = this.animate.bind(this);
        this.dontMove = false;
        this.player ? (this.shift = [0, -1]) : (this.shift = [1151, 3]);
        this.totalFrames = 8;
        // change currentFrame to 0 here when new animate is implemented
        this.currentFrame = 1;
        this.pos = props.startPos;
        this.check = 0;
        this.player ? (this.dir = "idle") : (this.dir = "idleLeft");
        this.health = 100;
        this.GOKUDIRS = {
            idle: [1, 1],
            idleLeft: [1151, 3],
            right: [-1, 83],
            left: [1151, 83],
            punching: [-1, 476],
            leftPunch: [1153, 479],
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
            punching: 42.1,
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

        this.idle = [
            [-6, -3, 27, 37],
            [-39, -3, 27, 37],
            [-72, -4, 27, 36],
            [-104, -4, 28, 36],
            [-137, -3, 28, 37],
            [-170, -3, 28, 37],
            [-203, -2, 28, 38],
            [-237, -2, 27, 38],
        ];

        this.running = [
            [-2, -90, 27, 40],
            [-36, -92, 27, 38],
            [-69, -89, 28, 38],
            [-104, -88, 27, 37],
            [-134, -90, 28, 40],
            [-168, -92, 27, 38],
            [-201, -89, 28, 37],
            [-236, -88, 27, 37],
        ];
        // longer animation will have to play around with it
        this.punching = [
            [-4, -479, 27, 36],
            [-46, -479, 34, 36],
            [-86, -479, 33, 36],
            [-128, -479, 34, 36],
            [-168, -479, 33, 36],
            [-209, -479, 29, 36],
            [-250, -479, 30, 36],
            [-290, -478, 29, 37],
            [-339, -477, 28, 38],
            [-389, -480, 42, 35],
            [-438, -478, 38, 37],
            [-490, -479, 35, 36],
            [-539, -479, 35, 36],
            [-588, -478, 27, 37],
            [-634, -479, 30, 36],
        ];

        this.kicking = [
            [-4, -967, 30, 39],
            [-64, -964, 45, 42],
            [-121, -965, 38, 41],
            [-180, -967, 27, 39],
            [-238, -964, 31, 41],
            [-298, -963, 41, 42],
            [-355, -964, 32, 41],
            [-402, -965, 27, 40],
            [-451, -966, 26, 39],
            [-501, -965, 24, 41],
            [-551, -969, 26, 37],
        ];

        this.dmg = [
            [-11, -1162, 28, 32],
            [-59, -1160, 32, 34],
            [-109, -1159, 30, 35],
            [-151, -1159, 32, 35],
            [-202, -1161, 30, 33],
            [-253, -1158, 30, 36],
            [-304, -1157, 29, 37],
        ];

        this.winPose = [
            [-6, -1874, 25, 40],
            [-45, -1875, 33, 39],
            [-84, -1876, 33, 38],
            [-126, -1875, 32, 39],
            [-167, -1875, 32, 39],
            [-208, -1875, 32, 39],
            [-248, -1875, 33, 39],
        ];

        // otherKu specific animations

        this.idleLeft = [
            [-1151, -3, 27, 37],
            [-1118, -3, 27, 37],
            [-1085, -4, 27, 36],
            [-1052, -4, 28, 36],
            [-1019, -3, 28, 37],
            [-986, -3, 28, 37],
            [-953, -2, 28, 38],
            [-920, -2, 27, 38],
        ];

        this.punchLeft = [
            [-1153, -479, 27, 36],
            [-1104, -479, 34, 36],
            [-1065, -479, 33, 36],
            [-1022, -479, 34, 36],
            [-983, -479, 33, 36],
            [-946, -479, 29, 36],
            [-904, -479, 30, 36],
            [-865, -478, 29, 37],
            [-817, -477, 28, 38],
            [-753, -480, 42, 35],
            [-708, -478, 38, 37],
            [-659, -479, 35, 36],
            [-610, -479, 35, 36],
            [-569, -478, 27, 37],
            [-520, -479, 30, 36],
        ];

        this.runLeft = [
            [-1155, -90, 27, 40],
            [-1121, -92, 27, 38],
            [-1087, -89, 28, 38],
            [-1053, -88, 27, 37],
            [-1022, -90, 28, 40],
            [-989, -92, 27, 38],
            [-955, -89, 28, 37],
            [-921, -88, 27, 37],
        ];
    }

    aiBehavior() {
        if (!this.game.paused) {
            if (
                !this.player &&
                this.health > 0 &&
                this.dir !== "dmg" &&
                this.goku.health > 0
            ) {
                if (this.goku.pos[0] + 33 < this.pos[0]) {
                    setTimeout(() => {
                        this.dir = "left";
                        this.handleDir();
                    }, 200);
                } else if (this.dir !== "leftPunch") {
                    this.dir = "leftPunch";
                    this.handleDir();
                }
            }
            if (!this.player && this.goku.health <= 0 && this.health > 0) {
                this.dir = "idleLeft";
                this.handleDir();
            }
        }
    }

    handleDir() {
        if (!this.game.paused) {
            if (
                this.dir === "right" &&
                (this.shift[1] !== this.GOKUDIRS.right[1] ||
                    this.shift[0] > 230) &&
                !this.dontMove
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
                (this.shift[1] !== this.GOKUDIRS.left[1] ||
                    this.shift[0] < 500) &&
                !this.dontMove
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
                this.health > 0 &&
                !this.dontMove
            ) {
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
    }

    move(dir, char) {
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
                    char.pos[0] += 0.6;
                } else if (char.pos[0] > 38 && !char.dontMove) {
                    char.pos[0] -= 0.6;
                }
                break;
            default:
                return;
        }
    }

    animate(ctx) {
        let kickIdx = 0;
        let dmgHeightIdx = 0;
        let dmgWidthIdx = 0;
        if (!this.game.paused) {
            if (this.check < 7) {
                debugger;
                if (this.player && this.health > 0 && this.game.goku === this) {
                    ctx.clearRect(75, 100, 512, 512);
                    ctx.clearRect(75, 75, 50, 50);
                    ctx.fillStyle = "#000000";
                    ctx.fillText("Goku", 75, 75);
                    ctx.fillStyle = "#FF0000";
                    ctx.fillRect(75, 100, (this.health / 100) * 140, 25);
                } else if (
                    !this.player &&
                    this.health > 0 &&
                    this.game.computer === this
                ) {
                    ctx.fillStyle = "#000000";
                    ctx.fillText("Enemy", 300, 75);
                    ctx.fillStyle = "#FF0000";
                    ctx.fillRect(300, 100, (this.health / 100) * 140, 25);
                }
                ctx.clearRect(this.pos[0], this.pos[1], 512, 512);
                ctx.drawImage(
                    this.img,
                    this.shift[0],
                    this.shift[1],
                    this.width,
                    this.height,
                    this.pos[0],
                    this.pos[1],
                    this.width,
                    this.height
                );

                if (this.currentFrame === this.totalFrames) {
                    if (this.dir === "dmg" && this.player && !this.dontMove) {
                        this.dir = "idle";
                        this.handleDir();
                    } else if (this.dir === "dmg" && !this.player) {
                        this.dir = "idleLeft";
                        this.handleDir();
                    } else if (this.dir === "dead") {
                        this.handleDir();
                    } else {
                        this.shift = this.GOKUDIRS[this.dir].slice();
                        this.currentFrame = 1;
                    }
                }
                this.aiBehavior();
                this.move(this.dir, this);
            } else {
                debugger;
                if (this.player && this.health > 0 && this.game.goku === this) {
                    ctx.fillStyle = "#000000";
                    ctx.fillText("Goku", 75, 75);
                    ctx.fillStyle = "#FF0000";
                    ctx.fillRect(75, 100, (this.health / 100) * 140, 25);
                }
                if (
                    !this.player &&
                    this.health > 0 &&
                    this.game.computer === this
                ) {
                    ctx.fillStyle = "#000000";
                    ctx.fillText("Enemy", 300, 75);
                    ctx.fillStyle = "#FF0000";
                    ctx.fillRect(300, 100, (this.health / 100) * 140, 25);
                }
                // ctx.clearRect(this.pos[0], this.pos[1], 512, 512);
                if (this.dir === "dead") {
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
                ctx.drawImage(
                    this.img,
                    this.shift[0],
                    this.shift[1],
                    this.width,
                    this.height,
                    this.pos[0],
                    this.pos[1],
                    this.width,
                    this.height
                );

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
}
