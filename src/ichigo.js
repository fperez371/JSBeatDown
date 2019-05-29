export default class Ichigo {
    constructor(props) {
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
        this.poweredUp = false;
        // this.canvas = document.getElementById("canvas");
        // this.ctx = this.canvas.getContext("2d");

        this.health = 200;
        this.powerUp = [
            [427, 29, 54, 37],
            [375, 26, 47, 40],
            [345, 16, 24, 50],
            [310, 16, 24, 50],
            [274, 17, 24, 48],
            [354, 73, 125, 181],
            [210, 115, 110, 140],
            [64, 87, 120, 168],
            [418, 260, 68, 48],
            [369, 261, 38, 45],
        ];
        this.idle = [[369, 261, 38, 45]];
        this.dmg = [
            [447, 1061, 38, 37],
            [399, 1071, 45, 30],
            [332, 1081, 57, 14],
            [271, 1079, 57, 16],
            [206, 1078, 57, 16],
            [163, 1063, 36, 33],
            [124, 1064, 38, 34],
            [87, 1063, 31, 35],
            [43, 1049, 35, 49],
            [2, 1048, 36, 49],
        ];
        this.shlice = [
            [448, 459, 36, 40],
            [403, 462, 39, 40],
            [319, 464, 71, 38],
            [275, 470, 42, 34],
            [231, 468, 31, 37],
            [160, 469, 66, 33],
            [98, 466, 56, 37],
        ];
        // have him move forward on frames 4, 5, and 6
        // last frame is taken from a diff attack might want to change it
        this.flashy = [
            [449, 1127, 36, 49],
            [411, 1127, 36, 49],
            [371, 1127, 37, 49],
            [287, 1131, 39, 45],
            [245, 1131, 38, 45],
            [189, 1132, 45, 45],
            [385, 867, 66, 36],
        ];
        this.left = [
            [445, 397, 41, 35],
            [395, 398, 43, 36],
            [342, 399, 44, 35],
        ];
        this.dead = [[332, 1081, 57, 14]];
        this.totalFrames = {
            idle: 1,
            powerUp: 10,
            dmg: 10,
            shlice: 7,
            flashy: 7,
            left: 3,
        };
    }

    aiBehavior() {
        let randomVal;
        if (this.poweredUp && !this.game.paused) {
            if (this.health > 0 && this.dir !== "dmg" && this.goku.health > 0) {
                if (this.goku.pos[0] + 45 < this.pos[0]) {
                    this.dir = "left";
                    this.handleDir();
                } else if (this.dir !== "shlice" && this.dir !== "flashy") {
                    // this.dir = "idleLeft";
                    // this.handleDir();

                    Math.random() < 0.5
                        ? (randomVal = "shlice")
                        : (randomVal = "flashy");
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

    handleDir() {
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
    move(dir, char) {
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

    animate(ctx) {
        let adjY = 0;
        let adjX = 0;
        if (!this.game.paused && this.health > 0) {
            if (this.check < 8) {
                if (this.health > 0 && this.poweredUp) {
                    ctx.fillStyle = "#000000";
                    ctx.fillText("Enemy", 300, 75);
                    ctx.fillStyle = "#FF0000";
                    ctx.fillRect(300, 100, (this.health / 200) * 140, 25);
                }
                ctx.clearRect(this.pos[0], this.pos[1], 512, 512);
                if (
                    this.currentFrame === this.totalFrames[this.dir] &&
                    this.dir !== "powerUp" &&
                    this.dir !== "dmg"
                ) {
                    this.currentFrame = 0;
                }
                if (
                    this.dir === "powerUp" &&
                    this.currentFrame !== this.totalFrames[this.dir]
                ) {
                    ctx.fillText("ROUND 2: Face a rival!", 115, 200);
                }
                if (
                    this.dir === "powerUp" &&
                    this.currentFrame === this.totalFrames[this.dir]
                ) {
                    this.currentFrame = 0;
                    this.dontMove = false;
                    this.poweredUp = true;
                    this.dir = "idle";
                    this.handleDir();
                }
                if (
                    this.dir === "dmg" &&
                    this.currentFrame === this.totalFrames[this.dir]
                ) {
                    this.currentFrame = 0;
                    this.dir = "idle";
                    this.handleDir();
                }
                switch (this.dir) {
                    case "idle":
                        ctx.drawImage(
                            this.img,
                            369,
                            261,
                            38,
                            45,
                            this.pos[0],
                            this.pos[1],
                            38,
                            45
                        );
                        break;
                    case "shlice":
                        ctx.drawImage(
                            this.img,
                            this.shlice[this.currentFrame][0],
                            this.shlice[this.currentFrame][1],
                            this.shlice[this.currentFrame][2],
                            this.shlice[this.currentFrame][3],
                            this.pos[0],
                            this.pos[1],
                            this.shlice[this.currentFrame][2],
                            this.shlice[this.currentFrame][3]
                        );
                        if (
                            this.currentFrame ===
                            this.totalFrames[this.dir] - 4
                        ) {
                            this.game.hitCollision(this);
                        }
                        break;
                    case "flashy":
                        ctx.drawImage(
                            this.img,
                            this.flashy[this.currentFrame][0],
                            this.flashy[this.currentFrame][1],
                            this.flashy[this.currentFrame][2],
                            this.flashy[this.currentFrame][3],
                            this.pos[0],
                            this.pos[1],
                            this.flashy[this.currentFrame][2],
                            this.flashy[this.currentFrame][3]
                        );
                        if (
                            this.currentFrame ===
                            this.totalFrames[this.dir] - 4
                        ) {
                            this.game.hitCollision(this);
                        }
                        break;
                    case "left":
                        ctx.drawImage(
                            this.img,
                            this.left[this.currentFrame][0],
                            this.left[this.currentFrame][1],
                            this.left[this.currentFrame][2],
                            this.left[this.currentFrame][3],
                            this.pos[0],
                            this.pos[1],
                            this.left[this.currentFrame][2],
                            this.left[this.currentFrame][3]
                        );
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
                        ctx.drawImage(
                            this.img,
                            this.powerUp[this.currentFrame][0],
                            this.powerUp[this.currentFrame][1],
                            this.powerUp[this.currentFrame][2],
                            this.powerUp[this.currentFrame][3],
                            this.pos[0] - adjX,
                            this.pos[1] - adjY,
                            this.powerUp[this.currentFrame][2],
                            this.powerUp[this.currentFrame][3]
                        );
                        break;
                    case "dmg":
                        if (this.currentFrame > 1 && this.currentFrame < 6) {
                            adjY = 20;
                        } else {
                            adjY = 0;
                        }
                        ctx.drawImage(
                            this.img,
                            this.dmg[this.currentFrame][0],
                            this.dmg[this.currentFrame][1],
                            this.dmg[this.currentFrame][2],
                            this.dmg[this.currentFrame][3],
                            this.pos[0],
                            this.pos[1] + adjY,
                            this.dmg[this.currentFrame][2],
                            this.dmg[this.currentFrame][3]
                        );
                        break;
                    case "dead":
                        ctx.drawImage(
                            this.img,
                            332,
                            1081,
                            57,
                            14,
                            this.pos[0],
                            this.pos[1],
                            57,
                            14
                        );
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
                    ctx.fillRect(300, 100, (this.health / 200) * 140, 25);
                }
                switch (this.dir) {
                    case "idle":
                        ctx.drawImage(
                            this.img,
                            369,
                            261,
                            38,
                            45,
                            this.pos[0],
                            this.pos[1],
                            38,
                            45
                        );
                        break;
                    case "shlice":
                        ctx.drawImage(
                            this.img,
                            this.shlice[this.currentFrame][0],
                            this.shlice[this.currentFrame][1],
                            this.shlice[this.currentFrame][2],
                            this.shlice[this.currentFrame][3],
                            this.pos[0],
                            this.pos[1],
                            this.shlice[this.currentFrame][2],
                            this.shlice[this.currentFrame][3]
                        );
                        if (
                            this.currentFrame ===
                            this.totalFrames[this.dir] - 4
                        ) {
                            this.game.hitCollision(this);
                        }
                        break;
                    case "flashy":
                        ctx.drawImage(
                            this.img,
                            this.flashy[this.currentFrame][0],
                            this.flashy[this.currentFrame][1],
                            this.flashy[this.currentFrame][2],
                            this.flashy[this.currentFrame][3],
                            this.pos[0],
                            this.pos[1],
                            this.flashy[this.currentFrame][2],
                            this.flashy[this.currentFrame][3]
                        );
                        if (
                            this.currentFrame ===
                            this.totalFrames[this.dir] - 4
                        ) {
                            this.game.hitCollision(this);
                        }
                        break;
                    case "left":
                        ctx.drawImage(
                            this.img,
                            this.left[this.currentFrame][0],
                            this.left[this.currentFrame][1],
                            this.left[this.currentFrame][2],
                            this.left[this.currentFrame][3],
                            this.pos[0],
                            this.pos[1],
                            this.left[this.currentFrame][2],
                            this.left[this.currentFrame][3]
                        );
                        break;
                    case "powerUp":
                        if (this.currentFrame >= 5 && this.currentFrame < 8) {
                            adjY = 100;
                            adjX = 30;
                        } else {
                            adjY = 0;
                            adjX = 0;
                        }
                        ctx.drawImage(
                            this.img,
                            this.powerUp[this.currentFrame][0],
                            this.powerUp[this.currentFrame][1],
                            this.powerUp[this.currentFrame][2],
                            this.powerUp[this.currentFrame][3],
                            this.pos[0] - adjX,
                            this.pos[1] - adjY,
                            this.powerUp[this.currentFrame][2],
                            this.powerUp[this.currentFrame][3]
                        );
                        break;
                    case "dmg":
                        if (this.currentFrame > 1 && this.currentFrame < 6) {
                            adjY = 20;
                        } else {
                            adjY = 0;
                        }
                        ctx.drawImage(
                            this.img,
                            this.dmg[this.currentFrame][0],
                            this.dmg[this.currentFrame][1],
                            this.dmg[this.currentFrame][2],
                            this.dmg[this.currentFrame][3],
                            this.pos[0],
                            this.pos[1] + adjY,
                            this.dmg[this.currentFrame][2],
                            this.dmg[this.currentFrame][3]
                        );
                        break;
                    case "dead":
                        ctx.drawImage(
                            this.img,
                            332,
                            1081,
                            57,
                            14,
                            this.pos[0],
                            this.pos[1],
                            57,
                            14
                        );
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
}
