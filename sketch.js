
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage, gameOverImage;
var bananaGroup, obstacleGroup;
var score;
var survivalTime;
var gameState = "PLAY";
function preload(){
  
  
  monkey_running=loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  gameOverImage=loadImage("game over 1.jpg");
}
function setup() {
  
createCanvas(600,300);
  
monkey= createSprite(50,267,20,20) ; 
ground= createSprite(500,280,1000,10) ; 
  
  ground.velocityX = -6
  
   monkey.addAnimation("monkey",monkey_running);
  monkey.scale=0.1;
 
  score=0;
  survivalTime=0;
  
   bananaGroup = new Group();
  obstacleGroup = new Group();
  
  ground.visible=false;
  
  monkey.setCollider("circle",0,100,100);
 // monkey.debug = true;
}


function draw() {
  background("white");
  if (gameState==="PLAY"){
    
    
   if (ground.x < 100){
      ground.x = ground.width/2;
    }
    if(monkey.isTouching(obstacleGroup)){
      monkey.velocityX=0;
      ground.velocityX=0;
      obstacleGroup.velocityX=0;
      image(gameOverImage,300,150);
      gameOverImage.scale=0.5;
    }
 
  monkey.collide(ground);
  
  if(keyDown("space") && monkey.y >= 200) {
      monkey.velocityY = -20;
    }
  monkey.velocityY = monkey.velocityY + 1.1
  
   
  obstacles();
  food();

    }
  
   
  
  textSize(20);
 fill("black");
   text( "Score "+score,100,70);
  
  textSize(28);
  fill("black");
  survivalTime=Math.round(frameCount/frameRate())
  text("Survival Time: "+survivalTime,100,50);
  
  drawSprites();
}

function obstacles(){
  
   if (frameCount % 100 === 0) {
    var obstacle = createSprite(650,240,10,10);
    obstacle.addImage(obstaceImage);
    obstacle.velocityX = -8;
     obstacle.scale=0.25
     obstacle.lifetime=120;
   obstacleGroup.add(obstacle);
    obstacle.depth=monkey.depth;
     monkey.depth=monkey.depth+1;
     
     console.log(obstacle.depth);
      console.log(monkey.depth);
  }
}

function food(){
  
  if (frameCount % 80 === 0) {
    var banana = createSprite(600,100,10,10);
     banana.y = Math.round(random(70,180));
    banana.addImage(bananaImage);
    banana.velocityX = -10;
    banana.scale=0.09;
      banana.lifetime=120;
    
   bananaGroup.add(banana);
}

}







