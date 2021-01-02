
class Ball{
	constructor(x,y){
		var options = {
			isStatic:false,
			restitution:1.0,
			friction:0.0,
			frictionAir: 0.0,
			slop:1,
			inertia:Infinity
			// density:1.5
		}
	this.body = Bodies.circle(x,y,18,options);
	
    World.add(world,this.body);
	}
	display(){
		var pos = this.body.position
		var color = "black"
		if(this.body.speed>1){
			color = "blue";
		}
		ellipseMode(RADIUS);
		push();
		stroke("white")
		fill(color);
		ellipse(pos.x,pos.y,18,18);
		pop();
	}
}
	

	
	




