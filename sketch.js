var value;

function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(400, 200, 50, 100);
  movingrect=createSprite(400,200,100,50);

  fixedRect1 = createSprite(100,200,50,100);
  fixedRect2 = createSprite(200,200,50,100);
  fixedRect3 = createSprite(300,200,50,100);
  fixedRect4 = createSprite(400,200,50,100);

  fixedrect.shapeColor="red";
  movingrect.shapeColor="red";

  fixedRect1.shapeColor="red";
  fixedRect2.shapeColor="red";
  fixedRect3.shapeColor="red";
  fixedRect4.shapeColor="red";

  toprect=createSprite(100,100,50,100);
  bottomrect=createSprite(100,300,50,100);
  toprect.shapeColor="orange";
  bottomrect.shapeColor="yellow";
  toprect.velocityY=+2;
  bottomrect.velocityY=-2;

  left=createSprite(300,100,100,50);
  right=createSprite(600,100,100,50);
  left.shapeColor="green";
  right.shapeColor="blue";
  left.velocityX=+2;
  right.velocityX=-2;


}



function draw() {
  background(0);  

  movingrect.x=mouseX;
  movingrect.y=mouseY;

  value = collide(movingrect, fixedRect2);

  if(value === true){
    fixedRect2.shapeColor="yellow";
    movingrect.shapeColor="yellow";
  }
  else{
    fixedRect2.shapeColor="red";
    movingrect.shapeColor="red";
  }
   bounceoff(left,right);

  drawSprites();
}