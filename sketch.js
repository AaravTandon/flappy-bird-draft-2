var bird , bg;
var ground;
var pipes ;

var PLAY = 1;
var END = 0;
var gameState = PLAY;
var gameOver; 


function preload (){
bg = loadImage ("images/bg img flappy bird.png");
birdimg = loadImage ("images/flappy bird 2.png");

groundimg2 = loadAnimation ("images/groundEdited1.png","images/groundEdited2.png");
}

function setup (){
    createCanvas (400,400);
    bird = createSprite (200,250,20,20);
    bird.addImage ("flappyBird", birdimg);
    bird.scale = 0.06;


    ground2 = createSprite (400,380,400,5);
    ground2.addAnimation ("ground2", groundimg2);
    ground2.scale = 0.3;
    ground2.velocityX = -4;
    ground2.x = ground2.width/2;

   pipes = new pipe (); 
}

function draw (){
background(bg);

if (keyDown ('space')){
    bird.velocityY = -5;
}



if (ground2.x < 0){
    ground2.x = ground2.width/2;
}

if (bird.y > height){
    bird.y = height;
    bird.velocityY = -2;
}

if (bird.y< 0){
    bird.y = 0;
    bird.velocityY = 0;
}


bird.velocityY = bird.velocityY + 0.6;

/*pipes.push ( new pipe());
for  (var i = 0; i < pipes.length ; i++){
    pipes [i].show;
    pipes[i].update;
}*/

pipe ();


drawSprites ();
}

function pipe (){
    if (frameCount % 60 ===0){
        var pipeTop  = createSprite (400,10,30,Math.round (random(150,200)));
        pipeTop.shapeColor = "green";
        var pipeBot = createSprite (400,370,30,Math.round(random(390,210)));
        pipeBot.shapeColor = "green";
        
        pipeTop.velocityX = -3;
        pipeBot.velocityX = -3;

        console.log (pipeBot.depth);

        pipeBot.depth = ground2.depth-1;
        
        pipeTop.lifetime = 134;
        pipeBot.lifetime = 134;

    }


}



