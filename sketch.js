const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground, ground1, ground2;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11,block12;
var polygon;
var polygonimg;
var slingShot;

function preload() 
{
  polygonimg = loadImage("polygon.png");
}


function setup()
 {
 var canvas = createCanvas(800,400);
  
  engine = Engine.create();
    world = engine.world;

    polygon = Bodies.circle(50,200,20);
    World.add(world, polygon);

    ground = new Ground(400,350,800,20);
    ground1 = new Ground(370,270,150,15);
    ground2 = new Ground(650,150,150,15);
    block1 = new Block(370,250,40,40);
    block2 = new Block(330,250,40,40);
    block3 = new Block(410,250,40,40);
    block4 = new Block(350,210,40,40);
    block5 = new Block(370,170,40,40);
    block6 = new Block(650,130,40,40);
    block7 = new Block(610,130,40,40);
    block8 = new Block(690,130,40,40);
    block9 = new Block(630,110,40,40);
    block10 = new Block(670,110,40,40);
    block11 = new Block(650,60,40,40);
    block12 = new Block(390,210,40,40);
    slingShot = new SlingShot(this.polygon,{x:100, y:200});
}

function draw() 
{
  Engine.update(engine);
  background("black");  
  imageMode(CENTER);
  ground.display();
  ground1.display();
  ground2.display();
   block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  image(polygonimg, polygon.position.x,polygon.position.y, 40,40);
  slingShot.display();
  drawSprites();
}
function mouseDragged()
{
  Matter.Body.setPosition(this.polygon, {x:mouseX , y:mouseY});
}


function mouseReleased()
{
  slingShot.fly();
}