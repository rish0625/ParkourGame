var player;
var platformUp, platformDown, platformOne;
var platformGroup = [];

var yCoord = 450;

function setup() {
    createCanvas(1500,700);
    
    player = createSprite(200, 300, 35, 35);
    player.shapeColor = "black";

    platformOne = createSprite(200, yCoord, 180, 40);
    platformOne.shapeColor = "white";
}

function draw() {
  background("grey");

  player.velocityY = player.velocityY + 0.8;
  player.collide(platformOne);

    if(keyDown("up")){
        player.velocityY = - 10;
    }
    if(keyDown("left")){
        player.velocityX = - 5;
    }
    if(keyDown("right")){
        player.velocityX = + 5;
    }
    if(keyDown("down")){
        player.velocityX = 0;
    }

    

    platforms();
    drawSprites();
    console.log("hello");
    text("Use arrow keys to move, and down to stop. :)", 750, 500);
}

function platforms(){
    for(var i = 0; i > 5; i+1){
        var randI = Math.round(random(0, 700));
        var platform = createSprite(1500, randI, 180, 40);
        platform.velocityX = -30;
        platform.lifetime = 1500;
    }
}



function pms() {
    for(var i = 400; i < 1536; i+200){
        var randI = Math.round(random(yCoord - 20, yCoord + 20));
        platform = createSprite(i, randI, 180, 40);

        yCoord = randI;
        // platformGroup.push(platform);
    }
}