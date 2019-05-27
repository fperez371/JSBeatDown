import Goku from "./goku";

function handler(key) {
    if (key.keyCode === 32) {
        const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, 512, 512);
        ctx.fillText("ROUND 1: Face yourself!", 115, 200);
        setTimeout(() => ctx.clearRect(0, 0, 512, 512), 2000);
        new Game(ctx).start();
    }
}
document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    ctx.font = "30px dbz";
    ctx.fillText("Press space to start", 125, 200);
    document.addEventListener("keydown", handler, false);
});

export default class Game {
    constructor(ctx) {
        this.audio = document.getElementById("audio");
        this.audio.volume = 0.4;
        this.audio.addEventListener(
            "ended",
            function() {
                this.currentTime = 0;
                this.play();
            },
            false
        );
        this.ctx = ctx;

        // var background = new Image();
        // background.src = "../images/arena.png";
        // background.addEventListener("load", loadImage, false);
        // ctx.clearRect(0, 0, canvas.width, canvas.height);

        this.goku = new Goku({
            width: 33,
            height: 40,
            imgUrl: "images/goku.png",
            startPos: [200, 450],
            player: true,
            game: this,
        });
        this.otherKu = new Goku({
            width: 33,
            height: 40,
            imgUrl: "images/goku_left.png",
            startPos: [300, 450],
            player: false,
            game: this,
            goku: this.goku,
        });

        this.gameOver = false;

        this.computer = this.otherKu;
        this.newGame = this.newGame.bind(this);
    }

    endFight() {
        if (this.computer === this.otherKu) {
            this.otherKu.deadSound.play();
            this.goku.winSound.play();
            setTimeout(() => (this.otherKu.pos = [700, 700]), 1000);
            this.audio.src = "sounds/bleach.mp3";
            this.audio.play();
            this.ctx.clearRect(0, 0, 512, 512);
            this.ctx.fillText("ROUND 2: Face the first rival!", 75, 200);
            setTimeout(() => this.ctx.clearRect(0, 0, 512, 512), 2000);
        }
    }

    hitCollision(char) {
        if (char.dir === "kicking") {
            if (
                char.pos[0] + 40 >= this.computer.pos[0] &&
                char.pos[0] + 40 <= this.computer.pos[0] + 33
            ) {
                this.computer.dir = "dmg";
                this.computer.dmgSound.play();
                this.computer.health -= 50;
                if (this.computer.health <= 0) {
                    this.computer.dir = "dead";
                    this.endFight();
                }
                this.computer.handleDir();
            }
        } else if (char.dir === "punching") {
            if (
                char.pos[0] + 33 >= this.computer.pos[0] &&
                char.pos[0] + 33 <= this.computer.pos[0] + 33
            ) {
                this.computer.dir = "dmg";
                this.computer.dmgSound.play();
                this.computer.health -= 50;
                if (this.computer.health <= 0) {
                    this.computer.dir = "dead";
                    this.endFight();
                }
                this.computer.handleDir();
            }
        } else if (char.dir === "leftPunch") {
            if (char.pos[0] - 33 <= this.goku.pos[0] + 33) {
                this.goku.dir = "dmg";
                this.goku.dmgSound.play();
                this.goku.health -= 50;
                if (this.goku.health <= 0) {
                    this.goku.dir = "dead";
                    this.goku.deadSound.play();
                    this.goku.handleDir();
                    this.gameOver = true;
                    this.gameLoop();
                }
                this.goku.handleDir();
            }
        }
    }

    inBounds(char) {
        if (char.pos[0] > 480 && char.dir === "right") {
            return false;
        } else if (char.pos[0] < 0 && char.dir === "left") {
            return false;
        } else if (
            char.pos[0] > this.computer.pos[0] - 33 &&
            char.dir === "right"
        ) {
            return false;
        } else if (
            char.pos[0] > this.computer.pos[0] + 33 &&
            char.dir === "left"
        ) {
            return false;
        } else if (
            this.computer.pos[0] < this.goku.pos[0] + 33 &&
            this.computer.dir === "left"
        ) {
            return false;
        }
        return true;
    }

    // function move(dir, char) {
    //     switch (dir) {
    //         case "right":
    //             if (inBounds(char)) {
    //                 char.pos[0] += 1;
    //             }
    //             break;
    //         case "left":
    //             if (inBounds(char)) {
    //                 char.pos[0] -= 1;
    //             }
    //             break;
    //         case "dmg":
    //             if (char.pos[0] < 458.5 && !char.player) {
    //                 char.pos[0] += 0.3;
    //             } else if (char.pos[0] > 38) {
    //                 char.pos[0] -= 0.3;
    //             }
    //             break;
    //         default:
    //             return;
    //     }
    // }

    //   function animate() {
    //     let otherKuKickIdx = 0;
    //     let kickIdx = 0;
    //     let dmgHeightIdx = 0;
    //     let dmgWidthIdx = 0;
    //     let otherDmgHeightIdx = 0;
    //     let otherDmgWidthIdx = 0;
    //     if (goku.check < 7) {
    //         ctx.clearRect(goku.pos[0], goku.pos[1], 512, 512);
    //         ctx.drawImage(
    //             goku.img,
    //             goku.shift[0],
    //             goku.shift[1],
    //             goku.width,
    //             goku.height,
    //             goku.pos[0],
    //             goku.pos[1],
    //             goku.width,
    //             goku.height
    //         );

    //         if (goku.currentFrame === goku.totalFrames) {
    //             if (goku.dir === "dmg") {
    //                 goku.dir = "idle";
    //                 goku.shift = goku.GOKUDIRS.idle;
    //                 goku.handleDir();
    //             } else {
    //                 goku.shift = goku.GOKUDIRS[goku.dir].slice();
    //                 goku.currentFrame = 1;
    //             }
    //         }
    //     } else {
    //         ctx.clearRect(goku.pos[0], goku.pos[1], 512, 512);
    //         if (goku.dir === "dead") {
    //             goku.shift = [204, 1266];
    //         } else if (goku.dir === "left") {
    //             goku.shift[0] -= goku.width;
    //         } else if (goku.dir === "right") {
    //             goku.shift[0] += goku.width;
    //         } else if (goku.dir === "punching") {
    //             goku.shift[0] += goku.width;
    //             hitCollision(goku);
    //         } else if (goku.dir === "kicking") {
    //             goku.shift[0] += goku.kickWidths[kickIdx];
    //             hitCollision(goku);
    //             kickIdx++;
    //         } else if (goku.dir === "dmg") {
    //             goku.shift[0] += goku.dmgWidths[dmgWidthIdx];
    //             goku.height = goku.dmgHeights[dmgHeightIdx];
    //             dmgWidthIdx++;
    //             dmgHeightIdx++;
    //         } else {
    //             goku.shift[0] += goku.width;
    //         }
    //         ctx.drawImage(
    //             goku.img,
    //             goku.shift[0],
    //             goku.shift[1],
    //             goku.width,
    //             goku.height,
    //             goku.pos[0],
    //             goku.pos[1],
    //             goku.width,
    //             goku.height
    //         );

    //         goku.currentFrame++;
    //         goku.check = 0;
    //     }
    //     move(goku.dir, goku);
    //     goku.check++;
    //     move(otherKu.dir, otherKu);
    //     otherKu.check++;
    //     requestAnimationFrame(animate);

    //     if (otherKu.check < 7) {
    //         ctx.clearRect(otherKu.pos[0], otherKu.pos[1], 512, 512);
    //         ctx.drawImage(
    //             otherKu.img,
    //             otherKu.shift[0],
    //             otherKu.shift[1],
    //             otherKu.width,
    //             otherKu.height,
    //             otherKu.pos[0],
    //             otherKu.pos[1],
    //             otherKu.width,
    //             otherKu.height
    //         );

    //         if (otherKu.currentFrame === otherKu.totalFrames) {
    //             if (otherKu.dir === "dmg") {
    //                 otherKu.dir = "idleLeft";
    //                 otherKu.handleDir();
    //             } else {
    //                 otherKu.shift = otherKu.GOKUDIRS[otherKu.dir].slice();
    //                 otherKu.currentFrame = 1;
    //             }
    //         }
    //     } else {
    //         ctx.clearRect(otherKu.pos[0], otherKu.pos[1], 512, 512);
    //         if (otherKu.dir === "dead") {
    //             otherKu.shift = [204, 1266];
    //         } else if (otherKu.dir === "left") {
    //             otherKu.shift[0] -= otherKu.width;
    //         } else if (otherKu.dir === "idleLeft") {
    //             otherKu.shift[0] -= otherKu.width;
    //         } else if (otherKu.dir === "right") {
    //             otherKu.shift[0] += otherKu.width;
    //         } else if (otherKu.dir === "leftPunch") {
    //             otherKu.shift[0] -= otherKu.width;
    //         } else if (otherKu.dir === "kicking") {
    //             otherKu.shift[0] += otherKu.kickWidths[otherKuKickIdx];
    //             otherKuKickIdx++;
    //         } else if (otherKu.dir === "dmg") {
    //             otherKu.shift[0] += otherKu.dmgWidths[otherDmgWidthIdx];
    //             otherKu.height = otherKu.dmgHeights[otherDmgHeightIdx];
    //             otherDmgWidthIdx++;
    //             otherDmgHeightIdx++;
    //         } else {
    //             otherKu.shift[0] += otherKu.width;
    //         }
    //         ctx.drawImage(
    //             otherKu.img,
    //             otherKu.shift[0],
    //             otherKu.shift[1],
    //             otherKu.width,
    //             otherKu.height,
    //             otherKu.pos[0],
    //             otherKu.pos[1],
    //             otherKu.width,
    //             otherKu.height
    //         );

    //         otherKu.currentFrame++;
    //         otherKu.check = 0;
    //     }
    // }

    gameLoop() {
        if (!this.gameOver) {
            this.goku.animate(this.ctx);
            this.goku.move(this.goku.dir, this.goku);
            this.computer.animate(this.ctx);
            this.computer.move(this.computer.dir, this.computer);
        } else {
            document.removeEventListener("keydown", this.handlekeydown, false);
            this.audio.pause();
            this.audio.currentTime = 0;
            this.btn = document.createElement("BUTTON");
            const text = document.createTextNode("restart");
            this.restart = document.getElementById("gameover");
            this.btn.appendChild(text);
            this.btn.onclick = this.newGame;
            this.restart.appendChild(this.btn);
            this.restart.style.visibility = "visible";
            this.restart.style.opacity = 1;
        }
    }

    newGame() {
        this.restart.removeChild(this.btn);
        this.restart.style.visibility = "hidden";
        this.restart.style.opacity = 0;
        this.goku = null;
        this.computer = null;
        const game = new Game(this.ctx);
        game.start();
    }

    handlekeydown(e) {
        e.preventDefault();

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

    handlekeyup() {
        this.goku.dir = "idle";
        this.goku.handleDir();
    }

    start() {
        document.removeEventListener("keydown", handler, false);

        document.addEventListener(
            "keydown",
            key => this.handlekeydown(key),
            false
        );
        document.addEventListener("keyup", () => this.handlekeyup());
        let that = this;
        document.addEventListener("keydown", function(key) {
            if (key.code === "KeyM") {
                that.audio.muted = !that.audio.muted;
            }
        });

        this.gameLoop();
        this.audio.play();
    }
    // start();
    // goku.img.onload = () => goku.animate();
}
