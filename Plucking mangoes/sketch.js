
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy,mango1,mango2,mango3,mango4,mango5,tree,ground,stone,chain;

function setup() {
	createCanvas(2000, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	

	//tree = new Tree(900,315,500,600);
	ground = new Ground(0,600,3030,10);
	// mango1 = new Mango(800,250,50);
	// mango2 = new Mango(1000,200,50);
	// mango3 = new Mango(1070,270,50);
	// mango4 = new Mango(900,200,50);
	// mango5 = new Mango(1000,100,50);
	stone = new Stone(55,200,20);
	boy = new Boy(200,500,100,150);
	chain = new Launcher(stone.body,{x:115, y:395})

	Engine.run(engine);
  
}


function draw() {
	
  Engine.update(engine);
  //rectMode(CENTER);
  background(156);
	text(mouseX + "," +mouseY, mouseX, mouseY);
	//tree.display();
	ground.display();
	// mango1.display();
	// mango2.display();
	// mango3.display();
	// mango4.display();
	// mango5.display();
	stone.display();
	boy.display();
	chain.display();
	// detectCollision(stone,mango1);
	// detectCollision(stone,mango2);
	// detectCollision(stone,mango3);
	// detectCollision(stone,mango4);
	// detectCollision(stone,mango5);

}

// function detectCollision(lstone,lmango){
// 	mangoBodyPos= lmango.body.position;
// 	stoneBodyPos= lstone.body.position;

// 	var distance=dist(stoneBodyPos.x,stoneBodyPos.y,mangoBodyPos.x,mangoBodyPos.y)
// 	if(distance<=lmango.r+lstone.r){
// 		Matter.Body.setStatic(mango.body,false);
// 	}
// }

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    chain.fly();
}

function keyPressed(){
	if(keyCode === 32) {
		Matter.Body.setPosition(stone.body, {x:115, y:395})
		chain.attach(stone.body);
	}
}








