const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;
var box1, box2, box3, box4;
var ground, pig1, pig2;
var log1, log2;
var bird;

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    box1=new Box(500,300,50,50);
    box2=new Box(700,100,50,50);
    box3=new Box(500,60,50,50);
    box4=new Box(700,60,50,50);
    ground = new Ground(400,390,800,20);
    pig1= new Pig(600,300);
    pig2= new Pig(600,60);
    log1= new Log(600,100,300,PI/2);
    log2= new Log(600,20,300,PI/2);
    bird= new Bird(200,200);
}

function draw(){
    background(0);
    Engine.update(engine);
    

    

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    ground.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    bird.display();
}