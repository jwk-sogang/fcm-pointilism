function setup() {
  let canvas=createCanvas(400, 400);
  canvas.parent('canvas-container');
}

function draw() {
  background(220);
  fill(100,300,400);
  ellipse(random(width),random(height),random(30,50));
}
