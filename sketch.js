const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, box1, box2,box3, box4, box5;
var pig1,pig2
var stick1,stick2, stick3, stick4;
var bird

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,390,1200,20);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
     pig1 = new Pig (810,350);
      stick1 = new Stick(810,250,300,PI/2)

    box3 = new Box(700, 230,70,70)
    box4 = new Box(920,230,70,70)
     pig2 = new Pig (810,210)
    stick2 = new Stick(810,170,300,PI/2)

    box5 = new Box (810,150,70,70)
    stick3 = new Stick(760,110,150,PI/5)
    stick4 = new Stick(870,110,150,-PI/5)

    bird = new Bird(200,200)

}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    pig1.display();
    pig2.display();
    stick1.display();
    stick2.display();
    stick3.display();
    stick4.display();
    bird.display();

    
}