var gameState,bg;
var platform,platform1,platform2;
var doorOpen,openingSwitch,doorLocked;
var lP1;
var run, jump,dead, shoot,slide;

function preload(){
  bg=loadImage("bg.jpg");
  platform=loadImage("Tiles.png");
  platform1=loadImage("Tiles1.png");
  platform2=loadImage("Tiles2.png");
  doorOpen=loadImage("DoorOpen.png");
  openingSwitch=loadImage("greenSwitch.png");
  doorLocked=loadImage("DoorLocked.png");
  
  
  run=loadAnimation("Run1.png","Run2.png","Run3.png","Run4.png","Run5.png","Run6.png","Run7.png","Run8.png");
  
  // jump=loadAnimation("Jump1.png","Jump2.png","Jump3.png","Jump4.png","Jump5.png","Jump6.png","Jump7.png","Jump8.png","Jump9.png","Jump10.png");
  
  //dead=loadAnimation("Dead1.png","Dead2.png","Dead3.png","Dead4.png","Dead5.png","Dead6.png","Dead7.png","Dead8.png","Dead9.png","Dead10.png");
  
  //slide=loadAnimation("Slide1.png","Slide2.png","Slide3.png","Slide4.png","Slide5.png","Slide6.png","Slide7.png","Slide8.png");
  
  //shoot=loadAnimation("Shoot1.png","Shoot2.png","Shoot3.png","Shoot4.png");
  
  //bullet=loadAnimation("Bullet1.png","Bullet2.png","Bullet3.png");
  
  //runShoot=loadAnimation("RunShoot1.png","RunShoot2.png","RunShoot3.png","RunShoot4.png","RunShoot5.png","RunShoot6.png","RunShoot7.png","RunShoot8.png","RunShoot9.png");
  
  //idle=loadAnimation("Idle1.png","Idle2.png","Idle3.png","Idle4.png","Idle5.png","Idle6.png","Idle7.png","Idle8.png","Idle9.png","Idle10.png");
}


function setup() {
  createCanvas(600, 600);
  gameState="page1";
  edges=createEdgeSprites();
  movingPlatforms();
  InvisibleBoundries()
  Robot();
  
}

function draw() {
  background(bg);
  Shuffle();
  //lP1.visible=false
  if (gameState==="start"){
   instructions();
   
  }
  
  if (gameState==="page1"){
  Page1();
  } 
  
  if(gameState==="page2"){
    Page2();
    
  }
   if(gameState==="page3"){
    Page3();
    
  }

  if(gameState==="page4"){
    Page4();
    
  }

  
  drawSprites();  
}

function instructions(){
  textSize(30);
  fill("red");
  text("Robot Run",280,100);
  
  textSize(20);
  fill("blue");
  text("Press Space to start",350,450);
  if (keyDown("Space")){
    gameState="page1";
  }
}
function movingPlatforms(){
     lP1=createSprite(350,500,100,5);
    lP1.addImage(platform2);
    lP1.scale=0.2;
     lP1.velocityY=-4;
     lP1.velocityX=0;
  lP1.visible=false;
  
  
  
     lP2=createSprite(230,100,100,5);
    lP2.addImage(platform2);
    lP2.scale=0.2;
     lP2.velocityY=4;
  lP2.visible=false;
  lP2.bounceOff(edges);
  
  lP3=createSprite(200,400,100,5);
    lP3.addImage(platform2);
    lP3.scale=0.2;
     lP3.velocityX=2;
  lP3.visible=false;
  
  
}

function InvisibleBoundries(){
  h1=createSprite(300,70,600,2);
  h2=createSprite(300,530,600,2);
  v1=createSprite(70,300,2,600);
  v2=createSprite(530,300,2,600);
    hm1=createSprite(300,220,600,2);
  hm2=createSprite(300,380,600,2);
   vm1=createSprite(220,300,2,600);
  vm2=createSprite(380,300,2,600);
}

function Shuffle(){
   lP1.bounceOff(h1);
  lP1.bounceOff(h2);
 
  lP2.bounceOff(h1);
  lP2.bounceOff(h2);
  
   lP3.bounceOff(v1);
  lP3.bounceOff(vm2);
}

function Page1(){
  var ground=createSprite(50,550,200,10);
  ground.addImage(platform);
  ground.scale=0.2;
    
  var ground1=createSprite(300,400,200,10);
  ground1.addImage(platform1);
  ground1.scale=0.2; 
  
  var ground2=createSprite(530,250,200,10);
  ground2.addImage(platform2);
  ground2.scale=0.2; 
  
  var greenSwitch=createSprite(500,200,20,20);
  greenSwitch.addImage(openingSwitch);
  greenSwitch.scale=0.2;
  
  var closeDoor=createSprite(560,180,20,20);
  closeDoor.addImage(doorLocked);
  closeDoor.scale=0.2;

robot.visible=true;
  
 /* if (robot.isTouching(greenSwitch)){
    closedDoor.changeAnimation(openDoor);
  }*/ 
  
 /* if (robot.isTouching(openDoor)){
    gameState="page2";
  }*/

}

function Page2(){
  var ground2=createSprite(65,250,200,10);
    ground2.addImage(platform1);
    ground2.scale=0.2; 
  
    var ground=createSprite(550,550,200,10);
    ground.addImage(platform);
    ground.scale=0.2;
  
  lP1.visible=true;
    lP2.visible=true;
        
}

function Page3(){
   var ground=createSprite(45,550,200,10);
    ground.addImage(platform1);
    ground.scale=0.2;
  
    lP3.visible=true;
  // lP1.visible=true;
  
   var ground1=createSprite(530,150,200,10);
    ground1.addImage(platform1);
    ground1.scale=0.2;
  
  var ground2=createSprite(400,250,200,10);
    ground2.addImage(platform1);
    ground2.scale=0.2;
}

function Page4(){
  lP1.x=200;
  lP1.visible=true;
 
}

function Robot(){
  robot=createSprite(25,500,10,50);
  robot.addAnimation(run);
robot.visible=false;
}