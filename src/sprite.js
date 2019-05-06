export default class Sprite {
    constructor(width, height, imgUrl, startPos) {
        this.width = width;
        this.height = height;
        this.img = new Image();
        this.img.src = imgUrl;
        this.animate = this.animate.bind(this);
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.shift = [0, -1];
        this.totalFrames = 8;
        this.currentFrame = 1;
        this.pos = startPos;
        this.check = 0;
        this.dir = "idle";
        this.handlekeydown = this.handlekeydown.bind(this);
        this.getPos = this.getPos.bind(this);
    }

    getPos() {
        return this.pos;
    }

    inBounds() {
        if (this.pos[0] > 480 && this.dir === "right") {
            return false;
        } else if (this.pos[0] < 0 && this.dir === "left") {
            return false;
        }
        return true;
    }
}
