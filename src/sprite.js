export default class Sprite {
    constructor(props) {
        this.width = props.width;
        this.height = props.height;
        this.img = new Image();
        this.img.src = props.imgUrl;

        this.pos = props.startPos;
        this.check = 0;
        this.dir = "idle";
    }
}
