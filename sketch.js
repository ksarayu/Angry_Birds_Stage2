const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function preload(){
    backgroundPic = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200, 800);
    engine = Engine.create();
    world = engine.world;

    bird1 = new Bird(200,400);

    ground = new Ground(600,785,1200,25);
    box1 = new Box(1000,730,70,70);
    pig1 = new Pig(900,730);
    box2 = new Box(800,730,70,70);
    log1 = new Log(900,710,275,PI/2);

    box3 = new Box(1000,640,70,70);
    pig2 = new Pig(900,640);
    box4 = new Box(800,640,70,70);
    log2 = new Log(900,620,275,PI/2);

    box5 = new Box(900,550,70,70);
    log3 = new Log(820,500,175,PI/7);
    log4 = new Log(980,500,175,-PI/7);
}

function draw(){
    background(backgroundPic);
    Engine.update(engine);

    bird1.display();

    ground.display();
    box1.display();
    pig1.display();
    box2.display();
    log1.display();

    box3.display();
    pig2.display();
    box4.display();
    log2.display();

    box5.display();
    log3.display();
    log4.display();
}