var video;
var x=0;

function setup(){
  createCanvas(800,240);
  pixelDensity(1);
  video=createCapture(VIDEO);
  video.size(320,240);
}

function draw(){
  video.loadPixels();
  var w=video.width;
  var h=video.height;

  copy(video, w/2, 0,1, h,x,0,1,h);
  //copies a single vertical slice(1 pixel wide) from the 
  //middle of the video(w/2)to the canvas at position x.
  //this line essentially takes the middle column of pixels from the video
  //and draws it at position x on the canvas.
  x= x+1;
  if(x>width){
    x=0;
  }
}