class Mango {
    constructor(x,y,radius){
        var options = {
            isStatic : true,
            friction : 1,
            restitution : 0.8
        }
        this.x=x;
        this.y=y;
        this.r = radius;
        this.body = Bodies.circle(this.x,this.y,this.r,options);
        this.image = loadImage("mango.png")
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        ellipseMode(CENTER);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r, this.r);
        pop();
    }
}