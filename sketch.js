//Creating variable Canvas,Blocks,Ball,Edges,music.
var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

//to preload music
function preload(){
music=loadSound("music.mp3");
}

function setup(){
    //create canvas
    canvas = createCanvas(800,600);

    //Creating Block1 sprite.
    block1 = createSprite(100,580,185,30);
    block1.shapeColor = "blue";

    //Creating Block2 sprite.
    block2 = createSprite(295,580,185,30);
    block2.shapeColor = "orange";

    //Creating Block3 sprite.
    block3 = createSprite(500,580,185,30);
    block3.shapeColor = "red";

    //Creating Block4 sprite.
    block4 = createSprite(700,580,185,30);
    block4.shapeColor = "green";

    //Creating ball sprite.
    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    //Adding velocity to the ball.
    ball.velocityX = 5;
    ball.velocityY = 5;

}

function draw() {
    //Background.
    background(rgb(169,169,169));
    
    //Creating Edges of the canvas.
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    
    //code to bounce off ball from the block1 
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "blue";
        music.play();
    }

    //code to bounce off ball from the block2
    if(block2.isTouching(ball)&& ball.bounceOff(block2)){
        ball.shapeColor = "orange";
        ball.velocityX = 0;
        ball.velocityY = 0;
        music.stop();
    }
    //code to bounce off ball from the block3
    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = "red";
        music.play();
    }

    //code to bounce off ball from the block4
    if(block4.isTouching(ball) && ball.bounceOff(block4)){
        ball.shapeColor = "green";
        music.play();
    }
    
    //To draw sprites.
    drawSprites();
}
