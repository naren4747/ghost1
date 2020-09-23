var back,backimg
var door,doorimg,doorGroup
var climber,climberimg,climberGroup
var ghost,ghostimg
var gamestate="play"
var spooky







function preload(){

  backimg = loadImage("tower.png")
  doorimg = loadImage("door.png")
  climberimg = loadImage("climber.png")
  ghostimg = loadImage("ghost-standing.png")
  spooky = loadSound("spooky.wav")
   
}

function setup(){

 createCanvas(600,600)
  back = createSprite(300,300,600,600)
  back.addImage(backimg)
  

  ghost = createSprite(200,200)
  ghost.addImage(ghostimg)
  ghost.scale=0.3
  
  climberGroup=new Group()
  doorGroup=new Group()

  spooky.loop()

}


function draw(){

  background (0)
  drawSprites()
  if (gamestate==="play"){
  
  
  back.velocityY=2
  if (back.y>600){
  
    back.y=300
    
  }
  if(keyDown("space")){
  
  ghost.velocityY=-10
    
 
  }
 if(keyDown("left_arrow")){
      ghost.x = ghost.x - 3;
    }
    
    if(keyDown("right_arrow")){
      ghost.x = ghost.x + 3;
    }
    if (ghost.isTouching(climberGroup)){
    
    gamestate = "end"
      
    }
    createdoors()
  }
  if(gamestate==="end"){
  ghost.destroy()
    climberGroup.destroyEach()
    doorGroup.destroyEach()
    back.destroy()
    stroke("red")
    fill("black")
    textSize(70)
    text("Gameover",180,300)
    
  
  
  }
  ghost.velocityY=ghost.velocityY+0.5
    
  
 

}
function createdoors(){

  if(frameCount%250===0){
  door = createSprite(random(100,500),50,20,20)
  climber = createSprite(door.x,115)
    climber.addImage(climberimg)
    climber.velocityY=2
    climber.lifetime=300
  door.addImage(doorimg)
  door.velocityY=2;
  door.lifetime = 300;
    ghost.depth=door.depth
    climber.depth=ghost.depth
  ghost.depth = ghost.depth+1
    doorGroup.add(door)
    climberGroup.add(climber)
  }


}