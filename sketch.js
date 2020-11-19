var bullet,wall
var speed,weight, thickness
var lbullet, lwall


function setup() {
  createCanvas(1600,400);
  weight=random(400,1500)
  speed=random(223,321)
  thickness=random(30, 52)
 
  bullet= createSprite(50, 200, 50, 50);
 wall=createSprite(1500,200,thickness,height/2)
 wall.shapeColor=(80,80,80)
 bullet.velocityX=speed;

 
 
}

function draw() {
  background("white")
  
  if (hasCollided(bullet,wall))
  {
bullet.velocityX=0;
var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
  }
  
  if (damage>10){
wall.shapeColor=(255,0,0)
  }

  if (damage<10){
wall.shapeColor=(0,255,0)
  }
  
  drawSprites();
}

function hasCollided(lbullet,lwall){
bulletRightEdge=lbullet.x+lbullet.width;
wallLeftEdge=lwall.x
if (bulletRightEdge>=wallLeftEdge){
return true;
}
return false;
}




