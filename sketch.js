
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var  bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roof,rope1,rope2,rope3,rope4,rope5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  bobObject1 = new Bob(400,600,60);
  bobObject2 = new Bob(460,600,60);
	bobObject3 = new Bob(520,600,60);
	bobObject4 = new Bob(340,600,60);
	bobObject5 = new Bob(280,600,60);

  roof = new Roof(400,300,500,30);
  
  rope1 = new Rope(bobObject1.body,roof.body);
  rope2 = new Rope(bobObject2.body,roof.body);
  rope3 = new Rope(bobObject3.body,roof.body);
  rope4 = new Rope(bobObject4.body,roof.body);
  rope5 = new Rope(bobObject5.body,roof.body);

 Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(255);
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  
 

  drawSprites();
 
}
function keyPressed(){
  if (keyCode === UP_ARROW){

    Matter.Body.applyForce(bobObject5.body,bobObject5.body.position,{x:-82,y:-80});
  }
}