export default class Ichigo {
    constructor(props) {
        this.game = props.game;
        this.goku = props.goku;
        this.img = new Image();
        this.img.src = props.imgUrl;
        this.bankaiSound = new Audio("sounds/bankai.wav");
        this.powerUpSound = new Audio("sounds/powerup.mp3");
        this.atk1Sound = new Audio("sounds/ichigoAtk1.wav");
        this.atk1Sound = new Audio("sounds/ichigoAtk2.wav");
        this.dmgSound = new Audio("sounds/ichigoDmg.wav");
        this.deadSound = new Audio("sounds/ichigoDefeat.wav");
        this.winSound = new Audio("sounds/ichigoVictory.wav");
        this.dontMove = false;
        this.pos = props.startPos;
        this.check = 0;
        this.currentFrame = 0;
        this.totalFrames = 10;
        this.dir = "powerup";
        // this.canvas = document.getElementById("canvas");
        // this.ctx = this.canvas.getContext("2d");

        this.health = 200;
        this.powerUp = [
            [-427, -29, 54, 37],
            [-375, -26, 47, 40],
            [-345, -16, 24, 50],
            [-310, -16, 24, 50],
            [-274, -17, 24, 48],
            [-354, -73, 125, 181],
            [-210, -115, 110, 140],
            [-64, -87, 120, 168],
            [-418, -260, 68, 48],
            [-369, -261, 38, 45],
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
        this.dead = [332, 1081, 57, 14];
    }

    handleDir() {
        return;
    }
    //placeholder for testing
    move() {
        return;
    }

    animate(ctx) {
        if (this.check < 3) {
            if (this.health > 0) {
                ctx.fillStyle = "#000000";
                ctx.fillText("Enemy", 300, 75);
                ctx.fillStyle = "#FF0000";
                ctx.fillRect(300, 100, (this.health / 200) * 140, 25);
            }
            ctx.clearRect(this.pos[0], this.pos[1], 512, 512);
            debugger;
            ctx.drawImage(
                this.img,
                this.powerUp[this.currentFrame][0],
                this.powerUp[this.currentFrame][1],
                this.powerUp[this.currentFrame][2],
                this.powerUp[this.currentFrame][3],
                this.pos[0],
                this.pos[1],
                this.powerUp[this.currentFrame][2],
                this.powerUp[this.currentFrame][3]
            );

            if (this.currentFrame === this.totalFrames - 1) {
                this.currentFrame = 0;
                this.dir = "powerup";
            }
        } else {
            ctx.clearRect(this.pos[0], this.pos[1], 512, 512);
            ctx.drawImage(
                this.img,
                this.powerUp[this.currentFrame][0],
                this.powerUp[this.currentFrame][1],
                this.powerUp[this.currentFrame][2],
                this.powerUp[this.currentFrame][3],
                this.pos[0],
                this.pos[1],
                this.powerUp[this.currentFrame][2],
                this.powerUp[this.currentFrame][3]
            );

            this.currentFrame++;
            this.check = 0;
        }
        this.check++;
        requestAnimationFrame(this.animate.bind(this, ctx));
    }
}
