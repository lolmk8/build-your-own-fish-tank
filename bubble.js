// bubbles that run in bg
class bubble {
  constructor(x, y, s,a) {
    this.x = x;
    this.y = y;
    this.size = s;
    this.col = 255;
    this.alp = a;
  }

  show() {
    noStroke();
    fill(this.col,this.alp);
    circle(this.x, this.y, this.size);
  }

  move(a) {
    this.y -= 0.3;
// reloads / loops bubbles
    if (this.y < -this.size) {
      this.y = windowHeight + this.size;
    }
  }
}