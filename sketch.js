
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy1;
var stone1;
var tree1;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
var launcher;
var ground1;

function preload()
{
	bg = loadImage("bg.jpg");
	Boy = loadImage("Boy.png");
	Tree = loadImage("tree.png");
	catapult1 = loadImage("catapult.png");
	clouds = loadImage("clouds.png");
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	

	stone1 = new stone(160,430,30);

  //tree1 = new tree(950,300,420,600);

	mango1 = new mango(850,250,30);
	mango2 = new mango(920,160,30);
	mango3 = new mango(900,210,30);
	mango4 = new mango(1100,180,20);
	mango5 = new mango(950,120,35);
	mango6 = new mango(850,140,25);
	mango7 = new mango(910,70,20);
	mango8 = new mango(1100,250,30);
	mango9 = new mango(1040,120,30);
	mango10 = new mango(810,180,30);
	mango11 = new mango(1010,50,25);
	mango12 = new mango(1010,220,20);

	ground1 = new ground(600,590,1200,20);

	launcher = new Launcher(stone1.body,{x:180,y:442});

	Engine.run(engine);
  
}


function draw() {

  background(bg);
  Engine.update(engine);
  strokeWeight(4)
  
  imageMode(CENTER);
image(Boy,252,430,200,300)
 
imageMode(CENTER);
image(Tree,950,300,420,600)

imageMode(CENTER);
image(catapult1,180,460,60,60)

imageMode(CENTER);
image(clouds,400,80,350,300);


  stone1.display();
  //tree1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();

launcher.display();

ground1.display();

 

detectCollision(stone1,mango1);
detectCollision(stone1,mango2);
detectCollision(stone1,mango3);
detectCollision(stone1,mango4);
detectCollision(stone1,mango5);
detectCollision(stone1,mango6);
detectCollision(stone1,mango7);
detectCollision(stone1,mango8);
detectCollision(stone1,mango9);
detectCollision(stone1,mango10);
detectCollision(stone1,mango11);
detectCollision(stone1,mango12);

 drawSprites();


  
}

function mouseDragged(){
    Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY});

}

function mouseReleased(){
    launcher.fly();


}

function detectCollision(lstone,lmango){

	stoneBodyPosition=lstone.body.position;
mangoBodyPosition=lmango.body.position;

	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
	if(distance<=lmango.radius*2+lstone.radius*2);
	{

		Matter.Body.setStatic(lmango.body,false);
	
	}
}

function keyPressed(){
	if (keyCode===32){
		Matter.Body.setPosition(stone1.body,{x:160,y:480})
		launcher.attach(stone1.body);
	}

}