const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var north, east, south, west;
var row1, row2, row3, row4;
var dividers, ground;
var particles = [];

var num = 25;

function setup() {

  engine = Engine.create();
  world = engine.world;

  createCanvas(480,800);

  row1 = new Plinko(48,100,20,48);
  row2 = new Plinko(24,200,20,48);
  row3 = new Plinko(48,300,20,48);
  row4 = new Plinko(24,400,20,48);

  dividers = new Dividers(12,700,8,400,76)
  ground = new Side(240,785,480,8)

  north = new Side(240,0,480,num);
  east = new Side(480,400,num,800);
  south = new Side(240,800,480,num);
  west = new Side(0,400,num,800);
}

function draw() {
  background("black");  

  row1.display("white");
  row2.display("white");
  row3.display("white");
  row4.display("white");

  dividers.display("white");
  ground.display("white");

  north.display("darkred");
  east.display("darkred");
  south.display("darkred");
  west.display("darkred");

  if (frameCount % 60 === 0){

    particles.push(new Ball(random(130, 150), 10 ,20));
  }

  for (var j = 0; j < particles.length; j++) {

    particles[j].display();
  }

  drawSprites();
}