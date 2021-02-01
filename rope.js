class Rope {
    constructor(body1,body2,offsetX,offsetY)
    {
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options={
      bodyA:body1,
      bodyB:body2,
      pointB:{x:this.offsetX, y:this.offsetY}
        }
        this.rope=Constraint.create(options)
        World.add(world,this.rope)

    // refer to hint in project pdf and complete the constructor of Rope class(DONE)
    
    }
    display(){
   var pointA = this.Rope.bodyA.position;
   var pointB = this.Rope.bodyB.position;

   strokeWeight(2);
   var Anchor1X=pointA.x;
   var Anchor1Y=pointB.y

   var Anchor2X=pointB.x+this.offsetX
   var Anchor2Y=pointB.y+this.offsetY
   line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
   // Refer to the project pdf to write the display () code (DONE)

    }
}