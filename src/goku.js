export default class Goku {
  constructor() {
    this.width = 32;
    this.height = 40;
    this.img = new Image();
    this.img.src = '/Users/fp/Desktop/JSBeatDown/images/goku.png';
    // img.addEventListener("load", loadImage, false);
    this.animate = this.animate.bind(this);
  }
  
  

  
  
  animate() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    var shift = 0;
    var totalFrames = 8;
    var currentFrame = 0;
    ctx.clearRect(32, 40, 512, 512);
    ctx.drawImage(this.img, shift, 0, this.width, this.height,
                      470, 470, this.width, this.height);
    shift += this.width + 1;
   
    if (currentFrame == totalFrames) {
      shift = 0;
      currentFrame = 0;
    }
   
    currentFrame++;
    debugger
    requestAnimationFrame(this.animate);
  }
}
