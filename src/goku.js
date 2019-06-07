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
        this.currentFrame = 0;
        this.totalFrames = 8;
        this.pos = props.startPos;
        this.check = 0;
        this.player ? (this.dir = "idle") : (this.dir = "idleLeft");
        this.health = 10;

        this.TOTALFRAMES = {
            idle: 8,
            idleLeft: 8,
            runRight: 8,
            runLeft: 8,
            punching: 12,
            punchLeft: 15,
            kicking: 11,
            dmg: 7,
            winPose: 7,
            dead: 1,
        };

        this.dead = [[204, 1266, 38, 19]];

        this.idle = [
            [6, 3, 27, 37],
            [39, 3, 27, 37],
            [72, 3, 27, 36],
            [104, 3, 28, 36],
            [137, 3, 28, 37],
            [170, 3, 28, 37],
            [203, 3, 28, 38],
            [237, 3, 27, 38],
        ];

        this.runRight = [
            [2, 90, 27, 40],
            [36, 92, 27, 38],
            [69, 89, 28, 38],
            [104, 88, 27, 37],
            [134, 90, 28, 40],
            [168, 92, 27, 38],
            [201, 89, 28, 37],
            [236, 88, 27, 37],
        ];
        // longer animation will have to play around with it
        this.punching = [
            [4, 479, 27, 36],
            [46, 479, 34, 36],
            [86, 479, 33, 36],
            [128, 479, 34, 36],
            [168, 479, 33, 36],
            [209, 479, 29, 36],
            [389, 480, 42, 35],
            [438, 478, 38, 37],
            [490, 479, 35, 36],
            [539, 479, 35, 36],
            [588, 478, 27, 37],
            [634, 479, 30, 36],
        ];

        this.kicking = [
            [4, 967, 30, 39],
            [64, 964, 45, 42],
            [121, 965, 38, 41],
            [180, 967, 27, 39],
            [238, 964, 31, 41],
            [298, 963, 41, 42],
            [355, 964, 32, 41],
            [402, 965, 27, 40],
            [451, 966, 26, 39],
            [501, 965, 24, 41],
            [551, 969, 26, 37],
        ];

        this.dmg = [
            [11, 1162, 28, 32],
            [59, 1160, 32, 34],
            [109, 1159, 30, 35],
            [151, 1159, 32, 35],
            [202, 1161, 30, 33],
            [253, 1158, 30, 36],
            [304, 1157, 29, 37],
        ];

        this.winPose = [
            [6, 1874, 25, 40],
            [45, 1875, 33, 39],
            [84, 1876, 33, 38],
            [126, 1875, 32, 39],
            [167, 1875, 32, 39],
            [208, 1875, 32, 39],
            [248, 1875, 33, 39],
        ];

        // otherKu specific animations

        this.idleLeft = [
            [1151, 3, 27, 37],
            [1118, 3, 27, 37],
            [1085, 3, 27, 36],
            [1052, 3, 28, 36],
            [1019, 3, 28, 37],
            [986, 3, 28, 37],
            [953, 3, 28, 38],
            [920, 3, 27, 38],
        ];

        this.punchLeft = [
            [1153, 479, 27, 36],
            [1104, 479, 34, 36],
            [1065, 479, 33, 36],
            [1022, 479, 34, 36],
            [983, 479, 33, 36],
            [946, 479, 29, 36],
            [753, 480, 42, 35],
            [708, 478, 38, 37],
            [659, 479, 35, 36],
            [610, 479, 35, 36],
            [569, 478, 27, 37],
            [520, 479, 30, 36],
        ];

        this.runLeft = [
            [1155, 90, 27, 40],
            [1121, 92, 27, 38],
            [1087, 89, 28, 38],
            [1053, 88, 27, 37],
            [1022, 90, 28, 40],
            [989, 92, 27, 38],
            [955, 89, 28, 37],
            [921, 88, 27, 37],
        ];
    }

    aiBehavior() {
        return;
        if (!this.game.paused) {
            if (
                !this.player &&
                this.health > 0 &&
                this.dir !== "dmg" &&
                this.goku.health > 0
            ) {
                if (this.goku.pos[0] + 33 < this.pos[0]) {
                    let oldDir = this.dir;
                    setTimeout(() => {
                        this.dir = "runLeft";
                        this.handleDir(oldDir);
                    }, 200);
                } else if (this.dir !== "punchLeft") {
                    let oldDir = this.dir;
                    this.dir = "punchLeft";
                    this.handleDir(oldDir);
                }
            }
            if (!this.player && this.goku.health <= 0 && this.health > 0) {
                let oldDir = this.dir;
                this.dir = "idleLeft";
                this.handleDir(oldDir);
            }
        }
    }

    handleDir(oldDir) {
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
            } else if (
                this.dir === "idle" &&
                this.health > 0 &&
                !this.dontMove
            ) {
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

    move(dir, char) {
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

    draw(ctx, dir) {
        if (dir === "punching" || dir === "kicking" || dir === "punchLeft") {
            this.game.hitCollision(this);
        }

        ctx.drawImage(
            this.img,
            this[dir][this.currentFrame][0],
            this[dir][this.currentFrame][1],
            this[dir][this.currentFrame][2],
            this[dir][this.currentFrame][3],
            this.pos[0],
            this.pos[1],
            this[dir][this.currentFrame][2],
            this[dir][this.currentFrame][3]
        );
    }

    animate(ctx) {
        let oldDir = this.dir;
        if (!this.game.paused) {
            if (this.check < 6) {
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
}
