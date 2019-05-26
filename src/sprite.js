export default class Sprite {
    constructor(props) {
        this.width = props.width;
        this.height = props.height;
        this.img = new Image();
        this.img.src = props.imgUrl;
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.pos = props.startPos;
        this.check = 0;
        this.dir = "idle";
    }
}
