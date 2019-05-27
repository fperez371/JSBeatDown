import Goku from "./goku";
import Ichigo from "./ichigo";

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
    ctx.fillText("Press space to start", 150, 200);
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

        this.ichigo = new Ichigo({
            imgUrl: "images/ichigo_left.png",
            startPos: [300, 450],
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
            this.goku.health = 100;
            setTimeout(() => (this.otherKu.pos = [700, 700]), 1000);
            this.audio.src = "sounds/bleach.mp3";
            this.audio.play();
            this.ctx.clearRect(0, 0, 512, 512);
            this.ctx.fillText("ROUND 2: Face the first rival!", 75, 200);
            this.goku.dir = "idle";
            this.goku.handleDir();
            this.goku.dontMove = true;
            this.computer = this.ichigo;
            setTimeout(() => this.ctx.clearRect(0, 0, 512, 512), 2000);
            this.gameLoop();
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
                this.computer.health -= 10;
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
                this.computer.health -= 10;
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
                this.goku.health -= 10;
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
        this.goku.pos = [1000, 1000];
        this.computer.pos = [1220, 1220];
        this.computer.dontMove = true;
        const game = new Game(this.ctx);
        game.start();
    }

    handlekeydown(e) {
        e.preventDefault();
        if (this.goku.dontMove) {
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

    handlekeyup() {
        if (!this.goku.dontMove) {
            this.goku.dir = "idle";
            this.goku.handleDir();
        }
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
}
