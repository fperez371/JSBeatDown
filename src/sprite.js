export default class Sprite {
    constructor(width, height, imgUrl, startPos) {
        this.width = width;
        this.height = height;
        this.img = new Image();
        this.img.src = imgUrl;
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.pos = startPos;
        this.check = 0;
        this.dir = "idle";
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
