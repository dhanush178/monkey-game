
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var ground,groundimage;
var survivaltime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(500,400);
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.2;
  
  ground=createSprite(450,375,1000,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x)
  FoodGroup=createGroup();
  obstaclesGroup=createGroup();
  
}


function draw() {
background(180);
  
monkey.collide(ground);  
  if (obstaclesGroup.isTouching(monkey))  {
    obstaclesGroup.setVelocityXEach(0);
    FoodGroup.setVelocityXEach(0);
    monkey.velocityY=0;
    ground.velocityY=0;
    obstaclesGroup.setLifetimeEach(-1);
    FoodGroup.setLifetimeEach(-1);
  }
  
if (keyDown("space") && monkey.y>=100 )  {
  monkey.velocityY=-12;  
} 
  
  monkey.velocityY = monkey.velocityY + 0.8
  if(ground.x<0){
  ground.x=ground.width/2
  }
 survivaltime=Math.ceil(frameCount/frameRate()/80) ;
  textSize(20);
  fill("black");
  text("Survival time= "+ survivaltime, 40,40); 
  
drawSprites();  
  banana();
  stone();
}
 function banana(){
   if(frameCount%80===0){
 var  banana=createSprite(450,150,20,20);
  banana.addImage(bananaImage);
  banana.scale=0.1;
  banana.velocityX=-4; 
  banana.y = Math.round(random(80,140));
  banana.lifetime=400;
  FoodGroup.add(banana);
   }  
 }
  function stone(){
  if (frameCount%300===0){
  obstacle=createSprite(450,320,20,20);
  obstacle.addImage(obstacleImage);
  obstacle.velocityX=-5;
    obstacle.scale=0.3;
    obstacle.lifetime=400;
    obstaclesGroup.add(obstacle);
  }}
