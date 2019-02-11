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
  
});


