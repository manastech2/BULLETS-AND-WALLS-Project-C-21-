var bullet,wall;thickness
var speed,weight;



function setup() {
  createCanvas(1600,400);

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83)

  bullet=createSprite(50,200,50,20)
  wall=createSprite(700,200,thickness,height/2)
  fill(80,80,80)

  bullet.velocityX=speed
}


function draw() {
  background(255,255,255); 
  if(collision(bullet,wall))
{
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)

      
    if(damage<10){
      wall.shapeColor=color("green")
    }
    if(damage>100){
      wall.shapeColor=color("red")
    }

  
 

  }
  function collision(lbullet,lwall){
    bulletRightEdge=lbullet.x+lbullet.width
    wallLeftEdge=lwall.x
    if(bulletRightEdge>=wallLeftEdge)
    {
      return true
    }
      return false
    }

  
  
  drawSprites();
}