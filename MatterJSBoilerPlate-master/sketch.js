var ball,side1,side2,side3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var options={
	isStatic:false,
	restitiution:0.3,
	friction :0.5,
	dencity:1.2
}

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	ellipse(56, 46, 55, 55);
	rect(200, 50, 55, 55);
	rect(225, 40, 55, 55);
	rect(250, 50, 55, 55);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(white);
  if (KEYDOWN(space)) {
	  ball.bounceoff(canvas);
  }

  drawSprites();
 
}



