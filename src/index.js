document.addEventListener("DOMContentLoaded", ()=>{
  console.log("webpack is running...");
  
  var canvas = document.createElement('canvas'); 
  canvas.width = 512;
  canvas.height = 512;
  var ctx = canvas.getContext('2d'); 
  // var background = new Image();
  // background.src = "../images/arena.png";
  // background.addEventListener("load", loadImage, false);
  document.getElementById('main-content').appendChild(canvas);
  ctx.clearRect(0, 0, canvas.width, canvas.height);


  img = new Image();
  img.src = '../images/gokusprite.png';
  img.addEventListener("load", loadImage, false);
  
  function loadImage(e) {
    animate();
  }
  
  var shift = 0;
  var frameWidth = 32;
  var frameHeight = 40;
  var totalFrames = 20;
  var currentFrame = 0;
  
  function animate() {
    ctx.clearRect(32, 40, 512, 512);
    ctx.drawImage(img, shift, 0, frameWidth, frameHeight,
                      470, 470, frameWidth, frameHeight);
    shift += frameWidth + 1;
   
    if (currentFrame == totalFrames) {
      shift = 0;
      currentFrame = 0;
    }
   
    currentFrame++;
    requestAnimationFrame(animate);
  }
});