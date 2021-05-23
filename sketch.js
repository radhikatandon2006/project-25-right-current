const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world, paper1, ground, dustbin, dustbin2, dustbin3;

function setup() {
    createCanvas(800, 700);
    rectMode(CENTER);

    engine = Engine.create();
    world = engine.world;

    //Create the Bodies Here.
    paper1 = new Paper(100,600, 10);
    ground = new Ground(400,680,800,20);
    dustbin = new Dustbin(610,665, 130, 10);
    dustbin2 = new Dustbin(550,620,10,100);
    dustbin3 = new Dustbin(670,620,10,100)
    

    Engine.run(engine);
  
}

function draw() {
  
  rectMode(CENTER);
  
  background(0);
  
  //Engine.update(engine);
    
  paper1.display();

  ground.display();

  dustbin.display();
  dustbin2.display();
  dustbin3.display();

  
}

function keyPressed(){
    if (keyCode === UP_ARROW ) {
      Matter.Body.applyForce(paper1.body, paper1.body.position, {x: 15,y: -15})
      //value in -y helps the paper ball to jump
    }
  }




