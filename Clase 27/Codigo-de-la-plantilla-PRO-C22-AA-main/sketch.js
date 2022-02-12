const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine;
var world;
var fondo;
var torre;
var cannonobj;
var angle;
var mbalas=[];

function preload() {
  fondo=loadImage("assets/background.gif");
  torre=loadImage("assets/tower.png");

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine=Engine.create();
  world=engine.world
  angleMode(DEGREES);
  angle=15;
  cannonobj=new Cannon(150, 170, 190, 140, angle);
  boats();
}

function draw() {
  Engine.update(engine);
  image(fondo, 0, 0, width, height);
  image(torre, 60, 200, width/6, height/1.8);
  cannonobj.display();
  for(var i=0; i<mbalas.length;i++){
    shootbullets(mbalas[i], i);
    console.log("for");
  }
  boatobj.display()
}

function keyPressed(){
  if(keyCode===DOWN_ARROW){
    var bulletobj;
    bulletobj=new Bullets(cannonobj.x, cannonobj.y);
    bulletobj.trayectoria=[]
    //console.log("trayectoria.after", trayectoria.length);
    console.log("genera bala");
    Matter.Body.setAngle(bulletobj.body, cannonobj.angle);
    mbalas.push(bulletobj);
    console.log("llenado de matriz");
  }
}

function shootbullets(ball,index){
  if(ball){
    ball.display()
    console.log("showbullets");
  }
}

function boats(){
  boatobj=new Boat(width/2.3, height/2.5, 100, 100);

}

function keyReleased(){
  if(keyCode===DOWN_ARROW){
    mbalas[mbalas.length-1].shoot();
    console.log("keyReleased");
  }
}

/*var matriz=[6, 7, 9, 3]
console.log(matriz)
var matriz2=["pelota", 5, true]
console.log(matriz2)

var mmatrices=[[2, 7], [3, 0]]
console.log(mmatrices)
//console.log(mmatrices[0][1])
mmatrices.push("bala")
console.log(mmatrices)
mmatrices.pop()
console.log(mmatrices)*/