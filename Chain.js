class chain {
constructor(A,B){
var options = {
bodyA:A ,bodyB:B,
length:4,
stiffness:0.5
}
this.constraint = Matter . Constraint .create(options)
World.add(world,this.constraint);
}
display(){
    strokeWeight(5)
    line(this.constraint.bodyA.position.x,this.constraint.bodyA.position.y,this.constraint.bodyB.position.x,this.constraint.bodyB.position.y)
}
}