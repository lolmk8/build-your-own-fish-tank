
class Sand {
  constructor(x,y,r,c){
    this.x =x
    this.y =y
    this.r =r
    this.c =c
    
//matter.js logic, creates and adds to "world"/canvas
    this.body = Bodies.circle(x,y,r, {friction:0.8})
    Composite.add(engine.world, this.body)
  }
  
  show() {
    let x = this.body.position.x;
    let y = this.body.position.y;
  strokeWeight(this.r);
  stroke(this.c);
  circle(x,y,this.r)  
    
  }
}

// keeps the decor & sand in the tank
// basically three rectangles that go around the perimeter of the canvas
// has {isStatic} which allows it not to have gravity
class Ground {
  constructor(x,y,w,h){
    this.x =x
    this.y =y
    this.w =w
    this.h =h
  
//matter.js logic, creates and adds to "world"/canvas
  this.ground = Bodies.rectangle(x, y, w, h, { isStatic: true });
   Composite.add(engine.world, this.ground)
  }
  
  show() {
// push & popped so translate doesn't affect anything else
// translate+CENTER so the rectangle can be drawn correctly
  push();
    rectMode(CENTER)
    noStroke();
    let x = this.ground.position.x;
    let y = this.ground.position.y;
    translate(x,y)
    rect(0,0,this.w,this.h)
  pop();
  }
}