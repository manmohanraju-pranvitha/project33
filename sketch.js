var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
  var PLAY=1;
  var END=0;
  var gamestate=PLAY;
  var particle;
//var particles = [];
var plinkos = [];
var divisions=[];

var divisionHeight=300;
var score =0;

var turn=0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
 
   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
 
  Engine.update(engine);
  noStroke();
  textSize(35)
  fill("white")
  text("Score " + score, 30, 50)
 
   text("500",10,550);
   text("400",90,550);
   text("450",170,550);
   text("550",250,550);
   text("500",330,550);
   text("400",410,550);
   text("530",490,550);
   text("510",570,550);
   text("400",650,550);
   text("590",730,550);
 
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  
 
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
  mousePressed();
}
function mousePressed(){
 if(gamestate!=="END"){
    
    
    particle=new Particle(mouseX,10,10,10);
    score++;
 }
}