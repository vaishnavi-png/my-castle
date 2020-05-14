const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, block;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;


  ground = new Block(400,380,800,20);

  block1 = new Block(400,200,50,100);
  block2 = new Block(410,200,50,100);
  block3 = new Block(420,200,50,100);
  block4 = new Block(430,200,50,100);
  block5 = new Block(440,200,50,100);

  block6 = new Block(450,200,50,200,{isStatic:false});
  block7 = new Block(390,200,50,100,{isStatic: false});
  block8 = new Block(400,190,500,10,{isStaic: false});

  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255); 
  Engine.update(engine);
  
  ground.display();
  
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5,display();
  block6.display();
  block7.display();
  block8.display();
  drawSprites();
}