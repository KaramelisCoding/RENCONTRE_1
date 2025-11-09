let xoff = 0.0;
let moff = 2.0;

let cnv;

function setup() {
  cnv = createCanvas(windowWidth, 300);
  cnv.parent('container'); // place le canvas dans la div avec id="container"
  colorMode(HSB, 360, 100, 100, 255);
  fill(0, 80, 50, 200);
}

function draw() {
  background(30, 70, 70, 255);

  stroke(60, 100, 100, 170);
  strokeWeight(40);
  xoff += 0.01;
  let n = noise(xoff) * width;
  line(n, 0, n, height);

  stroke(40, 100, 100, 190);
  strokeWeight(25);
  moff += 0.01;
  let m = noise(moff) * width;
  line(m, 0, m, height);
}
