const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygon;
var score = 0;
var r = 0;
var g = 0;
var b = 0;

function preload(){
  getTime();
}

function setup() {
  createCanvas(1000,400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,390,width,20);
  stand1 = new Ground(455,290,250,10);
  stand2 = new Ground(780,190,200,10);

  //blocks on stand1
  //level1
  block1 = new Box(365,265,30,40,rgb(135,206,234));
  block2 = new Box(395,265,30,40,rgb(135,206,234));
  block3 = new Box(425,265,30,40,rgb(135,206,234));
  block4 = new Box(455,265,30,40,rgb(135,206,234));
  block5 = new Box(485,265,30,40,rgb(135,206,234));
  block6 = new Box(515,265,30,40,rgb(135,206,234));
  block7 = new Box(545,265,30,40,rgb(135,206,234));
  //level2
  block8 = new Box(395,225,30,40,rgb(233,175,186));
  block9 = new Box(425,225,30,40,rgb(233,175,186));
  block10 = new Box(455,225,30,40,rgb(233,175,186));
  block11 = new Box(485,225,30,40,rgb(233,175,186));
  block12 = new Box(515,225,30,40,rgb(233,175,186));
  //level3
  block13 = new Box(425,185,30,40,rgb(59,210,195));
  block14 = new Box(455,185,30,40,rgb(59,210,195));
  block15 = new Box(485,185,30,40,rgb(59,210,195));
  //level4
  block16 = new Box(455,145,30,40,rgb(113,112,113));

  //blocks on stand2
  //level1
  block17 = new Box(720,165,30,40,rgb(135,206,234));
  block18 = new Box(750,165,30,40,rgb(135,206,234));
  block19 = new Box(780,165,30,40,rgb(135,206,234));
  block20 = new Box(810,165,30,40,rgb(135,206,234));
  block21 = new Box(840,165,30,40,rgb(135,206,234));
  //level2
  block22 = new Box(750,125,30,40,rgb(59,210,195));
  block23 = new Box(780,125,30,40,rgb(59,210,195));
  block24 = new Box(810,125,30,40,rgb(59,210,195));
  //level3
  block25 = new Box(780,85,30,40,rgb(233,175,186));

  //polygon holder with slings
  polygon = new Polygon(100,200,17);
  launcher = new SlingShot(polygon.body,{x:100,y:200});
}

function draw() {
  background(r,g,b); 
  Engine.update(engine);

  push();
  fill("white");
  textSize(21)
  stroke("black");
  strokeWeight(3);
  text("Drag the Hexagonal Stone to destroy the blocks",25,30);
  pop();

  push();
  fill(250,240,250)
  textSize(16);
  stroke("black");
  strokeWeight(3);
  text("Press SPACE to get a Second Chance to Play!!",650,370);
  pop();

  text(mouseX+" , "+mouseY,50,300);

  push();
  fill("white");
  textSize(21)
  stroke("black");
  strokeWeight(3);
  text("Score: "+score,860,40);
  pop();
  //calling function score for blocks on stand1
  //level1
  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  //level2
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  //level3
  block13.score();
  block14.score();
  block15.score();
  //level4
  block16.score();
  //calling function score for displaying blocks on stand2
  //level1
  block17.score();
  block18.score();
  block19.score();
  block20.score();
  block21.score();
  //level2
  block22.score();
  block23.score();
  block24.score();
  //level3
  block25.score();

  ground.display();
  stand1.display();
  stand2.display();

  //displaying blocks on stand1
  //level1
  block1.display();
  
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  //level2
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  //level3
  block13.display();
  block14.display();
  block15.display();
  //level4
  block16.display();

  //displaying blocks on stand2
  //level1
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  //level2
  block22.display();
  block23.display();
  block24.display();
  //level3
  block25.display();

  polygon.display();
  launcher.display();

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  launcher.fly();
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(polygon.body,{x:100,y:200});
    console.log("keyPressed")
    launcher.attach(polygon.body);
  }
}

async function getTime(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
  var responseJson = await response.json();

  var datetime = responseJson.datetime;
  var time = datetime.slice(11,13);

  if(time>=06 && time<18){
      r = 255; g = 255; b = 0
  }else if(time>=18 && time<=23){
      r = 0; g = 0; b = 90
  }else if(time>=0 && time<=06){
      r = 0; g = 0; b = 90
  }
}