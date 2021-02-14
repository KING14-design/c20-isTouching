var box1
var box2
function setup() {
  createCanvas(800,400);
  box1=createSprite(400, 200, 20, 20);
  box1.shapeColor="red"
  box2=createSprite(300,200,70,70)
  box2.shapeColor="red"
  box1.debug=true
  box2.debug=true
}

function draw() {
  background(0); 
  box1.x=mouseX;
  box1.y=mouseY; 
  drawSprites();
  if (box1.x - box2.x<box1.width/2+box2.width/2&&
    box2.x - box1.x<box1.width/2+box2.width/2&&
    box1.y-box2.y<box1.height/2+box2.height/2&&
    box2.y-box1.y<box1.height/2+box2.height/2){
    box1.shapeColor="green"
    box2.shapeColor="green"
  }
  else{
    box1.shapeColor="red"
    box2.shapeColor="red"
  }
}