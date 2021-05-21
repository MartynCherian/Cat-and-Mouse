
function preload() {
    //load the images here


gardenImage = loadImage("images/garden.png");
catImage1 = loadAnimation ("images/cat1.png");
catImage2 =  loadAnimation ("images/cat2.png","images/cat3.png");
catImage3 = loadAnimation ("images/cat4.png");
mouseImage1 = loadAnimation ("images/mouse1.png");
mouseImage2 =  loadAnimation ("images/mouse2.png","images/mouse3.png");
mouseImage3 = loadAnimation ("images/mouse4.png");
}

function setup(){
    createCanvas(1000,600);
    //create tom and jerry sprites here
cat = createSprite(800,500,50,50);
cat.addAnimation ("catSitting",catImage1);
cat.addAnimation ("catStanding",catImage2);
cat.addAnimation ("catCollide",catImage3);
mouse = createSprite (100,500,50,50);
mouse.addAnimation ("mouseSitting",mouseImage1);
mouse.addAnimation("mouseStanding",mouseImage2);
mouse.addAnimation("mouseCollide",mouseImage3);
cat.scale = (0.2)
mouse.scale = 0.2
}

function draw() {
    background(gardenImage);
    //Write condition here to evalute if tom and jerry collide
    if (cat.x - mouse.x <= (cat.width - mouse.width )/2){
        mouse.changeAnimation ("mouseCollide");
        cat.changeAnimation ("catCollide");
        cat.velocityX = 0;
        cat.x = 200;
    }
drawSprites();
}


function keyPressed(){
if (keyCode == LEFT_ARROW){
    mouse.changeAnimation ("mouseStanding");
    cat.changeAnimation ("catStanding");
    cat.velocityX = -3;
}
  //For moving and changing animation write code here


}
