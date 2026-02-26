// preloads for all assets
// fish assets
let guppies = [];
let goldfs = [];
let nfishes = [];

// fishes flipped
let guppiess = [];
let goldfss = [];
let nfishess = [];

// decor assets
let woods = [];
let plants = [];
let rocks = [];

// sound effects
let bgmusic;

function preload(){
  
  startpage = loadImage('startpage.png');
  
 // buttons
  guppy = loadImage('button/guppy.png');
  goldf = loadImage('button/goldf.png');
  nfish = loadImage('button/fish.png');
  sand1 = loadImage('button/sand.png');
  wood = loadImage('button/wood0.png');
  plant = loadImage('button/plant0.png');
  rock = loadImage('button/rock0.png');
  hand = loadImage('button/hand.png');
  photo = loadImage('button/photo.png');
  reset = loadImage('button/reset.png');
// button when clicked  
  guppy1 = loadImage('button/guppy1.png');
  goldf1 = loadImage('button/goldf1.png');
  nfish1 = loadImage('button/fish0.png');
  sand2 = loadImage('button/sand2.png');
  wood1 = loadImage('button/wood.png');
  plant1 = loadImage('button/plant.png');
  rock1 = loadImage('button/rock.png');
  hand1 = loadImage('button/hand0.png');

// fishes
  guppies[0] = loadImage('flipped/guppy0.png');
  guppies[1] = loadImage('flipped/guppy1.png');
  guppies[2] = loadImage('flipped/guppy2.png');
  
  goldfs[0] = loadImage('fishes/gold0.png');
  goldfs[1] = loadImage('fishes/gold1.png');
  goldfs[2] = loadImage('fishes/gold2.png');
  
  nfishes[0] = loadImage('fishes/fish0.png');
  nfishes[1] = loadImage('fishes/fish1.png');
  nfishes[2] = loadImage('fishes/fish2.png');
  
// fishes flipped
  guppiess[0] = loadImage('fishes/guppy0.png');
  guppiess[1] = loadImage('fishes/guppy1.png');
  guppiess[2] = loadImage('fishes/guppy2.png');
  
  goldfss[0] = loadImage('flipped/gold0.png');
  goldfss[1] = loadImage('flipped/gold1.png');
  goldfss[2] = loadImage('flipped/gold2.png');
  
  nfishess[0] = loadImage('flipped/fish0.png');
  nfishess[1] = loadImage('flipped/fish1.png');
  nfishess[2] = loadImage('flipped/fish2.png');

// decor
  woods[0] = loadImage('decor/wood1.png');
  woods[1] = loadImage('decor/wood2.png');
  woods[2] = loadImage('decor/wood3.png');
  
  plants[0] = loadImage('decor/plant1.png');
  plants[1] = loadImage('decor/plant2.png');
  plants[2] = loadImage('decor/plant3.png');
  
  rocks[0] = loadImage('decor/rock1.png');
  rocks[1] = loadImage('decor/rock2.png');
  rocks[2] = loadImage('decor/rock3.png');
}