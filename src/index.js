import Goku from "./goku";

document.addEventListener("DOMContentLoaded", () => {
    console.log("webpack is running...");

    // var canvas = document.getElementById('canvas');

    // var ctx = canvas.getContext('2d');
    // var background = new Image();
    // background.src = "../images/arena.png";
    // background.addEventListener("load", loadImage, false);
    // ctx.clearRect(0, 0, canvas.width, canvas.height);

    var goku = new Goku({
        width: 33,
        height: 40,
        imgUrl: "images/goku.jpg",
        startPos: [200, 450],
        player: true,
    });
    var otherKu = new Goku({
        width: 33,
        height: 40,
        imgUrl: "images/goku.jpg",
        startPos: [300, 450],
        player: false,
    });
    goku.start();
    otherKu.start();
    goku.getPos();
    // goku.img.onload = () => goku.animate();
});
