var bg, backGround
var astronaut
var sleep, brush, gym, eat, drink, move


function preload(){
bg = loadImage("images/iss.png");
sleep = loadAnimation("images/sleep.png");
brush = loadAnimation("images/brush.png");
gym = loadAnimation("images/gym1.png", "images/gym2.png");
eat = loadAnimation("images/eat1.png","images/eat2.png");
drink = loadAnimation("images/drink1.png","images/drink2.png");
move = loadAnimation("images/move.png");
}




function setup() {
  createCanvas(600, 600);


 backGround = createSprite(300,300,200,200);
 backGround.addImage("background", bg);
 backGround.scale = 0.2;
 astronaut = createSprite(300,470,100,100);
 astronaut.addAnimation("sleeping",sleep);
 astronaut.scale = 0.1;
}

function draw() {
  background(200)

  if (keyDown("m")) {
    astronaut.addAnimation("moving",move)
    astronaut.changeAnimation("moving",move)

  }
  if (keyDown("UP_ARROW")) {
    astronaut.addAnimation("brushing",brush)
    astronaut.changeAnimation("brushing",brush)
  }
  if (keyDown("LEFT_ARROW")) {
    astronaut.addAnimation("gym",gym)
    astronaut.changeAnimation("gym",gym)
  }
  if (keyDown("RIGHT_ARROW")) {
    astronaut.addAnimation("eating",eat)
    astronaut.changeAnimation("eating",eat)
  }
  if (keyDown("DOWN_ARROW")) {
    astronaut.addAnimation("drinking",drink)
    astronaut.changeAnimation("drinking",drink)
  }


  drawSprites();
  stroke(255);
  fill(255);
  text("To move press m",10,30)
  text("To eat press right",10,40)
  text("To workout press left",10,50)
  text("To brush press up",10,60)
  text("To drink press down",10,70)
}