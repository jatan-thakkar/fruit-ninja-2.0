var knife,knifeImage
var PLAY=1;
var END=0;
var gameState=1;
var fruit,fruit1,fruit2,fruit3,fruit4;
var gameover,monsterImage,monster;
var fruitGroup;
var enemyGroup;
var score;
var knifeSwooshSound;

function preload(){
knifeImage=loadImage("sword.png")
 fruit1=loadImage("fruit1.png");
  fruit2=loadImage("fruit2.png");
  fruit3=loadImage("fruit3.png");
  fruit4=loadImage("fruit4.png");
  gameover=loadImage("gameover.png");
  monsterImage=loadAnimation("alien1.png","alien2.png");
  knifeSwooshSound=loadSound("knifeSwoosh.mp3")
}

function setup() {
  createCanvas(400,400);
  knife= createSprite(40,200,20,20); 
  knife.addImage(knifeImage);
  knife.scale=0.7
  fruitGroup=new Group();
  enemyGroup=new Group();
  score=0;
  }

function draw() {
  background(220);
  if (gameState===PLAY){
 fruits();
enemy();
knife.y=World.mouseY;
knife.x=World.mouseX;
  if(fruitGroup.isTouching(knife)){
  fruitGroup.destroyEach();
    knifeSwooshSound.play();
  score=score+2;
  }
    
  
else{
  

   if(enemyGroup.isTouching(knife)){
    gameState=END;
   fruitGroup.destroyEach();
    enemyGroup.destroyEach();
    fruitGroup.setVelocityXEach(0);
    enemyGroup.setVelocityXEach(0);
    
  
  
  knife.addImage(gameover)
  knife.x=200
  knife.y=200
    
  }
  }
  
  }
drawSprites()
text("Score: "+ score, 330,50);
}
function fruits(){
  if (frameCount%80===0){
     position=Math.round(random(1,2));
  fruit=createSprite(400,200,20,20);
  
  if(position==1)
  {
  fruit.x=400;
  fruit.velocityX=-(10+(score/4));
  }
  else
    {
    if(position==2){
      fruit.x=0;
      
    fruit.velocityX=(9+(score/4));
    }
    }
  
  fruit.scale=0.2;
  //fruit.debug=true;
  r=Math.round(random(1,4));
  if (r== 1){
   fruit.addImage(fruit1);
  } else if (r==2) {
  fruit.addImage(fruit2)
  } else if (r== 3) {
  fruit.addImage(fruit3);
  } else{
  fruit.addImage(fruit4);
  }
  
 fruit.y=Math.round(random(50,340));
  
  
  fruit.setLifetime=100;
    
  fruitGroup.add(fruit)
  }
 
}
function enemy(){
  if (frameCount%200===0){
  monster=createSprite(400,200,20,20);
  monster.addAnimation("moving", monsterImage);
  monster.y=Math.round(random(100,300));
  monster.velocityX=-8;
  monster.setLifetime=50;
  enemyGroup.add(monster)
  }
}
  
