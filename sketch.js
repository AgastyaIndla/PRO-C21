var speed,thickness,damage;
var wall,bullet;

function setup(){
  createCanvas(1000,400);

  bullet=createSprite(100,200,60,25);
  bullet.shapeColor =("white");
  bullet.velocityX=10;

  wall=createSprite(870,200,30,300);
  wall.shapeColor ="#505050";

  speed=Math.floor(random(223,321));
  weight=Math.floor(random(30,52));
  thickness=Math.floor(random(22,83));

}

function draw(){
  background("lavender");
  drawSprites();

textSize(25);
fill("black");

text("WorldWide Military Safety Consortium",250,50);

collide(bullet,wall);

text("x:"+mouseX,50,50); text("y:"+mouseY,50,70);

textSize(15);
text("Damage :< 10 ===>Wall is effective against Bullets",30,340);
text("Damage : > 10 ===>Wall is not effective against Bullets",30,360);

fill("purple");
textSize(25);
text("Damage Is : "+Math.floor(damage),30,300);

}

function damages(){
  damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);
  console.log(damage);

  if (damage < 10){
    bullet.shapeColor="green";

  }

  if(damage > 10){
    bullet.shapeColor="red";
   } 

}



function collide(object1,object2){
  if (object2.x-object1.x===object1.width/2 + object1.width/2-10){
   // object1&&object2.velocityX = 0;
   object1.velocityX=0;
   object2.velocityX=0;

   damages();
  }

}
