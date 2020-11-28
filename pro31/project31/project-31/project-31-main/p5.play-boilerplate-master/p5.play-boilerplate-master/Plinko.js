class Plinko{
  constructor(x, y ) {
      var options = {
          isStatic:true,
          
      }
      this.body = Bodies.circle(x, y,20, options);
      this.radius=20;
    
      World.add(world, this.body);
    }
    display(){
      var pos= this.body.position;
      //push();
     //translate(pos.x, pos.y);
      
      fill("white");
      ellipseMode(CENTER);
      ellipse(pos.x, pos.y,this.radius,this.radius);
      //pop();
    }
}