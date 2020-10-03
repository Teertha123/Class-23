const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var box;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
 box=new Box (240,100,50,80)
 box1= new Box (200,300,50,50)
 ground=new Ground(200,390,400,20)
   
}

function draw(){
    background(0);
    Engine.update(engine);
   box.display();
   box1.display();
   ground.display();
}