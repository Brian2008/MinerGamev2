
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var player,playerImage
var pickaxe,pickaxeImage
var stone,stoneGroup,stoneImage
var gold,goldImage

function preload()
{
	playerImage=loadImage("MyGame/Miner.png")
	stoneImage=loadImage("MyGame/Stone.png")
	goldImage=loadImage("MyGame/GoldBlock.png")
}

function setup() {
	createCanvas(1000, 1000);


	engine = Engine.create();
	world = engine.world;
	player=createSprite(500,900,20,20);
	player.addImage(playerImage)
	player.scale=0.25
	pickaxe = new Pickaxe(100,100)
	gold=createSprite(500,100,50,50)
	gold.addImage(goldImage)
	gold.scale=0.2

	for (i = 0; i < 1200; i+=50) {
		stone=createSprite(i,200,50,50)
		stone.addImage(stoneImage)
		stone.scale=0.15
	}

	for (x = 0; x < 1200; x+=50) {
		stone=createSprite(x,300,50,50)
		stone.addImage(stoneImage)
		stone.scale=0.15
	} 

	for (a = 0; a < 1200; a+=50) {
		stone=createSprite(a,400,50,50)
		stone.addImage(stoneImage)
		stone.scale=0.15
	} 
	
	for (b = 0; b < 1200; b+=50) {
		stone=createSprite(b,500,50,50)
		stone.addImage(stoneImage)
		stone.scale=0.15
	}

	for (c = 0; c < 1200; c+=50) {
		stone=createSprite(c,600,50,50)
		stone.addImage(stoneImage)
		stone.scale=0.15
	} 

	for (d = 0; d < 1200; d+=50) {
		stone=createSprite(d,700,50,50)
		stone.addImage(stoneImage)
		stone.scale=0.15
	} 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  if(keyDown(RIGHT_ARROW)){
	player.x=player.x+10
  }
  if(keyDown(LEFT_ARROW)){
	player.x=player.x-10
  }

  pickaxe.display();
  drawSprites();

}
function keyPressed(){
	if(keyCode===32){
		Body.setStatic(pickaxe.body,false)
	}
}



