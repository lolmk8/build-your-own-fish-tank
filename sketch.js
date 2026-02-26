// matter.js set up for physics of decor+sand
const {Engine, Composite, Body, Bodies, Mouse, MouseConstraint} = Matter;

// all variables
let engine, composite;
let sand = [];
let decor = [];
let decor0 = [];
let ground;
let wall, wall0;
let mconstraint;
let bubbles = [];
let fishes = [];
let bgc;

// buttons - true or false function
let guppy11,goldf11,fish11,sand11,plant11,wood11,rock11, hand11, photo1,reset1;

// background colors + now changable based on feedback
  let c = [
  '#00bcd5',
  '#043E7A',
  '#FFC107'];

function setup() {
let canvas = createCanvas(windowWidth, windowHeight);
  
// runs matter.js
  engine = Engine.create();
  Engine.run(engine);
// adds mouse controls decor&sand allowing drag&drop
  let mouse0 = Mouse.create(canvas.elt);
  mouse0.pixelRatio = pixelDensity();
mconstraint = MouseConstraint.create(engine, {mouse: mouse0});
  Composite.add(engine.world, mconstraint)

// adds walls that keep decor in tank
  ground = new Ground(windowWidth/2, windowHeight, windowWidth, 1);
  wall = new Ground(windowWidth, windowHeight, 1, 100);
  wall0 = new Ground(0, windowHeight, 1, 100);
  
// default background color
bgc = '#00bcd5'
  
// bubbles for bg
  for (let i = 0; i < max; i++) {
    let b = new bubble(
      random(windowWidth),
      random(windowHeight),
      random(5, 10),
      random(100)
    );
    bubbles.push(b);
  }
}

function draw() {
imageMode(CENTER)
  background(bgc);
  image(startpage,windowWidth/2,windowHeight/2,500,300);

// rocks placed here for fish to swim infront
  // decor added based on feedback for more variables/things in the background
for (let i=0; i < decor0.length; i++) {
    decor0[i].show();
}
  
// fishes
    for(let i = 0; i<fishes.length; i++){
    fishes[i].show();
    fishes[i].move();
  }
  
// decor + walls for decor
// placed here for fish to swim behind
   ground.show();
   wall.show();
   wall0.show();
for (let i=0; i < sand.length; i++) {
    sand[i].show();
}
for (let i=0; i < decor.length; i++) {
    decor[i].show();
}
  
// limits fish amount according to window size
  if(fishes.length >= 10 && windowWidth <= 400){
    fishes.splice(random(fishes.length),1);
  } 
  if(fishes.length >= 25 && 800 >= windowWidth > 400){
    fishes.splice(random(fishes.length),1);
  } 
  if(fishes.length >= 100 && windowWidth > 800){
    fishes.splice(random(fishes.length),1);
  } 

// resets everything
  if(reset1 == true){
  fishes.splice(0,fishes.length);
  sand.splice(0,sand.length);
  decor.splice(0,decor.length)
  decor0.splice(0,decor0.length)
  Composite.clear(engine.world, keepStatic = true)
  }
  
// bubbles in bg
  for (let b of bubbles) {
    b.show();
    b.move(random(0.001,0.1));
  }
  
// buttons
   image(guppy,50,50,60,60)
   image(goldf,120,50,60,60)
   image(nfish,190,50,60,60)
   image(sand1,260,50,60,60)
   image(wood,330,50,60,60)
   image(plant,400,50,60,60)
   image(rock,470,50,60,60)
   image(hand,540,50,60,60)
   image(photo,610,50,60,60)
   image(reset,680,50,60,60)
  
// button color change when pressed
    if (guppy11 == true) {
   image(guppy1,50,50,60,60)
    }
    if (goldf11 == true) {
   image(goldf1,120,50,60,60)
    }
    if (fish11 == true) {
   image(nfish1,190,50,60,60)
    }
   if (sand11 == true) {
   image(sand2,260,50,60,60)
   }
    if (wood11 == true) {
   image(wood1,330,50,60,60)
    }
    if (plant11 == true) {
   image(plant1,399,50,60,60)
    }
   if (rock11 == true) {
   image(rock1,471,50,60,60)
   }
   if (hand11 == true) {
   image(hand1,540,50,60,60)
   }
}

function mousePressed(){
//clears startpage
startpage= loadImage('empty.png')
  
// makes sure flipped image matches for goldfish + nfish
 let chooser = random(3)
 
// guppy button trigger
  let d = dist(mouseX,mouseY,50,50)
  if ( d < 30) {
  guppy11 = true
  goldf11 = false
  fish11 = false
  sand11 = false
  wood11 = false
  plant11 = false
  rock11 = false
  hand11 = false
  reset1 = false
    } 

// run goldf
    if (goldf11 == true) {
  let  gdff = goldfs[int(chooser)]
  let  gdfff = goldfss[int(chooser)]
  let gf = new fish(gdff,gdfff,mouseX, mouseY, 180, 150);
  fishes.push(gf); 
  }
// goldf button trigger
  let d1 = dist(mouseX,mouseY,120,50)
  if ( d1 < 30) {
  guppy11 = false
  goldf11 = true
  fish11 = false
  sand11 = false
  wood11 = false
  plant11 = false
  rock11 = false
  hand11 = false
  reset1 = false
    } 
  
// runs nfish
  if (fish11 == true) {
  let  ff = nfishes[int(chooser)]
  let  fff = nfishess[int(chooser)]
  let nfish = new fish(ff,fff,mouseX, mouseY, 120, 100);
  fishes.push(nfish); 
  }
// nfish button trigger
  let d2 = dist(mouseX,mouseY,190,50)
  if ( d2 < 30) {
  guppy11 = false
  goldf11 = false
  fish11 = true
  sand11 = false
  wood11 = false
  plant11 = false
  rock11 = false
  hand11 = false
  reset1 = false
    } 
  
// sand button trigger
  let d3 = dist(mouseX,mouseY,260,50)
  if ( d3 < 30) {
  guppy11 = false
  goldf11 = false
  fish11 = false
  sand11 = true
  wood11 = false
  plant11 = false
  rock11 = false
  hand11 = false
  reset1 = false
    } 

// runs wood  
  if (wood11 == true) {
  print('wood')
  let w = random(woods)
  decor.push(new Decor(mouseX,mouseY,300,150,w))
 }
// wood button trigger 
  let d4 = dist(mouseX,mouseY,330,50)
  if ( d4 < 30) {
  guppy11 = false
  goldf11 = false
  fish11 = false
  sand11 = false
  wood11 = true
  plant11 = false
  rock11 = false
  hand11 = false
  reset1 = false
    } 
 
// runs plant  
  if (plant11 == true) {
  let p = random(plants)
  decor.push(new Decor(mouseX,mouseY,100,250,p))
 }
// plant button trigger
  let d5 = dist(mouseX,mouseY,400,50)
  if ( d5 < 30) {
  print('plant')
  guppy11 = false
  goldf11 = false
  fish11 = false
  sand11 = false
  wood11 = false
  plant11 = true
  rock11 = false
  hand11 = false
  reset1 = false
    } 
  
// runs rock
  if (rock11 == true) {
  let r = random(rocks)
  decor0.push(new Decor(mouseX,mouseY,180,90,r))
 }
// rock button trigger
  let d6 = dist(mouseX,mouseY,470,50)
  if ( d6 < 30) {
  print('rock')
  guppy11 = false
  goldf11 = false
  fish11 = false
  sand11 = false
  wood11 = false
  plant11 = false
  rock11 = true
  hand11 = false
  reset1 = false
    } 

// hand button trigger
  let d7 = dist(mouseX,mouseY,540,50)
  if ( d7 < 30) {
  print('hand')
  guppy11 = false
  goldf11 = false
  fish11 = false
  sand11 = false
  wood11 = false
  plant11 = false
  rock11 = false
  hand11 = true
  reset1 = false
    } 
  
// photo button trigger
  let d8 = dist(mouseX,mouseY,610,50)
  if ( d8 < 30) {
  print('photo')
  guppy11 = false
  goldf11 = false
  fish11 = false
  sand11 = false
  wood11 = false
  plant11 = false
  rock11 = false
  hand11 = false
  reset1 = false
// saves "photo" to downloads
 saveCanvas('myfishtank.jpg');
    } 

// reset button trigger
  let d9 = dist(mouseX,mouseY,680,50)
  if ( d9 < 30) {
  print('reset')
  guppy11 = false
  goldf11 = false
  fish11 = false
  sand11 = false
  wood11 = false
  plant11 = false
  rock11 = false
  hand11 = false
  reset1 = true
    } 

}
 
function mouseDragged(){
// makes sure flipped image matches for guppy
 let chooser = random(3)
// runs guppy
  if (guppy11 == true) {
  let  gupp = guppies[int(chooser)]
  let  guppp = guppiess[int(chooser)]
let g = new fish(gupp,guppp,mouseX, mouseY,50,20) 
  fishes.push(g); 
  }

//runs sand, more colors added based on feedback
    let pebbles = [
  '#cb2823',
  '#2a83ab',
  '#ec693e',
  '#ebd647',
  '#8fc1c7'];
  if (sand11 == true) {
    print('sand')
 sand.push(new Sand(mouseX,mouseY,5,random(pebbles)))
  }
}

// changes bg if hand is selected & user doubleclicks
function doubleClicked() {
   if (hand11 == true) {
bgc = random(c)
   }
}
