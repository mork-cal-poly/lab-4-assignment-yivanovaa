let clicked;
let r;
let g;
let b;

function setup() {
  // These lines are fitting our canvas
  // where we want in the DOM
  // so that we can manipulate its style
  // easier
  let myCanvas = createCanvas(400, 400);
  myCanvas.parent("canvas-parent");
  clicked = false;
}

function draw() {
  yellowBear();
}

function yellowBear() {
  push();
  scale(0.7);
  translate(390, 300);
  fill("#F9A603");
  noStroke();
  ellipse(60, -60, 30); //right ear
  ellipse(-60, -60, 30); //left ear
  stroke("#5B3D20");
  line(55, -55, 63, -65); //ear lines
  line(-55, -55, -63, -65); //ear lines
  noStroke();
  fill("#C49102");
  push();
  rotate(-PI / 9);
  ellipse(-79, 60, 30, 50); //hands
  pop();
  push();
  rotate(PI / 9);
  ellipse(79, 60, 30, 50);
  pop();
  fill("#FEC20C");
  rect(-45, 50, 90, 100, 35); //rounded body
  fill("#FFD300");
  ellipse(0, 0, 180, 150); //head
  fill(0);
  ellipse(38, 7, 20, 35); //right eye
  fill(255);
  ellipse(34, 7, 10, 20); //big white eye part
  ellipse(44, 7, 5, 8); //small eye part
  ellipse(44, 13, 3, 3);
  fill(0);
  ellipse(-38, 8, 20, 35); //left eye
  fill(255);
  ellipse(-41.5, 7, 10, 20); //big white eye part
  ellipse(-32, 7, 5, 8); //small eye part
  ellipse(-32, 13, 3, 3);
  fill("#C49102");
  ellipse(0, 30, 30, 20);

  fill("#5B3D20"); //nose
  ellipse(0, 27, 11, 7);

  //legs
  fill("#C49102");
  push();
  rotate(-PI / 9);
  ellipse(-79, 117, 35, 60); //left leg
  pop();
  push();
  rotate(PI / 9);
  ellipse(79, 117, 35, 60); //right leg
  pop();

  //cheecks
  fill(r, g, b, 80); //pinkish after mouse click
  ellipse(-35, 40, 20, 10);
  ellipse(35, 40, 20, 10);
  pop();
}

function pinkBear() {
  r = 255;
  g = 50;
  b = 50;

  //background edits - big heart
  push();
  scale(2.7);
  translate(-130, -40);
  fill(255, 203, 203, 7.5); //red
  noStroke();
  triangle(150, 100, 200, 155, 250, 100);
  arc(175, 100, 50, 70, -PI, 0, CHORD);
  arc(225, 100, 50, 70, -PI, 0, CHORD);
  pop();

  //small heart
  push();
  scale(0.5);
  translate(185, 100);
  fill(255, 0, 0); //red
  noStroke();
  triangle(150, 100, 200, 155, 250, 100);
  arc(175, 100, 50, 70, -PI, 0, CHORD);
  arc(225, 100, 50, 70, -PI, 0, CHORD);
  pop();

  //pink bear
  push();
  scale(0.6);
  translate(200, 365);
  fill("#FC94AF");
  noStroke();
  ellipse(60, -60, 30); //right ear
  ellipse(-60, -60, 30); //left ear
  stroke("#9E4244");
  line(55, -55, 63, -65); //ear lines
  line(-55, -55, -63, -65); //ear lines

  //hands
  noStroke();
  fill("#F2B8C6");
  push();
  rotate(-PI / 9);
  ellipse(-79, 60, 30, 50);
  pop();
  push();
  rotate(PI / 9);
  ellipse(79, 60, 30, 50);
  pop();
  fill("#FDA4BA");
  rect(-45, 50, 90, 100, 35); //rounded body
  fill("#FCBACB");
  ellipse(0, 0, 180, 150); //head
  fill(0);
  ellipse(38, 7, 20, 35); //right eye
  fill(255);
  ellipse(41, 7, 10, 20); //big white eye part
  ellipse(32, 7, 5, 8); //small eye part
  ellipse(33, 13, 3, 3);
  fill(0);
  ellipse(-38, 8, 20, 35); //left eye
  fill(255);
  ellipse(-34.5, 7, 10, 20); //big white eye part
  ellipse(-43.5, 7, 5, 8); //small eye part
  ellipse(-42.5, 13, 3, 3);
  fill("#FC7F9C");
  ellipse(0, 30, 30, 20);
  fill("#9E4244");
  ellipse(0, 27, 11, 7);

  //legs
  fill("#F2B8C6");
  push();
  rotate(-PI / 9);
  ellipse(-79, 117, 35, 60); //left leg
  pop();
  push();
  rotate(PI / 9);
  ellipse(79, 117, 35, 60); //right leg
  pop();
  pop();
}
