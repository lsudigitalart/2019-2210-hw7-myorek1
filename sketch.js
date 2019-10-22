var music;
var time;
var loadtime;
var playTime;
var amp;

var colb = 29;
var c = 35;
var d = 40;

function back(){
  background(colb,c,d);
}
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


// spiral 4
var angle4 =2.0;
var offset4 = 300;
var scalar4 = 3.5;
var speed4 = .1;
var col4 = {
  r: 255,
  g: 255,
  b: 0,
};

// rectangle 

var colr ={    
  r1: 31,
  g1: 36,
  b1: 42,
}


function rez() {
  var rectcol = fill(colr.r1, colr.g1, colr.b1)
  rectcol;
  rect(0,500,800,800);
}


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

function spiral4(){
  col3.r = random(247, 250);
  col3.g = random(139, 150);
  col3.b = random(248, 250);
  var x = offset4 + cos(angle4) * scalar4;
  var y = offset4 + sin(angle4) * scalar4;
  fill(col4.r, col4.g, col4.b);
  noStroke();
  ellipse(x, y, 5, 5);
  angle4 += speed4;
  scalar4 += speed4;
}

function preload(){

music = loadSound("thesnow.mp3");

}

function setup() {

  createCanvas(800,600);
  noStroke();
  back();

  if (music.isLoaded()){
loadtime = millis();
print(loadtime);
music.play();
  }
  // amplitude
  amp = new p5.Amplitude();
  }


  function draw() {


    var vol = amp.getLevel();
    volhistory.push(vol);
  
    

    fill(29,35,40);
    rect(0,490,800,800)
   
    rez();
    //rectcol;
    //rect(0,500,800,800);
    

    fill(5);
    rect(0,650,800,800)

   
    //background(29,35,40);

    // draws a line in the background

    col.l = random(220,250);
    col.k = random(182, 228);
    col.d = random(200,250);

    beginShape();
for (var i = 0; i < volhistory.length; i++){
  
  stroke (col.l, col.k,col.d);
  noFill();
  var t  = map(volhistory[i], 0, 3,height, 0 )
  vertex(i,t);
}
endShape();

if (volhistory.length > width){
  volhistory.splice(2,1);
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

   // square flashes to paino
   if (playTime >0 && playTime < 1500 ||playTime >2500 && playTime < 3500  ){  
    colr.r1 = 50
     colr.g1 = 43
      colr.b1 = 53
   }
   if (playTime >1500 && playTime < 2500 || playTime >3500 && playTime < 4500){
    colr.r1 = 31
     colr.g1 = 36
      colr.b1 = 42
   }

   if (playTime >4500 && playTime < 5500 || playTime >6500 && playTime <  7500){
    colr.r1 = 50
     colr.g1 = 43
      colr.b1 = 53
   }
   if (playTime >5500 && playTime < 6500 || playTime > 7500 && playTime<8500){
    colr.r1 = 31
     colr.g1 = 36
      colr.b1 = 42
   }

   if (playTime >8500 && playTime < 10000 || playTime> 11000 && playTime < 12000){
    colr.r1 = 50
     colr.g1 = 43
      colr.b1 = 53
   }
   if (playTime >10000 && playTime < 11000|| playTime> 12000 && playTime < 12500){
    colr.r1 = 31
     colr.g1 = 36
      colr.b1 = 42
   }

   if (playTime >13000 && playTime < 18000){
    colr.r1 = 11
     colr.g1 = 23
      colr.b1 = 49
   }

   if (playTime >18200 && playTime < 19300|| playTime> 20300 && playTime < 21300){
    colr.r1 = 31
     colr.g1 = 36
      colr.b1 = 42
   }

   if (playTime >19300 && playTime < 20300 || playTime> 21300 && playTime < 22300){
    colr.r1 = 50
     colr.g1 = 43
      colr.b1 = 53
   }
   if (playTime >22300 && playTime < 23300|| playTime> 24300 && playTime < 25300){
    colr.r1 = 31
     colr.g1 = 36
      colr.b1 = 42
   }
   if (playTime >23300 && playTime < 24300 || playTime> 25300 && playTime < 26300){
    colr.r1 = 50
     colr.g1 = 43
      colr.b1 = 53
   }
   

   // animation 
   if (playTime >8000 && playTime < 10000 ){
   speed = .01;

   }


if (playTime >90000 && playTime < 18000){
speed = .0001
}

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

   if (playTime > 60000 && playTime < 67000){
    speed =.001;
    speed2 = .002;
   }

   if (playTime >67000)
   spiral3();

   if (playTime > 67000 && playTime < 100000){
    speed =.01;
    speed2 = .002;
    speed3 = .003;
   }
  
   if (playTime > 100000 && playTime < 120000){
  
    speed =.01;
    speed2 = .01;
    speed3 = .07;
   }

   if (playTime > 120000 && playTime < 180000){
  
    speed =.01;
    speed2 = .01;
    speed3 = .09;
   }

   if (playTime > 180000 && playTime < 240000){
  
    speed =.04;
    speed2 = .01;
    speed3 = .1;


   }

   if (playTime > 240000 && playTime < 290000){
  
    speed =.06;
    speed2 = .04;
    speed3 = .06;


   }

   if (playTime > 290000 && playTime < 370000){
  
    speed =.01;
    speed2 = .06;
    speed3 = .09;


   }

   if (playTime > 370000 && playTime < 460000){
     spiral4();
   }

   if (playTime > 370000 && playTime < 460000){
  
    speed =.01;
    speed2 = .04;
    speed3 = .09;


   }
   // spiral



  }
 