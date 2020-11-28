const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300;
function preload() {

}

function setup(){
    var canvas = createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;

   ground= new Ground(240,780,480,20);
   for (var k = 0;k <=width; k=k+80)
   {
     divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight-20));
      
   }


   for (var j = 40;j <=790; j=j+50)
   {
       plinkos.push(new Plinko(j,75));
      
   }
   for (var j = 40;j <=790; j=j+50)
   {
       plinkos.push(new Plinko(j,175));
       
   }
   for (var j = 40;j <=790; j=j+50)
   {
       plinkos.push(new Plinko(j,275));
       
   }

for (var j = 40;j <=790; j=j+50)
{
    plinkos.push(new Plinko(j,375));
    
}

}
function draw(){
    background("black");
    ground.display();
    Engine.update(engine);
    strokeWeight(4);
    if(frameCount%60===0){
        particles.push(new Particle(random(480/2-10),10,4));
         }
  
   for (var i = 0;i < plinkos.length; i=i+1)
   {
       plinkos[i].display();
   }
   for (var s = 0;s < divisions.length; s=s+1)
   {
       divisions[s].display();
   }
  
   for (var x = 0;x < particles.length; x=x+1)
   {
       particles[x].display();
   }


}

