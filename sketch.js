var sprite

function setup() {
  createCanvas(400,600);
  sprite = createSprite(100,200,20,20);
  
}

function draw() 
{
  background("yellow");
  drawSprites();
  if(keyDown("UP_ARROW")){
    sprite.y += -3;
  }

}




