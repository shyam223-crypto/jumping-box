var canvas;
var music;
var redBox,blueBox,greenBox,pinkBox
var box
var edges

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
redBox=createSprite(40,590,200,25)
redBox.shapeColor = "red"
blueBox=createSprite(250,590,200,25)
blueBox.shapeColor="blue"
greenBox=createSprite(460,590,200,25)
greenBox.shapeColor="green"
pinkBox=createSprite(675,590,200,25)
pinkBox.shapeColor="pink"


    //create box sprite and give velocity
    box=createSprite(random(60,750),10,40,40)
    box.velocityY=10
    box.velocityX=3

}

function draw() {
    background(rgb(169,169,169));

    //create edgeSprite
   edges= createEdgeSprites();
    box.bounceOff(edges);




    //add condition to check if box touching surface and make it box
    if(box.isTouching(redBox)){
        box.bounceOff(redBox)
        box.shapeColor="red"
    }
    if(box.isTouching(pinkBox)){
        box.velocityY=0
        box.velocityX=0
        music.stop()
      box.bounceOff(pinkBox)
        box.shapeColor="pink"
    }
    if(box.isTouching(blueBox)){
        music.play();
        box.shapeColor="blue"
        box.bounceOff(blueBox)
       
    }
    if(box.isTouching(greenBox)){
        box.bounceOff(greenBox)
        box.shapeColor="green"
    }
    drawSprites()
}
