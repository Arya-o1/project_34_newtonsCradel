class Chain{
    constructor(a,b,offsetX){
        this.offsetX = offsetX
        this.offsetY = 0

        var options = {
            bodyA : a,
            bodyB : b,
            stifness:1,
            length:200,
            angularStiffness:1,
            pointB:{x:this.offsetX,y:this.offsetY}
        }

        this.chain = Matter.Constraint.create(options);
        World.add(world,this.chain);
    }
    display(){
        var bdA = this.chain.bodyA.position;
        var bdB = this.chain.bodyB.position;
        
        stroke("white")
        fill("black")
        line(bdA.x,bdA.y,bdB.x + this.offsetX,bdB.y + this.offsetY);
    }
}