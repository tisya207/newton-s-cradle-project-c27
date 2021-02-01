
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4,
bobObject5;
var roof;
var rope1,rope2,rope3,rope4,rope5;

var bobDiametr = 40;
function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
  
	bobObject1 = new Bob(200,400,20);
	bobObject2 = new Bob(240,400,20);
	bobObject3 = new Bob(280,400,20);
	bobObject4 = new Bob(320,400,20);
	bobObject5 = new Bob(360,400,20);
		// create 4 more bob objects at same y position but different x position say 240,
		//280,320....{DONE}

	
	roof = new Ground(360,200,350,20);

	rope1 = new Rope(bobObject1.body,roof.body,-bobDiametr*2,10);
	rope2 = new Rope(bobObject2.body,roof.body,-bobDiametr*2,0);
	rope3 = new Rope(bobObject2.body,roof.body,-bobDiametr*2,20);
	rope4 = new Rope(bobObject2.body,roof.body,-bobDiametr*2,30);
	rope5 = new Rope(bobObject2.body,roof.body,-bobDiametr*2,40);
	//create 4 more rope objects and 3rd parameter will be different like
	// -bobDiametr, 0, -bobDiametr,-bobDiametr*2{DONE?!}

}


function draw() {
	Engine.update(engine);

  rectMode(CENTER);
  background("yellow");
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  // display all bobObjects below{DONE}

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  //display all rope objects below{DONE}

  roof.display();
  drawSprites();
 
}
function keyPressed(){
	if (keyCode === UP_ARROW ){
		
	Matter.Body.applyForce(bobObject1.body, bobObject1.body.position,{x:-50,y:-35});
		// Use Matter.Body.applyForce for bobObject1 woth a negative x and y force,,
		// refer to crumpled balls project as hint
	}
}
