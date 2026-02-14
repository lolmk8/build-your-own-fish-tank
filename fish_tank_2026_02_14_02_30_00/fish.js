// runs all fishes
class fish {
  constructor(img0,img1, x, y, w, h){ 
    this.x = x; 
    this.y = y; 
    this.w = w;
    this.h = h;
    this.s = random(0.2,0.8);
    this.s0 = random(0.2,0.8);
    this.img = this.img;
    this.img0 = img0;
    this.img1 = img1;
    
  // bubble that come out of mouth variables
  // added based on feedback for more interactivity
    this.cx = this.x-this.w/2
    this.cy = this.y
    this.cy1 = this.y
    this.cy0 = this.y
    this.size = random(10, 20);
    this.size0 = random(10, 20);
    this.size1 = random(10, 20);
  }
  
  move(){
    // fish swimming movement randomly+smoothly
let angle = noise(this.x * 0.01, this.y * 0.01, frameCount * 0.01) * TWO_PI;
    this.x += cos(angle) * 2 * this.s;
    this.y += sin(angle) * 2 * this.s0;
      
  // change direction
    if(this.x > windowWidth-this.w/2|| this.x < 0){
      this.s = this.s * -1;
    }

    if(this.y > windowHeight|| this.y < 0){
      this.s0 = this.s0 * -1;
    }
    
  // bubbles coming out of fish mouth
    this.cy -= random(0.5,2);
    this.cy0 -= random(0.5,1);
    this.cy1 -= random(1,2);
  // regenerate bubble
    if(this.cy < 0){
      this.cy = this.y
    }
    if(this.cy0 < 0){
      this.cy0 = this.y
    }
    if(this.cy1 < 0){
      this.cy1 = this.y
    }
  }
  
  show(){
  // flip image based on the direction the fish swims in
    if(this.s > 0){
      this.img = this.img1
      this.cx = this.x-this.w/2
    } else {
      this.img = this.img0
      this.cx = this.x+this.w/2
    }
    
  // fish asset show
 image(this.img, this.x, this.y, this.w, this.h);
    
  // bubbles from mouth
    noStroke();
    fill(255,150);
    circle(this.cx+5, this.cy, this.size0);
    circle(this.cx-5, this.cy0, this.size1);
    circle(this.cx, this.cy1, this.size);
  }
  

  
}