class Rope{
    constructor (body1,body2,offsetX,offsetY){
        var options = {
            bodyA : body1,
            bodyB : body2,
            pointB:{x:this.offsetX, y:this.offsetY}
            //stiffness : 0.04,
           // length : 50
        }
        this.chain = Matter.Constraint.create(options)
        World.add(world , this.chain)
    }
    display(){
        strokeWeight(2)
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        line (pointA.x,pointA.y,pointB.x,pointB.y)
    }
}