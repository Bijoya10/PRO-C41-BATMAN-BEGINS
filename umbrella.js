class Umbrella{
    constructor(){
        var options={
            isStatic:true,
            friction:0
        }
        
        this.body=Bodies.circle(200,355,100,options)
        this.radius=400
        this.image8=loadImage("walking/walking_1.png")
        this.image7=loadImage("walking/walking_2.png")
        this.image6=loadImage("walking/walking_3.png")
        this.image5=loadImage("walking/walking_4.png")
        this.image4=loadImage("walking/walking_5.png")
        this.image3=loadImage("walking/walking_6.png")
        this.image2=loadImage("walking/walking_7.png")
        this.image1=loadImage("walking/walking_8.png")
        World.add(world,this.body)
        this.choice=1
    }

    display(){
        push()
        fill("blue")
        imageMode(CENTER)

        this.choice=Math.floor((frameCount%40)/5)
        switch (this.choice) {
            case 0:
              image(this.image1, this.body.position.x - 14, this.body.position.y + 58, this.radius, this.radius)
              break;
            case 1:
              image(this.image2, this.body.position.x - 14, this.body.position.y + 58, this.radius, this.radius)
              break;
            case 2:
              image(this.image3, this.body.position.x - 14, this.body.position.y + 58, this.radius, this.radius)
              break;
            case 3:
              image(this.image4, this.body.position.x - 14, this.body.position.y + 58, this.radius, this.radius)
              break;
            case 4:
              image(this.image5, this.body.position.x - 14, this.body.position.y + 58, this.radius, this.radius)
              break;
            case 5:
              image(this.image6, this.body.position.x - 14, this.body.position.y + 58, this.radius, this.radius)
              break;
            case 6:
              image(this.image7, this.body.position.x - 14, this.body.position.y + 58, this.radius, this.radius)
              break;
            case 7:
              image(this.image8, this.body.position.x - 14, this.body.position.y + 58, this.radius, this.radius)
              break;
            default:break;
        }
        pop()
    }
}