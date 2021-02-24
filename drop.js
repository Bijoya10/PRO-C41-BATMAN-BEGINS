class Drop{
    constructor(){
        var options={
            isStatic:false,
            friction:0
        }
        this.radius=1.5
        this.body=Bodies.circle(random(0,width),random(0,height),this.radius,options)
        World.add(world,this.body)
    }
    updateY(){
        if(this.body.position.y>570){
            Matter.Body.setPosition(this.body,{x:random(0,width),y:random(0,height/2)})
        }
    }
    display(){
        push()
        fill("blue")
        ellipseMode(RADIUS)
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius)
        pop()
    }
}