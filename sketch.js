var fixedRect,movingRect;
var gameObject1,gameObject2,ganeObject3;
function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(200,200,50,80);
  fixedRect.shapeColor="green";
  fixedRect.debug=true;
  movingRect=createSprite(400,200,80,30);
  movingRect.shapeColor="green";
  movingRect.debug=true;
  gameObject1=createSprite(100,100,50,50);
  gameObject1.shapeColor="green";
  gameObject2=createSprite(200,100,50,50);
  gameObject2.shapeColor="green";
  gameObject3=createSprite(300,100,50,50);
  gameObject3.shapeColor="green";
  fixedRect.velocityX=1;
  movingRect.velocityX=-1;

  
}

function draw() {
  background(0); 
  //movingRect.x=World.mouseX;
  //movingRect.y=World.mouseY;
  if(isTouching(movingRect,gameObject2)){
    gameObject2.shapeColor="blue";
    movingRect.shapeColor="blue"
  }
  else{
    gameObject2.shapeColor="green";
    movingRect.shapeColor="green"

    }
    bounceOff(fixedRect,movingRect)
  
  drawSprites(); 
  
}

