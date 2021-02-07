var bullet, wall;
var thickness;
var speed, weight;
function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);
  bullet=createSprite(50,250,50,100);
  bullet.velocityX=speed;
  bullet.shapeColor=color("white");
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=(80,80,80);
  thickness=random(22,83);
}

function draw() {
  background("black");  
  
  

      if(hasCollided(bullet, wall)){
        bullet.velocityX=0;
        var damage=0.5 * weight * speed * speed/(thickness *thickness* thickness);
      }

      if(damage>10){
        wall.shapeColor=color(255,0,0);
      }

      if(damage<10){
        wall.shapeColor=color(0,255,0)
      }
      drawSprites();
  }
  



function hasCollided(zbullet, zwall){

  bulletRightEdge=zbullet.x + zbullet.width;
  wallLeftEdge=zwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;
}
