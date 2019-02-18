import Goku from './goku';

document.addEventListener("DOMContentLoaded", ()=>{
  console.log("webpack is running...");
  
  // var canvas = document.getElementById('canvas');

  // var ctx = canvas.getContext('2d'); 
  // var background = new Image();
  // background.src = "../images/arena.png";
  // background.addEventListener("load", loadImage, false);
  // ctx.clearRect(0, 0, canvas.width, canvas.height);

  var goku = new Goku();
  goku.animate();
  // goku.img.onload = () => goku.animate();

});