
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roof;
var ball1,ball2,ball3,ball4,ball5;
var rope1,rope2,rope3,rope4,rope5;

var balls = [];
var ropes = [];

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(350,100,250,10);

	ball1 = new Ball(269,400);
	ball2 = new Ball(305,400);
	ball3 = new Ball(341,400);
	ball4 = new Ball(377,400);
	ball5 = new Ball(413,400);

	rope1 = new Chain(ball1.body,roof.body,-72,0);
	rope2 = new Chain(ball2.body,roof.body,-36,0);
	rope3 = new Chain(ball3.body,roof.body,0,0);
	rope4 = new Chain(ball4.body,roof.body,36,0);
	rope5 = new Chain(ball5.body,roof.body,72,0);

	Engine.run(engine);

	// for (i = 269 ; 4==balls.length ; i+=36){
	// 	balls.push(new Ball(i,400) )
	// }

	// for (i = 0 ; i<balls.length ; i++){
	// 	for(k = -72 ; k<72 ; k+=36 )
	// 	ropes.push(new Chain(balls[i],roof.body,k))
	// }

	for(i = 5 ; i>0 ; i-=1){
		balls.push("ball"+i)
		console.log(balls);
	}
  
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background("black");
textSize(20);
text("Drag the 1st ball from left to play ",200,20)
// text("or press 'space' ",270,40);

  roof.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();

 

//   for(i = 0 ; i<ropes.length ; i++){
// 	ropes[i].display;
// }
//   ball5.mouse();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();

  
 
}

// function keyPressed(){
// 	if(keyCode == 32 ){
// 		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:70,y:70})
// 	}
// }
function mouseDragged(){
	if(mouseX > ball1.body.position.x -18 && mouseX < ball1.body.position.x + 18){
    Matter.Body.setPosition(ball1.body, {x: mouseX , y: mouseY});}
}




