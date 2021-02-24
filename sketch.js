const Bodies=Matter.Bodies,Engine=Matter.Engine,World=Matter.World

var engine,world;
var drops=[]
var thunder1,thunder2,thunder3,thunder4,choice=0,umbrella

function preload(){
    thunder1=loadImage("thunder/1.png")
    thunder2=loadImage("thunder/2.png")
    thunder3=loadImage("thunder/3.png")
    thunder4=loadImage("thunder/4.png")
}

function setup(){
   createCanvas(400,600)

   engine=Engine.create()
   world=engine.world

   ground=Bodies.rectangle(200,590,400,20,{isStatic:true})
   World.add(world,ground);

   umbrella=new Umbrella()

   for(var i=0; i<500;i++){
       drops.push(new Drop())
   }

}

function draw(){
    background(0)
    Engine.update(engine);
    
    rectMode(CENTER)
    rect(ground.position.x,ground.position.y,400,20)

    umbrella.display()

    if(frameCount%100===0){
        choice=Math.round(random(1,4))
        imageMode(CENTER)
        switch(choice){
            case 1: image(thunder1,random(100,200),100,300,400)
                    choice=0;
                    break;
            case 2: image(thunder2,random(100,200),100,300,400)
                    choice=0;
                    break;
            case 3: image(thunder3,random(100,200),100,300,400)
                    choice=0;
                    break;
            case 4: image(thunder4,random(100,200),100,300,400)
                    choice=0;
                    break;
            default:break;
        }
    }

    for(var i=0; i<500;i++){
        drops[i].display()
        drops[i].updateY()
    }

}   

