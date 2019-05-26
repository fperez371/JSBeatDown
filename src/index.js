import Goku from "./goku";

document.addEventListener("DOMContentLoaded", () => {
    var canvas = document.getElementById("canvas");

    var ctx = canvas.getContext("2d");
    ctx.font = "30px Arial";
    ctx.fillText("Press space to start", 125, 200);
    document.addEventListener("keydown", function(key) {
        if (key.keyCode === 32) {
            ctx.clearRect(0, 0, 512, 512);
            start();
        }
    });

    var audio = document.getElementById("audio");
    audio.volume = 0.4;
    audio.addEventListener(
        "ended",
        function() {
            this.currentTime = 0;
            this.play();
        },
        false
    );

    document.addEventListener("keydown", function(key) {
        if (key.code === "KeyM") {
            audio.muted = !audio.muted;
        }
    });
    // var background = new Image();
    // background.src = "../images/arena.png";
    // background.addEventListener("load", loadImage, false);
    // ctx.clearRect(0, 0, canvas.width, canvas.height);

    var goku = new Goku({
        width: 33,
        height: 40,
        imgUrl: "images/goku.png",
        startPos: [200, 450],
        player: true,
    });
    var otherKu = new Goku({
        width: 33,
        height: 40,
        imgUrl: "images/goku_left.png",
        startPos: [300, 450],
        player: false,
    });

    let computer = otherKu;

    function endFight() {
        otherKu.deadSound.play();
        goku.winSound.play();
        audio.src = "sounds/bleach.mp3";
        audio.play();
    }

    function hitCollision(char) {
        if (char.dir === "kicking") {
            if (
                char.pos[0] + 40 >= otherKu.pos[0] &&
                char.pos[0] + 40 <= otherKu.pos[0] + 33
            ) {
                otherKu.dir = "dmg";
                otherKu.dmgSound.play();
                otherKu.health -= 50;
                if (otherKu.health <= 0) {
                    otherKu.dir = "dead";
                    endFight();
                }
                otherKu.handleDir();
            }
        } else if (char.dir === "punching") {
            if (
                char.pos[0] + 33 >= otherKu.pos[0] &&
                char.pos[0] + 33 <= otherKu.pos[0] + 33
            ) {
                otherKu.dir = "dmg";
                otherKu.dmgSound.play();
                otherKu.health -= 50;
                if (otherKu.health <= 0) {
                    otherKu.dir = "dead";
                    endFight();
                }
                otherKu.handleDir();
            }
        }
    }

    function inBounds(char) {
        if (char.pos[0] > 480 && char.dir === "right") {
            return false;
        } else if (char.pos[0] < 0 && char.dir === "left") {
            return false;
        } else if (char.pos[0] > otherKu.pos[0] - 33 && char.dir === "right") {
            return false;
        } else if (char.pos[0] > otherKu.pos[0] + 33 && char.dir === "left") {
            return false;
        } else if (
            otherKu.pos[0] < goku.pos[0] + 33 &&
            otherKu.dir === "left"
        ) {
            return false;
        }
        return true;
    }

    function move(dir, char) {
        switch (dir) {
            case "right":
                if (inBounds(char)) {
                    char.pos[0] += 1;
                }
                break;
            case "left":
                if (inBounds(char)) {
                    char.pos[0] -= 1;
                }
                break;
            case "dmg":
                if (char.pos[0] < 458.5) {
                    char.pos[0] += 0.3;
                }
                break;
            default:
                return;
        }
    }

    function animate() {
        let otherKuKickIdx = 0;
        let kickIdx = 0;
        let dmgHeightIdx = 0;
        let dmgWidthIdx = 0;
        let otherDmgHeightIdx = 0;
        let otherDmgWidthIdx = 0;
        if (goku.check < 7) {
            ctx.clearRect(goku.pos[0], goku.pos[1], 512, 512);
            ctx.drawImage(
                goku.img,
                goku.shift[0],
                goku.shift[1],
                goku.width,
                goku.height,
                goku.pos[0],
                goku.pos[1],
                goku.width,
                goku.height
            );

            if (goku.currentFrame === goku.totalFrames) {
                if (goku.dir === "dmg") {
                    goku.dir = "idle";
                    goku.shift = goku.GOKUDIRS.idle;
                    goku.handleDir();
                } else {
                    goku.shift = goku.GOKUDIRS[goku.dir].slice();
                    goku.currentFrame = 1;
                }
            }
        } else {
            ctx.clearRect(goku.pos[0], goku.pos[1], 512, 512);
            if (goku.dir === "dead") {
                goku.shift = [204, 1266];
            } else if (goku.dir === "left") {
                goku.shift[0] -= goku.width;
            } else if (goku.dir === "right") {
                goku.shift[0] += goku.width;
            } else if (goku.dir === "punching") {
                goku.shift[0] += goku.width;
                hitCollision(goku);
            } else if (goku.dir === "kicking") {
                goku.shift[0] += goku.kickWidths[kickIdx];
                hitCollision(goku);
                kickIdx++;
            } else if (goku.dir === "dmg") {
                goku.shift[0] += goku.dmgWidths[dmgWidthIdx];
                goku.height = goku.dmgHeights[dmgHeightIdx];
                dmgWidthIdx++;
                dmgHeightIdx++;
            } else {
                goku.shift[0] += goku.width;
            }
            ctx.drawImage(
                goku.img,
                goku.shift[0],
                goku.shift[1],
                goku.width,
                goku.height,
                goku.pos[0],
                goku.pos[1],
                goku.width,
                goku.height
            );

            goku.currentFrame++;
            goku.check = 0;
        }
        move(goku.dir, goku);
        goku.check++;
        if (goku.pos[0] < otherKu.pos[0] + 33 && otherKu.health > 0) {
            otherKu.dir = "left";
            otherKu.handleDir();
        } else if (otherKu.health > 0) {
            debugger;
            otherKu.dir = "punching";
            otherKu.handleDir();
        } else {
            otherKu.dir = "dead";
            otherKu.handleDir();
        }
        move(otherKu.dir, otherKu);
        otherKu.check++;
        requestAnimationFrame(animate);

        if (otherKu.check < 7) {
            ctx.clearRect(otherKu.pos[0], otherKu.pos[1], 512, 512);
            ctx.drawImage(
                otherKu.img,
                otherKu.shift[0],
                otherKu.shift[1],
                otherKu.width,
                otherKu.height,
                otherKu.pos[0],
                otherKu.pos[1],
                otherKu.width,
                otherKu.height
            );

            if (otherKu.currentFrame === otherKu.totalFrames) {
                if (otherKu.dir === "dmg") {
                    otherKu.dir = "idleLeft";
                    otherKu.handleDir();
                } else {
                    otherKu.shift = otherKu.GOKUDIRS[otherKu.dir].slice();
                    otherKu.currentFrame = 1;
                }
            }
        } else {
            ctx.clearRect(otherKu.pos[0], otherKu.pos[1], 512, 512);
            if (otherKu.dir === "dead") {
                otherKu.shift = [204, 1266];
            } else if (otherKu.dir === "left") {
                otherKu.shift[0] -= otherKu.width;
            } else if (otherKu.dir === "idleLeft") {
                otherKu.shift[0] -= otherKu.width;
            } else if (otherKu.dir === "right") {
                otherKu.shift[0] += otherKu.width;
            } else if (otherKu.dir === "punching") {
                otherKu.shift[0] += otherKu.width;
            } else if (otherKu.dir === "kicking") {
                otherKu.shift[0] += otherKu.kickWidths[otherKuKickIdx];
                otherKuKickIdx++;
            } else if (otherKu.dir === "dmg") {
                otherKu.shift[0] += otherKu.dmgWidths[otherDmgWidthIdx];
                otherKu.height = otherKu.dmgHeights[otherDmgHeightIdx];
                otherDmgWidthIdx++;
                otherDmgHeightIdx++;
            } else {
                otherKu.shift[0] += otherKu.width;
            }
            ctx.drawImage(
                otherKu.img,
                otherKu.shift[0],
                otherKu.shift[1],
                otherKu.width,
                otherKu.height,
                otherKu.pos[0],
                otherKu.pos[1],
                otherKu.width,
                otherKu.height
            );

            otherKu.currentFrame++;
            otherKu.check = 0;
        }
    }

    function handlekeydown(e) {
        e.preventDefault();

        if (e.code === "KeyA") {
            goku.dir = "left";
            goku.ctx.clearRect(goku.pos[0], goku.pos[1], 512, 512);
            goku.handleDir();
        }
        if (e.code === "KeyD") {
            goku.dir = "right";
            goku.ctx.clearRect(goku.pos[0], goku.pos[1], 512, 512);
            goku.handleDir();
        }
        if (e.code === "KeyJ") {
            goku.dir = "punching";
            goku.ctx.clearRect(goku.pos[0], goku.pos[1], 512, 512);
            goku.punchSound.play();
            goku.handleDir();
        }
        if (e.code === "KeyK") {
            goku.dir = "kicking";
            goku.ctx.clearRect(goku.pos[0], goku.pos[1], 512, 512);
            goku.kickSound.play();
            goku.handleDir();
        }
    }

    function handlekeyup() {
        goku.dir = "idle";
        goku.handleDir();
    }

    function start() {
        document.addEventListener("keydown", key => handlekeydown(key));
        document.addEventListener("keyup", () => handlekeyup());
        animate();
        audio.play();
    }
    // start();
    // goku.img.onload = () => goku.animate();
});
