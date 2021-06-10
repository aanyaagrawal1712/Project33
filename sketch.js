const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var backgroundImg;
var boyImg, boyImg2, boy;

var coldWind;

var snow = [];


function preload(){
  backgroundImg= loadImage("snow1.jpg");
  boyImg= loadImage("boy.png");
  boyImg2= loadImage("boy1.png");

  coldWind= loadSound("coldWind.mp3");
}


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  coldWind.play();

  boy= createSprite(600, 200, 50, 50);
  boy.addImage(boyImg);
  boy.scale=0.1;
  


  for(var a=400; a<=width/2; a=a+10){
    snow.push(new Snow(a,-50,70,70));
  }

}


function draw() {
  background(backgroundImg);  
  Engine.update(engine);

  if(frameCount%50===0){
    snow.push(new Snow(random(10,800),70,70));
  }
  for (var a = 0; a < snow.length; a++) {
    snow[a].display();
  }


  drawSprites();

}


function keyPressed(){
  
  if(keyCode===LEFT_ARROW){
    boy.x= boy.x-15;
    boy.addImage(boyImg);
  }
  if(keyCode===RIGHT_ARROW){
    boy.x= boy.x+15;
    boy.addImage(boyImg2);
  }
}