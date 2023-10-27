let clicked;
let r;
let g;
let b;
let counter;
let hearthScale;

function setup() {
  // These lines are fitting our canvas
  // where we want in the DOM
  // so that we can manipulate its style
  // easier
  let myCanvas = createCanvas(400, 400);
  myCanvas.parent("canvas-parent");
  clicked = false;
  r = 0;
  g = 0;
  b = 0;
  counter = 0;
  hearthScale = 0;
}

function draw() {
  yellowBear();
  drawBackground();
  yellowBear();
  if (clicked) {
    pinkBear();
    counter += 1; //counts how many times the pink bear is drawn
  }
  if (counter >= 200) {
    growingHearth();
  }
  drawGyrados(360, 10, 0.1);
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

function drawBackground() {
  background(220);
  noStroke();
  triangle(0, 0, 400, 300, 0, 600);
  fill(240);
  triangle(280, 0, 110, 450, 10, 0);
  fill(0, 200, 0, 40);
  rect(0, 300, 400, 100); //ground

  //red half circle
  fill(200, 100, 100, 90);
  arc(300, -1, 130, 130, 0, -PI, CHORD);
  arc(300, -1, 100, 100, 0, -PI, CHORD);
  arc(300, -1, 70, 70, 0, -PI, CHORD);
  arc(300, -1, 40, 40, 0, -PI, CHORD);
}

function mouseClicked() {
  if (mouseX < 365 && mouseX > 235 && mouseY < 65) {
    clicked = true;
  }
}

//draws the growing heart
function growingHearth() {
  push();
  scale(hearthScale);
  if (hearthScale <= 0.5) {
    hearthScale += 0.001;
  }

  translate(185, 100);
  fill(255, 0, 0, 30); //red
  noStroke();
  triangle(150, 100, 200, 155, 250, 100);
  arc(175, 100, 50, 70, -PI, 0, CHORD);
  arc(225, 100, 50, 70, -PI, 0, CHORD);
  pop();
}

function drawGyrados(x, y, s) {
  push();
  let l = color(21, 37, 189); //dark blue
  let m = color(0, 175, 255); //light blue
  let n = color(216, 0, 0);
  let o = color(240, 198, 146);
  let p = color(255, 67, 106);
  let q = color(128, 233, 255);
  translate(x, y);
  scale(s);

  //body
  fill(m);
  ellipse(200, 150, 100);
  rect(150, 125, 100, 58);
  beginShape();
  curveVertex(220, 210);
  curveVertex(255, 255);
  curveVertex(270, 265);
  curveVertex(290, 265);
  curveVertex(290, 250);
  curveVertex(285, 252);
  curveVertex(272, 255);
  endShape(CLOSE);
  beginShape();
  curveVertex(180, 210);
  curveVertex(145, 255);
  curveVertex(130, 265);
  curveVertex(110, 265);
  curveVertex(110, 250);
  curveVertex(115, 252);
  curveVertex(128, 255);
  endShape(CLOSE);

  //eyes
  fill(255);
  triangle(200, 160, 160, 150, 150, 125);
  triangle(200, 160, 240, 150, 250, 125);
  fill(n);
  ellipse(185, 149, 20);
  ellipse(215, 149, 20);
  fill(0);
  ellipse(185, 151, 10);
  ellipse(215, 151, 10);
  fill(l);
  triangle(190, 150, 200, 50, 210, 150);
  triangle(100, 100, 195, 160, 195, 140);
  triangle(300, 100, 205, 160, 205, 140);
  ellipse(200, 150, 25);

  //fins
  fill(q);
  triangle(300, 250, 290, 225, 200, 200);
  triangle(300, 205, 290, 225, 200, 200);
  triangle(315, 150, 300, 205, 200, 200);
  triangle(100, 250, 110, 225, 200, 200);
  triangle(100, 205, 110, 225, 200, 200);
  triangle(85, 150, 100, 205, 200, 200);

  //MOUTH
  fill(0);
  ellipse(190, 165, 7, 3);
  ellipse(210, 165, 7, 3);
  fill(o);
  beginShape();
  curveVertex(165, 170);
  curveVertex(200, 175);
  curveVertex(235, 170);
  curveVertex(235, 255);
  curveVertex(200, 255);
  curveVertex(165, 255);
  curveVertex(166, 200);
  endShape(CLOSE);
  fill(0);
  beginShape();
  curveVertex(172, 175);
  curveVertex(200, 182);
  curveVertex(230, 175);
  curveVertex(230, 245);
  curveVertex(200, 245);
  curveVertex(173, 245);
  endShape(CLOSE);
  beginShape();
  fill(p);
  curveVertex(174, 230);
  curveVertex(174, 200);
  curveVertex(226, 200);
  curveVertex(226, 230);
  curveVertex(200, 245);
  endShape(CLOSE);
  fill(255);
  beginShape();
  curveVertex(220, 173);
  curveVertex(230, 170);
  curveVertex(230, 190);
  endShape(CLOSE);
  beginShape();
  curveVertex(185, 176);
  curveVertex(173, 175);
  curveVertex(173, 195);
  endShape(CLOSE);
  beginShape();
  curveVertex(185, 250);
  curveVertex(173, 253);
  curveVertex(173, 235);
  endShape(CLOSE);
  beginShape();
  curveVertex(215, 250);
  curveVertex(228, 253);
  curveVertex(230, 235);
  endShape(CLOSE);
  pop();

  scale(hearthScale);
  if (hearthScale <= 0.5) {
    hearthScale += 0.001;
  }
}
