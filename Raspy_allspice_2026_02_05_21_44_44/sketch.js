
let balloons = [];

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 22; i++) {
    balloons.push(new Balloon());
  }
  print(balloons[17])
}

function draw() {
  background(220);
  for (let b of balloons) {
    b.draw();
  }
}


function Balloon() {
  this.x = random(0, width);
  this.y = 0;
  colorMode(HSB);
  this.hue = random(0, 255);
  this.speed = random(0.5,4);
  this.draw = function () {
    fill(this.hue, 255, 255);
    circle(this.x, this.y, 50);
    this.y = this.y + this.speed;
    this.speed = this.speed + 0.5;
    if (this.y > height) {
      this.hue = (this.hue + 5) % 255;
      this.speed = this.speed * -0.9;
    }
  };
}
