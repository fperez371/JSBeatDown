// export default class Goku {
//   constructor() {
//     this.width = 33;
//     this.height = 40;
//     this.img = new Image();
//     this.img.src = '/Users/fp/Desktop/JSBeatDown/images/goku.png';
//     // img.addEventListener("load", loadImage, false);
//     this.animate = this.animate.bind(this);
//     this.canvas = document.getElementById('canvas');
//     this.ctx = this.canvas.getContext('2d');
//     this.shift = 0;
//     this.totalFrames = 8;
//     this.currentFrame = 1;
//     this.pos = [470, 430];
//   }
  

  


  
//   animate() {
//     this.ctx.clearRect(32, 40, 512, 512);
//     this.ctx.drawImage(this.img, this.shift, 0, this.width, this.height,
//                       this.pos[0], this.pos[1], this.width, this.height);
//     this.shift += this.width;
//     debugger
//     if (this.currentFrame == this.totalFrames) {
//       this.shift = 0;
//       this.currentFrame = 0;
//     }
   
//     this.currentFrame++;
//     requestAnimationFrame(this.animate);
//   }
// }
export default class Goku {
  constructor() {
    this.width = 33;
    this.height = 40;
    this.img = new Image();
    this.img.src = '/Users/fp/Desktop/JSBeatDown/images/goku.png';
    // img.addEventListener("load", loadImage, false);
    this.animate = this.animate.bind(this);
    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.shift = 0;
    this.totalFrames = 8;
    this.currentFrame = 1;
    this.pos = [470, 430];
    this.check = 0;
    this.dir = 'right';
  }
  

  
  handlekeydown(e){
    e.preventdefault();
    switch (e.key) {
      case (e.key === 'w'):
        this.dir = 'up';
      case (e.key === 'a'):
        this.dir = 'left';
      case (e.key === 's'):
        this.dir = 'down';
      case (e.key === 'd'):
        this.dir = 'right';
      default:
        break;
    }
  }

  
  animate() {
    if (this.check < 4) {
      this.ctx.clearRect(32, 40, 512, 512);
      this.ctx.drawImage(this.img, this.shift, 0, this.width, this.height,
        this.pos[0], this.pos[1], this.width, this.height);
      
        debugger
      if (this.currentFrame == this.totalFrames) {
        this.shift = 0;
        this.currentFrame = 1;
      }
     
    } else {
      this.ctx.clearRect(32, 40, 512, 512);
      this.ctx.drawImage(this.img, this.shift, 0, this.width, this.height,
        this.pos[0], this.pos[1], this.width, this.height);
      this.shift += this.width;
      
      

      this.currentFrame++;
      this.check = 0;
    }
    this.check++;
    requestAnimationFrame(this.animate);
  }
}
