var bullet,wall;
var speed,weight;
var thickness,damage;






function setup() {
  createCanvas(1600,400);
 speed=random(223,321);
 weight=random(30,52);
 thickness=random(22,83);
 bullet=createSprite(50,200,50,50);
 wall=createSprite(1300,200,thickness,height/2);

 bullet.velocityX=speed;
}

function draw() {
  background(0);
 damage(bullet,wall);

   
  drawSprites();
}