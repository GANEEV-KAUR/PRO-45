const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine, world;

var cloud;
var cardboard1,cardboard2,cardboard3,cardboard4, cardboard5,cardboard6,cardboard7,cardboard8, cardboard9,cardboard10,cardboard11,cardboard12, cardboard13,cardboard14,cardboard15,cardboard16, cardboard17,cardboard18,cardboard19,cardboard20, cardboard21,cardboar22,cardboard23,cardboard24,cardboard25,cardboard26,cardboard27,cardboard28, cardboard29,cardboard30,cardboard31,cardboard32;




function preload(){

   cloud = loadImage("cloudImage.jpg");

}

function setup(){
    engine = Engine.create();
    world = engine.world;

    createCanvas(800,800);
   
    //create drops
    cardboard1 = createSprite(36,100,70,15);
    cardboard1.shapeColor = "green";
    
    cardboard2 = createSprite(80,150,15,80);
    cardboard2.shapeColor = "green";
    
     cardboard3 = createSprite(120,200,80,15);
    cardboard3.shapeColor = "green";
    
     cardboard4 = createSprite(155,250,15,80);
    cardboard4.shapeColor = "green";
    
     cardboard5 = createSprite(200 , 300 ,85, 15 );
    cardboard5.shapeColor = "green";
    
     cardboard6 = createSprite(300, 35, 15, 60);
    cardboard6.shapeColor = "green";
    
    cardboard7 = createSprite(250 , 70, 80, 15);
    cardboard7.shapeColor = "green";
    
    cardboard8 = createSprite(200, 100, 15,60 );
    cardboard8.shapeColor = "green";
    
    cardboard9 = createSprite(250, 340, 15, 80 );
    cardboard9.shapeColor = "green";
    
   cardboard10 = createSprite(300 , 380, 80,15);
    cardboard10.shapeColor = "green";
    
     cardboard11 = createSprite(350 , 70, 80, 15);
    cardboard11.shapeColor = "green";
    
    cardboard12 = createSprite(400 , 110, 15, 80);
    cardboard12.shapeColor = "green";
    
     cardboard13 = createSprite(350 , 150, 80, 15);
    cardboard13.shapeColor = "green";
    
    cardboard14 = createSprite(300 , 180, 15, 60);
    cardboard14.shapeColor = "green";
    
     cardboard15 = createSprite(270 , 220, 50, 15);
    cardboard15.shapeColor = "green";
    
     cardboard16 = createSprite(140 , 240, 15, 20);
    cardboard16.shapeColor = "green";
    
     /*cardboard17 = createSprite(196 , 259, 130, 15);
    cardboard17.shapeColor = "green";
    
    cardboard18 = createSprite(255 , 235, 15, 30);
    cardboard18.shapeColor = "green";
    
     cardboard19 = createSprite(302 , 230, 75, 15);
    cardboard19.shapeColor = "green";
    
     cardboard20 = createSprite(349 , 238, 15, 90);
    cardboard20.shapeColor = "green";
    
     cardboard21 = createSprite(348 , 293, 95, 15);
    cardboard21.shapeColor = "green";
    
     cardboard22 = createSprite(330 , 367, 15, 78);
    cardboard22.shapeColor = "green";
    
     cardboard23 = createSprite(282 , 360, 75, 15);
    cardboard23.shapeColor = "green";
    
     cardboard24 = createSprite(59 ,350, 15, 75);
    cardboard24.shapeColor = "green";
    
    cardboard25 = createSprite(250 , 150, 15, 75);
    cardboard25.shapeColor = "green";
    
     cardboard26 = createSprite(28 , 350, 45, 15);
    cardboard26.shapeColor = "green";
    
     cardboard27 = createSprite(135 , 334, 15, 60);
    cardboard27.shapeColor = "green";
    
    cardboard28 = createSprite(97 , 340, 57,15);
    cardboard28.shapeColor = "green";
    
     cardboard29 = createSprite(200 , 308, 15, 80);
    cardboard29.shapeColor = "green";
    
     cardboard30 = createSprite(35 , 240, 60, 15);
    cardboard30.shapeColor = "green";
    
     cardboard31 = createSprite( 75, 240, 15, 60);
    cardboard31.shapeColor = "green";
    
    cardboard32 = createSprite(250, 298, 15, 57);
    cardboard32.shapeColor = "green";*/
    
    
}

function draw(){
    Engine.update(engine);
    background(cloud); 

   
    
   

    drawSprites();
}   

