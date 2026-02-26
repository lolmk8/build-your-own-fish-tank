// decor: wood, plants, and rocks - physics using with matter.js
class Decor {
  constructor(x,y,w,h,img){
    this.x =x
    this.y =y
    this.w =w
    this.h =h
    this.img =img
    
  //matter.js logic, creates and adds to "world"/canvas
    this.body = Bodies.rectangle(x,y,w,h)
    Composite.add(engine.world, this.body)

  }
  
  show() {
// push & popped so translate doesn't affect anything else
// translate+CENTER so the rectangle can be drawn correctly
  push(); 
    let x = this.body.position.x;
    let y = this.body.position.y;
    translate(x,y)
    imageMode(CENTER);
    image(this.img, 0, 0, this.w, this.h); 
  pop(); 
    
  }
}