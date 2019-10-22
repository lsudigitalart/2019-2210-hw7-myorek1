var music;
var time;
var loadtime;
var playTime;
var amp;

var volhistory = [];

// spiral
var angle = 2.0;
var offset = 300;
var scalar = 3.5;
var speed = .1;
var col = {
  r: 255,
  g: 255,
  b: 0,
};

// spiral 2
var angle2 =2.0;
var offset2 = 300;
var scalar2 = 3.5;
var speed2 = .04;
var col2 = {
  r: 255,
  g: 255,
  b: 0,
};

// spiral 3
var angle3 =2.0;
var offset3 = 300;
var scalar3 = 3.5;
var speed3 = .1;
var col3 = {
  r: 255,
  g: 255,
  b: 0,
};


function spiral2(){
  col2.r = random(200, 255);
  col2.g = random(220, 255);
  col2.b = random(200, 255);
  var x = offset2 + cos(angle2) * scalar2;
  var y = offset2 + sin(angle2) * scalar2;
  fill(col2.r, col2.g, col2.b);
  noStroke();
  ellipse(x, y, 5, 5);
  angle2 += speed2;
  scalar2 += speed2;
}

function spiral3(){
  col3.r = random(11, 50);
  col3.g = random(30, 150);
  col3.b = random(239, 250);
  var x = offset3 + cos(angle3) * scalar3;
  var y = offset3 + sin(angle3) * scalar3;
  fill(col3.r, col3.g, col3.b);
  noStroke();
  ellipse(x, y, 5, 5);
  angle3 += speed3;
  scalar3 += speed3;
}

function preload(){

music = loadSound("thesnow.mp3");

}

function setup() {

  createCanvas(800,600);
  noStroke();
 background(29,35,40);

  if (music.isLoaded()){
loadtime = millis();
print(loadtime);
music.play();
  }
  // amplitude
  amp = new p5.Amplitude();
  }


  function draw() {
    fill(29,35,40);
    rect(0,450,800,800)
    fill(31,37,42);
    rect(0,500,800,800)
    fill(34,38,47);
    rect(0,600,800,800)
    fill(38,42,50);
    rect(650,800,800)
    //background(29,35,40);

    // draws a line in the background
    var vol = amp.getLevel();
    volhistory.push(vol);
    col.l = random(220,250);
    col.k = random(182, 228);
    col.d = random(200,250);

    beginShape();
for (var i = 0; i < volhistory.length; i++){
  
  stroke (col.l, col.k,col.d);
  noFill();
  var y  = map(volhistory[i], 0, 1,height, 0 )
  point(i,y);
}
endShape();

if (volhistory.length > width){
  volhistory.splice(2,5);
}
   
   
    // spiral 1
    col.r = random(0, 10);
    col.g = random(0, 50);
    col.b = random(0, 50);
    var x = offset + cos(angle) * scalar;
    var y = offset + sin(angle) * scalar;
    fill(col.r, col.g, col.b);
    noStroke();
    ellipse(x, y, 5, 5);
    angle += speed;
    scalar += speed;
  

//playtime
   playTime = millis() - loadtime;

  
   // animation 
   if (playTime >8000 && playTime < 10000 )
   speed = .01;
  

if (playTime >90000 && playTime < 18000)
speed = .0001


   if (playTime > 18000 ){
    speed =.07;
    spiral2();
   }

if (playTime > 23000 && playTime < 27000){
    speed =.07;
    speed2 = .1;
   }

   if (playTime > 27000 && playTime < 30000){
    speed =.05;
    speed2 = .01;
   }
   
   if (playTime > 30000 && playTime < 40000){
    speed =.03;
    speed2 = .03;
   }

    
   if (playTime > 40000 && playTime < 50000){
    speed =.06;
    speed2 = .04;
   }
   if (playTime > 50000 && playTime < 50500){
    speed =.09;
    speed2 = .06;
   }

   if (playTime > 50500 && playTime < 60000){
    speed =.05;
    speed2 = .04;
   }

   if (playTime > 60000 && playTime < 100000){
    speed =.001;
    speed2 = .002;
   }

   if (playTime > 90000 && playTime < 100000){
    spiral3();
    speed3 = .02
   }
  
   if (playTime > 100000 && playTime < 120000){
  
    speed =.003;
    speed2 = .002;
    speed3 = .004;
   }

   if (playTime > 120000 && playTime < 180000){
  
    speed =.004;
    speed2 = .006;
    speed3 = .003;
   }
   // spiral



  }
 